'use strict';
const fs = require('fs');
const fetch = require('node-fetch');
const { makeRequest } = require('../utils/vendor-request');

jest.mock('node-fetch');

jest.spyOn(global.console, 'error').mockImplementation(() => {});
jest.spyOn(global.console, 'log').mockImplementation(() => {});
jest.spyOn(global.console, 'warn').mockImplementation(() => {});

const mockTranslationResponse = (result) => {
  fetch.mockResolvedValueOnce({
    ok: true,
    json: jest.fn(() => Promise.resolve(result)),
    headers: { get: jest.fn() },
    code: 200,
    message: 'Mock message',
  });
};
const MOCK_URL = { href: 'http://mockurl.com' };
const MOCK_OPTIONS = { method: 'GET' };
const MOCK_SUCCESS_JSON = {
  response: {
    code: 'SUCCESS',
    data: 'mockData',
  },
};
const MOCK_FAILURE_JSON = {
  response: {
    code: 'FAILURE',
    data: 'hello',
  },
};

describe('Action: Send and update translation queue', () => {
  beforeEach(() => {
    jest.setTimeout(10000);
  });
  afterEach(() => {
    jest.resetAllMocks();
    jest.clearAllTimers();
  });

  test('makeRequest, given a successful fetch, should return mockData, not throw error', async () => {
    mockTranslationResponse(MOCK_SUCCESS_JSON);
    const mockNth = 1;
    const data = await makeRequest(MOCK_URL, MOCK_OPTIONS, mockNth);

    // expect(data).toBe('hello');
    expect(global.console.error).toBeCalledTimes(0);
    expect(global.console.log).toBeCalledTimes(1);
    expect(data).toBe('mockData');
  });

  test('makeRequest, given a fetch failure, should catch thrown error', async () => {
    const mockNth = 1;
    for (let i = 0; i < 5; i++) {
      mockTranslationResponse(MOCK_FAILURE_JSON);
    }
    try {
      await makeRequest(MOCK_URL, MOCK_OPTIONS, mockNth);
    } catch (e) {
      expect(global.console.error).toBeCalledTimes(1);
      expect(global.console.warn).toBeCalledTimes(4);
    }
  });

  test('makeRequest, with no `nthTry` specified, should default to 1 and retry 4 times before throwing an error', async () => {
    for (let i = 0; i < 5; i++) {
      mockTranslationResponse(MOCK_FAILURE_JSON);
    }
    try {
      await makeRequest(MOCK_URL, MOCK_OPTIONS);
    } catch (e) {
      expect(global.console.error).toBeCalledTimes(1);
      expect(global.console.warn).toBeCalledTimes(4);
    }
  });

  test('makeRequest, given an nthTry of 3, should retry twice before throwing an error', async () => {
    const mockNth = 3;
    for (let i = 0; i < 5; i++) {
      mockTranslationResponse(MOCK_FAILURE_JSON);
    }
    try {
      await makeRequest(MOCK_URL, MOCK_OPTIONS, mockNth);
    } catch (e) {
      expect(global.console.error).toBeCalledTimes(1);
      expect(global.console.warn).toBeCalledTimes(2);
    }
  });

  test('makeRequest, given 3 failed then 1 successful fetch, should retry thrice, not throw error', async () => {
    const mockNth = 1;
    for (let i = 0; i < 3; i++) {
      mockTranslationResponse(MOCK_FAILURE_JSON);
    }
    mockTranslationResponse(MOCK_SUCCESS_JSON);
    const data = await makeRequest(MOCK_URL, MOCK_OPTIONS, mockNth);
    expect(global.console.error).toBeCalledTimes(0);
    expect(global.console.warn).toBeCalledTimes(3);
    expect(global.console.log).toBeCalledTimes(1);
    expect(data).toBe('mockData');
  });
});
