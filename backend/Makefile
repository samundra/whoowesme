dist_dir := dist

.phony: all

build: copyenv
	npm run build

copyenv:
	cp .env.test $(dist_dir)/.env.test
	cp .env $(dist_dir)/.env

dev:
	npm run start:dev
