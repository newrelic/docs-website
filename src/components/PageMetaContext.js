import React from 'react';

/**
 * Provides page-level frontmatter fields to any component rendered
 * within an MDX page — snippets, custom components, or anything else.
 *
 * Available fields are populated by the page template (docPage.js)
 * and extend automatically as new fields are added to the GraphQL
 * query and passed through MDXContainer's pageMeta prop.
 *
 * Usage in any component:
 *   import { usePageMeta } from '../PageMetaContext';
 *   const { prodName } = usePageMeta();
 *
 * Usage in snippets (no import needed — generator handles it):
 *   {/* META: prodName *\/}
 *   {/* IF: prodName === "ApmNodejs" *\/}  ...  {/* ENDIF *\/}
 *
 * To expose a new frontmatter field:
 *   1. Add it to the GraphQL query in src/templates/docPage.js
 *   2. Destructure it from frontmatter in BasicDoc
 *   3. Add it to the pageMeta prop on <MDXContainer>
 */
export const PageMetaContext = React.createContext({});

export const usePageMeta = () => React.useContext(PageMetaContext);
