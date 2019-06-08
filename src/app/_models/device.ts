import { Shop } from './shop';
import { Brand } from './brand';

export interface Device {
    id: number;
    name: string;
    shortname: string;
    brand: Brand;
    image: string;
    releaseYear: number;
    deviceType: number;
    shops: Shop[]
}
