import { Routes } from '@angular/router';

import { AppSideLoginComponent } from '../../core/login/login.component';
import { AppSideRegisterComponent } from '../../core/register/register.component';

export const AuthenticationRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'login',
        component: AppSideLoginComponent,
      },
      {
        path: 'register',
        component: AppSideRegisterComponent,
      },
    ],
  },
];
