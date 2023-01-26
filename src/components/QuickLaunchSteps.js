import React from 'react';
import { css } from '@emotion/react';
import MDXContainer from './MDXContainer';
import { Tabs, useLocale } from '@newrelic/gatsby-theme-newrelic';

const QuickLaunchSteps = ({ stepsMdx }) => {
  const { locale } = useLocale();
  const sortedSteps = stepsMdx
    .filter((step) => step.fields.locale === locale)
    .sort((a, b) => a.frontmatter.stepNumber - b.frontmatter.stepNumber);

  return (
    <div
      css={css`
        background: var(--secondary-background-color);
        padding: 2rem;
        min-height: calc(100vh - 400px);
      `}
    >
      <Tabs
        css={css`
          flex-direction: row;
        `}
      >
        <Tabs.Bar
          css={css`
            justify-content: space-around;
            border: none;
          `}
        >
          {sortedSteps.map((step) => (
            <Tabs.BarItem
              css={css`
                width: 5rem;
                height: 5rem;
                flex-grow: 0;
                &[class*='BarItem-BarItem-QuickLaunchSteps'] {
                  background: var(--brand-button-primary-accent);
                }
                background: var(--primary-hover-color);
                border-bottom: none;
                border-radius: 50%;
                .dark-mode & {
                  border-bottom: none;
                  color: black;
                }
              `}
              key={step.frontmatter.stepNumber}
              id={step.frontmatter.stepNumber}
            >
              {step.frontmatter.stepNumber}
            </Tabs.BarItem>
          ))}
        </Tabs.Bar>
        <Tabs.Pages>
          {sortedSteps.map((step) => (
            <Tabs.Page
              key={step.frontmatter.stepNumber}
              id={step.frontmatter.stepNumber}
            >
              <MDXContainer
                key={step.frontmatter.stepNumber}
                body={step.body}
              />
            </Tabs.Page>
          ))}
        </Tabs.Pages>
      </Tabs>
    </div>
  );
};

export default QuickLaunchSteps;
