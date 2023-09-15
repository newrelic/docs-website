import { visit } from 'unist-util-visit';
import { select } from 'hast-util-select';

import { isMdxElement, findAttribute } from '../../codemods/utils/mdxast.mjs';
import { parseStyleString, compileStyleObject } from '../utils/styles.mjs';

const imageSizing = () => (tree) => {
  visit(tree, isMdxElement('ImageSizing'), (node, idx, parent) => {
    const width = findAttribute('width', node);
    const height = findAttribute('height', node);
    const verticalAlign = findAttribute('verticalAlign', node);

    const imageWrapper = node.children[0];
    const image = select('img', imageWrapper);

    const style = parseStyleString(imageWrapper.properties.style);
    const imageStyle = parseStyleString(image.properties.style);

    if (width) {
      style.width = width;
    }

    if (height) {
      style.height = height;
      imageStyle.height = 'auto';
    }

    if (verticalAlign) {
      style['vertical-align'] = verticalAlign;
    }

    imageWrapper.properties.style = compileStyleObject(style);
    image.properties.style = compileStyleObject(imageStyle);

    parent.children[idx] = imageWrapper;
  });
};

export default imageSizing;
