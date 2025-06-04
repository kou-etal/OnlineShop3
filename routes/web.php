<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Broadcast;

Route::get('/', function () {
    return ['Laravel' => app()->version()];
});

Broadcast::routes(['middleware' => ['auth']]);

require __DIR__.'/auth.php';
