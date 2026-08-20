import React from 'react';
import PropTypes from 'prop-types';
import ConfigBuilder from './ConfigBuilder';

const otelConfigTransform = (config) =>
  config.replace(/^\s{2}([a-z][a-z0-9_]*):(\s*)$/gm, '$1:$2');

const OtelConfig = (props) => (
  <ConfigBuilder
    {...props}
    containerId="otel-config-codeblock"
    configTransform={otelConfigTransform}
  />
);

OtelConfig.propTypes = {
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

export default OtelConfig;
