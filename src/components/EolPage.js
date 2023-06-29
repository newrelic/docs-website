import React, { useEffect } from 'react';

const AGENT_RELEASE_NOTES_URL =
  'https://docs-assets.newrelic-external.com/release-notes-json';

const EolPage = () => {
  useEffect(() => {
    const data = fetch(AGENT_RELEASE_NOTES_URL);
    console.log('test');
  }, []);
  return <h1>Hello World World!</h1>;
};

export default EolPage;
