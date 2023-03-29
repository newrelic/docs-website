import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import PageTools from '@newrelic/gatsby-theme-newrelic/src/components/PageTools';

const LayoutPageTools = forwardRef(({ className, children }, ref) => {
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
      ref={ref}
    >
      {children}
    </PageTools>
  );
});

LayoutPageTools.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default LayoutPageTools;
