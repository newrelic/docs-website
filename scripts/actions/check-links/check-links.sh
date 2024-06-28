#!/bin/bash

find ./src/content/docs/browser/new-relic-browser/troubleshooting \
 -type f \
 -name '*.mdx' \
 -print0 | xargs -0 -n1 npx markdown-link-check --quiet --config $(dirname "$0")/markdown-link-check-config.json >> $(dirname "$0")/broken-links.txt

 exec cat ./$(dirname "$0")/broken-links.txt | uniq >> $(dirname "$0")/broken-links-filter.txt
