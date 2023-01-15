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



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
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
    this.cartService.addToCart(product)
    this.naviComponent.carts.push(product);
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
