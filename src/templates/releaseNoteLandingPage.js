import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { graphql } from 'gatsby';
import PageTitle from '../components/PageTitle';
import Timeline from '../components/Timeline';
import SEO from '../components/SEO';
import { Icon, Layout, Link } from '@newrelic/gatsby-theme-newrelic';
import filter from 'unist-util-filter';
import { TYPES } from '../utils/constants';

const EXCERPT_LENGTH = 200;

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
  const { slug, disableSwiftype } = pageContext;
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
      <Layout.Content>
        <Timeline>
          {postsByDate.map(([date, posts], idx) => {
            const isLast = idx === postsByDate.length - 1;

            return (
              <Timeline.Item label={date} key={date}>
                {posts.sort(sortByVersion).map((post) => {
                  const excerpt = getBestGuessExcerpt(post.mdxAST);

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
                        {excerpt.slice(0, EXCERPT_LENGTH)}
                        {excerpt.length > EXCERPT_LENGTH ? '…' : ''}
                      </p>
                    </div>
                  );
                })}
              </Timeline.Item>
            );
          })}
        </Timeline>
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
  query($slug: String!, $subject: String!, $locale: String) {
    allMdx(
      filter: {
        frontmatter: { subject: { eq: $subject }, releaseDate: { ne: null } }
      }
      sort: { fields: [frontmatter___releaseDate], order: [DESC] }
    ) {
      nodes {
        mdxAST
        fields {
          slug
        }
        frontmatter {
          title
          version
          releaseDate(formatString: "MMMM D, YYYY")
        }
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        subject
      }
    }

    ...MainLayout_query
  }
`;

// copying in function from mdast-util-to-string so we can render list items with periods and spaces between
function toString(node) {
  const isList = node.type === 'list';
  return (
    (node &&
      (node.value ||
        node.alt ||
        node.title ||
        ('children' in node && all(node.children, isList)) ||
        ('length' in node && all(node, isList)))) ||
    ''
  );
}

function all(values, isList) {
  const result = [];
  const length = values.length;
  let index = -1;

  while (++index < length) {
    result[index] = toString(values[index]);
  }
  if (isList) {
    const strippedPeriodResults = result.map((listItem) => {
      if (listItem[listItem.length - 1] === '.') {
        return listItem.slice(0, -1);
      } else {
        return listItem;
      }
    });
    return strippedPeriodResults.join('. ');
  } else {
    return result.join('');
  }
}

const getBestGuessExcerpt = (mdxAST) => {
  const textTypes = [
    'paragraph',
    'list',
    'listItem',
    'text',
    'root',
    'link',
    'inlineCode',
  ];
  const ast = filter(mdxAST, (node) => textTypes.includes(node.type));

  return toString(
    filter(
      ast,
      (node, idx, parent) =>
        node.type === 'root' || parent.type !== 'root' || idx === 0
    )
  );
};

export default ReleaseNoteLandingPage;
