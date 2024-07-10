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
} from '@newrelic/gatsby-theme-newrelic';
import Timeline from '../components/Timeline';
import SEO from '../components/SEO';
import ErrorBoundary from '../components/ErrorBoundary';
import { TYPES } from '../utils/constants';

const Eol = ({ data, location }) => {
  const now = useMemo(() => new Date(), []);
  const { allMarkdownRemark } = data;
  console.log('frontmatter 🔮', data);

  const posts = allMarkdownRemark.edges.map(({ node }) => node);
  const postsByDate = Array.from(
    posts
      .reduce((map, post) => {
        const { eolEffectiveDate } = post.frontmatter;
        const [monthOnly, year] = eolEffectiveDate.split(', ');
        const key =
          year === now.getFullYear().toString() ? monthOnly : eolEffectiveDate;

        return map.set(key, [...(map.get(key) || []), post]);
      }, new Map())
      .entries()
  );

  if (typeof window !== 'undefined' && typeof newrelic === 'object') {
    window.newrelic.setCustomAttribute('pageType', 'Dynamic/Eol');
  }

  const { t } = useTranslation();

  return (
    <ErrorBoundary eventName="eolOverview">
      <SEO
        location={location}
        title="EOL Announcements"
        type={TYPES.EOL_PAGE}
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
          <span>{t('strings.eol.title')}</span>
          <Link
            to="/eol/feed.xml"
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

Eol.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: {
        fields: [frontmatter___eolEffectiveDate, frontmatter___title]
        order: [DESC, ASC]
      }
      filter: { fields: { slug: { regex: "/^/eol/" } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            summary
            eolEffectiveDate(formatString: "MMMM D, YYYY")
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;

export default Eol;
