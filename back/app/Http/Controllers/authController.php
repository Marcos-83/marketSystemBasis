<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Tymon\JWTAuth\Facades\JWTAuth;

//use Illuminate\JWTAuth\Facades\JWTAuth;
//use Illuminate\JWTAuth\Exceptions\JWTExceptions;



class authController extends Controller
{
    public function register(Request $request)
    {
        $userQtd = user::where('email', $request->email)->count();

        if ($userQtd > 0)
            return response('', 409);


        $user = new user();
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = bcrypt($request->password);
        $user->save();

        return response($user, 201);
    }

    public function login(Request $request)
    {
        if (isset($request->email) && isset($request->password)){
        $validade = $request->validate([
            'email' => 'required|email',
            'password' => 'required|string',
        ]);

        if ($token = JWTAuth::attempt($validade)) {
            return response()->json(['token' => $token], 200);
        }
    }

        return response('', 401);
    }

    public function me()
    {
        $user = Auth()->user();
        return response($user, 200);

    }

    public function logout(Request $request)
    {
        auth()->logout();

        return response('', 200);

    }


}
