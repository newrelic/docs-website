import React from 'react';
import PropTypes from 'prop-types';
import { useQueryParams } from '@newrelic/gatsby-theme-newrelic';
import MDXContainer from './MDXContainer';
import TileSelect from './TileSelect';

const AppInfoConfigOption = ({ optionType, selectOptions, mdx }) => {
  const { queryParams, setQueryParam, deleteQueryParam } = useQueryParams();
  const select = selectOptions.find(
    (select) => select.optionType === optionType
  );

  const handleChange = (value) => {
    if (value !== null || value !== undefined) {
      setQueryParam(select.optionType, value);
    } else {
      deleteQueryParam(select.optionType, value);
    }
  };

  const { body } = mdx;
  return (
    <div>
      <TileSelect
        label={select.label}
        onChange={handleChange}
        value={
          queryParams.has(select.optionType)
            ? queryParams.get(select.optionType)
            : null
        }
        options={select.options}
        placeholder={select.placeholder}
      />

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
