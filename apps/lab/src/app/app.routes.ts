import { Route } from '@angular/router';
import { BaseLayoutComponent } from './layout/base-layout/base-layout.component';
import { PagesLayoutComponent } from './layout/pages-layout/pages-layout.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: BaseLayoutComponent,
    children: [
      // Dashboads

      {
        path: '',
        loadComponent: () =>
          import('./pages/dashboard/dashboard.component').then(
            (m) => m.DashboardComponent
          ),
      },

      // // Content
      // {
      //   path: 'content',
      //   loadChildren: () =>
      //     import('./pages/content/content.routes').then(
      //       (m) => m.CONTENT_ROUTES
      //     ),
      // },

      // {
      //   path: 'forms',
      //   loadChildren: () =>
      //     import('./pages/forms/forms.routes').then((mod) => mod.FORMS_ROUTES),
      // },

      // {
      //   path: 'components',
      //   loadChildren: () =>
      //     import('./pages/components/components.routes').then(
      //       (mod) => mod.COMPONENTS_ROUTES
      //     ),
      // },
      // {
      //   path: 'material',
      //   loadChildren: () =>
      //     import('./pages/material/material.routes').then(
      //       (mod) => mod.MATERIAL_ROUTES
      //     ),
      // },
      // {
      //   path: 'ngb-bootstrap',
      //   loadChildren: () =>
      //     import('./pages/ngb-bootstrap/ngb-bootstrap.routes').then(
      //       (mod) => mod.NGBBOOTSTRAP_ROUTES
      //     ),
      // },
      // {
      //   path: 'demos',
      //   loadChildren: () =>
      //     import('./pages/demos/demos.routes').then((mod) => mod.DEMOS_ROUTES),
      // },
      // {
      //   path: 'aggrid',
      //   loadChildren: () =>
      //     import('./pages/aggrid/aggrid.routes').then(
      //       (mod) => mod.AGGRID_ROUTES
      //     ),
      // },
    ],
  },
  {
    path: '',
    component: PagesLayoutComponent,
    children: [
      // User Pages
    ],
  },

  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./pages/register/register.component').then(
        (m) => m.RegisterComponent
      ),
  },
  {
    path: 'not-found',
    loadComponent: () =>
      import('./pages/not-found/not-found.component').then(
        (m) => m.NotFoundComponent
      ),
  },
  { path: '**', redirectTo: 'not-found' },
];
