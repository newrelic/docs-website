const fetchAndDeserialize = require('./fetch-and-deserialize');
const { vendorRequest } = require('./utils/vendor-request');

const checkJobStatus = async (batchUid) => {
  const {
    response: {
      data: { status },
    },
  } = await vendorRequest(
    'GET',
    `https://api.smartling.com/jobs-api/v3/projects/${project}/jobs/${batchUid}`
  );

  return status === 'COMPLETED';
};

const main = async () => {
  //get list of current job batch uuids, for each one execute checkJobStatus
  try {
    const isCompleted = checkJobStatus(batchUid);

    isCompleted && fetchAndDeserialize(batchUid);

    process.exit(0);
  } catch (error) {
    console.error(`[!] Unable to check job status`);
    console.log(error);
    process.exit(1);
  }
};

main();
