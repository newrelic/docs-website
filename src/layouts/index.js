import React from 'react';
import MainLayout from './MainLayout';
import PropTypes from 'prop-types';

const Layout = ({ children, ...props }) => {
  const { pageContext } = props;

  switch (pageContext.layout) {
    case 'basic':
      return children;
    default:
      return <MainLayout {...props}>{children}</MainLayout>;
  }
};

Layout.propTypes = {
  children: PropTypes.node,
  pageContext: PropTypes.object,
};

export default Layout;
