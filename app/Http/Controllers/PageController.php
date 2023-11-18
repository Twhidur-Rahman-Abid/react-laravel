<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;


class PageController extends Controller
{
    // Home page
    public function home(Request $request){

        // Request parameters
        $blood_group = $request->blood_group;
        $district = $request->district;
        $upazila = $request->upazila;

        // Logged in user
        $user = Session::get('user');


        // Decide whet data passed
        if($blood_group && $district &&  $upazila ){
                $donors = User::where(['blood_group'=>$blood_group,'district'=>$district,'upazila'=>$upazila])->get();
        }else if($blood_group && $district ){
                $donors= User::where(['blood_group'=>$blood_group,'district'=>$district])->get();
        }else if($blood_group ){
                $donors = User::where(['blood_group'=>$blood_group])->get();
        }else{
                $donors= User::all();
        }

        // render
        return  Inertia::render('Home',[
            'donors'=> $donors,
            'user'=> $user,
        ]); 
       
    }

    // Register page
    public function register(){
        return Inertia::render('Register');
    }

    // Login page
    public function login(){
        if(is_null(Session::get('user'))){
            return Inertia::render('Login');
        }else{
            return to_route('home');
        }
   
    }
}
