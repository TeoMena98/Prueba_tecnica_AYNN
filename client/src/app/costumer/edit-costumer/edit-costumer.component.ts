import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CostumerService } from 'src/app/services/costumer.service';

@Component({
  selector: 'app-edit-costumer',
  templateUrl: './edit-costumer.component.html',
  styleUrls: ['./edit-costumer.component.scss']
})
export class EditCostumerComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: CostumerService) { }
  
  costumer:any;
  costumerId:any;
  costumerIdNumber = "";
  costumerName = "";
  costumerBirthDate = "";
  costumerAdress = ""; 
  costumerPhone = "";
  cityId = "";

  ngOnInit(): void {
    this.costumerId = Number(this.route.snapshot.paramMap.get('id'));
    this.getCostumerById(this.costumerId);
  }

  getCostumerById(id: any){
    this.service.getCostumerById(id).subscribe(data => {
      this.costumer = data;
      this.costumerIdNumber = this.costumer.costumer_id_number;
      this.costumerName = this.costumer.costumer_name;
      this.costumerBirthDate = this.costumer.costumer_birth_date;
      this.costumerAdress = this.costumer.costumer_adress;
      this.costumerPhone = this.costumer.costumer_phone;
      this.cityId = this.costumer.city_id;
    });
  }

  updateCostumer(){
    let val = {
      'costumer_id_number': this.costumerIdNumber,
      'costumer_name': this.costumerName,
      'costumer_birth_date': this.costumerBirthDate,
      'costumer_adress': this.costumerAdress, 
      'costumer_phone': this.costumerPhone,
      'city_id': this.cityId
    }

    this.service.updateCostumer(val, this.costumerId).subscribe(res => {
      alert(res);
    })
  }  

}
