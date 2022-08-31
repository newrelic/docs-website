const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const createSingleNav = () => {
  const rootNavYaml = yaml.safeLoad(
    fs.readFileSync(path.join(process.cwd(), 'src/nav/root.yml'), 'utf8')
  );

  const ignorePages = [
    '/docs/glossary/glossary',
    '/attribute-dictionary',
    '/whats-new',
    '/docs/release-notes',
  ];

  const rootNavChildren = rootNavYaml.pages.reduce((acc, page) => {
    let subNavChildren = null;
    if (
      page.path &&
      !page.path.startsWith('http') &&
      !ignorePages.includes(page.path)
    ) {
      const pageDirectory = page.path.split('/')[2];
      subNavChildren = yaml.safeLoad(
        fs.readFileSync(
          path.join(process.cwd(), `src/nav/${pageDirectory}.yml`),
          'utf8'
        )
      );
    }
    acc = subNavChildren
      ? [...acc, { ...page, pages: [subNavChildren] }]
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
