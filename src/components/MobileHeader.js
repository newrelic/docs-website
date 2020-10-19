import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { HamburgerMenu } from '@newrelic/gatsby-theme-newrelic';

const MobileHeader = ({ className, isOpen, onToggle }) => {
  const {
    site: { layout },
  } = useStaticQuery(graphql`
    query {
      site {
        layout {
          contentPadding
        }
      }
    }
  `);

  return (
    <header
      data-swiftype-index={false}
      className={className}
      css={css`
        position: relative;
      `}
    >
      <div
        css={css`
          display: flex;
          align-items: center;
          justify-content: space-between;
        `}
      >
        <Link to="/">Logo</Link>

        <HamburgerMenu onToggle={onToggle} isOpen={isOpen} />
      </div>

      {isOpen && <div>Navigation goes here</div>}
    </header>
  );
};

MobileHeader.propTypes = {
  className: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default MobileHeader;
