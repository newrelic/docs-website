const insertChild = (node, parent, idx) => {
  if (idx == null) {
    return {
      ...parent,
      children: [...parent.children, node],
    };
  }

  return {
    ...parent,
    children: [
      ...parent.children.slice(0, idx),
      node,
      ...parent.children.slice(idx + 1),
    ],
  };
};

module.exports = { insertChild };
