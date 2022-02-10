// const fs = require('fs');
// const path = require('path');
// const unified = require('unified');
// const remarkParse = require('remark-parse');
// const remarkMdx = require('remark-mdx');
// const visit = require('unist-util-visit');

import fs from 'fs';
import path from 'path';
import { retext } from 'retext';
import { visit } from 'unist-util-visit';

// const { createMdxAstCompiler } = require('@mdx-js/mdx');

const filePath = path.join(
  process.cwd(),
  'src/content/docs/accounts/original-accounts-billing/original-users-roles/user-migration.mdx'
);

// function transformer(ast) {
//   console.log('running');
//   visit(ast, 'image', visitor);

//   function visitor(node) {
//     console.log({ node });
//     // newNode = 'do work here';
//     // return Object.assign(node, newNode);
//   }
// }

const images = () => {
  // return transformer;
  return (tree, file) => {
    fs.writeFileSync(
      path.join(process.cwd(), 'tree.json'),
      JSON.stringify(tree, 2, null),
      'utf-8'
    );
    visit(tree, 'image', (node) => {
      console.log(node);
    });
  };
};

const mdx = fs.readFileSync(path.join(filePath));

// const ast = unified().use(remarkParse).use(images).use(remarkMdx).parse(mdx);

retext()
  .use(images)
  .process(mdx)
  .then((file) => {
    console.error('Error');
  });

// fs.writeFileSync(
//   path.join(process.cwd(), 'mdx-ast.json'),
//   JSON.stringify(ast, null, 2),
//   'utf-8'
// );

// const compiler = createMdxAstCompiler({ remarkPlugins: [handleImages] });

// const ast = compiler.parse(mdx);
