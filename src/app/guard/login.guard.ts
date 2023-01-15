import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { AccountService } from "../services/account.service";
import { Observable } from "rxjs";
@Injectable()
export class LoginGuard implements CanActivate {
    constructor(private accountSerrvice: AccountService, private router: Router) {

    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        let logged = this.accountSerrvice.isloggedIn();
        if (logged) {
            return true;
        }
        this.router.navigate(["login"]);
        return false;
    }

}