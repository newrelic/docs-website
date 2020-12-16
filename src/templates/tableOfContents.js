import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { graphql } from 'gatsby';
import { Icon, Layout, Link } from '@newrelic/gatsby-theme-newrelic';
import PageTitle from '../components/PageTitle';
import SEO from '../components/seo';
import IndexContents from '../components/IndexContents';

const TableOfContentsPage = ({ data, pageContext }) => {
  const { nav } = data;
  const { slug } = pageContext;
  const landingPageSlug = slug.replace('/table-of-contents', '');
  const subnav = useMemo(
    () => findPage(nav, slug.replace('/table-of-contents', '')),
    [nav, slug]
  );

  const { title } = subnav;

  return (
    <>
      <SEO title={title} />
      <PageTitle>{title}</PageTitle>
      <Link
        to={landingPageSlug}
        css={css`
          color: var(--primary-text-color);
          display: inline-flex;
          align-items: center;
          transition: 0.2s ease-out;
          margin-bottom: 2rem;

          &:hover {
            color: var(--primary-text-hover-color);
          }
        `}
      >
        <Icon
          name="fe-arrow-left-circle"
          size="1rem"
          css={css`
            margin-right: 0.5rem;
          `}
        />
        Back to overview
      </Link>
      <Layout.Content>
        <IndexContents nav={subnav} />
      </Layout.Content>
    </>
  );
};

TableOfContentsPage.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
};

export const pageQuery = graphql`
  query($slug: String!) {
    nav(slug: $slug) {
      pages {
        ...TableOfContents_navPages
        pages {
          ...TableOfContents_navPages
          pages {
            ...TableOfContents_navPages
            pages {
              ...TableOfContents_navPages
              pages {
                ...TableOfContents_navPages
              }
            }
          }
        }
      }
    }
    ...MainLayout_query
  }

  fragment TableOfContents_navPages on NavItem {
    title
    url
  }
`;

const findPage = (page, path) => {
  if (page.url === path) {
    return page;
  }

  if (page.pages == null || page.pages.length === 0) {
    return null;
  }

  return page.pages.find((child) => findPage(child, path));
};

export default TableOfContentsPage;
