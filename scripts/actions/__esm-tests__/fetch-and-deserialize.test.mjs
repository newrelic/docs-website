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

test.run();
