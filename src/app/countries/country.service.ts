import { Injectable } from '@angular/core';

import { Http, Headers} from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import {Country} from './country';
import { CountryInfoService } from './country-info.service';
import { AuthService } from '../auth.service'

@Injectable()
export class CountryService {
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

  // Get list of Countries
  getCountries():Promise<Country[]> {
    let url = `${this.apiUrl}/country/get`;
    return this.http.get(url)
                    .toPromise()
                    .then(response=>response.json().data as Country[])
                    .catch(this.handleError);
  }

  // Get Country By Id
  getCountryById(idCountry:number):Promise<Country> {
    let url = `${this.apiUrl}/country/get/${idCountry}`;

    return this.http.get(url)
                    .toPromise()
                    .then(response=>response.json().data as Country)
                    .catch(this.handleError);
  }

  // Post Country
  postCountry(country:Country):Promise<any> {
    let url = `${this.apiUrl}/country/create`;

    return this.http.post(url, country, {headers: this.authHeaders})
                    .toPromise()
                    .then(response=>response.json())
                    .catch(this.handleError);
  }

  // Put Country
  putCountry(country:Country):Promise<any> {
    let url = `${this.apiUrl}/country/put/${country.id}`;
    
    return this.http.put(url, country, {headers: this.authHeaders})
                    .toPromise()
                    .then(response=>response.json())
                    .catch(this.handleError);
  }

  // Upload Image/Flag
  uploadImage(fileToUpload:Array<File>) {
    const formData: any = new FormData();
    const files:Array<File> = fileToUpload;
    formData.append("file[]", files[0], files[0]['name']);
    let url = `${this.apiUrl}/country/upload/avatar`;
    return this.http.post(url, formData)
                    .map(response => {
                        return response.json();
                    })
  }

  // Delete Country
  deleteCountry(countryId:number):Promise<any> {
    let url = `${this.apiUrl}/country/delete/${countryId}`;
    return this.http.delete(url,{headers: this.authHeaders})
                    .toPromise()
                    .then(response=>response.json())
                    .catch(this.handleError)
  }

}
