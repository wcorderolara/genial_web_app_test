import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateUserComponent } from './create-user/create-user.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { LogoutUserComponent } from './logout-user/logout-user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginUserComponent
  },
  {
    path: 'user/create',
    component: CreateUserComponent
  },
  {
    path: 'user/detail/:id',
    component: UserDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
