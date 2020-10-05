const visit = require('unist-util-visit');
const { findAttribute, hasClassName, isMdxElement } = require('./utils/mdxast');

const ICON_NAME = /\bfa-((?!\d)[a-z-]+\b)/;
const ICON_SIZE = /fa-(\d)x/;

const icons = () => (tree, file) => {
  visit(
    tree,
    (node) => isMdxElement('i', node) && hasClassName('fa', node),
    (icon) => {
      const className = findAttribute('className', icon);
      const [, size] = className.match(ICON_SIZE) || ['fa-1x', '1'];
      const [, name] = className.match(ICON_NAME);

      const unknownClassNames = className
        .split(/\s+/)
        .filter(
          (className) =>
            className !== 'fa' &&
            !ICON_NAME.test(className) &&
            !ICON_SIZE.test(className)
        )
        .filter(Boolean);

      if (unknownClassNames.length) {
        file.message(
          `Unable to handle additional classNames: ${unknownClassNames.join(
            ' '
          )}`,
          icon.position.start
        );
      }

      file.message(`Unable to map icon '${name}'`, icon.position.start);
    }
  );
};

module.exports = icons;
