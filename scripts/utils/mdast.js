const yaml = require('js-yaml');
import { u } from 'unist-builder';

const frontmatter = (attributes) => u('yaml', yaml.safeDump(attributes).trim());

module.exports = { frontmatter };
