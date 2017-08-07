import { Component, OnInit } from '@angular/core';

import { Country } from '../country';
import { CountryService } from '../country.service';
import { CountryInfoService } from '../country-info.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  countriesList:Country[];

  constructor(
    private countryService:CountryService,
    private countryInfoService:CountryInfoService
  ) { }

  getCountriesList(): void {
    this.countryService.getCountries()
        .then(response => {
          console.log(response);
          this.countriesList = response;
        })
        .catch(response => {
          console.log(response);
        });       
  }

  ngOnInit() {
    this.getCountriesList();
  }

}
