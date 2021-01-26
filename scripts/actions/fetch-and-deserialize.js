const AdmZip = require('adm-zip');
const vfile = require('vfile');
const { write } = require('to-vfile');

const { vendorRequest } = require('./utils/vendor-request');
const deserializedHtml = require('./deserialize-html');
const createDirectories = require('../utils/migrate/create-directories');

const localesMap = {
  'ja-JP': 'jp',
};

const projectId = process.env.TRANSLATION_VENDOR_PROJECT;

const fetchTranslatedFilesZip = async (fileUris, locale, accessToken) => {
  const fileUriStr = fileUris.reduce((str, uri) => {
    return str.concat(`&fileUris[]=${uri}`);
  }, '');

  const localeIdStr = `localeIds[]=${locale}`;

  return vendorRequest({
    method: 'GET',
    endpoint: `/files-api/v2/projects/${projectId}/files/zip?${localeIdStr}${fileUriStr}`,
    accessToken,
  });
};

const fetchAndDeserialize = (accessToken) => async ({ locale, fileUris }) => {
  // TODO: resolve this issue
  // | FetchError: invalid json response body at ***/files-api/v2/projects/***/files/zip?localeIds[]=ja-JP&fileUris[]=/src/content/docs/accounts/ac
  // counts-billing/account-structure/mastersub-account-structure.mdx&fileUris[]=/src/content/docs/accounts/accounts-billing/new-relic-one-pricing-
  // billing/new-relic-one-pricing-billing.mdx reason: Unexpected token P in JSON at position 0
  const response = await fetchTranslatedFilesZip(fileUris, locale, accessToken);
  const buffer = await response.buffer();

  const zip = new AdmZip(buffer);
  const zipEntries = zip.getEntries();

  const translatedHtml = zipEntries.map((entry) => {
    return {
      path: entry.entryName.split('/').pop().split('.').slice(0, -1), // get the last element from the folder
      html: zip.readAsText(entry, (encoding = 'utf8')),
    };
  });

  const deserializedMdx = Promise.all(
    translatedHtml.map(async ({ path, html }) => {
      console.log(`[*] Deserializing ${path}`);
      return {
        path: `src/i18n/content/${localesMap[locale]}/docs/${path}`,
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
};

fetchAndDeserialize();

module.exports = fetchAndDeserialize;
