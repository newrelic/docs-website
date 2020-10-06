const extractTags = (node) => {
  const openingTag = node.outerHTML.slice(
    0,
    node.outerHTML.indexOf(node.innerHTML)
  );

  const closingTag = `</${node.tagName.toLowerCase()}>\n`;

  return [openingTag, closingTag];
};

module.exports = {
  extractTags,
};
