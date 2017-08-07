import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserComponent } from './user/user.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { LogoutUserComponent } from './logout-user/logout-user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { CreateUserComponent } from './create-user/create-user.component';

import { AuthService } from '../auth.service';
import { UserService } from './user.service';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule
  ],
  declarations: [
    UserComponent, 
    LoginUserComponent, 
    LogoutUserComponent, 
    UserDetailComponent, 
    CreateUserComponent
  ],
  providers: [
    UserService,
    AuthService
  ]
})
export class UsersModule { }
