dist_dir := dist

.PHONY: build
build:
	npm run build

.PHONY: copyenv
copyenv:
	cp .env.test $(dist_dir)/.env.test
	cp .env.development $(dist_dir)/.env

.PHONY: dev
dev:
	npm run start:dev

.PHONY: all
all: build copyenv dev
