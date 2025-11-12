import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import PageTitle from '../components/PageTitle';
import { graphql } from 'gatsby';
import {
  Layout,
  Icon,
  Link,
  useTranslation,
  Callout,
  ExternalLink
} from '@newrelic/gatsby-theme-newrelic';
import Timeline from '../components/Timeline';
import SEO from '../components/SEO';
import ErrorBoundary from '../components/ErrorBoundary';
import { TYPES } from '../utils/constants';

const WhatsNew = ({ data, location }) => {
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

  if (typeof window !== 'undefined' && typeof newrelic === 'object') {
    window.newrelic.setCustomAttribute('pageType', 'Dynamic/WhatsNew');
  }

  const { t } = useTranslation();

  return (
    <ErrorBoundary eventName="whatsNewOverview">
      <Callout variant="tip">
          <ExternalLink href="https://onenr.io/0MRNoPKoKjn">See These Updates Directly in the New Relic UI</ExternalLink>
      </Callout>
      <SEO
        location={location}
        title="What's new in New Relic"
        type={TYPES.WHATS_NEW_PAGE}
        disableSwiftype
      />
      <div>
        <PageTitle
          css={css`
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 2rem;
            gap: 0.5rem;

            @supports not (gap: 0.5rem) {
              > :first-child {
                margin-right: 0.5rem;
              }
            }
          `}
        >
          <span>{t('strings.whatsNew.title')}</span>
          <Link
            to="/whats-new/feed.xml"
            css={css`
              display: flex;
              align-items: center;
              font-size: 0.875rem;
            `}
          >
            RSS
            <Icon
              name="fe-rss"
              css={css`
                margin-left: 0.25rem;
              `}
            />
          </Link>
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
    </ErrorBoundary>
  );
};

WhatsNew.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export const pageQuery = graphql`
  query {
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
  }
`;

export default WhatsNew;
