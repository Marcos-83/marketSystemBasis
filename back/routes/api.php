<?php


use App\Http\Controllers\agendaController;
use App\Http\Controllers\calculadoraController;
use App\Http\Controllers\calculadoraImcController;
use App\Http\Controllers\contadorController;
use App\Http\Controllers\palindromoController;
use App\Http\Controllers\authController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::post('/calculadora/somar', [calculadoraController::class, 'somar']);
Route::post('/calculadora/subtrair', [calculadoraController::class, 'subtrair']);
Route::post('/calculadora/multiplicar', [calculadoraController::class, 'multiplicar']);
Route::post('/calculadora/dividir', [calculadoraController::class, 'dividir']);
Route::post('/calculadora/calcular', [calculadoraController::class, 'calcular']);

Route::post('/contador/contar', [contadorController::class, 'contarEnviar']);
Route::get('/contador/contar/{de}/{ate}', [contadorController::class, 'contarPegar']);

Route::post('/calculadoraImc/imcEnviar', [calculadoraImcController::class, 'imcEnviar']);
Route::get('/calculadoraImc/imcPegar/{peso}/{altura}', [calculadoraImcController::class, 'imcPegar']);

Route::get('/palindromo/compararPegar/{palavra}', [palindromoController::class, 'compararPegar']);

Route::prefix('agenda')->group(function () {
    Route::post('/salvar', [agendaController::class, 'salvar']);
    Route::get('/listar', [agendaController::class, 'listar']);
    Route::get('/lerUm/{id}', [agendaController::class, 'lerUm']);
    Route::delete('/deletar/{id}', [agendaController::class, 'deletar']);
    Route::post('/atualizarParte/{id}', [agendaController::class, 'atualizarParte']);
    // agenda/salvar

});

Route::prefix('user')->group(function () {
    Route::post('/register', [authController::class, 'register']);
    Route::post('/login', [authController::class, 'login']);

// rota autenticada
Route::middleware('auth:api')->get('/me', [authController::class, 'me']);



});


// eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL3VzZXIvbG9naW4iLCJpYXQiOjE3MzI1NjEyNjYsImV4cCI6MTczMjU2NDg2NiwibmJmIjoxNzMyNTYxMjY2LCJqdGkiOiJYVEhSbURRUG55dkVxVjVuIiwic3ViIjoiMyIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.WKy5eLhChOdjjp0pPs_k5JW7u0iOS-QL6wS_zu9NmY4