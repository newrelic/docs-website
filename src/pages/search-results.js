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
  useQueryParams,
} from '@newrelic/gatsby-theme-newrelic';
import { navigate } from '@reach/router';

const SearchResultPageView = () => {
  const { queryParams } = useQueryParams();
  const query = queryParams.get('query');

  const [state, setState] = useState({ loading: true });
  // SearchGPT paginates with opaque cursors (no random access to a page
  // number), so we track the cursor for the current page plus a stack of the
  // cursors for previously-visited pages to support "Previous".
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
        const res = await search({ searchTerm: query, cursor });
        if (cancelled) return;
        setState({
          results: res.results,
          totalCount: res.totalCount,
          nextCursor: res.nextCursor,
          loading: false,
        });
      } catch {
        setState({
          error: 'Unable to get search results, an error has occurred',
          loading: false,
        });
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [query, cursor]);

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
  align-items: flex-end;
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
