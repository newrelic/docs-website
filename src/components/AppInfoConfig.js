import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { useQueryParams } from '@newrelic/gatsby-theme-newrelic';
import TileSelect from './TileSelect';
import MDXContainer from './MDXContainer';

const AppInfoConfig = ({ selectOptions, mdx }) => {
  const { body } = mdx;
  const [showGuided, setShowGuided] = useState(false);

  const { queryParams, setQueryParam, deleteQueryParam } = useQueryParams();

  const handleChange = (value, select) => {
    if (value !== null || value !== undefined) {
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
          <TileSelect
            key={`${select.label}${select.optionType}`}
            options={select.options}
            onChange={(value) => handleChange(value, select)}
            value={
              queryParams.has(select.optionType)
                ? queryParams.get(select.optionType)
                : null
            }
            label={select.label}
            placeholder={select.placeholder}
          />
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
