<?php

namespace Database\Factories;

use App\Models\Costumer;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Order>
 */
class OrderFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        $orderDate = $this->faker->date();
        $daysDelivery = rand(1, 7);
        $orderDateDelivery = date("Y-m-d", strtotime("+{$daysDelivery} days", strtotime($orderDate)));

        return [
            'order_date' => $orderDate,
            'order_total' => $this->faker->randomFloat(2, 1, 99999),
            'order_date_delivery' => $orderDateDelivery,
            'costumer_id' => Costumer::all()->random()->costumer_id
        ];
    }
}
