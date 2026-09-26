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
    <p><strong {...{
        "parentName": "p"
      }}>{`System Requirement`}</strong>
      {`
This content is being reused from a central file. If you see this, the test is successful.`}</p>
    <ul>

      <li {...{
        "parentName": "ul"
      }}><strong {...{
          "parentName": "li"
        }}>{`Minimum Node Version:`}</strong>
        {` 18.x`}</li>


      <li {...{
        "parentName": "ul"
      }}><strong {...{
          "parentName": "li"
        }}>{`Memory:`}</strong>
        {` 4GB RAM`}</li>

    </ul>
  </MDXLayout>;
}
;
RawContent.isMDXComponent = true;

export const ReuseableWarning = (props) => (
  <RawContent {...{  }} {...props} />
);
