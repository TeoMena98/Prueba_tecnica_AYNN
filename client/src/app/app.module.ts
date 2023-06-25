import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { CostumerService } from './services/costumer.service';
import { CityService } from './services/city.service';
import { ProductService } from './services/product.service';

import { NavbarComponent } from './template/navbar/navbar.component';

import { CityComponent } from './city/city.component';
import { CreateCityComponent } from './city/create-city/create-city.component';
import { EditCityComponent } from './city/edit-city/edit-city.component';

import { CostumerComponent } from './costumer/costumer.component';
import { EditCostumerComponent } from './costumer/edit-costumer/edit-costumer.component';
import { CreateCostumerComponent } from './costumer/create-costumer/create-costumer.component';

import { ProductComponent } from './product/product.component';
import { EditProductComponent } from './product/edit-product/edit-product.component';
import { CreateProductComponent } from './product/create-product/create-product.component';

import { OrderComponent } from './order/order.component';
import { CreateOrderComponent } from './order/create-order/create-order.component';
import { EditOrderComponent } from './order/edit-order/edit-order.component';
import { ShowOrderComponent } from './order/show-order/show-order.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,    
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    
    NavbarComponent,

    CityComponent,
    EditCityComponent,
    CreateCityComponent,
    
    CostumerComponent,
    EditCostumerComponent,
    CreateCostumerComponent,

    ProductComponent,
    EditProductComponent,
    CreateProductComponent,
    
    OrderComponent,
    CreateOrderComponent,
    EditOrderComponent,
    ShowOrderComponent
  ],
  providers: [
    CityService,
    CostumerService,
    ProductService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
