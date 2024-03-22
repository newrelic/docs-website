import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';

const TileLogo = ({ className, name }) => {
  const {
    allFile: { nodes: logos },
  } = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          absolutePath: { regex: "/src/install/assets/install-logos/" }
        }
      ) {
        nodes {
          publicURL
          name
          absolutePath
        }
      }
    }
  `);

  const logoNode = logos.find((logo) => logo.name === name);

  return (
    <img className={className} alt={logoNode.name} src={logoNode.publicURL} />
  );
};

TileLogo.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
};

export default TileLogo;
