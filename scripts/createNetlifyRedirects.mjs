import { frontmatter } from './utils/frontmatter.js';
import { mkdir, readFile, writeFile } from 'fs/promises';
import { readFileSync } from 'fs';
import { glob } from 'glob10';
import yaml from 'js-yaml';
import { join } from 'path';
import { LOCALES } from './actions/utils/constants.js';

if (process.env.BUILD_LANG !== 'en') {
  await mkdir('./public').catch(() => null);
  writeFile('./public/_redirects', '', 'utf-8');
  console.log('`BUILD_LANG` is not `en`, writting empty _redirects file');
  process.exit();
}

// from -> to key/value structure, since redirects are a 1:many relationship.
// ie, redirecting _from_ `/docs/security` can only redirect to one place,
// but many paths can redirect _to_ `/docs/security/overview`
const redirects = new Map();

const mdxPaths = await glob('src/content/docs/**/*.{md,mdx}');
const installYamlPaths = await glob('src/install/config/**/*.yaml');

const urlFromFsPath = (fspath) =>
  fspath.replace(/src\/content/, '').replace(/\.mdx?$/, '');

// external redirects
// take priority over frontmatter defined redirects
const externalRedirects = JSON.parse(
  await readFile('./src/data/external-redirects.json', 'utf-8')
);

for (const redirect of externalRedirects) {
  const to = redirect.url;
  for (const from of redirect.paths) {
    redirects.set(from, to);
  }
}

// manual redirects (for non 'src/content/docs' md|x pages)
// take priority over frontmatter defined redirects
const manualRedirects = JSON.parse(
  await readFile('./src/data/manual-redirects.json', 'utf-8')
);

for (const redirect of manualRedirects) {
  redirects.set(redirect.from, redirect.to);
}

for (const path of mdxPaths) {
  const contents = await readFile(join(process.cwd(), path), 'utf-8');
  const to = urlFromFsPath(path);
  const { attributes } = frontmatter(contents);
  const enRedirects = attributes.redirects ?? [];

  enRedirects.forEach((from) => redirects.set(from, to));

  for (const locale of LOCALES) {
    const localizedTo = `/${locale}${to}`;
    const localizedRedirects = enRedirects.map((from) => `/${locale}${from}`);
    localizedRedirects.forEach((from) => redirects.set(from, localizedTo));
  }
}
// install config redirects
for (const path of installYamlPaths) {
  const contents = await yaml.load(readFileSync(join(process.cwd(), path)));
  const to = `/install/${contents.agentName}`;
  const enRedirects = contents.redirects ?? [];

  enRedirects.forEach((from) => redirects.set(from, to));

  for (const locale of LOCALES) {
    const localizedTo = `/${locale}${to}`;
    const localizedRedirects = enRedirects.map((from) => `/${locale}${from}`);
    localizedRedirects.forEach((from) => redirects.set(from, localizedTo));
  }
}

const redirectsList = Array.from(redirects.entries())
  .map(([from, to]) => ({
    from,
    to,
    status: 301,
  }))
  .map(({ from, to, status }) => `${from} ${to} ${status}`)
  .join('\n');

let redirectsAndRewrites = `${redirectsList}`;

// trying forced rewrites with splats
LOCALES.forEach(
  (locale) =>
    (redirectsAndRewrites += `\n/${locale}/* https://docs-website-${locale}.netlify.app/${locale}/:splat  200!`)
);

// rewrites

// for (const locale of LOCALES) {
//   const localPaths = await glob(
//     `src/i18n/content/${locale}/docs/**/*.{md,mdx}`
//   );

//   const localeRewrites = localPaths
//     .map((path) => {
//       const urlPath = path
//         .replace(`src/i18n/content/${locale}`, '')
//         .replace(/\.mdx?$/, '');
//       const from = urlPath.replace(/^\/docs/, `/${locale}/docs`);
//       const to = `https://docs-website-${locale}.netlify.app/${locale}${urlPath}`;
//       return {
//         from,
//         to,
//       };
//     })
//     .map(({ from, to }) => `${from} ${to} 200`)
//     .join('\n');
//   redirectsAndRewrites = redirectsAndRewrites.concat('\n', localeRewrites);
// }

await mkdir('./public').catch(() => null);
writeFile('./public/_redirects', redirectsAndRewrites, 'utf-8');
