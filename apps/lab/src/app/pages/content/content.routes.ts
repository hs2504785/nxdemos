import { Route } from '@angular/router';
import { ContentComponent } from './content.component';

// In admin/routes.ts:
export const CONTENT_ROUTES: Route[] = [
  {
    path: '',
    component: ContentComponent,
    children: [
      {
        path: 'color',
        loadComponent: () =>
          import('./color/color.component').then((mod) => mod.ColorComponent),
      },
      // {
      //   path: 'typography',
      //   loadComponent: () =>
      //     import('./typography/typography.component').then(
      //       (mod) => mod.TypographyComponent,
      //     ),
      // },
      // {
      //   path: 'tables',
      //   loadComponent: () =>
      //     import('./tables/tables.component').then(
      //       (mod) => mod.TablesComponent,
      //     ),
      // },
      // {
      //   path: 'images',
      //   loadComponent: () =>
      //     import('./images/images.component').then(
      //       (mod) => mod.ImagesComponent,
      //     ),
      // },
      // {
      //   path: 'figures',
      //   loadComponent: () =>
      //     import('./figures/figures.component').then(
      //       (mod) => mod.FiguresComponent,
      //     ),
      // },
      // {
      //   path: 'theme',
      //   loadComponent: () =>
      //     import('./theme/theme.component').then((mod) => mod.ThemeComponent),
      // },
      // {
      //   path: 'callout',
      //   loadComponent: () =>
      //     import('./callout/callout.component').then(
      //       (mod) => mod.CalloutComponent,
      //     ),
      // },
      // {
      //   path: 'spacing',
      //   loadComponent: () =>
      //     import('./spacing/spacing.component').then(
      //       (mod) => mod.SpacingComponent,
      //     ),
      // },
    ],
  },
];
