import { Route } from '@angular/router';
import { AggridComponent } from './aggrid.component';

// In admin/routes.ts:
export const AGGRID_ROUTES: Route[] = [
  {
    path: '',
    component: AggridComponent,
    children: [
      {
        path: 'no-aggrid',
        loadComponent: () =>
          import('./no-aggrid/no-aggrid.component').then(
            (mod) => mod.NoAggridComponent
          ),
      },
      {
        path: 'basic',
        loadComponent: () =>
          import('./basic/basic.component').then((mod) => mod.BasicComponent),
      },
      {
        path: 'aggrid-demo',
        loadComponent: () =>
          import('./aggrid-demo/aggrid-demo.component').then(
            (mod) => mod.AggridDemoComponent
          ),
      },
      {
        path: 'aggrid-enterprise',
        loadComponent: () =>
          import('./aggrid-enterprise/aggrid-enterprise.component').then(
            (mod) => mod.AggridEnterpriseComponent
          ),
      },
      {
        path: 'aggrid-customizing-cells',
        loadComponent: () =>
          import(
            './aggrid-customizing-cells/aggrid-customizing-cells.component'
          ).then((mod) => mod.AggridCustomizingCellsComponent),
      },
      {
        path: 'sort',
        loadComponent: () =>
          import('./sort/sort.component').then((mod) => mod.SortComponent),
      },
      {
        path: '',
        redirectTo: 'basic',
        pathMatch: 'full',
      },
    ],
  },
];
