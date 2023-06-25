import { Component } from '@angular/core';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent {

  constructor(private service: OrderService) { }

  OrderList: any = [];

  ngOnInit(): void {
    this.getOrder();
  }

  getOrder() {
    this.service.getOrderList().subscribe(data => {
      this.OrderList = data;
      console.log(this.OrderList);
    });
  }

  deleteOrder(order: number) {
    this.service.deleteOrder(order).subscribe(data => {
        alert(data.toString());
        this.getOrder();
    });
  }
}
