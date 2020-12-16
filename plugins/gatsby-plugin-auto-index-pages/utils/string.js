const REPLACEMENTS = [
  [/ios/gi, 'iOS'],
  [/apm/gi, 'APM'],
  [/new relic/gi, 'New Relic'],
  [/\bphp\b/gi, 'PHP'],
  [/\bui\b/gi, 'UI'],
  [/\bapi\b/gi, 'API'],
  [/([wW])hats/gi, "$1hat's"],
  [/\bsdk\b/gi, 'SDK'],
];

const sentenceCase = (dirname) => {
  const [firstWord, ...words] = dirname.split('-');
  const title = [capitalize(firstWord), ...words].join(' ');

  return replace(title);
};

const capitalize = (word) => word.charAt(0).toUpperCase() + word.slice(1);

const replace = (string) =>
  REPLACEMENTS.reduce(
    (str, [regex, replacement]) => str.replace(regex, replacement),
    string
  );

module.exports = { capitalize, replace, sentenceCase };
