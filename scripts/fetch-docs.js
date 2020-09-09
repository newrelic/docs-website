const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://docs.newrelic.com/api/ui/content';
const BASE_DIR = path.join(__dirname, '..', 'src/content');

// IDs grouped by content type (related GH issue in comments)
const input = [
  { type: 'page', ids: ['38576', '40431'] }, // #44
  { type: 'api_doc', ids: ['37696', '40421'] }, // #45
  { type: 'release_notes', ids: ['40416', '40466'] }, // #48
  { type: 'release_notes_platform', ids: ['40531', '40506'] }, // #49
  { type: 'troubleshooting_doc', ids: ['40351', '15086'] }, // #50
  // { type: 'nr1_announcement', ids: ['40491', '40516'] }, // #47
  // { type: 'attribute_definition', ids: ['40336', '40016'] }, // 46
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

const getCategories = (url) => {
  return url
    .replace('https://docs.newrelic.com/docs/', '')
    .split('/')
    .slice(0, -1);
};

const fetchPages = async () => {
  // Step 1: get the docs
  const requests = input.flatMap(({ type, ids }) =>
    ids.map((id) => fetchDoc(type, id))
  );

  const results = await Promise.all(requests);

  results.forEach((doc) => {
    // Step 2: create the directory structure
    const dir = path.join(BASE_DIR, ...getCategories(doc.docUrl));
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    // Step 3: create a file for each doc
    const slug = doc.docUrl.split('/').slice(-1);
    const fileName = `${dir}/${slug}.mdx`;
    fs.writeFile(fileName, doc.body, (err) => {
      if (err) {
        console.log(`Error, could not create ${fileName}`, e);
      }
    });
  });
};

// Run the script via `node path_to_script`
fetchPages();
