/* eslint-disable no-console */
'use strict';

const fetch = require('node-fetch');

const NEW_RELIC_ACCOUNT_ID = process.env.NEW_RELIC_ACCOUNT_ID;
const NEW_RELIC_LICENSE_KEY = process.env.NEW_RELIC_LICENSE_KEY;

const CUSTOM_EVENT = {
  TRANSLATION: 'TranslationWorkflow',
  TRANSLATION_ERROR: 'TranslationWorkflowError',
};

// file to describe tar
const TRACKING_TARGET = {
  FILE: 'file',
  JOB: 'job',
  WORKFLOW: 'workflow',
};

/**
 * Helper function to make an API request to the Events API.
 *
 * @param {string} key New Relic license key for the account
 * @param {string} accountId The New Relic account to send the request to
 * @param {Object} data The data to be sent
 * @returns {Promise<boolean>} Whether or not the request was (eventually) successful
 */
const apiRequest = async (key, accountId, data) => {
  const url = `https://staging-insights-collector.newrelic.com/v1/accounts/${accountId}/events`;

  if (!NEW_RELIC_LICENSE_KEY) {
    console.error('NEW_RELIC_LICENSE_KEY is not set');

    return false;
  }

  try {
    await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        'Api-Key': key,
      },
    });

    return true;
  } catch (e) {
    console.error('Unable to track custom event:', data, e);

    return false;
  }
};

const trackTranslationEvent = async ({
  projectId,
  workflow,
  target,
  ...metadata
}) => {
  return apiRequest(NEW_RELIC_LICENSE_KEY, NEW_RELIC_ACCOUNT_ID, {
    eventType: CUSTOM_EVENT.TRANSLATION,
    account: NEW_RELIC_ACCOUNT_ID,
    projectId,
    workflow,
    target,
    ...metadata,
  });
};

const trackTranslationError = async ({
  projectId,
  workflow,
  target,
  ...metadata
}) => {
  return apiRequest(NEW_RELIC_LICENSE_KEY, NEW_RELIC_ACCOUNT_ID, {
    eventType: CUSTOM_EVENT.TRANSLATION_ERROR,
    account: NEW_RELIC_ACCOUNT_ID,
    projectId,
    workflow,
    target,
    ...metadata,
  });
};

module.exports = {
  trackTranslationEvent,
  trackTranslationError,
  TRACKING_TARGET,
};
