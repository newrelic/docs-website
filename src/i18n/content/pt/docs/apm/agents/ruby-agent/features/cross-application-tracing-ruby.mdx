---
title: Rastreamento multiaplicativo em Ruby
tags:
  - Agents
  - Ruby agent
  - Features
metaDescription: 'To set up cross application tracing for the New Relic Ruby agent, start here.'
freshnessValidatedDate: never
translationType: machine
---

<Callout variant="important">
  A partir da versão 8.0.0 do agente Ruby, [distributed tracing](/docs/apm/distributed-tracing/getting-started/introduction-distributed-tracing) está ativado por padrão. distributed tracing melhora o rastreamento multiaplicativo e é recomendado para sistemas distribuídos grandes.

  O rastreamento multiaplicativo foi descontinuado em favor do distributed tracing e será removido em uma versão futura do agente. Se precisar continuar usando o rastreio multiaplicativo, como para uma framework de middleware não padrão, consulte as [informações de configuração](#configuration) neste documento.
</Callout>

## Requisitos

Siga estes requisitos para usar o rastreamento multiaplicativo com o agente Ruby:

1. Certifique-se de que as solicitações que estão sendo instrumentadas usem uma [biblioteca cliente HTTP suportada](/docs/ruby/ruby-http-clients).
2. Instale ou atualize para o [agente Ruby mais recente](/docs/ruby/ruby-agent-installation) (versão 3.5.5.38 ou superior).
3. Siga os requisitos para instalação de middleware.

## Instalação de middleware [#middleware]

O rastreamento multiaplicativo funciona com Rack, e portanto requer Rails 2.3 ou superior, ou outro framework compatível.

* Se você usa Rails, o agente Ruby instalará o middleware automaticamente.
* Se você usar uma framework baseada em Rack diferente, adicione manualmente o middleware `NewRelic::Rack::AgentHooks` à sua stack.

## Configuração [#configuration]

O rastreamento multiaplicativo pode ser controlado por um sinalizador de configuração. A partir da versão 8.0.0 do agente Ruby, o padrão para `cross_application_tracer.enabled` é `false`, mesmo quando não especificado. Para ativar o rastreamento multiaplicativo, você deve definir esse sinalizador como `true` e definir `distributed_tracing.enabled` como `false`.

```yaml
cross_application_tracer:
  enabled: true
distributed_tracing:
  enabled: false
```

Para versões inferiores a 8.0.0, o multiaplicativo pode ser configurado utilizando a seguinte configuração.

```yaml
cross_application_tracer:
  enabled: true
```

## Medições trace multiaplicativo [#cat-measurements]

A medida <DNT>**external**</DNT> (do aplicativo chamador) sempre será maior que a medida <DNT>**internal**</DNT> (do aplicativo chamado). A medição externa é coletada pela instrumentação da biblioteca cliente HTTP da New Relic (como Net::HTTP). A medição interna é feita pela instrumentação do framework web da New Relic (como Rails) no aplicativo chamado.

Aqui estão alguns dos principais componentes incluídos na medição externa que **não** estão incluídos na medição interna:

<CollapserGroup>
  <Collapser
    id="calling"
    title="Do aplicativo de chamada ao host de destino"
  >
    * Hora do DNS para resolver o nome do host de destino
    * Hora de estabelecer uma nova conexão TCP com o host de destino (handshake TCP de 3 vias mais negociação SSL, se SSL estiver em uso)
    * Tempo gasto na biblioteca cliente HTTP para preparar e serializar a solicitação HTTP
    * Latência de rede para enviar a solicitação através da rede para o host de destino
  </Collapser>

  <Collapser
    id="receiving"
    title="Recebendo anfitrião"
  >
    * Tempo para o servidor web frontend no host receptor processar a solicitação e enviá-la ao servidor web backend no host receptor

    * Hora para a solicitação ser analisada no servidor web backend no host receptor

    * Tempo para a solicitação "filtrar" através dos middlewares Rack no host receptor

    * Hora para a framework da web encaminhar a solicitação para a ação apropriada do controlador

      Depois que a framework da web o encaminha para a ação apropriada do controlador, é aqui que ocorre a medição interna. Então:

    * É hora da solicitação "filtrar" o backup através dos middlewares do Rack

    * Latência de rede para escrever a resposta de volta ao servidor solicitante

    * Tempo no host solicitante para que a resposta HTTP seja analisada pela biblioteca cliente HTTP
  </Collapser>
</CollapserGroup>

Alguns desses componentes são mais fáceis de controlar do que outros. Por exemplo, para capturar os tempos dos <DNT>**Receiving host**</DNT> itens acima, certifique-se de ter [o monitoramento da fila de solicitações](/docs/features/configuring-request-queue-reporting) configurado no aplicativo receptor.

## Obtenha distributed tracing [#distributed-tracing]

A partir da versão 8.0.0 do agente Ruby, [distributed tracing](/docs/apm/distributed-tracing/getting-started/introduction-distributed-tracing) está ativado por padrão. distributed tracing é uma melhoria no rastreamento multiaplicativo e é recomendado para sistemas distribuídos grandes.
