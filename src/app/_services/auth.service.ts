import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import {User} from '../_models/user';


const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        accept: 'application/json'
    })
};

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    tokenIdentifier = 'token';
    jwtHelper = new JwtHelperService();
    decodedToken: any;
    apiUrl = 'https://localhost:44328/';
    constructor(private http: HttpClient) {}

    login(user: User) {
        return this.http
            .post<any>(this.apiUrl + 'api/Auth/login', user, httpOptions)
            .pipe(
                map(data => {
                    console.log(Token);
                    if (data.token) {
                        localStorage.setItem(this.tokenIdentifier, data.token);
                        this.decodedToken = this.jwtHelper.decodeToken(data.token);
                    }
                })
            );
    }

    isLoggedIn(): boolean {
        const tokenString = localStorage.getItem(this.tokenIdentifier);
        const helper = new JwtHelperService();
        return !helper.isTokenExpired(tokenString);
    }

    logout() {
        localStorage.removeItem(this.tokenIdentifier);
    }
}
