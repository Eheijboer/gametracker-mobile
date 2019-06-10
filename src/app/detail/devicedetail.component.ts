import {Component, OnInit} from '@angular/core';
import {Gameobject} from '../_models/gameobject';
import {GameObjectService} from '../_services/gameObject.service';
import {ActivatedRoute} from '@angular/router';
import {GameobjectShop} from '../_models/gameObjectShop';

@Component({
    selector: 'app-devicedetail',
    templateUrl: './devicedetail.component.html',
    styleUrls: ['./devicedetail.component.scss']
})
export class DeviceDetailComponent implements OnInit {
    GameObjectShop: GameobjectShop[];
    GameObject: Gameobject;

    constructor(
        private gameObjectService: GameObjectService,
        private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
        this.getGameObjectById();
        this.getListGameObjectShop();
    }

    getGameObjectById() {
        return this.gameObjectService.getGameObjectById(+this.route.snapshot.params['id'])
            .subscribe((GameObject: Gameobject) => {
                this.GameObject = GameObject;
                console.log(this.GameObject);
            });
    }

    getListGameObjectShop() {
        return this.gameObjectService.getListGameObjectShop(+this.route.snapshot.params['id'])
            .subscribe((GameObjectShop: GameobjectShop[]) => {
            this.GameObjectShop = GameObjectShop;
            console.log(this.GameObjectShop);
        });
    }
}

