import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { graphql } from 'gatsby';
import { useMedia } from 'react-use';
import PageTitle from '../components/PageTitle';
import MDXContainer from '../components/MDXContainer';
import {
  ContributingGuidelines,
  Layout,
  RelatedResources,
  SimpleFeedback,
  TableOfContents,
  useTranslation,
} from '@newrelic/gatsby-theme-newrelic';
import DefaultRelatedContent from '../components/DefaultRelatedContent';
import Watermark from '../components/Watermark';
import SEO from '../components/SEO';
import GithubSlugger from 'github-slugger';
import { parseHeading } from '../../plugins/gatsby-remark-custom-heading-ids/utils/heading';

const BasicDoc = ({ data, location }) => {
  const { t } = useTranslation();
  const { mdx } = data;
  const {
    mdxAST,
    frontmatter,
    body,
    fields: { fileRelativePath },
    relatedResources,
  } = mdx;

  const moreHelpHeading = mdxAST.children
    .filter((node) => node.type === 'heading')
    .map((node) => parseHeading(node))
    .find(({ text }) => text === t('defaultRelatedContent.title'));

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
      })
      .concat(
        moreHelpHeading
          ? []
          : {
              id: 'for-more-help',
              text: t('defaultRelatedContent.title'),
            }
      );
  }, [mdxAST, moreHelpHeading, t]);

  const isMobileScreen = useMedia('(max-width: 1240px)');

  return (
    <>
      <SEO
        location={location}
        title={frontmatter.title}
        description={frontmatter.metaDescription}
      />
      <div
        css={css`
          display: grid;
          grid-template-areas:
            'page-title page-title'
            'content page-tools';
          grid-template-columns: minmax(0, 1fr) 320px;
          grid-column-gap: 2rem;

          @media screen and (max-width: 1240px) {
            grid-template-areas:
              'page-title'
              'content'
              'page-tools';
            grid-template-columns: minmax(0, 1fr);
          }
        `}
      >
        <PageTitle>{frontmatter.title}</PageTitle>
        <Layout.Content>
          {frontmatter.watermark && <Watermark text={frontmatter.watermark} />}
          <MDXContainer body={body}>
            {moreHelpHeading ? null : <DefaultRelatedContent />}
          </MDXContainer>
        </Layout.Content>
        <Layout.PageTools
          css={css`
            @media screen and (max-width: 1240px) {
              margin-top: 1rem;
              position: static;
            }
          `}
        >
          <SimpleFeedback title={frontmatter.title} labels={['content']} />
          {!isMobileScreen && (
            <ContributingGuidelines
              pageTitle={frontmatter.title}
              fileRelativePath={fileRelativePath}
            />
          )}
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
};

export const pageQuery = graphql`
  query($slug: String!, $locale: String) {
    mdx(fields: { slug: { eq: $slug } }) {
      mdxAST
      body
      frontmatter {
        title
        metaDescription
        watermark
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
