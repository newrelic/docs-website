import React from 'react';
import Navigation from './Navigation';
import { useStaticQuery, graphql } from 'gatsby';

const KrNav = ({ className }) => {
  const { nav } = useStaticQuery(krQuery);
  return <Navigation nav={nav} className={className} />;
};

const krQuery = graphql`
  query {
    nav(slug: "/") {
      id
      title(locale: "kr")
      url
      filterable
      pages {
        ...MainLayout_navPagesKr
        pages {
          ...MainLayout_navPagesKr
          pages {
            ...MainLayout_navPagesKr
            pages {
              ...MainLayout_navPagesKr
              pages {
                ...MainLayout_navPagesKr
                pages {
                  ...MainLayout_navPagesKr
                }
              }
            }
          }
        }
      }
    }
  }

  fragment MainLayout_navPagesKr on NavItem {
    title(locale: "kr")
    url
    icon
    label
  }
`;

export default KrNav;
