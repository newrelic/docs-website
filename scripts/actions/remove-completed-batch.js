const { saveToTranslationQueue } = require('./utils/save-to-db');
const checkArgs = require('./utils/check-args');
const { getAccessToken, vendorRequest } = require('./utils/vendor-request');
const fetch = require('node-fetch');

const PROJECT_ID = process.env.TRANSLATION_VENDOR_PROJECT;
const DOCS_SITE_URL = 'https://docs-preview.newrelic.com';

/**
 * Updates the "being translated" queue with the batches that are not done.
 * @returns {Promise}
 */
const saveRemainingBatches = async () => {
  checkArgs(4);

  const batchUids = process.argv[2].split(',').filter(Boolean);
  const deserializedFileUris = process.argv[3].split(',').filter(Boolean);

  const code = await removePageContext(deserializedFileUris);

  if (code !== 'SUCCESS') {
    console.log(`[!] Unable to delete all contexts`);
  }

  await saveToTranslationQueue(
    { type: 'being_translated' },
    'set batchUids = :batchUids',
    { ':batchUids': batchUids }
  );
};

/**
 * Inputs the fileUris and fetches
 * the contextUids, and then the contextUids are deleted for deserialized batches
 * @param {Array} fileUris
 * @returns {Promise}
 */
const removePageContext = async (fileUris) => {
  const accessToken = await getAccessToken();

  const fileNames = fileUris.map((fileUri) => {
    const filepath = fileUri.replace(`src/content/`, '');
    const slug = filepath.replace(`.mdx`, '');
    const contextUrl = new URL(slug, DOCS_SITE_URL);
    return contextUrl.href;
  });

  const { items } = await vendorRequest({
    method: 'GET',
    endpoint: `https://api.smartling.com/context-api/v2/projects/${PROJECT_ID}/contexts`,
    accessToken,
  });

  const contextUids = items
    .filter((item) => fileNames.includes(item.name))
    .map((item) => {
      return {
        fileUri: item.name,
        contextUid: item.contextUid,
      };
    });

  const results = await Promise.all(
    contextUids.map(async ({ contextUid, fileUri }) => {
      const url = new URL(
        `/context-api/v2/projects/${PROJECT_ID}/contexts/${contextUid}`,
        process.env.TRANSLATION_VENDOR_API_URL
      );

      const options = {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      };

      const resp = await fetch(url.href, options);

      const { response } = await resp.json();
      const { code } = response;

      return { code: code, fileUri: fileUri };
    })
  );

  console.log(results);

  return results.reduce((returnCode, { code, fileUri }) => {
    if (code === 'SUCCESS') {
      console.log(`[*] Successfully deleted ${fileUri} context.`);
      return returnCode;
    } else {
      console.error(`[!] Unable to delete ${fileUri} context.`);
      return code;
    }
  }, 'SUCCESS');
};

saveRemainingBatches();
