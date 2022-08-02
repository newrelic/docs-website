import React, { useState } from 'react';
import { css } from '@emotion/react';
import PropTypes from 'prop-types';
import {
  Callout,
  CustomTextInput,
  InteractiveOutput,
} from '@newrelic/gatsby-theme-newrelic';
import MDXContainer from './MDXContainer';

const AgentConfig = ({ inputOptions, config, tipMdx }) => {
  const [state, setState] = useState([...inputOptions]);

  return (
    <div
      css={css`
        display: flex;
        justify-content: space-between;
        width: 100%;
        position: relative;
        @media screen and (max-width: 1000px) {
          flex-direction: column;
        }
      `}
    >
      <div
        css={css`
          width: 49%;
          @media screen and (max-width: 1000px) {
            width: 100%;
          }
        `}
      >
        {inputOptions.map(
          ({ name, label, codeLine, defaultValue, toolTip, url }, idx) => (
            <CustomTextInput
              name={name}
              key={name}
              label={label}
              codeLine={parseInt(codeLine)}
              defaultValue={defaultValue}
              value={state[idx].value}
              url={url}
              onChange={(e) =>
                setState([
                  ...state.slice(0, idx),
                  { ...state[idx], value: e.target.value },
                  ...state.slice(idx + 1),
                ])
              }
              toolTip={toolTip}
              css={css`
                margin-bottom: 1.5rem;
              `}
            />
          )
        )}
        {tipMdx && (
          <Callout variant={Callout.VARIANT.TIP}>
            <MDXContainer body={tipMdx} />
          </Callout>
        )}
      </div>
      <InteractiveOutput
        inputs={state}
        config={config}
        css={css`
          margin-top: 1rem;
          width: 49%;
          @media screen and (max-width: 1000px) {
            width: 100%;
          }

          #codeblock {
            // removing the height of the buttons at the top or it overflows
            max-height: calc(100% - 50px);
          }
          > div {
            height: calc(100% - 16px);
            position: absolute;
            width: inherit;
            @media screen and (max-width: 1000px) {
              position: relative;
              height: 400px;
            }
          }
        `}
      />
    </div>
  );
};

AgentConfig.propTypes = {
  inputOptions: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      defaultName: PropTypes.string.isRequired,
      codeLine: PropTypes.number.isRequired,
      label: PropTypes.string,
      value: PropTypes.string.isRequired,
      toolTip: PropTypes.string,
      url: PropTypes.shape({ title: PropTypes.string, href: PropTypes.string }),
    })
  ),
  config: PropTypes.string,
  tipMdx: PropTypes.node,
};

export default AgentConfig;
