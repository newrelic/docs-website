const all = require('mdast-util-to-hast/lib/all');
const one = require('mdast-util-to-hast/lib/one');
const {
  findAttribute,
  isMdxElement,
} = require('../../../codemods/utils/mdxast');
const toString = require('mdast-util-to-string');
const u = require('unist-builder');
const { compileStyleObject } = require('../../../rehype-plugins/utils/styles');
const { set, get } = require('lodash');
const path = require('path');
const toMDAST = require('remark-parse');
const remarkMdx = require('remark-mdx');
const remarkMdxjs = require('remark-mdxjs');
const unified = require('unified');
const visit = require('unist-util-visit');

const stripNulls = (obj) =>
  Object.fromEntries(Object.entries(obj).filter(([, value]) => value != null));

const getAllAttributes = (node) =>
  node.attributes
    ? node.attributes.reduce((obj, { name: propName, value }) => {
        return { ...obj, [propName]: value };
      }, {})
    : {};

const getSrcUrl = (fileRelativePath, url) =>
  path.join(path.dirname(fileRelativePath.replace('src/content', '')), url);

const removeParagraphs = () => (tree) => {
  visit(tree, 'paragraph', (node, idx, parent) => {
    parent.children.splice(idx, 1, ...node.children);
  });
};

const attributeProcessor = unified()
  .use(toMDAST)
  .use(remarkMdx)
  .use(remarkMdxjs)
  .use(removeParagraphs);

module.exports = {
  image: (h, node, imageHashMap, fileRelativePath) => {
    const srcUrl = getSrcUrl(fileRelativePath, node.url);

    const isBlockImage =
      node.parent &&
      isMdxElement('paragraph', node.parent) &&
      node.parent.children.length === 1;

    return h(
      node,
      isBlockImage ? 'div' : 'span',
      stripNulls({
        className: [isBlockImage ? 'block-image' : 'inline-image', 'image'],
        style: get(node, 'data.style', null),
      }),
      [
        h(
          node,
          'img',
          stripNulls({
            src: imageHashMap[srcUrl.substr(1)] || node.url,
            alt: node.alt,
          })
        ),
      ]
    );
  },
  CodeBlock: (h, node) => {
    const props =
      node.meta &&
      node.meta.split(' ').reduce((obj, metaProp) => {
        const [propName, propValue] = metaProp.split('=');
        return {
          ...obj,
          [propName]: propValue,
        };
      });

    return h(
      node,
      'pre',
      {
        ...stripNulls({ ...props, lang: node.lang }),
      },
      [h(node, 'code', {}, [u('text', toString(node))])]
    );
  },
  Callout: (h, node) => {
    return h(
      node,
      'div',
      {
        className: `callout-${findAttribute('variant', node)}`,
      },
      all(h, node)
    );
  },
  Button: (h, node) => {
    const className = [
      findAttribute('variant', node),
      findAttribute('size', node),
    ].filter(Boolean);
    return h(
      node,
      'button',
      {
        className: className.reduce(
          (str, prop) => str.append(` btn-${prop}`),
          'btn'
        ),
      },
      [u('text', toString(node))]
    );
  },
  ButtonLink: (h, node) => {
    const className = [
      findAttribute('variant', node),
      findAttribute('size', node),
    ].filter(Boolean);
    return h(
      node,
      'a',
      {
        className: className.reduce((arr, prop) => [...arr, `btn-${prop}`], [
          'btn',
        ]),
        href: findAttribute('to', node),
      },
      [u('text', toString(node))]
    );
  },
  Collapser: (h, node) => {
    return h(
      node,
      'div',
      stripNulls({
        className: 'collapser',
        title: findAttribute('title', node),
      }),
      all(h, node)
    );
  },
  CollapserTitle: (h, node) => {
    return h(
      node,
      'div',
      stripNulls({
        className: 'collapser-title',
      }),
      all(h, node)
    );
  },
  CollapserGroup: (h, node) => {
    return h(
      node,
      'div',
      {
        className: 'collapser-group',
      },
      all(h, node)
    );
  },
  ExternalLink: (h, node) =>
    h(node, 'a', stripNulls(getAllAttributes(node)), all(h, node)),
  Link: (h, node) =>
    h(
      node,
      'a',
      {
        href: findAttribute('to', node),
      },
      all(h, node)
    ),
  Icon: (h, node) => {
    return h(
      node,
      'span',
      {
        className: 'icon',
        name: findAttribute('name', node),
      },
      [u('text', '\u00A0')]
    );
  },
  ImageSizing: (h, node) => {
    const style = stripNulls({
      height: findAttribute('height', node),
      width: findAttribute('width', node),
      verticalAlign: findAttribute('verticalAlign', node),
    });

    const [image] = node.children;
    set(image, 'data.style', compileStyleObject(style));

    return one(h, image, node.parent);
  },
  TechTile: (h, node) => {
    const attributes = JSON.stringify(getAllAttributes(node));
    return h(
      node,
      'div',
      {
        className: 'tech-tile',
        'data-props': attributes,
      },
      all(h, node)
    );
  },
  TechTileGrid: (h, node) =>
    h(node, 'div', { className: 'tech-tile-grid' }, all(h, node)),
  TechTileIcon: (h, node) =>
    h(node, 'div', { className: 'tech-tile-icon' }, all(h, node)),
  InlineCode: (h, node) => h(node, 'code', {}, [u('text', toString(node))]),
  table: (h, node) => h(node, 'table', {}, all(h, node)),
  thead: (h, node) => h(node, 'thead', {}, all(h, node)),
  tbody: (h, node) => h(node, 'tbody', {}, all(h, node)),
  tr: (h, node) => h(node, 'tr', {}, all(h, node)),
  th: (h, node) => h(node, 'th', {}, all(h, node)),
  td: (h, node) => h(node, 'td', {}, all(h, node)),
  var: (h, node) => h(node, 'var', {}, [u('text', toString(node))]),
  Video: (h, node) => {
    const id = findAttribute('id', node);
    const type = findAttribute('type', node);
    const videoPlatforms = {
      youtube: (id) => `//www.youtube.com/embed/${id}?modestbranding=1`,
      wistia: (id) => `//fast.wistia.net/embed/iframe/${id}`,
    };

    return h(
      node,
      'div',
      {
        className: 'iframe-wrapper',
      },
      [
        h(node, 'iframe', {
          src: videoPlatforms[type](id),
          allow:
            'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture',
          allowFullScreen: true,
          frameborder: '0',
        }),
      ]
    );
  },
  mark: (h, node) => h(node, 'mark', {}, [u('text', toString(node))]),
  figcaption: (h, node) =>
    h(node, 'div', { className: ['meta'] }, all(h, node)),
};
