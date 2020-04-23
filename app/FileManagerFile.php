<?php

namespace App;

use ByteUnits\Metric;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
use Laravel\Scout\Searchable;
use TeamTNT\TNTSearch\Indexer\TNTIndexer;
use \Illuminate\Database\Eloquent\SoftDeletes;

class FileManagerFile extends Model
{
    use Searchable, SoftDeletes;


    protected $guarded = [
        'id'
    ];

    protected $appends = [
        'file_url'
    ];

    /**
     * Format created at date
     *
     * @return string
     */
    public function getCreatedAtAttribute()
    {
        return format_date($this->attributes['created_at'], __('vuefilemanager.time'));
    }

    /**
     * Form\a\t created at date reformat
     *
     * @return string
     */
    public function getDeletedAtAttribute()
    {
        if (! $this->attributes['deleted_at']) return null;

        return format_date($this->attributes['deleted_at'], __('vuefilemanager.time'));
    }

    /**
     * Format filesize
     *
     * @param $value
     * @return string
     */
    public function getFilesizeAttribute()
    {
        return Metric::bytes($this->attributes['filesize'])->format();
    }

    /**
     * Format thumbnail url
     *
     * @param $value
     * @return string
     */
    public function getThumbnailAttribute()
    {
        return $this->attributes['thumbnail'] ? route('thumbnail', ['name' => $this->attributes['thumbnail']]) : null;
    }

    /**
     * Format file url
     *
     * @param $value
     * @return string
     */
    public function getFileUrlAttribute()
    {
        return route('file', ['name' => $this->attributes['basename']]);
    }

    /**
     * Index file
     *
     * @return array
     */
    public function toSearchableArray()
    {
        $array = $this->toArray();
        $name = Str::slug($array['name'], ' ');

        return [
            'id'         => $this->id,
            'name'       => $name,
            'nameNgrams' => utf8_encode((new TNTIndexer)->buildTrigrams(implode(', ', [$name]))),
        ];
    }

    /**
     * Get parent
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function parent()
    {
        return $this->belongsTo('App\FileManagerFolder', 'folder_id', 'unique_id');
    }

    /**
     * Get folder
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function folder()
    {
        return $this->hasOne('App\FileManagerFolder', 'unique_id', 'folder_id');
    }

    /**
     * Get sharing attributes
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function shared()
    {
        return $this->hasOne('App\Share', 'item_id', 'unique_id');
    }
}
