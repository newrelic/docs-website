---
title: Atributo do agente Ruby
tags:
  - Agents
  - Ruby agent
  - Attributes
metaDescription: A summary of attributes captured by New Relic's Ruby agent.
freshnessValidatedDate: never
translationType: machine
---

[atributo](/docs/features/agent-attributes) são pares de valores principais contendo informações que determinam as propriedades de um evento ou transação. Esses pares de valor principal podem ser visualizados no rastreamento da transação no APM, rastreamento de erros no APM, evento de transação no painel e visualizações de página no painel. Você pode personalizar exatamente qual atributo será enviado para cada um desses destinos.

Essas configurações de atributo se aplicam à versão 3.12.0 ou superior do agente Ruby.

## Atributo do agente Ruby [#attributes]

A tabela a seguir lista os atributos que podem ser capturados automaticamente pelo agente Ruby:

<CollapserGroup>
  <Collapser
    id="httpResponseCode"
    title="httpResponseCode"
  >
    O código de status de resposta para uma solicitação da web. Padrões:

    * Rastreamento da transação: Habilitado

    * Erro coletor (erros de rastreamento): Habilitado

    * Evento de transação: Habilitado

    * Visualizações de página (<InlinePopover type="browser"/>): indisponíveis

      <DNT>**Note:**</DNT> O atributo `httpResponseCode` (valor de string) foi descontinuado a partir da versão 6.12.0 do agente. `http.statusCode` (valor inteiro) deve ser usado em seu lugar.
  </Collapser>

  <Collapser
    id="requestHeadersReferer"
    title="request.headers.referer"
  >
    O cabeçalho do referenciador HTTP, se presente (menos a string de consulta). Padrões:

    * Rastreamento da transação: Desativado
    * Erro coletor (erros de rastreamento): Habilitado
    * Evento de transação: Desativado
    * Visualizações de página (monitoramento do browser): indisponíveis
  </Collapser>

  <Collapser
    id="requestParameters"
    title="request.parameters.*"
  >
    Os parâmetros da solicitação HTTP estão associados à transação. Disponível apenas para os aplicativos Rails, Sinatra, Roda e Grape. Padrões:

    * Rastreamento da transação: Desativado
    * Erro coletor (erros de rastreamento): Desativado
    * Evento de transação: Desativado
    * Visualizações de página (monitoramento do browser): Desativado
  </Collapser>

  <Collapser
    id="jobResqueArguments"
    title="job.resque.args.*"
  >
    Argumentos de trabalho passados para o trabalhador Resque. Os argumentos transmitidos aos trabalhadores do Resque são posicionais. Esses argumentos são armazenados como chaves no formato `job.resque.args.<position>` onde posição é o índice do argumento para o método `perform` . Por exemplo, um trabalho Resque que aceita dois argumentos terá as chaves `job.resque.args.0` e `job.resque.args.1`. Padrões:

    * Rastreamento da transação: Desativado

    * Erro coletor (erros de rastreamento): Desativado

    * Evento de transação: Desativado

    * Visualizações de página (monitoramento do browser): indisponíveis

      <DNT>**Note:**</DNT> A propriedade `resque.capture_params` está obsoleta. Porém, se definido como `true`, permitirá a captura de argumentos de Resque para rastreamento da transação, erros de rastreamento.
  </Collapser>

  <Collapser
    id="jobSidekiqArguments"
    title="job.sidekiq.args.*"
  >
    Argumentos de trabalho passados para o trabalhador Sidekiq. Os argumentos transmitidos aos trabalhadores da Sidekiq são posicionais. Esses argumentos são armazenados como chaves no formato `job.sidekiq.args.<position>` onde posição é o índice do argumento para o método `perform` . Por exemplo, um trabalho do Sidekiq que aceita dois argumentos terá as chaves `job.sidekiq.args.0` e `job.sidekiq.args.1`. Padrões:

    * Rastreamento da transação: Desativado

    * Erro coletor (erros de rastreamento): Desativado

    * Evento de transação: Desativado

    * Visualizações de página (monitoramento do browser): indisponíveis

      <DNT>**Note:**</DNT> A propriedade `sidekiq.capture_params` está obsoleta. No entanto, se definido como `true`, permitirá a captura de argumentos do Sidekiq para rastreamento da transação e erros de rastreamento.
  </Collapser>
</CollapserGroup>

## Adicionando atributo personalizado [#add-custom-attributes]

Para capturar atributos adicionais personalizados do seu aplicativo, use `NewRelic::Agent.add_custom_attributes`. Para referência completa veja [Coletando atributo personalizado](/docs/apm/other-features/attributes/collecting-custom-attributes#ruby-att). Padrões:

* Rastreamento da transação: Habilitado
* Erro coletor (erros de rastreamento): Habilitado
* Evento de transação: Habilitado
* Visualizações de página (monitoramento do browser): Desativado

<Callout variant="caution">
  Se quiser consultar seu parâmetro ou atributo personalizado, evite usar qualquer um dos [termos reservados](/docs/insights/event-data-sources/custom-events/data-requirements-limits-custom-event-data/#reserved-words) para nomeá-los.
</Callout>

## Atualizando o agente Ruby [#upgrading]

Ao atualizar para o agente Ruby <DNT>**3.12.0**</DNT> ou superior, atualize sua configuração <DNT>**newrelic.yml**</DNT> .
