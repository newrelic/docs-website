import esmock from 'esmock';
import { expect } from 'expect';
import { test } from 'uvu';
import vfile from 'vfile';

// Jest mocks had a way to track this built into mock functions,
// esmock does not.
let copySyncCalls = 0;
let writeSyncCalls = 0;
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
      copySync: () => {
        copySyncCalls += 1;
      },
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

  expect(copySyncCalls).toEqual(0);
});

// TODO: make this work for uvu
// it.each`
//   inputSize | batchSize | numberOfBatches
//   ${0}      | ${2}      | ${0}
//   ${1}      | ${2}      | ${1}
//   ${2}      | ${2}      | ${1}
//   ${11}     | ${3}      | ${4}
// `(
//   "should create '$numberofBatches' when input size is '$inputSize' and batch size is '$batchSize'",
//   ({ inputSize, batchSize, numberOfBatches }) => {
//     const batches = createFileUriBatches(
//       { fileUris: Array(inputSize) },
//       batchSize
//     );

//     expect(batches).toHaveLength(numberOfBatches);
//   }
// );

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

test.run();
