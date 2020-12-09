import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import SEO from '../components/seo';
import PageTitle from '../components/PageTitle';
import { graphql } from 'gatsby';
import { Layout, Link } from '@newrelic/gatsby-theme-newrelic';

const MOBILE_BREAKPOINT = '960px';

const WhatsNew = ({ data }) => {
  const { allMarkdownRemark } = data;
  const posts = allMarkdownRemark.edges.map(({ node }) => node);
  const postsByDate = Array.from(
    posts
      .reduce((map, post) => {
        const key = post.frontmatter.releaseDate;

        return map.set(key, [...(map.get(key) || []), post]);
      }, new Map())
      .entries()
  );

  return (
    <>
      <SEO title="What's new in New Relic" />
      <div>
        <PageTitle
          css={css`
            margin-bottom: 2rem;
          `}
        >
          What's new in New Relic
        </PageTitle>
        <Layout.Content>
          <div
            css={css`
              --timeline-width: 4px;
              --ring-size: 1rem;
              --ring-border-width: var(--timeline-width);
              --timeline-color: var(--color-neutrals-200);

              display: grid;
              grid-template-columns: auto 1fr;
              grid-column-gap: 2rem;

              .dark-mode & {
                --timeline-color: var(--color-dark-200);
              }

              @media screen and (max-width: ${MOBILE_BREAKPOINT}) {
                grid-template-columns: auto;
              }
            `}
          >
            {postsByDate.map(([date, posts], idx) => (
              <Fragment key={date}>
                <div
                  css={css`
                    position: relative;
                    padding-right: 2rem;
                    border-right: var(--timeline-width) solid
                      var(--timeline-color);
                    text-align: right;

                    @media screen and (max-width: ${MOBILE_BREAKPOINT}) {
                      text-align: left;
                      border-right: none;
                      padding-right: 0;
                    }
                  `}
                >
                  <span
                    css={css`
                      line-height: 1;
                      font-weight: 600;
                      font-size: 0.875rem;
                      color: var(--color-neutrals-900);

                      .dark-mode & {
                        color: var(--color-dark-900);
                      }

                      @media screen and (max-width: ${MOBILE_BREAKPOINT}) {
                        display: block;
                        font-size: 1rem;
                        margin-bottom: 1rem;
                        border-top: 1px solid var(--divider-color);
                        border-bottom: 1px solid var(--divider-color);
                        padding: 1rem 0;
                      }
                    `}
                  >
                    {date}
                  </span>

                  <div
                    css={css`
                      position: absolute;
                      top: 0.25rem;
                      right: calc((var(--timeline-width) * -1) / 2);
                      transform: translateX(50%);
                      width: var(--ring-size);
                      height: var(--ring-size);
                      border-radius: 50%;
                      background: var(--timeline-color);

                      &::after {
                        content: '';
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        width: calc(
                          var(--ring-size) - (var(--ring-border-width) * 2)
                        );
                        height: calc(
                          var(--ring-size) - (var(--ring-border-width) * 2)
                        );
                        transform: translate(-50%, -50%);
                        background: var(--primary-background-color);
                        border-radius: 50%;
                      }

                      @media screen and (max-width: ${MOBILE_BREAKPOINT}) {
                        display: none;
                      }
                    `}
                  />
                </div>
                <div>
                  {posts.map((post) => (
                    <div
                      key={post.id}
                      css={css`
                        margin-bottom: 2rem;

                        &:last-child {
                          margin-bottom: ${idx === postsByDate.length - 1
                            ? '0'
                            : '4'}rem;
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
                </div>
              </Fragment>
            ))}
          </div>
        </Layout.Content>
      </div>
    </>
  );
};

WhatsNew.propTypes = {
  data: PropTypes.object.isRequired,
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
