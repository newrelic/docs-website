# Reusable Content Snippets

This folder contains MDX snippets that can be reused across documentation pages without needing to import them.

Every snippet is compiled with the site's real MDX compiler (the same one that compiles every doc page) — so a snippet supports everything a normal `.mdx` page does: headings, lists, bold/italic, links, inline code, **tables, images, code fences, blockquotes**, and any component available on doc pages (`<Callout>`, `<Tabs>`, `<CollapserGroup>`, etc.).

## How to Create a Snippet (Writer Workflow)

1. Create a new `.mdx` file in the appropriate subfolder (see folder structure below)
2. Write your content using normal Markdown/MDX
3. Run `yarn generate:snippets` (or it runs automatically whenever `yarn start`/`yarn build` starts Gatsby)
4. Use `<YourComponentName />` in any doc page — no other steps needed

**That's it.** No changes to any other file are required.

---

## Folder Structure

Use **nested folders** to organize snippets by product/category. The folder path becomes the component name.

```
src/components/snippets/
├── apm/
│   ├── nodejs/
│   │   ├── prerequisites.mdx  → <ApmNodejsPrerequisites />
│   │   └── installation.mdx   → <ApmNodejsInstallation />
│   ├── go/
│   │   └── prerequisites.mdx  → <ApmGoPrerequisites />
│   └── shared/
│       └── prerequisites.mdx  → <ApmSharedPrerequisites />
├── browser/
│   └── prerequisites.mdx      → <BrowserPrerequisites />
├── shared/
│   └── api-limits.mdx         → <SharedApiLimits />
└── ReuseableWarning.mdx       → <ReuseableWarning />
```

**Naming convention:** folder path + filename → PascalCase component name. Path separators (`/`) and hyphens (`-`) become capital letters.

| File Path | Component Name |
|-----------|----------------|
| `apm/nodejs/prerequisites.mdx` | `<ApmNodejsPrerequisites />` |
| `apm/go/prerequisites.mdx` | `<ApmGoPrerequisites />` |
| `browser/prerequisites.mdx` | `<BrowserPrerequisites />` |
| `shared/api-limits.mdx` | `<SharedApiLimits />` |
| `system-requirements.mdx` | `<SystemRequirements />` |

---

## Using a Snippet in a Doc

```mdx
<ApmNodejsPrerequisites />
<BrowserPrerequisites />
<SharedApiLimits />
```

---

## Parameterized/Dynamic Content

Snippets can accept props to customize content per use case. Reference a prop directly as `{props.name}` — this is plain MDX, the same way you'd reference any variable in a `.mdx` file.

```mdx
{/* PROPS: agentName="APM Agent", minVersion="X.X" */}
## Prerequisites for {props.agentName}

Before installing the {props.agentName} agent:

* **{props.agentName} Version:** {props.minVersion} or higher
* **Memory:** 512MB minimum
```

The `{/* PROPS: ... */}` comment only declares **default values** — it doesn't change how you reference the prop in the body.

### Usage

```mdx
<ApmSharedPrerequisites agentName="Node.js" minVersion="14.x" />
<ApmSharedPrerequisites agentName="Go" minVersion="1.18" />
<ApmSharedPrerequisites agentName="Python" minVersion="3.7" />
```

### Boolean props and conditional content

Copy this template and fill in the three `ALL_CAPS` placeholders — that's the whole pattern:

```mdx
{/* PROPS: YOUR_FLAG_NAME=false */}

{props.YOUR_FLAG_NAME ? (
  <>
    CONTENT FOR WHEN IT'S TRUE GOES HERE
  </>
) : (
  <>
    CONTENT FOR WHEN IT'S FALSE GOES HERE
  </>
)}
```

**Safe to change:** `YOUR_FLAG_NAME` (must be the same word in both places), and the two content blocks.
**Don't touch:** the `? (`, `) : (`, and `)}` punctuation, or the `<>`/`</>` around each block — that's what makes it a valid conditional. If you delete or move one of these, the build will fail with a clear error naming the file, not a silent broken page.

A filled-in example:

