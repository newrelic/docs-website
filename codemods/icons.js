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
  android: 'logo-android',
  'angle-down': 'fe-chevron-down',
  'angle-right': 'fe-chevron-right',
  apple: 'logo-apple',
  'area-chart': 'fe-bar-chart-2',
  'arrow-right': 'fe-arrow-right',
  arrows: 'fe-move',
  'arrows-h': 'fe-move-horizontal',
  'balance-scale': 'fe-pen-tool',
  ban: 'fe-slash',
  'bar-chart': 'fe-bar-chart-2',
  bolt: 'fe-zap',
  book: 'fe-book',
  'caret-up': 'nr-caret-up',
  'caret-down': 'fe-chevron-down',
  check: 'fe-check',
  'check-square-o': 'fe-check-square',
  circle: 'fe-circle',
  'circle-o': 'fe-circle',
  cloud: 'fe-cloud',
  code: 'fe-code',
  cog: 'fe-settings',
  commenting: 'fe-message-circle',
  'commenting-o': 'fe-message-circle',
  database: 'fe-database',
  download: 'fe-download',
  ellipsis: 'fe-more-horizontal',
  'envelope-o': 'fe-mail',
  exchange: 'fe-repeat',
  'exclamation-circle': 'fe-alert-circle',
  'exclamation-triangle': 'fe-alert-triangle',
  eye: 'fe-eye',
  expand: 'fe-maximize-2',
  'external-link': 'fe-external-link',
  'external-link-square': 'fe-external-link',
  'file-code-o': 'fe-file-code',
  'file-text-o': 'fe-file-text',
  filter: 'fe-filter',
  'folder-open': 'fe-folder',
  gear: 'fe-settings',
  'info-circle': 'fe-info',
  key: 'fe-key',
  'life-ring': 'fe-life-buoy',
  'lightbulb-o': 'fe-lightbulb',
  'line-chart': 'fe-bar-chart-2',
  link: 'fe-link',
  'list-ol': 'fe-list',
  lock: 'fe-lock',
  'map-o': 'fe-map',
  minus: 'fe-minus',
  'minus-circle': 'fe-minus-circle',
  'moon-o': 'fe-moon',
  'ellipsis-h': 'fe-more-horizontal',
  pencil: 'fe-edit-2',
  'play-circle-o': 'fe-play-circle',
  plug: 'fe-zap',
  plus: 'fe-plus',
  'plus-circle': 'fe-plus-circle',
  question: 'fe-help-circle',
  'question-circle': 'fe-help-circle',
  'question-circle-o': 'fe-help-circle',
  redo: 'fe-rotate-cw',
  repeat: 'fe-rotate-cw',
  'rss-square': 'fe-rss',
  search: 'fe-search',
  'share-alt-square': 'fe-share',
  signal: 'fe-bar-chart',
  sliders: 'fe-sliders',
  'sort-amount-desc': 'fe-sort-desc',
  spinner: 'fe-loader',
  'star-o': 'fe-star',
  square: 'fe-square',
  'square-o': 'fe-square',
  tags: 'fe-tag',
  times: 'fe-x',
  'times-circle-o': 'fe-x-circle',
  trash: 'fe-trash-2',
  'trash-o': 'fe-trash-2',
  terminal: 'fe-terminal',
  tv: 'fe-tv',
  'user-o': 'fe-user',
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
