import AWS from 'aws-sdk';
import addFilesToTranslationQueue from '../add-files-to-translation-queue';

// Mock the aws-sdk so we can avoid calling our actual DB
jest.mock('aws-sdk', () => {
  const mockConfig = { update: jest.fn() };
  const mockDocumentClient = { get: jest.fn(), update: jest.fn() };
  const mockDynamoDB = { DocumentClient: jest.fn(() => mockDocumentClient) };

  return { config: mockConfig, DynamoDB: mockDynamoDB };
});

// Singleton instance of our mock DB (used to generate responses)
const mockDynamoDb = new AWS.DynamoDB.DocumentClient();

// Helper function to prepare the mock DB to respond with given result
const mockDynamoDbGetResponse = (result) => {
  mockDynamoDb.get.mockImplementationOnce((_, callback) =>
    callback(null, result)
  );
};

// TODO: jest.mock('node-fetch') get for the call out to GitHub

// TODO: jest.mock('fs') readFileSync for file content

describe('Action: Add Slugs To Translation Queue', () => {
  afterAll(() => {
    jest.resetAllMocks();
  });

  // NOTE: this isn't an actual test, just used to test the mock setup
  test('setup', async () => {
    const result = {
      Item: {
        locales: {
          jp: ['/content/foo.mdx', '/content/bar.mdx'],
        },
      },
    };

    mockDynamoDbGetResponse(result);

    await addFilesToTranslationQueue();

    expect(true).toBeTruthy();
  });

  // TODO: test happy path

  // TODO: test failure states

  // TODO: test edge cases
});
