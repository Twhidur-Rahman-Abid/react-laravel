<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;


class UserController extends Controller
{
  

    public function registerUser(Request $request){
        $user = User::create($request->validate([
            "name"=> ['required'],
            "email" => ['required','unique:users,email'],
            "password" => ['required'],
            "number" => ['required'],
            "last_date_of_donation" => ['required'],
            "blood_group" => ['required'],
            "district" => ['required'],
            "upazila" => ['required'],

        ]));
        Session::put('user', $user);
        return to_route('home');
    }
   

    public function loginUser(Request $request){
        $user = User::where('email', $request->email)->first();
        if(is_null($user)){
        redirect()->back()->with([
            'message' => 'Login failed, please try again',
            'data' => null
         ]);
        }
        else{
            Session::put('user', $user);
            return to_route('home');
    
        }
    }

    public function logout(){
        Session::remove('user');
        return to_route('home');
    }
}
