import React from 'react';

import { graphql } from 'gatsby';

const AgentPage = ({ data }) => {
  const { installConfig } = data;

  return (
    <>
      <div>
        <h1>{installConfig.agentName}</h1>
      </div>
    </>
  );
};

export const pageQuery = graphql`
  query($id: String, $slug: String!, $locale: String) {
    installConfig(id: { eq: $id }) {
      agentName
    }
    ...MainLayout_query
  }
`;

export default AgentPage;
