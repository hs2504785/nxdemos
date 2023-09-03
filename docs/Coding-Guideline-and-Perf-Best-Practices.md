# Philosophy:

Load only what you need

## How you can achieve it ?

To reduce JS bundle size:

1. Lazy load routed component
2. Lazy load component ( smaller piece of screen )
3. lazy load modals

To reduce CSS bundle size:

- create branding theme css ( global ), and use purgecss to remove unused css (should be less than 100KB)
- keep component specific css minimal max 2KB

## 1. Lazy load routed component

```js
// Lazy load routes
{
  path: 'dataset',
  loadChildren: () =>
    import('./components/dataset/dataset.routes').then(
      (m) => m.DATASET_ROUTES,
    ),
},

// lazy load routed component
{
  path: 'flow',
  loadComponent: () =>
    import('@gale/galeapp/src/lib/flow/flow.component').then(
      (m) => m.FlowComponent,
    ),
},

// Lazy load component and append to template

```
