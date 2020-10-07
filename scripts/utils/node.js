const quote = (value) => `"${value}"`;

const extractTags = (node) => {
  const tag = node.nodeName.toLowerCase();
  const attributes = Array.from(node.attributes)
    .map((attr) => [attr.name, quote(attr.value)].join('='))
    .join(' ');

  const openingTag = attributes ? `<${tag} ${attributes}>` : `<${tag}>`;

  const closingTag = `</${node.tagName.toLowerCase()}>\n`;

  return [openingTag, closingTag];
};

module.exports = {
  extractTags,
};
