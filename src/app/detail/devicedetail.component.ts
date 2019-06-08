import {Component, OnInit, Input} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Gameobject} from '../_models/gameobject';
import { GameObjectService } from '../_services/gameObject.service';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { GameobjectShop } from '../_models/gameObjectShop';

@Component({
    selector: 'app-devicedetail',
    templateUrl: './devicedetail.component.html',
    styleUrls: ['./devicedetail.component.scss']
})
export class DeviceDetailComponent implements OnInit {
    @Input() gameObjectShop: GameobjectShop;
    @Input() gameObject: Gameobject;
    
    filtersLoaded: Promise<boolean>;

    constructor(
        private gameObjectService: GameObjectService,
        private route: ActivatedRoute
        ) {

    }

    ngOnInit() {
        this.route.data.subscribe(data => {
            this.gameObjectShop = data['detail'];

            this.getGameObjectById(this.gameObjectShop.gameObjectId)
            .subscribe(data => {
              this.gameObject = data;
              this.filtersLoaded = Promise.resolve(true);
            });
          });
    }

    getGameObjectById(id) {
        return this.gameObjectService.getGameObjectById(id);
    }
    
}
