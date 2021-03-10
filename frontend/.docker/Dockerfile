FROM node:14.16.0-alpine3.12
# RUN apk add --no-cache --virtual builds-deps build-base python make
WORKDIR /ui
COPY . /ui
EXPOSE 5000
RUN npm install && npm run build && npm install -g serve
# RUN apk del builds-deps
CMD ["serve", "-s", "build"]
