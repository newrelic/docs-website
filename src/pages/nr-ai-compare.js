import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { navigate } from '@reach/router';
import {
  Link,
  search,
  SearchInput,
  Spinner,
  Surface,
  useLocale,
  useQueryParams,
} from '@newrelic/gatsby-theme-newrelic';

const SearchResultPageView = () => {
  const { queryParams } = useQueryParams();
  const query = queryParams.get('query') || 'nrql';
  const page = Number(queryParams.get('page') ?? 1);
  const locale = useLocale();
  const [results, setResults] = useState({ loading: true });
  const [nraiResults, setNraiResults] = useState({ nraiLoading: true });
  const [searchTerm, setSearchTerm] = useState('');

  const { records, loading, error } = results;
  const { nraiStuff, nraiLoading, nraiError } = nraiResults;

  useEffect(() => {
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
          perPage: 10,
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

      try {
        fetch('/.netlify/functions/nrAiApi', {
          method: 'POST',
          body: JSON.stringify(query),
        })
          .then((res) => res.json())
          .then((json) =>
            setNraiResults({ nraiStuff: json.matches, nraiLoading: false })
          );
      } catch (err) {
        console.log(err);
        setNraiResults({
          nraiError: 'Unable to get search results, an error has occurred',
          nraiLoading: false,
        });
      }
    })();
  }, [locale, page, query]);

  return (
    <PageContainer>
      <SearchInput
        size={SearchInput.SIZE.MEDIUM}
        value={searchTerm || ''}
        iconName={SearchInput.ICONS.SEARCH}
        isIconClickable
        alignIcon={SearchInput.ICON_ALIGNMENT.RIGHT}
        onChange={(e) => setSearchTerm(e.target.value)}
        onSubmit={() => {
          navigate(`?query=${searchTerm || ''}`);
        }}
        css={css`
          max-width: 880px;
          width: 80%;
          margin-bottom: 1rem;
          svg {
            color: var(--primary-text-color);
          }
        `}
      />
      <CompareContainer>
        <ResultContainer>
          <>
            <h2>Swiftype results</h2>
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
            {error && !loading && <LoadingContainer>{error}</LoadingContainer>}

            {records &&
              records.map((result, i) => (
                <Result key={`${i}-${result.title}`} result={result} />
              ))}
          </>
        </ResultContainer>

        <ResultContainer>
          <>
            <h2>NR AI results</h2>
            {nraiLoading && (
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
            {nraiError && !nraiLoading && (
              <LoadingContainer>{nraiError}</LoadingContainer>
            )}

            {nraiStuff &&
              nraiStuff.map((nraiResult, i) => (
                <AIResult
                  key={`${i}-nrai-${nraiResult.metadata.file_url}`}
                  result={nraiResult.metadata}
                />
              ))}
          </>
        </ResultContainer>
      </CompareContainer>
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

const CompareContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const ResultContainer = styled.div`
  width: 50%;
`;

const Result = ({ result }) => {
  return (
    <Surface
      as={Link}
      to={result.url}
      css={css`
        em {
          font-style: normal;
        }
        margin-bottom: 1rem;
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
        {result.url.replace('https://docs.newrelic.com/', '')}
      </p>
      <h3
        css={css`
          margin-bottom: 0;
          font-weight: 500;
        `}
        dangerouslySetInnerHTML={{ __html: result.highlight.title }}
      />
    </Surface>
  );
};

const AIResult = ({ result }) => {
  return (
    <Surface
      as={Link}
      to={result.file_url}
      css={css`
        margin-bottom: 1rem;
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
        {result.file_url.replace('https://docs.newrelic.com/', '')}
      </p>
      <h3
        css={css`
          margin-bottom: 0;
          font-weight: 500;
        `}
        dangerouslySetInnerHTML={{
          __html: result.title || result.headingText || 'no title',
        }}
      />
    </Surface>
  );
};

SearchResultPageView.propTypes = {
  pageContext: PropTypes.shape({
    slug: PropTypes.string,
  }).isRequired,
};

export default SearchResultPageView;
