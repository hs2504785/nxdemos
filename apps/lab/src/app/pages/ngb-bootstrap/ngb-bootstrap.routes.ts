import { Route } from '@angular/router';
import { NgbBootstrapComponent } from './ngb-bootstrap.component';

// In admin/routes.ts:
export const NGBBOOTSTRAP_ROUTES: Route[] = [
  {
    path: '',
    component: NgbBootstrapComponent,
    children: [
      {
        path: 'accordian',
        loadComponent: () =>
          import('./accordian/accordian.component').then(
            (mod) => mod.AccordianComponent
          ),
      },
      {
        path: 'alert',
        loadComponent: () =>
          import('./alert/alert.component').then((mod) => mod.AlertComponent),
      },
      {
        path: 'tooltip',
        loadComponent: () =>
          import('./tooltip/tooltip.component').then(
            (mod) => mod.TooltipComponent
          ),
      },
      {
        path: 'modal',
        loadComponent: () =>
          import('./modal/modal.component').then((mod) => mod.ModalComponent),
      },
      {
        path: 'nav',
        loadComponent: () =>
          import('./nav/nav.component').then((mod) => mod.NavComponent),
      },
      {
        path: 'offcanvas',
        loadComponent: () =>
          import('./offcanvas/offcanvas.component').then(
            (mod) => mod.OffcanvasComponent
          ),
      },
      {
        path: 'popover',
        loadComponent: () =>
          import('./popover/popover.component').then(
            (mod) => mod.PopoverComponent
          ),
      },
      {
        path: 'typeahead',
        loadComponent: () =>
          import('./typeahead/typeahead.component').then(
            (mod) => mod.TypeaheadComponent
          ),
      },
      {
        path: 'toast',
        loadComponent: () =>
          import('./toast/toast.component').then(
            (mod) => mod.ToastDemoComponent
          ),
      },
      {
        path: 'dropdown',
        loadComponent: () =>
          import('./dropdown/dropdown.component').then(
            (mod) => mod.DropdownComponent
          ),
      },
    ],
  },
];
