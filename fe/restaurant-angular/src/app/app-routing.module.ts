import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthComponent} from "./modules/auth/components/auth/auth.component";
import {AppComponent} from "./app.component";

const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'signup', component: AuthComponent},
  {path: 'admin', loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule)},
  {path: 'customer', loadChildren: () => import('./modules/customer/customer.module').then(m => m.CustomerModule)},
  // {path: 'customer',  component: CustomerPageComponent}]
  // {path: 'restaurant', loadChildren: () => import('./app.module').then(m => m.AppModule)},];
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
