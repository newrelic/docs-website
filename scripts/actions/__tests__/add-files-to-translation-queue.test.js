import fs from 'fs';
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

// Singleton instance for use in tests & additional mocks
const mockDocumentClient = new AWS.DynamoDB.DocumentClient();
const updateFn = jest.spyOn(mockDocumentClient, 'update');

// Helper function to mock a DB response
const mockDbResponse = (method, result) => {
  mockDocumentClient[method].mockImplementationOnce((_, callback) =>
    callback(null, { Item: result })
  );
};

// Mock node-fetch so we can avoid calling out to GitHub
jest.mock('node-fetch');

// Helper function to mock a response from Github
const mockGithubResponse = (result) => {
  fetch.mockResolvedValueOnce({
    json: jest.fn(() => Promise.resolve(result)),
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

// Helper function to get the params sent to the last DB mock update
const getMockUpdateParams = () =>
  updateFn.mock.calls[updateFn.mock.calls.length - 1][0];

const STATUS = {
  ADDED: 'added',
  MODIFIED: 'modified',
  REMOVED: 'removed',
};

const UPDATE_PARAMS = {
  TableName: 'TranslationQueues',
  Key: { type: 'to_translate' },
  UpdateExpression: 'set locales = :slugs',
};

describe('Action: Add Slugs To Translation Queue', () => {
  afterAll(() => {
    jest.resetAllMocks();
  });

  test('should add a new file to an existing locale', async () => {
    mockDbResponse('get', {
      locales: {
        jp: ['/content/foo.mdx'],
      },
    });

    mockGithubResponse([
      {
        filename: '/content/bar.mdx',
        status: STATUS.ADDED,
      },
    ]);

    mockReadFileSync(['jp']);

    mockDbResponse('update', true);

    await addFilesToTranslationQueue();

    expect(getMockUpdateParams()).toStrictEqual({
      ...UPDATE_PARAMS,
      ExpressionAttributeValues: {
        ':slugs': {
          jp: ['/content/foo.mdx', '/content/bar.mdx'],
        },
      },
    });
  });

  test('should add a new file to a new locale', async () => {
    mockDbResponse('get', {
      locales: {
        jp: ['/content/foo.mdx'],
      },
    });

    mockGithubResponse([
      {
        filename: '/content/bar.mdx',
        status: STATUS.ADDED,
      },
    ]);

    mockReadFileSync(['ko']);

    mockDbResponse('update', true);

    await addFilesToTranslationQueue();

    expect(getMockUpdateParams()).toStrictEqual({
      ...UPDATE_PARAMS,
      ExpressionAttributeValues: {
        ':slugs': {
          jp: ['/content/foo.mdx'],
          ko: ['/content/bar.mdx'],
        },
      },
    });
  });

  test('should add a existing files to an existing locale', async () => {
    mockDbResponse('get', {
      locales: {
        jp: ['/content/foo.mdx'],
        ko: ['/content/bar.mdx'],
      },
    });

    mockGithubResponse([
      {
        filename: '/content/bar.mdx',
        status: STATUS.ADDED,
      },
    ]);

    mockReadFileSync(['jp']);

    mockDbResponse('update', true);

    await addFilesToTranslationQueue();

    expect(getMockUpdateParams()).toStrictEqual({
      ...UPDATE_PARAMS,
      ExpressionAttributeValues: {
        ':slugs': {
          jp: ['/content/foo.mdx', '/content/bar.mdx'],
          ko: ['/content/bar.mdx'],
        },
      },
    });
  });

  test('should add existing files to a new locale', async () => {
    mockDbResponse('get', {
      locales: {
        jp: ['/content/foo.mdx'],
      },
    });

    mockGithubResponse([
      {
        filename: '/content/foo.mdx',
        status: STATUS.ADDED,
      },
    ]);

    mockReadFileSync(['jp', 'ko']);

    mockDbResponse('update', true);

    await addFilesToTranslationQueue();

    expect(getMockUpdateParams()).toStrictEqual({
      ...UPDATE_PARAMS,
      ExpressionAttributeValues: {
        ':slugs': {
          jp: ['/content/foo.mdx'],
          ko: ['/content/foo.mdx'],
        },
      },
    });
  });
});
