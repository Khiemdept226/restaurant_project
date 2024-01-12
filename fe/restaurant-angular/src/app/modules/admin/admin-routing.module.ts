import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {AdminPageComponent} from "./admin-page.component";
import {AddCategoryComponent} from "./components/add-category/add-category.component";

const routes: Routes = [
  {path: '', component: AdminPageComponent, children: [
      {path: 'dashboard', component: DashboardComponent},
      {path: 'category', component: AddCategoryComponent},
      {path: '', pathMatch: 'full', redirectTo: 'dashboard'}
    ]},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
