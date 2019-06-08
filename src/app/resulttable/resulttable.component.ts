import {Component, OnInit, Input} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Gameobject} from '../_models/gameobject';
import { GameObjectService } from '../_services/gameObject.service';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-resulttable',
    templateUrl: './resulttable.component.html',
    styleUrls: ['./resulttable.component.scss']
})
export class ResulttableComponent implements OnInit {
    @Input() gameObjects: Gameobject[];
    @Input() lowestObject;

    constructor(
        private route: ActivatedRoute
        ) {

    }

    searchText;

    ngOnInit() {
        this.route.data.subscribe(data => {
            this.gameObjects = data['gameObjects'];
          });

          this.gameObjects.forEach(element => {
            var lowest = Number.POSITIVE_INFINITY;
            var tmp;
            for (var i=element.gameObjectShop.length-1; i>=0; i--) {
                tmp = element.gameObjectShop[i].price;
                if (tmp < lowest) {
                    lowest = tmp; 
                    this.lowestObject = element.gameObjectShop[i]
                    this.gameObjects.find(x => x.id == this.lowestObject.gameObjectId).price = this.lowestObject.price;
                    this.gameObjects.find(x => x.id == this.lowestObject.gameObjectId).lowestObjectId = this.lowestObject.id;
                }  
            }
          });
    }
}
