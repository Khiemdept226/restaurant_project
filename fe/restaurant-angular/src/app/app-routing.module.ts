import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthComponent} from "./modules/auth/components/auth/auth.component";
import {AppComponent} from "./app.component";
import {DashboardComponent} from "./modules/customer/components/dashboard/dashboard.component";
import {AdminPageComponent} from "./modules/admin/admin-page.component";
import {CustomerPageComponent} from "./modules/customer/customer-page.component";

const routes: Routes = [
  {path: '',  component: AppComponent},
  {path: 'signup',  component: AuthComponent},
  {path: 'admin',  component: AdminPageComponent},
  {path: 'customer',  component: CustomerPageComponent}]
  // {path: 'restaurant', loadChildren: () => import('./app.module').then(m => m.AppModule)},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
