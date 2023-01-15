import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { LoginComponent } from './components/login/login.component';
import { NaviComponent } from './components/navi/navi.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductComponent } from './components/product/product.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginGuard } from './guard/login.guard';

const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full', },
  {
    path: 'home', component: NaviComponent},
    {path:'register',component: RegisterComponent},
  { path: 'products', component: ProductComponent },
  { path: 'productadd', component: ProductAddComponent, canActivate: [LoginGuard] },
  { path: 'login', component: LoginComponent },

  { path: 'carts', component: CartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
