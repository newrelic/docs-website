const visit = require('unist-util-visit');
const {
  findAttribute,
  hasClassName,
  isMdxElement,
  removeAttribute,
  addAttribute,
} = require('./utils/mdxast');

const ICON_NAME = /\bfa-((?!\d)[a-z-]+\b)/;
const ICON_SIZE = /fa-(\d)x/;

const FA_TO_FEATHER_ICONS = {
  'arrows-h': 'move-horizontal',
  'bar-chart': 'bar-chart-2',
  bolt: 'zap',
  'caret-down': 'chevron-down',
  'check-square-o': 'check-square',
  cog: 'settings',
  'commenting-o': 'message-circle',
  database: 'database',
  exchange: 'repeat',
  'exclamation-triangle': 'alert-triangle',
  filter: 'filter',
  'life-ring': 'life-buoy',
  'list-ol': 'list',
  'minus-circle': 'minus-circle',
  sliders: 'sliders',
  terminal: 'terminal',
  wrench: 'tool',
};

const icons = () => (tree, file) => {
  visit(
    tree,
    (node) => isMdxElement('i', node) && hasClassName('fa', node),
    (icon) => {
      const className = findAttribute('className', icon);
      const [, size] = className.match(ICON_SIZE) || [];
      const [, name] = className.match(ICON_NAME);

      const unhandledClassNames = className
        .split(/\s+/)
        .filter(
          (className) =>
            className !== 'fa' &&
            !ICON_NAME.test(className) &&
            !ICON_SIZE.test(className)
        )
        .filter(Boolean)
        .map((className) => `'${className}'`)
        .join(', ');

      if (unhandledClassNames) {
        file.message(
          `The following class names are not handled and will be dropped: ${unhandledClassNames}`,
          icon.position.start
        );
      }

      const featherIcon = FA_TO_FEATHER_ICONS[name];

      if (!featherIcon) {
        return file.message(
          `Unable to map icon '${name}'`,
          icon.position.start
        );
      }

      icon.name = 'Icon';
      icon.children = [];

      addAttribute('name', featherIcon, icon);
      removeAttribute('className', icon);
      removeAttribute('aria-hidden', icon);

      if (size) {
        addAttribute('size', `${size}em`, icon);
      }
    }
  );
};

module.exports = icons;
