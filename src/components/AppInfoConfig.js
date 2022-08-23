import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import TileSelect from './TileSelect';
import MDXContainer from './MDXContainer';

// This is an example of creating state in the main page where we can read the value of a select
//
// const selectTest = [
//   {
//     label: 'test',
//     options: [
//       { value: 'banana', displayName: 'Banana' },
//       { value: 'taco', displayName: 'Taco' },
//     ],
//   },
//   {
//     label: 'test2',
//     options: [
//       { value: 'banana2', displayName: 'Banana2' },
//       { value: 'taco2', displayName: 'Taco2' },
//     ],
//   },
// ];
// const selectInputInitialState = selectTest.reduce((acc, select) => {
//   acc = { ...acc, [select.label]: select.options[0].value };
//   return acc;
// }, {});

// const [pageState, setPageState] = useState({
//   selectOptions: selectInputInitialState,
// });

// if selectOptions has recommendedGuided,

const AppInfoConfig = ({ selectOptions, pageState, setPageState, mdx }) => {
  const { body } = mdx;
  const [showGuided, setShowGuided] = useState(false);

  const handleChange = (value, select) => {
    setPageState({
      ...pageState,
      selectOptions: {
        ...pageState.selectOptions,
        [select.optionType]: value,
      },
    });
    const recommendedGuided = select.options.some(
      (option) => option.value === value && option.recommendedGuided === true
    );
    setShowGuided(recommendedGuided);
  };

  return (
    <div>
      {selectOptions.map((select) => {
        return (
          <TileSelect
            key={`${select.label}${select.optionType}`}
            options={select.options}
            onChange={(value) => handleChange(value, select)}
            value={pageState.selectOptions[select.optionType]}
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
  setPageState: PropTypes.func,
  mdx: PropTypes.object,
};

export default AppInfoConfig;
