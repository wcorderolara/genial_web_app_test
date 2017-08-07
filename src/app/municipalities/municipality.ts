import { Info } from '../info';
import { SubDivision } from '../sub-divisions/sub-division';

export class Municipality {
    id?:number;
    name:string;
    populations?:number;
    status?:number;
    createdAt?:string;
    updatedAt?:string;
    SubDivisionId:number;
    Info?:Info[];
    SubDivision?:SubDivision[];
}
