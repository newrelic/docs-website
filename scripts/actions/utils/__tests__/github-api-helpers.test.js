'use strict';

const {
  getNextLink,
  fetchPaginatedGHResults,
} = require('../github-api-helpers');

jest.mock('node-fetch');

import fetch from 'node-fetch';


describe('Github API Helpers', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  describe('getNextLink', () => {
    test('returns null for malformed header', () => {
      expect(getNextLink('askdflaksjdhf2421dfdfs')).toBe(null);
    });

    test('returns null when `next` is not present', () => {
      expect(
        getNextLink('<https://fakesite.com/files?page=1>; rel="last"')
      ).toBe(null);
    });

    test('returns url for next page', () => {
      expect(
        getNextLink(
          '<https://fakesite.com/files?page=36>; rel="last", <https://fakesite.com/files?page=2>; rel="next"'
        )
      ).toEqual('https://fakesite.com/files?page=2');
    });
  });

  describe('fetchPaginatedGHResults', () => {
    test('throws error when response is not ok', async () => {
      fetch.mockResolvedValueOnce({ ok: false });
      await expect(fetchPaginatedGHResults('test', 'test')).rejects.toThrow();
    });

    test('properly sets API URL and token', async () => {
      fetch.mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve([]),
        headers: {
          get: () => null,
        },
      });

      await fetchPaginatedGHResults('testurl', 'testtoken');
      expect(fetch.mock.calls[0]).toEqual([
        'testurl',
        { headers: { authorization: 'token testtoken' } },
      ]);
    });

    test('returns 1 page of results', async () => {
      const files = [{ file: 1 }, { file: 2 }, { file: 3 }];
      fetch.mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve(files),
        headers: {
          get: () => null,
        },
      });

      const page = await fetchPaginatedGHResults('test', 'test');
      expect(page).toEqual(files);
    });

    test('returns more than 1 page of results', async () => {
      const files = [{ file: 1 }, { file: 2 }, { file: 3 }];
      fetch
        .mockResolvedValueOnce({
          ok: true,
          json: () => Promise.resolve(files.slice(0, 1)),
          headers: {
            get: () => '<https://fakesite.com/files?page=2>; rel="next"',
          },
        })
        .mockResolvedValueOnce({
          ok: true,
          json: () => Promise.resolve(files.slice(1, 2)),
          headers: {
            get: () => '<https://fakesite.com/files?page=3>; rel="next"',
          },
        })
        .mockResolvedValueOnce({
          ok: true,
          json: () => Promise.resolve(files.slice(2)),
          headers: {
            get: () => '',
          },
        });

      const pages = await fetchPaginatedGHResults('test', 'test');
      expect(pages).toEqual(files);
    });
  });
});
