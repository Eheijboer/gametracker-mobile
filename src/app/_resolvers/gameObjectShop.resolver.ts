import {Injectable} from '@angular/core';
import {Resolve, Router, ActivatedRouteSnapshot} from '@angular/router';
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Gameobject} from '../_models/gameobject';
import {GameObjectService} from '../_services/gameObject.service';
import {GameobjectShop} from '../_models/gameObjectShop';

@Injectable()
export class DeviceDetailResolver implements Resolve<GameobjectShop> {
    constructor(
        private gameObjectService: GameObjectService,
        private router: Router,
    ) {}
    resolve(route: ActivatedRouteSnapshot): Observable<GameobjectShop> {
        return this.gameObjectService.getListGameObjectShop(route.params.id).pipe(
            catchError(error => {
                console.log(error);
                this.router.navigate(['/home']);
                return of(null);
            })
        );
    }
}

