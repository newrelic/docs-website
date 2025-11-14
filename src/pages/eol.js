import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { graphql } from 'gatsby';
import {
  Layout,
  Icon,
  Link,
  useTranslation,
  ExternalLink,
  Callout
} from '@newrelic/gatsby-theme-newrelic';
import EolTable from '../components/EolTable';
import { DIRECTION } from '../components/EolTable/TableHeader';
import PageTitle from '../components/PageTitle';
import SEO from '../components/SEO';
import ErrorBoundary from '../components/ErrorBoundary';
import { TYPES } from '../utils/constants';

// @tw: add any body content here.
// it will go under the main heading and above the EOL timeline.
// const body = (
//   <>
//     <p>
//       🤠 howdy. here is a <a href="/">link</a>
//     </p>
//   </>
// );
const body = '';

const SORT_BY_FIELDS = {
  PUBLISH_DATE: 'publishDate',
  EOL_DATE: 'eolDate',
};

const Eol = ({ data, location }) => {
  const [sortDirection, setSortDirection] = useState(DIRECTION.ASC);
  const [sortField, setSortField] = useState(SORT_BY_FIELDS.PUBLISH_DATE);
  const { queryByEOLDate, queryByPublishDate } = data;

  const tableHeaders = [
    { label: 'Published', contentId: 'publishDate', sort: true },
    { label: 'EOL effective', contentId: 'eolDate', sort: true },
    { label: '', contentId: 'details' },
  ];

  const shapePostData = (posts) =>
    posts.edges.map((post) => {
      const { frontmatter } = post.node;

      return {
        id: post.node.id,
        publishDate: frontmatter.publishDate,
        eolDate: frontmatter.eolEffectiveDate,
        details: (
          <div
            key={post.id}
            css={css`
              margin-bottom: 2rem;

              * {
                opacity: 100%;
                font-style: normal;
              }
            `}
          >
            <Link
              to={post.node.fields.slug}
              css={css`
                display: inline-block;
                font-size: 1.25rem;
                margin-bottom: 0.5rem;
              `}
            >
              {frontmatter.title}
            </Link>
            <p
              css={css`
                margin-bottom: 0;
              `}
            >
              {frontmatter.summary}
            </p>
          </div>
        ),
      };
    });

  const postsByPublish = shapePostData(queryByPublishDate);
  const postsByEOL = shapePostData(queryByEOLDate);

  if (sortDirection === DIRECTION.DESC) {
    postsByPublish.reverse();
    postsByEOL.reverse();
  }

  const postsByDate = {
    publishDate: postsByPublish,
    eolDate: postsByEOL,
  };

  if (typeof window !== 'undefined' && typeof newrelic === 'object') {
    window.newrelic.setCustomAttribute('pageType', 'Dynamic/Eol');
  }

  const { t } = useTranslation();

  return (
    <ErrorBoundary eventName="eolOverview">
      <Callout variant="tip">
        <p>Did you know? You can get all EOL updates directly in the New Relic UI.</p>
        <ExternalLink href="https://onenr.io/0OQMm51y9QG">View EOL updates in New Relic UI</ExternalLink>
      </Callout>
      <SEO
        location={location}
        title="End-of-life announcements"
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
            margin-top: 1rem;

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
          {body}
          <EolTable
            headers={tableHeaders}
            body={postsByDate[sortField]}
            sortDirection={sortDirection}
            setSortDirection={setSortDirection}
            sortField={sortField}
            setSortField={setSortField}
          />
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
    queryByPublishDate: allMarkdownRemark(
      sort: {
        fields: [frontmatter___publishDate, frontmatter___title]
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
    queryByEOLDate: allMarkdownRemark(
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
