import { Route } from '@angular/router';
import { ComponentsComponent } from './components.component';

// In admin/routes.ts:
export const COMPONENTS_ROUTES: Route[] = [
  {
    path: '',
    component: ComponentsComponent,
    children: [
      // {
      //   path: 'alerts',
      //   loadComponent: () =>
      //     import('./alerts/alerts.component').then(
      //       (mod) => mod.AlertsComponent,
      //     ),
      // },
      // {
      //   path: 'accordian',
      //   loadComponent: () =>
      //     import('./accordian/accordian.component').then(
      //       (mod) => mod.AccordianComponent,
      //     ),
      // },

      // {
      //   path: 'badge',
      //   loadComponent: () =>
      //     import('./badge/badge.component').then((mod) => mod.BadgeComponent),
      // },
      // {
      //   path: 'breadcrumb',
      //   loadComponent: () =>
      //     import('./breadcrumb/breadcrumb.component').then(
      //       (mod) => mod.BreadcrumbComponent,
      //     ),
      // },
      {
        path: 'buttons',
        loadComponent: () =>
          import('./buttons/buttons.component').then(
            (mod) => mod.ButtonsComponent
          ),
      },
      // {
      //   path: 'button-groups',
      //   loadComponent: () =>
      //     import('./button-groups/button-groups.component').then(
      //       (mod) => mod.ButtonGroupsComponent,
      //     ),
      // },
      // {
      //   path: 'card',
      //   loadComponent: () =>
      //     import('./card/card.component').then((mod) => mod.CardComponent),
      // },
      // {
      //   path: 'carousel',
      //   loadComponent: () =>
      //     import('./carousel/carousel.component').then(
      //       (mod) => mod.CarouselComponent,
      //     ),
      // },
      // {
      //   path: 'list-group',
      //   loadComponent: () =>
      //     import('./list-group/list-group.component').then(
      //       (mod) => mod.ListGroupComponent,
      //     ),
      // },
      // {
      //   path: 'modal',
      //   loadComponent: () =>
      //     import('./modal/modal.component').then((mod) => mod.ModalComponent),
      // },
      // {
      //   path: 'tabs',
      //   loadComponent: () =>
      //     import('./tabs/tabs.component').then((mod) => mod.TabsComponent),
      // },
      // {
      //   path: 'pagination',
      //   loadComponent: () =>
      //     import('./pagination/pagination.component').then(
      //       (mod) => mod.PaginationComponent,
      //     ),
      // },
      // {
      //   path: 'progress',
      //   loadComponent: () =>
      //     import('./progress/progress.component').then(
      //       (mod) => mod.ProgressComponent,
      //     ),
      // },
      // {
      //   path: 'spinner',
      //   loadComponent: () =>
      //     import('./spinner/spinner.component').then(
      //       (mod) => mod.SpinnerComponent,
      //     ),
      // },
      // {
      //   path: 'tooltips',
      //   loadComponent: () =>
      //     import('./tooltips/tooltips.component').then(
      //       (mod) => mod.TooltipsComponent,
      //     ),
      // },
      // {
      //   path: 'btn-close',
      //   loadComponent: () =>
      //     import('./btn-close/btn-close.component').then(
      //       (mod) => mod.BtnCloseComponent,
      //     ),
      // },
      // {
      //   path: 'collapse',
      //   loadComponent: () =>
      //     import('./collapse/collapse.component').then(
      //       (mod) => mod.CollapseComponent,
      //     ),
      // },
      // {
      //   path: 'skelton',
      //   loadComponent: () =>
      //     import('./skelton/skelton.component').then(
      //       (mod) => mod.SkeltonComponent,
      //     ),
      // },
      {
        path: '',
        redirectTo: 'buttons',
        pathMatch: 'full',
      },
    ],
  },
];
