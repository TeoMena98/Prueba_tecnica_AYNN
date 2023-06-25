<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class City extends Model
{
    use HasFactory;

    public $timestamps = false;
    protected $primaryKey = 'city_id';

    protected $fillable = [
        'city_name'
    ];

    /**
     * @return HasMany
     */
    public function costumer(): HasMany{
        return $this->hasMany(Costumer::class, 'city_id'); 
    }
}
