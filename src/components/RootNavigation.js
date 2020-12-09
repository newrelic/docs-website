import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { NavItem } from '@newrelic/gatsby-theme-newrelic';

const RootNavigation = ({ nav }) => {
  const { tdp, fso, ai, pages } = nav;

  return (
    <nav role="navigation" aria-label="Navigation">
      <NavItem page={tdp} />
      <NavItem page={fso} />
      <NavItem page={ai} />
      <hr />
      {pages.edges.map(({ node }) => (
        <NavItem key={node.title} page={node} />
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
      url: path
      icon
    }

    fso: navYaml(title: { eq: "Full-Stack Observability" }) {
      title
      url: path
      icon
    }

    ai: navYaml(title: { eq: "Alerts and Applied intelligence" }) {
      title
      url: path
      icon
    }

    pages: allNavYaml(
      sort: { fields: [title] }
      filter: {
        rootNav: { eq: true }
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
          url: path
        }
      }
    }
  }
`;

export default RootNavigation;
