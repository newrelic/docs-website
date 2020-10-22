import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import NavigationItem from './NavigationItem';
import { animated } from 'react-spring';

const RootNavigation = ({ nav, style }) => {
  const { tdp, fso, ai, pages } = nav;

  return (
    <animated.nav role="navigation" aria-label="Navigation" style={style}>
      <NavigationItem page={tdp} />
      <NavigationItem page={fso} />
      <NavigationItem page={ai} />
      <hr />
      {pages.edges.map(({ node }) => (
        <NavigationItem key={node.title} page={node} />
      ))}
    </animated.nav>
  );
};

RootNavigation.propTypes = {
  nav: PropTypes.arrayOf(PropTypes.object).isRequired,
  style: PropTypes.object,
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
