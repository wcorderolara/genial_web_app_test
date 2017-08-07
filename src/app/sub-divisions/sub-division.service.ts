import { Injectable } from '@angular/core';


import { Http, Headers} from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import {SubDivision} from './sub-division';
import { AuthService } from '../auth.service'

@Injectable()
export class SubDivisionService {
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

  // Get list of Sub Divisons by Country
  getSubDivisions(countryId:number):Promise<SubDivision[]> {
    let url = `${this.apiUrl}/subdivision/get/country/${countryId}`;
    return this.http.get(url)
                    .toPromise()
                    .then(response=>response.json().data as SubDivision[])
                    .catch(this.handleError);
  }

  // Get Subdivision By Id
  getSubDivisionById(idSubDivision:number):Promise<SubDivision> {
    let url = `${this.apiUrl}/subdivision/get/${idSubDivision}`;

    return this.http.get(url)
                    .toPromise()
                    .then(response=>response.json().data as SubDivision)
                    .catch(this.handleError);
  }

  // Post Sub division
  postSubDivision(subDivision:SubDivision):Promise<any> {
    let url = `${this.apiUrl}/subdivision/create`;

    return this.http.post(url, subDivision, {headers: this.authHeaders})
                    .toPromise()
                    .then(response=>response.json())
                    .catch(this.handleError);
  }

  // Put Sub division
  putSubDivision(subDivision:SubDivision):Promise<any> {
    let url = `${this.apiUrl}/subDivision/put/${subDivision.id}`;
    
    return this.http.put(url, subDivision, {headers: this.authHeaders})
                    .toPromise()
                    .then(response=>response.json())
                    .catch(this.handleError);
  }

  // Upload Image/Flag
  uploadImage(fileToUpload:Array<File>) {
    const formData: any = new FormData();
    const files:Array<File> = fileToUpload;
    formData.append("file[]", files[0], files[0]['name']);
    let url = `${this.apiUrl}/subdivision/upload/avatar`;
    return this.http.post(url, formData)
                    .map(response => {
                        return response.json();
                    })
  }

  // Delete Sub Division
  deleteSubDivision(subDivisionId:number):Promise<any> {
    let url = `${this.apiUrl}/subdivision/delete/${subDivisionId}`;
    return this.http.delete(url,{headers: this.authHeaders})
                    .toPromise()
                    .then(response=>response.json())
                    .catch(this.handleError)
  }

  // Delete All
  deleteAllSubDivisions(countryId:number):Promise<any> {
    let url = `${this.apiUrl}/municipality/delete/all/${countryId}`;
    return this.http.delete(url,{headers: this.authHeaders})
                    .toPromise()
                    .then(response=>response.json())
                    .catch(this.handleError)
  }

}
