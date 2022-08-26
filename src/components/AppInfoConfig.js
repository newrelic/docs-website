import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { useQueryParams } from '@newrelic/gatsby-theme-newrelic';
import TileSelect from './TileSelect';
import MDXContainer from './MDXContainer';

const AppInfoConfig = ({ selectOptions, mdx, onChange, showGuided }) => {
  const { body } = mdx;

  const { queryParams } = useQueryParams();

  return (
    <div>
      {selectOptions.map((select) => {
        return (
          <TileSelect
            key={`${select.label}${select.optionType}`}
            options={select.options}
            onChange={(value) => onChange(value, select)}
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
  showGuided: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

export default AppInfoConfig;
