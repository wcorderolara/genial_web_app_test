import { Injectable } from '@angular/core';

import { Http, Headers} from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import {Category} from './category';
import { AuthService } from '../auth.service'

@Injectable()
export class CategoryService {
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

  // Get list of Categories
  getCategories():Promise<Category[]> {
    let url = `${this.apiUrl}/category/get`;
    return this.http.get(url)
                    .toPromise()
                    .then(response=>response.json().data as Category[])
                    .catch(this.handleError);
  }

  // Get Category By Id
  getCategoryById(idCategory:number):Promise<Category> {
    let url = `${this.apiUrl}/category/get/${idCategory}`;

    return this.http.get(url)
                    .toPromise()
                    .then(response=>response.json().data as Category)
                    .catch(this.handleError);
  }

  // Post Category
  postCategory(category:Category):Promise<any> {
    let url = `${this.apiUrl}/category/create`;

    return this.http.post(url, category, {headers: this.authHeaders})
                    .toPromise()
                    .then(response=>response.json())
                    .catch(this.handleError);
  }

  // Put Category
  putCategory(category:Category):Promise<any> {
    let url = `${this.apiUrl}/category/put/${category.id}`;
    
    return this.http.put(url, category, {headers: this.authHeaders})
                    .toPromise()
                    .then(response=>response.json())
                    .catch(this.handleError);
  }

  // Delete Category
  deleteCategory(categoryId:number):Promise<any> {
    let url = `${this.apiUrl}/category/delete/${categoryId}`;
    return this.http.delete(url,{headers: this.authHeaders})
                    .toPromise()
                    .then(response=>response.json())
                    .catch(this.handleError)
  }

}
