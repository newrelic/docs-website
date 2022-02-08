const {
  updateJob,
  getTranslationsJobsRecords,
  updateTranslations,
} = require('../translation_workflow/database');

const {
  aggregateStatuses,
  updateTranslationRecords,
  updateJobRecords,
} = require('../check-job-progress');

jest.mock('../translation_workflow/database');
jest.mock('../utils/vendor-request');
jest.mock('../fetch-and-deserialize');
jest.mock('../configuration');

describe('check-jobs-progress tests', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

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
    test('updates translation record to ERRORED for failed slug', async () => {
      updateTranslations.mockReturnValue([{ id: 0 }]);

      const slugStatus = { ok: false, slug: 'failure.txt' };

      await updateTranslationRecords([slugStatus]);

      expect(updateTranslations.mock.calls.length).toBe(1);
      expect(updateTranslations.mock.calls[0][0]).toStrictEqual({
        slug: 'failure.txt',
        status: 'IN_PROGRESS',
      });
      expect(updateTranslations.mock.calls[0][1]).toStrictEqual({
        status: 'ERRORED',
      });
    });

    test('updates translation record to COMPLETED for successful slug', async () => {
      updateTranslations.mockReturnValue([{ id: 0 }]);

      const slugStatus = { ok: true, slug: 'success.txt' };

      await updateTranslationRecords([slugStatus]);

      expect(updateTranslations.mock.calls.length).toBe(1);
      expect(updateTranslations.mock.calls[0][0]).toStrictEqual({
        slug: 'success.txt',
        status: 'IN_PROGRESS',
      });
      expect(updateTranslations.mock.calls[0][1]).toStrictEqual({
        status: 'COMPLETED',
      });
    });

    test('updates multiple records', async () => {
      updateTranslations.mockReturnValue([{ id: 0 }]);
      const slugStatuses = [
        { ok: true, slug: 'fake_slug.txt' },
        { ok: false, slug: 'fake_slug_2.txt' },
        { ok: true, slug: 'fake_slug_3.txt' },
      ];

      await updateTranslationRecords(slugStatuses);

      expect(updateTranslations.mock.calls.length).toBe(3);
    });
  });

  describe('updateJobRecords', () => {
    test('updates job record to ERRORED if there is at least one failure', async () => {
      getTranslationsJobsRecords.mockReturnValue(['fake_record']);

      const jobStatuses = {
        '1': {
          successes: 0,
          failures: 1,
        },
      };

      await updateJobRecords(jobStatuses);

      expect(updateJob.mock.calls.length).toBe(1);
      expect(updateJob.mock.calls[0][0]).toBe('1');
      expect(updateJob.mock.calls[0][1]).toStrictEqual({ status: 'ERRORED' });
    });

    test('updates job record to COMPLETED if all translations succeeded (0 failures).', async () => {
      getTranslationsJobsRecords.mockReturnValue(['fake_record']);

      const jobStatuses = {
        '1': {
          successes: 1,
          failures: 0,
        },
      };

      await updateJobRecords(jobStatuses);

      expect(updateJob.mock.calls.length).toBe(1);
      expect(updateJob.mock.calls[0][0]).toBe('1');
      expect(updateJob.mock.calls[0][1]).toStrictEqual({ status: 'COMPLETED' });
    });

    test('updates multiple records', async () => {
      getTranslationsJobsRecords.mockReturnValue([
        'fake_record',
        'fake_record',
      ]);

      const jobStatuses = {
        '1': {
          successes: 2,
          failures: 0,
        },
        '2': {
          successes: 0,
          failures: 2,
        },
        '3': {
          successes: 1,
          failures: 1,
        },
      };

      await updateJobRecords(jobStatuses);

      expect(updateJob.mock.calls.length).toBe(3);
    });

    test('does not update jobs where DB record count does not match success + failure count', async () => {
      getTranslationsJobsRecords.mockReturnValue([
        'fake_record',
        'fake_record',
      ]);

      const jobStatuses = {
        '1': {
          successes: 1,
          failures: 0,
        },
      };

      await updateJobRecords(jobStatuses);

      expect(updateJob.mock.calls.length).toBe(0);
    });
  });
});
