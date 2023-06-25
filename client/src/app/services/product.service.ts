import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  readonly apiUrl = 'http://127.0.0.1:8000/api';
  readonly httpOptions = { 
    headers: new HttpHeaders({ 
      'Content-Type': 'application/json' 
    }) 
  };

  constructor(private http: HttpClient) { }

  getProductList(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + '/product');
  }

  getProductById(product: any): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + '/product/' + product);
  }

  updateProduct(product: any, id: any): Observable<any> {
    return this.http.put<any>(this.apiUrl + '/product/'+ id, product, this.httpOptions);
  }

  addProduct(product: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + '/product', product, this.httpOptions);
  }

  deleteProduct(product: any): Observable<any> {
    return this.http.delete<any>(this.apiUrl + '/product/' + product, this.httpOptions);
  }
}
