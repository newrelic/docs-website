import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

const defaultContent = '## For more help';

const RelatedContent = ({
  children = defaultContent,
  title = 'For more help',
}) => {
  return (
    <>
      <h2>{title}</h2>
      <div>{children}</div>
    </>
  );
};

RelatedContent.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

export default RelatedContent;
