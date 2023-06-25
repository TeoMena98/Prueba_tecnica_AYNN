<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Products extends Model
{
    use HasFactory;

    public $timestamps = false;
    protected $primaryKey = 'product_id';

    protected $fillable = [
        'product_description', 
        'product_amount',
        'product_values',
        'product_status'
    ];

    /**
     * @return BelongsTo
     */
    public function orderDetails(): BelongsTo{
        return $this->belongsTo(OrderDetail::class, 'product_id'); 
    }
}
