import { Route } from '@angular/router';
import { TreeComponent } from './tree.component';

// In admin/routes.ts:
export const TREE_ROUTES: Route[] = [
  {
    path: '',
    component: TreeComponent,
  },
  {
    path: 'nested-tree',
    loadComponent: () =>
      import('./components/nested-tree/nested-tree.component').then(
        (mod) => mod.NestedTreeComponent
      ),
  },
  {
    path: 'flat-tree',
    loadComponent: () =>
      import('./components/flat-tree/flat-tree.component').then(
        (mod) => mod.FlatTreeComponent
      ),
  },
];
