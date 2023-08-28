import yaml from 'js-yaml';
import { u } from 'unist-builder';

const frontmatter = (attributes) => u('yaml', yaml.dump(attributes).trim());

export { frontmatter };
