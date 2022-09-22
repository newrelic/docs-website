import React from 'react';

import MDXContainer from './MDXContainer';

const InstallNextSteps = ({ mdx, className }) => {
  return (
    <div className={className}>
      {mdx?.body && <MDXContainer body={mdx?.body} />}
    </div>
  );
};

export default InstallNextSteps;
