import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductComponent } from './components/product/product.component';

const routes: Routes = [
  {path:'products',component:ProductComponent},
  {path:'productadd',component:ProductAddComponent},
  {path:'login',component:ProductComponent},
  {path:'',redirectTo:'products',pathMatch:'full'},
  {path:'carts',component:CartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
