import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { graphql } from 'gatsby';
import PageTitle from '../components/PageTitle';
import Timeline from '../components/Timeline';
import SEO from '../components/SEO';
import { Button, Icon, Layout, Link } from '@newrelic/gatsby-theme-newrelic';
import { TYPES } from '../utils/constants';
import MDXContainer from '../components/MDXContainer';

const sortByVersion = (
  { frontmatter: { version: versionA } },
  { frontmatter: { version: versionB } }
) => {
  if (!versionA || !versionB) {
    return 0;
  }

  return (
    parseInt(versionB.replace(/\D/g, ''), 10) -
    parseInt(versionA.replace(/\D/g, ''), 10)
  );
};

const ReleaseNoteLandingPage = ({ data, pageContext, location }) => {
  const { slug, disableSwiftype, currentPage } = pageContext;
  const {
    allMdx: { nodes: posts },
    mdx: {
      frontmatter: { subject },
    },
  } = data;

  const now = useMemo(() => new Date(), []);
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

  const title = `${subject} release notes`;

  if (typeof window !== 'undefined' && typeof newrelic === 'object') {
    window.newrelic.setCustomAttribute(
      'pageType',
      'Template/ReleaseNoteLanding'
    );
  }
  // Pagination button navigation logic
  const totalPages = Math.ceil(data.totalReleaseNotesPerAgent.totalCount / 10);
  const prevPage = currentPage <= 1 ? '' : currentPage - 1;
  const nextPage = currentPage + 1;
  const hasNextPage = nextPage <= totalPages;
  const hasPrevPage = prevPage >= 1;

  return (
    <>
      <SEO
        location={location}
        title={title}
        type={TYPES.LANDING_PAGE}
        disableSwiftype={disableSwiftype}
      />
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
        <span>{title}</span>

        <Link
          to={`${slug}/feed.xml`}
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
      <Layout.Content
        css={css`
          & img {
            max-height: 460px;
          }
        `}
      >
        <Timeline>
          {postsByDate.map(([date, posts], idx) => {
            const isLast = idx === postsByDate.length - 1;

            return (
              <Timeline.Item label={date} key={date}>
                {posts.sort(sortByVersion).map((post) => {
                  return (
                    <div
                      key={post.version}
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
                        {post.frontmatter.title
                          ? post.frontmatter.title
                          : `${subject} v${post.frontmatter.version}`}
                      </Link>
                      <p
                        css={css`
                          margin-bottom: 0;
                        `}
                      >
                        <MDXContainer body={post.body} />
                      </p>
                    </div>
                  );
                })}
              </Timeline.Item>
            );
          })}
        </Timeline>
        <div
          css={css`
            display: flex;
            max-width: 760px;
            justify-content: center;
            align-items: flex-end;
            margin: 6rem auto 0;
            a {
              margin: 0 0.5rem 0;
              button {
                &:hover {
                  color: var(--brand-button-primary-accent-hover);
                  border-color: var(--brand-button-primary-accent-hover);
                }
              }
              text-decoration: none;
              &[disabled] {
                pointer-events: none;
                button {
                  border-color: --system-text-muted-light;
                  color: --system-text-muted-light;
                }
              }
            }
          `}
        >
          <Link disabled={!hasPrevPage} to={slug}>
            <Button disabled={!hasPrevPage} variant={Button.VARIANT.OUTLINE}>
              First
            </Button>
          </Link>

          <Link
            disabled={!hasPrevPage}
            to={`${slug}${prevPage === 1 ? '/' : `/${prevPage}/`}`}
            // there is no url for agent-release-notes/1/
          >
            <Button disabled={!hasPrevPage} variant={Button.VARIANT.OUTLINE}>
              <Icon name="fe-arrow-left" />
            </Button>
          </Link>
          <Button
            variant={Button.VARIANT.OUTLINE}
            css={css`
              pointer-events: none;
              margin: 0 0.5rem;
              border: none;
            `}
          >
            {`Page ${currentPage} of ${totalPages}`}{' '}
          </Button>
          <Link disabled={!hasNextPage} to={`${slug}/${nextPage}/`}>
            <Button disabled={!hasNextPage} variant={Button.VARIANT.OUTLINE}>
              <Icon name="fe-arrow-right" />
            </Button>
          </Link>
          <Link disabled={!hasNextPage} to={`${slug}/${totalPages}/`}>
            <Button disabled={!hasNextPage} variant={Button.VARIANT.OUTLINE}>
              Last
            </Button>
          </Link>
        </div>
      </Layout.Content>
    </>
  );
};

ReleaseNoteLandingPage.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
};

export const pageQuery = graphql`
  query($slug: String!, $subject: String!, $skip: Int, $limit: Int) {
    allMdx(
      filter: {
        frontmatter: { subject: { eq: $subject }, releaseDate: { ne: null } }
      }
      sort: { fields: [frontmatter___releaseDate], order: [DESC] }
      limit: $limit
      skip: $skip
    ) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          title
          version
          releaseDate(formatString: "MMMM D, YYYY")
        }
        body
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        subject
      }
    }
    totalReleaseNotesPerAgent: allMdx(
      filter: {
        frontmatter: { subject: { eq: $subject }, releaseDate: { ne: null } }
      }
    ) {
      totalCount
    }
  }
`;

export default ReleaseNoteLandingPage;
