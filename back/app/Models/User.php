<?php

namespace App\Models;


use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Database\Eloquent\SoftDeletes;
use Tymon\JWTAuth\Contracts\JWTSubject;

class User extends Authenticatable implements JWTSubject
{

    protected $table = 'users';
    use SoftDeletes;


    protected $fillable = [
        'name',
        'email',
        'password',
    ];


    protected $hidden = [
        'password',
        'remember_token',
    ];


    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function getJWTIdentifier()
    {
        return $this->getKey(); // Retorna o ID do usuário, geralmente o campo 'id'
    }

    // Implementação do método getJWTCustomClaims() exigido pela interface JWTSubject
    public function getJWTCustomClaims()
    {
        return []; // Pode retornar um array vazio ou customizar com claims adicionais, como roles
    }
}

