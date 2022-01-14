const {
  getJobs,
  updateJob,
  getTranslationsJobsRecords,
  updateTranslations,
  StatusEnum,
  up,
} = require('../translation_workflow/database');
const { vendorRequest } = require('../utils/vendor-request');
const { fetchAndDeserializeFiles } = require('../fetch-and-deserialize');
const { configuration } = require('../configuration');

const {
  getBatchStatus,
  aggregateStatuses,
  updateTranslationRecords,
  updateJobRecords,
} = require('../check-job-progress');

jest.mock('../translation_workflow/database');
jest.mock('../utils/vendor-request');
jest.mock('../fetch-and-deserialize');
jest.mock('../configuration');

describe('getBatchStatus', () => {
  test('test', () => {});
});

describe('aggregateStatuses', () => {
  test('calculates correct sums', () => {
    const slugStatuses = [
      {
        ok: false,
        slug: 'file1.txt',
        jobId: '1',
      },
      {
        ok: true,
        slug: 'file2.txt',
        jobId: '2',
      },
      {
        ok: true,
        slug: 'file3.txt',
        jobId: '1',
      },
      {
        ok: false,
        slug: 'file4.txt',
        jobId: '2',
      },
      {
        ok: true,
        slug: 'file5.txt',
        jobId: '3',
      },
      {
        ok: true,
        slug: 'file6.txt',
        jobId: '2',
      },
    ];

    const { totalSuccesses, totalFailures, jobStatuses } = aggregateStatuses(
      slugStatuses
    );

    expect(totalSuccesses).toBe(4);
    expect(totalFailures).toBe(2);
    expect(jobStatuses).toStrictEqual({
      1: {
        successes: 1,
        failures: 1,
      },
      2: {
        successes: 2,
        failures: 1,
      },
      3: {
        successes: 1,
        failures: 0,
      },
    });
  });
});

describe('updateTranslationRecords', () => {
  test('test', () => {});
});

describe('updateJobRecord', () => {
  test('test', () => {});
});
