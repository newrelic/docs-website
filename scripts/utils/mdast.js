const yaml = require('js-yaml');

const frontmatter = (attributes) => ({
  type: 'yaml',
  value: yaml.safeDump(attributes),
});

module.exports = { frontmatter };
