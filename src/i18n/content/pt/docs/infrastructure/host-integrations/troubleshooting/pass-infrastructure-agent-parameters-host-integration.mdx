---
title: Passar parâmetro de agente de infraestrutura para uma integração no host
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

Você tem o parâmetro de configuração definido no agente de infraestrutura e deseja passar o parâmetro para uma de suas [integração no host](/docs/infrastructure/host-integrations/installation/install-infrastructure-host-integrations).

## Solução

Você pode passar o parâmetro de configuração definido no agente para sua integração no host adicionando a variável `passthrough_environment` ao [arquivo de configuração](/docs/infrastructure/install-infrastructure-agent/configuration/infrastructure-agent-configuration-settings/#passthrough_-environment) do agente de infraestrutura.

A partir da versão 1.24.1 do agente de infraestrutura, `passthrough_environment` oferece suporte a regex para nomes de variáveis.

Por exemplo, se desejar transmitir as opções de proxy configuradas no agente de infraestrutura para uma integração, adicione a seguinte configuração ao arquivo de configuração de infraestrutura:

```
passthrough_environment:
  - HTTPS_PROXY
  - HTTP_PROXY
  - MY_REDIS_PASSWORD
  - NRIA_.*
```

A partir do agente de infraestrutura versão 1.14.0, você também pode definir variáveis de ambiente como parte do arquivo de configuração de integração, conforme mostrado abaixo (a configuração `passthrough_environment` também é necessária):

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
