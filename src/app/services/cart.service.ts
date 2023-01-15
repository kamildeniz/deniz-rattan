import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NaviComponent } from '../components/navi/navi.component';
import { Cart } from '../modals/cart';
import { Carts } from '../modals/cartItemState';
import { Product } from '../modals/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
carts:Cart[]=[];
cart!:Cart;
  path="http://localhost:3000/carts";
  constructor(private http:HttpClient) {

  }

 

  addToCart(product:Product,quantity:number){
    this.list()
    .subscribe((cart) => {
      
      this.carts.push(cart);
    });
    
     
     this.cart=product;
     this.cart.quantity=quantity;
     if(this.cart.quantity==1){
     this.http.post<Cart>(this.path,this.cart).subscribe(data=>{this.cart.id=data.id })
    console.log(this.cart.quantity);
    }
     else{
     this.http.put<Cart>(`${this.path}/${this.cart.id}`,this.cart).subscribe(data=>{this.cart.id=data.id })
     }

  }
  removeFromCart(cart:Cart):Observable<Cart>{
    
return  this.http.delete<Cart>(this.path+"/"+cart.id);
    console.log("gittim",cart.id)
}

  list(){
    return this.http.get(this.path)
  }
}
