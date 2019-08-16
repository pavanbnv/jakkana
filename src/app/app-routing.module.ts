import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './p/homepage/homepage.component';
import { FlowbuilderComponent } from './p/flowbuildermainpage/flowbuilder/flowbuilder.component';
import { LandingpageComponent } from './p/landingpage/landingpage.component';
const routes: Routes = [
  {path: '', component: LandingpageComponent, pathMatch: 'full', data: {}},
  {path: 'fb', component: FlowbuilderComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
