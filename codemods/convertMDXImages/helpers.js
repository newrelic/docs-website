const camelCase = require('camelcase');

/**
 * Helper function that creates the import statement to add to AST.
 * @param {Set<string>} imports - set used to dynamically add imports to top of mdx files
 * @param {*} importName - import name for mdx img tags to reference in src
 * @param {*} nodeUrl - aliased image url that points to image file.
 */
const addImportToSet = (imports, importName, nodeUrl) => {
  const importString = `import ${importName} from '${nodeUrl}'`;
  imports.add(importString);
};

/**
 * Helper function to create a style object string for rehype plugins.
 * @param {Object} obj - Object that contains styling props from parent node
 * @returns {String} stringified object to allow MDX rehype plugins to parse
 */
const generateStyleObjectString = (obj) => {
  return `{${Object.entries(obj)
    .map((item) => ` ${item[0]}: '${item[1]}'`)
    .join(',')}}`;
};

/**
 * Helper function that creates an array of attributes for AST Node
 * @param {Data<Node>} node - AST Node
 * @returns restOfAttributes - array of attributes for AST Node
 */
const generateRestOfAttributes = (node) => {
  const restOfAttributes = Object.entries(node).reduce(
    (accum, [key, value]) => {
      let attributeNodeObj = {};
      if (['title', 'alt'].includes(key) && value) {
        attributeNodeObj = {
          type: 'mdxAttribute',
          name: key,
          value,
        };
      }
      return Object.keys(attributeNodeObj).length > 0
        ? [...accum, attributeNodeObj]
        : [...accum];
    },
    []
  );

  return restOfAttributes;
};

/**
 *
 * @param {String} url - path to image file
 * @returns Formatted filename to work as import name in MDX files
 */
const createImportName = (url) => {
  return camelCase(
    url
      .replace('./images/', '')
      .replace(/\.(png|jpg|jpeg|svg|gif)/i, '')
      .replaceAll('%', 'img')
  );
};

/**
 *
 * @param {Node} parent - parent node from AST
 * @returns Object containing MDX attribute information for AST node.
 */
const createStylingAttribute = (parent) => {
  const styleAttributeNode = {
    type: 'mdxAttribute',
    name: 'style',
    value: {
      type: 'mdxValueExpression',
      value: null,
    },
  };

  const style = {};

  parent.attributes.forEach(({ name, value }) => {
    style[name] = value;
  });

  styleAttributeNode.value.value = generateStyleObjectString(style);
  return styleAttributeNode;
};

/**
 *
 * @returns Attribute for class attribute for HTML image tag.
 */
const createClassAttribute = () => {
  return {
    type: 'text',
    name: 'class',
    value: 'inline',
  };
};

/**
 *
 * @param {String} importName - name for src attribute on image tag
 * @returns
 */
const createUpdatedSrcNode = (importName) => {
  return {
    type: 'mdxAttribute',
    name: 'src',
    value: {
      type: 'mdxValueExpression',
      value: importName,
    },
  };
};

module.exports = {
  addImportToSet,
  generateRestOfAttributes,
  createImportName,
  createStylingAttribute,
  createClassAttribute,
  createUpdatedSrcNode,
};
