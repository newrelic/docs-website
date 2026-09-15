const path = require('path');
const {
  mdxToCleanMarkdown,
  parseMarkdown,
  categorizePages,
  generateLlmsTxt,
  buildReleaseNotesHubs,
  buildWhatsNewHubs,
  writeTextFile,
} = require('./lib/helpers');

// Gatsby validates every named export of a plugin's gatsby-node.js against
// its fixed list of known lifecycle APIs (createPages, onCreateNode,
// sourceNodes, onPostBuild, ...) - any other export name fails the build
// with "is using the API 'X' which is not a known API". The actual
// conversion/categorization/hub-building logic (and its own tests) lives in
// ./lib/helpers.js, a plain internal module Gatsby never inspects - only
// the one real Gatsby API this plugin implements is exported from here.

/**
 * Main plugin hook - runs after the Gatsby build completes
 */
exports.onPostBuild = async ({ graphql, store, reporter }) => {
  const { program } = store.getState();
  const publicDir = path.join(program.directory, 'public');

  try {
    reporter.info('Generating clean markdown files for LLMs (llms.txt)');

    // Query all MDX content (English only, per requirements), plus What's
    // New and EOL announcements - both real, published sections, but
    // authored as plain MarkdownRemark under src/content/whats-new and
    // src/content/eol rather than as Mdx under src/content/docs, so they
    // need their own filters rather than falling under the allMdx query
    // above. Without this, neither section's real content was ever fetched
    // at all - the "EOL Announcements" bucket that existed before this only
    // ever matched an unrelated Diagnostics CLI (nrdiag) troubleshooting
    // path. rawMarkdownBody (not markdownAST - see parseMarkdown in
    // lib/helpers.js) is parsed into a real mdast tree ourselves, below.
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
        whatsNew: allMarkdownRemark(
          filter: {
            fileAbsolutePath: { regex: "/src/content/whats-new/.*\\\\.md$/" }
          }
        ) {
          nodes {
            id
            rawMarkdownBody
            frontmatter {
              title
            }
            fields {
              slug
            }
          }
        }
        eol: allMarkdownRemark(
          filter: {
            fileAbsolutePath: { regex: "/src/content/eol/.*\\\\.md$/" }
          }
        ) {
          nodes {
            id
            rawMarkdownBody
            frontmatter {
              title
            }
            fields {
              slug
            }
          }
        }
      }
    `;

    const { data, errors } = await graphql(query);
    if (errors) {
      // Surface the real GraphQL error (invalid field, bad filter, etc.)
      // instead of letting the next line's destructure crash with a
      // confusing "Cannot destructure property 'site' of 'data'" - that's
      // exactly what happened here when a since-fixed query selected a
      // field (`markdownAST`) that doesn't actually exist in this schema.
      throw new Error(`GraphQL query failed: ${errors.map((e) => e.message).join('; ')}`);
    }
    const { site, allMdx, whatsNew, eol } = data;
    const siteUrl = site.siteMetadata.siteUrl || 'https://docs.newrelic.com';

    // Mdx nodes already carry a parsed AST (mdxAST); MarkdownRemark nodes
    // only expose their raw source text, parsed into a real mdast tree via
    // parseMarkdown above - normalize both into one shape so all three
    // sources share the same processing loop below.
    const allNodes = [
      ...allMdx.nodes.map((node) => ({
        slug: node.fields?.slug || node.slug,
        title: node.frontmatter?.title,
        type: node.frontmatter?.type,
        ast: node.mdxAST,
      })),
      ...whatsNew.nodes.map((node) => ({
        slug: node.fields?.slug,
        title: node.frontmatter?.title,
        ast: parseMarkdown(node.rawMarkdownBody),
      })),
      ...eol.nodes.map((node) => ({
        slug: node.fields?.slug,
        title: node.frontmatter?.title,
        ast: parseMarkdown(node.rawMarkdownBody),
      })),
    ];

    reporter.info(`\tProcessing ${allNodes.length} pages...`);

    const processedPages = [];
    let successCount = 0;
    let errorCount = 0;

    // Process each content node (MDX docs page, What's New post, or EOL
    // announcement)
    for (const node of allNodes) {
      try {
        const { slug } = node;
        const title = node.title || slug.split('/').pop();

        // Convert the page's content tree to clean markdown - mdxToCleanMarkdown
        // only special-cases MDX/JSX node types, so a plain MarkdownRemark
        // tree (What's New, EOL) passes through it just as safely.
        const cleanMarkdown = mdxToCleanMarkdown(node.ast);

        // Add frontmatter header to markdown
        const markdownWithFrontmatter = `---
title: ${title}
source: ${siteUrl}${slug}
---

${cleanMarkdown}`;

        // Write individual .md file
        writeTextFile(path.join(publicDir, `${slug}.md`), markdownWithFrontmatter);

        processedPages.push({
          slug,
          title,
          type: node.type
        });

        successCount++;
      } catch (error) {
        errorCount++;
        reporter.warn(`\tFailed to process ${node.slug}: ${error.message}`);
      }
    }

    reporter.info(`\tGenerated ${successCount} markdown files (${errorCount} errors)`);

    // Release notes and What's New get their own nested llms.txt hubs
    // instead of being enumerated in the root index (see buildReleaseNotesHubs/
    // buildWhatsNewHubs in lib/helpers.js) - together they were ~59% of the
    // root file.
    const releaseNotesHubs = buildReleaseNotesHubs(processedPages, siteUrl);
    const whatsNewHubs = buildWhatsNewHubs(processedPages, siteUrl);

    [...releaseNotesHubs.files, ...whatsNewHubs.files].forEach(({ path: hubPath, content: hubContent }) => {
      writeTextFile(path.join(publicDir, hubPath), hubContent);
    });

    reporter.info(
      `\tGenerated ${releaseNotesHubs.files.length} release-notes hub files and ${whatsNewHubs.files.length} what's-new hub files`
    );

    // Categorize pages for the index
    const categorizedPages = categorizePages(processedPages);

    // Generate llms.txt index
    const llmsTxtContent = generateLlmsTxt(categorizedPages, siteUrl, {
      'Release notes': { url: releaseNotesHubs.indexUrl, count: releaseNotesHubs.count },
      "What's new?": { url: whatsNewHubs.indexUrl, count: whatsNewHubs.count },
    });
    const llmsTxtPath = path.join(publicDir, 'llms.txt');
    writeTextFile(llmsTxtPath, llmsTxtContent);

    reporter.info(`\tGenerated llms.txt at ${llmsTxtPath}`);
    reporter.info('\tDone!');

  } catch (error) {
    reporter.panicOnBuild(
      `Unable to generate llms.txt files: ${error.message}`,
      error
    );
  }
};
