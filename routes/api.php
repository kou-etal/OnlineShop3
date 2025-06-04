<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Broadcast;
use App\Http\Controllers\ProductApiController;
use App\Http\Controllers\ProfileApiController;
use App\Http\Controllers\CartApiController;
use App\Http\Controllers\PurchaseApiController;
use App\Http\Controllers\RegisterApiController;
use App\Http\Controllers\ChatController;
use App\Http\Controllers\PrivateChatController;
use App\Http\Middleware\AdminMiddleware;


Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware(['auth:sanctum']);

Route::post('/register',[RegisterApiController::class, 'register']);

Route::get('/products', [ProductApiController::class, 'index']);

Route::get('/products/{id}', [ProductApiController::class, 'show']);

Route::post('/cart/add/{id}', [CartApiController::class, 'add']);

Route::post('/purchase', [PurchaseApiController::class, 'purchase'])->middleware('auth:sanctum');

Route::get('/cart', [CartApiController::class, 'show'])->middleware('auth:sanctum');
Route::post('/cart/add/{id}', [CartApiController::class, 'add'])->middleware('auth:sanctum');
Route::post('/cart/remove/{id}', [CartApiController::class, 'remove'])->name('cart.remove');
Route::post('/cart/clear', [CartApiController::class, 'clear'])->name('cart.clear');

Route::middleware(['auth:sanctum',AdminMiddleware::class])->group(function () {
    Route::get('/admin/users', [ProfileApiController::class, 'index']);
    /*Route::get('/admin/products/create', [ProductController::class, 'adminCreate'])->name('admin.products.create');
    Route::post('/admin/products', [ProductController::class, 'adminStore'])->name('admin.products.store');
    Route::get('/admin/products/{id}/edit', [ProductController::class, 'adminEdit'])->name('admin.products.edit');
    Route::post('/admin/products/{id}', [ProductController::class, 'adminUpdate'])->name('admin.products.update');
    Route::delete('/admin/products/{id}', [ProductController::class, 'adminDestroy'])->name('admin.products.destroy');*/
});
Route::middleware('auth:sanctum')->get('/users',[ProfileApiController::class, 'index']);





Route::middleware('auth:sanctum')->group(function () {
    Route::get('/profile', [ProfileApiController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileApiController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileApiController::class, 'destroy'])->name('profile.destroy');
});

Route::post('/send-message', [ChatController::class, 'sendMessage']);
Route::middleware('auth:sanctum')->post('/send-private-message', [PrivateChatController::class, 'send']);
Route::get('/me', function () {
    return response()->json([
        'auth' => Auth::check(),
        'user' => Auth::user(),
    ]);
});



