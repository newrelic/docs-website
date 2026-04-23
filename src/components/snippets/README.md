# Reusable Content Snippets

This folder contains MDX snippets that can be reused across documentation pages without needing to import them.

## How to Create a Reusable Snippet

1. Create a new `.mdx` file in this folder (e.g., `system-requirements.mdx`)
2. Write your content using standard Markdown syntax
3. Run `yarn generate:snippets` (or it runs automatically with `yarn start`)
4. The snippet will be available as a component

## How to Use a Snippet

In any documentation page, use the component name (based on the filename):

```mdx
<SystemRequirements />
```

The component name is the filename converted to PascalCase:
- First letter capitalized
- Hyphens removed with next letter capitalized

### Examples:

| Filename | Component Name |
|----------|----------------|
| `system-requirements.mdx` | `<SystemRequirements />` |
| `warning-banner.mdx` | `<WarningBanner />` |
| `ReuseableWarning.mdx` | `<ReuseableWarning />` |

## Supported Markdown Features

Currently supported:
- Headings (`##`, `###`)
- Paragraphs
- Lists (bulleted with `*`)
- Bold text (`**text**`)
- Emphasis/italics (`*text*`)
- Nested styles (e.g., `* **Label:** value`)

## Development Workflow

### Two Ways to Run the Dev Server:

**Option 1: Standard Mode (for occasional snippet edits)**
```bash
yarn start
```
- Generates snippets once at startup
- **If you edit snippet content**: Open a second terminal and run `yarn generate:snippets`
  - Tip: Split your terminal or open a new tab (server keeps running)
  - Gatsby hot reload automatically picks up the regenerated file
- Best for: Normal docs work with rare snippet changes

**Option 2: Watch Mode (recommended for active snippet development)**
```bash
yarn start:with-watch
```
- Watches `src/components/snippets/` for changes
- **Auto-regenerates** whenever you edit any `.mdx` file
- Gatsby hot reload picks up changes automatically
- No manual commands needed!
- Best for: Creating or iterating on reusable content

### Available Commands:

- `yarn generate:snippets` - Manual generation (run in second terminal if server is running)
- `yarn watch:snippets` - Start file watcher only
- `yarn start` - Standard dev server (manual snippet regeneration)
- `yarn start:with-watch` - Dev server with automatic snippet regeneration
- `yarn build` - Production build (auto-generates snippets)

### Generated Files:

`src/components/Snippets.js` - Auto-generated React components (in .gitignore, don't edit manually)

## Adding New Snippets

After adding a new `.mdx` file:
1. Run `yarn generate:snippets`
2. Add the component name to `MDXContainer.js` imports and exports:

```javascript
// In MDXContainer.js
import { ReuseableWarning, YourNewSnippet } from './Snippets';

// In defaultComponents
const defaultComponents = {
  // ... other components
  ReuseableWarning,
  YourNewSnippet,
};
```

## Note for Developers

Writers only need to:
1. Create `.mdx` files in this folder
2. Use `<ComponentName />` in their docs

The dev team handles the registration in `MDXContainer.js`.
