#!/bin/bash

unfiltered_list=$(find ./src/content/docs/browser/new-relic-browser/performance-quality \
 -type f \
 -name '*.mdx' \
| xargs -n1 npx markdown-link-check --quiet --config $(dirname "$0")/markdown-link-check-config.json)

echo $unfiltered_list | sed 's/\[✖\]/\n[✖]/g' | sort | uniq 
