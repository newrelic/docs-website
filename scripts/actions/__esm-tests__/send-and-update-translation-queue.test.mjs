'use strict';
import { test, suite } from 'uvu';
import { expect } from 'expect';
import { stub, reset } from 'sinon';
import esmock from 'esmock';
import path from 'path';

process.env.DB_CONNECTION_INFO = '{}';

const vendorRequest = stub();
const uploadFile = stub();
const existsSync = stub();
const addJob = stub();
const updateJob = stub();
const updateTranslation = stub();
const addTranslationsJobsRecord = stub();
const getTranslations = stub();
const deleteTranslation = stub();

const {
  getReadyToGoTranslationsForEachLocale,
  createJobs,
  createBatches,
  uploadFiles,
} = await esmock(
  '../send-and-update-translation-queue.mjs',
  {
    '../utils/vendor-request.mjs': {
      vendorRequest,
      uploadFile,
    },
    fs: {
      existsSync,
    },
  },
  {
    '../translation_workflow/database.js': {
      addJob,
      updateJob,
      updateTranslation,
      addTranslationsJobsRecord,
      getTranslations,
      deleteTranslation,
    },
  }
);

test.before.each(() => {
  reset();
});

const getReadyToGoTranslationsForEachLocaleTest = suite(
  'getReadyToGoTranslationsForEachLocale'
);

getReadyToGoTranslationsForEachLocaleTest(
  'only returns pending translations',
  async () => {
    getTranslations.withArgs({ status: 'PENDING' }).returns([
      {
        id: 1,
        slug: 'hello_world.txt',
        locale: 'ja-JP',
        status: 'PENDING',
      },
    ]);

    getTranslations.withArgs({ status: 'IN_PROGRESS' }).returns([
      {
        id: 2,
        slug: 'hello_world2.txt',
        locale: 'ja-JP',
        status: 'IN_PROGRESS',
      },
    ]);

    getTranslations.withArgs({ status: 'ERRORED' }).returns([
      {
        id: 3,
        slug: 'hello_world3.txt',
        locale: 'ja-JP',
        status: 'ERRORED',
      },
    ]);

    existsSync.returns(true);

    const translations = await getReadyToGoTranslationsForEachLocaleTest();

    expect(translations).toEqual({
      'ja-JP': [
        {
          id: 1,
          slug: 'hello_world.txt',
          locale: 'ja-JP',
          status: 'PENDING',
        },
      ],
    });
  }
);

getReadyToGoTranslationsForEachLocaleTest(
  'only returns pending translation if there is no matching in progress translation',
  async () => {
    getTranslations.withArgs({ status: 'PENDING' }).returns([
      {
        id: 1,
        slug: 'hello_world.txt',
        locale: 'ja-JP',
        status: 'PENDING',
      },
      {
        id: 3,
        slug: 'hello_world2.txt',
        locale: 'ja-JP',
        status: 'PENDING',
      },
    ]);

    getTranslations.withArgs({ status: 'IN_PROGRESS' }).returns([
      {
        id: 2,
        slug: 'hello_world.txt',
        locale: 'ja-JP',
        status: 'IN_PROGRESS',
      },
    ]);

    getTranslations.withArgs({ status: 'ERRORED' }).returns([]);

    existsSync.returns(true);

    const translations = await getReadyToGoTranslationsForEachLocaleTest();

    expect(translations).toEqual({
      'ja-JP': [
        {
          id: 3,
          slug: 'hello_world2.txt',
          locale: 'ja-JP',
          status: 'PENDING',
        },
      ],
    });
  }
);

getReadyToGoTranslationsForEachLocaleTest(
  'only returns pending translation if there is no matching errored translation',
  async () => {
    getTranslations.withArgs({ status: 'PENDING' }).returns([
      {
        id: 1,
        slug: 'hello_world.txt',
        locale: 'ja-JP',
        status: 'PENDING',
      },
      {
        id: 3,
        slug: 'hello_world2.txt',
        locale: 'ja-JP',
        status: 'PENDING',
      },
    ]);

    getTranslations.withArgs({ status: 'ERRORED' }).returns([
      {
        id: 2,
        slug: 'hello_world.txt',
        locale: 'ja-JP',
        status: 'ERRORED',
      },
    ]);

    getTranslations.withArgs({ status: 'IN_PROGRESS' }).returns([]);
    existsSync.returns(true);

    const translations = await getReadyToGoTranslationsForEachLocaleTest();

    expect(translations).toEqual({
      'ja-JP': [
        {
          id: 3,
          slug: 'hello_world2.txt',
          locale: 'ja-JP',
          status: 'PENDING',
        },
      ],
    });
  }
);

getReadyToGoTranslationsForEachLocaleTest(
  'only returns translations with existing slugs',
  async () => {
    getTranslations.withArgs({ status: 'PENDING' }).returns([
      {
        id: 1,
        slug: 'hello_world.txt',
        locale: 'ja-JP',
        status: 'PENDING',
      },
      {
        id: 3,
        slug: 'hello_world2.txt',
        locale: 'ja-JP',
        status: 'PENDING',
      },
    ]);
    getTranslations.withArgs({ status: 'IN_PROGRESS' }).returns([]);
    getTranslations.withArgs({ status: 'ERRORED' }).returns([]);

    existsSync
      .withArgs(path.join(process.cwd(), 'hello_world.txt'))
      .returns(true);
    existsSync
      .withArgs(path.join(process.cwd(), 'hello_world2.txt'))
      .returns(false);

    const translations = await getReadyToGoTranslationsForEachLocaleTest();

    expect(translations).toEqual({
      'ja-JP': [
        {
          id: 1,
          slug: 'hello_world.txt',
          locale: 'ja-JP',
          status: 'PENDING',
        },
      ],
    });
  }
);

