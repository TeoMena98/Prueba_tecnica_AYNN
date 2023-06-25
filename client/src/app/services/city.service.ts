import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  readonly apiUrl = 'http://127.0.0.1:8000/api';
  readonly httpOptions = { 
    headers: new HttpHeaders({ 
      'Content-Type': 'application/json' 
    }) 
  };

  constructor(private http: HttpClient) { }

  getCitiesList(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + '/cities');
  }

  getCityById(city: any): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + '/cities/' + city);
  }

  addCity(city: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + '/cities', city, this.httpOptions);
  }

  updateCity(city: any, id: any): Observable<any> {
    return this.http.put<any>(this.apiUrl + '/cities/'+ id, city, this.httpOptions);
  }

  deleteCity(city: any): Observable<any> {
    return this.http.delete<any>(this.apiUrl + '/cities/' + city, this.httpOptions);
  }

}
