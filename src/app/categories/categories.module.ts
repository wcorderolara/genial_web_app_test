import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './categories/categories.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { DeleteCategoryComponent } from './delete-category/delete-category.component';
import { UpdateCategoryComponent } from './update-category/update-category.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';

import { CategoryService  } from './category.service';

@NgModule({
  imports: [
    CommonModule,
    CategoriesRoutingModule
  ],
  
  declarations: [
    CategoriesComponent, 
    AddCategoryComponent, 
    DeleteCategoryComponent, 
    UpdateCategoryComponent, 
    CategoryDetailComponent
  ],

  providers: [ CategoryService ]
})
export class CategoriesModule { }
