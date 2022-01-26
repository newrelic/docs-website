/**
 * @typedef {Object} Job
 * @property {number} id auto-incrementing identifier
 * @property {string} job_uid identifier of job from translation vendor
 * @property {string} batch_uid identifier of batch from translation vendor
 * @property {number} status - numeric value of status enum
 * @property {Date} date_created timestamp indicating when record was created
 * @property {Date} date_modified timestamp indicating when record was last updated
 * @property {string} project_id identifier of project from translation vendor job is associated with
 */

/**
 * @typedef {Object} Locale
 * @property {number} id auto-incrementing identifier
 * @property {string} locale locale ID sent to vendor indicating what language to translate to, ex. 'ja-JP'
 */

/**
 * @typedef {Object} Status
 * @property {number} id auto-incrementing identifier
 * @property {string} status status of a job
 * * possible status values are: {'PENDING', 'IN_PROGRESS', 'IN_REVIEW', 'COMPLETED'}
 */

/**
 * @typedef {Object} Translation
 * @property {number} id auto-incrementing identifier
 * @property {string} slug unique filepath
 * @property {string} status numeric value of status enum
 * @property {number} locale numeric value of locale enum
 * @property {Date} date_created timestamp indicating when record was created
 * @property {Date} date_modified timestamp indicating when record was last updated
 * @property {string} project_id identifier of project from translation vendor translation is associated with
 */

/**
 * @typedef {Object} TranslationsJobs
 * @property {number} translation_id auto-incrementing identifier of a translation
 * @property {number} job_id auto-incrementing identifier of a job
 */
