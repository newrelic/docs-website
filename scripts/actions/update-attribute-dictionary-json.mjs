#! /usr/bin/env node
import fetch from 'node-fetch';
import fs from 'fs';
import core from '@actions/core';
import deepEqual from 'deep-equal';
import sortBy from 'lodash/fp/sortBy.js';

// this should be prod nerdgraph
const NERDGRAPH_API_URL = 'https://api.newrelic.com/graphql';
const JSON_FILE_PATH = 'src/data/attribute-dictionary-en.json';

const GQL_QUERY = `
  {
    docs {
      dataDictionary {
        events {
          name
          definition(format: HTML)
          dataSources {
            name
          }
          attributes {
            definition(format: HTML)
            name
            units {
              label
            }
            events
          }
        }
      }
    }
  }
`;

const sortByName = sortBy(['name']);

// the service doesn't guarantee sort order,
// so to effectively compare the old and new data,
// we need to sort every array before doing a `deepEqual`.
const sortEverythingByName = (events) =>
  sortByName(
    events.map((event) => ({
      ...event,
      attributes: sortByName(
        event.attributes.map((attribute) => ({
          ...attribute,
          events: attribute.events.sort(),
        }))
      ),
    }))
  );

async function updateJson() {
  const newData = await fetch(NERDGRAPH_API_URL, {
    method: 'POST',
    headers: {
      'Api-Key': process.env.API_KEY,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query: GQL_QUERY }),
  })
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      } else {
        throw res;
      }
    })
    .catch(async (res) => {
      console.log(`Fetch failed with status code ${res.status}`);
      const contentTypeHeader = res.headers.get('content-type');
      const contentType = contentTypeHeader?.split(';')?.[0];

      if (contentType === 'application/json') {
        const json = await res.json();
        console.log(json);
      } else {
        const text = await res.text();
        console.log(text);
      }

      process.exit(1);
    });

  if (newData.hasOwnProperty('error')) {
    console.error('Issue with fetching attribute dictionary:', newData.error);
    process.exit(1);
  }
  console.log('Fetch successful!');

  const newEvents = sortEverythingByName(
    newData.data.docs.dataDictionary.events
  );

  const oldJson = fs.readFileSync(JSON_FILE_PATH, { encoding: 'utf-8' });
  const oldEvents = JSON.parse(oldJson);

  const hasUpdates = !deepEqual(oldEvents, newEvents);

  const message = hasUpdates
    ? 'Adding updates for attribute dictionary json'
    : 'No updates to attribute dictionary';

  core.setOutput('updateAttributeDictionary', hasUpdates);

  if (hasUpdates) {
    const newJson = JSON.stringify(newEvents, null, 2);
    fs.writeFileSync(JSON_FILE_PATH, newJson);
  }
}

updateJson();
