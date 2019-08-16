import { BrowserModule,Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlphaToolbarComponent } from './x/toolbars/alpha-toolbar/alpha-toolbar.component';
import { AlphaCardComponent } from './x/cards/alpha-card/alpha-card.component';
import { FieldDefinitionComponent } from './w/form/field-definition/field-definition.component';
import { NavigationComponent } from './w/navbars/navigation.component';
import { AlphaNavbarComponent } from './w/navbars/alpha-navbar/alpha-navbar.component';
import { AlphaSidebarComponent } from './w/sidebars/alpha-sidebar/alpha-sidebar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatMenuModule} from '@angular/material/menu';
import {MatInputModule} from '@angular/material';
import {RouterModule} from '@angular/router';
import { HomepageComponent } from './p/homepage/homepage.component';
import { FlowbuilderComponent } from './p/flowbuildermainpage/flowbuilder/flowbuilder.component';
import { FooterComponent } from './p/footer/footer.component';
import { LandingpageComponent } from './p/landingpage/landingpage.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    AlphaToolbarComponent,
    AlphaCardComponent,
    FieldDefinitionComponent,
    NavigationComponent,
    AlphaNavbarComponent,
    AlphaSidebarComponent,
    HomepageComponent,
    FlowbuilderComponent,
    FooterComponent,
    LandingpageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatMenuModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatListModule,
    FormsModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
