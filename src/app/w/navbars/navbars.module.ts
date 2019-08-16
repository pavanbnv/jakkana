import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation.component';
import { AlphaNavbarComponent } from './alpha-navbar/alpha-navbar.component';


@NgModule({
  declarations: [NavigationComponent, AlphaNavbarComponent],
  imports: [
    CommonModule
  ]
})
export class NavbarsModule { }
