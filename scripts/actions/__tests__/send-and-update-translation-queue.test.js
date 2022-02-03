'use strict';
const { describe, expect, test, beforeEach } = require('@jest/globals');
const { when } = require('jest-when');

const fs = require('fs');
const path = require('path');

process.env.DB_CONNECTION_INFO = '{}';
const {
  getTranslations,
  updateTranslation,
  deleteTranslation,
  addJob,
  updateJob,
  addTranslationsJobsRecord,
} = require('../translation_workflow/database');
const { vendorRequest, uploadFile } = require('../utils/vendor-request');
const {
  getReadyToGoTranslationsForEachLocale,
  createJobs,
  createBatches,
  uploadFiles,
} = require('../send-and-update-translation-queue');

jest.mock('fs');
jest.mock('../translation_workflow/database');
jest.mock('../utils/vendor-request');

describe('send-and-update-translation-queue tests', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  describe('getReadyToGoTranslationsForEachLocale', () => {
    test('only returns pending translations', async () => {
      when(getTranslations)
        .calledWith({ status: 'PENDING' })
        .mockReturnValue([
          {
            id: 1,
            slug: 'hello_world.txt',
            locale: 'ja-JP',
            status: 'PENDING',
          },
        ])
        .calledWith({ status: 'IN_PROGRESS' })
        .mockReturnValue([
          {
            id: 2,
            slug: 'hello_world2.txt',
            locale: 'ja-JP',
            status: 'IN_PROGRESS',
          },
        ])
        .calledWith({ status: 'ERRORED' })
        .mockReturnValue([
          {
            id: 3,
            slug: 'hello_world3.txt',
            locale: 'ja-JP',
            status: 'ERRORED',
          },
        ]);
      fs.existsSync.mockReturnValue(true);

      const translations = await getReadyToGoTranslationsForEachLocale();

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
    });

    test('only returns pending translation if there is no matching in progress translation', async () => {
      when(getTranslations)
        .calledWith({ status: 'PENDING' })
        .mockReturnValue([
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
        ])
        .calledWith({ status: 'IN_PROGRESS' })
        .mockReturnValue([
          {
            id: 2,
            slug: 'hello_world.txt',
            locale: 'ja-JP',
            status: 'IN_PROGRESS',
          },
        ])
        .calledWith({ status: 'ERRORED' })
        .mockReturnValue([]);
      fs.existsSync.mockReturnValue(true);

      const translations = await getReadyToGoTranslationsForEachLocale();

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
    });

    test('only returns pending translation if there is no matching errored translation', async () => {
      when(getTranslations)
        .calledWith({ status: 'PENDING' })
        .mockReturnValue([
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
        ])
        .calledWith({ status: 'ERRORED' })
        .mockReturnValue([
          {
            id: 2,
            slug: 'hello_world.txt',
            locale: 'ja-JP',
            status: 'ERRORED',
          },
        ])
        .calledWith({ status: 'IN_PROGRESS' })
        .mockReturnValue([]);
      fs.existsSync.mockReturnValue(true);

      const translations = await getReadyToGoTranslationsForEachLocale();

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
    });

    test('only returns translations with existing slugs', async () => {
      when(getTranslations)
        .calledWith({ status: 'PENDING' })
        .mockReturnValue([
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
        ])
        .calledWith({ status: 'IN_PROGRESS' })
        .mockReturnValue([])
        .calledWith({ status: 'ERRORED' })
        .mockReturnValue([]);

      when(fs.existsSync)
        .calledWith(path.join(process.cwd(), 'hello_world.txt'))
        .mockReturnValue(true)
        .calledWith(path.join(process.cwd(), 'hello_world2.txt'))
        .mockReturnValue(false);

      const translations = await getReadyToGoTranslationsForEachLocale();

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
    });

    test('deletes translations whose slugs no longer exist', async () => {
      when(getTranslations)
        .calledWith({ status: 'PENDING' })
        .mockReturnValue([
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
        ])
        .calledWith({ status: 'IN_PROGRESS' })
        .mockReturnValue([
          {
            id: 2,
            slug: 'hello_world3.txt',
            locale: 'ja-JP',
            status: 'IN_PROGRESS',
          },
        ])
        .calledWith({ status: 'ERRORED' })
        .mockReturnValue([]);
      fs.existsSync.mockReturnValue(false);

      await getReadyToGoTranslationsForEachLocale();

      expect(deleteTranslation.mock.calls.length).toBe(2);
      expect(deleteTranslation.mock.calls[0][0]).toBe(1);
      expect(deleteTranslation.mock.calls[1][0]).toBe(3);
    });
  });

  describe('createJobs', () => {
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

      expect(vendorRequest.mock.calls.length).toBe(2);
      expect(addJob.mock.calls.length).toBe(2);
    });
  });

  describe('createBatches', () => {
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

      expect(vendorRequest.mock.calls.length).toBe(1);
      expect(updateJob.mock.calls.length).toBe(1);
    });
  });

  describe('uploadFiles', () => {
    test('when upload fails, status of translation is left as "PENDING"', async () => {
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

      expect(updateTranslation.mock.calls.length).toBe(0);
    });

    test('adds TranslationsJobs record when upload succeeds', async () => {
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

      expect(addTranslationsJobsRecord.mock.calls.length).toBe(1);
      expect(addTranslationsJobsRecord.mock.calls[0]).toEqual([
        'fake_translation_id',
        'fake_job_id',
      ]);
    });

    test('update translation state to in progress when upload succeeds, updates job state to in progress', async () => {
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

      expect(updateTranslation.mock.calls.length).toBe(1);
      expect(updateTranslation.mock.calls[0]).toEqual([
        'fake_translation_id',
        { status: 'IN_PROGRESS' },
      ]);
      expect(updateJob.mock.calls[0]).toEqual([
        'fake_job_id',
        { status: 'IN_PROGRESS' },
      ]);
    });
  });
});
