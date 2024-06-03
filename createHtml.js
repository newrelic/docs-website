import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import componentJson from './sdkcomponents.json';
import { saveAs } from 'file-saver';
import Markdown from './Markdown';
import PropList from './PropList';
import { MDXCodeBlock, Callout } from '@newrelic/gatsby-theme-newrelic';
import MethodReference from './MethodReference';
import TypeDefReference from './TypeDefReference';

const components = componentJson.data.allNewRelicSdkComponent.nodes;

const makeHTML = (components) => {
  const htmlstring = `<pre>${components[0].examples[0].sourceCode}</pre>`;
};

const Tada = () => {
  const allhtml = components.map((component, i) => {
    // console.log({ index: i, component });
    return {
      name: component.name,
      html: renderToStaticMarkup(<Ohlala component={component} />),
    };
  });

  // console.log('HELLOOOOO', allhtml);

  console.log(allhtml[0]);

  const downloadAll = () =>
    allhtml.slice(90, 100).forEach((component, i) => {
      console.log('DOWNLOADING:', i);
      const blob = new Blob([component.html], { type: 'html' });
      return saveAs(blob, `${component.name}.html`);
    });

  return (
    <div>
      <button onClick={downloadAll}>hi!</button>
      {components.map((component) => (
        <Ohlala component={component} />
      ))}
      {/* <Ohlala component={components[54]} /> */}
    </div>
  );
};

const Ohlala = ({ component }) => {
  const {
    name,
    description: componentDescription,
    usage,
    examples,
    methods,
    typeDefs,
    propTypes,
  } = component;
  return (
    <div>
      <h2>{name}</h2>
      {componentDescription && <Markdown>{componentDescription}</Markdown>}
      <h3>Usage</h3>
      <MDXCodeBlock>{usage}</MDXCodeBlock>
      {examples.length > 0 && (
        <>
          <h3>Examples</h3>
          {examples.map((example, i) => (
            <>
              <h4>{example.label}</h4>
              <MDXCodeBlock key={i}>{example.sourceCode}</MDXCodeBlock>
            </>
          ))}
        </>
      )}
      {propTypes.length > 0 && (
        <>
          <h3>Props</h3>
          <PropList propTypes={propTypes} />
        </>
      )}
      {methods.length > 0 && (
        <>
          <h3>Methods</h3>
          {methods.map((method) => (
            <MethodReference method={method} />
          ))}
        </>
      )}
      {typeDefs.length > 0 && (
        <>
          <h3>Type definitions</h3>
          {typeDefs.map(
            (typeDef) =>
              `<TypeDefReference typeDef={${JSON.stringify(typeDef)}} />`
          )}
        </>
      )}
    </div>
  );
};

export default Tada;
