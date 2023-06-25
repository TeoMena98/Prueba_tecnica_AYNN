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
        Schema::create('orders', function (Blueprint $table) {
            $table->id('order_id')->nullable(false);
            $table->date('order_date')->nullable(false);
            $table->decimal('order_total', 15, 2)->nullable(false);
            $table->date('order_date_delivery')->nullable(false);
            $table->bigInteger('costumer_id')->unsigned()->nullable(false)->index();
            $table->foreign('costumer_id')->references('costumer_id')->on('costumers');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('orders');
    }
};
