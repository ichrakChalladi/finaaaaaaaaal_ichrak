import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankComponent } from './layouts/blank/blank.component';
import { FullComponent } from './layouts/full/full.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ListReservationComponent } from './core/list-reservation/list-reservation.component';
import { DetailsReservationComponent } from './core/details-reservation/details-reservation.component';
import {DetailEtudiantComponent} from "./core/detail-etudiant/detail-etudiant.component";
import {ShowEtudiantComponent} from "./core/show-etudiant/show-etudiant.component";
import {DeleteEtudiantComponent} from "./core/delete-etudiant/delete-etudiant.component";
import {AddEtudiantComponent} from "./core/add-etudiant/add-etudiant.component";
import {UpdateEtudiantComponent} from "./core/update-etudiant/update-etudiant.component";
import {EtudiantComponent} from "./core/etudiant/etudiant.component";

const routes: Routes =  [
  

  {
   
    path: '',
    component: FullComponent,
    children: [

      // ...
      { path: 'update/:id', component: UpdateEtudiantComponent },
      {path: 'addEtudiant', component: AddEtudiantComponent},
      {path: '', component: ShowEtudiantComponent},
      {path: 'details/:id', component: DetailEtudiantComponent},
      {path: 'DeleteByIDEtudiant/:id', component: DeleteEtudiantComponent}
      

      
      // ...
    ],
  },
  {
    path: '',

    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./pages/pages.module').then((m) => m.PagesModule),
      },
      {
        path: 'ui-components',
        loadChildren: () =>
          import('./pages/ui-components/ui-components.module').then(
            (m) => m.UicomponentsModule
          ),
      },
      {
        path: 'extra',
        loadChildren: () =>
          import('./pages/extra/extra.module').then((m) => m.ExtraModule),
      },
      {path:"reservation/liste" , component:ListReservationComponent},
      {path:"reservation/:id" , component:DetailsReservationComponent},
    ],
  },
  {
    path: '',
    component: BlankComponent,
    children: [
      {
        path: 'authentication',
        loadChildren: () =>
          import('./pages/authentication/authentication.module').then(
            (m) => m.AuthenticationModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
