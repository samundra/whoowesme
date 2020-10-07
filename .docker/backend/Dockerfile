FROM node:10.15-alpine

#RUN apk update && apk upgrade && apk add --no-cache git openssl

WORKDIR /app

COPY ./backend /app

ENV PATH /app/node_modules/.bin:$PATH

EXPOSE 5000

RUN env && npm install --silent

CMD ["npm", "run", "start:dev"]

