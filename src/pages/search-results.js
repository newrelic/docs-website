import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import {
  Icon,
  Button,
  Link,
  search,
  Spinner,
  Surface,
  highlightText,
  useLocale,
  localeToSearchLanguage,
  useQueryParams,
} from '@newrelic/gatsby-theme-newrelic';
import { navigate } from '@reach/router';

const LIMIT = 5;

const SearchResultPageView = () => {
  const { queryParams } = useQueryParams();
  const query = queryParams.get('query');

  // Scope results to the site's language (jp→ja, kr→ko, pt→pt-br); English
  // site = en. undefined for an unmapped locale, which searches all languages.
  const { locale } = useLocale() || {};
  const language = localeToSearchLanguage(locale);

  const [state, setState] = useState({ loading: true });
  // SearchGPT paginates with opaque cursors (no random access to a page
  // number), so we track the cursor for the current page plus a stack of the
  // cursors for previously-visited pages to support "Previous". The current
  // page number is just the stack depth + 1, and the total is estimated
  // upfront from totalCount — shown as "Page N of ~M" (approximate because the
  // hit count is an estimate and the walk ends when nextCursor goes null).
  const [cursor, setCursor] = useState(undefined);
  const [cursorStack, setCursorStack] = useState([]);

  const { results, totalCount, nextCursor, loading, error } = state;

  // reset pagination whenever the query changes
  useEffect(() => {
    setCursor(undefined);
    setCursorStack([]);
  }, [query]);

  useEffect(() => {
    if (!query) {
      navigate('/');
      return;
    }

    let cancelled = false;
    setState((s) => ({ ...s, loading: true }));

    (async () => {
      try {
        const res = await search({
          searchTerm: query,
          cursor,
          limit: LIMIT,
          language,
        });
        if (cancelled) return;
        setState({
          results: res.results,
          totalCount: res.totalCount,
          nextCursor: res.nextCursor,
          loading: false,
        });
      } catch (err) {
        if (cancelled) return;
        setState({
          error:
            err.name === 'RateLimitError'
              ? `Rate limited. Try again in ${err.rateLimit?.resetInSeconds}s.`
              : 'Unable to get search results, an error has occurred',
          loading: false,
        });
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [query, cursor, language]);

  const goNext = () => {
    if (!nextCursor) return;
    setCursorStack((stack) => [...stack, cursor]);
    setCursor(nextCursor);
  };

  const goPrev = () => {
    setCursorStack((stack) => {
      const next = stack.slice(0, -1);
      setCursor(stack[stack.length - 1]);
      return next;
    });
  };

  const hasPrevPage = cursorStack.length > 0;
  const hasNextPage = Boolean(nextCursor);
  // Cursor walk is seek-based, so the full result set is reachable — no
  // 100/source clamp. Current page is the stack depth + 1; total is an
  // upfront estimate from the hit count.
  const currentPage = cursorStack.length + 1;
  const totalPages = totalCount != null ? Math.ceil(totalCount / LIMIT) : null;

  return (
    <PageContainer>
      {loading && (
        <LoadingContainer>
          <h2>Loading results</h2>
          <Spinner
            size="2rem"
            css={css`
              margin-top: 1rem;
              height: 50px;
            `}
          />
        </LoadingContainer>
      )}
      {results && !loading && (
        <>
          <h2>
            {totalCount} results for "{query}"
          </h2>
          {results.map((result, i) => (
            <Result
              key={`${i}-${result.title}`}
              result={result}
              query={query}
            />
          ))}
          <PaginationContainer>
            <PaginationButton
              disabled={!hasPrevPage}
              onClick={goPrev}
              css={css`
                padding: 0.25rem 0.35rem;
                margin-right: 0.5rem;
              `}
            >
              <Icon
                name="fe-arrow-left"
                css={css`
                  margin-right: 0.25rem;
                `}
              />
              Previous
            </PaginationButton>
            <PageIndicator>
              Page {currentPage}
              {totalPages != null && ` of ~${totalPages}`}
            </PageIndicator>
            <PaginationButton
              disabled={!hasNextPage}
              onClick={goNext}
              css={css`
                padding: 0.25rem 0.35rem;
                margin-left: 0.5rem;
              `}
            >
              Next
              <Icon
                name="fe-arrow-right"
                css={css`
                  margin-left: 0.25rem;
                `}
              />
            </PaginationButton>
          </PaginationContainer>
        </>
      )}
      {error && !loading && <LoadingContainer>{error}</LoadingContainer>}
    </PageContainer>
  );
};

const PageContainer = styled.div`
  font-size: 1.125rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding-right: 3.5rem;
  h2 {
    font-weight: normal;
    margin-bottom: 1rem;
  }

  @media (max-width: 1240px) {
    padding-right: 0;
  }
`;

const LoadingContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PaginationContainer = styled.div`
  display: flex;
  max-width: 760px;
  justify-content: center;
  align-items: center;
  margin: 3rem auto 0;
  a {
    margin: 0 0.25rem 0;
    display: flex;
    button {
      &:hover {
        color: var(--brand-button-primary-accent-hover);
        border-color: var(--brand-button-primary-accent-hover);
      }
    }
    text-decoration: none;
    &[disabled] {
      pointer-events: none;
      button {
        border-color: --system-text-muted-light;
        color: --system-text-muted-light;
      }
    }
  }
`;

const PageIndicator = styled.span`
  margin: 0 0.75rem;
  font-size: 1rem;
  white-space: nowrap;
  color: var(--secondary-text-color);
`;

const PaginationButton = ({ children, ...props }) => (
  <Button {...props} variant={Button.VARIANT.OUTLINE} size={Button.SIZE.SMALL}>
    {children}
  </Button>
);

PaginationButton.propTypes = {
  children: PropTypes.node,
};

const Result = ({ result, query }) => {
  return (
    <Surface
      as={Link}
      to={result.url}
      css={css`
        .highlight {
          color: #00ac69;
          font-style: normal;
        }
        margin-bottom: 2rem;
        box-shadow: none;
        color: var(--primary-font-color);
        &:hover {
          color: var(--primary-font-color);
          h3 {
            text-decoration: underline;
          }
        }
      `}
    >
      <p
        css={css`
          margin-bottom: 0;
          color: var(--secondary-text-color);
          font-size: 0.875rem;
        `}
      >
        {result.url.replace('https://docs.newrelic.com/docs/', '')}
      </p>
      <h3
        css={css`
          margin-bottom: 0;
          font-weight: 500;
        `}
        dangerouslySetInnerHTML={{
          __html: highlightText(result.title, query),
        }}
      />
      <p dangerouslySetInnerHTML={{ __html: result.summary }} />
    </Surface>
  );
};

Result.propTypes = {
  query: PropTypes.string,
  result: PropTypes.shape({
    url: PropTypes.string.isRequired,
    title: PropTypes.string,
    summary: PropTypes.string,
  }).isRequired,
};

export default SearchResultPageView;
