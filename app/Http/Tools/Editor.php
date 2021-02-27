<?php

namespace App\Http\Tools;

use App;
use App\Models\Folder;
use App\Models\Share;
use App\File as UserFile;
use App\Http\Requests\FileFunctions\RenameItemRequest;
use App\Models\User;
use App\Models\Zip;
use Aws\Exception\MultipartUploadException;
use Aws\S3\MultipartUploader;
use Carbon\Carbon;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Intervention\Image\ImageManagerStatic as Image;
use League\Flysystem\FileNotFoundException;
use Madnest\Madzipper\Facades\Madzipper;
use Symfony\Component\HttpKernel\Exception\HttpException;


class Editor
{
    /**
     * Store folder icon
     *
     * @param $request
     * @param $id
     */
    public static function set_folder_icon($request, $id)
    {
        // Get folder
        $folder = Folder::find($id);

        // Set default folder icon
        if ($request->emoji === 'default') {
            $folder->update([
                'emoji' => null,
                'color' => null,
            ]);
        }

        // Set emoji
        if ($request->filled('emoji')) {
            $folder->update([
                'emoji' => $request->emoji,
                'color' => null,
            ]);
        }

        // Set color
        if ($request->filled('color')) {
            $folder->update([
                'emoji' => null,
                'color' => $request->color,
            ]);
        }
    }

    /**
     * Zip requested folder
     *
     * @param $unique_id
     * @param $shared
     * @return mixed
     * @throws \Illuminate\Contracts\Filesystem\FileNotFoundException
     */
    public static function zip_folder($unique_id, $shared = null)
    {
        // Get folder
        $requested_folder = Folder::with(['folders.files', 'files'])
            ->where('unique_id', $unique_id)
            ->where('user_id', Auth::id() ?? $shared->user_id)
            ->with('folders')
            ->first();

        $files = get_files_for_zip($requested_folder, collect([]));

        // Local storage instance
        $disk_local = Storage::disk('local');

        // Create zip directory
        if (!$disk_local->exists('zip')) {
            $disk_local->makeDirectory('zip');
        }

        // Move file to local storage
        if (!is_storage_driver('local')) {

            // Create temp directory
            if (!$disk_local->exists('temp')) {
                $disk_local->makeDirectory('temp');
            }

            foreach ($files as $file) {
                try {
                    $disk_local->put('temp/' . $file['basename'], Storage::get('file-manager/' . $file['basename']));
                } catch (FileNotFoundException $e) {
                    throw new HttpException(404, 'File not found');
                }
            }
        }

        // Get zip path
        $zip_name = Str::random(16) . '-' . Str::slug($requested_folder->name) . '.zip';
        $zip_path = 'zip/' . $zip_name;

        // Create zip
        $zip = Madzipper::make(storage_path() . '/app/' . $zip_path);

        // Get files folder on local storage drive
        $files_folder = is_storage_driver('local') ? 'file-manager' : 'temp';

        // Add files to zip
        foreach ($files as $file) {
            $zip->folder($file['folder_path'])->addString($file['name'], File::get(storage_path() . '/app/' . $files_folder . '/' . $file['basename']));
        }

        // Close zip
        $zip->close();

        // Delete temporary files
        if (!is_storage_driver('local')) {

            foreach ($files as $file) {
                $disk_local->delete('temp/' . $file['basename']);
            }
        }

        // Store zip record
        return Zip::create([
            'user_id'      => $shared->user_id ?? Auth::id(),
            'shared_token' => $shared->token ?? null,
            'basename'     => $zip_name,
        ]);
    }

