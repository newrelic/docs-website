import esmock from 'esmock';
import { expect } from 'expect';
import sinon from 'sinon';
import { test } from 'uvu';

const updateTranslations = sinon.stub();
const getTranslationsJobsRecords = sinon.stub();
const getJobs = sinon.stub();
const updateJob = sinon.stub();

const {
  aggregateStatuses,
  updateTranslationRecords,
  updateJobRecords,
  logErroredStatuses,
} = await esmock.strict('../check-job-progress.mjs', {
  '../translation_workflow/database.js': {
    getJobs,
    updateJob,
    getTranslationsJobsRecords,
    updateTranslations,
    StatusEnum: {
      PENDING: 'PENDING',
      IN_PROGRESS: 'IN_PROGRESS',
      IN_REVIEW: 'IN_REVIEW',
      COMPLETED: 'COMPLETED',
      ERRORED: 'ERRORED',
    },
  },
});

const PROJECT_ID = '7470e5b60';

test.before.each(() => {
  sinon.reset();
});

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

  const { totalSuccesses, totalFailures, jobStatuses } =
    aggregateStatuses(slugStatuses);

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

test('updates translation record to COMPLETED for failed slug', async () => {
  updateTranslations.returns([{ id: 0 }]);

  const slugStatus = { ok: false, slug: 'failure.txt', locale: 'ja-JP' };

  await updateTranslationRecords(PROJECT_ID, [slugStatus]);

  expect(updateTranslations.callCount).toBe(1);
  expect(updateTranslations.getCall(0).args[0]).toStrictEqual({
    slug: 'failure.txt',
    status: 'IN_PROGRESS',
    locale: 'ja-JP',
    project_id: '7470e5b60',
  });
  expect(updateTranslations.getCall(0).args[1]).toStrictEqual({
    status: 'COMPLETED',
  });
});

test('updates translation record to COMPLETED for successful slug', async () => {
  updateTranslations.returns([{ id: 0 }]);

  const slugStatus = { ok: true, slug: 'success.txt', locale: 'ja-JP' };

  await updateTranslationRecords(PROJECT_ID, [slugStatus]);

  expect(updateTranslations.callCount).toBe(1);
  expect(updateTranslations.getCall(0).args[0]).toStrictEqual({
    slug: 'success.txt',
    status: 'IN_PROGRESS',
    locale: 'ja-JP',
    project_id: '7470e5b60',
  });
  expect(updateTranslations.getCall(0).args[1]).toStrictEqual({
    status: 'COMPLETED',
  });
});

test('updates multiple records', async () => {
  updateTranslations.returns([{ id: 0 }]);
  const slugStatuses = [
    { ok: true, slug: 'fake_slug.txt', locale: 'ja-JP' },
    { ok: false, slug: 'fake_slug_2.txt', locale: 'ko-KR' },
    { ok: true, slug: 'fake_slug_3.txt', locale: 'es-LA' },
  ];

  await updateTranslationRecords(PROJECT_ID, slugStatuses);

  expect(updateTranslations.callCount).toBe(3);
  expect(updateTranslations.getCall(0).args[0]).toStrictEqual({
    slug: 'fake_slug.txt',
    status: 'IN_PROGRESS',
    locale: 'ja-JP',
    project_id: '7470e5b60',
  });
  expect(updateTranslations.getCall(0).args[1]).toStrictEqual({
    status: 'COMPLETED',
  });
  expect(updateTranslations.getCall(1).args[0]).toStrictEqual({
    slug: 'fake_slug_2.txt',
    status: 'IN_PROGRESS',
    locale: 'ko-KR',
    project_id: '7470e5b60',
  });
  expect(updateTranslations.getCall(1).args[1]).toStrictEqual({
    status: 'COMPLETED',
  });
  expect(updateTranslations.getCall(2).args[0]).toStrictEqual({
    slug: 'fake_slug_3.txt',
    status: 'IN_PROGRESS',
    locale: 'es-LA',
    project_id: '7470e5b60',
  });
  expect(updateTranslations.getCall(2).args[1]).toStrictEqual({
    status: 'COMPLETED',
  });
});

test('logs errored translations to the console', async () => {
  console.log = sinon.stub();
  const erroredStatuses = [{ ok: false, slug: 'fake_slug.txt' }];
  logErroredStatuses(erroredStatuses);
  expect(console.log.getCall(0).args[0]).toBe(
    '    [!]Translation errored: fake_slug.txt'
  );
});

test('logs multiple errored translations', async () => {
  console.log = sinon.stub();
  const erroredStatuses = [
    { ok: false, slug: 'fake_slug.txt' },
    { ok: false, slug: 'fake_slug_2.txt' },
    { ok: false, slug: 'fake_slug_3.txt' },
  ];
  logErroredStatuses(erroredStatuses);
  expect(console.log.getCall(0).args[0]).toBe(
    '    [!]Translation errored: fake_slug.txt'
  );
  expect(console.log.getCall(1).args[0]).toBe(
    '    [!]Translation errored: fake_slug_2.txt'
  );
  expect(console.log.getCall(2).args[0]).toBe(
    '    [!]Translation errored: fake_slug_3.txt'
  );
});

test('logs when an ok translation is passed in errored array', async () => {
  console.log = sinon.stub();
  const erroredStatuses = [
    { ok: false, slug: 'fake_slug.txt' },
    { ok: true, slug: 'fake_slug_2.txt' },
  ];
  logErroredStatuses(erroredStatuses);
  expect(console.log.getCall(0).args[0]).toBe(
    '    [!]Translation errored: fake_slug.txt'
  );
  expect(console.log.getCall(1).args[0]).toBe(
    '    [!]The translation fake_slug_2.txt is ok and should be set to COMPLETED'
  );
});

test('updates job record to ERRORED if there is at least one failure', async () => {
  getTranslationsJobsRecords.returns(['fake_record']);

  const jobStatuses = {
    '1': {
      successes: 0,
      failures: 1,
    },
  };

  await updateJobRecords(jobStatuses);

  expect(updateJob.callCount).toBe(1);
  expect(updateJob.getCall(0).args[0]).toBe('1');
  expect(updateJob.getCall(0).args[1]).toStrictEqual({ status: 'ERRORED' });
});

test('updates job record to COMPLETED if all translations succeeded (0 failures).', async () => {
  getTranslationsJobsRecords.returns(['fake_record']);

  const jobStatuses = {
    '1': {
      successes: 1,
      failures: 0,
    },
  };

  await updateJobRecords(jobStatuses);

  expect(updateJob.callCount).toBe(1);
  expect(updateJob.getCall(0).args[0]).toBe('1');
  expect(updateJob.getCall(0).args[1]).toStrictEqual({ status: 'COMPLETED' });
});

test('updates multiple records', async () => {
  getTranslationsJobsRecords.returns(['fake_record', 'fake_record']);

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

  expect(updateJob.callCount).toBe(3);
});

test('does not update jobs where DB record count does not match success + failure count', async () => {
  getTranslationsJobsRecords.returns(['fake_record', 'fake_record']);

  const jobStatuses = {
    '1': {
      successes: 1,
      failures: 0,
    },
  };

  await updateJobRecords(jobStatuses);

  expect(updateJob.callCount).toBe(0);
});

test.run();
