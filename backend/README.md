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

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Check configuration
- visit `http://api.whoowesme.local` you should see output as `{"status":"OK","version":"1.0.0"}`. If you see this output then it means api is configured properly.

if you get `service unavailable` then it means something is not configured properly then you should check the output log of `docker logs whoapi` and then fix accordingly.

## Database & ORM

- [Postgres](https://www.postgresql.org/)
- [TypeORM](https://typeorm.io/#/)

## License

- MIT
