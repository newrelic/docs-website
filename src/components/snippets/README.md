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

Write a real conditional expression — same as any other JS-backed `.mdx` content:

```mdx
{/* PROPS: showAdvanced=false */}

## Basic setup

Install the agent with `npm install newrelic`.

{props.showAdvanced ? (
  <>
    ## Advanced configuration

    * **Custom attributes:** Use `newrelic.addCustomAttribute()`
    * **Distributed tracing:** Enabled by default in version [14.x](/docs/example)
  </>
) : (
  <>For advanced configuration options, see the [configuration reference](/docs/agents/nodejs-agent/configuration/nodejs-agent-configuration/).</>
)}
```

Usage:

```mdx
<ApmSetup />                        {/* showAdvanced defaults to false */}
<ApmSetup showAdvanced={true} />    {/* shows the advanced branch */}
```

> **Note:** Markdown formatting (`**bold**`, `` `code` ``, `[links](url)`) only auto-renders in plain prose, not inside a JSX expression's children — write real JSX (`<strong>`, `<code>`, `<a href="...">`) for formatting inside a conditional branch like the one above.

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

Call `usePageMeta()` directly wherever you need it — **you don't need to import it**, the generator handles that automatically:

```mdx
## Installation steps

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

## Using MDX Components Inside Snippets

Snippets fully support MDX components available on any docs page — `<Callout>`, `<Collapser>`, `<CollapserGroup>`, `<Steps>`, `<Step>`, `<Tabs>`, `<Table>`, `<InlineCode>`, and more. No imports needed — they resolve the same way they do on any other doc page.

```mdx
{/* PROPS: capabilityName="" */}

<Callout variant="important" title="Feature availability and support">
  <DNT>**{props.capabilityName}**</DNT> isn't available in the Japan data center/region.
</Callout>
```

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
