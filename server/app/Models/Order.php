<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Order extends Model
{
    use HasFactory;

    public $timestamps = false;
    protected $primaryKey = 'order_id';


    protected $fillable = [
        'order_date',
        'order_total',
        'order_date_delivery',
        'costumer_id'
    ];

    /**
     * @return BelongsTo
     */
    public function costumers(): BelongsTo{
        return $this->belongsTo(Costumer::class, 'costumer_id');
    }

    /**
     * @return HasMany
     */
    public function orderDetails(): HasMany{
        return $this->hasMany(OrderDetail::class, 'order_id'); 
    }
}
