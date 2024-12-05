---
title: Relatar rastreamento por meio da API trace (formato New Relic)
tags:
  - Understand dependencies
  - Distributed tracing
  - Trace API
metaDescription: 'For New Relic''s Trace API: how to report traces using the New Relic format.'
freshnessValidatedDate: never
translationType: machine
---

Se quiser criar sua própria implementação de rastreamento, você pode usar nossa [API Trace](/docs/understand-dependencies/distributed-tracing/trace-api/introduction-trace-api). Este documento explica como enviar trace em nosso formato geral, também conhecido como formato `newrelic` . (Para enviar dados no formato Zipkin, consulte [Zipkin](/docs/apm/distributed-tracing/trace-api/report-zipkin-format-traces-trace-api).)

## Iniciar [#send-data-overview]

Usar nossa API trace é tão simples quanto:

* Enviando dados trace no formato esperado (neste caso, nosso formato `newrelic`).
* Enviando esses dados para o [endpoint](/docs/understand-dependencies/distributed-tracing/trace-api/trace-api-general-requirements-limits#requirements) apropriado.

Antes de usar a API trace , você deve decidir se deseja usar o Infinite Tracing. Para saber mais sobre isso, consulte [Introdução às](/docs/understand-dependencies/distributed-tracing/infinite-tracing/introduction-infinite-tracing) [considerações sobre](/docs/understand-dependencies/distributed-tracing/trace-api/introduction-trace-api#sampling) rastreamento e amostragem infinita .

Para começar a usar a API trace , siga um destes caminhos:

* Quer usar [o rastreamento infinito](/docs/understand-dependencies/distributed-tracing/trace-api/introduction-trace-api#sampling)? Siga as instruções [Configurar um observador de rastreamento](/docs/understand-dependencies/distributed-tracing/infinite-tracing/set-trace-observer#set-up) . Isso orienta você na criação de um observador trace e no envio de uma carga útil de amostra para o endpoint do observador trace .
* Não quer rastreamento infinito? Veja como enviar um [exemplo de carga útil](#new-relic-quick-start) (abaixo).

## Enviar carga útil trace de amostra (rastreamento não infinito) [#new-relic-quick-start]

Veja a seguir como enviar uma carga padrão (não[Infinite Tracing](/docs/understand-dependencies/distributed-tracing/trace-api/introduction-trace-api#sampling)) para a API Trace usando nosso formato `newrelic` .

1. Obtenha um <InlinePopover type="licenseKey" />para a conta para a qual você deseja relatar dados.

2. Insira essa chave no JSON a seguir e envie o JSON para nosso endpoint. Observação: se você tiver uma conta EU New Relic, use o [endpoint EU](/docs/understand-dependencies/distributed-tracing/trace-api/trace-api-general-requirements-limits#requirements) .

   ```bash
   curl -i -H 'Content-Type: application/json' \
       -H 'Api-Key: YOUR_LICENSE_KEY' \
       -H 'Data-Format: newrelic' \
       -H 'Data-Format-Version: 1' \
       -X POST \
       -d '[
               {
                   "common": {
                       "attributes": {
                           "service.name": "Test Service A",
                           "host": "host123.example.com"
                       }
                   },
                   "spans": [
                       {
                           "trace.id": "123456",
                           "id": "ABC",
                           "attributes": {
                               "duration.ms": 12.53,
                               "name": "/home"
                           }
                       },
                       {
                           "trace.id": "123456",
                           "id": "DEF",
                           "attributes": {
                               "error.message": "Invalid credentials",
                               "service.name": "Test Service A",
                               "host": "host456.example.com",
                               "duration.ms": 2.97,
                               "name": "/auth",
                               "parent.id": "ABC"
                           }
                       }
                   ]
               }
           ]' 'https://trace-api.newrelic.com/trace/v1'
   ```

   <Callout variant="tip">
     Se você estiver enviando mais de um `POST`, altere `trace.id` para um valor exclusivo. Enviar a mesma carga útil ou intervalo `id` diversas vezes para o mesmo `trace.id` pode resultar em rastreio fragmentado na interface.
   </Callout>

3. Se o seu teste retornou `HTTP/1.1 202 Accepted`, acesse [nossa interface](https://one.newrelic.com/launcher/distributed-tracing-nerdlets.distributed-tracing?launcher=eyJ0aW1lUmFuZ2UiOnsiYmVnaW5fdGltZSI6bnVsbCwiZW5kX3RpbWUiOm51bGwsImR1cmF0aW9uIjoxODAwMDAwfSwiJGlzRmFsbGJhY2tUaW1lUmFuZ2UiOnRydWV9&pane=eyJuZXJkbGV0SWQiOiJkaXN0cmlidXRlZC10cmFjaW5nLW5lcmRsZXRzLmRpc3RyaWJ1dGVkLXRyYWNpbmctbGF1bmNoZXIiLCJzb3J0SW5kZXgiOjAsInNvcnREaXJlY3Rpb24iOiJERVNDIiwicXVlcnkiOnsib3BlcmF0b3IiOiJBTkQiLCJpbmRleFF1ZXJ5Ijp7ImNvbmRpdGlvblR5cGUiOiJJTkRFWCIsIm9wZXJhdG9yIjoiQU5EIiwiY29uZGl0aW9ucyI6W119LCJzcGFuUXVlcnkiOnsib3BlcmF0b3IiOiJBTkQiLCJjb25kaXRpb25TZXRzIjpbeyJjb25kaXRpb25UeXBlIjoiU1BBTiIsIm9wZXJhdG9yIjoiQU5EIiwiY29uZGl0aW9ucyI6W3siYXR0ciI6InNlcnZpY2UubmFtZSIsIm9wZXJhdG9yIjoiRVEiLCJ2YWx1ZSI6IlRlc3QgU2VydmljZSBBIn1dfV19fX0=) para ver uma consulta dos seus dados de teste usando o atributo span `service.name = Test Service A`.

   <Callout variant="tip">
     Trace pode levar até um minuto para ser processado pelo observador trace e pela API trace .
   </Callout>

## Carga de API trace (formato New Relic) [#new-relic-guidelines]

A carga útil JSON da API trace é uma matriz de objetos, com cada objeto representando um único trace. Cada um desses objetos requer uma chave `spans` e também pode incluir uma chave `common` . `spans` (obrigatório) contém uma matriz de objetos, com cada objeto representando um intervalo. `common` (opcional) compartilha informações em vários períodos.

### O objeto Span na matriz `spans`

<table>
  <thead>
    <tr>
      <th style={{ width: "180px" }}>
        campo
      </th>

      <th>
        tipo
      </th>

      <th>
        descrição
      </th>

      <th>
        obrigatório
      </th>

      <th>
        padrão
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `id`
      </td>

      <td>
        *corda*
      </td>

      <td>
        Identificador exclusivo para este período.
      </td>

      <td>
        sim
      </td>

      <td>
        N/A
      </td>
    </tr>

    <tr>
      <td>
        `trace.id`
      </td>

      <td>
        *corda*
      </td>

      <td>
        Identificador exclusivo compartilhado por todos os spans em um único trace.
      </td>

      <td>
        sim
      </td>

      <td>
        N/A
      </td>
    </tr>

    <tr>
      <td>
        `timestamp`
      </td>

      <td>
        *longo*
      </td>

      <td>
        Tempo de início do intervalo em [milissegundos desde a época do Unix](https://currentmillis.com/).
      </td>

      <td>
        não
      </td>

      <td>
        Hora atual no fuso horário UTC
      </td>
    </tr>

    <tr>
      <td>
        `attributes`
      </td>

      <td>
        *objeto*
      </td>

      <td>
        Qualquer conjunto de pares de valores principais que adicionam mais detalhes sobre um intervalo. `duration.ms` é obrigatório, e os atributos `name` e `parent.id` são altamente recomendados para serem adicionados.
      </td>

      <td>
        sim
      </td>

      <td>
        N/A
      </td>
    </tr>
  </tbody>
</table>

Solicitações sem as chaves exigidas acima serão rejeitadas e um [`NrIntegrationError`](/docs/apm/distributed-tracing/trace-api/trace-api-general-requirements-limits#response-validation) será gerado.

### O objeto `common` (opcional)

<table>
  <thead>
    <tr>
      <th style={{ width: "115px" }}>
        campo
      </th>

      <th style={{ width: "115px" }}>
        tipo
      </th>

      <th>
        descrição
      </th>

      <th style={{ width: "115px" }}>
        obrigatório
      </th>

      <th style={{ width: "115px" }}>
        padrão
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `attributes`
      </td>

      <td>
        *objeto*
      </td>

      <td>
        Qualquer conjunto de pares de valores principais que adicionam detalhes comuns sobre spans na carga útil. Se um intervalo contiver um atributo definido em `common`, a chave no objeto de atributos do intervalo terá precedência. É altamente recomendável adicionar `duration.ms`, `name` e `parent.id` .
      </td>

      <td>
        não
      </td>

      <td>
        N/A
      </td>
    </tr>
  </tbody>
</table>

### Atributo altamente recomendado [#recommended-attributes]

Embora não sejam obrigatórios, esses atributos devem ser incluídos para obter a melhor experiência com seus dados no objeto `attributes` de cada período.

<table>
  <thead>
    <tr>
      <th style={{ width: "180px" }}>
        atributo
      </th>

      <th style={{ width: "120px" }}>
        padrão
      </th>

      <th>
        descrição
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `duration.ms`

        *float*
      </td>

      <td>
        nenhum
      </td>

      <td>
        Duração deste intervalo em milissegundos.
      </td>
    </tr>

    <tr>
      <td>
        `name`

        *corda*
      </td>

      <td>
        nenhum
      </td>

      <td>
        O nome deste intervalo.
      </td>
    </tr>

    <tr>
      <td>
        `parent.id`

        *corda*
      </td>

      <td>
        nenhum
      </td>

      <td>
        O ID do chamador deste intervalo. O valor será `null` se este for o [intervalo raiz](/docs/apm/distributed-tracing/ui-data/understand-use-distributed-tracing-data#trace-grouping). o rastreamento sem um intervalo raiz não será exibido.
      </td>
    </tr>

    <tr>
      <td>
        `service.name`

        *corda*
      </td>

      <td>
        nenhum
      </td>

      <td>
        O nome da entidade que criou este intervalo. Se nenhum valor ou uma string vazia for fornecida, o intervalo será atribuído a uma entidade &quot;UNKNOWN&quot; e será exibido como tal na interface. Este valor deve ser fornecido para obter uma experiência completa na interface.
      </td>
    </tr>
  </tbody>
</table>

### Atributo reservado

Esses atributos estão atualmente reservados para uso interno da New Relic. Embora não estejam explicitamente bloqueados, recomendamos não usá-los.

<table>
  <thead>
    <tr>
      <th style={{ width: "180px" }}>
        atributo
      </th>

      <th style={{ width: "150px" }}>
        padrão
      </th>

      <th>
        descrição
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `entity.name`

        *corda*
      </td>

      <td>
        `service.name`
      </td>

      <td>
        Isso é derivado do atributo `service.name` .
      </td>
    </tr>

    <tr>
      <td>
        `entity.type`

        *corda*
      </td>

      <td>
        `service`
      </td>

      <td>
        O tipo de entidade é considerado um serviço.
      </td>
    </tr>

    <tr>
      <td>
        `entity.guid`

        *corda*
      </td>

      <td>
        Nenhum
      </td>

      <td>
        O `entity.guid` é um valor derivado que identifica exclusivamente a entidade no backend do New Relic.
      </td>
    </tr>
  </tbody>
</table>

### Outro atributo

Você pode adicionar qualquer atributo arbitrário desejado no objeto `attributes` em `common` ou em cada objeto span, com exceção do [atributo restrito](/docs/apm/distributed-tracing/trace-api/trace-api-endpoint-requirements-limits#restricted-attributes). Por exemplo, talvez você queira adicionar um atributo como `customer.id` ou `user.id` para ajudá-lo a analisar seus dados trace .

Requisitos e diretrizes para trace JSON usando o formato `newrelic`:

* Cada carga JSON é uma matriz de objetos.
* Cada objeto deve conter uma chave `spans` obrigatória.
* Cada objeto pode conter uma chave `common` opcional. Use isto se quiser compartilhar informações entre vários spans em um objeto.
* Quaisquer chaves em um intervalo têm precedência sobre a mesma chave no bloco `common` .
* O valor de uma chave `spans` é uma lista de objetos `span` .
* Determinados atributo são [obrigatórios](#required-attributes) e devem ser incluídos no bloco opcional `common` ou em cada período.
* Recomendado e atributo personalizado podem ser incluídos opcionalmente em uma lista de pares de valores principais sob uma chave denominada `attributes`, no bloco opcional `common` e/ou em cada intervalo.

No exemplo a seguir `POST`, existem dois spans, ambos possuem o trace.id `12345` e o atributo personalizado `host: host123.example.com`. O primeiro intervalo não tem `parent.id`, então essa é a raiz do trace; o `parent.id` do segundo intervalo aponta para o ID do primeiro.

```json
[
  {
    "common": {
      "attributes": {
        "host": "host123.example.com"
      }
    },
    "spans": [
      {
        "trace.id": "12345",
        "id": "abc",
        "timestamp": 1603336834823,
        "attributes": {
          "user.email": "bob@newr.com",
          "service.name": "my-service",
          "duration.ms": 750,
          "name": "my-span"
        }
      },
      {
        "trace.id": "12345",
        "id": "def",
        "timestamp": 1603336834899,
        "attributes": {
          "parent.id": "abc",
          "service.name": "second-service",
          "duration.ms": 750,
          "name": "second-span"
        }
      }
    ]
  }
]
```

Para saber como controlar como os spans aparecem no New Relic (por exemplo, adicionando erros ou definindo um span como um span de armazenamento de dados), consulte [Decorar spans](/docs/apm/distributed-tracing/trace-api/trace-api-decorate-spans-attributes).

## Explore mais sobre distributed tracing: [#additional-help]

* [Saiba onde os dados da API trace aparecem na interface](/docs/understand-dependencies/distributed-tracing/ui-data/additional-distributed-tracing-features-new-relic-one#find-data).
* [Aprenda como decorar vãos](/docs/apm/distributed-tracing/trace-api/trace-api-decorate-spans-attributes) para obter uma experiência de interface mais rica e detalhada. Por exemplo, você pode fazer com que os intervalos apareçam como intervalos de armazenamento de dados ou exibam erros.
* Saiba mais sobre [limites gerais de dados, metadados necessários e validação de resposta](/docs/apm/distributed-tracing/trace-api/trace-api-endpoint-requirements-limits).
* Se você não vir seus dados de rastreamento, consulte [resolução de problemas](/docs/apm/distributed-tracing/trace-api/troubleshooting-missing-trace-api-data).