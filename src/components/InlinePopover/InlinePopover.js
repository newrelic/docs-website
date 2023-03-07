import React from 'react';
import PropTypes from 'prop-types';
import { PopoverButton } from '@newrelic/gatsby-theme-newrelic';

import json from '../../data/popovers.json';
import { TwoButton } from './layouts';

const Layouts = {
  TwoButton,
};

const InlinePopover = ({ type }) => {
  if (json[type] == null) return null;

  const { inlineText, popover } = json[type];
  const layout = json[type].layout ?? 'TwoButton';
  const Popover = Layouts[layout];

  return (
    <PopoverButton
      tessenCategory={`${type}InlinePopover`}
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
  type: PropTypes.oneOf(Object.keys(Layouts)),
};

export default InlinePopover;
