const { INSTRUCTIONS } = require('../constants');

module.exports = [
  {
    type: INSTRUCTIONS.RENAME,
    path: ['Security'],
    title: 'New Relic security',
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
    type: INSTRUCTIONS.ADD,
    path: ['New Relic security'],
    index: 0,
    node: {
      title: 'Overview',
      path: '/docs/security',
    },
  },
  {
    type: INSTRUCTIONS.MOVE,
    from: ['APIs', 'Get started', 'Intro to APIs'],
    to: ['Telemetry Data Platform', 'APIs'],
  },
  { type: INSTRUCTIONS.REMOVE, path: ['APIs'] },
  {
    type: INSTRUCTIONS.MOVE,
    from: ['Telemetry Data Platform', 'Ingest and manage data', '*'],
    to: ['Telemetry Data Platform'],
  },
  {
    type: INSTRUCTIONS.REORDER,
    path: ['Telemetry Data Platform', 'Get started'],
    index: 0,
  },
  {
    type: INSTRUCTIONS.REORDER,
    path: ['Telemetry Data Platform', 'Get started', 'Get to know TDP'],
    index: 0,
  },
  {
    type: INSTRUCTIONS.REORDER,
    path: ['Telemetry Data Platform', 'Understand data'],
    index: 1,
  },
  {
    type: INSTRUCTIONS.REORDER,
    path: ['Telemetry Data Platform', 'Manage data'],
    index: 2,
  },
  {
    type: INSTRUCTIONS.REORDER,
    path: ['Telemetry Data Platform', 'Convert data to metrics'],
    index: 3,
  },
  {
    type: INSTRUCTIONS.REORDER,
    path: ['Telemetry Data Platform', 'APIs'],
    index: 5,
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
    type: INSTRUCTIONS.MOVE,
    from: [
      'Full-Stack Observability',
      'Infrastructure monitoring',
      'Infrastructure monitoring',
      'Get started',
    ],
    to: ['Full-Stack Observability', 'Infrastructure monitoring'],
  },
  {
    type: INSTRUCTIONS.MOVE,
    from: [
      'Full-Stack Observability',
      'Infrastructure monitoring',
      'Infrastructure monitoring',
      'Guides',
      '*',
    ],
    to: [
      'Full-Stack Observability',
      'Infrastructure monitoring',
      'Get started',
    ],
  },
  {
    type: INSTRUCTIONS.MOVE,
    from: [
      'Full-Stack Observability',
      'Infrastructure monitoring',
      'Infrastructure monitoring',
      'Infrastructure and security',
      '*',
    ],
    to: [
      'Full-Stack Observability',
      'Infrastructure monitoring',
      'Get started',
    ],
  },
  {
    type: INSTRUCTIONS.MOVE,
    from: [
      'Full-Stack Observability',
      'Infrastructure monitoring',
      'Infrastructure monitoring',
      'Guides',
      '*',
    ],
    to: [
      'Full-Stack Observability',
      'Infrastructure monitoring',
      'Get started',
    ],
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
      '*',
    ],
    to: ['Full-Stack Observability', 'Infrastructure monitoring'],
  },
  {
    type: INSTRUCTIONS.MOVE,
    from: [
      'Full-Stack Observability',
      'Infrastructure monitoring',
      'Infrastructure monitoring UI',
      '*',
    ],
    to: ['Full-Stack Observability', 'Infrastructure monitoring'],
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
    from: ['Synthetics', '*'],
    to: ['Full-Stack Observability'],
  },
  {
    type: INSTRUCTIONS.REMOVE,
    path: ['Synthetics'],
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
  {
    type: INSTRUCTIONS.REORDER,
    path: ['Licenses', 'Overview'],
    index: 0,
  },
  {
    type: INSTRUCTIONS.UPDATE,
    path: ['Licenses'],
    node: {
      rootNav: false,
    },
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
    type: INSTRUCTIONS.UPDATE,
    path: ['New Relic in practice'],
    node: {
      path: '/docs/using-new-relic',
    },
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
      path: '/docs/alerts-applied-intelligence',
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
    path: ['Agents', '.NET agent', 'Getting started'],
    index: 5,
    node: {
      title: 'Latest release',
      path: '/docs/release-notes/agent-release-notes/net-release-notes/current',
    },
  },
  {
    type: INSTRUCTIONS.ADD,
    path: ['Agents', 'Java agent', 'Getting started'],
    index: 5,
    node: {
      title: 'Latest release',
      path:
        '/docs/release-notes/agent-release-notes/java-release-notes/current',
    },
  },
  {
    type: INSTRUCTIONS.ADD,
    path: ['Agents', 'Go agent', 'Get started'],
    index: 5,
    node: {
      title: 'Latest release',
      path: '/docs/release-notes/agent-release-notes/go-release-notes/current',
    },
  },
  {
    type: INSTRUCTIONS.ADD,
    path: ['Agents', 'C SDK', 'Get started'],
    index: 5,
    node: {
      title: 'Latest release',
      path:
        '/docs/release-notes/agent-release-notes/c-sdk-release-notes/current',
    },
  },
  {
    type: INSTRUCTIONS.ADD,
    path: ['Agents', 'Ruby agent', 'Getting started'],
    index: 6,
    node: {
      title: 'Latest release',
      path:
        '/docs/release-notes/agent-release-notes/ruby-release-notes/current',
    },
  },
  {
    type: INSTRUCTIONS.ADD,
    path: ['Agents', 'Python agent', 'Getting started'],
    index: 6,
    node: {
      title: 'Latest release',
      path:
        '/docs/release-notes/agent-release-notes/python-release-notes/current',
    },
  },
  {
    type: INSTRUCTIONS.ADD,
    path: ['Agents', 'PHP agent', 'Getting started'],
    index: 6,
    node: {
      title: 'Latest release',
      path: '/docs/release-notes/agent-release-notes/php-release-notes/current',
    },
  },
  {
    type: INSTRUCTIONS.ADD,
    path: ['Agents', 'Node.js agent', 'Getting started'],
    index: 5,
    node: {
      title: 'Latest release',
      path:
        '/docs/release-notes/agent-release-notes/nodejs-release-notes/current',
    },
  },
  {
    type: INSTRUCTIONS.RENAME,
    path: [
      'Alerts and Applied Intelligence',
      'Alerts and Applied Intelligence',
    ],
    title: 'Overview',
  },
  {
    type: INSTRUCTIONS.REORDER,
    path: ['Alerts and Applied Intelligence', 'Overview'],
    index: 0,
  },
  {
    type: INSTRUCTIONS.REORDER,
    path: ['Agents', 'Manage APM agents'],
    index: 0,
  },
  {
    type: INSTRUCTIONS.REORDER,
    path: ['Agents', 'C SDK'],
    index: 1,
  },
  {
    type: INSTRUCTIONS.REORDER,
    path: ['Agents', 'Go agent'],
    index: 2,
  },
  {
    type: INSTRUCTIONS.REORDER,
    path: ['Agents', 'Java agent'],
    index: 3,
  },
  {
    type: INSTRUCTIONS.REORDER,
    path: ['Agents', '.NET agent'],
    index: 4,
  },
  {
    type: INSTRUCTIONS.REORDER,
    path: ['Agents', 'Node.js agent'],
    index: 5,
  },
  {
    type: INSTRUCTIONS.REORDER,
    path: ['Agents', 'PHP agent'],
    index: 6,
  },
  {
    type: INSTRUCTIONS.REORDER,
    path: ['Agents', 'Python agent'],
    index: 7,
  },
  {
    type: INSTRUCTIONS.REORDER,
    path: ['Agents', 'Ruby agent'],
    index: 8,
  },
  {
    type: INSTRUCTIONS.REORDER,
    path: ['Agents', 'Open-source licensed agents'],
    index: 9,
  },
  {
    type: INSTRUCTIONS.REORDER,
    path: ['Agents', 'Java agent', 'Troubleshooting'],
    index: 11,
  },
  {
    type: INSTRUCTIONS.REORDER,
    path: ['Agents', '.NET agent', 'Troubleshooting'],
    index: 11,
  },
  {
    type: INSTRUCTIONS.REORDER,
    path: ['Agents', '.NET agent', 'Azure installation'],
    index: 2,
  },
  {
    type: INSTRUCTIONS.REORDER,
    path: ['Agents', '.NET agent', 'Configuration'],
    index: 4,
  },
  {
    type: INSTRUCTIONS.REORDER,
    path: ['Agents', '.NET agent', 'Other features'],
    index: 5,
  },
  {
    type: INSTRUCTIONS.REORDER,
    path: ['Agents', 'Node.js agent', 'Attributes'],
    index: 3,
  },
  {
    type: INSTRUCTIONS.REORDER,
    path: ['Agents', 'Ruby agent', 'Troubleshooting'],
    index: 8,
  },
  {
    type: INSTRUCTIONS.REORDER,
    path: ['New Relic One', 'Use New Relic One', 'Get started'],
    index: 0,
  },
  {
    type: INSTRUCTIONS.REORDER,
    path: ['Integrations', 'Intro to integrations'],
    index: 0,
  },
  {
    type: INSTRUCTIONS.REORDER,
    path: ['Integrations', 'Open source telemetry integrations'],
    index: 1,
  },
  {
    type: INSTRUCTIONS.REORDER,
    path: ['Integrations', 'Infrastructure integrations'],
    index: 2,
  },
  {
    type: INSTRUCTIONS.REORDER,
    path: ['Integrations', 'Kubernetes integration', 'Installation'],
    index: 1,
  },
  {
    type: INSTRUCTIONS.REORDER,
    path: [
      'Integrations',
      'Amazon integrations',
      'Troubleshooting',
      'No data appears',
    ],
    index: 0,
  },
  {
    type: INSTRUCTIONS.REORDER,
    path: ['Integrations', 'Prometheus integrations', 'Troubleshooting'],
    index: 4,
  },
  {
    type: INSTRUCTIONS.REORDER,
    path: [
      'Integrations',
      'Prometheus integrations',
      'Install and configure OpenMetrics',
    ],
    index: 2,
  },
  {
    type: INSTRUCTIONS.REORDER,
    path: ['Full-Stack Observability', 'APM', 'Getting started'],
    index: 0,
  },
  {
    type: INSTRUCTIONS.REORDER,
    path: [
      'Full-Stack Observability',
      'Mobile monitoring',
      'New Relic Mobile Android',
      'Troubleshoot',
    ],
    index: 5,
  },
  {
    type: INSTRUCTIONS.MOVE,
    from: ['Create integrations', '*'],
    to: ['Full-Stack Observability', 'Infrastructure monitoring'],
  },
  {
    type: INSTRUCTIONS.REMOVE,
    path: ['Create integrations'],
  },
  {
    type: INSTRUCTIONS.REORDER,
    path: [
      'Full-Stack Observability',
      'Infrastructure monitoring',
      'Get started',
    ],
    index: 0,
  },
  {
    type: INSTRUCTIONS.REORDER,
    path: [
      'Full-Stack Observability',
      'Infrastructure monitoring',
      'Infrastructure monitoring troubleshooting',
    ],
    index: 7,
  },
  {
    type: INSTRUCTIONS.REORDER,
    path: ['Full-Stack Observability', 'Synthetic monitoring', 'Guides'],
    index: 1,
  },
  {
    type: INSTRUCTIONS.REORDER,
    path: [
      'Full-Stack Observability',
      'Synthetic monitoring',
      'Troubleshooting',
    ],
    index: 8,
  },
  {
    type: INSTRUCTIONS.REORDER,
    path: [
      'Full-Stack Observability',
      'Synthetic monitoring',
      'Scripting monitors',
    ],
    index: 3,
  },
  {
    type: INSTRUCTIONS.ADD,
    path: ['Full-Stack Observability'],
    node: {
      title: 'Overview',
      path: '/docs/full-stack-observability',
    },
  },
  {
    type: INSTRUCTIONS.REORDER,
    path: ['Full-Stack Observability', 'Overview'],
    index: 0,
  },
  {
    type: INSTRUCTIONS.ADD,
    path: ['Telemetry Data Platform'],
    node: {
      title: 'Overview',
      path: '/docs/telemetry-data-platform',
    },
  },
  {
    type: INSTRUCTIONS.REORDER,
    path: ['Telemetry Data Platform', 'Overview'],
    index: 0,
  },
];
