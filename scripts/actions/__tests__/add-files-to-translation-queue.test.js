// TODO: rewrite to uwu
'use strict';
const fs = require('fs');
const { frontmatter } = require('../../utils/frontmatter');
const { getLocalizedFileData } = require('../add-files-to-translation-queue');

const MOCK_CONSTANTS = {
  LOCALE_IDS: {
    jp: 'ja-JP',
    kr: 'ko-KR',
    es: 'es-LA',
    pt: 'pt-BR',
  },
};

jest.mock('fs');
jest.mock('path');
jest.mock('../../utils/frontmatter');
jest.mock('../translation_workflow/database');
jest.mock('../utils/vendor-request.mjs');

const mockMdx = (translate = []) => {
  return `---
title: A test file
${translate.length ? `translate:\n  - ${translate.join('\n  - ')}` : ''}
---
This is a test file
`;
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

  const setup = () => {
    const EXCLUSIONS = {
      excludePath: {
        'ja-JP': ['excluded/path'],
        'ko-KR': ['excluded/path'],
        'es-LA': ['excluded/path'],
        'pt-BR': ['excluded/path'],
      },
      excludeType: {
        'ja-JP': ['excludedType'],
        'ko-KR': ['excludedType'],
        'es-LA': ['excludedType'],
        'pt-BR': ['excludedType'],
      },
    };
    const originalAdd = jest.requireActual('../utils/constants.js');

    jest.doMock('../utils/constants.js', () => {
      return { ...originalAdd, LOCALE_IDS: MOCK_CONSTANTS.LOCALE_IDS };
    });

    jest.mock('../utils/helpers');
    const { getExclusions } = require('../utils/helpers');

    getExclusions.mockReturnValue(EXCLUSIONS);
  };

  describe('Queue translations', () => {
    test('Adds the Human Translation Project Id for locale under `translate` in frontmatter', async () => {
      const file = '/content/bar.mdx';
      mockReadFileSync(['jp']);
      frontmatter.mockReturnValueOnce({ attributes: { translate: ['jp'] } });
      const toBeTranslated = getLocalizedFileData(file);
      expect(toBeTranslated).toEqual([
        { filename: '/content/bar.mdx', locale: 'ja-JP', project_id: 'HT_ID' },
        { filename: '/content/bar.mdx', locale: 'ko-KR', project_id: 'MT_ID' },
        { filename: '/content/bar.mdx', locale: 'es-LA', project_id: 'MT_ID' },
        { filename: '/content/bar.mdx', locale: 'pt-BR', project_id: 'MT_ID' },
      ]);
    });

    test('Adds the Machine Translation Project Id when there is no `translate` in frontmatter', async () => {
      const file = '/content/bar.mdx';
      mockReadFileSync();
      frontmatter.mockReturnValueOnce({ attributes: {} });
      const toBeTranslated = getLocalizedFileData(file);

      expect(toBeTranslated).toEqual([
        { filename: '/content/bar.mdx', locale: 'ja-JP', project_id: 'MT_ID' },
        { filename: '/content/bar.mdx', locale: 'ko-KR', project_id: 'MT_ID' },
        { filename: '/content/bar.mdx', locale: 'es-LA', project_id: 'MT_ID' },
        { filename: '/content/bar.mdx', locale: 'pt-BR', project_id: 'MT_ID' },
      ]);
    });

    test('Adds the relevant Project Id when there are multiple locales and only one `translate` in frontmatter', async () => {
      const file = '/content/bar.mdx';
      const originalAdd = jest.requireActual('../utils/constants.js');

      jest.doMock('../utils/constants.js', () => {
        return { ...originalAdd, LOCALE_IDS: MOCK_CONSTANTS.LOCALE_IDS };
      });

      const {
        getLocalizedFileData,
      } = require('../add-files-to-translation-queue');
      const fs = require('fs');
      const { frontmatter } = require('../../utils/frontmatter');

      jest.doMock('fs');
      jest.doMock('../../utils/frontmatter');

      const mdx = mockMdx(['jp']);
      fs.readFileSync.mockReturnValueOnce(mdx);
      frontmatter.mockReturnValueOnce({ attributes: { translate: ['jp'] } });

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
        {
          filename: '/content/bar.mdx',
          locale: 'es-LA',
          project_id: 'MT_ID',
        },
        {
          filename: '/content/bar.mdx',
          locale: 'pt-BR',
          project_id: 'MT_ID',
        },
      ]);
    });

    test('Doesnt exclude any files from translation', async () => {
      const files = [
        { filename: 'included/path/content/bar.mdx', locale: 'ja-JP' },
        { filename: 'included/path/content/foo.mdx', locale: 'ko-KR' },
        { filename: 'included/path/content/bar.mdx', locale: 'es-LA' },
        { filename: 'included/path/content/foo.mdx', locale: 'pt-BR' },
      ];
      setup();
      const { excludeFiles } = require('../add-files-to-translation-queue');

      const includedFiles = excludeFiles(files);

      expect(includedFiles).toEqual([
        { filename: 'included/path/content/bar.mdx', locale: 'ja-JP' },
        { filename: 'included/path/content/foo.mdx', locale: 'ko-KR' },
        { filename: 'included/path/content/bar.mdx', locale: 'es-LA' },
        { filename: 'included/path/content/foo.mdx', locale: 'pt-BR' },
      ]);
    });

    test('Excludes files under a set path', async () => {
      const files = [
        {
          filename: 'included/path/content/bar.mdx',
          contentType: 'doc',
          locale: 'ko-KR',
        },
        {
          filename: 'excluded/path/content/bar.mdx',
          contentType: 'doc',
          locale: 'ja-JP',
        },
      ];
      setup();

      const { excludeFiles } = require('../add-files-to-translation-queue');
      const includedFiles = excludeFiles(files);

      expect(includedFiles).toEqual([
        {
          filename: 'included/path/content/bar.mdx',
          contentType: 'doc',
          locale: 'ko-KR',
        },
      ]);
    });

    test('Excludes specific file types', async () => {
      const files = [
        {
          filename: 'included/path/content/bar.mdx',
          contentType: 'excludedType',
          locale: 'es-LA',
        },
        {
          filename: 'included/path/content/bar.mdx',
          contentType: 'doc',
          locale: 'ja-JP',
        },
      ];
      setup();

      const { excludeFiles } = require('../add-files-to-translation-queue');
      const includedFiles = excludeFiles(files);

      expect(includedFiles).toEqual([
        {
          filename: 'included/path/content/bar.mdx',
          contentType: 'doc',
          locale: 'ja-JP',
        },
      ]);
    });

    test('Excludes files and file types under a set path', async () => {
      const files = [
        {
          filename: 'included/path/content/bar.mdx',
          contentType: 'doc',
          locale: 'ko-KR',
        },
        {
          filename: 'included/path/content/bar.mdx',
          contentType: 'excludedType',
          locale: 'pt-BR',
        },
        {
          filename: 'excluded/path/content/bar.mdx',
          contentType: 'excludedType',
          locale: 'es-LA',
        },
        {
          filename: 'excluded/path/content/bar.mdx',
          contentType: 'doc',
          locale: 'ja-JP',
        },
      ];
      setup();

      const { excludeFiles } = require('../add-files-to-translation-queue');
      const includedFiles = excludeFiles(files);

      expect(includedFiles).toEqual([
        {
          filename: 'included/path/content/bar.mdx',
          contentType: 'doc',
          locale: 'ko-KR',
        },
      ]);
    });
  });
});
