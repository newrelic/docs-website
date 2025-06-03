const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const createSingleNav = () => {
  const rootNavYaml = yaml.safeLoad(
    fs.readFileSync(path.join(process.cwd(), 'src/nav/root.yml'), 'utf8')
  );

  const ignorePages = ['whats-new', 'release-notes'];

  const rootNavChildren = rootNavYaml.pages.reduce((acc, page) => {
    let subNavChildren = null;
    if (
      page.path &&
      !page.path.startsWith('http') &&
      !ignorePages.includes(page.path) &&
      !page.path.includes('/')
    ) {
      const pageDirectory = page.path;
      subNavChildren = yaml.safeLoad(
        fs.readFileSync(
          path.join(process.cwd(), `src/nav/${pageDirectory}.yml`),
          'utf8'
        )
      );
    }
    acc = subNavChildren
      ? [...acc, { ...subNavChildren }]
      : [...acc, { ...page }];
    return acc;
  }, []);
  const navToRuleThemAll = { ...rootNavYaml, pages: rootNavChildren };
  const navToRuleThemAllYaml = yaml.safeDump(navToRuleThemAll, {
    lineWidth: 99999,
  });

  fs.writeFileSync(`src/nav/generatedNav.yml`, navToRuleThemAllYaml);
};

module.exports = createSingleNav;
