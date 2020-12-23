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
  'arrows-h': 'fe-move-horizontal',
  'bar-chart': 'fe-bar-chart-2',
  bolt: 'fe-zap',
  book: 'fe-book',
  'caret-down': 'fe-chevron-down',
  check: 'fe-check',
  'check-square-o': 'fe-check-square',
  code: 'fe-code',
  cog: 'fe-settings',
  commenting: 'fe-message-circle',
  'commenting-o': 'fe-message-circle',
  database: 'fe-database',
  exchange: 'fe-repeat',
  'exclamation-triangle': 'fe-alert-triangle',
  eye: 'fe-eye',
  expand: 'fe-maximize-2',
  'external-link-square': 'fe-external-link',
  'file-text-o': 'fe-file-text',
  filter: 'fe-filter',
  'folder-open': 'fe-folder',
  gear: 'fe-settings',
  'info-circle': 'fe-info',
  'life-ring': 'fe-life-buoy',
  'lightbulb-o': 'fe-lightbulb',
  'list-ol': 'fe-list',
  lock: 'fe-lock',
  'map-o': 'fe-map',
  'minus-circle': 'fe-minus-circle',
  'ellipsis-h': 'fe-more-horizontal',
  pencil: 'fe-edit-2',
  plus: 'fe-plus',
  'plus-circle': 'fe-plus-circle',
  'question-circle-o': 'fe-help-circle',
  repeat: 'fe-rotate-cw',
  search: 'fe-search',
  signal: 'fe-bar-chart',
  sliders: 'fe-sliders',
  'sort-amount-desc': 'fe-sort-desc',
  'star-o': 'fe-star',
  tags: 'fe-tag',
  times: 'fe-x',
  trash: 'fe-trash-2',
  'trash-o': 'fe-trash-2',
  terminal: 'fe-terminal',
  'user-plus': 'fe-user-plus',
  warning: 'fe-alert-triangle',
  wrench: 'fe-tool',
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
