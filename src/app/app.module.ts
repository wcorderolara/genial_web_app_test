import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CategoriesModule } from './categories/categories.module';
import { CountriesModule } from './countries/countries.module';
import { SubDivisionsModule } from './sub-divisions/sub-divisions.module';
import { MunicipalitiesModule } from './municipalities/municipalities.module';
import { UsersModule } from './users/users.module';
import { HomeModule } from './home/home.module';

import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

import { AppComponent } from './app.component';
import {AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CategoriesModule,
    CountriesModule,
    SubDivisionsModule,
    MunicipalitiesModule,
    UsersModule,
    HomeModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
