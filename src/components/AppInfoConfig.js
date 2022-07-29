import React from 'react';
import PropTypes from 'prop-types';
import { SelectInLine } from '@newrelic/gatsby-theme-newrelic';
import MDXContainer from './MDXContainer';

const AppInfoConfig = ({ selectOptions, setPageState, mdx }) => {
  return (
    <div>
      {selectOptions.map((select) => {
        return (
          <SelectInLine
            key={select.label}
            label={select.label}
            onChange={(e) => setPageState(e.targetvalue)}
          >
            {select.options.map((option) => (
              <option key={option.label} value={option.value}>
                {option.displayName}
              </option>
            ))}
          </SelectInLine>
        );
      })}
      {mdx && <MDXContainer body={mdx} />}
    </div>
  );
};

AppInfoConfig.propTypes = {
  selectOptions: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      options: PropTypes.arrayOf(
        PropTypes.shape({
          value: PropTypes.string,
          displayName: PropTypes.string,
        })
      ),
    })
  ),
  setPageState: PropTypes.func,
  mdx: PropTypes.node,
};

export default AppInfoConfig;
