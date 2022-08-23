import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { SelectInLine, useQueryParams } from '@newrelic/gatsby-theme-newrelic';
import MDXContainer from './MDXContainer';

const AppInfoConfig = ({ selectOptions, mdx }) => {
  const { body } = mdx;
  const [showGuided, setShowGuided] = useState(false);

  const { queryParams, setQueryParam, deleteQueryParam } = useQueryParams();

  const handleChange = (e, select) => {
    const value = e.target.value;
    if (value) {
      setQueryParam(select.optionType, value);
      const recommendedGuided = select.options.some(
        (option) => option.value === value && option.recommendedGuided === true
      );
      setShowGuided(recommendedGuided);
    } else {
      deleteQueryParam(select.optionType, value);
    }
  };

  return (
    <div>
      {selectOptions.map((select) => {
        return (
          <SelectInLine
            key={`${select.label}${select.optionType}`}
            label={select.label}
            onChange={(e) => handleChange(e, select)}
            value={
              queryParams.has(select.optionType)
                ? queryParams.get(select.optionType)
                : null
            }
          >
            {select.options.map((option) => (
              <option
                key={`${select.optionType}${option.value}`}
                value={option.value}
              >
                {option.displayName}
              </option>
            ))}
          </SelectInLine>
        );
      })}
      <div
        css={css`
          margin-top: 2rem;
        `}
      >
        {showGuided && body && <MDXContainer body={body} />}
      </div>
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
  mdx: PropTypes.object,
};

export default AppInfoConfig;
