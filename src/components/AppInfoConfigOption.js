import React from 'react';
import PropTypes from 'prop-types';
import { SelectInLine } from '@newrelic/gatsby-theme-newrelic';
import MDXContainer from './MDXContainer';

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
  return (
    <div>
      <SelectInLine
        label={select.label}
        onChange={(e) =>
          setPageState({
            ...pageState,
            selectOptions: {
              ...pageState.selectOptions,
              [select.label]: e.target.value,
            },
          })
        }
      >
        {select.options.map((option) => (
          <option key={option.label} value={option.value}>
            {option.displayName}
          </option>
        ))}
      </SelectInLine>

      {mdx && <MDXContainer body={mdx.body} />}
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
