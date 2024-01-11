import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SharedModule} from "./modules/shared/shared.module";
import {AuthModule} from "./modules/auth/auth.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToastModule} from "primeng/toast";
import {MessageService} from "primeng/api";
import {DatePipe} from "@angular/common";
import {AdminModule} from "./modules/admin/admin.module";
import {CustomerModule} from "./modules/customer/customer.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    AppRoutingModule,
    AuthModule,
    AdminModule,
    CustomerModule
  ],
  providers: [
    MessageService,
    DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
