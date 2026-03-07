SHELL := bash

.PHONY: build serve format lint dev install

build:
	JEKYLL_ENV=production bundle exec jekyll build

serve:
	bundle exec jekyll serve

format:
	bundle exec rufo .

lint:
	bundle exec rubocop

dev:
	bundle exec jekyll serve

install:
	bundle install
	
