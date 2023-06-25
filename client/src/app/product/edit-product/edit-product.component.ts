import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent {

  constructor(private route: ActivatedRoute, private service: ProductService) { }

  Product:any;
  ProductId:any;
  productDescription = "";
  productAmount = "";
  productValues = "";
  productStatus = ""; 

  ngOnInit(): void {
    this.ProductId = Number(this.route.snapshot.paramMap.get('id'));
    this.getProductById(this.ProductId);
  }

  getProductById(id: any){
    this.service.getProductById(id).subscribe(data => {
      this.Product = data;
      this.productDescription = this.Product.product_description;
      this.productAmount = this.Product.product_amount;
      this.productValues = this.Product.product_values;
      this.productStatus = this.Product.product_status;
    });
  }

  updateProduct(){
    let val = {
      'product_description': this.productDescription,
      'product_amount': this.productAmount,
      'product_values': this.productValues,
      'product_status': this.productStatus
    }

    this.service.updateProduct(val, this.ProductId).subscribe(res => {
      alert(res);
    })
  }
}
