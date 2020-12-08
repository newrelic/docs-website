/* eslint-disable no-console */
const fetch = require('node-fetch');

const env = process.env.ENV;

const HOSTS = {
  staging: 'https://data-dictionary.staging-service.newrelic.com',
  production: 'https://data-dictionary.service.newrelic.com',
  'eu-production': 'https://data-dictionary.service.eu.newrelic.com',
};

const sync = async () => {
  const res = await fetch(`${HOSTS[env]}/sync`, {
    method: 'POST',
    headers: {
      'x-auth-key': process.env.AUTH_KEY,
    },
  });

  const body = await res.text();

  if (!res.ok) {
    console.log(`Error: ${res.status}`);
    console.log(body);

    process.exit(1);
  }
};

sync();
