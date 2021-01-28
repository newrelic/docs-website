const { saveToTranslationQueue } = require('./utils/save-to-db');
const checkArgs = require('./utils/check-args');

/**
 * Updates the "being translated" queue with the batches that are not done.
 * @returns {Promise}
 */
const saveRemainingBatches = async () => {
  checkArgs(3);

  const batchUids = JSON.parse(process.argv[2]);

  await saveToTranslationQueue(
    { type: 'being_translated' },
    'set batchUids = :batchUids',
    { ':batchUids': batchUids }
  );
};

saveRemainingBatches();
