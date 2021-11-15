import React from 'react';
import PropTypes from 'prop-types';
import { useTreatments, SplitContext } from '@splitsoftware/splitio-react';

const SignupsSplit = ({
  testChildren,
  defaultChildren,
  treatmentWithConfig,
}) => {
  const treatments = useTreatments(['signups']);
  const { treatment } = treatmentWithConfig;
  const { isReady } = React.useContext(SplitContext);

  return isReady && treatment !== 'off' && treatments === 'signups' ? (
    <>{testChildren}</>
  ) : (
    <>{defaultChildren}</>
  );
};

SignupsSplit.propTypes = {
  testChildren: PropTypes.node,
  defaultChildren: PropTypes.node,
  treatmentWithConfig: PropTypes.node,
};

export default SignupsSplit;
