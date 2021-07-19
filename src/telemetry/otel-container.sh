#!/bin/sh
docker run -d --rm -e NEW_RELIC_INSERT_KEY \
    -p 13133:13133 \
    -p 8888:8888 \
    -p 6831:6831 \
    -p 14268:14268  \
    -p 55680-55681:55680-55681 \
    -v "${PWD}/src/telemetry/otel-config.yml":/otel-config.yml \
    --name otelcol otel/opentelemetry-collector \
    --config otel-config.yml