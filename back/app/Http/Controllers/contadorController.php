<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class contadorController extends Controller
{
    public function contarEnviar(request $request) {
        $de  = $request->de;
        $ate = $request->ate;

        $resposta = '';

        for($x=$de;$x<=$ate;$x++) {
            $resposta = $resposta . ',' . $x;
        }

        return response($resposta, 200);

    }
    
    public function contarPegar($de, $ate){
       
        $resposta = '';

        for($x=$de;$x<=$ate;$x++) {
            $resposta = $resposta . ',' . $x;
        }

        return response($resposta, 200);

    }
}
