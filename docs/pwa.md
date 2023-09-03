# PWA ( Progressive Web Application) with Angular

Web application with native like capabilities

```
ng add @angular/pwa --project <project-name>
```

```js
// configured
// apps\searchassist\src\app\app.module.ts
ServiceWorkerModule.register('ngsw-worker.js', {
  enabled: !isDevMode(),
  // Register the ServiceWorker as soon as the application is stable
  // or after 30 seconds (whichever comes first).
  registrationStrategy: 'registerWhenStable:30000',
}),

// Assets configuration
apps\searchassist\ngsw-config.json
```

## Performance

```json
// apps\searchassist\ngsw-config.json
"dataGroups": [
  {
    "name": "apps api",
    "urls": ["/apps"],
    "cacheConfig": {
      "strategy": "performance",
      "maxAge": "1d",
      "maxSize": 100
    }
  }
]
```

## Why PWA

Here are three simple reasons Progressive Web Apps are more effective ways of engaging with your users:

1. Reliable: They load instantly
2. Fast: They respond quickly
3. Engaging: They feel natural

## Why Offline App

1. Get A Competitive Edge
   why users select one app over the other – functionality, performance, UI, and UX.

2. Improved Customer Loyalty

- Users can access their data, regardless of an internet connection
- The app becomes faster & loads quickly
- Offline apps are less likely to consume your phone’s battery

3. Saves Mobile Battery Power
4. No Roaming Expenses
5. Users can stay connected to the app even if they are traveling.

# Resources

https://angular.io/guide/service-worker-getting-started
