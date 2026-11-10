import AdmZip from 'adm-zip';
import esmock from 'esmock';
import { expect } from 'expect';
import sinon from 'sinon';
import { test } from 'uvu';
import vfile from 'vfile';

// for some reason, sinon.stub just does not work for this function
let writeSyncCalls = 0;
const copySync = sinon.stub();
const { writeFilesSync, createFileUriBatches } = await esmock(
  '../fetch-and-deserialize.mjs',
  {
    'to-vfile': {
      default: {
        writeSync: () => {
          writeSyncCalls += 1;
        },
      },
    },
    'fs-extra': {
      copySync,
      existsSync: () => {},
    },
  }
);

const testFiles = [
  vfile({
    contents: 'fake_content',
    path: 'src/i18n/content/jp/docs/fake_path_1/fake_file_1.mdx',
    extname: '.mdx',
  }),
  vfile({
    contents: 'fake_content',
    path: 'src/i18n/content/jp/docs/fake_path_1/fake_file_2.mdx',
    extname: '.mdx',
  }),
  vfile({
    contents: 'fake_content',
    path: 'src/i18n/content/jp/docs/fake_path_2/fake_file_3.mdx',
    extname: '.mdx',
  }),
];

writeFilesSync(testFiles);

test('should call writeSync for each file', () => {
  expect(writeSyncCalls).toEqual(testFiles.length);
});

test('should not copy directories that dont have images', () => {
  writeFilesSync(testFiles);

  expect(copySync.callCount).toEqual(0);
});

test('should created correct number of batches', () => {
  const expected = [
    { inputSize: 0, batchSize: 2, numberOfBatches: 0 },
    { inputSize: 1, batchSize: 2, numberOfBatches: 1 },
    { inputSize: 2, batchSize: 2, numberOfBatches: 1 },
    { inputSize: 11, batchSize: 3, numberOfBatches: 4 },
  ];

  expected.forEach(({ inputSize, batchSize, numberOfBatches }) => {
    const batches = createFileUriBatches(
      { fileUris: Array(inputSize) },
      batchSize
    );

    expect(batches).toHaveLength(numberOfBatches);
  });
});

test('splits batches with correct content', () => {
  /**
   * This tests that the resulting batches contain all and only the input array elements.
   * How the batches are split doesn't really matter, just that if we recombined the batches it would equal the original input.
   */

  const input = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const batchSize = 2;

  const batches = createFileUriBatches({ fileUris: input }, batchSize);

  expect(
    batches
      .map((b) => b.fileUris)
      .flat()
      .sort()
  ).toEqual(input.sort());
});

test('reports a translation that does not compile as errored without writing it', async () => {
  const zip = new AdmZip();
  zip.addFile('es-LA/src/content/docs/page.mdx', Buffer.from('<p>hola</p>'));
  let writes = 0;

  const { fetchAndDeserializeFiles } = await esmock(
    '../fetch-and-deserialize.mjs',
    {
      'node-fetch': async () => ({
        status: 200,
        buffer: async () => zip.toBuffer(),
      }),
      '../deserialize-html.mjs': async () => '<Callout>\nhola',
      '../utils/vendor-request.mjs': { getAccessToken: async () => 'token' },
      '../utils/translation-monitoring.js': {
        trackTranslationError: async () => {},
        TRACKING_TARGET: {},
      },
      '../utils/create-directories.js': () => {},
      'to-vfile': { default: { writeSync: () => (writes += 1) } },
    }
  );

  const statuses = await fetchAndDeserializeFiles({
    locale: 'es-LA',
    fileUris: ['src/content/docs/page.mdx'],
  });

  expect(statuses).toEqual([
    {
      ok: false,
      slug: 'src/content/docs/page.mdx',
      locale: 'es-LA',
      error: expect.stringContaining('<Callout>'),
    },
  ]);
  expect(writes).toEqual(0);
});

// a page that switches a locale to human translation (`translate: [jp]`) can
// still have an older machine job for it. Its download used to overwrite the
// human translation, e.g. agentic-ai/mcp/overview.mdx in #26455.
const receive = async ({ type, translate, locale }) => {
  const zip = new AdmZip();
  zip.addFile(`${locale}/src/content/docs/page.mdx`, Buffer.from('<p>x</p>'));
  let writes = 0;
  const english = `---\ntitle: Page\n${
    translate
      ? `translate:\n${translate.map((l) => `  - ${l}`).join('\n')}\n`
      : ''
  }---\n\nText\n`;

  const { fetchAndDeserializeFiles } = await esmock(
    '../fetch-and-deserialize.mjs',
    {
      fs: { readFileSync: () => english },
      'node-fetch': async () => ({
        status: 200,
        buffer: async () => zip.toBuffer(),
      }),
      '../deserialize-html.mjs': async () => 'texto',
      '../configuration.js': { configuration: { TRANSLATION: { TYPE: type } } },
      '../utils/vendor-request.mjs': { getAccessToken: async () => 'token' },
      '../utils/translation-monitoring.js': {
        trackTranslationError: async () => {},
        TRACKING_TARGET: {},
      },
      '../utils/create-directories.js': () => {},
      'to-vfile': { default: { writeSync: () => (writes += 1) } },
    }
  );

  const statuses = await fetchAndDeserializeFiles({
    locale,
    fileUris: ['src/content/docs/page.mdx'],
  });
  return { statuses, writes };
};

test('does not let a machine translation overwrite a human-translated locale', async () => {
  const { statuses, writes } = await receive({
    type: 'machine',
    translate: ['jp'],
    locale: 'ja-JP',
  });

  expect(writes).toEqual(0);
  expect(statuses).toEqual([
    {
      ok: true,
      skipped: true,
      slug: 'src/content/docs/page.mdx',
      locale: 'ja-JP',
    },
  ]);
});

test('still writes machine translations for other locales of the page', async () => {
  const { writes } = await receive({
    type: 'machine',
    translate: ['jp'],
    locale: 'es-LA',
  });

  expect(writes).toEqual(1);
});

test('writes human translations for the locales the page lists', async () => {
  const { writes } = await receive({
    type: 'human',
    translate: ['jp'],
    locale: 'ja-JP',
  });

  expect(writes).toEqual(1);
});

test.run();
