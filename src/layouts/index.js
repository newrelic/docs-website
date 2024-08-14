import React from 'react';
import PropTypes from 'prop-types';
import MainLayout from './MainLayout';
import HomePageLayout from './HomePageLayout';

const Layout = ({ children, ...props }) => {
  const { pageContext } = props;
  switch (pageContext.layout) {
    case 'basic':
      return children;
    case 'homepage':
      return <HomePageLayout {...props}>{children}</HomePageLayout>;
    default:
      return <MainLayout {...props}>{children}</MainLayout>;
  }
};
Layout.propTypes = {
  children: PropTypes.node,
  pageContext: PropTypes.object.isRequired,
};

export default Layout;
