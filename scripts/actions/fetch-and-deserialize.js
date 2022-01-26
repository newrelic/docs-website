'use strict';
const AdmZip = require('adm-zip');
const vfile = require('vfile');
const { writeSync } = require('to-vfile');
const path = require('path');
const fse = require('fs-extra');

const fetch = require('node-fetch');

const deserializedHtml = require('./deserialize-html');
const createDirectories = require('../utils/migrate/create-directories');
const { getAccessToken } = require('./utils/vendor-request');

const localesMap = {
  'ja-JP': 'jp',
};

const projectId = process.env.TRANSLATION_VENDOR_PROJECT;

/**
 * @typedef {Object[]} FileUriBatches
 * @property {String[]} fileUris
 */

/**
 * @typedef HtmlFile
 * @property {string} path - Source path of file w/o `src/.../content/docs` prefix, or extension.
 * @property {string} html - (HTML) Content of the file as a string.
 */

/**
 * @typedef SlugStatus
 * @property {boolean} ok - Boolean flag indicating whether the translated file whether file was successfully deserialized or not.
 * @property {string} slug - Complete source path of the translated file
 */

/**
 * Method which writes translated content to the 'src/content/i18n' path, and copies images for translated files.
 * @param {vfile.VFile[]} vfiles
 */
const writeFilesSync = (vfiles) => {
  const copiedDirectories = {};

  vfiles.forEach((file) => {
    writeSync(file, 'utf-8');

    const imageDirectory = `${path.dirname(
      file.path.substring(file.path.indexOf('/docs/'))
    )}/images`;

    /*
      Check to see:
        1. have we already copied this image directory for a different file (with the same parent path)?
        2. does the image directory exist?
    */
    if (
      !(imageDirectory in copiedDirectories) &&
      fse.existsSync(path.join('src/content/', imageDirectory))
    ) {
      // sync 'src/content/docs/.../images' to 'src/i18n/content/.../docs/.../images'
      fse.copySync(
        path.join('src/content/', imageDirectory),
        path.join(path.dirname(file.path), '/images'),
        {
          overwrite: true,
        }
      );
      copiedDirectories[imageDirectory] = true;
    }
  });
};

/**
 * @param {Object} input
 * @param {String[]} input.fileUris
 * @param {Number} batchSize - maximum batch size
 * @returns {FileUriBatches}
 */
const createFileUriBatches = ({ fileUris }, batchSize = 50) => {
  let batches = [];
  let currentBatch = [];

  for (let i = 0; i < fileUris.length; i++) {
    currentBatch.push(fileUris[i]);

    if (currentBatch.length === batchSize) {
      // send the request, reset the count & array
      batches.push({ fileUris: currentBatch });
      currentBatch = [];
    }
  }

  // cleanup the last batch
  if (currentBatch.length != 0) {
    batches.push({ fileUris: currentBatch });
  }

  return batches;
};

/**
 * @param {String} locale
 */
const fetchTranslatedFilesZip = (locale) => {
  /**
   * @param {Object} input
   * @param {String[]} input.fileUris
   * @returns {Promise<AdmZip|null>}
   */
  return async ({ fileUris }) => {
    const fileUriStr = fileUris.reduce((str, uri) => {
      return str.concat(`&fileUris[]=${encodeURIComponent(uri)}`);
    }, '');

    const localeIdStr = `localeIds[]=${locale}`;

    const response = await fetch(
      `https://api.smartling.com/files-api/v2/projects/${projectId}/files/zip?${localeIdStr}${fileUriStr}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${await getAccessToken()}`,
        },
      }
    );

    if (response.status !== 200) {
      console.log(
        `Error encountered downloading files from vendor. Response code received: ${response.status}`
      );
      console.log(
        `The following files were not downloaded for ${locale}: ${JSON.stringify(
          fileUris,
          null,
          4
        )}`
      );
      return null;
    }

    const buffer = await response.buffer();
    const zip = new AdmZip(buffer);

    return zip;
  };
};

/**
 * @param {String} locale
 */
const extractFiles = (locale) => {
  /**
   * @param {AdmZip} zip - the downloaded zip containing batch of files.
   * @returns {HtmlFile[]}
   */
  return (zip) => {
    return zip.getEntries().map((entry) => {
      const filepath = entry.entryName.replace(
        `${locale}/src/content/docs`,
        ''
      );
      const slug = filepath.replace(`.mdx`, '');
      return {
        path: slug,
        html: zip.readAsText(entry, 'utf8'),
      };
    });
  };
};

/**
 * @param {String} locale
 */
const deserializeHtmlToMdx = (locale) => {
  /**
   * @param {HtmlFile} file
   * @returns {Promise<SlugStatus>}
   */
  return async ({ path: contentPath, html }) => {
    const completePath = path.join('src/content/docs', contentPath, '.mdx');

    try {
      const localePath = path.join(
        `src/i18n/content/${localesMap[locale]}/docs/`,
        contentPath
      );
      const mdx = await deserializedHtml(html);

      const temp = vfile({
        contents: mdx,
        path: localePath,
        extname: '.mdx',
      });

      createDirectories([temp]);
      writeFilesSync([temp]);

      return {
        ok: true,
        slug: completePath,
      };
    } catch (ex) {
      console.log(`Failed to deserialize: ${contentPath}`);
      console.log(ex);

      return { ok: false, slug: completePath };
    }
  };
};

/**
 *
 * @param {Object} input
 * @param {String} input.locale - locale associated with fileUris
 * @param {String[]} input.fileUris - list of file paths used for download & deserialization. This will be the complete singular list prior to batching.
 * @returns {Promise<SlugStatus[]>}
 */
const fetchAndDeserializeFiles = async ({ locale, fileUris }) => {
  const batches = createFileUriBatches({ fileUris });

  console.log(`Created ${batches.length} batches of files.`);

  const zips = (
    await Promise.all(batches.map(fetchTranslatedFilesZip(locale)))
  ).filter(Boolean);

  console.log(`Downloaded ${zips.length} zips`);

  const files = zips.flatMap(extractFiles(locale));

  console.log(`Unzipped ${files.length} total files.`);

  const slugStatuses = await Promise.all(
    files.map(deserializeHtmlToMdx(locale))
  );

  return slugStatuses;
};

module.exports = {
  createFileUriBatches,
  writeFilesSync,
  fetchAndDeserializeFiles,
};
