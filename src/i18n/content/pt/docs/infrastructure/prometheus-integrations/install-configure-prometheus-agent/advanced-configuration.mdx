---
title: Configuração avançada para o agente Prometheus
tags:
  - Integrations
  - Prometheus integrations
  - Install and configure Prometheus agent
  - Advanced configuration
metaDescription: Advanced configuration for the Prometheus agent
freshnessValidatedDate: never
translationType: machine
---

## Evite aumentos de faturamento [#rate-limits]

Evite enviar dados do Prometheus que não sejam relevantes para suas necessidades de monitoramento. Em vez disso, use filtros para ignorar ou incluir métricas específicas, que ajudam a controlar a quantidade de dados enviados para a New Relic e evitar cobranças adicionais.

Conforme explicado no [guia de configuração](/docs/infrastructure/prometheus-integrations/install-configure-prometheus-agent/setup-prometheus-agent), alguns destinos são copiados por padrão e todos os dados expostos desses destinos descobertos são enviados. Portanto, você pode exceder os limites da plataforma New Relic e aumentar suas cobranças.

Para reduzir a quantidade de dados que estão sendo definidos, você pode personalizar a configuração do agente prometheus:

* Configurando [quais destinos estão sendo raspados](/docs/infrastructure/prometheus-integrations/install-configure-prometheus-agent/setup-prometheus-agent#scrape-prometheus-integrations).
* Ajustando o [intervalo de raspagem](/docs/infrastructure/prometheus-integrations/install-configure-prometheus-agent/setup-prometheus-agent#target-scrape-interval).
* Aplicando [filtros métricos](/docs/infrastructure/prometheus-integrations/install-configure-prometheus-agent/setup-prometheus-agent#drop-keep-metrics).
* Ao configurar [quais integração do prometheus estão habilitadas](/docs/infrastructure/prometheus-integrations/install-configure-prometheus-agent/advanced-configuration#enable-disable-integrations).

Veja também nossas [dicas sobre resolução de problemas](/docs/infrastructure/prometheus-integrations/install-configure-prometheus-agent/troubleshooting-guide).

## Ativar ou desativar a integração do prometheus [#enable-disable-integrations]

O agente prometheus usa os campos `app_values` e `source_labels` para extrair métricas da integração do Prometheus, que você pode personalizar. Você pode verificar os valores padrão no [repositório gráfico do GitHub](https://github.com/newrelic/newrelic-prometheus-configurator/blob/main/charts/newrelic-prometheus-agent/values.yaml).

* `source_labels` define os nomes dos rótulos a serem usados para filtrar métricas dos recursos correspondentes.
* `app_values` define os valores dos nomes dos rótulos que são filtrados.

Por instância, com os seguintes valores:

```yaml
# (...)
kubernetes:
  source_labels: ["app.kubernetes.io/name", "app.newrelic.io/name"]
  app_values: ["redis"]
# (...)
```

Todos os trabalhos com `integrations_filter.enabled: true` incluiriam apenas a métrica incluindo os rótulos correspondentes a `"app.kubernetes.io/name"` e `"app.newrelic.io/name"`, cujo valor é `"redis"`.

Você pode estender os valores padrão para incluir rótulos ou valores de aplicativo adicionais. Você também pode retirar os valores cujos serviços referidos no aplicativo padrão não lhe interessam.

## Aplicar configuração nativa do Prometheus [#native-config]

Se você tiver algum tipo de requisito que não é atualmente compatível com a camada de configuração fornecida pelo agente Prometheus, poderá definir uma configuração adicional de raspagem no formato Prometheus. Para fazer isso, use os campos `extra_` incluindo a configuração válida do Prometheus que não será analisada de forma alguma.

<Callout variant="important">
  `extra_` os campos devem incluir a configuração bruta do Prometheus.
</Callout>

Portanto, a métrica coletada não terá por padrão os metadados como `pod` ou `service`, adicionados pelo agente para o destino estático ou jobs Kubernetes . Use esta configuração apenas como solução alternativa quando os campos suportados não atenderem às suas necessidades. Veja mais detalhes na [documentação do helm-chart](https://github.com/newrelic/newrelic-prometheus-configurator/blob/main/charts/newrelic-prometheus-agent/README.md).
