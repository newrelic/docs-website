import React, { memo, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import {
  Layout,
  Link,
  Tag,
  TagList,
  useQueryParams,
  Icon,
  useTranslation,
  Trans,
  ComplexFeedback,
  Table,
  useLocale,
} from '@newrelic/gatsby-theme-newrelic';

import { TYPES } from '../utils/constants';

import DataDictionaryFilter from '../components/DataDictionaryFilter';
import SEO from '../components/SEO';
import PageTitle from '../components/PageTitle';
import ErrorBoundary from '../components/ErrorBoundary';

import enJson from '../data/attribute-dictionary-en.json';
import frJson from '../data/attribute-dictionary-fr.json';

const AttributeDictionary = ({ location }) => {
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [filteredAttribute, setFilteredAttribute] = useState(null);
  const [searchedAttribute, setSearchedAttribute] = useState(null);
  const { queryParams } = useQueryParams();

  const { locale } = useLocale();

  if (typeof window !== 'undefined' && typeof newrelic === 'object') {
    window.newrelic.setCustomAttribute(
      'pageType',
      'Interactive/AttributeDictionary'
    );
  }

  const events = (() => {
    if (locale === 'en') return enJson;
    if (locale === 'fr') return frJson;
    return enJson;
  })();

  useEffect(() => {
    let filteredEvents = events;

    if (queryParams.has('dataSource')) {
      const dataSource = queryParams.get('dataSource');
      filteredEvents = filteredEvents.filter((event) =>
        event.dataSources
          .map((ds) => ds.name)
          .some((name) => name.includes(dataSource))
      );
    }

    if (queryParams.has('event')) {
      const eventQuery = queryParams.get('event');
      filteredEvents = filteredEvents.filter(
        (event) => event.name === eventQuery
      );
    }

    if (queryParams.has('attributeSearch')) {
      const attributeSearch = queryParams.get('attributeSearch').toLowerCase();
      filteredEvents = filteredEvents.filter((event) =>
        event.attributes.some(({ name }) =>
          name.toLowerCase().includes(attributeSearch)
        )
      );
    }

    setFilteredEvents(filteredEvents.map((event) => event.name));
    setSearchedAttribute(queryParams.get('attributeSearch'));
    setFilteredAttribute(queryParams.get('attribute'));
  }, [queryParams]);

  const { t } = useTranslation();

  return (
    <ErrorBoundary eventName="attributeDictionary">
      <SEO
        location={location}
        type={TYPES.BASIC_PAGE.default}
        title="New Relic data dictionary"
      />
      <div
        css={css`
          display: grid;
          grid-template-areas:
            'page-title page-title'
            'page-description page-tools'
            'content page-tools';
          grid-template-columns: minmax(0, 1fr) 12.8125rem;
          grid-column-gap: 2rem;
          @media (max-width: 1240px) {
            grid-template-areas:
              'page-title'
              'page-description'
              'page-tools'
              'content';
            grid-template-columns: minmax(0, 1fr);
          }
        `}
      >
        <PageTitle>{t('strings.dataDictionary.title')}</PageTitle>
        <div
          css={css`
            grid-area: 'page-description';
          `}
        >
          <div
            css={css`
              color: var(--secondary-text-color);
              font-size: 1.125rem;
              margin-bottom: 1rem;
            `}
          >
            <p>
              <Trans
                i18nKey="strings.dataDictionary.intro"
                components={{
                  1: (
                    <Link to="https://docs.newrelic.com/docs/nrql/get-started/introduction-nrql-how-nrql-works/" />
                  ),
                }}
              />
            </p>
            <p>{t('strings.dataDictionary.introNot.0')}</p>
            <ul>
              <li>{t('strings.dataDictionary.introNot.1')}</li>
              <li>{t('strings.dataDictionary.introNot.2')}</li>
              <li>{t('strings.dataDictionary.introNot.3')}</li>
            </ul>
          </div>

          <hr />
        </div>
        <Layout.Content>
          {events.map((event) => (
            <div
              key={`${event.name}-div`}
              className={filteredEvents.includes(event.name) ? '' : 'hidden'}
              css={css`
                &.hidden {
                  display: none;
                }
              `}
            >
              <EventDefinition
                location={location}
                event={event}
                filteredAttribute={filteredAttribute}
                searchedAttribute={searchedAttribute}
              />
            </div>
          ))}
        </Layout.Content>
        <Layout.PageTools
          css={css`
            @media (max-width: 1240px) {
              position: static;
            }
          `}
        >
          <DataDictionaryFilter events={events} location={location} />
          <ComplexFeedback pageTitle="Attribute dictionary" />
        </Layout.PageTools>
      </div>
    </ErrorBoundary>
  );
};

AttributeDictionary.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

const pluralize = (word, count) => (count === 1 ? word : `${word}s`);

const sortAttributes = (a, b) => {
  const nameA = a.name.toUpperCase();
  const nameB = b.name.toUpperCase();
  if (nameA < nameB) return -1;
  if (nameA > nameB) return 1;
  return 0;
};

const EventDefinition = memo(
  ({ location, event, searchedAttribute, filteredAttribute }) => {
    let filteredAttributes = [];

    if (searchedAttribute) {
      filteredAttributes = event.attributes
        .filter(({ name }) =>
          name.toLowerCase().includes(searchedAttribute.toLowerCase())
        )
        .sort(sortAttributes);
    } else if (filteredAttribute) {
      filteredAttributes = event.attributes
        .filter(({ name }) => name === filteredAttribute)
        .sort(sortAttributes);
    } else {
      filteredAttributes = event.attributes.sort(sortAttributes);
    }

    return (
      <div
        key={`${event.name}-section`}
        css={css`
          &:not(:last-child) {
            margin-bottom: 2rem;
          }
        `}
      >
        <h2
          css={css`
            position: sticky;
            top: var(--global-header-height);
            background: var(--primary-background-color);
            padding: 1rem 0;

            // cover up the right table border
            margin-right: -1px;

            &:hover svg {
              opacity: 1;
            }

            @media (max-width: 1240px) {
              position: initial;
            }
          `}
        >
          <div
            css={css`
              position: relative;
            `}
          >
            {event.name}
            <Link
              to={`${location.pathname}?event=${event.name}`}
              className="anchor after"
            >
              <Icon name="fe-link-2" focusable={false} size="1rem" />
            </Link>
          </div>
        </h2>
        <div
          data-swiftype-index="false"
          css={css`
            margin-bottom: 1rem;
          `}
        >
          <span
            css={css`
              font-size: 0.75rem;
              margin-right: 0.5rem;
            `}
          >
            Data {pluralize('source', event.dataSources.length)}:
          </span>
          <TagList>
            {event.dataSources.map((dataSource) => (
              <Tag
                as={Link}
                to={`${location.pathname}?dataSource=${dataSource.name}`}
                key={dataSource.name}
              >
                {dataSource.name}
              </Tag>
            ))}
          </TagList>
        </div>
        <div
          data-swiftype-index="false"
          dangerouslySetInnerHTML={{ __html: event.definition }}
        />
        <Table data-swiftype-index="false">
          <thead>
            <tr>
              <th
                css={css`
                  white-space: nowrap;
                `}
              >
                Attribute name
              </th>
              <th>Definition</th>
              <th>Data types</th>
            </tr>
          </thead>
          <tbody>
            {filteredAttributes.map((attribute) => {
              const params = new URLSearchParams();
              params.set('event', event.name);
              params.set('attribute', attribute.name);

              return (
                <tr key={`${event.name}-${attribute.name}`}>
                  <td
                    css={css`
                      width: 25%;
                      word-break: break-word;
                    `}
                  >
                    <Link
                      to={`${location.pathname}?${params.toString()}`}
                      css={css`
                        display: flex;
                        align-items: center;
                        color: var(--link-color);
                        text-decoration: none;

                        &:hover svg {
                          opacity: 1;
                        }
                      `}
                    >
                      <code
                        css={css`
                          display: inline-block;
                          background: none !important;
                          padding: 0 !important;
                        `}
                      >
                        {attribute.name}
                      </code>
                      <Icon
                        name="fe-link-2"
                        size="1rem"
                        focusable={false}
                        css={css`
                          margin-left: 0.5rem;
                          opacity: 0;
                          transition: opacity 0.2s ease-out;
                        `}
                      />
                    </Link>
                    {attribute.units?.label && (
                      <div
                        css={css`
                          font-size: 0.75rem;

                          .dark-mode & {
                            color: var(--secondary-text-color);
                          }
                        `}
                      >
                        {attribute.units?.label}
                      </div>
                    )}
                  </td>
                  <td
                    key={`${event.name}-${attribute.name}-def}`}
                    css={css`
                      p:last-child {
                        margin-bottom: 0;
                      }
                    `}
                    dangerouslySetInnerHTML={{
                      __html: attribute.definition,
                    }}
                  />
                  <td
                    css={css`
                      width: 1px;
                    `}
                  >
                    <ul
                      css={css`
                        margin: 0;
                        list-style: none;
                        padding-left: 0;
                        font-size: 0.875rem;
                      `}
                    >
                      {attribute.events.map((event) => (
                        <li key={`${attribute.name}-${event}`}>
                          <Link to={`${location.pathname}?event=${event}`}>
                            {event}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  }
);

EventDefinition.propTypes = {
  event: PropTypes.object.isRequired,
  searchedAttribute: PropTypes.string,
  filteredAttribute: PropTypes.string,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default AttributeDictionary;
