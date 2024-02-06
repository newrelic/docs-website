import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { graphql } from 'gatsby';
import { takeWhile } from 'lodash';
import { CSSTransition } from 'react-transition-group';
import { useMedia } from 'react-use';
import { createLocalStorageStateHook } from 'use-local-storage-state';
import DocPageBanner from '../components/DocPageBanner';
import PageTitle from '../components/PageTitle';
import MDXContainer from '../components/MDXContainer';
import {
  ContributingGuidelines,
  ComplexFeedback,
  TableOfContents,
  LoggedInProvider,
  useLoggedIn,
} from '@newrelic/gatsby-theme-newrelic';
import Layout from '../components/Layout';
import MachineTranslationCallout from '../components/MachineTranslationCallout';
import SEO from '../components/SEO';
import GithubSlugger from 'github-slugger';
import { TYPES } from '../utils/constants';
import { useMainLayoutContext } from '../components/MainLayoutContext';
import ErrorBoundary from '../components/ErrorBoundary';
import FeedbackModal from '../components/FeedbackModal';

const BANNER_HEIGHT = '78px';

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

const BasicDoc = ({ data, location, pageContext }) => {
  const { mdx } = data;
  const {
    frontmatter,
    tableOfContents,
    body,
    fields: { fileRelativePath },
  } = mdx;
  const { disableSwiftype, hidePageTools } = pageContext;

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
    type,
    translationType,
    signupBanner,
  } = frontmatter;

  if (typeof window !== 'undefined' && typeof newrelic === 'object') {
    window.newrelic.setCustomAttribute('pageType', 'Template/DocPage');
  }

  const { loggedIn } = useLoggedIn();
  const [sidebar] = useMainLayoutContext();
  const useBannerDismissed = createLocalStorageStateHook(
    `docBannerDismissed-${title}`
  );
  const [bannerDismissed, setBannerDismissed] = useBannerDismissed(false);
  const [showFeedbackModal, setShowFeedbackModal] = useState(true);
  const [mounted, setMounted] = useState(false);
  const bannerVisible =
    !loggedIn && !bannerDismissed && signupBanner && mounted;
  const mobileBreakpoint = '450px';
  const isMobileScreen = useMedia(`(max-width: ${mobileBreakpoint})`);

  useEffect(() => {
    setMounted(true);
  }, []);

  const onCloseBanner = () => {
    setBannerDismissed(true);
  };

  return (
    <ErrorBoundary eventName="doc">
      <SEO
        location={location}
        title={title}
        description={metaDescription}
        type={type ? TYPES.BASIC_PAGE[type] : TYPES.BASIC_PAGE.default}
        tags={tags}
        disableSwiftype={disableSwiftype}
      />
      {bannerVisible && (
        <DocPageBanner
          height={BANNER_HEIGHT}
          onClose={onCloseBanner}
          {...signupBanner}
        />
      )}
      <div
        css={css`
          display: grid;
          grid-template-areas:
            'mt-disclaimer mt-disclaimer'
            'page-title page-tools'
            'content page-tools';
          grid-template-columns: minmax(0, 1fr) 12.8125rem;
          grid-column-gap: 2rem;

          ${bannerVisible &&
          css`
            margin-top: ${BANNER_HEIGHT};
            @media screen and (max-width: 760px) {
              margin-top: 0;
            }
          `}

          iframe {
            max-width: 100%;
          }

          @media screen and (max-width: 1240px) {
            grid-template-areas:
              'mt-disclaimer'
              'page-title'
              'content'
              'page-tools';
            grid-template-columns: minmax(0, 1fr);
          }
          ${hidePageTools &&
          css`
            grid-template-areas:
              'mt-disclaimer'
              'page-title page'
              'content';
              grid-template-columns: 1fr;

            @media screen and (max-width: 1240px) {
              grid-template-areas:
                'mt-disclaimer'
                'page-title'
                'content'
              grid-template-columns: minmax(0, 1fr);
            }
          `}
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

        <LoggedInProvider>
          <Layout.Content>
            <MDXContainer body={body} />
            {showFeedbackModal && !isMobileScreen && (
              <FeedbackModal onClose={() => setShowFeedbackModal(false)} />
            )}{' '}
          </Layout.Content>
        </LoggedInProvider>
        {!hidePageTools && (
          // TODO pass nodeRef to avoid `findDOMNode` usage
          // this transition is the inverse of the page `translate` transition
          // it keeps the PageTools in the same place when the nav opens/ closes
          <CSSTransition
            in={sidebar}
            classNames="page-tools-transition"
            timeout={300}
          >
            <Layout.PageTools
              css={css`
                background: var(--primary-background-color);

                &.page-tools-transition-enter {
                  translate: calc(var(--sidebar-width) - 50px);
                }
                &.page-tools-transition-enter-active {
                  translate: 0;
                  transition: 300ms translate ease;
                }
                &.page-tools-transition-enter-done {
                  translate: 0;
                }

                &.page-tools-transition-exit {
                  translate: calc(calc(var(--sidebar-width) - 50px) * -1);
                }
                &.page-tools-transition-exit-active {
                  translate: 0;
                  transition: 300ms translate ease;
                }
                &.page-tools-transition-exit-done {
                  translate: 0;
                }

                @media screen and (max-width: 1240px) {
                  margin-top: 1rem;
                  position: static;
                }
              `}
            >
              <TableOfContents headings={headings} />
              <ComplexFeedback pageTitle={title} />
              <ContributingGuidelines
                pageTitle={title}
                fileRelativePath={fileRelativePath}
                issueLabels={['feedback', 'feedback-issue']}
              />
            </Layout.PageTools>
          </CSSTransition>
        )}
      </div>
    </ErrorBoundary>
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
        translationType
        signupBanner {
          cta
          text
          url
        }
      }
      fields {
        fileRelativePath
      }
      ...TableOfContents_page
    }
  }
`;

export default BasicDoc;
