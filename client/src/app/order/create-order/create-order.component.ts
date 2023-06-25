import { Component } from '@angular/core';
import { CostumerService } from 'src/app/services/costumer.service';
import { ProductService } from 'src/app/services/product.service';
import { FormArray, FormBuilder, FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.scss']
})
export class CreateOrderComponent {
  
  constructor(private costumerService: CostumerService, private productService: ProductService, private fb: FormBuilder) {}  

  addProducts: FormGroup = new FormGroup({});
  ProductList: any = [];
  CostumerList: any = [];
  orderProductList: any = []; 
  costumerId = "";
  orderDatedelivery = "";
  
  ngOnInit(): void {
    this.getProducts();
    this.getCostumer();
    this.addProducts = this.fb.group({
      name: new FormControl(""),
      orderData: this.fb.array([])
    });
  }

  addProduct() {
    this.formArrayOrderData.push(
      this.fb.group({
        product: [null],
        price: [null]
      })
    );
  }

  public get formArrayOrderData(): FormArray {
    return this.addProducts.get("orderData") as FormArray;
  }

  getCostumer() {
    this.costumerService.getCostumerList().subscribe(data => {
      this.CostumerList = data;
    });
  }

  getProducts() {
    this.productService.getProductList().subscribe(data => {
      this.ProductList = data;
    });
  }
  
  addOrder(){
    console.log(this.addProducts.value);
    this.addProducts.reset();
  }
}
