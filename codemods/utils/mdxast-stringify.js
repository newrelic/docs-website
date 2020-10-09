const createProcessor = require('../../scripts/utils/codemod/create-processor');

const stringify = (tree) => createProcessor().stringify(tree);

module.exports = stringify;
