import { Injectable } from '@angular/core';
import { User } from '../modals/user';

@Injectable()
export class AccountService {

  constructor() { }
  loggedIn = false;
  login(user: User): boolean {
    if (user.userName == "kamil" && user.password == "12345") {
        this.loggedIn=true;
      localStorage.setItem("islogged",user.userName);
      return true;
    
    } return false;
  }
  isloggedIn(){
    return this.loggedIn;

  }
  logOut(){
    localStorage.removeItem("isLogged");
    this.loggedIn= false;
  }
}
