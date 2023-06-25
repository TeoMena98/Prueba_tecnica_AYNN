<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('costumers', function (Blueprint $table) {
            $table->id('costumer_id');
            $table->char('costumer_id_number', 50)->unique()->nullable(false);
            $table->char('costumer_name', 50)->nullable(false);
            $table->date('costumer_birth_date')->nullable(false);
            $table->char('costumer_adress', 100)->nullable(false);
            $table->char('costumer_phone', 10)->nullable(false);
            $table->bigInteger('city_id')->unsigned()->nullable(false)->index();
            $table->foreign('city_id')->references('city_id')->on('cities');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('costumers');
    }
};
