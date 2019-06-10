import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Gameobject } from '../_models/gameobject';
import { GameObjectService } from '../_services/gameObject.service';

@Injectable()
export class GameObjectResolver implements Resolve<Gameobject[]> {
    constructor(private gameObjectService: GameObjectService, private router: Router) {}

    resolve(route: ActivatedRouteSnapshot): Observable<Gameobject[]> {
        return this.gameObjectService.getGameObject().pipe(catchError(error => {
            console.log('Problem retrieving data');
            return of(null);
        }))
    }
}
