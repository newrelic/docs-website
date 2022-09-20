import React from 'react';
import InstallFeedback from './InstallFeedback';

import MDXContainer from './MDXContainer';

const InstallNextSteps = ({ mdx, className }) => {
  return (
    <div className={className}>
      <InstallFeedback />
      {mdx?.body && <MDXContainer body={mdx?.body} />}
    </div>
  );
};

export default InstallNextSteps;
