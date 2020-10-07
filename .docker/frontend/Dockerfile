FROM node:10.15-alpine

#RUN apk update && apk upgrade && apk add --no-cache git openssl

WORKDIR /app

COPY ./frontend /app

ENV PATH /app/node_modules/.bin:$PATH

RUN ls -al

ARG REACT_APP_API_BASEURI=http://localhost:5000
ENV REACT_APP_API_BASEURI=${REACT_APP_API_BASEURI}
ARG REACT_APP_ENV=development
ENV REACT_APP_ENV=${REACT_APP_ENV}

Expose 8000

RUN env && npm install

CMD ["npm", "run", "start"]

# RUN env && npm install \
#     && npm run build \
#     && npm install -g serve

#CMD [ "serve", "-s", "build" ]
