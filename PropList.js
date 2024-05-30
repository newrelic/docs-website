import React from 'react';
import Markdown from './Markdown';
import PropTypeInfo from './PropsStuff';

const PropList = ({ propTypes }) => {
  return (
    <table>
      {propTypes.map((prop) => (
        <tr>
          <td>
            <code>{prop.name}</code>
            {prop.deprecation && <h5>DEPRECATED</h5>}
            {prop.isRequired && <h5>REQUIRED</h5>}
            <h5>{prop.type.name}</h5>
          </td>
          <td>
            {prop.deprecation &&
              `<Callout
              variant="caution"
              title={Due ${prop.deprecation.date}}
            >
              ${prop.deprecation.description}
            </Callout>`}
            <Markdown>{prop.description}</Markdown>
            {prop.type.raw}
            <PropTypeInfo type={prop.type} />
          </td>
        </tr>
      ))}
    </table>
  );
};

export default PropList;
