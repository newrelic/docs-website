import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import PageTitle from '../components/PageTitle';
import { graphql } from 'gatsby';
import {
  Button,
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
  const [sortByPublishDate, setSortByPublishDate] = useState(true);

  const now = useMemo(() => new Date(), []);
  const { allMarkdownRemark } = data;

  const posts = allMarkdownRemark.edges.map(({ node }) => node);

  const postsByDate = Array.from(
    posts
      .reduce((map, post) => {
        const { eolEffectiveDate, publishDate } = post.frontmatter;

        const sortBy = sortByPublishDate ? publishDate : eolEffectiveDate;

        return map.set(sortBy, [...(map.get(sortBy) || []), post]);
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
          {t('strings.eol.title')}
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
          <Button
            variant={Button.VARIANT.PRIMARY}
            onClick={() => {
              setSortByPublishDate(!sortByPublishDate);
            }}
          >
            {sortByPublishDate ? 'Sort by EOL date' : 'Sort by Publish date'}
          </Button>
          <div>{sortByPublishDate ? 'Publish date' : 'EOL Date'}</div>
          <Timeline>
            {postsByDate.map(([date, posts], idx) => {
              const isLast = idx === postsByDate.length - 1;

              return (
                <Timeline.Item label={date} key={date}>
                  {posts.map((post) => {
                    const {
                      title,
                      eolEffectiveDate,
                      publishDate,
                      summary,
                    } = post.frontmatter;
                    return (
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
                          {title}
                        </Link>
                        <DateIcon
                          icon={
                            sortByPublishDate
                              ? 'fe-minus-circle'
                              : 'fe-calendar'
                          }
                          dateString={
                            sortByPublishDate ? eolEffectiveDate : publishDate
                          }
                        >
                          {sortByPublishDate ? 'EOL effective:' : 'Published:'}
                        </DateIcon>
                        <p
                          css={css`
                            margin-bottom: 0;
                          `}
                        >
                          {summary}
                        </p>
                      </div>
                    );
                  })}
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

const DateIcon = ({ children, icon, dateString }) => {
  return (
    <div
      css={css`
        font-size: 1rem;
        display: flex;
        align-items: baseline;
        margin: 1rem 0 0.5rem;
      `}
    >
      <Icon
        name={icon}
        size="1rem"
        css={css`
          position: relative;
          top: 1px;
        `}
      />
      <b
        css={css`
          margin: 0 0.25rem;
        `}
      >
        {children}
      </b>
      {dateString}
    </div>
  );
};

DateIcon.propTypes = {
  children: PropTypes.node.isRequired,
  icon: PropTypes.string.isRequired,
  dateString: PropTypes.string.isRequired,
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
            publishDate(formatString: "MMMM D, YYYY")
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
