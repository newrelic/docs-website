const fs = require('fs');
const path = require('path');
const visit = require('unist-util-visit');
const remove = require('unist-util-remove');
const toString = require('mdast-util-to-string');
const unified = require('unified');
const stringify = require('remark-stringify');

/**
 * Custom component handlers that convert MDX components to clean markdown
 */
const cleanMarkdownHandlers = {
  // Convert Callout to blockquote with variant indicator
  mdxJsxFlowElement: (node) => {
    if (node.name === 'Callout') {
      const variant = node.attributes.find(attr => attr.name === 'variant')?.value || 'tip';
      const variantEmoji = {
        tip: '💡',
        important: '⚠️',
        caution: '⚠️',
        warning: '⚠️'
      }[variant] || '💡';

      return {
        type: 'blockquote',
        children: [
          {
            type: 'paragraph',
            children: [
              { type: 'strong', children: [{ type: 'text', value: `${variantEmoji} ${variant.toUpperCase()}` }] },
              { type: 'text', value: '\n\n' },
              ...node.children
            ]
          }
        ]
      };
    }

    // Convert ButtonLink to regular link
    if (node.name === 'ButtonLink') {
      const href = node.attributes.find(attr => attr.name === 'to')?.value || '#';
      const text = toString(node);
      return {
        type: 'link',
        url: href.startsWith('/') ? `https://docs.newrelic.com${href}` : href,
        children: [{ type: 'text', value: text }]
      };
    }

    // Strip DNT (Do Not Translate) - just keep the content
    if (node.name === 'DNT') {
      return node.children;
    }

    // Convert CollapserGroup to nested list
    if (node.name === 'CollapserGroup') {
      return {
        type: 'html',
        value: '<!-- Expandable section -->'
      };
    }

    // Convert TechTile to list item with link
    if (node.name === 'TechTile') {
      const name = node.attributes.find(attr => attr.name === 'name')?.value || '';
      const to = node.attributes.find(attr => attr.name === 'to')?.value || '';
      return {
        type: 'listItem',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'link',
                url: to.startsWith('/') ? `https://docs.newrelic.com${to}` : to,
                children: [{ type: 'text', value: name }]
              }
            ]
          }
        ]
      };
    }

    // Default: strip the component but keep children
    return node.children;
  },

  // Handle inline MDX components
  mdxJsxTextElement: (node) => {
    // Convert InlineCode to regular code
    if (node.name === 'InlineCode') {
      return {
        type: 'inlineCode',
        value: toString(node)
      };
    }

    // Convert InlinePopover and other inline elements to text
    if (node.name === 'InlinePopover') {
      const text = node.attributes.find(attr => attr.name === 'text')?.value || toString(node);
      return {
        type: 'text',
        value: text
      };
    }

    // Strip DNT (Do Not Translate)
    if (node.name === 'DNT') {
      return node.children;
    }

    // Default: convert to text
    return {
      type: 'text',
      value: toString(node)
    };
  }
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

  // Transform custom components to markdown equivalents
  visit(ast, (node, index, parent) => {
    // Handle MDX v1 block elements (legacy syntax)
    if (node.type === 'mdxBlockElement') {
      // Extract component name and attributes
      const componentName = node.name;
      const attributes = {};
      if (node.attributes) {
        node.attributes.forEach(attr => {
          attributes[attr.name] = attr.value;
        });
      }

      // Create a compatible node structure for the handler
      const compatNode = {
        name: componentName,
        attributes: node.attributes || [],
        children: node.children || []
      };

      const replacement = cleanMarkdownHandlers.mdxJsxFlowElement(compatNode);
      if (replacement && parent && index !== null) {
        if (Array.isArray(replacement)) {
          parent.children.splice(index, 1, ...replacement);
        } else {
          parent.children[index] = replacement;
        }
      }
    }

    // Handle MDX v1 span elements (legacy inline syntax)
    if (node.type === 'mdxSpanElement') {
      const componentName = node.name;
      const attributes = {};
      if (node.attributes) {
        node.attributes.forEach(attr => {
          attributes[attr.name] = attr.value;
        });
      }

      const compatNode = {
        name: componentName,
        attributes: node.attributes || [],
        children: node.children || []
      };

      const replacement = cleanMarkdownHandlers.mdxJsxTextElement(compatNode);
      if (replacement && parent && index !== null) {
        if (Array.isArray(replacement)) {
          parent.children.splice(index, 1, ...replacement);
        } else {
          parent.children[index] = replacement;
        }
      }
    }

    // Handle JSX flow elements (block-level)
    if (node.type === 'mdxJsxFlowElement' && cleanMarkdownHandlers.mdxJsxFlowElement) {
      const replacement = cleanMarkdownHandlers.mdxJsxFlowElement(node);
      if (replacement && parent && index !== null) {
        // Handle array replacements (e.g., DNT that returns children)
        if (Array.isArray(replacement)) {
          parent.children.splice(index, 1, ...replacement);
        } else {
          parent.children[index] = replacement;
        }
      }
    }

    // Handle JSX text elements (inline)
    if (node.type === 'mdxJsxTextElement' && cleanMarkdownHandlers.mdxJsxTextElement) {
      const replacement = cleanMarkdownHandlers.mdxJsxTextElement(node);
      if (replacement && parent && index !== null) {
        // Handle array replacements (e.g., DNT that returns children)
        if (Array.isArray(replacement)) {
          parent.children.splice(index, 1, ...replacement);
        } else {
          parent.children[index] = replacement;
        }
      }
    }

    // Convert relative links to absolute
    if (node.type === 'link' && node.url) {
      if (node.url.startsWith('/docs/')) {
        node.url = `https://docs.newrelic.com${node.url}`;
      }
    }

    // Ensure image URLs are absolute
    if (node.type === 'image' && node.url) {
      if (node.url.startsWith('/')) {
        node.url = `https://docs.newrelic.com${node.url}`;
      }
    }
  });

  // Convert AST to markdown string
  const processor = unified()
    .use(stringify, {
      bullet: '-',
      fence: '`',
      fences: true,
      incrementListMarker: true,
      handlers: {
        // Add fallback handlers for any remaining MDX node types
        mdxBlockElement: (node) => {
          // If we missed this in the visit loop, just return children as text
          return toString(node);
        },
        mdxSpanElement: (node) => {
          return toString(node);
        },
        mdxJsxFlowElement: (node) => {
          return toString(node);
        },
        mdxJsxTextElement: (node) => {
          return toString(node);
        }
      }
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
