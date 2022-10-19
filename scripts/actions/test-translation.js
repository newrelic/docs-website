const {
  trackTranslationError,
  trackTranslationEvent,
} = require('./utils/translation-monitoring.js');

const main = async () => {
  await trackTranslationError({
    projectId: 0,
    workflow: 'none',
    target: 'test',
    test: true,
    errorMessage: `this is a test error`,
  });

  await trackTranslationEvent({
    projectId: 0,
    workflow: 'none',
    target: 'test',
    test: true,
  });
};

main();
