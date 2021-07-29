#!/bin/bash

# # step 1
export DB_CONNECTION_INFO=$(cat connection_info.json)
export GITHUB_TOKEN='' # token with no permissions

# # step 1
URL="https://api.github.com/repos/newrelic/docs-website/pulls/3271/files"
yarn get-translated-files $URL

# # step 2
export TRANSLATION_VENDOR_API_URL=https://api.smartling.com
export TRANSLATION_VENDOR_PROJECT='' # use machine translation project
export TRANSLATION_VENDOR_USER='' # MT user
export TRANSLATION_VENDOR_SECRET='' # MT user secret

node ../../send-and-update-translation-queue.js

# wait for translation to be complete
node ./wait_for_translation.js

# # step 3
node ../../check-job-progress.js

# # step 4
node ../../remove-completed-batch.js
