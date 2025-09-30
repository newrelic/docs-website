/**
 * maps a parent folder name for release notes to an agent name.
 */
const AGENTS = {
  'android-release-notes': 'android',
  'browser-agent-release-notes': 'browser',
  'c-sdk-release-notes': 'sdk',
  'capacitor-release-notes': 'capacitor',
  'cloud-integration-release-notes': 'cloud integration',
  'containerized-private-minions-release-notes': 'cpm',
  'cordova-release-notes': 'cordova',
  'diagnostics-cli-release-notes': 'diagnostics cli',
  'flutter-release-notes': 'flutter',
  'go-release-notes': 'go',
  'infrastructure-agent-release-notes': 'infrastructure',
  'ios-release-notes': 'ios',
  'java-release-notes': 'java',
  'job-manager-release-notes': 'job manager',
  'kubernetes-integration-release-notes': 'kubernetes',
  'logs-release-notes': 'logs',
  'net-maui-release-notes': '.net maui',
  'net-release-notes': '.net',
  'new-relic-android-release-notes': 'newrelic for android',
  'new-relic-browser-release-notes': 'newrelic for browser',
  'new-relic-ios-release-notes': 'newrelic for ios',
  'new-relic-tvos-release-notes': 'newrelic for tvos',
  'node-api-runtime-release-notes': 'node api runtime',
  'node-browser-runtime-release-notes': 'node browser runtime',
  'nodejs-release-notes': 'node',
  'org-user-mgmt-release-notes': 'org user mgmt',
  'php-release-notes': 'php',
  'ping-runtime-release-notes': 'ping runtime',
  'python-release-notes': 'python',
  'react-native-release-notes': 'react native',
  'ruby-release-notes': 'ruby',
  'service-levels-release-notes': 'service levels',
  'xamarin-release-notes': 'xamarin',
};

// keeping the naming streamlined and in matching with previous data
const RENAMES = { '.net': 'dotnet', node: 'nodejs' };

/**
 * @param {string} filepath The absolute filepath of the release note
 * @returns {string} the agent name for the release note
 */
const getAgentName = (filepath) => {
  if (!filepath.includes('src/content/docs/release-notes/')) {
    // eslint-disable-next-line no-console
    console.error(
      `getAgentName bad filepath: ${filepath}.\nfilepath should include src/content/docs/release-notes/`
    );
    return null;
  }

  const [, relativePath] = filepath.split('src/content/docs/release-notes/');
  const parts = relativePath.split('/');
  const parent = parts.at(-2);

  const agentName = AGENTS[parent] ?? null;
  return RENAMES[agentName] ?? agentName;
};

module.exports = getAgentName;
