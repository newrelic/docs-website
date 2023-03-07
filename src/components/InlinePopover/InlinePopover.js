import React from 'react';
import PropTypes from 'prop-types';
import { capitalize } from 'lodash';
import { PopoverButton, useLocale } from '@newrelic/gatsby-theme-newrelic';

import enJson from '../../data/popovers_en.json';
import jpJson from '../../data/popovers_jp.json';
import krJson from '../../data/popovers_kr.json';
import { TwoButton } from './layouts';

const Layouts = {
  TwoButton,
};

/**
 * Reads JSON from `src/data/popovers_{en,jp,kr}.json` to render pre-defined Popovers.
 */
const InlinePopover = ({ type }) => {
  const { locale } = useLocale();
  const json = (() => {
    if (locale === 'en') return enJson;
    if (locale === 'kr') return krJson;
    if (locale === 'jp') return jpJson;
    return enJson;
  })();

  if (json[type] == null) return null;

  // so translated JSONs don't need to specify link URLs etc,
  // we just fall back to the english data.
  // this won't work if nested data is ever added under the "popover" key.
  const { popover: popoverDefaults } = enJson[type];
  let { inlineText, layout = 'TwoButton', popover } = json[type];
  popover = { ...popoverDefaults, ...popover };

  const Popover = Layouts[layout];
  const capsType = capitalize(type);

  return (
    <PopoverButton
      tessenCategory={`${capsType}Popover`}
      Popover={(props) => <Popover {...props} {...popover} type={type} />}
    >
      {inlineText}
    </PopoverButton>
  );
};

InlinePopover.propTypes = {
  /**
   * String key of the desired popover.
   */
  type: PropTypes.oneOf(Object.keys(enJson)),
};

export default InlinePopover;
