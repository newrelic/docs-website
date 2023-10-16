import frontmatter from 'front-matter';
import { mkdir, readFile, writeFile } from 'fs/promises';
import { glob } from 'glob10';
import { join } from 'path';

// from -> to key/value structure, since redirects are a 1:many relationship.
// ie, redirecting _from_ `/docs/security` can only redirect to one place,
// but many paths can redirect _to_ `/docs/security/overview`
const redirects = new Map();
const LOCALES = ['jp', 'kr'];

const mdxPaths = await glob('src/content/docs/**/*.{md,mdx}');
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

await mkdir('./public').catch(() => null);
writeFile('./public/_redirects', redirectsList, 'utf-8');
