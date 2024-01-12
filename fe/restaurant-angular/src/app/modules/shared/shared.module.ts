import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {PasswordModule} from "primeng/password";
import {HttpClientModule} from "@angular/common/http";
import { AvatarModule } from 'primeng/avatar';
import {ToastModule} from "primeng/toast";
import { HeaderComponent } from './components/headers/header.component';
import { MenuComponent } from './components/menu/menu.component';
import {MenuModule} from "primeng/menu";
import {SplitButtonModule} from "primeng/splitbutton";


@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    PasswordModule,
    HttpClientModule,
    MenuModule,
    AvatarModule,
    SplitButtonModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    PasswordModule,
    ToastModule,
    HeaderComponent,
    MenuComponent
  ],
})
export class SharedModule { }
