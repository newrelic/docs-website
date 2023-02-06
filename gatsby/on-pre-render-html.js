import { FILTERED_HEAD_KEYS } from '../src/utils/constants';

const onPreRenderHTML = ({
  getHeadComponents,
  replaceHeadComponents,
  pathname,
}) => {
  const headComponents = getHeadComponents();
  if (pathname.endsWith('/embed') || pathname.endsWith('/embed/')) {
    return replaceHeadComponents(
      headComponents.filter(
        (component) => !FILTERED_HEAD_KEYS.includes(component.key)
      )
    );
  }
  return replaceHeadComponents([headComponents]);
};

export default onPreRenderHTML;
