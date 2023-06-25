<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class OrderDetail extends Model
{
    use HasFactory;

    public $timestamps = false;
    protected $primaryKey = 'detail_id';

    protected $fillable = [
        'order_id',
        'product_id'
    ];

    /**
     * @return HasMany
     */
    public function order():HasMany{
        return $this->hasMany(Order::class);
    }

    /**
     * @return HasMany
     */
    public function product():HasMany{
        return $this->hasMany(Product::class);
    }
}
