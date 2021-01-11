import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import SEO from '../components/seo';
import PageTitle from '../components/PageTitle';
import { graphql } from 'gatsby';
import { Layout, Link, useTranslation } from '@newrelic/gatsby-theme-newrelic';
import Timeline from '../components/Timeline';

const WhatsNew = ({ data }) => {
  const now = useMemo(() => new Date(), []);
  const { allMarkdownRemark } = data;
  const posts = allMarkdownRemark.edges.map(({ node }) => node);
  const postsByDate = Array.from(
    posts
      .reduce((map, post) => {
        const { releaseDate } = post.frontmatter;
        const [monthOnly, year] = releaseDate.split(', ');
        const key =
          year === now.getFullYear().toString() ? monthOnly : releaseDate;

        return map.set(key, [...(map.get(key) || []), post]);
      }, new Map())
      .entries()
  );

  const { t } = useTranslation();

  return (
    <>
      <SEO title="What's new in New Relic" />
      <div>
        <PageTitle
          css={css`
            margin-bottom: 2rem;
          `}
        >
          {t('whatsNew.title')}
        </PageTitle>
        <Layout.Content>
          <Timeline>
            {postsByDate.map(([date, posts], idx) => {
              const isLast = idx === postsByDate.length - 1;

              return (
                <Timeline.Item label={date} key={date}>
                  {posts.map((post) => (
                    <div
                      key={post.id}
                      css={css`
                        margin-bottom: 2rem;

                        &:last-child {
                          margin-bottom: ${isLast ? 0 : '4rem'};
                        }
                      `}
                    >
                      <Link
                        to={post.fields.slug}
                        css={css`
                          display: inline-block;
                          font-size: 1.25rem;
                          margin-bottom: 0.5rem;
                        `}
                      >
                        {post.frontmatter.title}
                      </Link>
                      <p
                        css={css`
                          margin-bottom: 0;
                        `}
                      >
                        {post.frontmatter.summary}
                      </p>
                    </div>
                  ))}
                </Timeline.Item>
              );
            })}
          </Timeline>
        </Layout.Content>
      </div>
    </>
  );
};

WhatsNew.propTypes = {
  data: PropTypes.object.isRequired,
};

export const pageQuery = graphql`
  query($slug: String!, $locale: String) {
    allMarkdownRemark(
      sort: {
        fields: [frontmatter___releaseDate, frontmatter___title]
        order: [DESC, ASC]
      }
      filter: { fields: { slug: { regex: "/whats-new/" } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            summary
            releaseDate(formatString: "MMMM D, YYYY")
          }
          fields {
            slug
          }
        }
      }
    }

    ...MainLayout_query
  }
`;

export default WhatsNew;
