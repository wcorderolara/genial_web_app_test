import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import { SubDivisionService } from '../sub-division.service';
import { Country } from '../../countries/country';
import { SubDivision } from '../sub-division';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'app-sub-division-detail',
  templateUrl: './sub-division-detail.component.html',
  styleUrls: ['./sub-division-detail.component.css']
})
export class SubDivisionDetailComponent implements OnInit {
  selectedSB:Country
  @ViewChild('descriptionContainer')descriptionContainer: ElementRef
  subDivisionsList:SubDivision[];
  constructor(
    private sbService: SubDivisionService,
    private route: ActivatedRoute,
    private location:Location,
    private router: Router
  ) { }

  goBack(): void {
    this.location.back();
  }

  loadData(description:string) {
    this.descriptionContainer.nativeElement.innerHTML = description
  }

  getSubDivisionInfo(): void {
    this.route.params
        .switchMap((params:Params) => this.sbService.getSubDivisionById(+params['id']))
        .subscribe(response =>{
          console.log(response);
          this.selectedSB = response;
          this.loadData(this.selectedSB.Infos[0].description);
        });      
  }

  ngOnInit() {
    this.getSubDivisionInfo();    
  }

}
