import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubDivisionsRoutingModule } from './sub-divisions-routing.module';
import { SubDivisionComponent } from './sub-division/sub-division.component';
import { DetailSubDivisionComponent } from './detail-sub-division/detail-sub-division.component';
import { CreateSubDivisionComponent } from './create-sub-division/create-sub-division.component';
import { UpdateSubDivisionComponent } from './update-sub-division/update-sub-division.component';
import { DeleteSubDivisionComponent } from './delete-sub-division/delete-sub-division.component';
import { AddSubDivisionInfoComponent } from './add-sub-division-info/add-sub-division-info.component';
import { UpdateSubDivisionInfoComponent } from './update-sub-division-info/update-sub-division-info.component';
import { SubDivisionDetailComponent } from './sub-division-detail/sub-division-detail.component';

import { AuthService } from '../auth.service';
import { SubDivisionService } from './sub-division.service';
import { SubDivisionInfoService } from './sub-division-info.service';

@NgModule({
  imports: [
    CommonModule,
    SubDivisionsRoutingModule
  ],
  declarations: [
    SubDivisionComponent, 
    DetailSubDivisionComponent, 
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
    SubDivisionInfoService
  ]
})
export class SubDivisionsModule { }
