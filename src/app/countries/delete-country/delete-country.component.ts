import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { CountryService } from '../country.service';
import { Country } from '../country';
import 'rxjs/add/operator/switchMap';
import { Router } from '@angular/router'
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-delete-country',
  templateUrl: './delete-country.component.html',
  styleUrls: ['./delete-country.component.css']
})
export class DeleteCountryComponent implements OnInit {
  @Input() selectedCountry:Country;
  public options = {
    position: ["top", "left"],
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

  getCountryInfo() {
    this.route.params
        .switchMap((params:Params) => this.countryService.getCountryById(+params['id']))
        .subscribe(response =>{
          this.selectedCountry = response;
          console.log(this.selectedCountry);
        });
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

  onDelete() {
      this.countryService.deleteCountry(this.selectedCountry.id)
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
