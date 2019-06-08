import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from '../_services/auth.service';


@Injectable({
    providedIn: 'root'
})

export class AuthGuard implements CanActivate {

    constructor(public auth: AuthService, public router: Router) {}

    canActivate(): boolean {
        console.log('user logged in', this.auth.isLoggedIn());
        if (!this.auth.isLoggedIn()) {
            this.router.navigate(['']);
            return false;
        }
        return true;
    }
}
