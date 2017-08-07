import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { SimpleNotificationsModule } from 'angular2-notifications';

import { SubDivisionsRoutingModule } from './sub-divisions-routing.module';
import { SubDivisionComponent } from './sub-division/sub-division.component';
import { CreateSubDivisionComponent } from './create-sub-division/create-sub-division.component';
import { UpdateSubDivisionComponent } from './update-sub-division/update-sub-division.component';
import { DeleteSubDivisionComponent } from './delete-sub-division/delete-sub-division.component';
import { AddSubDivisionInfoComponent } from './add-sub-division-info/add-sub-division-info.component';
import { UpdateSubDivisionInfoComponent } from './update-sub-division-info/update-sub-division-info.component';
import { SubDivisionDetailComponent } from './sub-division-detail/sub-division-detail.component';

import { AuthService } from '../auth.service';
import { SubDivisionService } from './sub-division.service';
import { SubDivisionInfoService } from './sub-division-info.service';
import { CategoryService } from '../categories/category.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    SimpleNotificationsModule.forRoot(),
    RouterModule,
    SubDivisionsRoutingModule
  ],
  declarations: [
    SubDivisionComponent, 
    CreateSubDivisionComponent, 
    UpdateSubDivisionComponent, 
    DeleteSubDivisionComponent, 
    AddSubDivisionInfoComponent, 
    UpdateSubDivisionInfoComponent, 
    SubDivisionDetailComponent
  ],
  providers: [
    AuthService,
    SubDivisionService,
    SubDivisionInfoService,
    CategoryService
  ]
})
export class SubDivisionsModule { }
