const all = require('mdast-util-to-hast/lib/all');
const { findAttribute } = require('../../codemods/utils/mdxast');
const toString = require('mdast-util-to-string');
const u = require('unist-builder');
const path = require('path');
const { get } = require('lodash');

const stripNulls = (obj) =>
  Object.fromEntries(Object.entries(obj).filter(([, value]) => value != null));

const getAllAttributes = (node) =>
  node.attributes
    ? node.attributes.reduce((obj, { name: propName, value }) => {
        return { ...obj, [propName]: value };
      }, {})
    : {};

const isBlockImage = (parent, node) => {
  const isBlock = [];
  const className = get(node, 'data.className', null);

  if (!parent || !parent.children) {
    return className && className !== 'inline';
  }

  const imgNodeIndex = parent.children.findIndex((item) => item === node);

  if (className && className === 'inline') {
    return false;
  }

  // [n - 1, n, n + 1]
  const hasBothSiblings =
    !!parent.children[imgNodeIndex - 1] && !!parent.children[imgNodeIndex + 1];

  // [n, n + 1]
  const hasOnlyRHS =
    !parent.children[imgNodeIndex - 1] && !!parent.children[imgNodeIndex + 1];

  // [n - 1, n]
  const hasOnlyLHS =
    !!parent.children[imgNodeIndex - 1] && !parent.children[imgNodeIndex + 1];

  // [n] else

  if (hasBothSiblings) {
    // in parent children array, check if left hand sibling
    // is on the same line
    const isSameLineLHS =
      parent.children[imgNodeIndex - 1].position.start.line ===
      node.position.start.line;

    // in parent children array, check if right hand sibling
    // is on the same line
    const isSameLineRHS =
      parent.children[imgNodeIndex + 1].position.start.line ===
      node.position.start.line;

    isSameLineLHS || isSameLineRHS ? isBlock.push(false) : isBlock.push(true);
  } else if (hasOnlyRHS) {
    const isSameLineRHS =
      parent.children[imgNodeIndex + 1].position.start.line ===
      node.position.start.line;

    isSameLineRHS ? isBlock.push(false) : isBlock.push(true);
  } else if (hasOnlyLHS) {
    const isSameLineLHS =
      parent.children[imgNodeIndex - 1].position.start.line ===
      node.position.start.line;

    isSameLineLHS ? isBlock.push(false) : isBlock.push(true);

    // node has no siblings
  } else {
    isBlock.push(true);
  }

  return !isBlock.includes(false);
};

module.exports = {
  image: (h, node, parent) => {
    const src = path.join('https://docs.newrelic.com', node.url);

    const applyBlockImageAttributes = isBlockImage(parent, node);

    return h(
      node,
      applyBlockImageAttributes ? 'div' : 'span',
      stripNulls({
        className: [
          applyBlockImageAttributes ? 'block-image' : 'inline-image',
          'image',
        ],
        style: get(node, 'data.style', null),
      }),
      [
        h(
          node,
          'img',
          stripNulls({
            src,
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
  InstallFeedback: () => null,
};
