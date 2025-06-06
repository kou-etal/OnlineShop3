<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Broadcast;
use Illuminate\Support\Facades\Log;

Route::get('/', function () {
    return ['Laravel' => app()->version()];
});

//Broadcast::routes(['middleware' => ['web,auth:sanctum']]);


/*Route::post('/broadcasting/auth', function () {
    Log::info('/broadcasting/auth に到達しました');
});*/

require __DIR__.'/auth.php';
