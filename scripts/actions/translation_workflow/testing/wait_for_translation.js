const Database = require('../database');
const { getAccessToken, vendorRequest } = require('../../utils/vendor-request');

const PROJECT_ID = process.env.TRANSLATION_VENDOR_PROJECT;

(async () => {
  // wait for translation job to complete.
  const accessToken = await getAccessToken();

  const [job] = await Database.getJobs();
  const translationJobUid = job.job_uid;

  let translationIsComplete = false;
  let currentTotalWait = 0;
  const maxTimeout = 600000; // ms, which equals 10 minutes
  while (!translationIsComplete && currentTotalWait < maxTimeout) {
    const jobData = await vendorRequest({
      method: 'GET',
      endpoint: `/jobs-api/v3/projects/${PROJECT_ID}/jobs/${translationJobUid}`,
      accessToken,
    });

    const { jobStatus } = jobData;

    console.log(jobStatus);

    if (jobStatus === 'COMPLETED') {
      console.log('Translation Complete');
      process.exit(0);
    } else {
      console.log(
        `Job -- ${translationJobUid} -- is still translating. Current wait: ${currentTotalWait}`
      );
      currentTotalWait += 5000;
      await new Promise((resolve) => setTimeout(resolve, 5000));
    }
  }
})();
