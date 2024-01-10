import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './components/auth/auth.component';
import {SharedModule} from "../shared/shared.module";
import {PasswordModule} from "primeng/password";
import {InputTextModule} from "primeng/inputtext";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    SharedModule,
  ]
})
export class AuthModule { }
