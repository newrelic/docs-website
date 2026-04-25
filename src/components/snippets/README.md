# Reusable Content Snippets

This folder contains MDX snippets that can be reused across documentation pages without needing to import them.

## How to Create a Snippet (Writer Workflow)

1. Create a new `.mdx` file in the appropriate subfolder (see folder structure below)
2. Write your content using Markdown and/or MDX components
3. Run `yarn generate:snippets` (or it runs automatically with `yarn start`)
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

Snippets can accept props to customize content per use case.

### String props

```mdx
{/* PROPS: agentName="APM Agent", minVersion="X.X" */}
## Prerequisites for {{agentName}}

Before installing the {{agentName}} agent:

* **{{agentName}} Version:** {{minVersion}} or higher
* **Memory:** 512MB minimum
```

> **Note:** Use `{/* */}` (JSX comment syntax), not `<!-- -->`. The `{/* */}` format is required for valid MDX.

### Usage

```mdx
<ApmSharedPrerequisites agentName="Node.js" minVersion="14.x" />
<ApmSharedPrerequisites agentName="Go" minVersion="1.18" />
<ApmSharedPrerequisites agentName="Python" minVersion="3.7" />
```

### Boolean props and conditional content

Use boolean props to show or hide entire sections:

```mdx
{/* PROPS: agentName="APM Agent", showAdvanced=false */}

## Basic setup

Install the agent with `npm install newrelic`.

{/* IF: showAdvanced */}

## Advanced configuration

* **Custom attributes:** Use `newrelic.addCustomAttribute()`
* **Distributed tracing:** Enabled by default in version [14.x](/docs/example)

{/* ELSE */}

For advanced configuration options, see the [configuration reference](/docs/agents/nodejs-agent/configuration/nodejs-agent-configuration/).

{/* ENDIF */}
```

Usage:

```mdx
<ApmSetup />                        {/* showAdvanced defaults to false — shows ELSE content */}
<ApmSetup showAdvanced={true} />    {/* shows IF content */}
```

`{/* ELSE */}` is optional. IF/ENDIF without ELSE simply shows nothing when the condition is false.

### How props work

1. Declare props in a JSX comment: `{/* PROPS: propName="defaultValue", flag=false */}`
   - String props: `name="value"` (quoted)
   - Boolean props: `name=true` or `name=false` (unquoted)
2. Use `{{propName}}` or `{{ propName }}` as placeholders in text
3. Wrap optional sections with `{/* IF: propName */}` ... `{/* ENDIF */}`
4. Pass values when using the component: `<Component propName="value" flag={true} />`

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

```yaml
---
title: Go Agent Installation
pageMeta:
  prodName: ApmGo
---
```

```yaml
---
title: Kubernetes Integration
pageMeta:
  prodName: K8s
---
```

`pageMeta` is a free-form block — add any key-value pairs your snippets need. No schema changes required.

### Snippet syntax

```mdx
{/* META: prodName */}

## Installation steps

1. Download the agent package
2. Add the license key to your config file

{/* IF: prodName === "ApmNodejs" */}
3. Add `require('newrelic')` as the first line of your app's main file
{/* ELSE */}
3. Follow the [language-specific setup guide](/docs/apm/agents/) for your agent
{/* ENDIF */}

{/* IF: prodName === "ApmGo" */}
4. Call `newrelic.Init()` at the start of `main()`
{/* ENDIF */}

{/* IF: prodName !== "K8s" */}
5. Restart your application
{/* ENDIF */}
```

Usage on any page — **nothing to pass**:

```mdx
<ApmSharedInstallation />
```

The snippet automatically reads `prodName` from the page it appears on.

### Syntax reference

| Directive | Description |
|-----------|-------------|
| `{/* META: prodName */}` | Declare that this snippet reads `prodName` from the page's `pageMeta` |
| `{/* META: prodName, agentVersion */}` | Declare multiple fields |
| `{/* IF: prodName === "ApmNodejs" */}` | Show content only when `prodName` equals `"ApmNodejs"` |
| `{/* IF: prodName !== "K8s" */}` | Show content when `prodName` does NOT equal `"K8s"` |
| `{/* IF: showAdvanced */}` | Show content when boolean prop `showAdvanced` is truthy |
| `{/* ELSE */}` | Show alternate content when the IF condition is false (optional) |
| `{/* ENDIF */}` | Close an IF or IF/ELSE block |

### Using `usePageMeta()` in custom components

The same data is available to any component on the page — not just auto-generated snippets. Import the hook directly:

