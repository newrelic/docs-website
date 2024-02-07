import { frontmatter } from './utils/frontmatter.js';
import { mkdir, readFile, writeFile } from 'fs/promises';
import { glob } from 'glob10';
import { join } from 'path';

// from -> to key/value structure, since redirects are a 1:many relationship.
// ie, redirecting _from_ `/docs/security` can only redirect to one place,
// but many paths can redirect _to_ `/docs/security/overview`
const redirects = new Map();
const LOCALES = ['jp', 'kr'];
const JP_SITE_URL = 'https://docs-website-netlify-jp.netlify.app';
const KR_SITE_URL = 'https://docs-website-netlify-kr.netlify.app';

const mdxPaths = await glob('src/content/docs/**/*.{md,mdx}');
const jpMdxPaths = await glob('src/i18n/content/jp/docs/**/*.{md,mdx}');
const krMdxPaths = await glob('src/i18n/content/kr/docs/**/*.{md,mdx}');

const urlFromFsPath = (fspath) =>
  fspath.replace(/src\/content/, '').replace(/\.mdx?$/, '');

// MDX frontmatter redirects
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

// external redirects
const externalRedirects = JSON.parse(
  await readFile('./src/data/external-redirects.json', 'utf-8')
);

for (const redirect of externalRedirects) {
  const to = redirect.url;
  for (const from of redirect.paths) {
    redirects.set(from, to);
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

// commenting out i18n rewrites until the netlify sites are ready for this

// // rewrites
// // TODO: refactor i18n rewrites when we add more languages

// const jpRewrites = jpMdxPaths
//   .map((path) => {
//     const urlPath = path
//       .replace('src/i18n/content/jp', '')
//       .replace(/\.mdx?$/, '');
//     const from = urlPath.replace(/^\/docs/, '/docs/jp');
//     const to = JP_SITE_URL + urlPath;
//     return {
//       from,
//       to,
//     };
//   })
//   .map(({ from, to }) => `${from} ${to} 200`)
//   .join('\n');

// const krRewrites = krMdxPaths
//   .map((path) => {
//     const urlPath = path
//       .replace('src/i18n/content/kr', '')
//       .replace(/\.mdx?$/, '');
//     const from = urlPath.replace(/^\/docs/, '/docs/kr');
//     const to = KR_SITE_URL + urlPath;
//     return {
//       from,
//       to,
//     };
//   })
//   .map(({ from, to }) => `${from} ${to} 200`)
//   .join('\n');

// const redirectsAndReWrites = `${redirectsList}\n${jpRewrites}\n${krRewrites}`;
const redirectsAndRewrites = `${redirectsList}`;

await mkdir('./public').catch(() => null);
writeFile('./public/_redirects', redirectsAndRewrites, 'utf-8');
