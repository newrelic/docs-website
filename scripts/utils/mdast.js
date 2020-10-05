const yaml = require('js-yaml');
const u = require('unist-builder');

const frontmatter = (attributes) => u('yaml', yaml.safeDump(attributes));

module.exports = { frontmatter };
