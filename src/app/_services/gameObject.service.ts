import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import {User} from '../_models/user';
import { Gameobject } from '../_models/gameobject';
import { Observable } from 'rxjs';
import { GameobjectShop } from '../_models/gameObjectShop';


const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        accept: 'application/json'
    })
};

@Injectable({
    providedIn: 'root'
})
export class GameObjectService {
    apiUrl = 'https://localhost:44328/';
    constructor(private http: HttpClient) {}

    getGameObject(): Observable<Gameobject[]> {
        return this.http.get<Gameobject[]>(
          this.apiUrl + 'api/GameObject/'
        );
      }

    getListGameObjectShop(id): Observable<GameobjectShop[]> {
        return this.http.get<GameobjectShop[]>(
            this.apiUrl + 'api/GameObject/GetListGameObjectShop/' + id
        );
    }

    getGameObjectShop(id): Observable<GameobjectShop> {
        return this.http.get<GameobjectShop>(
          this.apiUrl + 'api/GameObject/GetSpecificGameObjectShop/' + id
        );
      }
      getGameObjectById(id): Observable<Gameobject> {
        return this.http.get<Gameobject>(
          this.apiUrl + 'api/GameObject/' + id
        );
      }
}
