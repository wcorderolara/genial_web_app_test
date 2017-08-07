import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import { SubDivisionService } from '../sub-division.service';
import { Country } from '../../countries/country';
import { SubDivision } from '../sub-division';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-sub-division',
  templateUrl: './sub-division.component.html',
  styleUrls: ['./sub-division.component.css']
})
export class SubDivisionComponent implements OnInit {
  selectedCountry:Country
  subDivisionsList:SubDivision[];
  @Input() countryName:string;
  @Input() idCountry:number;
  constructor(
    private sbService: SubDivisionService,
    private route: ActivatedRoute,
    private location:Location,
    private router: Router
  ) { }

  goBack(): void {
    this.location.back();
  }

  addSubDivision() {
    this.router.navigate(['/sub-division/create/', this.countryName, this.idCountry ]);
  }

  getSubDivisionsList(): void {
    this.route.params
        .switchMap((params:Params) => this.sbService.getSubDivisions(+params['idCountry']))
        .subscribe(response =>{
          this.subDivisionsList = response;
        });      
  }

  ngOnInit() {
    this.getSubDivisionsList();    
    this.route.params.subscribe( params => {
      this.idCountry = +params['idCountry'];
      this.countryName = params['countryName'];
    })
  }

}