    /**
     * Zip selected files, store it in /zip folder and retrieve zip record
     *
     * @param $files
     * @param null $shared
     * @return mixed
     * @throws \Illuminate\Contracts\Filesystem\FileNotFoundException
     */
    public static function zip_files($files, $shared = null)
    {
        // Local storage instance
        $disk_local = Storage::disk('local');

        // Create zip directory
        if (!$disk_local->exists('zip')) {
            $disk_local->makeDirectory('zip');
        }

        // Move file to local storage from external storage service
        if (!is_storage_driver('local')) {

            // Create temp directory
            if (!$disk_local->exists('temp')) {
                $disk_local->makeDirectory('temp');
            }

            foreach ($files as $file) {
                try {
                    $disk_local->put('temp/' . $file['basename'], Storage::get('file-manager/' . $file['basename']));
                } catch (FileNotFoundException $e) {
                    throw new HttpException(404, 'File not found');
                }
            }
        }

        // Get zip path
        $zip_name = Str::random(16) . '.zip';
        $zip_path = 'zip/' . $zip_name;

        // Create zip
        $zip = Madzipper::make(storage_path() . '/app/' . $zip_path);

        // Get files folder on local storage drive
        $files_directory = is_storage_driver('local') ? 'file-manager' : 'temp';

        // Add files to zip
        $files->each(function ($file) use ($zip, $files_directory) {
            $zip->addString($file['name'] . '.' . $file['mimetype'], File::get(storage_path() . '/app/' . $files_directory . '/' . $file['basename']));
        });

        // Close zip
        $zip->close();

        // Delete temporary files
        if (!is_storage_driver('local')) {

            $files->each(function ($file) use ($disk_local) {
                $disk_local->delete('temp/' . $file['basename']);
            });
        }

        // Store zip record
        return Zip::create([
            'user_id'      => $shared->user_id ?? Auth::id(),
            'shared_token' => $shared->token ?? null,
            'basename'     => $zip_name,
        ]);
    }

    /**
     * Create new directory
     *
     * @param $request
     * @param null $shared
     * @return Folder|\Illuminate\Database\Eloquent\Model
     */
    public static function create_folder($request, $shared = null)
    {
        // Get variables
        //$user_scope = is_null($shared) ? $request->user()->token()->scopes[0] : 'editor';
        $user_scope = is_null($shared) ? 'master' : 'editor';

        $name = $request->has('name') ? $request->input('name') : 'New Folder';
        $user_id = is_null($shared) ? Auth::id() : $shared->user_id;

        // Create folder
        $folder = Folder::create([
            'parent_id'  => $request->parent_id,
            'user_scope' => $user_scope,
            'user_id'    => $user_id,
            'type'       => 'folder',
            'name'       => $name,
            'icon_color' => isset($request->icon['color']) ? $request->icon['color'] : null,
            'icon_emoji' => isset($request->icon['emoji']) ? $request->icon['emoji'] : null,
        ]);

        // Return new folder
        return $folder;
    }

    /**
     * Rename item name
     *
     * @param RenameItemRequest $request
     * @param $unique_id
     * @param null $shared
     * @return \Illuminate\Database\Eloquent\Builder|\Illuminate\Database\Eloquent\Model
     * @throws \Exception
     */
    public static function rename_item($request, $unique_id, $shared = null)
    {
        // Get user id
        $user_id = is_null($shared) ? Auth::id() : $shared->user_id;

        // Get item
        $item = get_item($request->type, $unique_id, $user_id);

        // Rename item
        $item->update([
            'name' => $request->name
        ]);

        // Return updated item
        return $item;
    }

    /**
     * Delete file or folder
     *
     * @param $request
     * @param $unique_id
     * @param null $shared
     * @throws \Exception
     */
    public static function delete_item($file, $unique_id, $shared = null)
    {
        // Get user id
        $user = is_null($shared) ? Auth::user() : User::findOrFail($shared->user_id);

        // Delete folder
        if ($file['type'] === 'folder') {

            // Get folder
            $folder = Folder::withTrashed()
                ->with(['folders'])
                ->where('user_id', $user->id)
                ->where('unique_id', $unique_id)
                ->first();

            // Get folder shared record
            $shared = Share::where('user_id', $user->id)
                ->where('type', '=', 'folder')
                ->where('item_id', $unique_id)
                ->first();

            // Delete folder shared record
            if ($shared) {
                $shared->delete();
            }

            // Force delete children files
            if ($file['force_delete']) {

                // Get children folder ids
                $child_folders = filter_folders_ids($folder->trashed_folders, 'unique_id');

                // Get children files
                $files = UserFile::onlyTrashed()
                    ->where('user_id', $user->id)
                    ->whereIn('folder_id', Arr::flatten([$unique_id, $child_folders]))
                    ->get();

                // Remove all children files
                foreach ($files as $file) {

                    // Delete file
                    Storage::delete('/file-manager/' . $file->basename);

                    // Delete thumbnail if exist
                    if (!is_null($file->thumbnail)) Storage::delete('/file-manager/' . $file->getRawOriginal('thumbnail'));

                    // Delete file permanently
                    $file->forceDelete();
                }

                // Delete folder record
                $folder->forceDelete();
            }

            // Soft delete items
            if (!$file['force_delete']) {

                // Remove folder from user favourites
                $user->favourite_folders()->detach($unique_id);

                // Soft delete folder record
                $folder->delete();
            }
        }

        // Delete item
        if ($file['type'] !== 'folder') {

            // Get file
            $item = File::withTrashed()
                ->where('user_id', $user->id)
                ->where('unique_id', $unique_id)
                ->first();

            // Get folder shared record
            $shared = Share::where('user_id', $user->id)
                ->where('type', '=', 'file')
                ->where('item_id', $unique_id)
                ->first();

            // Delete file shared record
            if ($shared) {
                $shared->delete();
            }

            // Force delete file
            if ($file['force_delete']) {

                // Delete file
                Storage::delete('/file-manager/' . $item->basename);

                // Delete thumbnail if exist
                if ($item->thumbnail) Storage::delete('/file-manager/' . $item->getRawOriginal('thumbnail'));

                // Delete file permanently
                $item->forceDelete();
            }

            // Soft delete file
            if (!$file['force_delete']) {

                // Soft delete file
                $item->delete();
            }
        }
    }

