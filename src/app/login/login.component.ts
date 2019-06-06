import {Component} from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from '../_services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})

export class LoginComponent {
    model: any = {};
    constructor(
        public authService: AuthService,
        private router: Router
    ) {}

    login() {
        this.authService.login(this.model).subscribe(
            next => {
                console.log('Logged in successfully!');
            },
            error => {
                console.log(error);
            },
            () => {
                this.router.navigate(['/home']);
            }
        );
    }
}

