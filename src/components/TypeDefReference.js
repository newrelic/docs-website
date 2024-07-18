import React from 'react';
import PropTypes from 'prop-types';
import CodeDef from './CodeDef';

const TypeDefReference = ({ className, typeDef }) => {
  const { properties, name } = typeDef;

  return (
    <div className={className}>
      <h3>
        <code>{name}</code>
      </h3>
      <CodeDef>
        <CodeDef.Bracket>{'{'}</CodeDef.Bracket>
        <CodeDef.Block>
          {properties.map((property) => (
            <div key={property.name}>
              <CodeDef.Identifier>{property.name}: </CodeDef.Identifier>
              <CodeDef.Type>{property.type}</CodeDef.Type>,{' '}
              <CodeDef.Comment text={property.description} />
            </div>
          ))}
        </CodeDef.Block>
        <CodeDef.Bracket>{'}'}</CodeDef.Bracket>
      </CodeDef>
    </div>
  );
};

TypeDefReference.propTypes = {
  className: PropTypes.string,
  typeDef: PropTypes.shape({
    properties: PropTypes.array,
    name: PropTypes.string,
  }),
};

export default TypeDefReference;
