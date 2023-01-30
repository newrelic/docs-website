import React from 'react';
import PropTypes from 'prop-types';

const Pages = ({ children }) =>
  React.Children.map(children, (child, index) =>
    React.cloneElement(child, { ...child.props, index })
  );

Pages.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Pages;
