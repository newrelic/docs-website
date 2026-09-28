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
    <h2>{`Canary translation test`}</h2>
    <p>{`This snippet exists only to verify the reusable-snippet translation pipeline round-trip (NR-593512). Safe to delete once confirmed working.`}</p>
  </MDXLayout>;
}
;
RawContent.isMDXComponent = true;