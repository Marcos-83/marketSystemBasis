<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class palindromoController extends Controller
{
    public function compararPegar($palavra) {

        $palavraInvertida = strrev($palavra);

        $palindromo = false;

        if($palavra == $palavraInvertida) {
            $palindromo = true;
        }

        return response()->json($palindromo, 200);
    }
}
