import { Info } from '../info';
import { Country } from '../countries/country';
import { Category } from '../categories/category';

export class SubDivision {    
    id?:number;
    name:string;
    code?:string;
    alpha2Code?:string;
    isoCode?:string;
    linkToIsoCode?:string;
    flag?:string;
    status?:number;
    createdAt?:string;
    updatedAt?:string;
    CategoryId:3;
    CountryId:number;
    Infos?:Info[];
    Category?:Category;
    Country?:Country;
}
