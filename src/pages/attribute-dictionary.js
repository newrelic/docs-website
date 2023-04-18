import React, { memo, useMemo, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { graphql } from 'gatsby';
import {
  ContributingGuidelines,
  Layout,
  Link,
  Tag,
  TagList,
  useQueryParams,
  Icon,
  useTranslation,
  ComplexFeedback,
  Table,
} from '@newrelic/gatsby-theme-newrelic';
import { TYPES } from '../utils/constants';

import DataDictionaryFilter from '../components/DataDictionaryFilter';
import SEO from '../components/SEO';
import PageTitle from '../components/PageTitle';

const AttributeDictionary = ({ data, pageContext, location }) => {
  const { allDataDictionaryEvent } = data;

  const [filteredEvents, setFilteredEvents] = useState([]);
  const [filteredAttribute, setFilteredAttribute] = useState(null);
  const [searchedAttribute, setSearchedAttribute] = useState(null);
  const { queryParams } = useQueryParams();

  if (typeof window !== 'undefined' && typeof newrelic === 'object') {
    window.newrelic.setCustomAttribute(
      'pageType',
      'Interactive/AttributeDictionary'
    );
  }

  const events = useMemo(
    () => allDataDictionaryEvent.edges.map((edge) => edge.node),
    [allDataDictionaryEvent]
  );

  useEffect(() => {
    let filteredEvents = events;

    if (queryParams.has('dataSource')) {
      filteredEvents = filteredEvents.filter((event) =>
        event.dataSources.includes(queryParams.get('dataSource'))
      );
    }

    if (queryParams.has('event')) {
      filteredEvents = filteredEvents.filter(
        (event) => event.name === queryParams.get('event')
      );
    }

    if (queryParams.has('attributeSearch')) {
      filteredEvents = filteredEvents.filter((event) =>
        event.childrenDataDictionaryAttribute.some(({ name }) =>
          name
            .toLowerCase()
            .includes(queryParams.get('attributeSearch').toLowerCase())
        )
      );
    }

    setFilteredEvents(filteredEvents.map((event) => event.name));
    setSearchedAttribute(queryParams.get('attributeSearch'));
    setFilteredAttribute(queryParams.get('attribute'));
  }, [queryParams, events]);

  const { t } = useTranslation();

  return (
    <>
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
          grid-template-columns: minmax(0, 1fr) 205px;
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
        <PageTitle>{t('dataDictionary.title')}</PageTitle>
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
            <p>{t('dataDictionary.intro')}</p>
            <p>{t('dataDictionary.introNot.0')}</p>
            <ul>
              <li>{t('dataDictionary.introNot.1')}</li>
              <li>{t('dataDictionary.introNot.2')}</li>
              <li>{t('dataDictionary.introNot.3')}</li>
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
          <ComplexFeedback title="Attribute dictionary" />
          <ContributingGuidelines
            fileRelativePath={pageContext.fileRelativePath}
            issueLabels={['feedback', 'feedback-issue']}
          />
        </Layout.PageTools>
      </div>
    </>
  );
};

AttributeDictionary.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

const pluralize = (word, count) => (count === 1 ? word : `${word}s`);

const EventDefinition = memo(
  ({ location, event, searchedAttribute, filteredAttribute }) => {
    let filteredAttributes = [];

    if (searchedAttribute) {
      filteredAttributes = event.childrenDataDictionaryAttribute.filter(
        ({ name }) =>
          name.toLowerCase().includes(searchedAttribute.toLowerCase())
      );
    } else if (filteredAttribute) {
      filteredAttributes = event.childrenDataDictionaryAttribute.filter(
        ({ name }) => name === filteredAttribute
      );
    } else {
      filteredAttributes = event.childrenDataDictionaryAttribute;
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
            <Link
              to={`${location.pathname}?event=${event.name}`}
              className="anchor before"
            >
              <Icon name="fe-link-2" focusable={false} size="1rem" />
            </Link>
            <code
              css={css`
                background: none !important;
                padding: 0 !important;
              `}
            >
              {event.name}
            </code>
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
                to={`${location.pathname}?dataSource=${dataSource}`}
                key={dataSource}
              >
                {dataSource}
              </Tag>
            ))}
          </TagList>
        </div>
        <div
          data-swiftype-index="false"
          dangerouslySetInnerHTML={{ __html: event.definition?.html }}
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
                      width: 40%;
                      word-break: break-all;
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
                    {attribute.units && (
                      <div
                        css={css`
                          font-size: 0.75rem;

                          .dark-mode & {
                            color: var(--secondary-text-color);
                          }
                        `}
                      >
                        {attribute.units}
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
                      __html: attribute.definition.html,
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
                        <li key={`${attribute.name}-${event.name}`}>
                          <Link to={`${location.pathname}?event=${event.name}`}>
                            {event.name}
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

export const pageQuery = graphql`
  query {
    allDataDictionaryEvent(sort: { fields: [name] }) {
      edges {
        node {
          name
          dataSources
          definition {
            html
          }
          childrenDataDictionaryAttribute {
            name
            units
            definition {
              html
            }
            events {
              name
            }
          }
          ...DataDictionaryFilter_events
        }
      }
    }
  }
`;

export default AttributeDictionary;
