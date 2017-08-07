import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { SimpleNotificationsModule } from 'angular2-notifications';

import { CountriesRoutingModule } from './countries-routing.module';
import { CountryComponent } from './country/country.component';
import { CreateCountryComponent } from './create-country/create-country.component';
import { UpdateCountryComponent } from './update-country/update-country.component';
import { DeleteCountryComponent } from './delete-country/delete-country.component';
import { AddCountryInfoComponent } from './add-country-info/add-country-info.component';
import { UpdateCountryInfoComponent } from './update-country-info/update-country-info.component';
import { CountryService } from './country.service';
import { CountryInfoService } from './country-info.service';
import { AuthService } from '../auth.service';
import { CountryDetailComponent } from './country-detail/country-detail.component';

@NgModule({
  imports: [
    CommonModule,
    CountriesRoutingModule,
    FormsModule,
    HttpModule,
    SimpleNotificationsModule.forRoot(),
    RouterModule
    
  ],
  declarations: [CountryComponent, 
          CreateCountryComponent, 
          UpdateCountryComponent, 
          DeleteCountryComponent, 
          AddCountryInfoComponent, 
          UpdateCountryInfoComponent, CountryDetailComponent],
  providers: [CountryService, CountryInfoService, AuthService]
})
export class CountriesModule { }
