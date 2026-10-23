import esmock from 'esmock';
import { expect } from 'expect';
import sinon from 'sinon';
import { test } from 'uvu';
import vfile from 'vfile';

// for some reason, sinon.stub just does not work for this function
let writeSyncCalls = 0;
let writtenPaths = [];
const copySync = sinon.stub();
const {
  writeFilesSync,
  createFileUriBatches,
  extractFiles,
  deserializeHtmlToMdx,
} = await esmock('../fetch-and-deserialize.mjs', {
  'to-vfile': {
    default: {
      writeSync: (file) => {
        writeSyncCalls += 1;
        writtenPaths.push(file.path);
      },
    },
  },
  'fs-extra': {
    copySync,
    existsSync: () => {},
  },
  '../deserialize-html.mjs': {
    default: async (html) => `deserialized: ${html}`,
  },
  '../utils/create-directories.js': {
    default: () => {},
  },
});

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

// Fakes just enough of AdmZip's shape for extractFiles - a real zip entry's
// entryName is `${locale}/${originalFileUri}`.
const fakeZip = (entryNames) => ({
  getEntries: () => entryNames.map((entryName) => ({ entryName })),
  readAsText: (entry) => `html for ${entry.entryName}`,
});

test('extractFiles recognizes a docs page (unchanged behavior)', () => {
  const [file] = extractFiles('ja-JP')(
    fakeZip(['ja-JP/src/content/docs/apm/overview.mdx'])
  );

  expect(file.path).toEqual('/apm/overview');
  expect(file.root.sourcePrefix).toEqual('src/content/docs');
});

test('extractFiles recognizes a reusable-snippet source, not just docs pages', () => {
  const [file] = extractFiles('ja-JP')(
    fakeZip(['ja-JP/src/components/snippets/apm/nodejs/prerequisites.mdx'])
  );

  expect(file.path).toEqual('/apm/nodejs/prerequisites');
  expect(file.root.sourcePrefix).toEqual('src/components/snippets');
});

test('deserializeHtmlToMdx writes a docs page under src/i18n/content/<locale>/docs/ (unchanged behavior)', async () => {
  writtenPaths = [];
  const [{ path: contentPath, root }] = extractFiles('ja-JP')(
    fakeZip(['ja-JP/src/content/docs/apm/overview.mdx'])
  );

  const result = await deserializeHtmlToMdx('ja-JP')({
    path: contentPath,
    html: 'irrelevant',
    root,
  });

  expect(result.ok).toEqual(true);
  expect(result.slug).toEqual('src/content/docs/apm/overview.mdx');
  expect(writtenPaths).toEqual(['src/i18n/content/jp/docs/apm/overview.mdx']);
});

test('deserializeHtmlToMdx writes a translated snippet under src/i18n/content/<locale>/components/snippets/', async () => {
  writtenPaths = [];
  const [{ path: contentPath, root }] = extractFiles('ja-JP')(
    fakeZip(['ja-JP/src/components/snippets/apm/nodejs/prerequisites.mdx'])
  );

  const result = await deserializeHtmlToMdx('ja-JP')({
    path: contentPath,
    html: 'irrelevant',
    root,
  });

  expect(result.ok).toEqual(true);
  expect(result.slug).toEqual(
    'src/components/snippets/apm/nodejs/prerequisites.mdx'
  );
  expect(writtenPaths).toEqual([
    'src/i18n/content/jp/components/snippets/apm/nodejs/prerequisites.mdx',
  ]);
});

test.run();
