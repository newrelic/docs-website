# gatsby-plugin-llms-txt

A Gatsby plugin that generates clean markdown versions of all documentation pages and creates an `llms.txt` index file following the [llms.txt standard](https://llmstxt.org/).

## Purpose

This plugin makes New Relic documentation AI-friendly by:

1. **Generating clean markdown** - Strips MDX components and JavaScript artifacts, outputting pure markdown with headings, prose, and code blocks
2. **Serving at predictable URLs** - Each page's markdown is available at `{original-url}.md`
3. **Publishing /llms.txt** - Creates a root index file organized by product category

## How It Works

The plugin runs during the `onPostBuild` Gatsby lifecycle hook and:

1. Queries all English MDX content (docs, release notes, what's new, EOL announcements)
2. Converts MDX AST to clean markdown by:
   - Removing import/export statements
   - Converting custom components to markdown equivalents:
     - `<Callout>` → Blockquote with variant indicator
     - `<ButtonLink>` → Regular markdown link
     - `<InlineCode>` → Backticks
     - `<InlinePopover>` → Plain text
     - `<DNT>` → Stripped (keeps content)
     - `<TechTile>` → List item with link
   - Converting relative links to absolute URLs
3. Writes individual `.md` files alongside HTML pages
4. Generates `/llms.txt` index organized by product category

## Component Transformations

| MDX Component | Markdown Output |
|--------------|----------------|
| `<Callout variant="tip">` | Blockquote with 💡 TIP header |
| `<ButtonLink to="/path">Text</ButtonLink>` | `[Text](https://docs.newrelic.com/path)` |
| `<InlineCode>code</InlineCode>` | `` `code` `` |
| `<DNT>Text</DNT>` | `Text` (wrapper removed) |
| `<InlinePopover text="foo" />` | `foo` |
| `<TechTile name="Node.js" to="/path">` | `- [Node.js](https://docs.newrelic.com/path)` |

## Output Files

### Individual Pages
Each documentation page generates a corresponding `.md` file:
- HTML: `docs.newrelic.com/docs/apm/agents/nodejs-agent/`
- Markdown: `docs.newrelic.com/docs/apm/agents/nodejs-agent/.md`

### llms.txt Index
A single index file at `docs.newrelic.com/llms.txt` containing:
- Site title and description
- Last updated date
- Categorized list of all markdown pages

## Categories

Pages are automatically categorized based on their URL path:
- APM
- Browser
- Infrastructure
- Mobile
- Synthetic Monitoring
- Logs
- Alerts
- APIs
- Accounts & Settings
- Dashboards
- Queries & Data
- Security
- Integrations
- Release Notes
- What's New
- EOL Announcements

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
   ls public/docs/apm/*.md
   ```

3. **Content is clean markdown:**
   ```bash
   cat public/docs/apm/new-relic-apm/getting-started/introduction-apm/.md
   ```

### Expected Output

The build logs should show:
```
info Generating clean markdown files for LLMs (llms.txt)
info   Processing {N} pages...
info   Generated {N} markdown files (0 errors)
info   Generated llms.txt at /path/to/public/llms.txt
info   Done!
```

## Implementation Details

- **Build time:** Runs in `onPostBuild` hook (after HTML generation)
- **Dependencies:** Uses existing unified/remark/rehype infrastructure
- **Language support:** Currently English only (per requirements)
- **File size:** Generates thousands of .md files but they're served as static assets
- **SEO impact:** None - existing HTML rendering, routing, and redirects are unaffected

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
- Separate indices per product category
- Compression for large output files
