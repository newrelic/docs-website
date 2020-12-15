import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { graphql } from 'gatsby';
import { Icon, Layout, Link } from '@newrelic/gatsby-theme-newrelic';
import PageTitle from '../components/PageTitle';
import SEO from '../components/seo';

const TableOfContentsPage = ({ data, pageContext }) => {
  const { nav } = data;
  const { slug } = pageContext;
  const landingPageSlug = slug.replace('/table-of-contents', '');
  const subnav = useMemo(
    () => findPage(nav, slug.replace('/table-of-contents', '')),
    [nav, slug]
  );

  const { title, pages } = subnav;

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
      <Layout.Content
        css={css`
          h1,
          h2,
          h3 {
            font-weight: bold;
          }

          h1,
          h2 {
            &:not(:first-child) {
              margin-top: 3rem;
            }
          }

          h3 {
            margin-top: 1rem;
          }

          h2 {
            padding-bottom: 0.5rem;
            border-bottom: 1px solid var(--divider-color);
          }

          ul {
            list-style: none;
            padding-left: 0;
            margin-top: 0;
            margin-left: 1rem;

            &:not(:last-child) {
              margin-bottom: 2rem;
            }
          }

          li:not(:last-child) {
            margin-bottom: 0.75rem;
          }
        `}
      >
        {pages.map((page) => (
          <TableOfContents key={page.title} root={page} />
        ))}
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

const TableOfContents = ({ root, depth = 2 }) => {
  const { title, url, pages } = root;
  const idx = pages.findIndex((page) => page.pages.length);
  const Heading = `h${depth}`;

  const links = idx === -1 ? pages : pages.slice(0, idx);
  const subSections = idx === -1 ? [] : pages.slice(idx);

  return (
    <>
      <Heading>{url ? <Link to={url}>{title}</Link> : title}</Heading>
      {links.length > 0 && (
        <ul>
          {links.map((page) => (
            <li key={page.title}>
              <Link to={page.url}>{page.title}</Link>
            </li>
          ))}
        </ul>
      )}
      {subSections.map((section) => (
        <TableOfContents key={section.title} root={section} depth={depth + 1} />
      ))}
    </>
  );
};

TableOfContents.propTypes = {
  root: PropTypes.object.isRequired,
  depth: PropTypes.number,
};

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
