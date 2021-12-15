#!/bin/bash


SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"
pushd $SCRIPT_DIR/../../../..

# # step 1
export DB_CONNECTION_INFO=$(cat $SCRIPT_DIR/connection_info.json)
export GITHUB_TOKEN='' # token with no permissions

# # step 1
URL="https://api.github.com/repos/newrelic/docs-website/pulls/3271/files"
yarn get-translated-files $URL

# # step 2
export TRANSLATION_VENDOR_API_URL=https://api.smartling.com
export TRANSLATION_VENDOR_PROJECT='' # use machine translation project
export TRANSLATION_VENDOR_USER='' # MT user
export TRANSLATION_VENDOR_SECRET='' # MT user secret


node $SCRIPT_DIR/../../send-and-update-translation-queue.js

# wait for translation to be complete
node $SCRIPT_DIR/./wait_for_translation.js

# # step 3
node $SCRIPT_DIR/../../check-job-progress.js

# # step 4
node $SCRIPT_DIR/../../remove-completed-batch.js

popd