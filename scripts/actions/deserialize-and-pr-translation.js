//https://api.smartling.com/job-batches-api/v2/projects/{projectId}/batches/{batchUid} gets the fileURIS
//get all of the fileURIs from the batch, create an array to create the array
//set environment variables

const { vendorRequest, vendorGetRequest } = require('./utils/vendor-request');
const AdmZip = require('adm-zip');

const projectId = process.env.TRANSLATION_VENDOR_PROJECT;

const fetchFileURIs = async (batchUid) => {
  const {
    response: {
      data: { files },
    },
  } = await vendorRequest(
    'GET',
    `/job-batches-api/v2/projects/${projectId}/batches/${batchUid}`
  );
  return files.map((file) => file.fileUri);
};

const fetchTranslatedFilesZip = async (fileUris) => {
  const body = {
    localeIds: ['ja-JP'],
    fileUris: fileUris,
  };
  return vendorGetRequest(
    `/files-api/v2/projects/${projectId}/files/zip?localeIds[]=ja-JP&fileUris[]=enable-serverless-monitoring-aws-lambda.html`
  );
};

const main = async () => {
  const batchUid = '8pincrzdw0uo';
  try {
    //const fileUris = await fetchFileURIs(batchUid);

    const fileUris = ['enable-serverless-monitoring-aws-lambda.html'];

    const response = await fetchTranslatedFilesZip(fileUris);

    const buffer = await response.buffer();

    const zip = new AdmZip(buffer);
    const zipEntries = zip.getEntries();

    //reduce to [{uri: ..., html:}]

    const translatedHtml = zipEntries.map((entry) => {
      return {
        path: entry.entryName.split('/').pop(), //get the last element from the folder
        html: zip.readAsText(entry, (encoding = 'utf8')),
      };
    });

    console.log(translatedHtml);
  } catch (error) {
    console.error(error);
  }
};

main();
