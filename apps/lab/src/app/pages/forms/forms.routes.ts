import { Route } from '@angular/router';
import { FormsComponent } from './forms.component';

// In admin/routes.ts:
export const FORMS_ROUTES: Route[] = [
  {
    path: '',
    component: FormsComponent,
    children: [
      {
        path: 'inputs',
        loadComponent: () =>
          import('./inputs/inputs.component').then(
            (mod) => mod.InputsComponent,
          ),
      },
      {
        path: 'select',
        loadComponent: () =>
          import('./select/select.component').then(
            (mod) => mod.SelectComponent,
          ),
      },
      {
        path: 'checks-and-radios',
        loadComponent: () =>
          import('./checks-and-radios/checks-and-radios.component').then(
            (mod) => mod.ChecksAndRadiosComponent,
          ),
      },
      {
        path: 'range',
        loadComponent: () =>
          import('./range/range.component').then((mod) => mod.RangeComponent),
      },
      {
        path: 'input-groups',
        loadComponent: () =>
          import('./input-groups/input-groups.component').then(
            (mod) => mod.InputGroupsComponent,
          ),
      },
      {
        path: 'validation',
        loadComponent: () =>
          import('./validation/validation.component').then(
            (mod) => mod.ValidationComponent,
          ),
      },
      {
        path: 'form-elements',
        loadComponent: () =>
          import('./form-elements/form-elements.component').then(
            (mod) => mod.FormElementsComponent,
          ),
      },
      {
        path: 'form-layouts',
        loadComponent: () =>
          import('./form-layouts/form-layouts.component').then(
            (mod) => mod.FormLayoutsComponent,
          ),
      },
      {
        path: 'form-editors',
        loadComponent: () =>
          import('./form-editors/form-editors.component').then(
            (mod) => mod.FormEditorsComponent,
          ),
      },
    ],
  },
];
