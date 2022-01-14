const {
  getJobs,
  updateJob,
  getTranslationsJobsRecords,
  updateTranslations,
  StatusEnum,
} = require('../translation-workflow/database.js');
const { vendorRequest } = require('../utils/vendor-request');
const { fetchAndDeserializeFiles } = require('../fetch-and-deserialize');
const { configuration } = require('../configuration');

const {
  getBatchStatus,
  aggregateStatuses,
  updateTranslationRecords,
  updateJobRecords,
} = require('../check-job-progress');

jest.mock();
