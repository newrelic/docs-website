const toString = require(`mdast-util-to-string`);
const visit = require(`unist-util-visit`);
const slugs = require(`github-slugger`)();
const deburr = require(`lodash/deburr`);

function patch(context, key, value) {
  if (!context[key]) {
    context[key] = value;
  }

  return context[key];
}

const svgIcon = `<svg xmlns="http://www.w3.org/2000/svg" focusable="false" width="1rem" height="1rem" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"></path><line x1="8" y1="12" x2="16" y2="12"></line></svg>`;

module.exports = (
  { markdownAST },
  {
    icon = svgIcon,
    className = `anchor`,
    maintainCase = false,
    removeAccents = false,
    enableCustomId = true,
    elements = null,
  }
) => {
  slugs.reset();

  visit(markdownAST, `heading`, (node) => {
    // If elements array exists, do not create links for heading types not included in array
    if (Array.isArray(elements) && !elements.includes(`h${node.depth}`)) {
      return;
    }

    let id;
    if (enableCustomId && node.children.length > 0) {
      const last = node.children[node.children.length - 1];
      // This regex matches to preceding spaces and #custom-id at the end of a string.
      // Also, checks the text of node won't be empty after the removal of {#custom-id}.
      const match = /^(.*?)\s*#([\w-]+)$/.exec(toString(last));
      if (match && (match[1] || node.children.length > 1)) {
        id = match[2];
        // Remove the custom ID from the original text.
        if (match[1]) {
          last.value = match[1];
        } else {
          node.children.pop();
        }
      }
    }
    if (!id) {
      const slug = slugs.slug(toString(node), maintainCase);
      id = removeAccents ? deburr(slug) : slug;
    }
    const data = patch(node, `data`, {});

    patch(data, `id`, id);
    patch(data, `htmlAttributes`, {});
    patch(data, `hProperties`, {});
    patch(data.htmlAttributes, `id`, id);
    patch(data.hProperties, `id`, id);

    if (icon !== false) {
      patch(data.hProperties, `style`, `position:relative;`);
      const label = id.split(`-`).join(` `);
      node.children.push({
        type: 'mdxBlockElement',
        name: 'HeaderLink',
        data: {
          hProperties: {
            class: `${className} after`,
          },
        },
        children: [
          {
            type: `link`,
            url: `#${id}`,
            title: null,
            children: [],
            data: {
              hProperties: {
                'aria-label': `${label} permalink`,
                class: `${className} after`,
              },
              hChildren: [
                {
                  type: `raw`,
                  value: icon,
                },
              ],
            },
          },
        ],
      });
    }
  });

  return markdownAST;
};
