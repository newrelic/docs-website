import React from 'react';
import PropTypes from 'prop-types';
import { useTreatments, SplitContext } from '@splitsoftware/splitio-react';

const SplitTester = ({
  testChildren,
  defaultChildren,
  testName,
  testEvent,
}) => {
  const treatments = useTreatments(['signups']);
  const { treatment, config } = treatments[testName];
  const { isReady } = React.useContext(SplitContext);

  return isReady && treatment !== 'off' && treatment === 'control' ? (
    <>{testChildren}</>
  ) : (
    <>{defaultChildren}</>
  );
};

SplitTester.propTypes = {
  testChildren: PropTypes.node,
  defaultChildren: PropTypes.node,
  testName: PropTypes.node,
  testEvent: PropTypes.node,
};

export default SplitTester;
