import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { Link, Logo, HamburgerMenu } from '@newrelic/gatsby-theme-newrelic';

const MobileHeader = ({ className, children, isOpen, onToggle }) => {
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
        <Link
          to="/"
          css={css`
            text-decoration: none;
          `}
        >
          <Logo />
        </Link>

        <HamburgerMenu onToggle={onToggle} isOpen={isOpen} />
      </div>

      {isOpen && <div>{children}</div>}
    </header>
  );
};

MobileHeader.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default MobileHeader;
