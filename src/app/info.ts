import { Country } from './countries/country';
import { SubDivision } from './sub-divisions/sub-division';
import { Municipality } from './municipalities/municipality';

export class Info {
    id?:number;
    description?:string;
    etymology?:string;
    history?:string;
    geography?:string;
    demographics?:string;
    government?:string;
    economy?:string;
    infrastructure?:string;
    education?:string;
    culture?:string;
    mortality?:string;
    Countries?:Country[];
    SubDivisions?:SubDivision[];
    Municipalities?:Municipality[];
}