```jsx
import { usePageMeta } from '../PageMetaContext';

const MyComponent = () => {
  const { prodName } = usePageMeta();
  return <p>This page is about: {prodName}</p>;
};
```

---

## Using MDX Components Inside Snippets

Snippets fully support MDX components available on any docs page — `<Callout>`, `<Collapser>`, `<CollapserGroup>`, `<Steps>`, `<Step>`, `<Tabs>`, `<Table>`, `<InlineCode>`, and more.

```mdx
{/* PROPS: capabilityName="" */}

<Callout variant="important" title="Feature availability and support">
  <DNT>**{{ capabilityName }}**</DNT> isn't available in the Japan data center/region.
</Callout>
```

```mdx
<CollapserGroup>
  <Collapser title="Installation">
    Follow the steps below.
  </Collapser>
</CollapserGroup>
```

All components are resolved from the MDX context at render time — no imports needed in the snippet file itself.

---

## Supported Content Features

| Feature | Syntax | Notes |
|---------|--------|-------|
| Headings | `# H1`, `## H2`, `### H3`, `#### H4` | renders as `<h1>`–`<h4>` |
| Paragraphs | plain text | renders as `<p>` |
| Bulleted list | `* item` | renders as `<ul><li>` |
| Numbered list | `1. item` | renders as `<ol><li>` |
| Bold | `**text**` | renders as `<strong>` |
| Italic | `*text*` | renders as `<em>` |
| Inline code | `` `code` `` | renders as `<code>` |
| Links | `[text](url)` | renders as `<a href="url">` |
| Bold list item | `* **Label:** value` | renders as `<li><strong>Label:</strong> value` |
| String props | `{{propName}}` | replaced with prop value at render time |
| Boolean props | `{/* PROPS: flag=false */}` | used to toggle conditional sections |
| Conditional blocks | `{/* IF: flag */}` … `{/* ENDIF */}` | renders content only when condition is true |
| Conditional with else | `{/* IF */}` … `{/* ELSE */}` … `{/* ENDIF */}` | renders alternate content when condition is false |
| String conditionals | `{/* IF: field === "value" */}` or `!==` | string equality/inequality check |
| Page meta declaration | `{/* META: fieldName */}` | reads field from page `pageMeta` frontmatter |
| MDX components | `<Callout>`, `<Collapser>`, etc. | passed through as JSX |

### Unsupported syntax (warns at build time)

The generator will print a warning if it detects patterns it cannot convert — output may look wrong without an error.

| Pattern | Workaround |
|---------|------------|
| Fenced code blocks ` ``` ` | Use `<InlineCode>` or a raw `<code>` JSX element |
| Markdown tables `\| col \|` | Use a JSX `<table>` element directly |
| Markdown images `![alt](src)` | Use a JSX `<img>` element directly |
| Blockquotes `> text` | Use a `<Callout>` component instead |

---

## Development Workflow

### Two ways to run the dev server

**Standard mode** (for occasional snippet edits):
```bash
yarn start
```
- Generates snippets once at startup
- After editing a snippet, run `yarn generate:snippets` in a second terminal
- Gatsby hot-reloads the regenerated file automatically

**Watch mode** (for active snippet development):
```bash
yarn start:with-watch
```
- Watches `src/components/snippets/` and auto-regenerates on every save
- No manual commands needed

### Available commands

| Command | Description |
|---------|-------------|
| `yarn generate:snippets` | Manually regenerate `Snippets.js` |
| `yarn watch:snippets` | Watch snippets folder and regenerate on changes |
| `yarn start` | Standard dev server |
| `yarn start:with-watch` | Dev server with automatic snippet regeneration |
| `yarn build` | Production build (auto-generates snippets) |

### Generated file

`src/components/Snippets.js` is auto-generated — do not edit it manually. It is committed to the repo so the build doesn't require a generation step in CI.

---

## Name Collision Protection

The generator enforces unique component names at build time. It will exit with an error if:

- A snippet name matches a component already registered in `MDXContainer.js` (e.g. `Button`, `Tabs`, `DNT`)
- A snippet name matches a theme-provided component (e.g. `Callout`, `Collapser`, `Steps`)
- Two different snippet file paths resolve to the same component name

```
❌ Name collision: "Callout" is already registered in MDXContainer.js defaultComponents.
   Rename the snippet file: Callout.mdx
```

The folder-path naming convention makes accidental collisions very unlikely in practice — a snippet at `apm/nodejs/prerequisites.mdx` becomes `ApmNodejsPrerequisites`, which won't clash with any existing component.
