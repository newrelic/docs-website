import React from 'react';
import PropTypes from 'prop-types';
import ConfigBuilder from './ConfigBuilder';

const AgentConfig = (props) => (
  <ConfigBuilder {...props} containerId="agent-config-codeblock" />
);

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
