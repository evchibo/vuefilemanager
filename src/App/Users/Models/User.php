<?php

namespace App\Users\Models;

use ByteUnits\Metric;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Domain\Files\Models\File;
use Domain\Folders\Models\Folder;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Support\Collection;
use Database\Factories\UserFactory;
use Domain\Settings\Models\Setting;
use Kyslik\ColumnSortable\Sortable;
use Illuminate\Support\Facades\Storage;
use Illuminate\Notifications\Notifiable;
use App\Users\Notifications\ResetPassword;
use Laravel\Fortify\TwoFactorAuthenticatable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use VueFileManager\Subscription\App\User\Traits\Billable;

/**
 * @property string id
 * @property Setting settings
 * @property string email
 * @property mixed favouriteFolders
 * @property string role
 * @method static count()
 * @method static sortable(string[] $array)
 * @method static forceCreate(array $array)
 * @method static where(string $string, string $string1)
 * @method static create(array $array)
 * @method static find(mixed $email)
 */
class User extends Authenticatable implements MustVerifyEmail
{
    use TwoFactorAuthenticatable;
    use HasApiTokens;
    use Notifiable;
    use HasFactory;
    use Sortable;
    use Billable;

    protected $guarded = [
        'id',
        'role',
    ];

    protected $fillable = [
        'email',
        'password',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $casts = [
        'id'                => 'string',
        'email_verified_at' => 'datetime',
    ];

    protected $appends = [
        'usedCapacity',
        'storage',
    ];

    public $sortable = [
        'id',
        'name',
        'role',
        'created_at',
    ];

    public $incrementing = false;

    protected $keyType = 'string';

    protected static function newFactory(): UserFactory
    {
        return UserFactory::new();
    }

    /**
     * Get user used storage details
     */
    public function getStorageAttribute(): array
    {
        $is_storage_limit = get_settings('storage_limitation') ?? 1;

        if (!$is_storage_limit) {
            return [
                'used'           => $this->usedCapacity,
                'used_formatted' => Metric::bytes($this->usedCapacity)->format(),
            ];
        }

        return [
            'used'               => (float)get_storage_fill_percentage($this->usedCapacity, $this->limitations->max_storage_amount),
            'used_formatted'     => get_storage_fill_percentage($this->usedCapacity, $this->limitations->max_storage_amount) . '%',
            'capacity'           => $this->limitations->max_storage_amount,
            'capacity_formatted' => format_gigabytes($this->limitations->max_storage_amount),
        ];
    }

    // TODO: caching & refactoring
    public function accountLimitations(): array
    {
        $members = \DB::table('team_folder_members')
            ->where('user_id', $this->id)
            ->pluck('parent_id');

        $membersUse = \DB::table('team_folder_members')
            ->where('user_id', '!=', $this->id)
            ->whereIn('parent_id', $members)
            ->pluck('user_id')
            ->unique()
            ->count();

        return [
            'max_storage_amount' => [
                'use'        => Metric::bytes($this->usedCapacity)->format(),
                'total'      => format_gigabytes($this->limitations->max_storage_amount),
                'percentage' => (float)get_storage_fill_percentage($this->usedCapacity, $this->limitations->max_storage_amount),
            ],
            'max_team_members'   => [
                'use'        => $membersUse,
                'total'      => (int)$this->limitations->max_team_members,
                'percentage' => ($membersUse / $this->limitations->max_team_members) * 100,
            ],
        ];
    }

    /**
     * Get user used storage capacity in bytes
     */
    public function getUsedCapacityAttribute(): int
    {
        return DB::table('files')
            ->where('user_id', $this->id)
            ->sum('filesize');
    }

    /**
     * Get user full folder tree
     */
    public function getFolderTreeAttribute(): Collection
    {
        return Folder::with(['folders.shared', 'shared:token,id,item_id,permission,is_protected,expire_in'])
            ->where('parent_id')
            ->where('team_folder', false)
            ->where('user_id', $this->id)
            ->sortable()
            ->get();
    }

    public function settings(): HasOne
    {
        return $this->hasOne(UserSettings::class);
    }

    public function limitations(): HasOne
    {
        return $this->hasOne(UserLimitation::class);
    }

    /**
     * Get user favourites folder
     */
    public function favouriteFolders(): BelongsToMany
    {
        return $this->belongsToMany(Folder::class, 'favourite_folder', 'user_id', 'parent_id', 'id', 'id')
            ->where('team_folder', false);
    }

    /**
     * Get all user files
     */
    public function filesWithTrashed(): HasMany
    {
        return $this->hasMany(File::class)
            ->withTrashed();
    }

    /**
     * Get 5 latest uploads
     */
    public function latestUploads(): HasMany
    {
        return $this->hasMany(File::class)
            ->with([
                'parent:id,name',
                'shared:token,id,item_id,permission,is_protected,expire_in',
            ])
            ->take(40);
    }

    /**
     * Get all user files
     */
    public function files(): HasMany
    {
        return $this->hasMany(File::class);
    }

    /**
     * Send the password reset notification.
     */
    public function sendPasswordResetNotification($token): void
    {
        $this->notify(new ResetPassword($token));
    }

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($user) {
            $user->id = Str::uuid();

            // Create default limitations
            $user->limitations()->create([
                'max_storage_amount' => get_settings('default_storage_amount') ?? 1,
                'max_team_members'   => 3,
            ]);

            // Create user directory for his files
            Storage::makeDirectory("files/$user->id");
        });
    }
}
