import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { graphql } from 'gatsby';
import { useMedia } from 'react-use';
import PageTitle from '../components/PageTitle';
import MDXContainer from '../components/MDXContainer';
import TableOfContents from '../components/TableOfContents';
import {
  ContributingGuidelines,
  Layout,
  RelatedResources,
  SimpleFeedback,
  SEO,
  useTranslation,
} from '@newrelic/gatsby-theme-newrelic';
import DefaultRelatedContent from '../components/DefaultRelatedContent';
import Watermark from '../components/Watermark';
import { parseHeading } from '../../plugins/gatsby-remark-custom-heading-ids/utils/heading';

const BasicDoc = ({ data, location }) => {
  const { t } = useTranslation();
  const { mdx } = data;
  const {
    mdxAST,
    frontmatter,
    body,
    fields: { fileRelativePath, slug },
    relatedResources,
  } = mdx;

  const moreHelpExists = mdxAST.children
    .filter((node) => node.type === 'heading')
    .some((node) => {
      const { text } = parseHeading(node);
      return text === t('defaultRelatedContent.title');
    });

  const isMobileScreen = useMedia('(max-width: 1240px)');

  return (
    <>
      <SEO location={location} title={frontmatter.title} />
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
            {moreHelpExists ? null : <DefaultRelatedContent />}
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
          {!isMobileScreen && (
            <ContributingGuidelines fileRelativePath={fileRelativePath} />
          )}
          <TableOfContents page={mdx} />
          <RelatedResources resources={relatedResources} />
          <SimpleFeedback
            title={frontmatter.title}
            slug={slug}
            labels={['content', 'feedback']}
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
        watermark
      }
      fields {
        fileRelativePath
        slug
      }
      relatedResources(limit: 5) {
        title
        url
      }
      ...TableOfContents_page
    }
    ...MainLayout_query
  }
`;

export default BasicDoc;
