/**
 * given a release note's frontmatter,
 * return what the title of the release note should be.
 */
const getTitle = (frontmatter) => {
  const { title, version, subject } = frontmatter;

  if (title) {
    return title;
  }

  if (subject?.startsWith('Docs')) {
    return `${subject} ${version}`;
  }

  return version ? `${subject} v${version}` : subject;
};

module.exports = {
  getTitle,
};
