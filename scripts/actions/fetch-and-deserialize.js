const AdmZip = require('adm-zip');
const vfile = require('vfile');
const { write } = require('to-vfile');

const fetch = require('node-fetch');
const path = require('path');

const deserializedHtml = require('./deserialize-html');
const createDirectories = require('../utils/migrate/create-directories');

const localesMap = {
  'ja-JP': 'jp',
};

const projectId = process.env.TRANSLATION_VENDOR_PROJECT;

const fetchTranslatedFilesZip = async (fileUris, locale, accessToken) => {
  const fileUriStr = fileUris.reduce((str, uri) => {
    return str.concat(`&fileUris[]=${encodeURIComponent(uri)}`);
  }, '');

  const localeIdStr = `localeIds[]=${locale}`;

  return fetch(
    `https://api.smartling.com/files-api/v2/projects/${projectId}/files/zip?${localeIdStr}${fileUriStr}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
};

const fetchAndDeserialize = (accessToken) => async ({ locale, fileUris }) => {
  const response = await fetchTranslatedFilesZip(fileUris, locale, accessToken);

  const buffer = await response.buffer();

  const zip = new AdmZip(buffer);
  const zipEntries = zip.getEntries();

  const translatedHtml = zipEntries.map((entry) => {
    const filepath = entry.entryName.replace(`src/content/`, '');
    const path = filepath.replace(`.mdx`, '');
    return {
      path: path,
      html: zip.readAsText(entry, 'utf8'),
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
