import React from 'react';
import MainLayout from './MainLayout';
import EmbedLayout from './EmbedLayout';
import PropTypes from 'prop-types';

const Layout = ({ children, ...props }) => {
  const { pageContext } = props;

  switch (pageContext.layout) {
    case 'basic':
      return children;
    case 'homepage':
      return (
        <MainLayout sidebarOpen={false} {...props}>
          {children}
        </MainLayout>
      );
    case 'EmbedLayout':
      if (pageContext.fileRelativePath.match(/404/)) {
        return children;
      } else {
        return <EmbedLayout>{children}</EmbedLayout>;
      }
    default:
      return <MainLayout {...props}>{children}</MainLayout>;
  }
};

Layout.propTypes = {
  children: PropTypes.node,
  pageContext: PropTypes.object,
};

export default Layout;
