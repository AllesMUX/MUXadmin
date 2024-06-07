<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\ServerApiController;
use App\Http\Controllers\ServerAdd;


Route::get('/', function () {
    return view('welcome');
});


Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::middleware('auth')->group(function () {
    Route::get('/api', [ServerApiController::class, 'SendApiRequest']);
    Route::get('/server/add', [ServerAdd::class, 'index'])->name('server-add');
});
