import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cart } from '../modals/cart';
import { Carts } from '../modals/cartItemState';
import { Product } from '../modals/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  path=" http://localhost:3000/carts";
  constructor(private http:HttpClient) { }

  

  addToCart(product:Product){
     let item :any = Carts.find(c=>c?.product?.id===product.id);
     if (item) {
      item.quantity++;
     }else{
      let cart =new Cart()
      cart.quantity=1;
      cart.product=product;
      Carts.push(cart);
     }   
  }
  removeFromCart(product:Product){
    let item = Carts.find(c=>c.product?.id=== product.id)
    if(item){
      if(item.quantity>1){
        item.quantity--;
      }else{
        Carts.splice(Carts.indexOf(item),1)
      } 
    }
  }

  list():Cart[]{
    return Carts;
  }
}
