import { Component } from '@angular/core';
import { CityService } from '../services/city.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent {

  constructor(private service: CityService) { }

  CitiesList: any = [];

  ngOnInit(): void {
    this.getCities();
  }

  getCities() {
    this.service.getCitiesList().subscribe(data => {
      this.CitiesList = data;
    });
  }

  deleteCity(city: number) {
    this.service.deleteCity(city).subscribe(data => {
        alert(data.toString());
        this.getCities();
    });
  }
}
