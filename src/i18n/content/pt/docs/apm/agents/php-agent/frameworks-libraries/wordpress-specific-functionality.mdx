---
title: Funcionalidade específica do WordPress
tags:
  - Agents
  - PHP agent
  - Frameworks and libraries
metaDescription: 'WordPress websites: Use the newrelic.framework.wordpress.hooks INI setting to capture special metrics for hooks, plugins, and themes with New Relic.'
freshnessValidatedDate: never
translationType: machine
---

Se você [instalar o New Relic para sites WordPress](/docs/agents/php-agent/installation/install-php-agent-shared-hosting-service), o agente PHP recebe métricas adicionais. Uma página <DNT>**WordPress**</DNT> aparece na interface do usuário do New Relic: Vá para <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & services > (select a WordPress app)**</DNT>.

## Configuração

Você pode controlar quais métricas específicas do WordPress seu aplicativo envia para o New Relic usando a configuração `ini` `newrelic.framework.wordpress.hooks` do agente PHP. Isso está ativado por padrão nas versões <DNT>**5.3**</DNT> ou superiores e pode ser desativado com:

```ini
newrelic.framework.wordpress.hooks = false
```

Embora esta configuração use a palavra `.hooks`, ela controla a captura de todas as métricas específicas do WordPress.

O agente PHP do New Relic versão 10.16 adiciona a configuração `newrelic.framework.wordpress.hooks.options` `ini` que permite ajustar quais métricas específicas do WordPress e quais dados são enviados nessas métricas. Esta configuração aceita os seguintes valores: `"all_callbacks"` (padrão do agente PHP versão 10.16 do New Relic ), `"plugin_callbacks"` (padrão do agente PHP versão 10.20 do New Relic ) e `"threshold"`. A opção `"all_callbacks"` faz com que todas as funções de retorno de chamada do gancho sejam instrumentadas. As configurações `"plugin_callbacks"` e `"threshold"` permitem reduzir a sobrecarga do agente ajustando os dados coletados pelo agente. Definir `newrelic.framework.wordpress.hooks.options` como `"plugin_callbacks"` limita a instrumentação apenas ao retorno de chamada do plug-in/tema. Configurar `newrelic.framework.wordpress.hooks.options` para `"threshold"` desativa o monitoramento de plug-ins/temas e neste modo de operação o agente PHP New Relic registra apenas a execução de hooks que excedam `newrelic.framework.wordpress.hooks.threshold` (1ms é o limite padrão).

## Métrica

O agente PHP recebe métricas para o seguinte:

* <DNT>
    **Hooks**
  </DNT>

  : Essas métricas indicam o tempo gasto em cada gancho do WordPress. O tempo é calculado a partir das funções de despacho de gancho `apply_filters`, `apply_filters_ref_array`, `do_action` e `do_action_ref_array`. Quando `newrelic.framework.wordpress.hooks.options="all_callbacks"` isso inclui o retorno de chamada principal do WordPress. Quando `newrelic.framework.wordpress.hooks.options="plugin_callbacks"` isso inclui apenas plug-ins/temas de retorno de chamada. Em ambos os casos a contagem da métrica indica o número de retornos de chamada chamados. No entanto, quando `newrelic.framework.wordpress.hooks.options="threshold"`, a contagem métrica indica o número de vezes que um gancho foi executado.

* <DNT>
    **Plugins and themes**
  </DNT>

  : Essas métricas indicam o tempo gasto em cada plug-in e tema do WordPress. O tempo é calculado a partir das funções de despacho para ganchos. Esta métrica só é gerada quando `newrelic.framework.wordpress.hooks.options` é `"all_callbacks"` ou `"plugins_only"`.

## Integração com parceiros da New Relic [#integration]

Ao integrar seu aplicativo WordPress ao APM, você pode visualizar o desempenho diretamente na página <DNT>**Administration**</DNT> do seu aplicativo WordPress. Por exemplo, [W3 Total Cache](https://newrelic.com/blog/best-practices/web-performance-optimization-automation) é um dos parceiros da New Relic especializado em aplicativos WordPress.
