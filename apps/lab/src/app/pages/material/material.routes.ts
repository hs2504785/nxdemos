import { Route } from '@angular/router';
import { MaterialComponent } from './material.component';

// In admin/routes.ts:
export const MATERIAL_ROUTES: Route[] = [
  {
    path: '',
    component: MaterialComponent,
  },
  {
    path: 'slider',
    loadComponent: () =>
      import('./slider/slider.component').then((mod) => mod.SliderComponent),
  },
  {
    path: 'tree',
    loadChildren: () =>
      import('./tree/tree.routes').then((mod) => mod.TREE_ROUTES),
  },
  {
    path: 'virtual-scrolling',
    loadChildren: () =>
      import('./virtual-scrolling/virtual-scrolling.routes').then(
        (mod) => mod.VIRTUAL_SCROLLING_ROUTES
      ),
  },
  {
    path: 'chips',
    loadComponent: () =>
      import('./chips/chips.component').then((mod) => mod.ChipsComponent),
  },
];
