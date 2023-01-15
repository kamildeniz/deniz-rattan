import { NgForOf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { Category } from 'src/app/modals/category';
import { Product } from 'src/app/modals/product';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { ChangeDetectorRef } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { NaviComponent } from '../navi/navi.component';
import { Cart } from 'src/app/modals/cart';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  cart?:Cart;
  sortOptions: SelectItem[] = [];
  categories: Category[] = [{ id: 0, name: "yok" }];
  sortOrder: number = 0;

  sortField: string = '';

  constructor(private productService: ProductService,
    private categoryService: CategoryService,
    private cRef: ChangeDetectorRef,
    private cartService: CartService,
    private naviComponent:NaviComponent) { }
    

  addToCart(product: Product) {
     this.cart=this.naviComponent.carts.find((c:Cart)=>c.id==product.id);
     console.log(this.cart?.quantity);
     
    if(this.cart==undefined){
      this.naviComponent.carts.push(product)
      this.cart=this.naviComponent.carts.find((c:Cart)=>c.id==product.id);
      this.cart!.quantity=1;
      console.log(this.cart!.quantity);
      console.log("componentteki ifte");
      
    }
    else{
      console.log("componentteki else'te");
      
      this.naviComponent.carts.push(product);
      this.cart!.quantity!+=1;
      console.log(this.cart!.quantity);
  }
    
    
    this.cartService.addToCart(product,this.cart!.quantity!)
  }
  ngOnInit(): void {
    this.productService
      .getProducts()
      .subscribe((products) => {
        this.products = products;
      });
    this.categoryService
      .getCategories()
      .subscribe((categories) => {
        this.categories = categories;
      });
    this.sortOptions = [
      { label: 'Price High to Low', value: '!price' },
      { label: 'Price Low to High', value: 'price' }
    ];
  }
  onSortChange(event: any) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    }
    else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }

}
