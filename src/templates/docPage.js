import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { graphql } from 'gatsby';
import PageTitle from '../components/PageTitle';
import MDXContainer from '../components/MDXContainer';
import {
  ContributingGuidelines,
  Layout,
  RelatedResources,
  SimpleFeedback,
  TableOfContents,
} from '@newrelic/gatsby-theme-newrelic';
import MachineTranslationCallout from '../components/MachineTranslationCallout';
import SEO from '../components/SEO';
import GithubSlugger from 'github-slugger';
import { parseHeading } from '../../plugins/gatsby-remark-custom-heading-ids/utils/heading';
import { TYPES } from '../utils/constants';

const BasicDoc = ({ data, location, pageContext }) => {
  const { mdx } = data;
  const {
    frontmatter,
    mdxAST,
    body,
    fields: { fileRelativePath },
    relatedResources,
  } = mdx;
  const { disableSwiftype } = pageContext;

  const headings = useMemo(() => {
    const slugs = new GithubSlugger();

    return mdxAST.children
      .filter(
        (node) =>
          node.type === 'heading' &&
          node.depth === 2 &&
          node.children.length > 0
      )
      .map((heading) => {
        const { id, text } = parseHeading(heading);

        return { id: id || slugs.slug(text), text };
      });
  }, [mdxAST]);

  const {
    title,
    metaDescription,
    type,
    tags,
    translationType,
    dataSource,
  } = frontmatter;

  return (
    <>
      <SEO
        location={location}
        title={title}
        description={metaDescription}
        type={type ? TYPES.BASIC_PAGE[type] : TYPES.BASIC_PAGE.default}
        tags={tags}
        dataSource={dataSource}
        disableSwiftype={disableSwiftype}
      />
      <div
        css={css`
          display: grid;
          grid-template-areas:
            'mt-disclaimer mt-disclaimer'
            'page-title page-title'
            'content page-tools';
          grid-template-columns: minmax(0, 1fr) 320px;
          grid-column-gap: 2rem;

          @media screen and (max-width: 1240px) {
            grid-template-areas:
              'mt-disclaimer'
              'page-title'
              'content'
              'page-tools';
            grid-template-columns: minmax(0, 1fr);
          }
        `}
      >
        {translationType === 'machine' && (
          <MachineTranslationCallout
            englishHref={location.pathname.replace(
              `/${pageContext.locale}`,
              ''
            )}
          />
        )}
        <PageTitle>{title}</PageTitle>

        <Layout.Content>
          <MDXContainer body={body} />
        </Layout.Content>
        <Layout.PageTools
          css={css`
            @media screen and (max-width: 1240px) {
              margin-top: 1rem;
              position: static;
            }
          `}
        >
          <SimpleFeedback pageTitle={title} />
          <ContributingGuidelines
            pageTitle={title}
            fileRelativePath={fileRelativePath}
            issueLabels={['feedback', 'feedback-issue']}
          />
          <TableOfContents headings={headings} />
          <RelatedResources
            resources={relatedResources}
            css={css`
              border-top: 1px solid var(--divider-color);
            `}
          />
        </Layout.PageTools>
      </div>
    </>
  );
};

BasicDoc.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
};

export const pageQuery = graphql`
  query($slug: String!, $locale: String) {
    mdx(fields: { slug: { eq: $slug } }) {
      mdxAST
      body
      frontmatter {
        title
        metaDescription
        type
        tags
        translationType
        dataSource
      }
      fields {
        fileRelativePath
      }
      relatedResources(limit: 3) {
        title
        url
      }
      ...TableOfContents_page
    }
    ...MainLayout_query
  }
`;

export default BasicDoc;
