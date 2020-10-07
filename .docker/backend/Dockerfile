FROM node:10.15-alpine

#RUN apk update && apk upgrade && apk add --no-cache git openssl

WORKDIR /app

COPY ./backend /app

ENV PATH /app/node_modules/.bin:$PATH

Expose 5000

RUN env && npm install

CMD ["npm", "run", "start:dev"]

