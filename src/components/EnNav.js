import React from 'react';
import Navigation from './Navigation';
import { useStaticQuery, graphql } from 'gatsby';

const EnNav = ({ className }) => {
  const { nav } = useStaticQuery(enQuery);
  return <Navigation nav={nav} className={className} />;
};

const enQuery = graphql`
  query {
    nav(slug: "/") {
      id
      title(locale: "en")
      url
      filterable
      pages {
        ...MainLayout_navPages
        pages {
          ...MainLayout_navPages
          pages {
            ...MainLayout_navPages
            pages {
              ...MainLayout_navPages
              pages {
                ...MainLayout_navPages
                pages {
                  ...MainLayout_navPages
                }
              }
            }
          }
        }
      }
    }
  }

  fragment MainLayout_navPages on NavItem {
    title(locale: "en")
    url
    icon
    label
  }
`;

export default EnNav;
