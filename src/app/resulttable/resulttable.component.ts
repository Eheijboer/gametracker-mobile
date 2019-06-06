import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Gameobject} from '../_models/gameobject';

@Component({
    selector: 'app-resulttable',
    templateUrl: './resulttable.component.html',
    styleUrls: ['./resulttable.component.scss']
})
export class ResulttableComponent implements OnInit {
    values: any;
    shops: any;

    constructor(private http: HttpClient) {

    }

    searchText;

    ngOnInit() {
        this.getValues();
    }
    getValues() {
        this.http.get('https://localhost:44328/api/GameObject').subscribe(responce => {
            console.log(responce);
            //this.values = responce;
            this.values = this.filter(responce);
            console.log(this.shops);
            console.log(this.values);

        }, error => {
            console.log(error);
        });
    }

    filter(fullList) {
        const returnList = fullList;
        for (let i = 0; i < returnList.length; i++) {
            console.log(returnList[i]);
            let lowestGameShopObject = returnList[i].gameObjectShop[0];
            for (let j = 1; j < returnList[i].gameObjectShop.length; j++) {
                if (returnList[i].gameObjectShop[j].price < lowestGameShopObject.price)
                    lowestGameShopObject = returnList[i].gameObjectShop[j];
            }
            returnList[i].gameObjectShop = [];
            returnList[i].gameObjectShop.push(lowestGameShopObject);
        }
        return returnList;
    }
}
