import React from 'react';
import PropTypes from 'prop-types';
import { SelectInLine } from '@newrelic/gatsby-theme-newrelic';
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

const AppInfoConfig = ({ selectOptions, pageState, setPageState, mdx }) => {
  const { body } = mdx;
  return (
    <div>
      {selectOptions.map((select) => {
        return (
          <SelectInLine
            key={`${select.label}${select.optionType}`}
            label={select.label}
            onChange={(e) =>
              setPageState({
                ...pageState,
                selectOptions: {
                  ...pageState.selectOptions,
                  [select.optionType]: e.target.value,
                },
              })
            }
            value={pageState.selectOptions[select.optionType]}
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
      {body && <MDXContainer body={body} />}
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
