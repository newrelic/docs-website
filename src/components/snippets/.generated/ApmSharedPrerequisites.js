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
      /* PROPS: agentName="APM Agent", minVersion="X.X" */
    }
    <h2>{`Prerequisites for `}
      {props.agentName}</h2>
    <p>{`Before installing the `}
      {props.agentName}
      {` agent:`}</p>
    <ul>

      <li {...{
        "parentName": "ul"
      }}><strong {...{
          "parentName": "li"
        }}>{props.agentName}
          {` Version:`}</strong>
        {` `}
        {props.minVersion}
        {` or higher`}</li>


      <li {...{
        "parentName": "ul"
      }}><strong {...{
          "parentName": "li"
        }}>{`Operating System:`}</strong>
        {` Linux, Windows, or macOS`}</li>


      <li {...{
        "parentName": "ul"
      }}><strong {...{
          "parentName": "li"
        }}>{`Memory:`}</strong>
        {` 512MB minimum`}</li>

    </ul>
  </MDXLayout>;
}
;
RawContent.isMDXComponent = true;

export const ApmSharedPrerequisites = (props) => (
  <RawContent {...{ agentName: 'APM Agent', minVersion: 'X.X' }} {...props} />
);
