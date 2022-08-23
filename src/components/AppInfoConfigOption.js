import React from 'react';
import PropTypes from 'prop-types';
import MDXContainer from './MDXContainer';
import TileSelect from './TileSelect';

const AppInfoConfigOption = ({
  optionType,
  selectOptions,
  pageState,
  setPageState,
  mdx,
}) => {
  const select = selectOptions.find(
    (select) => select.optionType === optionType
  );

  const { body } = mdx;
  return (
    <div>
      <TileSelect
        label={select.label}
        onChange={(value) =>
          setPageState({
            ...pageState,
            selectOptions: {
              ...pageState.selectOptions,
              [select.optionType]: value,
            },
          })
        }
        value={pageState.selectOptions[select.optionType]}
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
  setPageState: PropTypes.func.isRequired,
  mdx: PropTypes.object,
  optionType: PropTypes.string.isRequired,
};

export default AppInfoConfigOption;
