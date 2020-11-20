import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { graphql } from 'gatsby';
import {
  PageTools,
  Button,
  useQueryParams,
} from '@newrelic/gatsby-theme-newrelic';
import Select from './Select';
import { useNavigate } from '@reach/router';

const uniq = (arr) => [...new Set(arr)];

const DataDictionaryFilter = ({ events }) => {
  const navigate = useNavigate();
  const { queryParams } = useQueryParams();
  const [formState, setFormState] = useState(() => ({
    dataSource: queryParams.get('dataSource'),
    event: queryParams.get('event'),
    attribute: queryParams.get('attribute'),
  }));

  const dataSources = useMemo(
    () =>
      uniq(events.flatMap((event) => event.dataSources)).sort((a, b) =>
        a.localeCompare(b)
      ),
    [events]
  );

  useEffect(() => {
    setFormState({
      dataSource: queryParams.get('dataSource'),
      event: queryParams.get('event'),
      attribute: queryParams.get('attribute'),
    });
  }, [queryParams]);

  const filteredEvents = useMemo(
    () =>
      formState.dataSource
        ? events.filter((event) =>
            event.dataSources.includes(formState.dataSource)
          )
        : events,
    [events, formState.dataSource]
  );

  const selectedEvent = formState.event
    ? events.find((event) => event.name === formState.event)
    : null;

  const navigateToParams = (params) => {
    Object.entries(params).forEach(([key, value]) => {
      value ? queryParams.set(key, value) : queryParams.delete(key);
    });

    navigate(`?${queryParams}`);
  };

  return (
    <PageTools.Section>
      <PageTools.Title>Filter data types</PageTools.Title>
      <FormControl>
        <Label htmlFor="dataSourceFilter">Data source</Label>
        <Select
          id="dataSourceFilter"
          value={formState.dataSource || ''}
          onChange={(e) => {
            const { value } = e.target;

            setFormState((state) => ({
              ...state,
              event: null,
              dataSource: value,
            }));
          }}
        >
          <option value="">All</option>
          {dataSources.map((dataSource) => (
            <option key={dataSource} value={dataSource}>
              {dataSource}
            </option>
          ))}
        </Select>
      </FormControl>
      <FormControl>
        <Label htmlFor="eventFilter">Event type</Label>
        <Select
          id="eventFilter"
          value={formState.event || ''}
          onChange={(e) => {
            const { value } = e.target;

            setFormState((state) => ({ ...state, event: value }));
          }}
        >
          <option value="">All</option>
          {filteredEvents.map((event) => (
            <option key={event.name} value={event.name}>
              {event.name}
            </option>
          ))}
        </Select>
      </FormControl>
      <FormControl>
        <Label htmlFor="attributeFilter">Attribute</Label>
        <Select
          id="attributeFilter"
          value={formState.attribute || ''}
          disabled={!selectedEvent}
          onChange={(e) => {
            const { value } = e.target;

            setFormState((state) => ({ ...state, attribute: value }));
          }}
        >
          <option value="">All</option>
          {selectedEvent?.childrenDataDictionaryAttribute.map((attribute) => (
            <option key={attribute.name} value={attribute.name}>
              {attribute.name}
            </option>
          ))}
        </Select>
      </FormControl>
      <FormControl>
        <Button
          variant={Button.VARIANT.PRIMARY}
          onClick={() => {
            navigateToParams(formState);
          }}
        >
          Apply
        </Button>
        <Button
          variant={Button.VARIANT.LINK}
          onClick={() => {
            const formState = {
              event: null,
              dataSource: null,
              attribute: null,
            };

            setFormState(formState);
            navigateToParams(formState);
          }}
        >
          Reset
        </Button>
      </FormControl>
    </PageTools.Section>
  );
};

export const query = graphql`
  fragment DataDictionaryFilter_events on DataDictionaryEvent {
    name
    dataSources
    childrenDataDictionaryAttribute {
      name
    }
  }
`;

DataDictionaryFilter.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    })
  ).isRequired,
};

const Label = ({ children, htmlFor }) => (
  <label
    htmlFor={htmlFor}
    css={css`
      display: block;
      font-size: 0.875rem;
      font-weight: 600;
      margin-bottom: 0.25rem;
    `}
  >
    {children}
  </label>
);

Label.propTypes = {
  children: PropTypes.node,
  htmlFor: PropTypes.string,
};

const FormControl = ({ children }) => (
  <div
    css={css`
      &:not(:last-child) {
        margin-bottom: 1.5rem;
      }
    `}
  >
    {children}
  </div>
);

FormControl.propTypes = {
  children: PropTypes.node,
};

export default DataDictionaryFilter;
