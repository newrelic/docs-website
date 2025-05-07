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
        ...MainLayout_navPagesFr
        pages {
          ...MainLayout_navPagesFr
          pages {
            ...MainLayout_navPagesFr
            pages {
              ...MainLayout_navPagesFr
              pages {
                ...MainLayout_navPagesFr
                pages {
                  ...MainLayout_navPagesFr
                }
              }
            }
          }
        }
      }
    }
  }

  fragment MainLayout_navPagesFr on NavItem {
    title(locale: "fr")
    url
    icon
    label
  }
`;

export default FrNav;
