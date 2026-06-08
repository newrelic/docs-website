#!/usr/bin/env bash

if [[ -z "${BUILD_LANG}" ]]; then
  echo "BUILD_LANG env var required 🥸 set BUILD_LANG=en for a default build"
  exit 1
else 
 echo "Building search indexes for ALL languages..."
 node scripts/search/build-all-search-indexes.js
 echo "All search indexes built successfully!"
 exec node scripts/createNetlifyRedirects.mjs & NODE_OPTIONS='--max-old-space-size=5120' gatsby build --prefix-paths
fi