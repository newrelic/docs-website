import defaultIcons from '@newrelic/gatsby-theme-newrelic/src/icons/newrelic';
import AIMonitoringIcon from './newrelic/ai-monitoring';
import CaretUp from './newrelic/caret-up';
import InfoAnnouncement from './newrelic/info-announcement';
import K8sClusterIcon from './newrelic/k8s-cluster';
import Dashboard from './newrelic/dashboard';
import NavCollapseIcon from './newrelic/nav-collapse';
import VulnerabilityManagementIcon from './newrelic/vulnerability-management';
import NetworkMonitoringIcon from './newrelic/network-monitoring';
import MobileIcon from './newrelic/mobile';
import MonitoringIcon from './newrelic/monitoring';
import LogsIcon from './newrelic/logs';
import InfrastructureIcon from './newrelic/infrastructure';
import BrowserIcon from './newrelic/browser';
import AlertsAiIcon from './newrelic/alerts-ai';
import ApmIcon from './newrelic/apm';
import StackTraceIcon from './newrelic/stack-trace';
import LatencyIcon from './newrelic/latency';
import SoftwareIcon from './newrelic/software';
import LearningModelsIcon from './newrelic/learning-models';
import MachineLearningEndpointsIcon from './newrelic/ml-endpoints';
import SyntheticsIcon from './newrelic/synthetics';
import UpstreamDeploymentIcon from './newrelic/upstream-deployment';
import ServiceMapIcon from './newrelic/service-map';
import QueryIcon from './newrelic/query';
import HorizontalChartIcon from './newrelic/horizontal-chart';
import NotesEditIcon from './newrelic/notes-edit';
import InboxIcon from './newrelic/inbox';
import IASTIcon from './newrelic/iast';
import NeedsInstrumentationIcon from './newrelic/needs-instrumentation';
import NotesAddIcon from './newrelic/notes-add';
import UserIcon from './newrelic/user';
import AreaChartIcon from './newrelic/area-chart';
import BookmarkIcon from './newrelic/bookmark';
import PrivateIcon from './newrelic/private';
import AttachmentIcon from './newrelic/attachment';
import DocLinkIcon from './newrelic/doc-link';

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
  'stack-trace': StackTraceIcon,
  latency: LatencyIcon,
  software: SoftwareIcon,
  monitoring: MonitoringIcon,
  'ai-monitoring': AIMonitoringIcon,
  'k8s-cluster': K8sClusterIcon,
  'learning-models': LearningModelsIcon,
  'ml-endpoints': MachineLearningEndpointsIcon,
  synthetics: SyntheticsIcon,
  'upstream-deployment': UpstreamDeploymentIcon,
  'service-map': ServiceMapIcon,
  query: QueryIcon,
  'horizontal-chart': HorizontalChartIcon,
  'notes-edit': NotesEditIcon,
  inbox: InboxIcon,
  iast: IASTIcon,
  'needs-instrumentation': NeedsInstrumentationIcon,
  'notes-add': NotesAddIcon,
  user: UserIcon,
  'area-chart': AreaChartIcon,
  bookmark: BookmarkIcon,
  private: PrivateIcon,
  attachment: AttachmentIcon,
  'doc-link': DocLinkIcon,
};
