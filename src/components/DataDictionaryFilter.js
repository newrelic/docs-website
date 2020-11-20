import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { PageTools } from '@newrelic/gatsby-theme-newrelic';

const DataDictionaryFilter = ({ events }) => (
  <PageTools.Section>
    <PageTools.Title>Filter data types</PageTools.Title>
    <div>
      <label htmlFor="event-type-filter">Event type</label>
      <select id="event-type-filter">
        <option value="">All</option>
        {events.map((event) => (
          <option key={event.name} value={event.name}>
            {event.name}
          </option>
        ))}
      </select>
    </div>
  </PageTools.Section>
);

export const query = graphql`
  fragment DataDictionaryFilter_events on DataDictionaryEvent {
    name
  }
`;

DataDictionaryFilter.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    })
  ).isRequired,
};

export default DataDictionaryFilter;
