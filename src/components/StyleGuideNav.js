import React from 'react';
import Navigation from './Navigation';
import { useStaticQuery, graphql } from 'gatsby';

const StyleGuideNav = ({ className }) => {
  const { nav } = useStaticQuery(styleQuery);
  return <Navigation nav={nav} className={className} />;
};

const styleQuery = graphql`
  query {
    nav(slug: "/docs/style-guide") {
      id
      title(locale: "en")
      url
      filterable
      pages {
        ...StyleGuideLayout_navPages
        pages {
          ...StyleGuideLayout_navPages
          pages {
            ...StyleGuideLayout_navPages
            pages {
              ...StyleGuideLayout_navPages
              pages {
                ...StyleGuideLayout_navPages
                pages {
                  ...StyleGuideLayout_navPages
                }
              }
            }
          }
        }
      }
    }
  }

  fragment StyleGuideLayout_navPages on NavItem {
    title(locale: "en")
    url
    icon
  }
`;

export default StyleGuideNav;
