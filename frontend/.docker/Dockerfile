ARG APP_PORT=5000
FROM node:14.16.0-alpine3.12

WORKDIR /ui
COPY . /ui
ARG APP_PORT
EXPOSE ${APP_PORT}
ARG API_BASEURI
ENV REACT_APP_API_BASEURL=${API_BASEURI}

RUN npm install && npm run build && npm install -g serve

CMD ["serve", "-s", "build"]
