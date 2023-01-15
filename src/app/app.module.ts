import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CardModule}from 'primeng/card';
import{ButtonModule}from 'primeng/button';
import{DataViewModule}from 'primeng/dataview';
import{RatingModule} from 'primeng/rating';
import{DropdownModule} from 'primeng/dropdown'
import {MenubarModule} from 'primeng/menubar'
import {ImageModule} from 'primeng/image'
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import{ SplitButtonModule } from 'primeng/splitbutton';
import {BadgeModule} from 'primeng/badge'
import {ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NaviComponent } from './components/navi/navi.component';
import { FooterComponent } from './components/footer/footer.component';
import { InputTextModule } from 'primeng/inputtext';
import {FormsModule} from '@angular/forms';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import{TableModule} from 'primeng/table'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CartComponent } from './components/cart/cart.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { LoginComponent } from './components/login/login.component';
import { AccountService } from './services/account.service';
import { LoginGuard } from './guard/login.guard';
import { environment } from 'src/environments/environment';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    NaviComponent,
    FooterComponent,
    CartComponent,
    ProductAddComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    BadgeModule,
    TableModule,
    OverlayPanelModule,
    ReactiveFormsModule,
    RatingModule,
    MdbCheckboxModule,
    SplitButtonModule,
    ImageModule,
    DropdownModule,
    MenubarModule,
    BrowserAnimationsModule,
    HttpClientModule,
    DataViewModule,
    ButtonModule,
    InputTextModule,
    CardModule,
    AppRoutingModule,
    FormsModule,
    
  ],
  providers: [AccountService,LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
