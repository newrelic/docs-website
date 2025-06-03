import React from 'react';
import Navigation from './Navigation';
import { useStaticQuery, graphql } from 'gatsby';

const JpNav = ({ className }) => {
  const { nav } = useStaticQuery(jpQuery);
  return <Navigation nav={nav} className={className} />;
};

const jpQuery = graphql`
  query {
    nav(slug: "/") {
      id
      title(locale: "jp")
      url
      filterable
      pages {
        ...MainLayout_navPagesJp
        pages {
          ...MainLayout_navPagesJp
          pages {
            ...MainLayout_navPagesJp
            pages {
              ...MainLayout_navPagesJp
              pages {
                ...MainLayout_navPagesJp
                pages {
                  ...MainLayout_navPagesJp
                }
              }
            }
          }
        }
      }
    }
  }

  fragment MainLayout_navPagesJp on NavItem {
    title(locale: "jp")
    url
    icon
    label
  }
`;

export default JpNav;
