<?php
namespace Domain\Sharing\Controllers;

use Domain\Zipping\Models\Zip;
use Domain\Sharing\Models\Share;
use Support\Services\HelperService;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;
use Domain\Files\Models\File as UserFile;

class FileSharedAccessController extends Controller
{
    public function __construct(
        private HelperService $helper,
    ) {
    }

    /**
     * Get generated zip for guest
     *
     * @param $id
     * @param $token
     * @return \Symfony\Component\HttpFoundation\StreamedResponse
     */
    public function get_zip_public($id, $token)
    {
        $disk = Storage::disk('local');

        $zip = Zip::where('id', $id)
            ->where('shared_token', $token)
            ->first();

        $zip
            ->user
            ->recordDownload(
                $disk->size("zip/$zip->basename")
            );

        return $disk
            ->download("zip/$zip->basename", $zip->basename, [
                'Content-Type'        => 'application/zip',
                'Content-Length'      => $disk->size("zip/$zip->basename"),
                'Accept-Ranges'       => 'bytes',
                'Content-Range'       => 'bytes 0-600/' . $disk->size("zip/$zip->basename"),
                'Content-Disposition' => 'attachment; filename=' . $zip->basename,
            ]);
    }

    /**
     * Get file public
     *
     * @param $filename
     * @param Share $shared
     * @return mixed
     */
    public function get_file_public($filename, Share $shared)
    {
        // Check ability to access protected share files
        $this->helper->check_protected_share_record($shared);

        // Get file record
        $file = UserFile::where('user_id', $shared->user_id)
            ->where('basename', $filename)
            ->firstOrFail();

        // Check file access
        $this->helper->check_guest_access_to_shared_items($shared, $file);

        // Store user download size
        $shared
            ->user
            ->recordDownload(
                (int) $file->getRawOriginal('filesize')
            );

        return $this->helper->download_file($file, $shared->user_id);
    }

    /**
     * Get public image thumbnail
     *
     * @param $filename
     * @param Share $shared
     * @return mixed
     */
    public function get_thumbnail_public($filename, Share $shared)
    {
        // Check ability to access protected share files
        $this->helper->check_protected_share_record($shared);

        // Get file record
        $file = UserFile::where('user_id', $shared->user_id)
            ->where('thumbnail', $filename)
            ->firstOrFail();

        // Check file access
        $this->helper->check_guest_access_to_shared_items($shared, $file);

        // Store user download size
        $shared
            ->user
            ->recordDownload(
                (int) $file->getRawOriginal('filesize')
            );

        return $this->helper->download_thumbnail_file($file, $shared->user_id);
    }
}
