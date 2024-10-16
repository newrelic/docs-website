import React from 'react';
import Navigation from './Navigation';
import { useStaticQuery, graphql } from 'gatsby';

const FrNav = ({ className }) => {
  const { nav } = useStaticQuery(frQuery);
  return <Navigation nav={nav} className={className} />;
};

const frQuery = graphql`
  query {
    nav(slug: "/") {
      id
      title(locale: "fr")
      url
      filterable
      pages {
        ...MainLayout_navPagesfr
        pages {
          ...MainLayout_navPagesfr
          pages {
            ...MainLayout_navPagesfr
            pages {
              ...MainLayout_navPagesfr
              pages {
                ...MainLayout_navPagesfr
                pages {
                  ...MainLayout_navPagesfr
                }
              }
            }
          }
        }
      }
    }
  }

  fragment MainLayout_navPagesfr on NavItem {
    title(locale: "fr")
    url
    icon
    label
  }
`;

export default FrNav;
