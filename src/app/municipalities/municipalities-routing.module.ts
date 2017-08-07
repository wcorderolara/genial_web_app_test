import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MunicipalityComponent } from './municipality/municipality.component';
import { CreateMunicipalityComponent } from './create-municipality/create-municipality.component';
import { MunicipalityDetailComponent } from './municipality-detail/municipality-detail.component';
import { UpdateMunicipalityComponent } from './update-municipality/update-municipality.component';
import { DeleteMunicipalityComponent } from './delete-municipality/delete-municipality.component';
import { AddMunicipalityInfoComponent } from './add-municipality-info/add-municipality-info.component';
import { UpdateMunicipalityInfoComponent } from './update-municipality-info/update-municipality-info.component';

const routes: Routes = [
  {
    path: 'municipalities/:subDivisionName/:idSubDivision',
    component: MunicipalityComponent
  },
  {
    path: 'municipality/create',
    component: CreateMunicipalityComponent
  },
  {
    path: 'municipality/detail/:idMunicipality',
    component: MunicipalityDetailComponent
  },
  {
    path: 'municipality/update/:idMunicipality',
    component: UpdateMunicipalityComponent
  },
  {
    path: 'municipality/delete/:idMunicipality',
    component: DeleteMunicipalityComponent
  },
  {
    path: 'municipality/add/info/:id',
    component: AddMunicipalityInfoComponent
  },
  {
    path: 'municipality/update/info/:id',
    component: UpdateMunicipalityComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MunicipalitiesRoutingModule { }
