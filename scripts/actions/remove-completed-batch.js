const { saveToTranslationQueue } = require('./utils/save-to-db');
const checkArgs = require('./utils/check-args');
const { getAccessToken, vendorRequest } = require('./utils/vendor-request');
const fetch = require('node-fetch');

const PROJECT_ID = process.env.TRANSLATION_VENDOR_PROJECT;

/**
 * Updates the "being translated" queue with the batches that are not done.
 * @returns {Promise}
 */
const saveRemainingBatches = async () => {
  checkArgs(4);

  const batchUids = JSON.parse(process.argv[2]);
  const deserializedBatchUids = JSON.parse(process.argv[3]);

  await removePageContext(deserializedBatchUids);

  await saveToTranslationQueue(
    { type: 'being_translated' },
    'set batchUids = :batchUids',
    { ':batchUids': batchUids }
  );
};

/**
 * Gets the fileUris from the deserializedBatchUids, takes the fileUris and fetches
 * the contextUids, and then the contextUids are deleted for deserialized batches
 * @param {Array} deserializedBatchUids
 * @returns {Promise}
 */
const removePageContext = async (deserializedBatchUids) => {
  const accessToken = await getAccessToken();

  const fileUris = Promise.all(
    deserializedBatchUids.map(async (batchUid) => {
      const { files } = await vendorRequest({
        method: 'GET',
        endpoint: `/job-batches-api/v2/projects/${PROJECT_ID}/batches/${batchUid}`,
        accessToken,
      });
      return files.map((file) => file.fileUri);
    })
  );

  const { items } = await vendorRequest({
    method: 'GET',
    endpoint: `https://api.smartling.com/context-api/v2/projects/${PROJECT_ID}/contexts`,
    accessToken,
  });

  const contextUids = items
    .filter((item) => fileUris.includes(item.name))
    .map((item) => {
      return {
        fileUri: item.name,
        contextUid: item.contextUid,
      };
    });

  for (const { contextUid, fileUri } of contextUids) {
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

    if (code === 'SUCCESS' && resp.ok) {
      console.log(`[*] Successfully deleted ${fileUri} context.`);
    } else {
      console.error(`[!] Unable to delete ${fileUri} context.`);
    }
  }
};

saveRemainingBatches();
