<?php
namespace Tests\Domain\SetupWizard;

use Domain\Localization\Actions\SeedDefaultLanguageAction;
use Storage;
use Tests\TestCase;

class SetupServiceTest extends TestCase
{
    /**
     * @test
     */
    public function it_create_system_folders()
    {
        // folders are created in TestCase

        collect(['avatars', 'chunks', 'system', 'files', 'temp', 'zip'])
            ->each(function ($directory) {
                Storage::disk('local')->assertExists($directory);
            });
    }

    /**
     * @test
     */
    public function it_seed_default_language()
    {
        resolve(SeedDefaultLanguageAction::class)();

        $this->assertDatabaseHas('languages', [
            'name'   => 'English',
            'locale' => 'en',
        ]);

        $this->assertDatabaseHas('language_translations', [
            'key'   => 'actions.close',
            'value' => 'Close',
            'lang'  => 'en',
        ]);
    }
}
