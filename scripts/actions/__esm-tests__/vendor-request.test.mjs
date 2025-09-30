import esmock from 'esmock';
import { expect } from 'expect';
import sinon from 'sinon';
import { test } from 'uvu';

const fetch = sinon.stub();
sinon.stub(global.console, 'error');
sinon.stub(global.console, 'log');
sinon.stub(global.console, 'warn');

const { makeRequest } = await esmock('../utils/vendor-request.mjs', {
  'node-fetch': {
    default: fetch,
  },
});

const mockTranslationResponse = (result, callNumber = 0) => {
  fetch.onCall(callNumber).returns({
    ok: true,
    json: sinon.stub().resolves(result),
    headers: { get: sinon.stub() },
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

test.after.each(() => {
  sinon.reset();
});

test('makeRequest, given a successful fetch, should return mockData, not throw error', async () => {
  mockTranslationResponse(MOCK_SUCCESS_JSON);
  const mockNth = 1;
  const data = await makeRequest(MOCK_URL, MOCK_OPTIONS, mockNth);

  // expect(data).toBe('hello');
  expect(global.console.error.callCount).toEqual(0);
  expect(global.console.log.callCount).toEqual(1);
  expect(data).toBe('mockData');
});

test('makeRequest, given a fetch failure, should catch thrown error', async () => {
  const mockNth = 1;
  for (let i = 0; i < 5; i++) {
    mockTranslationResponse(MOCK_FAILURE_JSON, i);
  }
  try {
    await makeRequest(MOCK_URL, MOCK_OPTIONS, mockNth);
  } catch (e) {
    expect(global.console.error.callCount).toEqual(1);
    expect(global.console.warn.callCount).toEqual(4);
  }
}, 10000);

test('makeRequest, with no `nthTry` specified, should default to 1 and retry 4 times before throwing an error', async () => {
  for (let i = 0; i < 5; i++) {
    mockTranslationResponse(MOCK_FAILURE_JSON, i);
  }
  try {
    await makeRequest(MOCK_URL, MOCK_OPTIONS);
  } catch (e) {
    expect(global.console.error.callCount).toEqual(1);
    expect(global.console.warn.callCount).toEqual(4);
  }
}, 10000);

test('makeRequest, given an nthTry of 3, should retry twice before throwing an error', async () => {
  const mockNth = 3;
  for (let i = 0; i < 5; i++) {
    mockTranslationResponse(MOCK_FAILURE_JSON, i);
  }
  try {
    await makeRequest(MOCK_URL, MOCK_OPTIONS, mockNth);
  } catch (e) {
    expect(global.console.error.callCount).toEqual(1);
    expect(global.console.warn.callCount).toEqual(2);
  }
});

test('makeRequest, given 3 failed then 1 successful fetch, should retry thrice, not throw error', async () => {
  const mockNth = 1;
  for (let i = 0; i < 3; i++) {
    mockTranslationResponse(MOCK_FAILURE_JSON, i);
  }
  mockTranslationResponse(MOCK_SUCCESS_JSON, 3);
  const data = await makeRequest(MOCK_URL, MOCK_OPTIONS, mockNth);

  expect(global.console.error.callCount).toEqual(0);
  expect(global.console.warn.callCount).toEqual(3);
  expect(global.console.log.callCount).toEqual(1);
  expect(data).toBe('mockData');
});

test.run();