getReadyToGoTranslationsForEachLocaleTest(
  'deletes translations whose slugs no longer exist',
  async () => {
    getTranslations.withArgs({ status: 'PENDING' }).returns([
      {
        id: 1,
        slug: 'hello_world.txt',
        locale: 'ja-JP',
        status: 'PENDING',
      },
      {
        id: 3,
        slug: 'hello_world2.txt',
        locale: 'ja-JP',
        status: 'PENDING',
      },
    ]);
    getTranslations.withArgs({ status: 'IN_PROGRESS' }).returns([
      {
        id: 2,
        slug: 'hello_world3.txt',
        locale: 'ja-JP',
        status: 'IN_PROGRESS',
      },
    ]);
    getTranslations.withArgs({ status: 'ERRORED' }).returns([]);
    existsSync.returns(false);

    await getReadyToGoTranslationsForEachLocale();

    expect(deleteTranslation.callCount).toEqual(2);
    expect(deleteTranslation.getCall(0).args[0]).toEqual(1);
    expect(deleteTranslation.getCall(0).args[1]).toBe(3);
  }
);

test('createJobs', () => {
  test('creates a job for each locale', async () => {
    vendorRequest
      .mockReturnValueOnce({
        translationJobUid: 'fake_job_uid_1',
        targetLocaleIds: ['fake_locale_1'],
      })
      .mockReturnValueOnce({
        translationJobUid: 'fake_job_uid_2',
        targetLocaleIds: ['fake_locale_2'],
      });

    await createJobs(['fake_locale_1', 'fake_locale_2']);

    expect(vendorRequest.callCount).toEqual(2);
    expect(addJob.callCount).toEqual(2);
  });
});

test('createBatches', () => {
  test('creates a batch with vendor, and updates job record', async () => {
    vendorRequest.mockReturnValueOnce({
      batch_uid: 'fake_batch_uid',
    });
    const jobs = [
      {
        job_uid: 'fake_job_uid',
        locale: 'fake_locale',
        id: 'fake_id',
      },
    ];
    const translationsPerLocale = {
      fake_locale: [
        {
          slug: 'fake_slug',
        },
      ],
    };

    await createBatches(jobs, translationsPerLocale);

    expect(vendorRequest.callCount).toEqual(1);
    expect(updateJob.callCount).toEqual(1);
  });
});

const uploadFilesTest = suite('uploadFiles');

uploadFilesTest(
  'when upload fails, status of translation is left as "PENDING"',
  async () => {
    uploadFile.mockReturnValueOnce(() => {
      return { code: 'NOT_ACCEPTED' };
    });
    const batches = [
      { locale: 'ja-JP', batchUid: 'fake_batch_uid', jobId: 'fake_job_id' },
    ];
    const translationsPerLocale = {
      'ja-JP': [
        {
          id: 'fake_translation_id',
        },
      ],
    };

    await uploadFiles(batches, translationsPerLocale);

    expect(updateTranslation.callCount).toEqual(0);
  }
);

uploadFilesTest(
  'adds TranslationsJobs record when upload succeeds',
  async () => {
    uploadFile.mockReturnValueOnce(() => {
      return { code: 'ACCEPTED' };
    });
    const batches = [
      { locale: 'ja-JP', batchUid: 'fake_batch_uid', jobId: 'fake_job_id' },
    ];
    const translationsPerLocale = {
      'ja-JP': [
        {
          id: 'fake_translation_id',
        },
      ],
    };

    await uploadFiles(batches, translationsPerLocale);

    expect(addTranslationsJobsRecord.callCount).toEqual(1);
    expect(addTranslationsJobsRecord.getCall(0).args[0]).toEqual(
      'fake_translation_id'
    );
    expect(addTranslationsJobsRecord.getCall(0).args[1]).toEqual('fake_job_id');
  }
);

uploadFilesTest(
  'update translation state to in progress when upload succeeds, updates job state to in progress',
  async () => {
    uploadFile.mockReturnValueOnce(() => {
      return { code: 'ACCEPTED' };
    });
    const batches = [
      { locale: 'ja-JP', batchUid: 'fake_batch_uid', jobId: 'fake_job_id' },
    ];
    const translationsPerLocale = {
      'ja-JP': [
        {
          id: 'fake_translation_id',
        },
      ],
    };

    await uploadFiles(batches, translationsPerLocale);

    expect(updateTranslation.callCount).toEqual(1);
    expect(updateTranslation.getCall(0).args[0]).toEqual('fake_translation_id');
    expect(updateTranslation.getCall(0).args[1]).toEqual({
      status: 'IN_PROGRESS',
    });
    expect(updateJob.getCall(0).args[0]).toEqual('fake_job_id');
    expect(updateJob.getCall(0).args[1]).toEqual({ status: 'IN_PROGRESS' });
  }
);

test.run();
