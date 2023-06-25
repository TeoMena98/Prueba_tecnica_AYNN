<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Costumer extends Model
{
    use HasFactory;

    public $timestamps = false;
    protected $primaryKey = 'costumer_id';

    protected $fillable = [
        'costumer_id_number',
        'costumer_name',
        'costumer_birth_date',
        'costumer_adress', 
        'costumer_phone', 
        'city_id'
    ];

    /**
     * @return BelongsTo
     */
    public function cities():BelongsTo{
        return $this->BelongsTo(City::class, 'city_id');
    }

    /**
     * @return BelongsTo
     */
    public function orders(): BelongsTo{
        return $this->belongsTo(Order::class, 'costumer_id'); 
    }
}
