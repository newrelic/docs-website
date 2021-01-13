const { INSTRUCTIONS } = require('../constants');

module.exports = [
  {
    type: INSTRUCTIONS.RENAME,
    path: ['Security'],
    title: 'New Relic security',
  },
  {
    type: INSTRUCTIONS.ADD,
    path: ['New Relic security'],
    node: {
      title: 'Overview',
      path: '/docs/security',
    },
  },
  {
    type: INSTRUCTIONS.MOVE,
    from: ['New Relic security', 'New Relic security', '*'],
    to: ['New Relic security'],
  },
  {
    type: INSTRUCTIONS.REMOVE,
    path: ['New Relic security', 'Security and privacy'],
  },
  {
    type: INSTRUCTIONS.MOVE,
    from: ['APIs', 'Get started', 'Intro to APIs'],
    to: ['Telemetry Data Platform', 'APIs'],
  },
  { type: INSTRUCTIONS.REMOVE, path: ['APIs'] },
  {
    type: INSTRUCTIONS.MOVE,
    from: ['Telemetry Data Platform', 'Ingest and manage data', 'Get started'],
    to: ['Telemetry Data Platform'],
  },
  {
    type: INSTRUCTIONS.MOVE,
    from: [
      'Telemetry Data Platform',
      'Ingest and manage data',
      'Understand data',
    ],
    to: ['Telemetry Data Platform'],
  },
  {
    type: INSTRUCTIONS.MOVE,
    from: ['Telemetry Data Platform', 'Ingest and manage data', 'Manage data'],
    to: ['Telemetry Data Platform'],
  },
  {
    type: INSTRUCTIONS.MOVE,
    from: ['Telemetry Data Platform', 'Ingest and manage data', 'Ingest APIs'],
    to: ['Telemetry Data Platform'],
  },
  {
    type: INSTRUCTIONS.MOVE,
    from: ['Logs'],
    to: ['Full-Stack Observability'],
  },
  {
    type: INSTRUCTIONS.RENAME,
    path: [
      'Full-Stack Observability',
      'Logs',
      'Enable log management in New Relic',
    ],
    title: 'Logs in context',
  },
  {
    type: INSTRUCTIONS.MOVE,
    from: ['APM'],
    to: ['Full-Stack Observability'],
  },
  {
    type: INSTRUCTIONS.MOVE,
    from: ['Full-Stack Observability', 'APM', 'New Relic APM', '*'],
    to: ['Full-Stack Observability', 'APM'],
  },
  {
    type: INSTRUCTIONS.REMOVE,
    path: ['Full-Stack Observability', 'APM', 'New Relic APM'],
  },
  {
    type: INSTRUCTIONS.MOVE,
    from: ['Browser', 'Browser monitoring'],
    to: ['Full-Stack Observability'],
  },
  {
    type: INSTRUCTIONS.REMOVE,
    path: ['Browser'],
  },
  {
    type: INSTRUCTIONS.MOVE,
    from: ['Understand dependencies'],
    to: ['Full-Stack Observability'],
  },
  {
    type: INSTRUCTIONS.MOVE,
    from: ['Infrastructure'],
    to: ['Full-Stack Observability'],
  },
  {
    type: INSTRUCTIONS.RENAME,
    path: ['Full-Stack Observability', 'Infrastructure'],
    title: 'Infrastructure monitoring',
  },
  {
    type: INSTRUCTIONS.REMOVE,
    path: [
      'Full-Stack Observability',
      'Infrastructure monitoring',
      'Infrastructure monitoring',
    ],
  },
  {
    type: INSTRUCTIONS.MOVE,
    from: [
      'Full-Stack Observability',
      'Infrastructure monitoring',
      'Infrastructure alerts',
      'Infrastucture alert conditions',
    ],
    to: ['Full-Stack Observability', 'Infrastructure monitoring'],
  },
  {
    type: INSTRUCTIONS.REMOVE,
    path: [
      'Full-Stack Observability',
      'Infrastructure monitoring',
      'Infrastructure alerts',
    ],
  },
  {
    type: INSTRUCTIONS.MOVE,
    from: [
      'Full-Stack Observability',
      'Infrastructure monitoring',
      'Infrastructure monitoring UI',
      'Infrastucture UI',
    ],
    to: ['Full-Stack Observability', 'Infrastructure monitoring'],
  },
  {
    type: INSTRUCTIONS.REMOVE,
    path: [
      'Full-Stack Observability',
      'Infrastructure monitoring',
      'Infrastucture monitoring UI',
    ],
  },
  {
    type: INSTRUCTIONS.MOVE,
    from: [
      'Full-Stack Observability',
      'Infrastructure monitoring',
      'Integrations',
      'Types of integrations',
    ],
    to: ['Full-Stack Observability', 'Infrastructure monitoring'],
  },
  {
    type: INSTRUCTIONS.REMOVE,
    path: [
      'Full-Stack Observability',
      'Infrastructure monitoring',
      'Integrations',
    ],
  },
  {
    type: INSTRUCTIONS.MOVE,
    from: ['Mobile Monitoring'],
    to: ['Full-Stack Observability'],
  },
  {
    type: INSTRUCTIONS.REMOVE,
    path: [
      'Full-Stack Observability',
      'Mobile monitoring',
      'Mobile monitoring',
    ],
  },
  {
    type: INSTRUCTIONS.MOVE,
    from: ['Serverless function monitoring'],
    to: ['Full-Stack Observability'],
  },
  {
    type: INSTRUCTIONS.MOVE,
    from: ['Synthetics'],
    to: ['Full-Stack Observability'],
  },
  {
    type: INSTRUCTIONS.RENAME,
    path: ['Full-Stack Observability', 'Synthetics'],
    title: 'Synthetic monitoring',
  },
  {
    type: INSTRUCTIONS.REMOVE,
    path: [
      'Full-Stack Observability',
      'Synthetic monitoring',
      'Synthetic monitoring',
    ],
  },
  {
    type: INSTRUCTIONS.UPDATE,
    path: ['Agents', 'C SDK'],
    node: {
      path: '/docs/agents/c-sdk',
    },
  },
  {
    type: INSTRUCTIONS.MOVE,
    from: ['Agents', 'C SDK', 'C SDK', '*'],
    to: ['Agents', 'C SDK'],
  },
  { type: INSTRUCTIONS.REMOVE, path: ['Agents', 'C SDK', 'C SDK'] },
  {
    type: INSTRUCTIONS.UPDATE,
    path: ['Agents', 'Go agent'],
    node: {
      path: '/docs/agents/go-agent',
    },
  },
  {
    type: INSTRUCTIONS.MOVE,
    from: ['Agents', 'Go agent', 'Go agent', '*'],
    to: ['Agents', 'Go agent'],
  },
  { type: INSTRUCTIONS.REMOVE, path: ['Agents', 'Go agent', 'Go agent'] },
  {
    type: INSTRUCTIONS.UPDATE,
    path: ['Agents', 'Java agent'],
    node: {
      path: '/docs/agents/java-agent',
    },
  },
  {
    type: INSTRUCTIONS.MOVE,
    from: ['Agents', 'Java agent', 'Java agent', '*'],
    to: ['Agents', 'Java agent'],
  },
  { type: INSTRUCTIONS.REMOVE, path: ['Agents', 'Java agent', 'Java agent'] },
  {
    type: INSTRUCTIONS.UPDATE,
    path: ['Agents', 'NET agent'],
    node: {
      title: '.NET agent',
      path: '/docs/agents/net-agent',
    },
  },
  {
    type: INSTRUCTIONS.MOVE,
    from: ['Agents', '.NET agent', '.NET agent', '*'],
    to: ['Agents', '.NET agent'],
  },
  { type: INSTRUCTIONS.REMOVE, path: ['Agents', '.NET agent', '.NET agent'] },
  {
    type: INSTRUCTIONS.UPDATE,
    path: ['Agents', 'Nodejs agent'],
    node: {
      title: 'Node.js agent',
      path: '/docs/agents/nodejs-agent',
    },
  },
  {
    type: INSTRUCTIONS.MOVE,
    from: ['Agents', 'Node.js agent', 'Node.js agent', '*'],
    to: ['Agents', 'Node.js agent'],
  },
  {
    type: INSTRUCTIONS.REMOVE,
    path: ['Agents', 'Node.js agent', 'Node.js agent'],
  },
  {
    type: INSTRUCTIONS.UPDATE,
    path: ['Agents', 'PHP agent'],
    node: {
      path: '/docs/agents/php-agent',
    },
  },
  {
    type: INSTRUCTIONS.MOVE,
    from: ['Agents', 'PHP agent', 'PHP agent', '*'],
    to: ['Agents', 'PHP agent'],
  },
  { type: INSTRUCTIONS.REMOVE, path: ['Agents', 'PHP agent', 'PHP agent'] },
  {
    type: INSTRUCTIONS.UPDATE,
    path: ['Agents', 'Python agent'],
    node: {
      path: '/docs/agents/python-agent',
    },
  },
  {
    type: INSTRUCTIONS.MOVE,
    from: ['Agents', 'Python agent', 'Python agent', '*'],
    to: ['Agents', 'Python agent'],
  },
  {
    type: INSTRUCTIONS.REMOVE,
    path: ['Agents', 'Python agent', 'Python agent'],
  },
  {
    type: INSTRUCTIONS.UPDATE,
    path: ['Agents', 'Ruby agent'],
    node: {
      path: '/docs/agents/ruby-agent',
    },
  },
  {
    type: INSTRUCTIONS.MOVE,
    from: ['Agents', 'Ruby agent', 'Ruby agent', '*'],
    to: ['Agents', 'Ruby agent'],
  },
  {
    type: INSTRUCTIONS.REMOVE,
    path: ['Agents', 'Ruby agent', 'Ruby agent'],
  },
  {
    type: INSTRUCTIONS.RENAME,
    path: ['Insights', 'Insights'],
    title: 'Overview',
  },
  { type: INSTRUCTIONS.REORDER, path: ['Insights', 'Overview'], index: 0 },
  {
    type: INSTRUCTIONS.RENAME,
    path: ['Licenses', 'Licenses'],
    title: 'Overview',
  },

  // ----- Alerts and Applied Intelligence ----- \\
  {
    type: INSTRUCTIONS.DUPLICATE,
    from: [
      'Full-Stack Observability',
      'Infrastructure monitoring',
      'Infrastructure alert conditions',
    ],
    to: ['Alerts and Applied intelligence', 'New Relic alerts'],
  },

  // ----- Using New Relic ----- \\

  {
    type: INSTRUCTIONS.MOVE,
    from: ['Using New Relic'],
    to: ['New Relic in practice'],
  },
  {
    type: INSTRUCTIONS.MOVE,
    from: ['New Relic One'],
    to: ['New Relic in practice'],
  },
  {
    type: INSTRUCTIONS.MOVE,
    from: ['Query your data'],
    to: ['New Relic in practice'],
  },
  {
    type: INSTRUCTIONS.MOVE,
    from: ['Mobile apps'],
    to: ['New Relic in practice'],
  },
  {
    type: INSTRUCTIONS.REMOVE,
    path: ['Plugins'],
  },
  {
    type: INSTRUCTIONS.UPDATE,
    path: ['Telemetry Data Platform'],
    node: {
      icon: 'nr-tdp',
    },
  },
  {
    type: INSTRUCTIONS.UPDATE,
    path: ['Alerts and Applied intelligence'],
    node: {
      icon: 'nr-ai',
    },
  },
  {
    type: INSTRUCTIONS.UPDATE,
    path: ['Full-Stack Observability'],
    node: {
      icon: 'nr-fso',
    },
  },
  {
    type: INSTRUCTIONS.UPDATE,
    path: ['New Relic only'],
    node: {
      rootNav: false,
    },
  },
  {
    type: INSTRUCTIONS.UPDATE,
    path: ['Agents', 'PHP agent', 'PHP agent API'],
    node: {
      path: '/docs/agents/php-agent/php-agent-api',
    },
  },
  {
    type: INSTRUCTIONS.UPDATE,
    path: ['Agents', '.NET agent', 'NET agent API'],
    node: {
      path: '/docs/agents/net-agent/net-agent-api',
    },
  },
  {
    type: INSTRUCTIONS.UPDATE,
    path: ['Agents', 'Python agent', 'Python agent API'],
    node: {
      path: '/docs/agents/python-agent/python-agent-api',
    },
  },
  {
    type: INSTRUCTIONS.UPDATE,
    path: [
      'Full-Stack Observability',
      'Browser monitoring',
      'Browser agent and SPA API',
    ],
    node: {
      path: '/docs/browser/new-relic-browser/browser-agent-spa-api',
    },
  },
  {
    type: INSTRUCTIONS.UPDATE,
    path: [
      'Full-Stack Observability',
      'Mobile monitoring',
      'New Relic Mobile Android',
      'Android SDK API',
    ],
    node: {
      path: '/docs/mobile-monitoring/new-relic-mobile-android/android-sdk-api',
    },
  },
  {
    type: INSTRUCTIONS.UPDATE,
    path: [
      'Full-Stack Observability',
      'Mobile monitoring',
      'New Relic Mobile iOS',
      'iOS SDK API',
    ],
    node: {
      path: '/docs/mobile-monitoring/new-relic-mobile-ios/ios-sdk-api',
    },
  },
  {
    type: INSTRUCTIONS.ADD,
    path: ['Agents', '.NET agent'],
    index: -2,
    node: {
      title: 'Latest release',
      path: '/docs/release-notes/agent-release-notes/net-release-notes/current',
    },
  },
  {
    type: INSTRUCTIONS.ADD,
    path: ['Agents', 'Java agent'],
    index: -2,
    node: {
      title: 'Latest release',
      path:
        '/docs/release-notes/agent-release-notes/java-release-notes/current',
    },
  },
  {
    type: INSTRUCTIONS.ADD,
    path: ['Agents', 'Go agent'],
    index: -2,
    node: {
      title: 'Latest release',
      path: '/docs/release-notes/agent-release-notes/go-release-notes/current',
    },
  },
  {
    type: INSTRUCTIONS.ADD,
    path: ['Agents', 'C SDK'],
    index: -2,
    node: {
      title: 'Latest release',
      path:
        '/docs/release-notes/agent-release-notes/c-sdk-release-notes/current',
    },
  },
  {
    type: INSTRUCTIONS.ADD,
    path: ['Agents', 'Ruby agent'],
    index: -2,
    node: {
      title: 'Latest release',
      path:
        '/docs/release-notes/agent-release-notes/ruby-release-notes/current',
    },
  },
  {
    type: INSTRUCTIONS.ADD,
    path: ['Agents', 'Python agent'],
    index: -2,
    node: {
      title: 'Latest release',
      path:
        '/docs/release-notes/agent-release-notes/python-release-notes/current',
    },
  },
  {
    type: INSTRUCTIONS.ADD,
    path: ['Agents', 'PHP agent'],
    index: -2,
    node: {
      title: 'Latest release',
      path: '/docs/release-notes/agent-release-notes/php-release-notes/current',
    },
  },
  {
    type: INSTRUCTIONS.ADD,
    path: ['Agents', 'Node.js agent'],
    index: -2,
    node: {
      title: 'Latest release',
      path:
        '/docs/release-notes/agent-release-notes/nodejs-release-notes/current',
    },
  },
];
