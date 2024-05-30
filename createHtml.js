import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import componentJson from './sdkcomponents.json';
import { saveAs } from 'file-saver';
import Markdown from './Markdown';
import PropList from './PropList';
import { MDXCodeBlock, Callout } from '@newrelic/gatsby-theme-newrelic';

const components = componentJson.data.allNewRelicSdkComponent.nodes;

const makeHTML = (components) => {
  const htmlstring = `<pre>${components[0].examples[0].sourceCode}</pre>`;
};

const Tada = () => {
  const allhtml = components.map((component, i) => {
    // console.log({ index: i, component });
    return renderToStaticMarkup(<Ohlala component={component} />);
  });

  console.log('HELLOOOOO', allhtml);

  // console.log(
  //   'HELLOOOOO',
  //   components.length,
  //   renderToStaticMarkup(<Ohlala component={components[54]} />)
  // );

  // const downloadAll = allhtml.forEach((html, i) => {
  //   const blob = new Blob([html], { type: 'html' });
  //   saveAs(blob, `test${i}.html`);
  // });

  return (
    <div>
      {/* <p
        onClick={() => {
          console.log('hi');
        }}
      >
        hi!
      </p> */}
      {/* {components.map((component) => (
        <Ohlala component={component} />
      ))} */}
      <Ohlala component={components[54]} />
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
      {examples && (
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
      {propTypes && (
        <>
          <h3>Props</h3>
          <PropList propTypes={propTypes} />
        </>
      )}
      {methods && (
        <>
          <h3>Methods</h3>
        </>
      )}
      {typeDefs && (
        <>
          <h3>Type definitions</h3>
        </>
      )}
    </div>
  );
};

export default Tada;
