import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlphaToolbarComponent } from './x/toolbars/alpha-toolbar/alpha-toolbar.component';
import { AlphaCardComponent } from './x/cards/alpha-card/alpha-card.component';
import { FieldDefinitionComponent } from './w/form/field-definition/field-definition.component';
import { NavigationComponent } from './w/navbars/navigation.component';
import { AlphaNavbarComponent } from './w/navbars/alpha-navbar/alpha-navbar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {RouterModule} from '@angular/router';
import { HomepageComponent } from './p/homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    AlphaToolbarComponent,
    AlphaCardComponent,
    FieldDefinitionComponent,
    NavigationComponent,
    AlphaNavbarComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatListModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
