import { AfterContentInit, Component, OnChanges, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Cart } from 'src/app/modals/cart';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit{
carts: Cart[]=[];
  constructor(private cartService:CartService) { }
  items: MenuItem[]=[];
  items2: MenuItem[]=[];
  ngOnInit() {
    this.carts=this.cartService.list();
    for (let index = 0; index < this.carts.length; index++) {
      this.items2=[{label:this.carts[index].product?.name},]
      
    }
    this.items = [
      { label: 'Anasayfa', icon: 'pi pi-fw pi-home', routerLink:'/products'},
      { label: 'Kaydol', icon: 'pi pi-fw pi-calendar' ,routerLink:'/register'},
      { label: 'Ekle', icon: 'pi pi-fw pi-pencil',routerLink:'/productadd' },
      { label: 'Giriş', icon: 'pi pi-fw pi-file' ,routerLink:'/login',},
      
    ];
  }

}


