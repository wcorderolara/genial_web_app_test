import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import { CountryService } from '../country.service';
import { Country } from '../country';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css']
})
export class CountryDetailComponent implements OnInit {
  selectedCountry:Country
  @ViewChild('descriptionContainer')descriptionContainer: ElementRef
  constructor(
    private countryService: CountryService,
    private route: ActivatedRoute,
    private location:Location,
    private router: Router
  ) { }

  goBack(): void {
    this.location.back();
  }

  viewDetails() {
    this.router.navigate(['/sub-divisions', this.selectedCountry.name, this.selectedCountry.id ]);
  }

  getCountryInfo() {
    this.route.params
        .switchMap((params:Params) => this.countryService.getCountryById(+params['id']))
        .subscribe(response =>{
          this.selectedCountry = response;
          this.loadData(this.selectedCountry.Infos[0].description);          
        });
  }

  loadData(description:string) {
    this.descriptionContainer.nativeElement.innerHTML = description
  }

  ngOnInit() {
    this.getCountryInfo();    
  }

}
