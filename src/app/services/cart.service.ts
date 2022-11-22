import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cart } from '../modals/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  path=" http://localhost:3000/carts";
  constructor(private http:HttpClient) { }

  
  getCarts(){
    
    return this.http.get<Cart[]>(this.path)}
  
}
