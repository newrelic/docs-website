import React from 'react';
import PropTypes from 'prop-types';
import { SelectInLine, useQueryParams } from '@newrelic/gatsby-theme-newrelic';
import MDXContainer from './MDXContainer';

const AppInfoConfigOption = ({ optionType, selectOptions, mdx }) => {
  const { queryParams, setQueryParam, deleteQueryParam } = useQueryParams();
  const select = selectOptions.find(
    (select) => select.optionType === optionType
  );

  const handleChange = (e) => {
    const value = e.target.value;
    if (value) {
      setQueryParam(select.optionType, value);
    } else {
      deleteQueryParam(select.optionType, value);
    }
  };

  const { body } = mdx;
  return (
    <div>
      <SelectInLine
        label={select.label}
        onChange={handleChange}
        value={
          queryParams.has(select.optionType)
            ? queryParams.get(select.optionType)
            : null
        }
      >
        {select.options.map((option) => (
          <option key={optionType + option.value} value={option.value}>
            {option.displayName}
          </option>
        ))}
      </SelectInLine>

      {body && <MDXContainer body={body} />}
    </div>
  );
};

AppInfoConfigOption.propTypes = {
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
  ).isRequired,
  mdx: PropTypes.object,
  optionType: PropTypes.string.isRequired,
};

export default AppInfoConfigOption;
