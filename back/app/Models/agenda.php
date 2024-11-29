<?php

namespace App\Models;

use App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


class agenda extends Model
{   
    protected $table = 'agenda';
    use SoftDeletes;
    
}
