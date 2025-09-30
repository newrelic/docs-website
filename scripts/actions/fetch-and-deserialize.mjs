/* eslint-disable no-console */
'use strict';
import AdmZip from 'adm-zip';
import vfile from 'vfile';
import toVfile from 'to-vfile';
import path from 'path';
import fetch from 'node-fetch';

import deserializedHtml from './deserialize-html.mjs';
import createDirectories from './utils/create-directories.js';
import { getAccessToken } from './utils/vendor-request.mjs';
import { LOCALE_IDS } from './utils/constants.js';
import {
  trackTranslationError,
  TRACKING_TARGET,
} from './utils/translation-monitoring.js';

const { writeSync } = toVfile;

const projectId = process.env.TRANSLATION_VENDOR_PROJECT;
const defaultTrackingMetadata = {
  projectId,
  workflow: 'checkTranslationsAndDeserialize',
};

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
 * Method which writes translated content to the 'src/content/i18n' path.
 * @param {vfile.VFile[]} vfiles
 */
export const writeFilesSync = (vfiles) => {
  vfiles.forEach((file) => {
    writeSync(file, 'utf-8');
  });
};

/**
 * @param {Object} input
 * @param {String[]} input.fileUris
 * @param {Number} batchSize - maximum batch size
 * @returns {FileUriBatches}
 */
export const createFileUriBatches = ({ fileUris }, batchSize = 50) => {
  const batches = [];
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
  if (currentBatch.length !== 0) {
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
    fileUris = fileUris.filter(
      (uri) => uri !== 'src/announcements/q2-survey.mdx'
    );
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
    const completePath = `${path.join('src/content/docs', contentPath)}.mdx`;
    const localeKey = Object.keys(LOCALE_IDS).find(
      (key) => LOCALE_IDS[key] === locale
    );

    try {
      const localePath = path.join(
        `src/i18n/content/${localeKey}/docs/`,
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
        locale,
      };
    } catch (ex) {
      await trackTranslationError({
        ...defaultTrackingMetadata,
        target: TRACKING_TARGET.FILE,
        slug: completePath,
        locale,
        error: ex,
        errorMessage: `Failed to deserialize: ${contentPath}`,
      });
      console.log(`Failed to deserialize: ${contentPath}`);
      console.log(ex);

      return { ok: false, slug: completePath, locale };
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
export const fetchAndDeserializeFiles = async ({ locale, fileUris }) => {
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
