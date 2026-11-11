# gatsby-plugin-llms-txt

A Gatsby plugin that generates clean markdown versions of all documentation pages and creates an `llms.txt` index file following the [llms.txt standard](https://llmstxt.org/).

## Purpose

This plugin makes New Relic documentation AI-friendly by:

1. **Generating clean markdown** - Strips MDX components and JavaScript artifacts, outputting pure markdown with headings, prose, and code blocks
2. **Serving at predictable URLs** - Each page's markdown is available at `{original-url}.md` (no trailing slash - see [Output Files](#output-files))
3. **Publishing /llms.txt** - Creates a root index file organized by the site's own real nav categories, with large sections (Release Notes, What's New) split into their own nested indexes instead of enumerated inline

## How It Works

The plugin runs during the `onPostBuild` Gatsby lifecycle hook (see `gatsby-node.js`) and:

1. Queries all English content: docs pages (`Mdx`, under `src/content/docs`), What's New posts and EOL announcements (`MarkdownRemark`, under `src/content/whats-new` and `src/content/eol` respectively) - release notes are `Mdx` pages under `src/content/docs/release-notes`, covered by the same docs query
2. Converts each page's content tree to clean markdown (`mdxToCleanMarkdown` in `lib/helpers.js`) by:
   - Removing import/export statements
   - Converting custom MDX components to markdown equivalents (see [Component Transformations](#component-transformations))
   - Rescaling heading depths so nested `<Tabs>` and their own already-authored headings nest correctly instead of colliding at the same level
   - Converting relative links/images to absolute URLs
3. Writes individual `.md` files alongside the HTML pages
4. Builds nested `llms.txt` hub files for Release Notes and What's New (see [Output Files](#output-files))
5. Generates the root `/llms.txt` index, organized by the site's real nav categories

All of the actual conversion/categorization/hub-building logic lives in `lib/helpers.js`, a plain internal module - `gatsby-node.js` itself only implements the one real Gatsby API this plugin needs (`onPostBuild`). Gatsby validates every named export of a plugin's `gatsby-node.js` against its fixed list of lifecycle APIs, so helper functions can't be exported from there directly; they're tested by importing `lib/helpers.js` instead.

## Component Transformations

| MDX Component | Markdown Output |
|--------------|----------------|
| `<Callout variant="important">` | Blockquote with a heading label (`#### ⚠️ IMPORTANT`) - uses the `title` attribute instead of the variant name when one is set (e.g. `<Callout title="preview">` → `#### 💡 PREVIEW`) |
| `<ButtonLink to="/path">Text</ButtonLink>` | `[Text](https://docs.newrelic.com/path)` |
| `<InlineCode>code</InlineCode>` | `` `code` `` |
| `<InlinePopover type="licenseKey" />` | Resolves to the popover's real `inlineText` from `src/data/popovers_en.json`, plain text |
| `<DNT>Text</DNT>` | `Text` (wrapper removed) |
| `<Icon name="fe-check" />` | ✓ / ✗ / ⚠ for check/x/warning icons (the only ones meaningful as the sole content of a table cell); every other icon is dropped, since it's purely decorative |
| Raw JSX `<img src="..." alt="..." />` | A real markdown image, not dropped |
| `<TechTile name="Node.js" to="/path">` | `- [Node.js](https://docs.newrelic.com/path)` |
| `<DocTile title="..." path="...">desc</DocTile>` | `[title](url)` followed by the description; if there's no `title`, the children become the link text instead |
| `<Collapser title="...">body</Collapser>` / `<CollapserGroup>` | Bold title line followed by the body; the group wrapper is unwrapped |
| `<Steps><Step>...</Step></Steps>` | A numbered list, unless a `<Step>` opens with its own heading (the common real-page shape) - a titled step is spliced in as a plain heading instead, not nested under a list number |
| `<Video type="youtube" id="..." />` | A link to the real embed URL |
| `<Tabs>` (`<TabsBar>`/`<TabsPages>`) | Each tab label becomes a real heading, one level deeper than whatever section it's in (or than the tab it's nested inside, for a `<Tabs>` inside another tab's content) - not bold text |
| Raw JSX `<table>`/`<thead>`/`<tbody>`/`<tr>`/`<th>`/`<td>` | A real markdown table |
| Any other/unrecognized component | Unwrapped - the wrapper is dropped, its children are kept |

## Output Files

### Individual pages

Each page generates a corresponding `.md` file at the same path, minus any trailing slash (`fields.slug` never has one, and the site's own pages always render *with* one - `MdxLlmTools.js`'s "View as Markdown" link strips it before appending `.md` for the same reason):

- HTML: `docs.newrelic.com/docs/apm/agents/nodejs-agent/`
- Markdown: `docs.newrelic.com/docs/apm/agents/nodejs-agent.md`

### llms.txt index

The root `/llms.txt` contains an entry per real nav category (see [Categories](#categories)), each listing its pages as `- [title](url)` - except Release Notes and What's New, which are large enough (thousands and hundreds of pages respectively) that enumerating them inline would dominate the whole file. Those two link to their own nested `llms.txt` hub instead:

- `/docs/release-notes/llms.txt` - one link per product/agent, recursing another level for products that split further by language/platform (e.g. `/docs/release-notes/agent-release-notes/llms.txt` → `.../net-release-notes/llms.txt`, `.../nodejs-release-notes/llms.txt`, ...)
- `/whats-new/llms.txt` - one link per year (`/whats-new/2026/llms.txt`, ...), newest first

## Categories

Pages are categorized by matching their slug against the site's own real nav structure (`src/nav/generatedNav.yml`, plus a small number of documented overrides in `lib/helpers.js` for content that's cross-linked into another category's section rather than owning a top-level nav entry of its own) - not a separate, hand-maintained list here. A hardcoded duplicate of the site's ~40 real categories is exactly how an earlier version of this plugin ended up dumping ~40% of all pages into a catch-all "Other" bucket: the list only covered ~15 of them, and drifted every time the real nav changed. See `getCategoryPrefixes`/`categorizePages` in `lib/helpers.js` for the actual logic, and the plugin's tests for concrete real category names.

## Configuration

No configuration required. The plugin runs automatically during the build.

To enable/disable the plugin, add/remove it from `gatsby-config.js`:

```javascript
plugins: [
  // ... other plugins
  'gatsby-plugin-llms-txt',
  // ... other plugins
]
```

## Testing

Run the unit tests (`plugins/gatsby-plugin-llms-txt/__tests__/gatsby-node.test.js`), which exercise `lib/helpers.js` directly:

```bash
npx jest plugins/gatsby-plugin-llms-txt
```

### Run a Full Build

```bash
BUILD_LANG=en yarn build
```

### Verify Output

After the build completes, check:

1. **llms.txt exists:**
   ```bash
   cat public/llms.txt
   ```

2. **Individual .md files generated:**
   ```bash
   ls public/docs/apm/**/*.md
   ```

3. **Content is clean markdown:**
   ```bash
   cat public/docs/apm/new-relic-apm/getting-started/introduction-apm.md
   ```

4. **Release Notes/What's New hubs exist:**
   ```bash
   cat public/docs/release-notes/llms.txt
   cat public/whats-new/llms.txt
   ```

### Expected Output

The build logs should show something like:
```
info Generating clean markdown files for LLMs (llms.txt)
info   Processing {N} pages...
info   Generated {N} markdown files (0 errors)
info   Generated {N} release-notes hub files and {N} what's-new hub files
info   Generated llms.txt at /path/to/public/llms.txt
info   Done!
```

## Implementation Details

- **Build time:** Runs in `onPostBuild` hook (after HTML generation)
- **Dependencies:** Uses existing unified/remark infrastructure, plus `js-yaml` for reading the site's nav data
- **Language support:** Currently English only (per requirements)
- **File size:** Generates thousands of `.md` files but they're served as static assets
- **SEO impact:** None - existing HTML rendering, routing, and redirects are unaffected
- **Failure mode:** A GraphQL/nav-yaml/conversion error fails the whole build (`reporter.panicOnBuild`) - the same convention every other `onPostBuild` plugin in this repo already follows (the RSS-feed generators for release notes, what's new, EOL, and security bulletins)

## Reference Implementations

- Spec: https://llmstxt.org
- Anthropic: https://docs.anthropic.com/llms.txt
- Stripe: https://stripe.com/docs/llms.txt
- Cloudflare: https://developers.cloudflare.com/llms.txt

## Acceptance Criteria

- ✅ `/llms.txt` is generated and follows the spec format
- ✅ Clean `.md` pages are accessible for all public doc pages
- ✅ Existing HTML rendering, SEO, and redirects are unaffected

## Future Enhancements

Potential improvements for future iterations:

- Support for multiple languages (i18n)
- Configurable component transformations
- Filtering options (exclude certain page types)
- Compression for large output files
