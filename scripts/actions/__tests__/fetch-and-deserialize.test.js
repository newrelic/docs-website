const {
  writeFilesSync,
  createFileUriBatches,
} = require('../fetch-and-deserialize');
const fse = require('fs-extra');
const vfile = require('vfile');
const { writeSync } = require('to-vfile');

jest.mock('fs-extra');
jest.mock('to-vfile');

describe('writeFilesSync', () => {
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

  fse.existsSync.mockClear();
  fse.existsSync.mockReturnValue(true);
  writeFilesSync(testFiles);

  it('should call writeSync for each file', () => {
    expect(writeSync).toHaveBeenCalledTimes(testFiles.length);
  });

  it('should call copySync for each unique directory path', () => {
    expect(fse.copySync).toHaveBeenCalledTimes(2);
    expect(fse.copySync).toHaveBeenNthCalledWith(
      1,
      'src/content/docs/fake_path_1/images',
      'src/i18n/content/jp/docs/fake_path_1/images',
      { overwrite: true }
    );
    expect(fse.copySync).toHaveBeenNthCalledWith(
      2,
      'src/content/docs/fake_path_2/images',
      'src/i18n/content/jp/docs/fake_path_2/images',
      { overwrite: true }
    );
  });

  it('should not copy directories that dont have images', () => {
    fse.existsSync.mockClear();
    fse.existsSync.mockReturnValue(false);
    fse.copySync.mockClear();
    writeFilesSync(testFiles);

    expect(fse.copySync).toHaveBeenCalledTimes(0);
  });
});

describe('createFileUriBatches', () => {
  it.each`
    inputSize | batchSize | numberOfBatches
    ${0}      | ${2}      | ${0}
    ${1}      | ${2}      | ${1}
    ${2}      | ${2}      | ${1}
    ${11}     | ${3}      | ${4}
  `(
    "should create '$numberofBatches' when input size is '$inputSize' and batch size is '$batchSize'",
    ({ inputSize, batchSize, numberOfBatches }) => {
      const batches = createFileUriBatches(
        { fileUris: Array(inputSize) },
        batchSize
      );

      expect(batches).toHaveLength(numberOfBatches);
    }
  );
});
