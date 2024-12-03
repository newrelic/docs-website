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
  useLocale,
  useQueryParams,
} from '@newrelic/gatsby-theme-newrelic';
import { navigate } from '@reach/router';

import { usePagination, DOTS } from '../hooks/usePagination';

const SearchResultPageView = ({ pageContext }) => {
  const { queryParams } = useQueryParams();
  const query = queryParams.get('query');
  const page = Number(queryParams.get('page') ?? 1);
  const locale = useLocale();
  const [results, setResults] = useState({ loading: true });
  const { records, pageCount, loading, error } = results;
  const { slug } = pageContext;

  const totalPages = pageCount;
  const totalResults = totalPages * 5;
  const prevPage = page - 1;
  const nextPage = page + 1;
  const hasNextPage = nextPage <= totalPages;
  const hasPrevPage = prevPage >= 1;

  const paginationRange = usePagination({
    totalPageCount: totalPages,
    siblingCount: 1,
    currentPage: page,
  });

  useEffect(() => {
    if (!query) {
      navigate('/');
    }
    (async () => {
      const defaultSources = locale.isDefault
        ? ['developer', 'docs', 'opensource', 'quickstarts']
        : [
            `developer-${locale.locale}`,
            `docs-${locale.locale}`,
            `opensource-${locale.locale}`,
            `quickstarts`,
          ];
      try {
        const results = await search({
          searchTerm: query,
          defaultSources,
          filters: [
            { type: 'source', defaultFilters: [] },
            { type: 'searchBy', defaultFilters: [] },
          ],
          page,
          perPage: 5,
        });
        setResults({
          pageCount: results.info.page.num_pages,
          records: results.records.page,
          loading: false,
        });
      } catch {
        setResults({
          error: 'Unable to get search results, an error has occurred',
          loading: false,
        });
      }
    })();
  }, [locale, page, query]);

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
      {records && (
        <>
          <h2>
            {totalResults} results for "{query}"
          </h2>
          {records.map((result, i) => (
            <Result key={`${i}-${result.title}`} result={result} />
          ))}
          <PaginationContainer>
            <Link
              disabled={!hasPrevPage}
              to={`${slug}/?query=${query}&page=${prevPage}`}
            >
              <PaginationButton
                disabled={!hasPrevPage}
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
            </Link>
            {paginationRange.map((pageNumber) => {
              if (pageNumber === DOTS) {
                return <span>{DOTS}</span>;
              }
              return (
                <Link
                  key={`searchpage-${pageNumber}`}
                  disabled={pageNumber === page}
                  to={`${slug}/?query=${query}&page=${pageNumber}`}
                >
                  <PaginationButton
                    disabled={pageNumber === page}
                    css={css`
                      padding: 0.25rem 0.35rem;
                      ${pageNumber === page &&
                      css`
                        background: var(--primary-text-color);
                        color: var(--primary-background-color);
                        opacity: 1;
                      `}
                    `}
                  >
                    {pageNumber}
                  </PaginationButton>
                </Link>
              );
            })}
            <Link
              disabled={!hasNextPage}
              to={`${slug}/?query=${query}&page=${nextPage}`}
            >
              <PaginationButton
                disabled={!hasNextPage}
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
            </Link>
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

const Result = ({ result }) => {
  return (
    <Surface
      as={Link}
      to={result.url}
      css={css`
        em {
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
        dangerouslySetInnerHTML={{ __html: result.highlight.title }}
      />
      <p dangerouslySetInnerHTML={{ __html: result.highlight.body }} />
    </Surface>
  );
};

SearchResultPageView.propTypes = {
  pageContext: PropTypes.shape({
    slug: PropTypes.string,
  }).isRequired,
};

export default SearchResultPageView;
