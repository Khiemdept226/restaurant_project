import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './components/auth/auth.component';
import {SharedModule} from "../shared/shared.module";
import {PasswordModule} from "primeng/password";
import {InputTextModule} from "primeng/inputtext";



@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    SharedModule,
  ]
})
export class AuthModule { }
