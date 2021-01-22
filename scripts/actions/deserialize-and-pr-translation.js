const { vendorRequest, vendorGetRequest } = require('./utils/vendor-request');
const AdmZip = require('adm-zip');
const deserializedHtml = require('./deserialize-html');
const { write } = require('to-vfile');
const vfile = require('vfile');
const createDirectories = require('../utils/migrate/create-directories');

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
  return vendorGetRequest(
    `/files-api/v2/projects/${projectId}/files/zip?localeIds[]=ja-JP&fileUris[]=enable-serverless-monitoring-aws-lambda.html`
  );
};

const fetchAndDeserialize = async () => {
  const batchUid = '8pincrzdw0uo';
  try {
    const fileUris = ['enable-serverless-monitoring-aws-lambda.html'];

    const response = await fetchTranslatedFilesZip(fileUris);
    const buffer = await response.buffer();

    const zip = new AdmZip(buffer);

    const translatedHtml = zip.getEntries().map((entry) => {
      return {
        path: entry.entryName.split('/').pop().split('.').slice(0, -1), //get the last element from the folder
        html: zip.readAsText(entry, (encoding = 'utf8')),
      };
    });

    const deserializedMdx = Promise.all(
      translatedHtml.map(async ({ path, html }) => {
        return {
          path: `src/i18n/content/jp/docs/${path}`,
          mdx: await deserializedHtml(html),
        };
      })
    );

    const files = (await deserializedMdx).map(
      ({ path, mdx }) =>
        vfile({
          contents: mdx,
          path,
          extname: '.mdx',
        }),
      'utf-8'
    );

    createDirectories(files);

    files.forEach((file) => write(file, 'utf-8'));
  } catch (error) {
    console.error(error);
  }
};

fetchAndDeserialize();

module.exports = fetchAndDeserialize;
