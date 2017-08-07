import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubDivisionComponent } from './sub-division/sub-division.component';
import { CreateSubDivisionComponent } from './create-sub-division/create-sub-division.component';
import { DetailSubDivisionComponent } from './detail-sub-division/detail-sub-division.component';
import { UpdateSubDivisionComponent } from './update-sub-division/update-sub-division.component';
import { DeleteSubDivisionComponent } from './delete-sub-division/delete-sub-division.component';
import { AddSubDivisionInfoComponent } from './add-sub-division-info/add-sub-division-info.component';
import { UpdateSubDivisionInfoComponent } from './update-sub-division-info/update-sub-division-info.component';

const routes: Routes = [
  {
    path: 'sub-divisions/:countryName/:idCountry',
    component: SubDivisionComponent
  },
  {
    path: 'sub-division/create',
    component: CreateSubDivisionComponent
  },
  {
    path: 'sub-division/detail/:id',
    component: DetailSubDivisionComponent
  },
  {
    path: 'sub-division/update/:id',
    component: UpdateSubDivisionComponent
  },
  {
    path: 'sub-division/delete/:id',
    component: DeleteSubDivisionComponent
  },
  {
    path: 'sub-division/add/info/:id',
    component: AddSubDivisionInfoComponent
  },
  {
    path: 'sub-division/update/info/:id',
    component: UpdateSubDivisionInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubDivisionsRoutingModule { }
