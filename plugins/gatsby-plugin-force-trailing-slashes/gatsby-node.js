const replacePath = (path) => (path.endsWith('/') ? path : `${path}/`);

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions;

  return new Promise((resolve) => {
    if (!page.path.match(/404/)) {
      const oldPage = { ...page };
      page.path = replacePath(page.path);

      if (page.path !== oldPage.path) {
        deletePage(oldPage);
        createPage(page);
      }
    }

    resolve();
  });
};
