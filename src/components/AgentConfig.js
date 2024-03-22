import React, { useState } from 'react';
import { css } from '@emotion/react';
import PropTypes from 'prop-types';
import {
  CustomTextInput,
  InteractiveOutput,
} from '@newrelic/gatsby-theme-newrelic';
import MDXContainer from './MDXContainer';

const AgentConfig = ({ inputOptions, config, tipMdx, onChange, fileName }) => {
  const [state, setState] = useState([...inputOptions]);
  const { body } = tipMdx;

  const handleChange = (value, idx, name) => {
    setState([
      ...state.slice(0, idx),
      { ...state[idx], value },
      ...state.slice(idx + 1),
    ]);
    onChange({ name, value });
  };

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
              placeholder={defaultValue}
              value={state[idx].value}
              url={url}
              onChange={(e) => handleChange(e.target.value, idx, name)}
              toolTip={toolTip}
              css={css`
                margin-bottom: 1.5rem;
              `}
              containerId="agent-config-codeblock"
            />
          )
        )}
        {body && <MDXContainer body={body} />}
      </div>
      <InteractiveOutput
        inputs={state}
        config={config}
        fileName={fileName}
        containerId="agent-config-codeblock"
        css={css`
          margin-top: 1rem;
          width: 49%;
          @media screen and (max-width: 1000px) {
            width: 100%;
          }

          #agent-config-codeblock {
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
      defaultValue: PropTypes.string.isRequired,
      codeLine: PropTypes.string.isRequired,
      label: PropTypes.string,
      toolTip: PropTypes.string,
      url: PropTypes.shape({ title: PropTypes.string, href: PropTypes.string }),
    })
  ),
  config: PropTypes.string,
  tipMdx: PropTypes.node,
  onChange: PropTypes.func,
};

export default AgentConfig;
