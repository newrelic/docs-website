const fs = require('fs');
import fetch from 'node-fetch';


const checkForOutdatedTranslations = require('../check-for-outdated-translations');

// Mock node-fetch so we can avoid calling out to GitHub
jest.mock('node-fetch');

global.process.exit = jest.fn();

// Helper function to mock a response from Github
const mockGithubResponse = (result) => {
  fetch.mockResolvedValueOnce({
    ok: true,
    json: jest.fn(() => Promise.resolve(result)),
    headers: { get: jest.fn() },
  });
};

// Mock fs so we don't manipulate local files
jest.mock('fs');

// helper function to construct and mock the response from readFileSync
const mockReadFileSync = (translate = []) => {
  const mdx = `---
title: A test file
${translate.length ? `translate:\n  - ${translate.join('\n  - ')}` : ''}
---
This is a test file
`;

  fs.readFileSync.mockReturnValueOnce(mdx);
};

const mockExistsSync = (bool) => fs.existsSync.mockReturnValueOnce(bool);

const STATUS = {
  ADDED: 'added',
  MODIFIED: 'modified',
  REMOVED: 'removed',
};

describe('Action: Check for outdated translations', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  test('should succeed when no files are found for deletion', async () => {
    const filename = '/content/bar.mdx';
    mockGithubResponse([
      {
        filename,
        status: STATUS.ADDED,
      },
    ]);

    mockReadFileSync(['jp']);
    mockExistsSync(false);

    await checkForOutdatedTranslations();

    expect(global.process.exit).toHaveBeenLastCalledWith(0);
  });

  test('should fail when files are found for deletion', async () => {
    const filename = '/content/bar.mdx';
    mockGithubResponse([
      {
        filename,
        status: STATUS.REMOVED,
      },
    ]);

    mockExistsSync(true);
    await checkForOutdatedTranslations();

    expect(global.process.exit).toHaveBeenLastCalledWith(1);
  });
});
