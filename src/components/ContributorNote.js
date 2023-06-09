import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

/* In place of comments, this component is intended to be used by authors
 * to leave important notes about MDX content for future contributors.
 *
 * It is not rendered in the UI and is not translated.
 */
const ContributorNote = ({ children }) => <NoteStyles>{children}</NoteStyles>;

ContributorNote.propTypes = {
  children: PropTypes.node,
};

const NoteStyles = styled.div`
  display: none;
`;

export default ContributorNote;
