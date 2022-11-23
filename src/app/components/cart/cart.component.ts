import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/modals/cart';
import { CartService } from 'src/app/services/cart.service';
import { Product } from 'src/app/modals/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  carts: Cart[]=[];
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.getCart()
  }

  getCart() {
    this.carts = this.cartService.list()
  }
  removeFromCart(product: Product) {
    this.cartService.removeFromCart(product)
   
  }
}
