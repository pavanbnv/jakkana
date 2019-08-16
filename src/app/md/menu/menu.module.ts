import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Menu {
 items: MenuItem[];
}
export interface MenuItem {
  id?: string;
  name: string;
  summary?: string;
  icon?: Icon;
}
export interface Icon {
   name:string
}
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class MenuModule { }
