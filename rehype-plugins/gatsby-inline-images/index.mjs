import { visit } from 'unist-util-visit';
import { phrasing } from 'hast-util-phrasing';
import { isElement as is } from 'hast-util-is-element';
import { hasProperty as has } from 'hast-util-has-property';
import { parseStyleString, compileStyleObject } from '../utils/styles.mjs';

const isGatsbyImageWrapper = (node) =>
  is(node, 'span') &&
  has(node, 'className') &&
  node.properties.className.some(
    (className) => className === 'gatsby-resp-image-wrapper'
  );

const inlineImages =
  (options = {}) =>
  (tree) => {
    const { spacing } = options;

    visit(tree, isGatsbyImageWrapper, (node, idx, parent) => {
      const isBlockImage = is(parent, 'p') && parent.children.length === 1;

      if (isBlockImage) {
        return;
      }

      const style = parseStyleString(node.properties.style);
      const hasPreviousPhrasingContent = phrasing(
        parent.children[idx - 1] || {}
      );
      const hasNextPhrasingContent = phrasing(parent.children[idx + 1] || {});

      style.display = 'inline-block';
      style.width = style.width || '100%';
      style['margin-left'] = null;
      style['margin-right'] = null;

      if (spacing && hasPreviousPhrasingContent) {
        style['margin-left'] = spacing;
      }

      if (spacing && hasNextPhrasingContent) {
        style['margin-right'] = spacing;
      }

      if (hasPreviousPhrasingContent || hasNextPhrasingContent) {
        style['vertical-align'] = style['vertical-align'] || 'text-bottom';
      }

      node.properties.style = compileStyleObject(style);
    });
  };

export default inlineImages;
