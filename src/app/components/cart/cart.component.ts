import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/modals/cart';
import { CartService } from 'src/app/services/cart.service';
import { Product } from 'src/app/modals/product';
import { NaviComponent } from '../navi/navi.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  carts?: Cart[]|any;
  constructor(private cartService: CartService,private naviComponent: NaviComponent) { }

  ngOnInit(): void {
    this.getCart()
    
  }

  getCart() {
    this.cartService
      .list()
      .subscribe((carts) => {
        this.carts = carts;
      });

  }
  removeFromCart(cart:Cart) {
   this.carts=this.carts.filter((c: Cart)=>c !==cart);
   this.naviComponent.carts=this.carts.filter((c:Cart)=>c !== cart);
    console.log("geldi")
    this.cartService.removeFromCart(cart).subscribe();
   
  }
}
