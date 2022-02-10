FROM node:17-alpine

#RUN apk update && apk upgrade && apk add --no-cache git openssl
# RUN apk add --no-cache make gcc g++ python && \
#   npm install && \
#   npm rebuild bcrypt --build-from-source && \
#   apk del make gcc g++ python

WORKDIR /app

COPY ./backend /app
COPY ./backend/.env.development /app/dist/.env

EXPOSE 5001

RUN printenv \
  && npm install -g npm@8.5.0 --silent \
  && npm install --silent \
  && npm install -g @nestjs/cli --silent \
  && nest build

ENV PATH /app/node_modules/.bin:$PATH

CMD ["npm", "run", "start:dev"]
