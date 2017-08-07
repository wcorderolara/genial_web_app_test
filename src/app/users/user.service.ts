import {Injectable} from '@angular/core'

import { Http, Headers } from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { AuthService } from '../auth.service';
import {User} from './user';

@Injectable()
export class UserService {
    private charactersUrl = 'http://localhost:3005';
    private headers = new Headers({'Content-Type': 'application/json'});
    
    constructor (private http: Http, private router:Router, private auth:AuthService) {}

    logIn(user:User):Promise<any> {
        let url = `${this.charactersUrl}/auth/login`;

        return this.http.post(url, user, {headers: this.headers})
                   .toPromise()
                   .then(response => {
                        return response.json();
                   })
                   .catch(this.handleError);
    }

    logOut(): void{
        localStorage.removeItem('ng-token');
        this.router.navigate(['dashboard']);
    }

    createUser(user:User): Promise<any>{
        let url = `${this.charactersUrl}/user/create`;

        return this.http.post(url, user, {headers: this.headers})
                        .toPromise()
                        .then(response => {
                            return response.json();
                        })
                        .catch(this.handleError);
    }

    getUserById(id:number):Promise<User>{
        let url = `${this.charactersUrl}/user/get/${id}`;

        return this.http.get(url, {headers: this.auth.setAuthHeaders()})
                        .toPromise()
                        .then(response=>response.json().data as User)
                        .catch(this.handleError);
    }

    uploadAvatar(fileToUpload:Array<File>){
        let result:any;
        const formData: any = new FormData();
        const files:Array<File> = fileToUpload;
        formData.append("file[]", files[0], files[0]['name']);
        let url = `${this.charactersUrl}/character/upload/avatar`;
        return this.http.post(url, formData)
                        .map(response => {
                            return response.json();
                        })
    }

    updateAvatar(fileUrl:string):Promise<User> {
        let user = new User();
        user.avatar = fileUrl

        let url = `${this.charactersUrl}/user/update/avatar/${this.auth.getUserLogged()}`;


        return this.http.put(url,user,{headers: this.auth.setAuthHeaders()})
                        .toPromise()
                        .then(response=> response.json() as User)
                        .catch(this.handleError);
    }

    private handleError(error:any):Promise<any> {
        console.error(`Ha ocurrido un error: ${error}.`);
        return Promise.reject(error.message || error);
    }

}
