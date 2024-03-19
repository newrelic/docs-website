import { mock } from 'jest-mock-extended';
import { mocked } from 'jest-mock';
import { SimpleGit } from 'simple-git';
import { DiffResult } from 'simple-git';

const mockGit = mock<SimpleGit>();

import * as fs from 'fs';
import * as glob from 'glob';

import * as Actions from '../actions';
import { FileRename } from '../actions';

jest.mock('simple-git', () => {
  return { default: jest.fn(() => mockGit) };
});
jest.mock('glob');
jest.mock('fs');

const consoleLogSpy = jest
  .spyOn(global.console, 'log')
  .mockImplementation(() => { });
const mockFs = mocked(fs, true);
const mockGlob = mocked(glob, true);

describe('actions tests', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  test('getOrphanedFiles correctly identifies orphans', () => {
    const englishFileList = [
      'src/content/docs/hello.txt',
      'src/content/docs/hello_world/goodbye.txt',
    ];

    const localizedFileList = [
      'src/i18n/content/ko/docs/file1.txt',
      'src/i18n/content/jp/docs/file2.txt',
      'src/i18n/content/jp/docs/hello.txt',
      'src/i18n/content/ko/docs/hello.txt',
      'src/i18n/content/ko/docs/hello_world/goodbye.txt',
      'src/i18n/content/jp/docs/hello.png',
      'src/i18n/content/ko/docs/images/image.png',
    ];

    mockGlob.sync
      .mockReturnValueOnce(englishFileList)
      .mockReturnValueOnce(localizedFileList);

    const result = Actions.getOrphanedFiles();

    expect(result).toStrictEqual([
      'src/i18n/content/ko/docs/file1.txt',
      'src/i18n/content/jp/docs/file2.txt',
      'src/i18n/content/jp/docs/hello.png',
      'src/i18n/content/ko/docs/images/image.png',
    ]);
  });

  test('getRenamedFiles correctly identifies renamed files', async () => {
    const diffSummaries: DiffResult = {
      files: [
        {
          file:
            'src/content/docs/accounts/accounts/{account-maintenance => billing}/change-passwords-user-preferences.mdx',

          // properties are here to maintain shape of DiffResult
          changes: 0,
          insertions: 0,
          deletions: 0,
          binary: false,
        },
        {
          file:
            'src/content/docs/{accounts/accounts/account-maintenance => }/change-passwords-user-preference.mdx',
          changes: 0,
          insertions: 0,
          deletions: 0,
          binary: false,
        },
        {
          file:
            'src/content/docs/{ => using-new-relic/data/understand-data}/instrumentation-editor-instrument-net-ui.mdx',
          changes: 0,
          insertions: 0,
          deletions: 0,
          binary: false,
        },
        {
          file:
            'src/content/docs/{accounts/accounts/account-maintenance => newaccounts/accounts/newaccount-maintenance}/change-passwords-user-preferences.mdx',
          changes: 0,
          insertions: 0,
          deletions: 0,
          binary: false,
        },
      ],
      changed: 4,
      insertions: 0,
      deletions: 0,
    };

    mockGit.diffSummary.mockResolvedValueOnce(diffSummaries);

    const renamedFiles = await Actions.getRenamedFiles();

    expect(renamedFiles.length).toBe(diffSummaries.files.length);
    expect(renamedFiles).toStrictEqual([
      {
        from:
          'src/content/docs/accounts/accounts/account-maintenance/change-passwords-user-preferences.mdx',
        to:
          'src/content/docs/accounts/accounts/billing/change-passwords-user-preferences.mdx',
      },
      {
        from:
          'src/content/docs/accounts/accounts/account-maintenance/change-passwords-user-preference.mdx',
        to: 'src/content/docs/change-passwords-user-preference.mdx',
      },
      {
        from: 'src/content/docs/instrumentation-editor-instrument-net-ui.mdx',
        to:
          'src/content/docs/using-new-relic/data/understand-data/instrumentation-editor-instrument-net-ui.mdx',
      },
      {
        from:
          'src/content/docs/accounts/accounts/account-maintenance/change-passwords-user-preferences.mdx',
        to:
          'src/content/docs/newaccounts/accounts/newaccount-maintenance/change-passwords-user-preferences.mdx',
      },
    ]);
  });

  test('getRenameChanges', () => {
    const input: FileRename[] = [
      {
        from:
          'src/content/docs/accounts/accounts-billing/account-setup/choose-your-data-center.mdx',
        to: 'src/content/docs/choose-your-data-center.mdx',
      },
      {
        from:
          'src/content/docs/apm/agents/c-sdk/get-started/images/c-apm-summary.png',
        to: 'src/content/docs/apm/agents/c-sdk/images/c-apm-summary.png',
      },
      {
        from:
          'src/content/docs/data-apis/convert-to-metrics/analyze-monitor-data-trends-metrics.mdx',
        to:
          'src/content/docs/data-apis/convert-to-metrics/data/analyze-monitor-data-trends-metrics.mdx',
      },
      {
        from:
          'src/content/docs/an-old-boring-name.mdx',
        to:
          'src/content/docs/a-new-directory/wow/more-fun.mdx',
      },
      {
        from: 'src/content/docs/apm/auspicious-petite-moth.mdx',
        to: 'src/content/docs/apm/aesthetic-purple-moon.mdx',
      },
      {
        from: 'src/content/docs/apm/errors-inbox/errors-inbox-ui.mdx',
        to: 'src/content/docs/apm/errors-inbox-ui.mdx',
      },
    ];

    /**
     * getRenameChanges iterates over [jp, kr, es, pt] for locale paths in the result.
     * Every 4 Booleans represents mocking if the file exists and therefore should be renamed or skipped for those locale paths
    */
    [
      // doc[0]: jp renamed, kr renamed, es renamed, pt renamed
      true, true, true, true,
      // doc[1]: jp renamed, kr skipped, es skipped, pt skipped
      true, false, false, false,
      // doc[2]: jp skipped, kr renamed, es skipped, pt skipped
      false, true, false, false,
      // doc[3]: jp skipped, kr skipped, es renamed, pt skipped
      false, false, true, false,
      // doc[4]: jp skipped, kr skipped, es skipped, pt renamed
      false, false, false, true,
      // doc[5]: jp skipped, kr skipped, es skipped, pt skipped
      false, false, false, false,
    ].forEach(
      (returnValue) => {
        mockFs.existsSync.mockReturnValueOnce(returnValue);
      }
    );

    const result = Actions.getRenameChanges(input);

    expect(result.length).toBe(8);
    expect(result).toStrictEqual([
      {
        from:
          'src/i18n/content/jp/docs/accounts/accounts-billing/account-setup/choose-your-data-center.mdx',
        to: 'src/i18n/content/jp/docs/choose-your-data-center.mdx',
      },
      {
        from:
          'src/i18n/content/kr/docs/accounts/accounts-billing/account-setup/choose-your-data-center.mdx',
        to: 'src/i18n/content/kr/docs/choose-your-data-center.mdx',
      },
      {
        from:
          'src/i18n/content/es/docs/accounts/accounts-billing/account-setup/choose-your-data-center.mdx',
        to: 'src/i18n/content/es/docs/choose-your-data-center.mdx',
      },
      {
        from:
          'src/i18n/content/pt/docs/accounts/accounts-billing/account-setup/choose-your-data-center.mdx',
        to: 'src/i18n/content/pt/docs/choose-your-data-center.mdx',
      },
      {
        from:
          'src/i18n/content/jp/docs/apm/agents/c-sdk/get-started/images/c-apm-summary.png',
        to:
          'src/i18n/content/jp/docs/apm/agents/c-sdk/images/c-apm-summary.png',
      },
      {
        from:
          'src/i18n/content/kr/docs/data-apis/convert-to-metrics/analyze-monitor-data-trends-metrics.mdx',
        to:
          'src/i18n/content/kr/docs/data-apis/convert-to-metrics/data/analyze-monitor-data-trends-metrics.mdx',
      },
      {
        from:
          'src/i18n/content/es/docs/an-old-boring-name.mdx',
        to:
          'src/i18n/content/es/docs/a-new-directory/wow/more-fun.mdx',
      },
      {
        from: 'src/i18n/content/pt/docs/apm/auspicious-petite-moth.mdx',
        to: 'src/i18n/content/pt/docs/apm/aesthetic-purple-moon.mdx',
      },

    ]);
  });

  test('printOrphanedFiles calls console.log', () => {
    const orphanedFilePaths = ['(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧', '╰(◕ᗜ◕)╯', '(✿☯‿☯✿)', '(◕‿◕✿)'];

    Actions.printOrphanedFiles(orphanedFilePaths);

    expect(consoleLogSpy).toBeCalledTimes(2);
    expect(consoleLogSpy.mock.calls[0][0]).toBe(
      `Found ${orphanedFilePaths.length} orphaned files.`
    );
    expect(consoleLogSpy.mock.calls[1][0]).toBe(
      JSON.stringify(orphanedFilePaths, null, 4)
    );
  });

  test('deleteOrphanedFiles calls fs.unlinkSync', () => {
    const orphanedFilePaths = ['(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧', '╰(◕ᗜ◕)╯', '(✿☯‿☯✿)', '(◕‿◕✿)'];

    Actions.deleteOrphanedFiles(orphanedFilePaths);

    expect(mockFs.unlinkSync).toBeCalledTimes(orphanedFilePaths.length);
    expect(mockFs.unlinkSync.mock.calls[2][0]).toBe(orphanedFilePaths[2]);
  });

  test('printRenameChanges calls console.log', () => {
    const renameChanges = [
      {
        from: 'file_1.txt',
        to: 'hello_world/file_1.txt',
      },
      {
        from: 'hello_world/more/file_2.txt',
        to: 'file_2.txt',
      },
    ];

    Actions.printRenameChanges(renameChanges);

    expect(consoleLogSpy).toBeCalledTimes(2);
    expect(consoleLogSpy.mock.calls[0][0]).toBe(
      `${renameChanges.length} files will be moved.`
    );
    expect(consoleLogSpy.mock.calls[1][0]).toBe(
      JSON.stringify(renameChanges, null, 4)
    );
  });

  test('makeRenameChanges calls fs.mkdirSync', () => {
    const renameChanges: FileRename[] = [
      {
        from: 'fake_dir_1/previous_name_1',
        to: 'new_name_1',
      },
      {
        from: 'fake_dir_2/previous_name_2',
        to: 'new_fake_dir_2/new_name_2',
      },
    ];

    Actions.makeRenameChanges(renameChanges);

    expect(mockFs.mkdirSync).toBeCalledTimes;
    expect(mockFs.mkdirSync.mock.calls[1][0]).toBe('new_fake_dir_2');
    expect(mockFs.mkdirSync.mock.calls[1][1]).toStrictEqual({
      recursive: true,
    });
  });

  test('makeRenameChanges calls git.mv', () => {
    const renameChanges: FileRename[] = [
      {
        from: 'fake_dir/previous_name',
        to: 'new_name',
      },
      {
        from: 'fake_dir/previous_name_2',
        to: 'new_name',
      },
    ];

    Actions.makeRenameChanges(renameChanges);

    expect(mockGit.mv).toBeCalledTimes(2);
    expect(mockGit.mv.mock.calls[1][0]).toBe(renameChanges[1].from);
    expect(mockGit.mv.mock.calls[1][1]).toBe(renameChanges[1].to);
  });
});
