import React from 'react';
import { useTessen } from '@newrelic/gatsby-theme-newrelic';
import ErrorBoundaryCC from './ErrorBoundaryCC';

const ErrorBoundary = ({ eventName, children }) => {
  const tessen = useTessen();
  return (
    <ErrorBoundaryCC tessen={tessen} eventName={eventName}>
      {children}
    </ErrorBoundaryCC>
  );
};

export default ErrorBoundary;
