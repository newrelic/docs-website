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

// keeping the naming streamlined and in matching with previous data
const RENAMES = { '.net': 'dotnet', node: 'nodejs' };

const IGNORE_SUBECTS = ['Node API runtime', 'Node browser runtime'];
/**
 * @param {string} subject The release note "subject" in frontmatter
 * @returns {string}
 */

const getAgentName = (subject) => {
  if (subject) {
    const subjLowercase = subject.toLowerCase();
    const agentName = AGENTS.find(
      (agent) =>
        subjLowercase.includes(agent) &&
        !subjLowercase.includes('insights') &&
        !IGNORE_SUBECTS.includes(subject)
    );

    return RENAMES[agentName] || agentName;
  }
};

module.exports = getAgentName;
