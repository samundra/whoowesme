FROM node:10.15-alpine

#RUN apk update && apk upgrade && apk add --no-cache git openssl

WORKDIR /app

COPY ./frontend /app

ENV PATH /app/node_modules/.bin:$PATH

ARG REACT_APP_API_BASEURI=http://who-api:5000
ENV REACT_APP_API_BASEURI=${REACT_APP_API_BASEURI}
ARG REACT_APP_ENV=development
ENV REACT_APP_ENV=${REACT_APP_ENV}

Expose 8000

RUN env && npm install --silent

CMD ["npm", "run", "start"]

# RUN env && npm install \
#     && npm run build \
#     && npm install -g serve

#CMD [ "serve", "-s", "build" ]
