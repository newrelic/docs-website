import React from 'react';
import KrNav from './KrNav';
import JpNav from './JpNav';
import EnNav from './EnNav';
import StyleGuideNav from './StyleGuideNav';

const RootNavigation = ({ locale, className, isStyleGuide }) => {
  const LOCALIZED_NAVS = {
    kr: <KrNav className={className} />,
    jp: <JpNav className={className} />,
    en: <EnNav className={className} />,
  };
  if (isStyleGuide) {
    return <StyleGuideNav className={className} />;
  }
  return LOCALIZED_NAVS[locale] || <EnNav className={className} />;
};

export default RootNavigation;
