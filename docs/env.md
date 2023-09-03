# Environment Setup

```
nx generate environments

```

## Configure build & serve configuration

```js
  "targets": {
    "build": {
      "configurations": {
        "production": {
        },
        "development": {
          "fileReplacements": [
            {
              "replace": "apps/korelab/src/environments/environment.ts",
              "with": "apps/korelab/src/environments/environment.development.ts"
            }
          ]
        },
        "staging": {
          "fileReplacements": [
            {
              "replace": "apps/korelab/src/environments/environment.ts",
              "with": "apps/korelab/src/environments/environment.staging.ts"
            }
          ]
        }
      },
      "defaultConfiguration": "production"
    },
    "serve": {
      "executor": "@angular-devkit/build-angular:dev-server",
      "configurations": {
        "production": {
          "browserTarget": "korelab:build:production"
        },
        "development": {
          "browserTarget": "korelab:build:development"
        },
        "staging": {
          "browserTarget": "korelab:build:staging"
        }
      },
      "defaultConfiguration": "development"
    }
  }
```

## Use

```js
// use
import { environment } from './../environments/environment';
export class AppComponent {
  constructor() {
    console.log(environment.production); // Logs false for development environment
  }
}
```
