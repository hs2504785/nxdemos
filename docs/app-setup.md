# APP Setup

## Prerequisite

NODEJS: https://nodejs.org/dist/v19.6.0/node-v19.6.0-x64.msi

GIT: https://git-scm.com/download/win

```
npm i @angular/cli -g
npm i nx -g
```

## Code Setup

```
git clone https://github.com/deepakmu-kore/gale-frontend-service.git
cd gale-frontend-service
npm i
```

## Useful npm scripts

```
// Dev server
npm start
http://localhost:4200/

// Build
npm run build

// Lint
npm run lint
npm run lintfix

// Unit Test
npm run test

// Audit
npm run audit

// Bundle Analyzer
npm run wba

// Documentation
npm run compodoc

// Mock Server
npm run server
```

## Code Generation

Generate lazy loaded routed component

```js
nx g c home --standalone
```

```js
// add route home.routes.ts
import { Route } from '@angular/router';
import { HomeComponent } from './home.component';

export const HOME_ROUTES: Route[] = [
  {
    path: '',
    component: HomeComponent,
  },
];
```

Link route with app in `app.routes.ts`

```js
{
  path: 'home',
  loadChildren: () =>
    import('./pages/home/home.routes').then((m) => m.HOME_ROUTES)
},
```

```js
// app.routes.ts
export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'apps',
    pathMatch: 'full',
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home',
    },
    children: [
      {
        path: 'apps',
        loadChildren: () =>
          import('./pages/apps/apps.routes').then((m) => m.APPS_ROUTES),
      },
      {
        path: 'prompt',
        loadChildren: () =>
          import('./pages/prompt/prompts.routes').then((m) => m.PROMPT_ROUTES),
      },
      {
        path: 'home',
        loadChildren: () =>
          import('./pages/home/home.routes').then((m) => m.HOME_ROUTES),
      },
    ],
  },
];
```
