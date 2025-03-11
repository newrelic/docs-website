---
title: Pasar parámetro de agente de infraestructura a una integración en el host
type: troubleshooting
tags:
  - Integrations
  - On-host integrations
  - Troubleshooting
metaDescription: 'New Relic infrastructure monitoring: Pass infrastructure agent parameters to on-host Integrations.'
freshnessValidatedDate: never
translationType: machine
---

## Problema

Tienes el parámetro de configuración definido en el agente de infraestructura y quieres pasar el parámetro a uno de sus [integración en el host](/docs/infrastructure/host-integrations/installation/install-infrastructure-host-integrations).

## Solución

Puede pasar el parámetro de configuración establecido en el agente a su integración en el host agregando la variable `passthrough_environment` al [archivo de configuración](/docs/infrastructure/install-infrastructure-agent/configuration/infrastructure-agent-configuration-settings/#passthrough_-environment) del agente de infraestructura.

A partir de la versión 1.24.1 del agente de infraestructura, `passthrough_environment` admite expresiones regulares para nombres de variables.

Por ejemplo, si desea pasar las opciones de proxy configuradas en el agente de infraestructura a una integración, agregue la siguiente configuración al archivo de configuración de infraestructura:

```
passthrough_environment:
  - HTTPS_PROXY
  - HTTP_PROXY
  - MY_REDIS_PASSWORD
  - NRIA_.*
```

A partir de la versión 1.14.0 del agente de infraestructura, También puede definir variables de entorno como parte del archivo de configuración de integración como se muestra a continuación (también se requiere la configuración `passthrough_environment` ):

```
integration_name: com.newrelic.redis
instances:
  - name: redis-metrics
    command: metrics
    arguments:
      hostname: localhost
      port: 6379
      password: {{MY_REDIS_PASSWORD}}
```
