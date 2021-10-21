<p  align="center">

<a  href="http://nestjs.com/"  target="blank"><img  src="https://nestjs.com/img/logo_text.svg"  width="320"  alt="Nest Logo" /></a>

</p>


## Description

An app for managing a soccer league with the ability to add/remove members, teams, and matches. Also manages staff information and auditing.

## Configuration

This project is currently configured to run on the following localhost ports via Docker containers:

- postgres: 5433
- app: 3001

However, these can be changed via the docker-compose.yml file if desired.

**A .env file is required to be able to run this project.**
Make sure that your .env has **DB_HOST = postgres** set. Below is a sample .env:

    NAME = MYAPP
    HOST = localhost
    PORT = 3000
    DB_CONNECTION = postgres
    DB_HOST = postgres
    DB_USERNAME = username
    DB_PASSWORD = passw0rd
    DB_DATABASE = league
    TYPEORM_PORT = 5432
    TYPEORM_ENTITIES = src/**/models/*.entity{.ts,.js}
    TYPEORM_MIGRATIONS = src/database/migrations/*{.ts,.js}
    TYPEORM_MIGRATIONS_DIR = src/database/migrations

**Add the following to your package.json:**

    "start:docker": "(npm run migration) & nest start --watch"

## Running the containers on Docker

To start up the postgres and app containers needed to use this app as well as run migrations, run:

    docker-compose up

## OpenAPI Documentation

OpenAPI Documentation is available for viewing endpoints and their operations, as well as DTO's and types. This is available at **localhost:{app container port}/docs** (localhost:3001/docs by default).

## Installation

```bash

$ npm install

```

## Running the app

```bash

# development

$ npm run start



# watch mode

$ npm run start:dev



# production mode

$ npm run start:prod

```

## Test

```bash

# unit tests

$ npm run test



# e2e tests

$ npm run test:e2e



# test coverage

$ npm run test:cov

```

## License

Nest is [MIT licensed](LICENSE).
