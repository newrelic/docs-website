import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { Button, Icon, PageTools } from '@newrelic/gatsby-theme-newrelic';

const SimpleFeedback = ({ positiveUrl, negativeUrl }) => (
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

        > *:first-child {
          margin-right: 0.5rem;
        }
      `}
    >
      <Button
        as="a"
        href={positiveUrl}
        variant={Button.VARIANT.NORMAL}
        target="_blank"
      >
        <Icon
          size="0.75rem"
          name="thumbs-up"
          css={css`
            margin-right: 0.25rem;
          `}
        />
        Yes
      </Button>
      <Button
        as="a"
        href={negativeUrl}
        variant={Button.VARIANT.NORMAL}
        target="_blank"
      >
        <Icon
          size="0.75rem"
          name="thumbs-down"
          css={css`
            margin-right: 0.25rem;
          `}
        />
        No
      </Button>
    </div>
  </PageTools.Section>
);

SimpleFeedback.propTypes = {
  positiveUrl: PropTypes.string,
  negativeUrl: PropTypes.string,
};

export default SimpleFeedback;
