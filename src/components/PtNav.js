import React from 'react';
import Navigation from './Navigation';
import { useStaticQuery, graphql } from 'gatsby';

const PtNav = ({ className }) => {
  const { nav } = useStaticQuery(ptQuery);
  return <Navigation nav={nav} className={className} />;
};

const ptQuery = graphql`
  query {
    nav(slug: "/") {
      id
      title(locale: "pt")
      url
      filterable
      pages {
        ...MainLayout_navPagesPt
        pages {
          ...MainLayout_navPagesPt
          pages {
            ...MainLayout_navPagesPt
            pages {
              ...MainLayout_navPagesPt
              pages {
                ...MainLayout_navPagesPt
                pages {
                  ...MainLayout_navPagesPt
                }
              }
            }
          }
        }
      }
    }
  }

  fragment MainLayout_navPagesPt on NavItem {
    title(locale: "pt")
    url
    icon
    label
  }
`;

export default PtNav;
