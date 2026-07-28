const fs = require('fs');
const path = require('path');
const visit = require('unist-util-visit');
const remove = require('unist-util-remove');
const toString = require('mdast-util-to-string');
const unified = require('unified');
const stringify = require('remark-stringify');
const { findAttribute } = require('../../codemods/utils/mdxast');

// remark-stringify@8.1.1 (the version installed here) only knows how to
// render a fixed set of standard mdast node types (see
// node_modules/remark-stringify/lib/compiler.js) - anything else throws
// "Missing compiler for node of type X". These are the non-standard types
// that can appear in a real MDX AST and have no component-name concept, so
// they can't go through dispatchFlow/dispatchText.
const NON_STANDARD_NODE_TYPES = new Set([
  'mdxBlockExpression',
  'mdxSpanExpression',
  'mdxTextExpression',
  'mdxFlowExpression',
  'mdxValueExpression',
  'mdxJsxAttributeValueExpression',
  'export',
  'import',
  'mdxjsEsm',
  'inlineMath',
  'math',
]);

// Converts a text node to plain text, or drops it if empty, so the
// stringifier never sees a node type it doesn't recognize.
const toTextOrDrop = (node) => {
  const text = toString(node).trim();
  return text ? { type: 'text', value: text } : [];
};

// An attribute's value is usually a plain string, but when it's set via a
// JSX expression (e.g. title={<><InlineCode>delay</InlineCode> (in minutes)</>})
// findAttribute() returns the raw expression node instead - an object, not a
// string - which crashes downstream string methods (.startsWith, .charAt via
// the stringifier's escaper, etc.) if used as-is. Fall back to the
// expression's own raw source text when available.
const attributeText = (value) => {
  if (typeof value === 'string') return value;
  if (value && typeof value.value === 'string') return value.value;
  return null;
};

/**
 * Dispatches a flow-level (block) custom MDX component to its markdown
 * equivalent. `node.children` is always already fully resolved by the time
 * this runs (see transformNode). Returns a single node, an array (to
 * unwrap/splice in place), or an empty array to drop the node.
 */
const dispatchFlow = (node) => {
  if (node.name === 'Callout') {
    const variant = attributeText(findAttribute('variant', node)) || 'tip';
    const variantEmoji = {
      tip: '💡',
      important: '⚠️',
      caution: '⚠️',
      warning: '⚠️',
    }[variant] || '💡';

    return {
      type: 'blockquote',
      children: [
        {
          type: 'paragraph',
          children: [
            { type: 'strong', children: [{ type: 'text', value: `${variantEmoji} ${variant.toUpperCase()}` }] },
            { type: 'text', value: '\n\n' },
            ...(node.children || []),
          ],
        },
      ],
    };
  }

  if (node.name === 'ButtonLink') {
    const href = attributeText(findAttribute('to', node)) || '#';
    const text = toString(node);
    return {
      type: 'link',
      url: href.startsWith('/') ? `https://docs.newrelic.com${href}` : href,
      children: [{ type: 'text', value: text }],
    };
  }

  // Strip DNT (Do Not Translate) - just keep the content
  if (node.name === 'DNT') {
    return node.children;
  }

  // Render title + body as a bold line followed by the body content, so
  // nothing is lost. The title may arrive as a plain string attribute, or
  // (if it was originally a JSX expression) already extracted into a
  // synthetic `CollapserTitle` first child by
  // plugins/utils/jsxImagesToChildren.js, which runs earlier in the MDX
  // compile pipeline and removes the attribute in that case - check both.
  if (node.name === 'Collapser') {
    const attrTitle = attributeText(findAttribute('title', node));
    let bodyChildren = node.children || [];
    let titleChildren;

    if (attrTitle) {
      titleChildren = [{ type: 'text', value: attrTitle }];
    } else if (bodyChildren[0] && bodyChildren[0].name === 'CollapserTitle') {
      titleChildren = bodyChildren[0].children;
      bodyChildren = bodyChildren.slice(1);
    } else {
      titleChildren = [{ type: 'text', value: 'Details' }];
    }

    return [
      { type: 'paragraph', children: [{ type: 'strong', children: titleChildren }] },
      ...bodyChildren,
    ];
  }

  // Unwrap CollapserGroup - each Collapser child has already been resolved
  // into a title+body sequence by the handler above, so nothing is lost.
  if (node.name === 'CollapserGroup') {
    return node.children;
  }

  if (node.name === 'TechTile') {
    const name = attributeText(findAttribute('name', node)) || '';
    const to = attributeText(findAttribute('to', node)) || '';
    return {
      type: 'listItem',
      children: [
        {
          type: 'paragraph',
          children: [
            {
              type: 'link',
              url: to.startsWith('/') ? `https://docs.newrelic.com${to}` : to,
              children: [{ type: 'text', value: name }],
            },
          ],
        },
      ],
    };
  }

  // Default: unrecognized component name - strip the wrapper but keep children
  return node.children;
};

