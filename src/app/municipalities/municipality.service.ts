import { Injectable } from '@angular/core';

import { Http, Headers} from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import {Municipality} from './municipality';
import { AuthService } from '../auth.service'

@Injectable()
export class MunicipalityService {
  private apiUrl = 'http://localhost:3005';
  private headers = new Headers ({'Content-Type': 'application/json'});
  constructor(private http:Http, private router:Router, private auth:AuthService) {}
  private authHeaders = this.auth.setAuthHeaders();

  //Handle Error
  private handleError(error:any):Promise<any> {
        console.error(`Ha ocurrido un error:`);
        console.log(error);
        return Promise.reject(error.message || error);
  }

  // Get list of Municipalities by Sub Division
  getMunicipalities(subDivisionId:number):Promise<Municipality[]> {
    let url = `${this.apiUrl}/municipality/get/subdivision/${subDivisionId}`;
    return this.http.get(url)
                    .toPromise()
                    .then(response=>response.json().data as Municipality[])
                    .catch(this.handleError);
  }

  // Get Municipality By Id
  getMunicipalityById(idMunicipality:number):Promise<Municipality> {
    let url = `${this.apiUrl}/municipality/get/${idMunicipality}`;

    return this.http.get(url)
                    .toPromise()
                    .then(response=>response.json().data as Municipality)
                    .catch(this.handleError);
  }

  // Post Municipality
  postMunicipality(municipality:Municipality):Promise<any> {
    let url = `${this.apiUrl}/municipality/create`;

    return this.http.post(url, municipality, {headers: this.authHeaders})
                    .toPromise()
                    .then(response=>response.json())
                    .catch(this.handleError);
  }

  // Put Municipality
  putMunicipality(municipality:Municipality):Promise<any> {
    let url = `${this.apiUrl}/municipality/put/${municipality.id}`;
    
    return this.http.put(url, municipality, {headers: this.authHeaders})
                    .toPromise()
                    .then(response=>response.json())
                    .catch(this.handleError);
  }

  // Delete Municipality
  deleteMunicipality(municipalityId:number):Promise<any> {
    let url = `${this.apiUrl}/municipality/delete/${municipalityId}`;
    return this.http.delete(url,{headers: this.authHeaders})
                    .toPromise()
                    .then(response=>response.json())
                    .catch(this.handleError)
  }

  // Delete All
  deleteAllMunicipalities(subDivisionId:number):Promise<any> {
    let url = `${this.apiUrl}/municipality/delete/all/${subDivisionId}`;
    return this.http.delete(url,{headers: this.authHeaders})
                    .toPromise()
                    .then(response=>response.json())
                    .catch(this.handleError)
  }

}