```mdx
{/* PROPS: showAdvanced=false */}

Install the agent with `npm install newrelic`.

{props.showAdvanced ? (
  <>
    <h2>Advanced configuration</h2>
    <ul>
      <li><strong>Custom attributes:</strong> Use <code>newrelic.addCustomAttribute()</code></li>
      <li><strong>Distributed tracing:</strong> Enabled by default in version <a href="/docs/example">14.x</a></li>
    </ul>
  </>
) : (
  <>
    For advanced configuration options, see the <a href="/docs/agents/nodejs-agent/configuration/nodejs-agent-configuration/">configuration reference</a>.
  </>
)}
```

Usage:

```mdx
<ApmSetup />                        {/* showAdvanced defaults to false */}
<ApmSetup showAdvanced={true} />    {/* shows the advanced branch */}
```

> **The one gotcha to know, and it's a real one:** *no* markdown — not `## headings`, not `* list items`, not `**bold**`/`` `code` ``/`[links](url)` — auto-renders inside the `<>...</>` content blocks above. Everything in there needs the real HTML tag instead: `<h2>`, `<ul><li>`, `<strong>`, `<code>`, `<a href="...">`. (Outside the conditional, in plain prose like the `Install the agent...` line above, normal markdown works exactly as usual — this rule is *only* about text inside `<>...</>`.)
>
> The most reliable way to avoid this trap: keep each conditional branch to **plain sentences and links only**, no headings or lists. If a branch genuinely needs a heading or list, copy the exact `<h2>`/`<ul><li>` shape from the example above rather than typing `##`/`*` — an accidental `##` in there won't error, it'll just print as literal text on the live page.

### How props work

1. Declare defaults in a JSX comment: `{/* PROPS: propName="defaultValue", flag=false */}`
   - String props: `name="value"` (quoted)
   - Boolean props: `name=true` or `name=false` (unquoted)
2. Reference a prop anywhere in the body as `{props.propName}`
3. Pass values when using the component: `<Component propName="value" flag={true} />`

---

## Page-Aware Snippets (Automatic Page Context)

Snippets can read values directly from a page's frontmatter — no props needed when using a snippet. This is useful for shared steps, prerequisites, or callouts that vary by product but are otherwise identical.

### Writer setup — add `pageMeta` to page frontmatter

```yaml
---
title: Node.js Agent Installation
pageMeta:
  prodName: ApmNodejs
---
```

`pageMeta` is a free-form block — add any key-value pairs your snippets need. No schema changes required.

### Snippet syntax

Copy this template — you don't need to import `usePageMeta()`, the generator handles that automatically:

```mdx
{usePageMeta().YOUR_FIELD_NAME === "VALUE_TO_MATCH" ? (
  <>
    CONTENT FOR WHEN IT MATCHES GOES HERE
  </>
) : (
  <>
    CONTENT FOR WHEN IT DOESN'T MATCH GOES HERE
  </>
)}
```

