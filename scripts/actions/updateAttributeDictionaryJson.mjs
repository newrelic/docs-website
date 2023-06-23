#! /usr/bin/env node
import fetch from 'node-fetch';
import * as fs from 'fs/promises';

const NERDGRAPH_API_URL = 'https://staging-api.newrelic.com/graphql';
const JSON_FILE_PATH = './attribute-dictionary.json';

const GQL_QUERY = `
  {
    docs {
      dataDictionary {
        events(names: "PageView") {
          name
          attributes {
            definition
            name
            units {
              label
            }
          }
        }
      }
    }
  }
`;

const updatedJson = await fetch(NERDGRAPH_API_URL, {
  method: 'POST',
  headers: {
    'Api-Key': process.env.API_KEY,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ query: GQL_QUERY }),
}).then((res) => res.json());

fs.writeFile(JSON_FILE_PATH, JSON.stringify(updatedJson, null, 2));
