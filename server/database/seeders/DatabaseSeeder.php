<?php

namespace Database\Seeders;

use App\Models\City;
use App\Models\Costumer;
use App\Models\Order;
use App\Models\OrderDetail;
use App\Models\Products;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        City::factory(10)->create();
        Costumer::factory(10)->create();
        Products::factory(10)->create();
        Order::factory(10)->create();
        OrderDetail::factory(10)->create();
    }
}
