import React from 'react';
import PropTypes from 'prop-types';
import { useQueryParams } from '@newrelic/gatsby-theme-newrelic';
import MDXContainer from './MDXContainer';
import TileSelect from './TileSelect';

const AppInfoConfigOption = ({ optionType, selectOptions, mdx, onChange }) => {
  const { queryParams } = useQueryParams();
  const select = selectOptions.find(
    (select) => select.optionType === optionType
  );

  const { body } = mdx;
  return (
    <div>
      <TileSelect
        label={select.label}
        onChange={(value) => onChange(value, select)}
        value={
          queryParams.has(select.optionType)
            ? queryParams.get(select.optionType)
            : null
        }
        options={select.options}
        placeholder={select.placeholder}
        defaultOpen={!queryParams.has(select.optionType)}
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
  onChange: PropTypes.func.isRequired,
};

export default AppInfoConfigOption;
