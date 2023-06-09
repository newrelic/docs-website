import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

// This component is not rendered in the UI and is not translated
const MDXComment = ({ children }) => <Comment>{children}</Comment>;

MDXComment.propTypes = {
  children: PropTypes.node,
};

const Comment = styled.div`
  display: none;
`;

export default MDXComment;
