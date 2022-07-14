const onPreRenderHTML = ({
  getHeadComponents,
  replaceHeadComponents,
  pathname,
}) => {
  const headComponents = getHeadComponents();
  if (pathname.endsWith('/embed') || pathname.endsWith('/embed/')) {
    return replaceHeadComponents([
      headComponents.filter((component) => component.key === 'one-trust'),
    ]);
  }
  return replaceHeadComponents([headComponents]);
};

export default onPreRenderHTML;
