import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import NavigationItem from './NavigationItem';
import AIIcon from './AIIcon';
import FSOIcon from './FSOIcon';
import TDPIcon from './TDPIcon';

const RootNavigation = ({ nav }) => {
  const { tdp, fso, ai, pages } = nav;

  return (
    <nav role="navigation" aria-label="Navigation">
      <NavigationItem page={tdp} icon={TDPIcon} />
      <NavigationItem page={fso} icon={FSOIcon} />
      <NavigationItem page={ai} icon={AIIcon} />
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
      sort: { fields: [title] }
      filter: {
        root: { eq: true }
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
