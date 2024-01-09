import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthComponent} from "./modules/auth/components/auth/auth.component";
import {AppComponent} from "./app.component";

const routes: Routes = [
  {path: '',  component: AppComponent},
  {path: 'signup',  component: AuthComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
