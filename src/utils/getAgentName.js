// this omits Synthetics private minions, Insights apps, tvOS agents, and unity plugins
const AGENTS = [
  '.net',
  'android',
  'browser',
  'dotnet',
  'go',
  'infrastructure',
  'ios',
  'java',
  'node',
  'nodejs',
  'php',
  'python',
  'ruby',
  'sdk',
];

/**
 * @param {string} subject The release note "subject" in frontmatter
 * @returns {string}
 */
const getAgentName = (subject) =>
  subject &&
  AGENTS.find(
    (agent) =>
      subject.toLowerCase().includes(agent) &&
      !subject.toLowerCase().includes('insights')
  );

module.exports = getAgentName;
