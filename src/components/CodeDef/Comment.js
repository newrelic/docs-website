import React, { Children } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import Markdown from 'react-markdown';

const Content = ({ children, ...props }) => {
  if (Children.toArray(children).length === 0) {
    return null;
  }

  return (
    <span
      {...props}
      css={css`
        color: var(--color-selection);

        > p {
          display: inline;
        }

        code {
          color: var(--color-comment) !important;
          background: var(--color-current-line) !important;
        }
      `}
    >
      {`//`} {children}
    </span>
  );
};

const renderers = {
  root: Content,
};

const Comment = ({ text }) => (
  <Markdown components={renderers}>{text}</Markdown>
);

Content.propTypes = {
  children: PropTypes.node,
};

Comment.propTypes = {
  text: PropTypes.string,
};

export default Comment;
