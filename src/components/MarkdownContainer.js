import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { useLayout } from '@newrelic/gatsby-theme-newrelic';

const MarkdownContainer = ({
  children,
  className,
  dangerouslySetInnerHTML,
}) => {
  const { contentPadding } = useLayout();

  return (
    <div
      dangerouslySetInnerHTML={dangerouslySetInnerHTML}
      className={className}
      css={css`
        > *:first-child {
          margin-top: 0;
        }

        code {
          padding: 0.125rem;
          border-radius: 2px;
        }

        :not(pre) > code {
          background: var(--tertiary-background-color);
        }

        p:last-child {
          margin-bottom: 0;
        }

        p,
        ol,
        ul {
          margin-bottom: 1.5rem;

          &:last-child {
            margin-bottom: 0;
          }
        }

        ol,
        ul {
          margin-top: 0;
          padding-left: 1rem;
        }

        h1,
        h2,
        h3 {
          margin-bottom: 1rem;
        }

        h1,
        h2 {
          font-weight: bold;

          &:not(:first-child) {
            margin-top: 2rem;
          }
        }

        h3,
        h4 {
          margin-top: 1rem;
          font-weight: bold;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          scroll-margin-top: calc(
            var(--global-header-height) + ${contentPadding}
          );
        }

        li:not(:last-child) {
          margin-bottom: 0.75rem;
        }

        ul li ul {
          margin-top: 1rem;
          line-height: 1;
        }
      `}
    >
      {children}
    </div>
  );
};

MarkdownContainer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  dangerouslySetInnerHTML: PropTypes.object,
};

export default MarkdownContainer;
