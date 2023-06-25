import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CostumerService {
  readonly apiUrl = 'http://127.0.0.1:8000/api';
  readonly httpOptions = { 
    headers: new HttpHeaders({ 
      'Content-Type': 'application/json' 
    }) 
  };

  constructor(private http: HttpClient) { }

  getCostumerList(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + '/costumer');
  }

  getCostumerById(costumer: any): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + '/costumer/' + costumer);
  }

  updateCostumer(costumer: any, id: any): Observable<any> {
    return this.http.put<any>(this.apiUrl + '/costumer/'+ id, costumer, this.httpOptions);
  }

  addCostumer(costumer: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + '/costumer', costumer, this.httpOptions);
  }

  deleteCostumer(costumer: any): Observable<any> {
    return this.http.delete<any>(this.apiUrl + '/costumer/' + costumer, this.httpOptions);
  }
}
