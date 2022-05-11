<?php
namespace Domain\Homepage\Controllers;

use Domain\Settings\Actions\GetConfigAction;
use Illuminate\Contracts\View\View;

class IndexController
{
    public function __construct(
        public GetConfigAction $getConfig,
    ) {}

    /**
     * Show index page
     */
    public function __invoke(): View
    {
        return view('index')
            ->with('config', json_decode(json_encode(($this->getConfig)())));
    }
}
