import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  readonly apiUrl = 'http://127.0.0.1:8000/api';
  readonly httpOptions = { 
    headers: new HttpHeaders({ 
      'Content-Type': 'application/json' 
    }) 
  };

  constructor(private http: HttpClient) { }

  getOrderList(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + '/order');
  }

  getOrderById(order: any): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + '/order/' + order);
  }

  updateOrder(order: any, id: any): Observable<any> {
    return this.http.put<any>(this.apiUrl + '/order/'+ id, order, this.httpOptions);
  }

  addOrder(order: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + '/order', order, this.httpOptions);
  }

  deleteOrder(order: any): Observable<any> {
    return this.http.delete<any>(this.apiUrl + '/order/' + order, this.httpOptions);
  }
}
