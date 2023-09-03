import { Route } from '@angular/router';
import { VirtualScrollingComponent } from './virtual-scrolling.component';

// In admin/routes.ts:
export const VIRTUAL_SCROLLING_ROUTES: Route[] = [
  {
    path: '',
    component: VirtualScrollingComponent,
  },
  {
    path: 'without-virtual-scrolling',
    loadComponent: () =>
      import(
        './components/without-virtual-scrolling/without-virtual-scrolling.component'
      ).then((mod) => mod.WithoutVirtualScrollingComponent),
  },
  {
    path: 'with-virtual-scrolling',
    loadComponent: () =>
      import(
        './components/with-virtual-scrolling/with-virtual-scrolling.component'
      ).then((mod) => mod.WithVirtualScrollingComponent),
  },
];
