---
title: Atualizar para logs contextualizados automático
tags:
  - Logs
metaDescription: 'For apps that have Logs in Context enabled, learn'
freshnessValidatedDate: never
translationType: machine
---

Este guia é aplicável a clientes que já tenham configurado [encaminhamento de logs](/docs/logs/forward-logs/enable-log-management-new-relic/) ou [log in context](/docs/apm/new-relic-apm/getting-started/get-started-logs-context/); caso você não tenha configurado nenhum dos recursos, recomendamos atualizar para a versão mais recente do agente <InlinePopover type="apm"/>para aproveitar o [encaminhamento automático de logs e a decoração local](/docs/apm/new-relic-apm/getting-started/get-started-logs-context/).

Se você estiver enviando log do aplicativo para New Relic, será possível enviar log duplicado se você atualizar para o agente de linguagem APM mais recente sem revisar sua estratégia de log atual. O caminho de migração ideal dependerá do seu aplicativo e de seu ambiente.

Se você tiver processamento de dados extensivo ou lógica de enriquecimento em sua configuração de logs existente, o envio de log diretamente do agente APM ignorará essa etapa.

<Callout variant="tip">
  Tem muito log do Go? Confira nosso [tutorial sobre como otimizá-los e gerenciá-los](/docs/tutorial-large-logs/get-started-managing-large-logs/).
</Callout>

Existem dois caminhos principais de atualização que recomendamos para evitar o envio de logs duplicados:

1. Atualize para o [agente APM](/docs/new-relic-one/install-configure/update-new-relic-agent/) mais recente, que encaminha automaticamente o log, e então desabilite o direcionador de logs:

   * Atualize a configuração framework de log do seu aplicativo para garantir que seu aplicativo não esteja gravando log para preparação ou produção. Isso pode ser para um arquivo no disco ou para STDOUT se você estiver coletando log usando um arquivo secundário
   * Desative o encaminhamento de logs seguindo o arquivo de log do seu aplicativo. Desabilitar contêiner(es) usado(s) para coletar log do aplicativo
   * Desative o encaminhamento de logs com seu provedor de nuvem
   * Reinicie o agente APM/implante suas alterações


2. Use o agente APM com direcionador de logs (recomendado apenas se um encaminhador já estiver instalado):

   * [Atualizar](/docs/new-relic-one/install-configure/update-new-relic-agent) o agente APM
   * Configure o agente APM para garantir que a decoração log local esteja habilitada e o encaminhamento de logs esteja desabilitado.
   * Reverta as alterações anteriores feitas na configuração framework de log do aplicativo para ativar [o logs contextualizados manual](/docs/logs/logs-context/logs-in-context#enable-logs).
   * Confirme se framework de log do aplicativo está configurada para gravar o log do aplicativo em STDOUT ou em um arquivo que está sendo monitorado/assistido por um direcionador de logs.
   * Reinicie o agente APM/implante suas alterações

### Habilitando decoração local

A documentação sobre como configurar a decoração local na versão mais recente do agente de idioma pode ser encontrada abaixo:

* [Java](/docs/logs/logs-context/java-configure-logs-context-all/#2-decorate)
* [Ruby](/docs/logs/logs-context/configure-logs-context-ruby)
* [.NET](/docs/logs/logs-context/net-configure-logs-context-all#2-decorate)

### Atualizando com Kubernetes

Se [o log in context](/docs/apm/new-relic-apm/getting-started/get-started-logs-context/) tiver sido configurado, os clientes que usam nosso Kubernetes encaminhamento de logs [](https://github.com/newrelic/helm-charts/tree/master/charts/newrelic-logging#installation)precisarão reverter as alterações feitas na framework configuração log do aplicativo ao implementar o log in context [manualmente](/docs/logs/logs-context/logs-in-context#enable-logs). Isso é necessário para preservar o enriquecimento de metadados do Kubernetes realizado pela nossa integração.

Observe que a framework de log do aplicativo deve ser configurada para gravar o log do aplicativo em STDOUT.

A decoração local precisa estar ativada no agente <InlinePopover type="apm"/>para garantir que seu registro seja contextualizado. Nenhuma alteração precisa ser feita em sua configuração de encaminhamento de logs.

Siga as etapas abaixo para atualizar seu monitoramento do Kubernetes:

1. [Atualize](/docs/new-relic-one/install-configure/update-new-relic-agent/) o agente APM.
2. Configure o agente APM para garantir que a decoração log local esteja habilitada e o encaminhamento de logs esteja desabilitado.
3. Reverta as alterações anteriores feitas na configuração framework de registro do aplicativo para ativar o logs contextualizados [manual](/docs/logs/logs-context/logs-in-context#enable-logs).
4. Confirme se framework de log do aplicativo está configurada para gravar o log do aplicativo em STDOUT ou em um arquivo que está sendo monitorado/assistido por um direcionador de logs.
5. Reinicie o agente APM/implante suas alterações.
