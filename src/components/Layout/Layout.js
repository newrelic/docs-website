import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import Content from '@newrelic/gatsby-theme-newrelic/src/components/Layout/Content';
import Footer from '@newrelic/gatsby-theme-newrelic/src/components/Layout/Footer';
import Main from '../Main';
import PageTools from '@newrelic/gatsby-theme-newrelic/src/components/Layout/PageTools';

import Sidebar from './Sidebar';
import { useMainLayoutContext } from '../MainLayoutContext';
import { Flipped } from 'react-flip-toolkit';

const Layout = ({ className, children }) => {
  const [sidebar] = useMainLayoutContext();

  return (
    <div
      css={css`
        overflow: clip;
        width: 100%;
      `}
    >
      <Flipped flipId="main-layout" translate>
        <div
          css={css`
          display: grid;
          grid-template-columns: var(--sidebar-width) 1fr;
          grid-template-areas:
            'sidebar main'
            'sidebar footer';
          grid-template-rows: 1fr auto;
          min-height: calc(100vh - var(--global-header-height));
          width: ${sidebar ? '100%' : 'calc(100% + var(--sidebar-width))'};
          translate: ${sidebar ? '0' : 'calc(-1 * var(--sidebar-width))'};

          @media screen and (max-width: 760px) {
            grid-template-columns: minmax(0, 1fr);
            grid-template-areas:
              'main'
              'footer';
            grid-template-rows: unset;
            translate: 0;
            width: 100%;
          }
        `}
          className={className}
        >
          {children}
        </div>
      </Flipped>
    </div>
  );
};

Layout.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

Layout.Content = Content;
Layout.Main = Main;
Layout.PageTools = PageTools;
Layout.Footer = Footer;
Layout.Sidebar = Sidebar;

export default Layout;
