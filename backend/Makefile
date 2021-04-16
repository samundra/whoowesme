.phony: all

build:
	npm run build
	cp .env.test ./dist/.env.test
	cp .env ./dist/.env
	npm run start:dev
