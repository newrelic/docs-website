const BASE_URL = 'https://docs.newrelic.com/api/ui/content';

// IDs grouped by content type (related GH issue in comments)
const input = [
  { type: 'page', ids: ['38576', '40431'] }, // #44
  { type: 'api_doc', ids: ['37696', '40421'] }, // #45
  { type: 'release_notes', ids: ['40416', '40466'] }, // #48
  { type: 'release_notes_platform', ids: ['40531', '40506'] }, // #49
  { type: 'troubleshooting_doc', ids: ['40351', '15086'] }, // #50
  { type: 'nr1_announcement', ids: ['40426', '40516'] }, // #47
  { type: 'attribute_definition', ids: ['40336', '40016'] }, // 46
];

const fetchPages = () => {
  console.log('hello, world!');
};

// Run the script
fetchPages();
