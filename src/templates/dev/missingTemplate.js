import React from 'react';
import PropTypes from 'prop-types';

const MissingTemplate = ({ pageContext }) => {
  return (
    <>
      <h1>Missing Template</h1>
      <p>
        Looks like you're missing a the `template` field in frontmatter for
        file: {pageContext.fileRelativePath}.
      </p>
    </>
  );
};

MissingTemplate.propTypes = {
  pageContext: PropTypes.object.isRequired,
};

export default MissingTemplate;
