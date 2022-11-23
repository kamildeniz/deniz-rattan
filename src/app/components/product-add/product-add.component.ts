import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Category } from 'src/app/modals/category';
import { Product } from 'src/app/modals/product';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css'],
  providers: [CategoryService, ProductService]
})
export class ProductAddComponent implements OnInit {
  productAddForm!: FormGroup;
  constructor(private categoryService: CategoryService,
    private productService: ProductService) { }
  model: Product = new Product();
  categories?: Category[];

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data
    });
  }
  add() {
    this.productService.add(this.productAddForm?.value).subscribe(response => {
      alert("Ürün eklendi");
    });

  }
}
