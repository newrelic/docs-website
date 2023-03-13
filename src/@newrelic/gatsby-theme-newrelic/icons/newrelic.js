import defaultIcons from '@newrelic/gatsby-theme-newrelic/src/icons/newrelic';
import CaretUp from './newrelic/caret-up';
import InfoAnnouncement from './newrelic/info-announcement';
import Dashboard from './newrelic/dashboard';
import NavCollapseIcon from './newrelic/nav-collapse';
import VulnerabilityManagementIcon from './newrelic/vulnerability-management';
import NetworkMonitoringIcon from './newrelic/network-monitoring';
import MobileIcon from './newrelic/mobile';
import LogsIcon from './newrelic/logs';
import InfrastructureIcon from './newrelic/infrastructure';
import BrowserIcon from './newrelic/browser';
import AlertsAiIcon from './newrelic/alerts-ai';
import ApmIcon from './newrelic/apm';

export default {
  ...defaultIcons,
  'caret-up': CaretUp,
  'info-announcement': InfoAnnouncement,
  dashboard: Dashboard,
  'nav-collapse': NavCollapseIcon,
  vulnerability: VulnerabilityManagementIcon,
  'network-monitoring': NetworkMonitoringIcon,
  mobile: MobileIcon,
  logs: LogsIcon,
  infrastructure: InfrastructureIcon,
  browser: BrowserIcon,
  'alerts-ai': AlertsAiIcon,
  apm: ApmIcon,
};
