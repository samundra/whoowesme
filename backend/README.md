<h1 align="center">Whoowesme - API</h1>
<div>
    <p align="center">:construction: This project is still a work in progress :construction:</p><br/>
</div>
This repo is based on [Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.
<div>

## Setup

### OPTIONAL - docker development setup

```bash
$ docker network create web
$ docker volume create whodata
```

### Configuration

- edit `/etc/hosts` file and then add `127.0.0.1 api.whoowesme.local`

```bash
$ cp .env.example .env
```

- Open `.env` and configure to suit your need

## Running the app

```bash
$ npm install

# development
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

Project contains end-to-end testings only so you will not find any unit test.
Environment variables are loaded from `.env.test` env file. During e2e test, database "db_whoowesmetest" is used.

`.env.test` contains exactly the same content as that of `.env`. Create `.env.test` from `.env.example` at project root directory.

_`docker-compose up -d` will create `whodbtest` container used for e2e test._

### Contents of `.env.test`

```conf
# Filename: .env.test
FRONTEND_ORIGIN=http://localhost:8000
APP_PORT=5000

POSTGRES_HOST=127.0.0.1
POSTGRES_PORT=5423
POSTGRES_USER=postgres
POSTGRES_PASSWORD=postgres
POSTGRES_DATABASE=db_whoowesmetest

DB_SYNCHRONIZE=false

JWT_SECRETS=SecrestForTest
JWT_TOKEN_EXPIRES=2h
```

### Run e2e test

```bash
# e2e tests without coverage
$ npm run test:e2e

# e2e tests with coverage
$ npm run test:e2e:cov
```

## Check configuration

- visit `http://api.whoowesme.local` you should see output as `{"status":"OK","version":"1.0.0"}`. If you see this output then it means api is configured properly.

if you get `service unavailable` then it means something is not configured properly then you should check the output log of `docker logs whoapi` and then fix accordingly.

## Database & ORM

- [Postgres](https://www.postgresql.org/)
- [TypeORM](https://typeorm.io/#/)

### Migrations

```bash
## Up Migration
$ npm run migration:up

## Down Migration
$ npm run migration:down
```

## License

- MIT
