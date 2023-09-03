import { Route } from '@angular/router';
import { DynamicComponent } from './dynamic-component.';

// In admin/routes.ts:
export const DYNAMIC_COMPONENTS_ROUTES: Route[] = [
  {
    path: '',
    component: DynamicComponent,
  },
  {
    path: 'alerthost',
    loadComponent: () =>
      import('./alerthost/alerthost.component').then(
        (mod) => mod.AlerthostComponent
      ),
  },
  {
    path: 'modalhost',
    loadComponent: () =>
      import('./modalhost/modalhost.component').then(
        (mod) => mod.ModalhostComponent
      ),
  },
];
