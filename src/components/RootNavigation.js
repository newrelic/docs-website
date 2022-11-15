import React from 'react';
import KrNav from './KrNav';
import JpNav from './JpNav';
import EnNav from './EnNav';

const RootNavigation = ({ locale, className }) => {
  const LOCALIZED_NAVS = {
    kr: <KrNav className={className} />,
    jp: <JpNav className={className} />,
    en: <EnNav className={className} />,
  };
  return LOCALIZED_NAVS[locale] || <EnNav className={className} />;
};

export default RootNavigation;
