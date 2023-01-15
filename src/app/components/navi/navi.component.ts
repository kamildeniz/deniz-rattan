import { AfterContentInit, Component, OnChanges, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Cart } from 'src/app/modals/cart';
import { AccountService } from 'src/app/services/account.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {
  carts: Cart[]|any;
  items!: MenuItem[];
  constructor(private cartService: CartService,
    private accountService: AccountService) { }
    
  isLoggedIn() {
    return this.accountService.isloggedIn();
  }
  logOut() {
    this.accountService.logOut();
  }
  ngOnInit() {
    this.getCart();
    this.items = [
      { label: 'Anasayfa', icon: 'pi pi-fw pi-home', routerLink: 'products', },
      { label: 'Kaydol', icon: 'pi pi-fw pi-calendar', routerLink: 'register', },
      { label: 'Ekle', icon: 'pi pi-fw pi-pencil', routerLink: 'productadd' },
  
      { label: 'Giriş', icon: 'pi pi-fw pi-file', routerLink: 'login', visible: this.isLoggedIn() == false }
    ];

  }
  getCart() {
    this.cartService
      .list()
      .subscribe((carts) => {
        this.carts = carts;
      });

  }
}


