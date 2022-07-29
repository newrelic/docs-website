import React from 'react';
import { graphql } from 'gatsby';
// import { SEO } from '../../components/SEO';

const InstallTemplate = (props) => {
  // console.log('params', params);
  console.log('gatsby variables', props);

  return <p>Hello, World</p>;
};

export const agentQuery = graphql`
  query($locale: String!, $slug: String!) {
    ...MainLayout_query
    installConfig(agentName: "java") {
      id
      title
      intro {
        filePath
      }
    }
  }
`;

export default InstallTemplate;
