import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import {
  search,
  SearchInput,
  Spinner,
  Surface,
  useLocale,
} from '@newrelic/gatsby-theme-newrelic';
import cx from 'classnames';

const SearchResultPageView = () => {
  const locale = useLocale();
  const [hovered, setHovered] = useState(null);
  const [results, setResults] = useState({ loading: true });
  const [nraiResults, setNraiResults] = useState({ nraiLoading: true });
  const [searchTerm, setSearchTerm] = useState('nrql');
  const [termToSubmit, setTermToSubmit] = useState('nrql');

  const { records, loading, error } = results;
  const { nraiStuff, nraiLoading, nraiError } = nraiResults;

  useEffect(() => {
    setResults((r) => ({ ...r, loading: true }));
    setNraiResults((r) => ({ ...r, nraiLoading: true }));

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
          searchTerm,
          defaultSources,
          filters: [
            { type: 'source', defaultFilters: [] },
            { type: 'searchBy', defaultFilters: [] },
          ],
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

      try {
        fetch('/.netlify/functions/nrAiApi', {
          method: 'POST',
          body: JSON.stringify(searchTerm),
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
  }, [locale, searchTerm]);

  return (
    <PageContainer>
      <SearchInput
        size={SearchInput.SIZE.MEDIUM}
        value={termToSubmit || ''}
        iconName={SearchInput.ICONS.SEARCH}
        isIconClickable
        alignIcon={SearchInput.ICON_ALIGNMENT.RIGHT}
        onChange={(e) => setTermToSubmit(e.target.value)}
        onSubmit={() => setSearchTerm(termToSubmit)}
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
              !loading &&
              records.map((result, i) => (
                <Result
                  hovered={i === hovered}
                  key={`${i}-${result.title}`}
                  onHover={() => setHovered(i)}
                  onLeave={() => setHovered(null)}
                  result={result}
                />
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
              !nraiLoading &&
              nraiStuff.map((nraiResult, i) => (
                <AIResult
                  hovered={i === hovered}
                  key={`${i}-nrai-${nraiResult.metadata.file_url}`}
                  onHover={() => setHovered(i)}
                  onLeave={() => setHovered(null)}
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
  margin-top: 4rem;
`;

const CompareContainer = styled.div`
  display: grid;
  gap: 1rem 2rem;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: min-content repeat(10, 1fr);
`;

const ResultContainer = styled.div`
  counter-reset: results;
  display: grid;
  grid-template-rows: subgrid;
  grid-row: 1 / -1;
`;

const Result = ({ result, hovered, onHover, onLeave }) => {
  return (
    <Surface
      as="a"
      className={cx({ hovered })}
      href={result.url}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      css={css`
        em {
          font-style: normal;
        }
        margin-bottom: 1rem;
        box-shadow: none;
        color: var(--primary-font-color);
        position: relative;
        padding: 0.75rem;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        &.hovered {
          background: color-mix(
            in srgb,
            var(--primary-text-color),
            transparent 95%
          );
        }
        &:hover {
          background: color-mix(
            in srgb,
            var(--primary-text-color),
            transparent 95%
          );
          color: var(--primary-font-color);
          h3 {
            text-decoration: underline;
          }
        }
        &::before {
          counter-increment: results;
          content: counter(results);
          position: absolute;
          top: 0.75rem;
          left: -1.25rem;
          line-height: 1;
        }
      `}
    >
      <p
        css={css`
          line-height: 1.1;
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

const AIResult = ({ result, hovered, onHover, onLeave }) => {
  return (
    <Surface
      as="a"
      className={cx({ hovered })}
      href={result.file_url}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      css={css`
        margin-bottom: 1rem;
        box-shadow: none;
        color: var(--primary-font-color);
        padding: 0.75rem;
        position: relative;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        margin-left: -2rem;
        padding-left: 2rem;

        &.hovered {
          background: color-mix(
            in srgb,
            var(--primary-text-color),
            transparent 95%
          );
        }
        &:hover {
          background: color-mix(
            in srgb,
            var(--primary-text-color),
            transparent 95%
          );
          color: var(--primary-font-color);
          h3 {
            text-decoration: underline;
          }
        }

        &::before {
          counter-increment: results;
          content: counter(results);
          position: absolute;
          top: 0.75rem;
          left: -0.25rem;
          line-height: 1;
        }
      `}
    >
      <p
        css={css`
          line-height: 1.1;
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
