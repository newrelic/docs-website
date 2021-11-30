'use strict';
const {
  describe,
  expect,
  test,
  beforeEach,
  afterEach,
} = require('@jest/globals');

const fs = require('fs');
const path = require('path');
const frontmatter = require('@github-docs/frontmatter');
const {
  getLocalizedFileData,
  excludeFiles,
} = require('../add-files-to-translation-queue');

const MOCK_CONSTANTS = {
  LOCALE_IDS: {
    jp: 'ja-JP',
    kr: 'ko-KR',
  },
};

jest.mock('fs');
jest.mock('path');
jest.mock('@github-docs/frontmatter');
jest.mock('../translation_workflow/database');
jest.mock('../utils/vendor-request');

const mockMdx = (translate = []) => {
  return `---
title: A test file
${translate.length ? `translate:\n  - ${translate.join('\n  - ')}` : ''}
---
This is a test file
`;
};

const EXCLUSIONS = {
  excludePath: { jp: ['excluded/path'], kr: ['excluded/path'] },
  excludeType: { jp: ['excludedType'], kr: ['excludedType'] },
};

const mockReadFileSync = (translate = []) => {
  const mdx = mockMdx(translate);
  fs.readFileSync.mockReturnValueOnce(mdx);
};

describe('add-files-to-translation-queue tests', () => {
  beforeEach(() => {
    jest.resetAllMocks();
    jest.resetModules();
  });

  describe('Queue translations', () => {
    test('Adds the Human Translation Project Id for locale under `translate` in frontmatter', async () => {
      const file = { filename: '/content/bar.mdx' };
      mockReadFileSync(['jp']);
      frontmatter.mockReturnValueOnce({ data: { translate: ['jp'] } });
      const toBeTranslated = getLocalizedFileData(file);

      expect(toBeTranslated).toEqual([
        { filename: '/content/bar.mdx', locale: 'ja-JP', project_id: 'HT_ID' },
      ]);
    });

    test('Adds the Machine Translation Project Id when there is no `translate` in frontmatter', async () => {
      const file = { filename: '/content/bar.mdx' };
      mockReadFileSync();
      frontmatter.mockReturnValueOnce({ data: {} });
      const toBeTranslated = getLocalizedFileData(file);

      expect(toBeTranslated).toEqual([
        { filename: '/content/bar.mdx', locale: 'ja-JP', project_id: 'MT_ID' },
      ]);
    });

    test('Adds the relevant Project Id when there are multiple locales and only one `translate` in frontmatter', async () => {
      const file = { filename: '/content/bar.mdx' };
      const originalAdd = jest.requireActual('../utils/constants.js');

      jest.doMock('../utils/constants.js', () => {
        return { ...originalAdd, LOCALE_IDS: MOCK_CONSTANTS.LOCALE_IDS };
      });

      const {
        getLocalizedFileData,
      } = require('../add-files-to-translation-queue');
      const fs = require('fs');
      const frontmatter = require('@github-docs/frontmatter');

      jest.doMock('fs');
      jest.doMock('@github-docs/frontmatter');

      const mdx = mockMdx(['jp']);
      fs.readFileSync.mockReturnValueOnce(mdx);
      frontmatter.mockReturnValueOnce({ data: { translate: ['jp'] } });

      const toBeTranslated = getLocalizedFileData(file);
      expect(toBeTranslated).toEqual([
        {
          filename: '/content/bar.mdx',
          locale: 'ja-JP',
          project_id: 'HT_ID',
        },
        {
          filename: '/content/bar.mdx',
          locale: 'ko-KR',
          project_id: 'MT_ID',
        },
      ]);
    });

    test('Adds the relevant Project Id when there are multiple locales and only one `translate` in frontmatter', async () => {
      const file = { filename: '/content/bar.mdx' };
      mockReadFileSync(['jp']);
      frontmatter.mockReturnValueOnce({
        data: { type: 'landingPage', translate: ['jp'] },
      });
      const toBeTranslated = getLocalizedFileData(file);

      expect(toBeTranslated).toEqual([
        {
          filename: '/content/bar.mdx',
          contentType: 'landingPage',
          locale: 'ja-JP',
          project_id: 'HT_ID',
        },
      ]);
    });

    test('Doesnt exclude any files from translation', async () => {
      const files = [
        { filename: 'included/path/content/bar.mdx', locale: 'jp' },
        { filename: 'included/path/content/foo.mdx', locale: 'jp' },
      ];
      const includedFiles = excludeFiles(files, EXCLUSIONS);

      expect(includedFiles).toEqual([
        { filename: 'included/path/content/bar.mdx', locale: 'jp' },
        { filename: 'included/path/content/foo.mdx', locale: 'jp' },
      ]);
    });

    test('Excludes files under a set path', async () => {
      const files = [
        {
          filename: 'included/path/content/bar.mdx',
          contentType: 'doc',
          locale: 'kr',
        },
        {
          filename: 'excluded/path/content/bar.mdx',
          contentType: 'doc',
          locale: 'jp',
        },
      ];
      const includedFiles = excludeFiles(files, EXCLUSIONS);

      expect(includedFiles).toEqual([
        {
          filename: 'included/path/content/bar.mdx',
          contentType: 'doc',
          locale: 'kr',
        },
      ]);
    });

    test('Excludes specific file types', async () => {
      const files = [
        {
          filename: 'included/path/content/bar.mdx',
          contentType: 'excludedType',
          locale: 'kr',
        },
        {
          filename: 'included/path/content/bar.mdx',
          contentType: 'doc',
          locale: 'jp',
        },
      ];
      const includedFiles = excludeFiles(files, EXCLUSIONS);

      expect(includedFiles).toEqual([
        {
          filename: 'included/path/content/bar.mdx',
          contentType: 'doc',
          locale: 'jp',
        },
      ]);
    });

    test('Excludes files and file types under a set path', async () => {
      const files = [
        {
          filename: 'included/path/content/bar.mdx',
          contentType: 'doc',
          locale: 'kr',
        },
        {
          filename: 'included/path/content/bar.mdx',
          contentType: 'excludedType',
          locale: 'jp',
        },
        {
          filename: 'excluded/path/content/bar.mdx',
          contentType: 'doc',
          locale: 'jp',
        },
      ];
      const includedFiles = excludeFiles(files, EXCLUSIONS);

      expect(includedFiles).toEqual([
        {
          filename: 'included/path/content/bar.mdx',
          contentType: 'doc',
          locale: 'kr',
        },
      ]);
    });
  });
});
