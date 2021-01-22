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
