import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { graphql, Link } from 'gatsby';

const RootNavigation = ({ nav }) => {
  const { tdp, fso, ai, pages } = nav;

  return (
    <nav>
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

const NavigationItem = ({ page }) => {
  return (
    <Link
      to={page.path}
      css={css`
        display: flex;
        color: var(--primary-text-color);
        transition: 0.2s ease-out;
        padding: 0.5rem;

        &:hover {
          color: var(--primary-text-hover-color);
        }
      `}
    >
      {page.title}
    </Link>
  );
};

RootNavigation.propTypes = {
  nav: PropTypes.arrayOf(PropTypes.object).isRequired,
};

NavigationItem.propTypes = {
  page: PropTypes.object,
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
