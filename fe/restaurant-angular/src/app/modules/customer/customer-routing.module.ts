import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {AdminPageComponent} from "../admin/admin-page.component";
import {AddCategoryComponent} from "../admin/components/add-category/add-category.component";
import {CustomerPageComponent} from "./customer-page.component";

const routes: Routes = [
  {path: '', component: CustomerPageComponent, children: [
      {path: 'dashboard', component: DashboardComponent},
      {path: '', pathMatch: 'full', redirectTo: 'dashboard'}
    ]},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