    /**
     * Move folder or file to new location
     *
     * @param $request
     * @param $to_id
     */
    public static function move($request, $to_id)
    {
        foreach ($request->input('items') as $item) {

            // Move folder
            if ($item['type'] === 'folder') {

                Folder::find($item['id'])
                    ->update([
                        'parent_id' => $to_id
                    ]);

            }

            // Move file
            if ($item['type'] === 'file') {
                UserFile::find($item['id'])
                    ->update([
                        'folder_id' => $to_id
                    ]);
            }
        }
    }

    /**
     * Upload file
     *
     * @param $request
     * @param null $shared
     * @return File|\Illuminate\Database\Eloquent\Model
     * @throws \Exception
     */
    public static function upload($request, $shared = null)
    {
        // Get parent_id from request
        $file = $request->file('file');

        // Check or create directories
        self::check_directories(['chunks', 'file-manager']);

        // File name
        $user_file_name = basename('chunks/' . substr($file->getClientOriginalName(), 17), '.part');
        $disk_file_name = basename('chunks/' . $file->getClientOriginalName(), '.part');
        $temp_filename = $file->getClientOriginalName();

        // File Path
        $file_path = config('filesystems.disks.local.root') . '/chunks/' . $temp_filename;

        // Generate file
        File::append($file_path, $file->get());

        // Size of file
        $file_size = File::size($file_path);

        // Size of limit
        $limit = get_setting('upload_limit');

        // File size handling
        if ($limit && $file_size > format_bytes($limit)) abort(413);

        // If last then process file
        if ($request->boolean('is_last')) {

            $metadata = get_image_meta_data($file);

            $disk_local = Storage::disk('local');
            $unique_id = get_unique_id();

            // Get user data
            $user_scope = is_null($shared) ? $request->user()->token()->scopes[0] : 'editor';
            $user_id = is_null($shared) ? Auth::id() : $shared->user_id;

            // File Info
            $file_size = $disk_local->size('chunks/' . $temp_filename);
            $file_mimetype = $disk_local->mimeType('chunks/' . $temp_filename);

            // Check if user has enough space to upload file
            self::check_user_storage_capacity($user_id, $file_size, $temp_filename);

            // Create thumbnail
            $thumbnail = self::get_image_thumbnail('chunks/' . $temp_filename, $disk_file_name);

            // Move finished file from chunk to file-manager directory
            $disk_local->move('chunks/' . $temp_filename, 'file-manager/' . $disk_file_name);

            // Move files to external storage
            if (!is_storage_driver(['local'])) {

                // Clear failed uploads if exists
                self::clear_failed_files();

                // Move file to external storage service
                self::move_to_external_storage($disk_file_name, $thumbnail);
            }

            // Store file
            $options = [
                'mimetype'   => get_file_type_from_mimetype($file_mimetype),
                'type'       => get_file_type($file_mimetype),
                'folder_id'  => $request->parent_id,
                'metadata'   => $metadata,
                'name'       => $user_file_name,
                'unique_id'  => $unique_id,
                'basename'   => $disk_file_name,
                'user_scope' => $user_scope,
                'thumbnail'  => $thumbnail,
                'filesize'   => $file_size,
                'user_id'    => $user_id,
            ];

            // Store user upload size
            if ($request->user()) {

                // If upload a loged user
                $request->user()->record_upload($file_size);

            } else {

                // If upload guest
                User::find($shared->user_id)->record_upload($file_size);

            }

            // Return new file
            return UserFile::create($options);
        }
    }

