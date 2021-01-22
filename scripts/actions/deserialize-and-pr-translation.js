//https://api.smartling.com/job-batches-api/v2/projects/{projectId}/batches/{batchUid} gets the fileURIS
//get all of the fileURIs from the batch, create an array to create the array

const vendorRequest = require('./utils/vendor-request');

const fetchFileURIs = async (batchUid) => {
  const {
    response: {
      data: { files },
    },
  } = await vendorRequest(
    'GET',
    `https://api.smartling.com/job-batches-api/v2/projects/${projectId}/batches/${batchUid}`
  );
  return files.map((file) => file.fileUri);
};

const fetchTranslatedFilesZip = async (fileUris) => {
  return vendorRequest(
    'GET',
    `https://api.smartling.com/files-api/v2/projects/${projectId}/files/zip`,
    {
      fileUris,
      localeIds: ['ja-JP'],
    }
  );
};

const main = async () => {
  const batchUid = '8pincrzdw0uo';
  try {
    const fileUris = await fetchFileURIs(batchUid);
    const translatedFiles = await unzipper.Open.buffer(
      await fetchTranslatedFilesZip(fileUris)
    );
  } catch (error) {
    console.error(``);
  }
};

main();
