import React from 'react';
import EmbedContext from './EmbedContext';

const HideWhenEmbedded = ({ children }) => {
  const embedContext = React.useContext(EmbedContext);

  if (embedContext && embedContext.isEmbedded) {
    return null;
  }

  return children;
};

export default HideWhenEmbedded;
