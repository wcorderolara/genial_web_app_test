import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriesComponent } from './categories/categories.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { UpdateCategoryComponent } from './update-category/update-category.component';
import { DeleteCategoryComponent } from './delete-category/delete-category.component';

const routes: Routes = [
  {
    path: 'categories',
    component: CategoriesComponent
  },
  {
    path: 'category/add',
    component: AddCategoryComponent
  },
  {
    path: 'category/detail/:id',
    component: CategoryDetailComponent
  },
  {
    path: 'category/update/:id',
    component: UpdateCategoryComponent
  },
  {
    path: 'category/delete/:id',
    component: DeleteCategoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
