import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';

const routes: Routes = [
  {path:'products',component:ProductComponent},
  {path:'productadd',component:ProductComponent},
  {path:'login',component:ProductComponent},
  {path:'',redirectTo:'products',pathMatch:'full'},
  {path:'cart',component:ProductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
