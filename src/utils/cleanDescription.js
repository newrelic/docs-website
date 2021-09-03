/**
 * @param {string} subject The release note "subject" in frontmatter
 * @returns {string}
 */
const cleanDescription = (subject) => {
  if (subject) {
    const agentName = subject.replace(/(\r\\n|\\n|\r)/gm, '');
    console.log(`PARTY TIME ${agentName}`);
    return agentName;
  }
};

module.exports = cleanDescription;
