<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class Authenticate
{
    public function handle(Request $request, Closure $next, $guards)  // Usar 'web' como guard padrão
    {
        // Verifique se o guard está correto (se for 'web' ou outro guard fornecido)
        if (Auth::guard($guards)->guest()) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        return $next($request);
    }
}



