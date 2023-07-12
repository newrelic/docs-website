import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import PageTools from '../PageTools';

const LayoutPageTools = ({ className, children }) => {
  return (
    <PageTools
      className={className}
      css={css`
        position: sticky;
        top: calc(var(--global-header-height) + var(--site-content-padding));
        align-self: start;
        grid-area: page-tools;
        max-height: calc(
          100vh -
            (var(--global-header-height) + var(--site-content-padding) * 2)
        );
        overflow-y: auto;
        gap: 1rem;
      `}
    >
      {children}
    </PageTools>
  );
};

LayoutPageTools.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default LayoutPageTools;

