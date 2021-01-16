const visit = require('unist-util-visit');
const { has, set } = require('lodash');
const { findChild, removeChild } = require('../utils/mdxast');

const testComponent = () => (tree) => {
  visit(
    tree,
    (node) => {
      return node;
    },
    (node) => {
      console.log(node);
    }
  );
};

module.exports = testComponent;
