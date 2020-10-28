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
    from: ['New Relic security', 'New Relic security', 'Data privacy'],
    to: ['New Relic security'],
  },
  {
    type: INSTRUCTIONS.MOVE,
    from: ['New Relic security', 'New Relic security', 'Compliance'],
    to: ['New Relic security'],
  },
  {
    type: INSTRUCTIONS.MOVE,
    from: ['New Relic security', 'New Relic security', 'Security bulletins'],
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
];
