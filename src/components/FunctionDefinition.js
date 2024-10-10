import React from 'react';
import PropTypes from 'prop-types';
import CodeDef from './CodeDef';

const FunctionDefinition = ({ className, arguments: params, returnValue }) => {
  const hasParams = params.length;
  const isReturnArray = Array.isArray(returnValue);
  const hasReturn =
    (isReturnArray && returnValue.length) || (!isReturnArray && returnValue);

  if (!hasParams && !hasReturn) {
    return null;
  }

  if (!Array.isArray(returnValue)) {
    returnValue = [returnValue];
  }

  return (
    <CodeDef className={className}>
      <CodeDef.Keyword>function</CodeDef.Keyword>{' '}
      <CodeDef.Bracket>{params.length > 0 ? '(' : '()'}</CodeDef.Bracket>
      {params.length > 0 && (
        <CodeDef.Block>
          {params.map((param, i) => (
            <div key={i}>
              <CodeDef.Identifier>
                {param.type.startsWith('...') ? `...${param.name}` : param.name}
                :{' '}
              </CodeDef.Identifier>
              <CodeDef.Type>{param.type}</CodeDef.Type>
              {i !== params.length - 1 ? ', ' : ' '}
              <CodeDef.Comment text={param.description} />
            </div>
          ))}
        </CodeDef.Block>
      )}
      {params.length > 0 && <CodeDef.Bracket>)</CodeDef.Bracket>}
      {returnValue.length > 0 && (
        <>
          <CodeDef.Operator> =&gt; </CodeDef.Operator>
          <CodeDef.Type>{returnValue[0].type}</CodeDef.Type>
        </>
      )}
    </CodeDef>
  );
};

const ReturnValueType = PropTypes.shape({
  type: PropTypes.string,
  description: PropTypes.string,
});

FunctionDefinition.propTypes = {
  className: PropTypes.string,
  arguments: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      type: PropTypes.string,
      description: PropTypes.string,
    })
  ).isRequired,
  returnValue: PropTypes.oneOfType([
    ReturnValueType,
    PropTypes.arrayOf(ReturnValueType),
  ]).isRequired,
};

export default FunctionDefinition;
