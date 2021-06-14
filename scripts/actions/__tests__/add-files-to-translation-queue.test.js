import AWS from 'aws-sdk';
import fetch from 'node-fetch';

import addFilesToTranslationQueue from '../add-files-to-translation-queue';

// Mock aws-sdk so we can avoid calling our actual DB
jest.mock('aws-sdk', () => {
  const config = { update: jest.fn() };
  const mockDocumentClient = { get: jest.fn(), update: jest.fn() };
  const DynamoDB = { DocumentClient: jest.fn(() => mockDocumentClient) };

  return { config, DynamoDB };
});

// Helper function to mock a DB response
const mockDbResponse = (result) => {
  new AWS.DynamoDB.DocumentClient().get.mockImplementationOnce((_, callback) =>
    callback(null, { Item: result })
  );
};

// Mock node-fetch so we can avoid calling out to GitHub
jest.mock('node-fetch');

// Helper function to mock a response from Github
const mockGithubResponse = (result) => {
  fetch.mockResolvedValue({
    json: jest.fn(() => Promise.resolve(result)),
  });
};

// TODO: jest.mock('fs') readFileSync for file content

describe('Action: Add Slugs To Translation Queue', () => {
  afterAll(() => {
    jest.resetAllMocks();
  });

  // NOTE: this isn't an actual test, just used to test the mock setup
  test('setup', async () => {
    mockDbResponse({
      locales: {
        jp: ['/content/foo.mdx', '/content/bar.mdx'],
      },
    });

    mockGithubResponse({ foo: 'baz' });

    await addFilesToTranslationQueue();

    expect(true).toBeTruthy();
  });

  // TODO: test happy path

  // TODO: test failure states

  // TODO: test edge cases
});
