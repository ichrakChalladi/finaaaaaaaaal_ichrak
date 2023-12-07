import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { NavbarDashboardComponent } from './shared/navbar-dashboard/navbar-dashboard.component';
import { ListReservationComponent } from './core/list-reservation/list-reservation.component';
import { DetailsReservationComponent } from './core/details-reservation/details-reservation.component';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';




// icons
import { TablerIconsModule } from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';

//Import all material modules
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Import Layouts
import { FullComponent } from './layouts/full/full.component';
import { BlankComponent } from './layouts/blank/blank.component';

// Vertical Layout
import { SidebarComponent } from './layouts/full/sidebar/sidebar.component';
import { HeaderComponent } from './layouts/full/header/header.component';
import { BrandingComponent } from './layouts/full/sidebar/branding.component';
import { AppNavItemComponent } from './layouts/full/sidebar/nav-item/nav-item.component';
import {AddEtudiantComponent} from "./core/add-etudiant/add-etudiant.component";
import {DeleteEtudiantComponent} from "./core/delete-etudiant/delete-etudiant.component";
import {DetailEtudiantComponent} from "./core/detail-etudiant/detail-etudiant.component";
import {ShowEtudiantComponent} from "./core/show-etudiant/show-etudiant.component";
import {UpdateEtudiantComponent} from "./core/update-etudiant/update-etudiant.component";
import {EtudiantComponent} from "./core/etudiant/etudiant.component";
import { ErrorMessageStyleDirective } from './core/ErrorMessageStyleDirective';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavbarDashboardComponent,
    ListReservationComponent,
    DetailsReservationComponent,
    FullComponent,
    BlankComponent,
    SidebarComponent,
    HeaderComponent,
    BrandingComponent,
    AppNavItemComponent,
    AddEtudiantComponent,
    DeleteEtudiantComponent,
    DetailEtudiantComponent,
    ShowEtudiantComponent,
    UpdateEtudiantComponent,
    EtudiantComponent,
    ErrorMessageStyleDirective,
    ///olololoooo

  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    MatInputModule,
 MatDatepickerModule,
 MatFormFieldModule,
    TablerIconsModule.pick(TablerIcons),
    
    
  ],
  exports: [TablerIconsModule, ShowEtudiantComponent,],
  bootstrap: [AppComponent],
})
export class AppModule {}
