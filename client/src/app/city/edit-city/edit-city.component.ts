import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CityService } from 'src/app/services/city.service';

@Component({
  selector: 'app-edit-city',
  templateUrl: './edit-city.component.html',
  styleUrls: ['./edit-city.component.scss']
})
export class EditCityComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: CityService) { }
  
  city:any;
  cityId:any;
  cityName = "";

  ngOnInit(): void {
    this.cityId = Number(this.route.snapshot.paramMap.get('id'));
    this.getCityById(this.cityId);
  }

  getCityById(id: any){
    this.service.getCityById(id).subscribe(data => {
      this.city = data;
      this.cityName = this.city.city_name;
    });
  }

  updateCity(){
    let val = {
      "city_name": this.cityName
    }

    this.service.updateCity(val, this.cityId).subscribe(res => {
      alert(res);
    })
  }  
}
