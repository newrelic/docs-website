import { isElement as is } from 'hast-util-is-element';
import { visit } from 'unist-util-visit';

import {
  hasAttribute,
  findAttribute,
  isType,
} from '../../../codemods/utils/mdxast.mjs';
import getPageResponse from './get-page-response.mjs';

const isHash = (to) => to.startsWith('#');
const isEmail = (to) => to.startsWith('https://') || to.startsWith('mailto:');
const isNRDownload = (to) =>
  to.startsWith('http://download.newrelic.com/') ||
  to.startsWith('https://download.newrelic.com');

const skippedLinkTypes = (to) => isHash(to) || isEmail(to) || isNRDownload(to);

const isMdxElement = (node) =>
  isType('mdxBlockElement', node) || isType('mdxSpanElement', node);

const linkVisitorMdx =
  ({ fileRelativePath }) =>
  async (tree) => {
    visit(
      tree,
      (node) =>
        (isMdxElement(node) && node.attributes && hasAttribute('to', node)) ||
        isType('link', node),
      async (node) => {
        const to = isType('link', node) ? node.url : findAttribute('to', node);
        try {
          if (!skippedLinkTypes(to)) {
            const code = await getPageResponse(to);
            if (code === 404) {
              console.log(`INVALID LINK: ${to} \n > file: ${fileRelativePath}`);
            }
          }
        } catch (error) {
          console.error('ERROR:', to);
        }
      }
    );
  };

const linkVisitorHtml =
  ({ fileRelativePath }) =>
  async (tree) => {
    visit(
      tree,
      (node) => is(node, 'a'),
      async (a) => {
        const to = a.properties.href;
        try {
          if (!skippedLinkTypes(to)) {
            const code = await getPageResponse(to);
            if (code === 404) {
              console.log(`INVALID LINK: ${to} \n > file: ${fileRelativePath}`);
            }
          }
        } catch (error) {
          console.log('ERROR:', to);
        }
      }
    );
  };

export default { linkVisitorMdx, linkVisitorHtml };
