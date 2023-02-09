import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { graphql } from 'gatsby';
import { takeWhile } from 'lodash';
import { createLocalStorageStateHook } from 'use-local-storage-state';
import PageTitle from '../components/PageTitle';
import DocPageBanner from '../components/DocPageBanner';
import MDXContainer from '../components/MDXContainer';
import {
  ContributingGuidelines,
  Layout,
  RelatedResources,
  ComplexFeedback,
  TableOfContents,
  useHasMounted,
} from '@newrelic/gatsby-theme-newrelic';
import MachineTranslationCallout from '../components/MachineTranslationCallout';
import SEO from '../components/SEO';
import GithubSlugger from 'github-slugger';
import { TYPES } from '../utils/constants';

/**
 * Some `title`s from the `tableOfContents` field are
 * formatted like "NRQL query examples #examples".
 * This function splits the title and the hash into a tuple.
 * Not all titles include a hash.
 * For those, a tuple of [string, undefined] is returned.
 *
 * @returns [string, string | undefined]
 */
const splitTOCTitle = (title = '') => {
  const chunks = title.split(' ');
  const titleText = takeWhile(chunks, (word) => !word.startsWith('#'));
  const slug = chunks.find((word) => word.startsWith('#'));

  return [titleText.join(' '), slug];
};

const bannerHeight = '78px';

const BasicDoc = ({ data, location, pageContext }) => {
  const { mdx } = data;
  const {
    frontmatter,
    tableOfContents,
    body,
    fields: { fileRelativePath },
    relatedResources,
  } = mdx;
  const { disableSwiftype } = pageContext;

  const headings = useMemo(() => {
    const slugs = new GithubSlugger();
    return (tableOfContents.items ?? []).map(({ title, url }) => {
      const [titleText, slug] = splitTOCTitle(title);

      return {
        // the slug as it's parsed from the title is actually
        // more correct/reliable than the `url` property from GraphQL.
        // `id` here shouldn't include a hash (it gets added later),
        // and a double hash breaks the links.
        id: (slug || url || slugs.slug(titleText)).replace('#', ''),
        text: titleText,
      };
    });
  }, [tableOfContents]);

  const {
    title,
    metaDescription,
    tags,
    translationType,
    dataSource,
    isTutorial,
    signupBanner,
  } = frontmatter;

  let { type } = frontmatter;

  if (typeof window !== 'undefined' && typeof newrelic === 'object') {
    window.newrelic.setCustomAttribute('pageType', 'Template/DocPage');
  }
  if (isTutorial) {
    type = 'tutorial';
  }
  const useBannerDismissed = createLocalStorageStateHook(
    `docBannerDismissed-${title}`
  );

  const [bannerDismissed, setBannerDismissed] = useBannerDismissed(null);
  const [bannerVisible, setBannerVisible] = useState(bannerDismissed !== true);

  const onCloseBanner = () => {
    setBannerVisible(false);
    setBannerDismissed(true);
  };

  const hasMounted = useHasMounted();

  if (!hasMounted) {
    return null;
  }
  return (
    <>
      <SEO
        location={location}
        title={title}
        description={metaDescription}
        type={type ? TYPES.BASIC_PAGE[type] : TYPES.BASIC_PAGE.default}
        tags={tags}
        dataSource={dataSource}
        disableSwiftype={disableSwiftype}
      />
      {signupBanner && bannerVisible && (
        <DocPageBanner
          height={bannerHeight}
          text={signupBanner.text}
          cta={signupBanner.cta}
          url={signupBanner.url}
          onClose={onCloseBanner}
        />
      )}
      <div
        css={css`
          display: grid;
          grid-template-areas:
            'mt-disclaimer mt-disclaimer'
            'page-title page-tools'
            'content page-tools';
          grid-template-columns: minmax(0, 1fr) 320px;
          grid-column-gap: 2rem;

          ${signupBanner &&
          bannerVisible &&
          css`
            margin-top: ${bannerHeight};
            @media screen and (max-width: 760px) {
              margin-top: 0;
            }
          `}

          @media screen and (max-width: 1240px) {
            grid-template-areas:
              'mt-disclaimer'
              'page-title'
              'content'
              'page-tools';
            grid-template-columns: minmax(0, 1fr);
          }
        `}
      >
        {translationType === 'machine' && (
          <MachineTranslationCallout
            englishHref={location.pathname.replace(
              `/${pageContext.locale}`,
              ''
            )}
          />
        )}
        <PageTitle>{title}</PageTitle>

        <Layout.Content>
          <MDXContainer body={body} />
        </Layout.Content>
        <Layout.PageTools
          css={css`
            @media screen and (max-width: 1240px) {
              margin-top: 1rem;
              position: static;
            }
          `}
        >
          <ContributingGuidelines
            pageTitle={title}
            fileRelativePath={fileRelativePath}
            issueLabels={['feedback', 'feedback-issue']}
          />
          <TableOfContents headings={headings} />
          <ComplexFeedback pageTitle={title} />
          <RelatedResources
            resources={relatedResources}
            css={css`
              border-top: 1px solid var(--divider-color);
            `}
          />
        </Layout.PageTools>
      </div>
    </>
  );
};

BasicDoc.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
};

export const pageQuery = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      tableOfContents
      frontmatter {
        title
        metaDescription
        type
        tags
        isTutorial
        translationType
        dataSource
        signupBanner {
          cta
          url
          text
        }
      }
      fields {
        fileRelativePath
      }
      relatedResources(limit: 3) {
        title
        url
      }
      ...TableOfContents_page
    }
  }
`;

export default BasicDoc;
