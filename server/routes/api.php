<?php

use App\Http\Controllers\API\CityController;
use App\Http\Controllers\API\CostumerController;
use App\Http\Controllers\API\OrderController;
use App\Http\Controllers\API\ProductsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::controller(CityController::class)->group(function () {
    Route::get('/cities', 'index');
    Route::post('/cities', 'store');
    Route::get('/cities/{id}', 'show');
    Route::put('/cities/{id}', 'update');
    Route::delete('/cities/{id}', 'destroy');
});

Route::controller(CostumerController::class)->group(function () {
    Route::get('/costumer', 'index');
    Route::post('/costumer', 'store');
    Route::get('/costumer/{id}', 'show');
    Route::put('/costumer/{id}', 'update');
    Route::delete('/costumer/{id}', 'destroy');
});

Route::controller(OrderController::class)->group(function () {
    Route::get('/order', 'index');
    Route::post('/order', 'store');
    Route::get('/order/{id}', 'show');
    Route::put('/order/{id}', 'update');
    Route::delete('/order/{id}', 'destroy');
});

Route::controller(ProductsController::class)->group(function () {
    Route::get('/product', 'index');
    Route::post('/product', 'store');
    Route::get('/product/{id}', 'show');
    Route::put('/product/{id}', 'update');
    Route::delete('/product/{id}', 'destroy');
});