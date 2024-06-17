import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import ReactMarkdown from 'react-markdown';

import { Link } from '@newrelic/gatsby-theme-newrelic';

const aTagToLink = ({
  // eslint-disable-next-line no-unused-vars
  node,
  ...props
}) => {
  return (
    <Link
      to={props.href}
      css={css`
        text-decoration: none;
      `}
      displayExternalIcon
    >
      {props.children}
    </Link>
  );
};

const Markdown = ({ className, ...props }) => {
  return (
    <ReactMarkdown
      {...props}
      className={className}
      css={css`
        > *:first-child {
          margin-top: 0;
        }
      `}
      components={{
        a: aTagToLink,
      }}
    />
  );
};

Markdown.propTypes = {
  className: PropTypes.string,
};

export default Markdown;
