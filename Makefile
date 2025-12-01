SHELL := bash

.PHONY: build serve format lint

build:
	JEKYLL_ENV=production bundle exec jekyll build

serve:
	jekyll serve

format:
	bundle exec rufo .

lint:
	bundle exec rubocop