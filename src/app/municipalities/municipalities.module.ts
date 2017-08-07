import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MunicipalitiesRoutingModule } from './municipalities-routing.module';
import { MunicipalityComponent } from './municipality/municipality.component';
import { CreateMunicipalityComponent } from './create-municipality/create-municipality.component';
import { UpdateMunicipalityComponent } from './update-municipality/update-municipality.component';
import { DeleteMunicipalityComponent } from './delete-municipality/delete-municipality.component';
import { AddMunicipalityInfoComponent } from './add-municipality-info/add-municipality-info.component';
import { UpdateMunicipalityInfoComponent } from './update-municipality-info/update-municipality-info.component';
import { MunicipalityDetailComponent } from './municipality-detail/municipality-detail.component';

import { AuthService } from '../auth.service';
import { MunicipalityService } from './municipality.service';
import { MunicipalityInfoService } from './municipality-info.service';

@NgModule({
  imports: [
    CommonModule,
    MunicipalitiesRoutingModule
  ],
  declarations: [MunicipalityComponent, 
    CreateMunicipalityComponent, 
    UpdateMunicipalityComponent, 
    DeleteMunicipalityComponent, 
    AddMunicipalityInfoComponent, 
    UpdateMunicipalityInfoComponent, 
    MunicipalityDetailComponent
  ],
  providers: [
    MunicipalityService,
    MunicipalityInfoService,
    AuthService
  ]
})
export class MunicipalitiesModule { }
