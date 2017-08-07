import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CategoriesModule } from './categories/categories.module';
import { CountriesModule } from './countries/countries.module';
import { SubDivisionsModule } from './sub-divisions/sub-divisions.module';
import { MunicipalitiesModule } from './municipalities/municipalities.module';
import { UsersModule } from './users/users.module';
import { HomeModule } from './home/home.module';
import { HttpModule } from '@angular/http';

import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { SimpleNotificationsModule } from 'angular2-notifications';

import { AppComponent } from './app.component';
import {AppRoutingModule } from './app-routing.module';
import { ChangeIndependentTextPipe } from './change-independent-text.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ChangeIndependentTextPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CategoriesModule,
    CountriesModule,
    SubDivisionsModule,
    MunicipalitiesModule,
    UsersModule,
    HomeModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
    SimpleNotificationsModule.forRoot(),
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
