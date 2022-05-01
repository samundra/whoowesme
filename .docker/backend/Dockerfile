FROM node:17-alpine

#RUN apk update && apk upgrade && apk add --no-cache git openssl
# RUN apk add --no-cache make gcc g++ python && \
#   npm install && \
#   npm rebuild bcrypt --build-from-source && \
#   apk del make gcc g++ python

WORKDIR /app

COPY ./backend /app
# COPY ./backend/.env.development /app/dist/.env

## Can pass as docker build arguments with --build-arg
ARG POSTGRES_HOST
ARG POSTGRES_PORT
ARG POSTGRES_USER
ARG POSTGRES_PASSWORD
ARG POSTGRES_DATABASE

ARG FRONTEND_ORIGIN

ARG JWT_SECRETS
ARG JWT_TOKEN_EXPIRES

## Database Configurations
ENV POSTGRES_HOST=${POSTGRES_HOST:-whodb}
ENV POSTGRES_PORT=${POSTGRES_PORT:-5432}
ENV POSTGRES_USER=${POSTGRES_USER:-postgres}
ENV POSTGRES_PASSWORD=${POSTGRES_PASSWORD:-postgres}
ENV POSTGRES_DATABASE=${POSTGRES_DATABASE:-db_whoowesme}

## Used for CORS
ENV FRONTEND_ORIGIN=${FRONTEND_ORIGIN:-*}

## If we want to synchronize database too then uncomment and set DB_SYNCHRONIZE=true
# ENV DB_SYNCHRONIZE

ENV JWT_SECRETS=${JWT_SECRETS:-VeryVerySecret}
ENV JWT_TOKEN_EXPIRES=${JWT_TOKEN_EXPIRES:-2h}

EXPOSE 5001

RUN printenv \
  && npm install -g npm@8.5.0 --silent \
  && npm install --silent \
  && npm install -g @nestjs/cli --silent \
  && nest build

ENV PATH /app/node_modules/.bin:$PATH

## For production it has to be start
# CMD ["npm", "run", "start"]

## For development only
CMD ["npm", "run", "start:dev"]
