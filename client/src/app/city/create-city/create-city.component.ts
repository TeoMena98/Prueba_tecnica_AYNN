import { Component, Input } from '@angular/core';
import { CityService } from 'src/app/services/city.service';

@Component({
  selector: 'app-create-city',
  templateUrl: './create-city.component.html',
  styleUrls: ['./create-city.component.scss']
})
export class CreateCityComponent {
  
  constructor(private service: CityService) { }

  @Input() city: any;
  cityName = "";

  addCity(){
    let val = {
      "city_name": this.cityName
    }

    this.service.addCity(val).subscribe(res => {
      alert(res.string);
    });
  }
}
