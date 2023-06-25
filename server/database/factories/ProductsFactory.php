<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Products>
 */
class ProductsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        $amount = $this->faker->numberBetween(0, 100);
        $status = ($amount == 0) ? 'Agotado' : 'Disponible';

        return [
            'product_description' => $this->faker->sentence,
            'product_amount' => $amount,
            'product_values' => $this->faker->randomFloat(2, 1, 99999),
            'product_status' => $status
        ];
    }
}
