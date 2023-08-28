import remove from 'unist-util-remove';
import filter from 'unist-util-filter';
import { toString } from 'mdast-util-to-string';
import { convert } from 'unist-util-is';
import { cloneDeep, last } from 'lodash-es';

const CUSTOM_ID = /^#[\w-]+$/;
const isIgnoredNode = convert(['image']);

const getId = (node) => {
  const { label } = last(node.children);

  return label.replace(/^#/, '');
};

const isHeadingWithCustomId = (node) => {
  const lastChild = last(node.children);

  return (
    node.type === 'heading' &&
    lastChild &&
    lastChild.type === 'linkReference' &&
    CUSTOM_ID.test(lastChild.label)
  );
};

const parseHeading = (node) => {
  if (node.type !== 'heading') {
    throw new Error('Node must be a heading');
  }

  node = filter(node, (el) => !isIgnoredNode(el));

  if (isHeadingWithCustomId(node)) {
    // make a copy of the node so that removing the linkReference does not
    // mutate the original node object
    const nodeCopy = cloneDeep(node);
    const id = getId(nodeCopy);

    remove(nodeCopy, 'linkReference');

    return { id, text: toString(nodeCopy).trim() };
  }

  return { id: null, text: toString(node) };
};
export { getId, parseHeading, isHeadingWithCustomId };
