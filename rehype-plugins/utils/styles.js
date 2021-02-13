const parseStyleString = (string) => {
  if (!string) {
    return {};
  }

  return string
    .split(/;\s*/)
    .filter(Boolean)
    .reduce((style, rule) => {
      const [property, value] = rule.split(/:\s*/);

      return { ...style, [property]: value };
    }, {});
};

const compileStyleObject = (styles) =>
  Object.entries(styles)
    .filter(([, value]) => Boolean(value))
    .map((rule) => rule.join(': '))
    .join('; ');

module.exports = { parseStyleString, compileStyleObject };
