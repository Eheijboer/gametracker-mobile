import { Shop } from './shop';
import { Device } from './device';
import { GameobjectShop } from './gameObjectShop';

export interface Gameobject {
    id: number;
    name: string;
    status: number;
    shop: Shop;
    objectType: number;
    device: Device;
    gameObjectShop: GameobjectShop[];
    price: number;
    cheapestShopname: string;
    lowestObjectId: number;
}
