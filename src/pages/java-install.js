import React from 'react';
import { graphql } from 'gatsby';
import { Layout } from '@newrelic/gatsby-theme-newrelic';
import { css } from '@emotion/react';
import SEO from '../components/SEO';
import PageTitle from '../components/PageTitle';
import AgentConfig from '../components/AgentConfig';
import config from '../install/config/java/config';
import { TYPES } from '../utils/constants';

const Test = ({ data, location }) => {
  const { body } = data.mdx;
  return (
    <>
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
          Test
        </PageTitle>
        <Layout.Content>
          <AgentConfig
            tipMdx={body}
            config={config}
            inputOptions={[
              {
                name: 'appName',
                label: 'Name your app',
                codeLine: 31,
                defaultValue: 'My Application',
                value: 'My Application',
                toolTip:
                  "The app name in the agent's configuration file will be used in the New Relic user interface",
              },
              {
                name: 'licenseKey',
                label: 'Enter your New Relic ',
                codeLine: 15,
                defaultValue: '12345',
                value: '12345',
                url: {
                  href:
                    'https://docs.newrelic.com/docs/apis/intro-apis/new-relic-api-keys/#ingest-license-key',
                  title: 'license key',
                },
              },
            ]}
          />
        </Layout.Content>
      </div>
    </>
  );
};

export const pageQuery = graphql`
  query($slug: String!, $locale: String) {
    mdx(slug: { regex: "/java/tip/" }) {
      body
    }
    ...MainLayout_query
  }
`;

export default Test;
