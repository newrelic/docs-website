import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { graphql } from 'gatsby';
import { PageTools, Button } from '@newrelic/gatsby-theme-newrelic';
import Select from './Select';

const uniq = (arr) => [...new Set(arr)];

const DataDictionaryFilter = ({ events, location, navigate }) => {
  const params = useMemo(() => new URLSearchParams(location.search), [
    location.search,
  ]);

  return (
    <PageTools.Section>
      <PageTools.Title>Filter data types</PageTools.Title>
      <FormControl>
        <Label htmlFor="dataSourceFilter">Data source</Label>
        <Select id="dataSourceFilter">
          <option value="">All</option>
          {uniq(events.flatMap((event) => event.dataSources)).map(
            (dataSource) => (
              <option key={dataSource} value={dataSource}>
                {dataSource}
              </option>
            )
          )}
        </Select>
      </FormControl>
      <FormControl>
        <Label htmlFor="eventFilter">Event type</Label>
        <Select id="eventFilter">
          <option value="">All</option>
          {events.map((event) => (
            <option key={event.name} value={event.name}>
              {event.name}
            </option>
          ))}
        </Select>
      </FormControl>
      <FormControl>
        <Label htmlFor="attributeFilter">Attribute</Label>
        <Select id="attributeFilter" disabled>
          <option value="">All</option>
        </Select>
      </FormControl>
      <FormControl>
        <Button variant={Button.VARIANT.PRIMARY}>Apply</Button>
        <Button variant={Button.VARIANT.LINK}>Reset</Button>
      </FormControl>
    </PageTools.Section>
  );
};

export const query = graphql`
  fragment DataDictionaryFilter_events on DataDictionaryEvent {
    name
    dataSources
  }
`;

DataDictionaryFilter.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    })
  ).isRequired,
  location: PropTypes.object.isRequired,
  navigate: PropTypes.func.isRequired,
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
