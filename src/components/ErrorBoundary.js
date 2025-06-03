import React from 'react';
import { addPageAction } from '@newrelic/gatsby-theme-newrelic';
import ErrorBoundaryCC from './ErrorBoundaryCC';

const ErrorBoundary = ({ eventName, children }) => {
  return (
    <ErrorBoundaryCC addPageAction={addPageAction} eventName={eventName}>
      {children}
    </ErrorBoundaryCC>
  );
};

export default ErrorBoundary;
