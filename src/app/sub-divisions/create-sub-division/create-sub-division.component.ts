import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import { SubDivisionService } from '../sub-division.service';
import { Country } from '../../countries/country';
import { SubDivision } from '../sub-division';
import 'rxjs/add/operator/switchMap';
import { NotificationsService } from 'angular2-notifications';
import { CategoryService } from '../../categories/category.service';
import { Category } from '../../categories/category';

@Component({
  selector: 'app-create-sub-division',
  templateUrl: './create-sub-division.component.html',
  styleUrls: ['./create-sub-division.component.css']
})
export class CreateSubDivisionComponent implements OnInit {
  selectedSD:SubDivision;
  fileToUpload: Array<File> = [];
  categoriesList:Category[];
  public options = {
    position: ["top", "left"],
    timeOut: 1500,
    showProgressBar:true,
    pauseOnHover:false,
    clickToClose:false
  }
  constructor(
    private sbService: SubDivisionService,
    private route: ActivatedRoute,
    private location:Location,
    private router:Router,
    private servNotification: NotificationsService,
    private categoryService: CategoryService
  ) { }

  goBack(): void {
    this.location.back();
  }

  getCategories() {
    this.categoryService.getCategories()
        .then(response => {
          this.categoriesList = response;
          console.log(this.categoriesList);
        })
        .catch(response=>{
          console.log(response);
        })
  }

  onChange(fileInput: any){        
        this.fileToUpload = <Array<File>>fileInput.target.files;
        //console.log(this.fileToUpload);
        this.sbService.uploadImage(this.fileToUpload)
                    .subscribe(response => {
                        this.selectedSD.flag = response.data.url
                    })
    }

  onCreate() {
      this.sbService.putSubDivision(this.selectedSD)
          .then(response=>{
              alert(response.message);
              this.goBack();
          }).catch(response=>{
            alert(response.message);
            this.goBack();
          })
    }

  ngOnInit() {
  }

}
