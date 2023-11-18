<?php

use App\Http\Controllers\PageController;
use App\Http\Controllers\UserController;
use App\Models\User;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia; // We are going to use this class to render React components



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

// Pages
Route::get('/', [PageController::class,'home'])->name('home');
Route::get('/register', [PageController::class,'register'])->name('register');
Route::get('/login', [PageController::class,'login'])->name('login');



Route::post('/search', [UserController::class,'search']);
Route::post('/register', [UserController::class,'registerUser']);
Route::post('/login', [UserController::class,'loginUser']);
Route::get('/logout', [UserController::class,'logout']);



// Route::get('/login', function () {
//     return Inertia::render('Login'); // This will get component Test.jsx from the resources/js/Pages/Test.jsx
// });

// Route::resource('/',UserController::class);
