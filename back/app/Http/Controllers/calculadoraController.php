<?php

namespace App\Http\Controllers;

use App\Models\calculadora;
use Illuminate\Http\Request;

class calculadoraController extends Controller
{


        public function calcular(Request $request)
    {

        $valorUm = $request->valorUm;
        $valorDois = $request->valorDois;
        $operacao = $request->operacao;

        if ($operacao == "+") {
            $resultado = $valorUm + $valorDois;

        } else if ($operacao == "-") {
            $resultado = $valorUm - $valorDois;

        } else if ($operacao == "/") {
            if ($valorDois == 0) {
                $erro = "Divisão por zero não permiti :(";
                static::guardarNoBanco($request, null, $erro);
                return response($erro, 422);
            }
            $resultado = $valorUm / $valorDois;

        } else if ($operacao == "*") {
            $resultado = $valorUm * $valorDois;

        } else {
            $erro = "Operação inválida";
            return response($erro, 422);
        }

        static::guardarNoBanco($request, $resultado, null);
        return response($resultado, 200);

        //
    }

    private static function guardarNoBanco($request, $resultado, $erro) {
        $calculadora = new calculadora();
        $calculadora->valorUm = $request->valorUm; 
        $calculadora->valorDois = $request->valorDois; 
        $calculadora->operacao = $request->operacao; 
        $calculadora->resultado = $resultado; 
        $calculadora->erro = $erro; 

        $calculadora->created_by = 1;

        $calculadora->save();

        return $calculadora;

}





/**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function somar(Request $request)
    {
        // dd($request->all());

        $valorUm = $request->valorUm;
        $valorDois = $request->valorDois;
        $resultado = $valorUm + $valorDois;


      $calculadora = new calculadora();
        $calculadora->valorUm = $valorUm; 
        $calculadora->valorDois = $valorDois; 
        $calculadora->resultado = $resultado; 

        $calculadora->created_by = 1;

        $calculadora->save(); 

        static::guardarNoBanco($request, $resultado, null);

        return response($resultado, 200);

        //
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function subtrair(Request $request)
    {
        // dd($request->all());

        $valorUm = $request->valorUm;
        $valorDois = $request->valorDois;
        $resultado = $valorUm - $valorDois;

        return response($resultado, 200);

        //
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function multiplicar(Request $request)
    {
        // dd($request->all());

        $valorUm = $request->valorUm;
        $valorDois = $request->valorDois;
        $resultado = $valorUm * $valorDois;

        return response($resultado, 200);

        //
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function dividir(Request $request)
    {
        // dd($request->all());

        $valorUm = $request->valorUm;
        $valorDois = $request->valorDois;


        if ($valorDois == 0) {
            $erro = "Divisão por zero não permiti :(";
            static::guardarNoBanco($request, null, $erro);
            return response($erro, 422);
        }

        $resultado = $valorUm / $valorDois;

        static::guardarNoBanco($request, $resultado, null);

        return response($resultado, 200);

        //
    }


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    }