import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';

import useTabsContext from './useTabsContext';

const Page = ({ index, children, id }) => {
  const [currentTab] = useTabsContext();

  const isSelected =
    id === currentTab || (currentTab === undefined && index === 0);

  return (
    <div
      role="tabpanel"
      aria-labelledby={id}
      css={
        !isSelected &&
        css`
          height: 0px;
          overflow: hidden;
        `
      }
    >
      {children}
    </div>
  );
};

Page.propTypes = {
  index: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
};

export default Page;
