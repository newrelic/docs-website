const unified = require('unified');
const rehypeParse = require('rehype-parse');
const rehypeStringify = require('rehype-stringify');

const onRenderBody = async ({ setPostBodyComponents }) => {
  const addTwitterTag = "<script async>console.log('test')</script>";

  const testTag = String(
    await unified().use(rehypeParse).use(rehypeStringify).process(addTwitterTag)
  );

  setPostBodyComponents([testTag]);
};

export default onRenderBody;
