import React from 'react';
import Navigation from './Navigation';
import { useStaticQuery, graphql } from 'gatsby';

const EsNav = ({ className }) => {
  const { nav } = useStaticQuery(esQuery);
  return <Navigation nav={nav} className={className} />;
};

const esQuery = graphql`
  query {
    nav(slug: "/") {
      id
      title(locale: "es")
      url
      filterable
      pages {
        ...MainLayout_navPagesEs
        pages {
          ...MainLayout_navPagesEs
          pages {
            ...MainLayout_navPagesEs
            pages {
              ...MainLayout_navPagesEs
              pages {
                ...MainLayout_navPagesEs
                pages {
                  ...MainLayout_navPagesEs
                }
              }
            }
          }
        }
      }
    }
  }

  fragment MainLayout_navPagesEs on NavItem {
    title(locale: "es")
    url
    icon
    label
  }
`;

export default EsNav;