**Safe to change:** `YOUR_FIELD_NAME` (must match a key in the page's `pageMeta` frontmatter, shown above), `VALUE_TO_MATCH` (keep the quotes around it), and the two content blocks.
**Don't touch:** everything else — same rule as the boolean template above (same `? (` / `) : (` / `)}` shape, same real-JSX-tags-only rule inside `<>...</>`).

A filled-in example:

```mdx
1. Download the agent package
2. Add the license key to your config file

{usePageMeta().prodName === "ApmNodejs" ? (
  <>Add <code>require('newrelic')</code> as the first line of your app's main file.</>
) : (
  <>Follow the <a href="/docs/apm/agents/">language-specific setup guide</a> for your agent.</>
)}
```

Usage on any page — **nothing to pass**:

```mdx
<ApmSharedInstallation />
```

The snippet automatically reads `prodName` from the page it appears on. If a field is called more than once in the same snippet, calling `usePageMeta()` again each time is fine — it's just reading page context, not doing any work.

### Using `usePageMeta()` in custom components

The same data is available to any hand-written component on the page too — import the hook directly there (this is the one place an import is needed, since it's not generated content):

```jsx
import { usePageMeta } from '../PageMetaContext';

const MyComponent = () => {
  const { prodName } = usePageMeta();
  return <p>This page is about: {prodName}</p>;
};
```

---

## Translated Snippets

Snippet translations follow the exact same convention every other translated page on this site already uses: a parallel tree under `src/i18n/content/<locale>/`, mirroring the same relative path.

```
src/components/snippets/apm/nodejs/prerequisites.mdx           (English, the source of truth)
src/i18n/content/jp/components/snippets/apm/nodejs/prerequisites.mdx  (Japanese translation)
```

Nothing special to do to get a snippet queued for translation — any `.mdx` file changed in a merged PR already goes through the normal translation pipeline, snippets included. Once a translation comes back, it lands at the mirrored path above automatically.

**Each locale is a separate build** (`docs-website-jp`, `docs-website-es`, etc. are each their own Netlify site, not one build serving every locale — see `gatsby-config.js`'s `ignoreI18nFolders`). So a given build only ever has at most one translated variant in play, resolved from `BUILD_LANG` at generate time: `yarn generate:snippets` (no `BUILD_LANG` set, or `BUILD_LANG=en`) always uses the English source; `BUILD_LANG=jp yarn generate:snippets` uses the Japanese translation for any snippet that has one, and falls back to English for any snippet that doesn't yet.

Props/defaults (the `{/* PROPS: ... */}` comment) are read from the English source only — they're a structural contract of the component, not translated content. A translated `.mdx` file should reference the same `{props.name}` placeholders as the English original; only the surrounding prose changes.

---

## Using MDX Components Inside Snippets

Snippets fully support MDX components available on any docs page — `<Callout>`, `<Collapser>`, `<CollapserGroup>`, `<Steps>`, `<Step>`, `<Tabs>`, `<Table>`, `<InlineCode>`, and more. No imports needed — they resolve the same way they do on any other doc page.

```mdx
{/* PROPS: capabilityName="" */}

<Callout variant="important" title="Feature availability and support">
  <DNT>**{props.capabilityName}**</DNT> isn't available in the Japan data center/region.
</Callout>
```

Notice `**{props.capabilityName}**` renders as real bold text here — markdown works fine inside `<Callout>`/`<DNT>` written like this. That's *not* a contradiction of the "no markdown inside `<>...</>`" rule in the conditional-content section above — it's a different situation: a tag written directly in your snippet's normal flow (like this one) is still real markdown-aware content underneath, so `**bold**` converts as usual. It's specifically the content inside a `{ condition ? (...) : (...) }` expression that loses markdown parsing, because that whole expression is JavaScript, not MDX.

```mdx
<CollapserGroup>
  <Collapser title="Installation">
    Follow the steps below.
  </Collapser>
</CollapserGroup>
```

---

## Supported Content Features

Snippets go through the real MDX compiler, so **everything a normal doc page supports, a snippet supports** — including markdown tables, images, fenced code blocks, and blockquotes, none of which need any special syntax.

The one real MDX rule to know: a literal `{` or `}` in plain prose is treated as the start of a JS expression, same as on every other page on this site. Write `` `{ like this in code }` `` (backticks) or escape it (`\{`) if you need a literal brace in prose.

---

## Development Workflow

Snippet generation runs automatically as part of Gatsby's own startup (`gatsby-node.js`'s `onPreBootstrap` hook), for both `yarn start` and `yarn build` — no manual step required before running the site.

**Actively editing snippets?** Run the watcher in a second terminal so `Snippets.js` regenerates on every save and Gatsby hot-reloads it:

```bash
yarn watch:snippets
```

### Available commands

| Command | Description |
|---------|-------------|
| `yarn generate:snippets` | Manually regenerate `Snippets.js` and `snippets/.generated/` |
| `yarn watch:snippets` | Watch snippets folder and regenerate on changes |
| `yarn start` | Standard dev server (snippets generated automatically on startup) |
| `yarn build` | Production build (snippets generated automatically on startup) |

### Generated files

`src/components/Snippets.js` and everything under `src/components/snippets/.generated/` are auto-generated — do not edit them manually. They're committed to the repo so the build doesn't require a generation step to succeed from a clean clone before first run.

---

## Name Collision Protection

The generator enforces unique component names at build time. It halts the Gatsby build (both `yarn start` and `yarn build`) if:

- A snippet name matches a component already registered in `MDXContainer.js` (e.g. `Button`, `Tabs`, `DNT`)
- A snippet name matches a theme-provided component (e.g. `Callout`, `Collapser`, `Steps`)
- Two different snippet file paths resolve to the same component name

```
Name collision: "Callout" is already registered in MDXContainer.js defaultComponents.
   Rename the snippet file: Callout.mdx
```

The folder-path naming convention makes accidental collisions very unlikely in practice — a snippet at `apm/nodejs/prerequisites.mdx` becomes `ApmNodejsPrerequisites`, which won't clash with any existing component.
