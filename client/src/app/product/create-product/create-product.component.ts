import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent {

  constructor(private service: ProductService) { }

  productDescription = "";
  productAmount = "";
  productValues = "";
  productStatus = ""; 

  addProduct(){
    let val = {
      'product_description': this.productDescription,
      'product_amount': this.productAmount,
      'product_values': this.productValues,
      'product_status': this.productStatus
    }

    this.service.addProduct(val).subscribe(res => {
      alert(res.string);
    });
  }
}
