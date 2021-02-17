import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { graphql } from 'gatsby';
import { Icon, Layout, Link, useLocale } from '@newrelic/gatsby-theme-newrelic';
import PageTitle from '../components/PageTitle';
import IndexContents from '../components/IndexContents';
import SEO from '../components/SEO';

const TableOfContentsPage = ({ data, pageContext, location }) => {
  const { title } = pageContext;
  const { localizedPath } = useLocale();
  const { nav } = data;
  const { slug } = pageContext;
  const landingPageSlug = slug.replace('/table-of-contents', '');
  const subnav = useMemo(
    () =>
      nav
        ? findPage(
            nav,
            landingPageSlug.replace(
              new RegExp(`^\\/${localizedPath}(?=\\/)`),
              ''
            )
          )
        : null,
    [nav, landingPageSlug, localizedPath]
  );

  return (
    <>
      <SEO location={location} title={title} />
      <PageTitle>{title}</PageTitle>
      <Link
        to={landingPageSlug}
        css={css`
          color: var(--primary-text-color);
          display: inline-flex;
          align-items: center;
          transition: 0.2s ease-out;
          margin-bottom: 2rem;
          text-decoration: none;

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
        {subnav && <IndexContents nav={subnav} />}
      </Layout.Content>
    </>
  );
};

TableOfContentsPage.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export const pageQuery = graphql`
  query($slug: String!, $locale: String) {
    ...MainLayout_query
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
