/* @jsx mdx */
import React from 'react';
import { mdx } from '@mdx-js/react';


const makeShortcode = name => function MDXDefaultShortcode(props) {
  console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope")
  return <div {...props}/>
};
const Callout = makeShortcode("Callout");
const MDXLayout = "wrapper"
export default function RawContent({
  components,
  ...props
}) {
  return <MDXLayout {...props} components={components} mdxType="MDXLayout">
    <Callout title="preview" mdxType="Callout">
      <p>{`We're still working on this feature, but we'd love for you to try it out!`}</p>
      <p>{`This feature is currently provided as part of a preview program pursuant to our `}
        <a {...{
          "href": "/docs/licenses/license-information/referenced-policies/new-relic-pre-release-policy",
          "parentName": "p"
        }}>{`pre-release policies`}</a>
        {`.`}</p>
    </Callout>
  </MDXLayout>;
}
;
RawContent.isMDXComponent = true;

export const PpCalloutPublicPreview = (props) => (
  <RawContent {...{  }} {...props} />
);
