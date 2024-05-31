import React from 'react';
import Markdown from './Markdown';
import PropTypeInfo from './PropsStuff';
import { MDXCodeBlock } from '@newrelic/gatsby-theme-newrelic';

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
            <PropTypeInfo type={prop.type} />
            {prop.examples &&
              prop.examples.map((example) => (
                <MDXCodeBlock>{example.sourceCode}</MDXCodeBlock>
              ))}
          </td>
        </tr>
      ))}
    </table>
  );
};

export default PropList;