    /**
     * Clear failed files
     */
    private static function clear_failed_files()
    {
        $local_disk = Storage::disk('local');

        // Get all files from storage
        $files = collect([
            $local_disk->allFiles('file-manager'),
            $local_disk->allFiles('chunks')
        ])->collapse();

        $files->each(function ($file) use ($local_disk) {

            // Get the file's last modification time.
            $last_modified = $local_disk->lastModified($file);

            // Get diffInHours
            $diff = Carbon::parse($last_modified)->diffInHours(Carbon::now());

            // Delete if file is in local storage more than 24 hours
            if ($diff > 24) {

                Log::info('Failed file or chunk ' . $file . ' deleted.');

                // Delete file from local storage
                $local_disk->delete($file);
            }
        });
    }

    /**
     * Move file to external storage if is set
     *
     * @param string $filename
     * @param string|null $thumbnail
     */
    private static function move_to_external_storage(string $filename, ?string $thumbnail): void
    {
        $disk_local = Storage::disk('local');

        foreach ([$filename, $thumbnail] as $file) {

            // Check if file exist
            if (!$file) continue;

            // Get file size
            $filesize = $disk_local->size('file-manager/' . $file);

            // If file is bigger than 5.2MB then run multipart upload
            if ($filesize > 5242880) {

                // Get driver
                $driver = \Storage::getDriver();

                // Get adapter
                $adapter = $driver->getAdapter();

                // Get client
                $client = $adapter->getClient();

                // Prepare the upload parameters.
                $uploader = new MultipartUploader($client, config('filesystems.disks.local.root') . '/file-manager/' . $file, [
                    'bucket' => $adapter->getBucket(),
                    'key'    => 'file-manager/' . $file
                ]);

                try {

                    // Upload content
                    $uploader->upload();

                } catch (MultipartUploadException $e) {

                    // Write error log
                    Log::error($e->getMessage());

                    // Delete file after error
                    $disk_local->delete('file-manager/' . $file);

                    throw new HttpException(409, $e->getMessage());
                }

            } else {

                // Stream file object to s3
                Storage::putFileAs('file-manager', config('filesystems.disks.local.root') . '/file-manager/' . $file, $file, 'private');
            }

            // Delete file after upload
            $disk_local->delete('file-manager/' . $file);
        }
    }

    /**
     * Check if directories 'chunks' and 'file-manager exist', if no, then create
     *
     * @param $directories
     */
    private static function check_directories($directories): void
    {
        foreach ($directories as $directory) {

            if (!Storage::disk('local')->exists($directory)) {
                Storage::disk('local')->makeDirectory($directory);
            }

            if (!is_storage_driver(['local'])) {
                if (!Storage::exists($directory)) {
                    Storage::makeDirectory($directory);
                }
            }
        }
    }

    /**
     * Create thumbnail for images
     *
     * @param string $file_path
     * @param string $filename
     * @param $file
     * @return string|null
     */
    private static function get_image_thumbnail(string $file_path, string $filename)
    {
        $local_disk = Storage::disk('local');

        // Create thumbnail from image
        if (in_array($local_disk->mimeType($file_path), ['image/gif', 'image/jpeg', 'image/jpg', 'image/png', 'image/webp'])) {

            // Get thumbnail name
            $thumbnail = 'thumbnail-' . $filename;

            // Create intervention image
            $image = Image::make(config('filesystems.disks.local.root') . '/' . $file_path)->orientate();

            // Resize image
            $image->resize(512, null, function ($constraint) {
                $constraint->aspectRatio();
            })->stream();

            // Store thumbnail to disk
            $local_disk->put('file-manager/' . $thumbnail, $image);
        }

        // Return thumbnail as svg file
        if ($local_disk->mimeType($file_path) === 'image/svg+xml') {

            $thumbnail = $filename;
        }

        return $thumbnail ?? null;
    }

    /**
     * Check if user has enough space to upload file
     *
     * @param $user_id
     * @param int $file_size
     * @param $temp_filename
     */
    private static function check_user_storage_capacity($user_id, int $file_size, $temp_filename): void
    {
        // Get user storage percentage and get storage_limitation setting
        $user_storage_used = user_storage_percentage($user_id, $file_size);
        $storage_limitation = get_setting('storage_limitation');

        // Check if user can upload
        if ($storage_limitation && $user_storage_used >= 100) {

            // Delete file
            Storage::disk('local')->delete('chunks/' . $temp_filename);

            // Abort uploading
            abort(423, 'You exceed your storage limit!');
        }
    }
}