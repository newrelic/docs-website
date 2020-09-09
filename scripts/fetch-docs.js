const fetch = require('node-fetch');

const BASE_URL = 'https://docs.newrelic.com/api/ui/content';

// IDs grouped by content type (related GH issue in comments)
const input = [
  { type: 'page', ids: ['38576', '40431'] }, // #44
  { type: 'api_doc', ids: ['37696', '40421'] }, // #45
  { type: 'release_notes', ids: ['40416', '40466'] }, // #48
  { type: 'release_notes_platform', ids: ['40531', '40506'] }, // #49
  { type: 'troubleshooting_doc', ids: ['40351', '15086'] }, // #50
  // { type: 'nr1_announcement', ids: ['40491', '40516'] }, // #47
  { type: 'attribute_definition', ids: ['40336', '40016'] }, // 46
];

const getUrl = (type, id) => [BASE_URL, type, id].join('/');

const fetchDoc = async (type, id) => {
  const url = getUrl(type, id);
  try {
    const resp = await fetch(url);
    const result = await resp.json();
    return result.docs[0].doc;
  } catch (e) {
    console.log(`Error, could not fetch ${url}`, e);
  }
};

const fetchPages = async () => {
  const requests = input.flatMap(({ type, ids }) =>
    ids.map((id) => fetchDoc(type, id))
  );

  const results = await Promise.all(requests);
  const titles = results.map((result) => result.title);

  console.log(titles);
};

// Run the script via `node path_to_script`
fetchPages();
