---
title: Trace requisitos e limites gerais da API
tags:
  - Understand dependencies
  - Distributed tracing
  - Trace API
metaDescription: 'For New Relic Trace API: requirements, rules, max limits, and validation rules and responses.'
freshnessValidatedDate: never
translationType: machine
---

Informações sobre os requisitos de dados [da API Trace](/docs/apm/distributed-tracing/trace-api/introduction-new-relic-trace-api) , incluindo:

* Especificações de dados e limites máximos
* Metadados obrigatórios (cabeçalhos, parâmetro de consulta)
* Detalhes de validação de resposta

Este documento se aplica à API trace em geral. Para regras relativas a formatos de dados específicos, consulte:

* [Dados no New Relicformato trace](/docs/apm/distributed-tracing/trace-api/report-new-relic-format-traces-trace-api)
* [Dados trace em formato Zipkin](/docs/apm/distributed-tracing/trace-api/report-zipkin-format-traces-trace-api)

## Ponto final [#requirements]

Todos os dados trace são enviados via HTTPS POST para uma API de endpoints de trace . Temos alguns endpoints, dependendo da sua configuração:

* Endpoints trace padrão da API: `https://trace-api.newrelic.com/trace/v1`
* Data center da UE: `https://trace-api.eu.newrelic.com/trace/v1` (consulte outro [endpoint da UE](/docs/using-new-relic/welcome-new-relic/getting-started/introduction-eu-region-data-center#endpoints)).
* [Rastreamento infinito](/docs/understand-dependencies/distributed-tracing/infinite-tracing/introduction-infinite-tracing): ao concluir a [configuração do observador Trace](/docs/understand-dependencies/distributed-tracing/infinite-tracing/set-trace-observer), você obtém um valor YOUR_TRACE_OBSERVER_URL personalizado para usar como um endpoint. Se estiver usando uma integração que usa a API trace (por exemplo, [o repórter Kamon](/docs/more-integrations/open-source-telemetry-integrations/kamon/kamon-reporter/#install)), você deverá configurar essa integração com esse endpoint. Você também desejará ajustar a [amostragem do seu serviço de rastreamento](/docs/understand-dependencies/distributed-tracing/get-started/how-new-relic-distributed-tracing-works#tail-based) para nos enviar 100% dos spans.
* FedRAMP: Consulte [endpoint do FedRAMP](/docs/security/security-privacy/compliance/fedramp-compliant-endpoints/#trace-api).

## Formatos de dados [#data-formats]

Atualmente, a API trace aceita dois tipos de formatos de dados:

* [`zipkin`](/docs/apm/distributed-tracing/trace-api/report-zipkin-format-traces-trace-api): para relatar dados de rastreamento do Zipkin. Os dados do Zipkin devem ser [Zipkin JSON v2](https://zipkin.io/zipkin-api/#/default/post_spans).
* [`newrelic`](/docs/apm/distributed-tracing/trace-api/report-new-relic-format-traces-trace-api): para relatar todos os outros dados de rastreamento.

## Atributo restrito [#restricted-attributes]

Os atributos da tabela abaixo estão restritos ao formato JSON `newrelic` (no bloco `attributes` ) e ao formato JSON [`zipkin`](/docs/apm/distributed-tracing/trace-api/report-zipkin-format-traces-trace-api) (no bloco `tags` ). <DNT>**Any values with these keys will be omitted**</DNT>:

<table>
  <thead>
    <tr>
      <th style={{ width: "180px" }}>
        Atributo restrito
      </th>

      <th>
        Descrição
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `entityGuid`

        _corda_
      </td>

      <td>
        Identificador exclusivo da entidade que criou esse intervalo. Gerado de `service.name`, se disponível.
      </td>
    </tr>

    <tr>
      <td>
        `guid`

        _corda_
      </td>

      <td>
        Usado para compatibilidade retroativa com dados do agente <InlinePopover type="apm"/>.
      </td>
    </tr>
  </tbody>
</table>

Os atributos da tabela abaixo são utilizados internamente para identificar entidade. Quaisquer valores enviados com essas chaves na seção atributo de um ponto de dados métricos podem causar comportamento indefinido, como falta de entidade na UI ou telemetria não associada à entidade esperada. Para mais informações consulte a [síntese da entidade](/docs/new-relic-one/use-new-relic-one/core-concepts/what-entity-new-relic/#entity-synthesis):

<table>
  <thead>
    <tr>
      <th style={{ width: "180px" }}>
        Atributo restrito
      </th>

      <th>
        descrição
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `entity.guid`

        _corda_
      </td>

      <td>
        Identificador exclusivo para a entidade associada a este período.
      </td>
    </tr>

    <tr>
      <td>
        `entity.name`

        _corda_
      </td>

      <td>
        Nome legível de uma entidade, geralmente usado para identificar uma entidade na interface.
      </td>
    </tr>

    <tr>
      <td>
        `entity.type`

        _corda_
      </td>

      <td>
        Usado para diferenciar diferentes tipos de entidade, como hosts, aplicativo, etc.
      </td>
    </tr>
  </tbody>
</table>

## Solicitar metadados (cabeçalhos e parâmetro de consulta) [#headers-query-parameters]

A tabela a seguir mostra os metadados de solicitação necessários para todos os formatos de dados trace . Esses metadados podem ser enviados como cabeçalhos HTTP em uma solicitação de ingestão ou, em alguns casos, fornecidos como parâmetro de consulta, o que pode ser necessário para rastrear estruturas que não permitem modificação de cabeçalho.

<Callout variant="important">
  Nota de segurança: Sugerimos o uso de cabeçalhos porque os parâmetros de consulta estão presentes na URL e podem ser registrados antes de serem criptografados e recebidos pela New Relic. Todos os dados enviados como parâmetro de consulta devem ser seguros para URL.
</Callout>

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        Cabeçalho
      </th>

      <th style={{ width: "110px" }}>
        Parâmetro de consulta?
      </th>

      <th>
        Detalhes
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `Content-Type`
      </td>

      <td>
        Não
      </td>

      <td>
        <DNT>**Required.**</DNT> Deve ser `application/json`.
      </td>
    </tr>

    <tr>
      <td>
        `Content-Length`
      </td>

      <td>
        Não
      </td>

      <td>
        <DNT>**Required.**</DNT> O comprimento do corpo da solicitação em octetos (bytes de 8 bits), a menos que seja enviado com codificação em partes. Esse cabeçalho geralmente é definido por padrão pelo cliente HTTP subjacente que envia os dados e, na maioria dos casos, não deve exigir nenhum esforço adicional por parte do usuário final.
      </td>
    </tr>

    <tr>
      <td>
        `Api-Key`
      </td>

      <td>
        Sim (diferencia maiúsculas de minúsculas)
      </td>

      <td>
        <DNT>**Required.**</DNT> A API trace requer um <InlinePopover type="licenseKey"/>. Se for fornecido como cabeçalho e parâmetro de consulta, os valores deverão corresponder.
      </td>
    </tr>

    <tr>
      <td>
        `Content-Encoding`
      </td>

      <td>
        Não
      </td>

      <td>
        <DNT>**Required if compressed payload.**</DNT> O valor deve ser `gzip`.
      </td>
    </tr>

    <tr id="data-format">
      <td>
        `Data-Format`
      </td>

      <td>
        Sim
      </td>

      <td>
        <DNT>**Required for `zipkin`**</DNT>. Opcional para `newrelic`.

        Se presente, [`Data-Format-Version`](#data-format-version) também deverá estar presente.
      </td>
    </tr>

    <tr id="data-format-version">
      <td>
        `Data-Format-Version`
      </td>

      <td>
        Sim
      </td>

      <td>
        <DNT>**Required for `zipkin`**</DNT>.

        Se presente, `Data-Format` também deverá estar presente.

        Existem apenas dois pares possíveis para esses valores:

        * Se `Data-Format` for `zipkin`, `Data-Format-Version` deverá ser `2`.
        * Se `Data-Format` for `newrelic`, `Data-Format-Version` deverá ser `1`.
      </td>
    </tr>

    <tr id="data-format">
      <td>
        `x-request-id`
      </td>

      <td>
        Não
      </td>

      <td>
        <DNT>**Optional - Reserved for future use.**</DNT> O valor deve ser um `UUID4` válido. Espera-se que o valor seja exclusivo para cada solicitação.
      </td>
    </tr>
  </tbody>
</table>

## Validação de resposta

Uma resposta para o envio bem-sucedido de dados trace incluirá um `requestId`. Por exemplo:

```json
{"requestId":"c1bb62fc-001a-b000-0000-016bb152e1bb"}
```

Existem duas maneiras de sinalizar sucesso/erros:

* <DNT>**HTTP status code**</DNT> (síncrono). Erros de autenticação e solicitação serão sinalizados via código de status HTTP.

  <CollapserGroup>
    <Collapser
      id="status-codes"
      title="Veja os códigos de status HTTP"
    >
      <table>
        <thead>
          <tr>
            <th style={{ width: "150px" }}>
              Código
            </th>

            <th>
              Significado
            </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              202
            </td>

            <td>
              Dados aceitos. Isso significa que você passou nas verificações preliminares, mas não é uma garantia de que os dados foram analisados e indexados com êxito como parte de um distributed trace.
            </td>
          </tr>

          <tr>
            <td>
              400
            </td>

            <td>
              A estrutura da solicitação era inválida. Erros com parâmetro de consulta, etc.
            </td>
          </tr>

          <tr>
            <td>
              403
            </td>

            <td>
              Erro de autenticação. Pode ocorrer com um <InlinePopover type="licenseKey"/>inválido ou se você não tiver a autorização necessária para usar a API trace .
            </td>
          </tr>

          <tr>
            <td>
              404
            </td>

            <td>
              O caminho da solicitação está incorreto.
            </td>
          </tr>

          <tr>
            <td>
              405
            </td>

            <td>
              Para qualquer método de solicitação diferente de POST.
            </td>
          </tr>

          <tr>
            <td>
              408
            </td>

            <td>
              A solicitação demorou muito para chegar ao endpoint.
            </td>
          </tr>

          <tr>
            <td>
              411
            </td>

            <td>
              O cabeçalho Content-Length não foi incluído.
            </td>
          </tr>

          <tr>
            <td>
              413
            </td>

            <td>
              A carga útil era muito grande.
            </td>
          </tr>

          <tr>
            <td>
              414
            </td>

            <td>
              O URI da solicitação era muito longo.
            </td>
          </tr>

          <tr>
            <td>
              415
            </td>

            <td>
              O Content-Type ou Content-Encoding era inválido.
            </td>
          </tr>

          <tr>
            <td>
              429
            </td>

            <td>
              A cota de taxa de solicitação foi excedida.
            </td>
          </tr>

          <tr>
            <td>
              431
            </td>

            <td>
              Os cabeçalhos da solicitação são muito longos.
            </td>
          </tr>

          <tr>
            <td>
              5xx
            </td>

            <td>
              Ocorreu um erro no servidor (tente novamente).
            </td>
          </tr>
        </tbody>
      </table>
    </Collapser>
  </CollapserGroup>

* `NrIntegrationError` evento (assincrono). Erros com a carga JSON ou outros erros semânticos são sinalizados de forma assíncrona por meio do [evento`NrIntegrationError` ](/docs/telemetry-data-platform/manage-data/nrintegrationerror)que é armazenado na conta cujo <InlinePopover type="licenseKey"/>está associado à solicitação. Para todos os erros deste tipo, o atributo `newRelicFeature` será `Distributed Tracing` e `requestId` será o `requestId` da resposta endpoint .

Se você receber uma resposta `202` e não visualizar um evento `NrIntegrationError`, seus dados deverão estar visíveis em nossa [interfacedistributed tracing ](https://one.newrelic.com/launcher/distributed-tracing-nerdlets.distributed-tracing#launcher=eyJ0aW1lUmFuZ2UiOnsiYmVnaW5fdGltZSI6bnVsbCwiZW5kX3RpbWUiOm51bGwsImR1cmF0aW9uIjoxODAwMDAwfX0=&pane=eyJuZXJkbGV0SWQiOiJkaXN0cmlidXRlZC10cmFjaW5nLW5lcmRsZXRzLmRpc3RyaWJ1dGVkLXRyYWNpbmctbGF1bmNoZXIiLCJzb3J0SW5kZXgiOjAsInNvcnREaXJlY3Rpb24iOiJERVNDIn0=)global em cerca de um minuto. Você deve conseguir encontrar o trace usando uma [pesquisatrace ](/docs/apm/distributed-tracing/ui-data/additional-distributed-tracing-features-new-relic-one#find-data)padrão como:

```
traceId = TRACE_ID_SENT
```

## Limites de dados [#data-limits]

Para limites relacionados ao trace , consulte [Como funciona distributed tracing ](/docs/distributed-tracing/concepts/how-new-relic-distributed-tracing-works/#limits).
