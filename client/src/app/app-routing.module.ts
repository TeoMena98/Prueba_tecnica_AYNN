import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CityComponent } from './city/city.component';
import { EditCityComponent } from './city/edit-city/edit-city.component';
import { CreateCityComponent } from './city/create-city/create-city.component';

import { CostumerComponent } from './costumer/costumer.component';
import { EditCostumerComponent } from './costumer/edit-costumer/edit-costumer.component';
import { CreateCostumerComponent } from './costumer/create-costumer/create-costumer.component';

import { ProductComponent } from './product/product.component';
import { EditProductComponent } from './product/edit-product/edit-product.component';
import { CreateProductComponent } from './product/create-product/create-product.component';

import { OrderComponent } from './order/order.component';
import { EditOrderComponent } from './order/edit-order/edit-order.component';
import { CreateOrderComponent } from './order/create-order/create-order.component';

const routes: Routes = [
  { path: '',   redirectTo: '/order', pathMatch: 'full' }, 

  { path:'city', component: CityComponent },
  { path:'city/update/:id', component: EditCityComponent },
  { path:'city/create', component: CreateCityComponent},
  
  { path:'costumer', component: CostumerComponent },
  { path:'costumer/update/:id', component: EditCostumerComponent },
  { path:'costumer/create', component: CreateCostumerComponent} ,
  
  { path:'product', component: ProductComponent },
  { path:'product/update/:id', component: EditProductComponent },
  { path:'product/create', component: CreateProductComponent},

  { path:'order', component: OrderComponent },
  { path:'order/update/:id', component: EditOrderComponent },
  { path:'order/create', component: CreateOrderComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ enableTracing: true })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
