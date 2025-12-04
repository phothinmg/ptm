SHELL := bash

.PHONY: build serve format lint dev

build:
	JEKYLL_ENV=production bundle exec jekyll build

serve:
	jekyll serve

format:
	bundle exec rufo .

lint:
	bundle exec rubocop

dev:
	bundle exec jekyll serve