import { timeout } from 'rxjs/operator/timeout';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { CountryService } from '../country.service';
import { Country } from '../country';
import 'rxjs/add/operator/switchMap';
import { Router } from '@angular/router'
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-create-country',
  templateUrl: './create-country.component.html',
  styleUrls: ['./create-country.component.css']
})
export class CreateCountryComponent implements OnInit {
  selectedCountry:Country;
  fileToUpload: Array<File> = [];
  public options = {
    position: ["bottom", "left"],
    lastOnBottom: true,
    timeOut: 1500,
    showProgressBar:true,
    pauseOnHover:false,
    clickToClose:false
  }
  constructor(
    private countryService: CountryService,
    private route: ActivatedRoute,
    private location:Location,
    private router:Router,
    private servNotification: NotificationsService
  ) { }

  goBack(): void {
    this.location.back();
  }

  onChange(fileInput: any){        
        this.fileToUpload = <Array<File>>fileInput.target.files;
        //console.log(this.fileToUpload);
        this.countryService.uploadImage(this.fileToUpload)
                    .subscribe(response => {
                        this.selectedCountry.flag = response.data.url
                    })
    }

  createNotification(message:string) {
    console.log(message);
    this.servNotification.success(
      'Country App',
      message
    )
  }

  onCreate() {
      this.countryService.postCountry(this.selectedCountry)
          .then(response=>{
              this.createNotification(response.message);
              alert(response.message);
              this.goBack();
          }).catch(response=>{
            alert(response.message);
            this.goBack();
          })
    }

  ngOnInit() {
    this.selectedCountry = new Country();
  }

}
