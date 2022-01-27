import { mock } from 'jest-mock-extended';
import { mocked } from 'jest-mock';
import { SimpleGit } from 'simple-git';

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
  .mockImplementation(() => {});
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

  const parseRenameTestCases = [
    {
      input:
        'src/content/docs/accounts/accounts/{account-maintenance => billing}/change-passwords-user-preference.mdx',
      result: {
        from:
          'src/content/docs/accounts/accounts/account-maintenance/change-passwords-user-preference.mdx',
        to:
          'src/content/docs/accounts/accounts/billing/change-passwords-user-preference.mdx',
      },
    },
    {
      input:
        'src/content/docs/{accounts/accounts/account-maintenance => }/change-passwords-user-preference.mdx',
      result: {
        from:
          'src/content/docs/accounts/accounts/account-maintenance/change-passwords-user-preference.mdx',
        to: 'src/content/docs/change-passwords-user-preference.mdx',
      },
    },
  ];

  test.each(parseRenameTestCases)(
    'parseRenameSummary correctly parses $input into $result',
    ({ input, result }) =>
      expect(Actions.parseRenameSummary(input)).toStrictEqual(result)
  );

  test('parseRenameSummary correctly parses', () => {
    const result = Actions.parseRenameSummary(
      'src/content/docs/accounts/accounts/{account-maintenance => billing}/change-passwords-user-preference.mdx'
    );

    expect(result).toStrictEqual({
      from:
        'src/content/docs/accounts/accounts/account-maintenance/change-passwords-user-preference.mdx',
      to:
        'src/content/docs/accounts/accounts/billing/change-passwords-user-preference.mdx',
    });
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
