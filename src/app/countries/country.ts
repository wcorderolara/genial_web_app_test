import { Info } from '../info';

export class Country {
    id?:number;
    name:string;
    alpha2Code?:string;
    alpha3Code?:string;
    isoCode?:string;
    linkToIsoCode?:string;
    independent?:number;
    flag?:string;
    status?:number;
    createdAt?:string;
    updatedAt?:string;
    Infos?:Info[];
}
