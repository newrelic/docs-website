import { frontmatter } from './utils/frontmatter.js';
import { mkdir, readdir, readFile, writeFile } from 'fs/promises';
import { readFileSync } from 'fs';
import { glob } from 'glob10';
import yaml from 'js-yaml';
import sortBy from 'lodash/sortBy.js';
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

// adds a rewrite so these URLs work:
// `release-notes/agent-release-notes/<agent>/current`
const AGENT_RELEASE_NOTES_DIR =
  './src/content/docs/release-notes/agent-release-notes';
const agentDirs = await readdir(AGENT_RELEASE_NOTES_DIR);
const currentReleaseNotesRedirects = await Promise.all(
  agentDirs.map(async (agentDir) => {
    const notesDir = join(AGENT_RELEASE_NOTES_DIR, agentDir);
    const releaseNoteDirs = (await readdir(notesDir)).map((releaseNote) =>
      join(notesDir, releaseNote)
    );
    const releaseNotes = (
      await Promise.all(
        releaseNoteDirs.map(async (path) => {
          const contents = await readFile(path);
          const {
            attributes: { releaseDate },
          } = frontmatter(contents);

          return [path, releaseDate ? new Date(releaseDate) : null];
        })
      )
    ).filter(([_path, date]) => date != null);

    // this is in ascending order, so the last item is the most recent
    const sortedReleaseNotes = sortBy(releaseNotes, ([_path, date]) => date);
    const current = sortedReleaseNotes
      .at(-1)[0]
      .replace('src/content', '')
      .replace(/\.mdx$/, '');
    const agentPath = join(AGENT_RELEASE_NOTES_DIR, agentDir).replace(
      'src/content',
      ''
    );

    return [join(agentPath, 'current'), [current, 200]];
  })
);
currentReleaseNotesRedirects.forEach(([path, to]) => {
  redirects.set(path, to);
});

const redirectsList = Array.from(redirects.entries())
  .map(([from, to]) => {
    if (typeof to === 'string') {
      return {
        from,
        to,
        status: 301,
      };
    }

    const [path, status] = to;
    return {
      from,
      to: path,
      status,
    };
  })
  .map(({ from, to, status }) => `${from} ${to} ${status}`)
  .join('\n');

let redirectsAndRewrites = `${redirectsList}`;

// rewrites with splats for i18n sites
LOCALES.forEach(
  (locale) =>
    (redirectsAndRewrites += `\n/${locale}/* https://docs-website-${locale}.netlify.app/${locale}/:splat  200!`)
);

await mkdir('./public').catch(() => null);
writeFile('./public/_redirects', redirectsAndRewrites, 'utf-8');
