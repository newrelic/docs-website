import React from 'react';
import PropTypes from 'prop-types';
import MDXContainer from './MDXContainer';
import TileSelect from './TileSelect';

const AppInfoConfigOption = ({
  optionType,
  selectOptions,
  mdx,
  onChange,
  showGuided,
}) => {
  const select = selectOptions.find(
    (select) => select.optionType === optionType
  );

  const { body } = mdx;
  return (
    <div>
      <TileSelect
        label={select.label}
        onChange={(value) => onChange(value, select)}
        value={select.value}
        options={select.options}
        placeholder={select.placeholder}
        defaultOpen={!select.value}
      />

      {showGuided && body && <MDXContainer body={body} />}
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
  showGuided: PropTypes.bool,
};

export default AppInfoConfigOption;
