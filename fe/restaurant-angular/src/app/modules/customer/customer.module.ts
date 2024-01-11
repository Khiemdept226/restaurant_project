import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {CustomerPageComponent} from "./customer-page.component";
import {SharedModule} from "../shared/shared.module";




@NgModule({
  declarations: [
    DashboardComponent,
    CustomerPageComponent
    // HeaderComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    SharedModule
  ]
})
export class CustomerModule { }
