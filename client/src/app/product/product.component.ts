import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  constructor(private service: ProductService) { }

  ProductList: any = [];

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.service.getProductList().subscribe(data => {
      this.ProductList = data;
    });
  }

  deleteProduct(product: number) {
    this.service.deleteProduct(product).subscribe(data => {
      alert(data.toString());
      this.getProducts();
    });
  }
}