/**
 * Dispatches a span-level (inline) custom MDX component to its markdown
 * equivalent.
 */
const dispatchText = (node) => {
  if (node.name === 'InlineCode') {
    return { type: 'inlineCode', value: toString(node) };
  }

  if (node.name === 'InlinePopover') {
    const text = attributeText(findAttribute('text', node)) || toString(node);
    return { type: 'text', value: text };
  }

  if (node.name === 'DNT') {
    return node.children;
  }

  // Default: convert to text
  return { type: 'text', value: toString(node) };
};

/**
 * Recursively rebuilds a node's children before dispatching the node
 * itself (post-order), guaranteeing nested custom components (e.g. a
 * Collapser inside a CollapserGroup) are always fully resolved before
 * stringification - by construction, not by luck.
 *
 * This replaces a single-pass mutate-while-traversing `unist-util-visit`
 * call that silently skipped siblings whenever a replacement's length
 * wasn't exactly 1 (most commonly 0, e.g. a childless self-closing
 * component) - the root cause of ~30% of pages failing to convert.
 */
const transformNode = (node) => {
  if (Array.isArray(node.children)) {
    node.children = node.children.flatMap((child) => {
      const result = transformNode(child);
      if (result === undefined || result === null) return [];
      return Array.isArray(result) ? result : [result];
    });
  }

  if (node.type === 'mdxBlockElement' || node.type === 'mdxJsxFlowElement') {
    return dispatchFlow(node);
  }
  if (node.type === 'mdxSpanElement' || node.type === 'mdxJsxTextElement') {
    return dispatchText(node);
  }
  if (NON_STANDARD_NODE_TYPES.has(node.type)) {
    return toTextOrDrop(node);
  }

  return node;
};

/**
 * Converts MDX AST to clean markdown by removing JSX and simplifying components
 */
const mdxToCleanMarkdown = (mdxAST) => {
  // Clone the AST to avoid mutating the original
  const ast = JSON.parse(JSON.stringify(mdxAST));

  // Remove import and export statements
  remove(ast, { type: 'import' });
  remove(ast, { type: 'export' });
  remove(ast, { type: 'mdxjsEsm' });

  transformNode(ast);

  // Convert relative links/images to absolute. This only mutates fields in
  // place (never array length), so it's safe under plain unist-util-visit,
  // unlike the component-replacement pass above.
  visit(ast, (node) => {
    if (node.type === 'link' && node.url && node.url.startsWith('/docs/')) {
      node.url = `https://docs.newrelic.com${node.url}`;
    }
    if (node.type === 'image' && node.url && node.url.startsWith('/')) {
      node.url = `https://docs.newrelic.com${node.url}`;
    }
  });

  // Convert AST to markdown string. No custom `handlers` option here - for
  // remark-stringify@8.1.1 that option is inert (it merges into
  // Compiler.prototype.options, never .visitors, so it never actually
  // catches anything); transformNode above is the real, and only,
  // safety net.
  const processor = unified().use(stringify, {
    bullet: '-',
    fence: '`',
    fences: true,
    incrementListMarker: true,
  });

  return processor.stringify(ast);
};

/**
 * Categorizes a page based on its slug/path
 */
const categorizePages = (pages) => {
  const categories = {
    'APM': [],
    'Browser': [],
    'Infrastructure': [],
    'Mobile': [],
    'Synthetic Monitoring': [],
    'Logs': [],
    'Alerts': [],
    'APIs': [],
    'Accounts & Settings': [],
    'Dashboards': [],
    'Queries & Data': [],
    'Security': [],
    'Integrations': [],
    'Release Notes': [],
    'What\'s New': [],
    'EOL Announcements': [],
    'Other': []
  };

  pages.forEach(page => {
    const { slug } = page;

    if (slug.includes('/release-notes/')) {
      categories['Release Notes'].push(page);
    } else if (slug.includes('/whats-new/')) {
      categories['What\'s New'].push(page);
    } else if (slug.includes('/docs/new-relic-solutions/solve-common-issues/diagnostics-cli-nrdiag/')) {
      categories['EOL Announcements'].push(page);
    } else if (slug.includes('/docs/apm/')) {
      categories['APM'].push(page);
    } else if (slug.includes('/docs/browser/')) {
      categories['Browser'].push(page);
    } else if (slug.includes('/docs/infrastructure/')) {
      categories['Infrastructure'].push(page);
    } else if (slug.includes('/docs/mobile-monitoring/')) {
      categories['Mobile'].push(page);
    } else if (slug.includes('/docs/synthetics/')) {
      categories['Synthetic Monitoring'].push(page);
    } else if (slug.includes('/docs/logs/')) {
      categories['Logs'].push(page);
    } else if (slug.includes('/docs/alerts/')) {
      categories['Alerts'].push(page);
    } else if (slug.includes('/docs/apis/')) {
      categories['APIs'].push(page);
    } else if (slug.includes('/docs/accounts/')) {
      categories['Accounts & Settings'].push(page);
    } else if (slug.includes('/docs/query-your-data/') || slug.includes('/docs/data-apis/')) {
      categories['Queries & Data'].push(page);
    } else if (slug.includes('/docs/security/')) {
      categories['Security'].push(page);
    } else if (slug.includes('/docs/new-relic-integrations/') || slug.includes('/docs/integrations/')) {
      categories['Integrations'].push(page);
    } else if (slug.includes('/docs/dashboards/')) {
      categories['Dashboards'].push(page);
    } else {
      categories['Other'].push(page);
    }
  });

  // Remove empty categories
  Object.keys(categories).forEach(key => {
    if (categories[key].length === 0) {
      delete categories[key];
    }
  });

  return categories;
};

