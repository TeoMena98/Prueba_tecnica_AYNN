import { Component } from '@angular/core';
import { CostumerService } from '../services/costumer.service';

@Component({
  selector: 'app-costumer',
  templateUrl: './costumer.component.html',
  styleUrls: ['./costumer.component.scss']
})
export class CostumerComponent {

  constructor(private service: CostumerService) { }

  CostumerList: any = [];

  ngOnInit(): void {
    this.getCostumer();
  }

  getCostumer() {
    this.service.getCostumerList().subscribe(data => {
      this.CostumerList = data;
    });
  }

  deleteCostumer(costumer: number) {
    this.service.deleteCostumer(costumer).subscribe(data => {
        alert(data.toString());
        this.getCostumer();
    });
  }
}
