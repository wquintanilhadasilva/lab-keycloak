# Keycloak


RedHat's KeyCloak practice lab, using Angular, Java (Jersey) and .Net5

The KeyCloak server is configured to run in a docker container (check the docker folder), in a docker-compose file that also uses postgresql.

## Angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.3.
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## .Net 5

No secret to run

## Java 8 - Jersey

Java Maven Project: Use mvn commands to compile and deploy app in webserver. I'm using Jboss-EAP70

## Docker

run command to start:

```
docker-compose up --build -d 

```

run command to stop:

```
docker-compose down

```

Server run in 8081 port.

[KeyCloak Server Admin](http://localhost:8081/auth/admin)


