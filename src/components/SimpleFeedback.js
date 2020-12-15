import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';
import { css } from '@emotion/core';
import { Button, Icon, PageTools } from '@newrelic/gatsby-theme-newrelic';

const SimpleFeedback = ({ title, slug }) => {
  const { site } = useStaticQuery(graphql`
    query FeedbackQuery {
      site {
        siteMetadata {
          siteUrl
          repository
        }
      }
    }
  `);

  const { repository, siteUrl } = site.siteMetadata;
  const issueUrl = `${repository}/issues/new`;
  const labels = ['content', 'feedback'].join(',');

  const issueTitle = title
    ? `Feedback:+${title.replace(' ', '+')}`
    : 'Website Feedback';

  const body =
    title && slug ? `&body=Page:%20[${title}](${siteUrl}${slug})` : '';

  const positiveFeedback = `${issueUrl}?labels=${labels},feedback-positive&title=${issueTitle}${body}`;
  const negativeFeedback = `${issueUrl}?labels=${labels},feedback-negative&title=${issueTitle}${body}`;

  return (
    <PageTools.Section>
      <PageTools.Title>Feedback</PageTools.Title>
      <div
        css={css`
          font-size: 0.875rem;
        `}
      >
        Was this page helpful?
      </div>
      <div
        css={css`
          display: flex;
          margin-top: 0.5rem;
          justify-content: center;
          align-items: flex-start;

          a {
            flex-grow: 1;
          }

          > *:first-child {
            margin-right: 0.5rem;
          }
        `}
      >
        <Button
          as="a"
          href={positiveFeedback}
          variant={Button.VARIANT.NORMAL}
          target="_blank"
        >
          <Icon
            size="0.75rem"
            name="thumbs-up"
            css={css`
              margin-right: 0.5rem;
            `}
          />
          Yes
        </Button>
        <Button
          as="a"
          href={negativeFeedback}
          variant={Button.VARIANT.NORMAL}
          target="_blank"
        >
          <Icon
            size="0.75rem"
            name="thumbs-down"
            css={css`
              margin-right: 0.5rem;
            `}
          />
          No
        </Button>
      </div>
    </PageTools.Section>
  );
};

SimpleFeedback.propTypes = {
  title: PropTypes.string,
  slug: PropTypes.string,
};

export default SimpleFeedback;
