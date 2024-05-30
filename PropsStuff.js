import React from 'react';
import { css } from '@emotion/react';
import PropTypes from 'prop-types';
import PropList from './PropList';

const PropTypeInfo = ({ type }) => {
  switch (type.raw) {
    case 'func':
      return (
        <>
          <h5>REPLACE WITH CUSTOM COMPONENT</h5>
          {type.meta.returnValue.map((value) => (
            <>
              <p>return value type: {value.type}</p>
              <p>return value description: {value.description}</p>
            </>
          ))}
          {type.meta.arguments.map((argument) => (
            <>
              <p>argument name: {argument.name}</p>
              <p>argument type: {argument.type}</p>
              <p>argument description: {argument.description}</p>
            </>
          ))}
        </>
      );
    case 'arrayOf': {
      const { itemTypes } = type.meta;

      return itemTypes.raw === 'oneOf' ? (
        <>
          <h5>REPLACE WITH CUSTOM COMPONENT</h5>
          {`<Array of`}
          <PropTypeInfo type={itemTypes} />
          {`>`}
        </>
      ) : (
        <PropTypeInfo type={itemTypes} />
      );
    }
    case 'oneOf':
      return (
        type.meta.constants.length > 0 && (
          <>
            <h5>REPLACE WITH CUSTOM COMPONENT</h5>

            {`<One of`}
            {type.meta.constants.map((constant) => (
              <div key={constant}>{constant}</div>
            ))}

            {`>`}
          </>
        )
      );
    case 'oneOfType':
      return type.meta.types.map((type, idx) => (
        <PropTypeInfo key={idx} type={type} />
      ));
    case 'shape':
      return (
        <div
          css={css`
            &:not(:last-child) {
              margin-bottom: 4rem;
            }
          `}
        >
          <h3
            css={css`
              color: var(--accent-text-color);
              font-family: var(--code-font);
            `}
          >
            shape
          </h3>
          <PropList
            propTypes={type.meta.types}
            css={css`
              border-bottom: 0 !important;
              padding-bottom: 0 !important;

              &:not(:last-child) {
                margin-bottom: 1rem !important;
              }
            `}
          />
        </div>
      );
    default:
      return null;
  }
};

PropTypeInfo.propTypes = {
  type: PropTypes.shape({
    raw: PropTypes.string.isRequired,
    meta: PropTypes.object,
  }),
};

// PropList.propTypes = {
//   className: PropTypes.string,
//   propTypes: PropTypes.arrayOf(
//     PropTypes.shape({
//       name: PropTypes.string.isRequired,
//       description: PropTypes.string,
//       examples: PropTypes.arrayOf(ReferenceExample.propTypes.example)
//         .isRequired,
//       deprecation: PropTypes.shape({
//         date: PropTypes.string,
//         description: PropTypes.string,
//       }),
//       isRequired: PropTypes.bool,
//       type: PropTypes.shape({
//         ...PropTypeInfo.propTypes.type,
//         name: PropTypes.string.isRequired,
//       }),
//       defaultValue: PropTypes.string,
//     })
//   ),
// };

export default PropTypeInfo;
