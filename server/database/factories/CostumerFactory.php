<?php

namespace Database\Factories;

use App\Models\City;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Costumer>
 */
class CostumerFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'costumer_id_number' => $this->faker->randomNumber(9, true),
            'costumer_name' => $this->faker->name,
            'costumer_birth_date' => $this->faker->date(),
            'costumer_adress' => $this->faker->address,
            'costumer_phone' =>$this->faker->randomNumber(5, true),
            'city_id' => City::all()->random()->city_id
        ];
    }
}
