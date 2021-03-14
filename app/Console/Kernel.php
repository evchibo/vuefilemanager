<?php

namespace App\Console;

use App\Console\Commands\SetupDevEnvironment;
use App\Services\SchedulerService;
use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;

class Kernel extends ConsoleKernel
{
    /**
     * The Artisan commands provided by your application.
     *
     * @var array
     */
    protected $commands = [
        SetupDevEnvironment::class,
    ];

    /**
     * Define the application's command schedule.
     *
     * @param \Illuminate\Console\Scheduling\Schedule $schedule
     * @return void
     */
    protected function schedule(Schedule $schedule)
    {
        $scheduler = app()->make(SchedulerService::class);

        $schedule->call(function () use ($scheduler) {
            $scheduler->delete_expired_shared_links();
        })->everyMinute();

        $schedule->call(function () use ($scheduler) {
            $scheduler->delete_old_zips();

            if (!is_storage_driver(['local'])) {
                $scheduler->delete_failed_files();
            }
        })->everySixHours();

        // Run queue jobs every minute
        $schedule->command('queue:work --tries=3')
            ->everyMinute()
            ->withoutOverlapping();
    }

    /**
     * Register the commands for the application.
     *
     * @return void
     */
    protected function commands()
    {
        $this->load(__DIR__ . '/Commands');

        require base_path('routes/console.php');
    }
}
