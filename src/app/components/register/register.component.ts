import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/modals/user';
import { AccountService } from 'src/app/services/account.service';
import { NaviComponent } from '../navi/navi.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model:User=new User();
  constructor(private accountService:AccountService,
    private naviComponenet :NaviComponent) { }

  ngOnInit(): void {
   
  }
  login(form:NgForm){
    if
    (this.accountService.login(this.model)){
    const menu = this.naviComponenet.items.find(f => f.label === "Giriş") 
    
    if( menu !== undefined)
    {
      menu.visible = false;
    }
    console.log(this.naviComponenet.items);
  }
  
   
  }
}
