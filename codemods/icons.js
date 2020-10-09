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
  book: 'book',
  'caret-down': 'chevron-down',
  check: 'check',
  'check-square-o': 'check-square',
  code: 'code',
  cog: 'settings',
  commenting: 'message-circle',
  'commenting-o': 'message-circle',
  database: 'database',
  exchange: 'repeat',
  'exclamation-triangle': 'alert-triangle',
  eye: 'eye',
  expand: 'maximize-2',
  'external-link-square': 'external-link',
  'file-text-o': 'file-text',
  filter: 'filter',
  'folder-open': 'folder',
  gear: 'settings',
  'info-circle': 'info',
  'life-ring': 'life-buoy',
  'lightbulb-o': 'lightbulb',
  'list-ol': 'list',
  lock: 'lock',
  'map-o': 'map',
  'minus-circle': 'minus-circle',
  'ellipsis-h': 'more-horizontal',
  pencil: 'edit-2',
  plus: 'plus',
  'plus-circle': 'plus-circle',
  'question-circle-o': 'help-circle',
  repeat: 'rotate-cw',
  search: 'search',
  signal: 'bar-chart',
  sliders: 'sliders',
  'sort-amount-desc': 'sort-desc',
  'star-o': 'star',
  tags: 'tag',
  times: 'x',
  trash: 'trash-2',
  'trash-o': 'trash-2',
  terminal: 'terminal',
  'user-plus': 'user-plus',
  warning: 'alert-triangle',
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
          icon.position.start,
          'icons'
        );
      }

      const featherIcon = FA_TO_FEATHER_ICONS[name];

      if (!featherIcon) {
        return file.message(
          `Unable to map icon '${name}'`,
          icon.position.start,
          'icons'
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
