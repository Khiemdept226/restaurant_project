import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminPageComponent } from './admin-page.component';
import {SharedModule} from "../shared/shared.module";
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import {FieldsetModule} from "primeng/fieldset";
import {RatingModule} from "primeng/rating";
import {TagModule} from "primeng/tag";

@NgModule({
  declarations: [
    AdminPageComponent,
    DashboardComponent,
    AddCategoryComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    FieldsetModule,
    RatingModule,
    TagModule,
  ]
})
export class AdminModule { }
