import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import NavigationItem from './NavigationItem';

const RootNavigation = ({ nav }) => {
  const { tdp, fso, ai, pages } = nav;

  return (
    <nav role="navigation" aria-label="Navigation">
      <NavigationItem page={tdp} />
      <NavigationItem page={fso} />
      <NavigationItem page={ai} />
      <hr />
      {pages.edges.map(({ node }) => (
        <NavigationItem key={node.title} page={node} />
      ))}
    </nav>
  );
};

RootNavigation.propTypes = {
  nav: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export const query = graphql`
  fragment RootNavigation_pages on Query {
    tdp: navYaml(title: { eq: "Telemetry Data Platform" }) {
      title
      path
    }

    fso: navYaml(title: { eq: "Full-Stack Observability" }) {
      title
      path
    }

    ai: navYaml(title: { eq: "Alerts and Applied intelligence" }) {
      title
      path
    }

    pages: allNavYaml(
      filter: {
        title: {
          nin: [
            "Telemetry Data Platform"
            "Full-Stack Observability"
            "Alerts and Applied intelligence"
          ]
        }
      }
    ) {
      edges {
        node {
          title
          path
        }
      }
    }
  }
`;

export default RootNavigation;
