<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/



Route::get('/charger', 'Controller@charger');
Route::get('/bender', 'Controller@bender');
Route::get('/transaction/{date?}', 'Controller@history');
Route::get('/transaction2/{date?}', 'Controller@history2');
Route::get('/monthly/{date?}', 'Controller@monthly');
Route::get('/transaction_month/{date?}', 'Controller@historymonth');

Route::get('/home', function () {
    return view('home');
});

Route::get('/', function () {
    return view('sielis');
});

Route::get('/spkl', function () {
    return view('bender');
});

Route::get('/transaction_daily', function () {
    return view('history');
});

Route::get('/transaction_monthly', function () {
    return view('monthly');
});

Route::get('/export', function () {
    return view('export');
});
