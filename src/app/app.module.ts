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

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { NaviComponent } from './components/navi/navi.component';
import { FooterComponent } from './components/footer/footer.component';
import { InputTextModule } from 'primeng/inputtext';
import {FormsModule} from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    NaviComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RatingModule,
    MdbCheckboxModule,
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
    FormsModule
      
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
