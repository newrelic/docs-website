/* @jsx mdx */
import React from 'react';
import { mdx } from '@mdx-js/react';


const makeShortcode = name => function MDXDefaultShortcode(props) {
  console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope")
  return <div {...props}/>
};

const MDXLayout = "wrapper"
export default function RawContent({
  components,
  ...props
}) {
  return <MDXLayout {...props} components={components} mdxType="MDXLayout">
    {
      /* PROPS: agentName="Node.js" */
    }
    <h2>{`Prerequisites for APM `}
      {props.agentName}</h2>
    <ul>

      <li {...{
        "parentName": "ul"
      }}><strong {...{
          "parentName": "li"
        }}>{props.agentName}
          {` Version:`}</strong>
        {` 14.x or higher`}</li>


      <li {...{
        "parentName": "ul"
      }}><strong {...{
          "parentName": "li"
        }}>{`NPM:`}</strong>
        {` 6.x or higher`}</li>


      <li {...{
        "parentName": "ul"
      }}><strong {...{
          "parentName": "li"
        }}>{`Supported frameworks:`}</strong>
        {` Express, Koa, Fastify`}</li>

    </ul>
  </MDXLayout>;
}
;
RawContent.isMDXComponent = true;

export const ApmNodejsPrerequisites = (props) => (
  <RawContent {...{ agentName: 'Node.js' }} {...props} />
);
