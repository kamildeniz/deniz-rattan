import { Injectable } from '@angular/core';
import { Observable, tap, catchError } from 'rxjs';
import { Product } from '../modals/product';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  path = " http://localhost:3000/products";
  constructor(private http: HttpClient) { }
  //'../../assets/data/products.json'

  getProducts() {

    return this.http.get<Product[]>(this.path)
  }
  add(product: Product): Observable<Product> {
    const httpOptions={
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':'Token'
      })
    }
    return this.http.post<Product>(this.path, product)
  }
}
