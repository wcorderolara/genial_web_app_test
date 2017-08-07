import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CountryComponent } from './country/country.component';
import { CreateCountryComponent } from './create-country/create-country.component';
import { DetailCountryComponent } from './detail-country/detail-country.component';
import { UpdateCountryComponent } from './update-country/update-country.component';
import { DeleteCountryComponent } from './delete-country/delete-country.component';
import { AddCountryInfoComponent } from './add-country-info/add-country-info.component';
import { UpdateCountryInfoComponent } from './update-country-info/update-country-info.component';

const routes: Routes = [
  {
    path: 'countryies',
    component: CountryComponent
  },
  {
    path: 'country/add',
    component: CreateCountryComponent
  },
  {
    path: 'country/detail/:id',
    component: DetailCountryComponent
  },
  {
    path: 'country/update/:id',
    component: UpdateCountryComponent
  },
  {
    path: 'country/delete/:id',
    component: DeleteCountryComponent
  },
  {
    path: 'country/add/info/:id',
    component: AddCountryInfoComponent
  },
  {
    path: 'country/update/info/:id',
    component: UpdateCountryInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountriesRoutingModule { }
