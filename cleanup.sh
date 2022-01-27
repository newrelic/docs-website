#! /bin/bash

git restore --staged src/content/docs
git restore src/content/docs
git clean -df src/content/docs

git restore --staged src/i18n/content
git restore src/i18n/content
git clean -df src/i18n/content
