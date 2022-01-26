import { mock } from 'jest-mock-extended';
import { mocked } from 'jest-mock';
import { SimpleGit } from 'simple-git';

const mockGit = mock<SimpleGit>();

import * as fs from 'fs';

import * as Actions from '../actions';
import { FileRename } from '../actions';

jest.mock('simple-git', () => {
  return { default: jest.fn(() => mockGit) };
});
jest.mock('glob');
jest.mock('fs');
jest.mock('path');

const mockFs = mocked(fs, true);

describe('actions tests', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  test('makeRenameChanges calls fs.mkdirSync, git.mv', () => {
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

    expect(mockFs.mkdirSync.mock.calls.length).toBe(2);
    expect(mockGit.mv.mock.calls.length).toBe(2);
  });
});
