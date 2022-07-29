require('dotenv').config();
const uuid = require('uuid');
const process = require('process');
const opentelemetry = require('@opentelemetry/sdk-node');
const {
  getNodeAutoInstrumentations,
} = require('@opentelemetry/auto-instrumentations-node');
const { Resource } = require('@opentelemetry/resources');
const {
  SemanticResourceAttributes,
} = require('@opentelemetry/semantic-conventions');
const {
  OTLPTraceExporter,
} = require('@opentelemetry/exporter-trace-otlp-proto');
const api = require('@opentelemetry/api');

const NR_OTLP_ENDPOINT = 'https://otlp.nr-data.net:4317/v1/traces';

// NOTE: set this to DEBUG if needed
api.diag.setLogger(new api.DiagConsoleLogger(), api.DiagLogLevel.INFO);

// Declare the resource to be used.
//    A resource represents a collection of attributes describing the
//    service. This collection of attributes will be associated with all
//    telemetry generated from this service (traces, metrics, logs).
const resource = new Resource({
  [SemanticResourceAttributes.SERVICE_NAME]: 'Gatsby-Build-Test',
  [SemanticResourceAttributes.SERVICE_INSTANCE_ID]: uuid.v4(),
});

const instrumentations = [getNodeAutoInstrumentations()];

console.log({ NR_API_KEY: process.env.NR_API_KEY });

// Configure the OTLP/PROTO trace exporter.
const traceExporter = new OTLPTraceExporter({
  url: NR_OTLP_ENDPOINT,
  headers: {
    'api-key': process.env.NR_API_KEY,
  },
});

// Configre the OpenTelemetry NodeSDK to export traces
const sdk = new opentelemetry.NodeSDK({
  resource,
  traceExporter,
  instrumentations,
});

// initialize the SDK and register with the OpenTelemetry API
sdk
  .start()
  .then(() => console.log('Tracing initialized'))
  .catch((error) => console.log('Error initializing tracing', error));

// Gracefully shut down the SDK on process exit
process.on('SIGTERM', () => {
  sdk
    .shutdown()
    .then(() => console.log('Tracing terminated'))
    .catch((error) => console.log('Error terminating tracing', error))
    .finally(() => process.exit(0));
});