/**
 * Generates the llms.txt index file
 */
const generateLlmsTxt = (categorizedPages, siteUrl) => {
  let content = '# New Relic Documentation\n\n';
  content += '> Documentation for New Relic\'s observability platform.\n\n';
  content += 'This file provides clean markdown versions of all documentation pages for AI tools and LLM-powered assistants.\n\n';
  content += `Last updated: ${new Date().toISOString().split('T')[0]}\n\n`;

  Object.entries(categorizedPages).forEach(([category, pages]) => {
    content += `## ${category}\n\n`;

    pages.forEach(page => {
      const title = page.title || page.slug.split('/').pop();
      const url = `${siteUrl}${page.slug}.md`;
      content += `- [${title}](${url})\n`;
    });

    content += '\n';
  });

  return content;
};

/**
 * Main plugin hook - runs after the Gatsby build completes
 */
exports.onPostBuild = async ({ graphql, store, reporter }) => {
  const { program } = store.getState();
  const publicDir = path.join(program.directory, 'public');

  try {
    reporter.info('Generating clean markdown files for LLMs (llms.txt)');

    // Query all MDX content (English only, per requirements)
    const query = `
      {
        site {
          siteMetadata {
            siteUrl
          }
        }
        allMdx(
          filter: {
            fileAbsolutePath: {
              regex: "/src/content/docs/((?!.*i18n).)*\\\\.mdx$/"
            }
          }
        ) {
          nodes {
            id
            slug
            mdxAST
            frontmatter {
              title
              type
            }
            fields {
              slug
            }
          }
        }
      }
    `;

    const { data } = await graphql(query);
    const { site, allMdx } = data;
    const siteUrl = site.siteMetadata.siteUrl || 'https://docs.newrelic.com';

    reporter.info(`\tProcessing ${allMdx.nodes.length} pages...`);

    const processedPages = [];
    let successCount = 0;
    let errorCount = 0;

    // Process each MDX node
    for (const node of allMdx.nodes) {
      try {
        const slug = node.fields?.slug || node.slug;
        const title = node.frontmatter?.title || slug.split('/').pop();

        // Convert MDX to clean markdown
        const cleanMarkdown = mdxToCleanMarkdown(node.mdxAST);

        // Add frontmatter header to markdown
        const markdownWithFrontmatter = `---
title: ${title}
source: ${siteUrl}${slug}
---

${cleanMarkdown}`;

        // Write individual .md file
        const mdFilePath = path.join(publicDir, `${slug}.md`);
        const mdDir = path.dirname(mdFilePath);

        if (!fs.existsSync(mdDir)) {
          fs.mkdirSync(mdDir, { recursive: true });
        }

        fs.writeFileSync(mdFilePath, markdownWithFrontmatter);

        processedPages.push({
          slug,
          title,
          type: node.frontmatter?.type
        });

        successCount++;
      } catch (error) {
        errorCount++;
        reporter.warn(`\tFailed to process ${node.slug}: ${error.message}`);
      }
    }

    reporter.info(`\tGenerated ${successCount} markdown files (${errorCount} errors)`);

    // Categorize pages for the index
    const categorizedPages = categorizePages(processedPages);

    // Generate llms.txt index
    const llmsTxtContent = generateLlmsTxt(categorizedPages, siteUrl);
    const llmsTxtPath = path.join(publicDir, 'llms.txt');
    fs.writeFileSync(llmsTxtPath, llmsTxtContent);

    reporter.info(`\tGenerated llms.txt at ${llmsTxtPath}`);
    reporter.info('\tDone!');

  } catch (error) {
    reporter.panicOnBuild(
      `Unable to generate llms.txt files: ${error.message}`,
      error
    );
  }
};

exports.mdxToCleanMarkdown = mdxToCleanMarkdown;
