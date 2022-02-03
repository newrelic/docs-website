const {
  getJobs,
  getTranslations,
  deleteJob,
  deleteTranslation,
} = require('./translation_workflow/database.js');
const { getAccessToken, vendorRequest } = require('./utils/vendor-request');
const fetch = require('node-fetch');
const { configuration } = require('./configuration');

const PROJECT_ID = configuration.TRANSLATION.VENDOR_PROJECT;
const DOCS_SITE_URL = 'https://docs.newrelic.com';

/**
 * Updates the "being translated" queue with the batches that are not done.
 * @param {string} projectId - identifier of project to cleanup associated state
 * @returns {Promise}
 */
const setInProgressToDone = async (projectId) => {
  const [completedJobs, completedTranslations] = await Promise.all([
    getJobs({ status: 'COMPLETED', project_id: projectId }),
    getTranslations({ status: 'COMPLETED', project_id: projectId }),
  ]);

  const deserializedFileUris = completedTranslations.map(
    (translation) => translation.slug
  );

  const code = await removePageContext(deserializedFileUris);

  if (code !== 'SUCCESS') {
    console.log(`[!] Unable to delete all contexts`);
  }

  console.log(`Deleting jobs: ${JSON.stringify(completedJobs)}`);
  console.log(
    `Deleting translations: ${JSON.stringify(completedTranslations)}`
  );

  await Promise.all(
    [].concat(
      completedJobs.map((j) => deleteJob(j.id)),
      completedTranslations.map((t) => deleteTranslation(t.id))
    )
  );

  console.log(`Deleted translations & jobs`);
};

/**
 * Inputs the fileUris and fetches
 * the contextUids, and then the contextUids are deleted for deserialized batches
 * @param {Array} fileUris
 * @returns {Promise}
 */
const removePageContext = async (fileUris) => {
  const fileNames = fileUris.map((fileUri) => {
    const filepath = fileUri.replace(`src/content/`, '');
    const slug = filepath.replace(`.mdx`, '');
    const contextUrl = new URL(slug, DOCS_SITE_URL);
    return contextUrl.href;
  });

  const { items } = await vendorRequest({
    method: 'GET',
    endpoint: `https://api.smartling.com/context-api/v2/projects/${PROJECT_ID}/contexts`,
  });

  // Find the smartling context to be removed. This includes context manually
  // uploaded (fileNames) as well as the "context" created by smartling (fileUris).
  const contextUids = items
    .filter(({ name }) => [...fileNames, ...fileUris].includes(name))
    .map(({ name, contextUid }) => ({
      fileUri: name,
      contextUid,
    }));

  const results = await Promise.all(
    contextUids.map(async ({ contextUid, fileUri }) => {
      const url = new URL(
        `/context-api/v2/projects/${PROJECT_ID}/contexts/${contextUid}`,
        process.env.TRANSLATION_VENDOR_API_URL
      );

      const options = {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${await getAccessToken()}`,
        },
      };

      const resp = await fetch(url.href, options);

      const { response } = await resp.json();
      const { code } = response;

      return { code: code, fileUri: fileUri };
    })
  );

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

setInProgressToDone(PROJECT_ID);
