import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import FunctionDefinition from './FunctionDefinition';
import Markdown from './Markdown';
import { MDXCodeBlock } from '@newrelic/gatsby-theme-newrelic';

const MethodReference = ({ className, method }) => {
  return (
    <div className={className}>
      <h3>
        <code>{method.name}</code>
      </h3>
      {method.description && method.description !== 'undefined' && (
        <Markdown
          source={method.description}
          css={css`
            margin-bottom: 1rem;
          `}
        />
      )}
      {`<FunctionDefinition
        arguments={${JSON.stringify(method.arguments)}}
        returnValue={${JSON.stringify(method.returnValue)}}
      />`}
      {method.examples.map((example, i) => (
        <MDXCodeBlock key={i}>{example.sourceCode}</MDXCodeBlock>
      ))}
    </div>
  );
};

MethodReference.propTypes = {
  className: PropTypes.string,
  method: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    arguments: FunctionDefinition.propTypes.params,
    returnValue: FunctionDefinition.propTypes.returnValue,
  }),
};

export default MethodReference;
