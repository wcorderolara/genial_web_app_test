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
  selector: 'app-update-country',
  templateUrl: './update-country.component.html',
  styleUrls: ['./update-country.component.css']
})
export class UpdateCountryComponent implements OnInit {
  @Input() selectedCountry:Country;
  fileToUpload: Array<File> = [];
  public options = {
    position: ["top", "left"],
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

  getCountryInfo() {
    this.route.params
        .switchMap((params:Params) => this.countryService.getCountryById(+params['id']))
        .subscribe(response =>{
          this.selectedCountry = response;
        });
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
      message,
      {
        
      }
    )
  }

  onUpdate() {
      this.countryService.putCountry(this.selectedCountry)
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
    this.getCountryInfo();
  }

}
