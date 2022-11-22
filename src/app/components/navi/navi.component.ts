import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Cart } from 'src/app/modals/cart';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {
carts: Cart[]=[{
  "id": "236",
  "name": "Ratione",
  "price": 117,
  "categoryId": 2,
  "rate": 3.62,
  "content": "Corrupti sint occaecati doloribus maiores. Exceptu",
  "stock": 30,
  "quantity": 23,
  "inventoryStatus": "INSTOCK",
  "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFeI8yqtKfZMWg8_Zbf-RENKCV37eZ3AvUEQ&usqp=CAU"
},];
  constructor(private cartService:CartService) { }
  items: MenuItem[]=[];
  items2: MenuItem[]=[];
  ngOnInit() {
    this.cartService
    .getCarts()
    .subscribe((carts) => {
      this.carts = carts;
    });
    for (let index = 0; index < this.carts.length; index++) {
      this.items2=[{label:this.carts[index].name},]
      
    }
    this.items = [
      { label: 'Anasayfa', icon: 'pi pi-fw pi-home', routerLink:'/products'},
      { label: 'Kaydol', icon: 'pi pi-fw pi-calendar' ,routerLink:'/register'},
      { label: 'Ekle', icon: 'pi pi-fw pi-pencil',routerLink:'/productadd' },
      { label: 'Giriş', icon: 'pi pi-fw pi-file' ,routerLink:'/login',},
      
    ];
    console.log(this.items2)
    console.log(this.items)
  }
}


