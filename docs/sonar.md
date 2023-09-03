# Sonar Integration

## Setup

## Step 1 - Install Sonarqube

https://www.sonarsource.com/products/sonarqube/downloads/

Download and install https://www.sonarsource.com/products/sonarqube/downloads/success-download-community-edition/

Start sonarqube server (windows) by double click `C:\sonarqube-10.1.0.73491\bin\windows-x86-64\StartSonar.bat`

## Step 2 - Configure Sonarqube with your Angular Project

```
npm install sonar-scanner --save-dev

// package.json
"sonar": "sonar-scanner"

// create sonar-project.properties
# use username/password gale/gale
sonar.host.url=http://localhost:9000
# sonar.login=admin
# sonar.password=admin
sonar.projectKey=galekey
sonar.projectName=gale
sonar.token=sqp_d1de646ac13ba9460db1bc41c66e96f14a54fb71
sonar.projectVersion=1.0
sonar.sourceEncoding=UTF-8
sonar.sources=apps/gale/src
sonar.exclusions=**/node_modules/**
#sonar.tests=src
# sonar.test.inclusions=**/*.spec.ts
sonar.typescript.lcov.reportPaths=coverage/lcov.info
```

## Step 3 - Run Sonar

```
npm run sonar

// open
http://localhost:9000/
```
