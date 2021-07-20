'use strict';
/// <reference path="./models/typedefs.js" />

const Models = require('./models');

/**
 * Method to create a record in 'jobs' table.
 * @param {Object} job
 * @param {string} job.job_uid - identifier of job from translation vendor
 * @param {string} job.batch_uid - identifier of batch from translation vendor
 * @param {string} job.status - text value of job status enum
 * @returns newly created job
 */
const addJob = async ({ job_uid, batch_uid, status }) => {
  const job = await Models.Job.create({ job_uid, batch_uid, status });
  return job;
};

/**
 * Method to update an existing job record.
 * @param {number} jobId - identifier of job
 * @param {Object} updates
 * @param {string} updates.status - text value of status enum to update to
 * @returns updated job
 */
const updateJob = async (jobId, { status }) => {
  const [_, [job]] = await Models.Job.update(
    { status },
    { where: { id: jobId } }
  );
  return job;
};

/**
 * Method to get records from 'jobs' table.
 * @param {Job} filters - fields with values to match on
 * @example
 * await getJobs() // returns all jobs
 * @example
 * await getJobs({id: 1}) // returns all jobs with id == 1
 * @example
 * await getJobs({ status: 'IN_REVIEW', job_uid: 'banana' }) // returns all jobs with status == 'IN_REVIEW', job_uid == 'banana'
 * @returns matching jobs
 */
const getJobs = async (filters = {}) => {
  const jobs = await Models.Job.findAll({
    where: { ...filters },
  });

  return jobs;
};

/**
 * Method to delete a record from 'jobs' table.
 * @param {string} jobId - identifier of job
 */
const deleteJob = async (jobId) => {
  await Models.Job.destroy({ where: { id: jobId } });
};

/**
 * Method to get records from 'locales' table.
 * @param {Locale} filters - fields with values to match on
 * @example
 * await getLocales() // returns all locales
 * @returns matching locales
 */
const getLocales = async (filters = {}) => {
  const locales = await Models.Locale.findAll({
    where: { ...filters },
  });
  return locales;
};

/**
 * Method to get records from 'statuses' table.
 * @param {Status} filters - fields with values to match on
 * @example
 * await getStatuses() // returns all statuses
 * @returns matching statuses
 */
const getStatuses = async (filters = {}) => {
  const statuses = await Models.Status.findAll({ where: { ...filters } });
  return statuses;
};

/**
 * Method to add a record to the 'translations' table.
 * @param {Object} translation
 * @param {string} translation.slug - unique filepath
 * @param {string} status - text value of status enum
 * @param {locale} locale - text value of locale enum
 * @returns newly created translation
 */
const addTranslation = async ({ slug, status, locale }) => {
  const translation = await Models.Translation.create({ slug, status, locale });
  return translation;
};

/**
 * Method to update an existing translation record.
 * @param {number} translationId - identifier of translation
 * @param {Object} updates
 * @param {string} updates.status - text value of status enum to update to
 * @returns updated translation
 */
const updateTranslation = async (translationId, { status }) => {
  const [_, [translation]] = await Models.Translation.update(
    { status },
    { where: { id: translationId } }
  );
  return translation;
};

/**
 * Method to get records from 'translations' table.
 * @param {Translation} filters - fields with values to match on
 * @example
 * await getTranslations(); // returns all translations
 * @example
 * await getTranslations({id: 1}) // returns all translations with id == 1
 * @example
 * await getTranslations({slug: 'hello_world.txt', locale: 'ja-JP'}) // returns all translations slug == 'hello_world.txt' && locale == 'ja-JP'
 * @returns matching translations
 */
const getTranslations = async (filters = {}) => {
  const translations = await Models.Translation.findAll({
    where: { ...filters },
  });

  return translations;
};

/**
 * Method to delete a translation.
 * @param {number} translationId - id of record to remove
 */
const deleteTranslation = async (translationId) => {
  await Models.Translation.destroy({ where: { translationId } });
};

/**
 * Method to create a record in 'translations_jobs' table.
 * @param {number} translationId - identifier of translation
 * @param {number} jobId - identifier of job
 * @returns newly created translations_jobs record
 */
const addTranslationsJobsRecord = async (translationId, jobId) => {
  const record = await Models.TranslationsJobs.create({
    translation_id: translationId,
    job_id: jobId,
  });

  return record;
};

/**
 * Method to delete translations_jobs records.
 * @param {number} jobId - identifier of job
 */
const deleteTranslationsJobsRecords = async (jobId) => {
  await Models.TranslationsJobs.destroy({
    where: {
      job_id: jobId,
    },
  });
};

module.exports = {
  addJob,
  updateJob,
  getJobs,
  deleteJob,
  getLocales,
  getStatuses,
  addTranslation,
  updateTranslation,
  getTranslations,
  deleteTranslation,
  addTranslationsJobsRecord,
  deleteTranslationsJobsRecords,
};
