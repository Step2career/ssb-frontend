import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import {HomeModule} from './home/home.module'
import { HomeComponent } from './home/home.component';

const routes: Routes = [
 { path: '', component: HomeComponent },
  // Add more routes for this module
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }