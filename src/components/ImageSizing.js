import { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';

const ImageSizing = ({ children, width, height, verticalAlign }) => {
  const image = Children.only(children);
  const style = image.props.style || {};

  return cloneElement(image, {
    style: {
      ...style,
      width: width || style.width,
      height: height || style.height,
      verticalAlign: verticalAlign || style.verticalAlign,
    },
  });
};

ImageSizing.propTypes = {
  children: PropTypes.node.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  verticalAlign: PropTypes.string,
};

export default ImageSizing;
