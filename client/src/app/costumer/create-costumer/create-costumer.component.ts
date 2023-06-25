import { Component } from '@angular/core';
import { CostumerService } from 'src/app/services/costumer.service';

@Component({
  selector: 'app-create-costumer',
  templateUrl: './create-costumer.component.html',
  styleUrls: ['./create-costumer.component.scss']
})
export class CreateCostumerComponent {

  constructor(private service: CostumerService) { }

  costumerIdNumber = "";
  costumerName = "";
  costumerBirthDate = "";
  costumerAdress = ""; 
  costumerPhone = "";
  cityId = "";

  addCostumer(){
    let val = {
      'costumer_id_number': this.costumerIdNumber,
      'costumer_name': this.costumerName,
      'costumer_birth_date': this.costumerBirthDate,
      'costumer_adress': this.costumerAdress, 
      'costumer_phone': this.costumerPhone,
      'city_id': this.cityId
    }

    this.service.addCostumer(val).subscribe(res => {
      alert(res.string);
    });
  }
}
