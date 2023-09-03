import { Route } from '@angular/router';
import { DemosComponent } from './demos.component';

// In admin/routes.ts:
export const DEMOS_ROUTES: Route[] = [
  {
    path: '',
    component: DemosComponent,
    children: [
      {
        path: 'dynamic-component',
        loadChildren: () =>
          import('./dynamic-component/dynamic-component.routes').then(
            (mod) => mod.DYNAMIC_COMPONENTS_ROUTES,
          ),
      },
      {
        path: 'upload-with-progress',
        loadComponent: () =>
          import('./upload-with-progress/upload-with-progress.component').then(
            (mod) => mod.UploadWithProgressComponent,
          ),
      },
      // {
      //   path: 'upload-files',
      //   loadComponent: () =>
      //     import('./upload-files/upload-files.component').then(
      //       (mod) => mod.UploadFilesComponent
      //     ),
      // },
      // {
      //   path: 'upload-files-tree',
      //   loadComponent: () =>
      //     import('./upload-files-tree/upload-files-tree.component').then(
      //       (mod) => mod.UploadFilesTreeComponent
      //     ),
      // },
    ],
  },
];
