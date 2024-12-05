---
title: 'API trace : Decore spans com atributo'
tags:
  - Understand dependencies
  - Distributed tracing
  - Trace API
metaDescription: 'When sending trace data to New Relic''s Trace API, you can decorate spans so that they display with specific properties and details in the UI.'
freshnessValidatedDate: never
translationType: machine
---

Este documento explicará como adicionar atributo aos dados trace enviados à [API Trace](/docs/apm/distributed-tracing/trace-api/introduction-new-relic-trace-api) para que os spans exibam propriedades específicas [na interface](/docs/apm/distributed-tracing/ui-data/understand-use-distributed-tracing-data).

## Por que decorar seus vãos? [#why]

Ao enviar dados para nossa API trace , você pode adicionar [atributos](/docs/using-new-relic/welcome-new-relic/get-started/glossary#attribute) personalizados aos períodos. Por exemplo, você pode decidir adicionar um atributo como `customer.id` ou `user.id` para ajudar a analisar seus dados trace .

Alguns valores de atributo esperados fazem com que nossa interface distributed tracing exiba algumas [propriedades e detalhes específicostrace ](/docs/apm/distributed-tracing/ui-data/understand-use-distributed-tracing-data#span-types). Por exemplo, se um período tiver um atributo com prefixo `error.` , a interface exibirá esse período com um erro. Para outro exemplo, um intervalo com um atributo que possui um prefixo `db.` será exibido como um intervalo de armazenamento de dados na interface e terá sua consulta de armazenamento de dados destacada.

Decorar seus vãos para mostrar propriedades específicas em nossa interface pode ajudá-lo:

* Entenda melhor a [estrutura dos seus dados de rastreamento](/docs/understand-dependencies/distributed-tracing/get-started/how-new-relic-distributed-tracing-works#trace-structure).
* Solucione problemas com mais facilidade.

## Como decorar seus vãos com atributo [#decorate]

Esta tabela explica como fazer com que os spans sejam enviados à API trace para aparecerem com propriedades específicas na interface do usuário. Para descrições de propriedades, consulte [propriedades de span](/docs/apm/distributed-tracing/ui-data/understand-use-distributed-tracing-data#span-types).

<table>
  <thead>
    <tr>
      <th style={{ width: "120px" }}>
        Propriedade de extensão desejada
      </th>

      <th style={{ width: "100px" }}>
        indicador de interface
      </th>

      <th>
        Como adicionar propriedade
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Erros
      </td>

      <td>
        <img
          title="new-relic-distributed-tracing-error-icon.png"
          alt="New Relic distributed tracing error icon"
          src="/images/distributed-tracing_icon_error-icon.webp"
        />
      </td>

      <td>
        Use um atributo com um prefixo `error.` . Por exemplo: `error.message`.
      </td>
    </tr>

    <tr>
      <td>
        Externo
      </td>

      <td>
        <img
          title="new-relic-distributed-tracing-external-span-icon.png"
          alt="New Relic distributed tracing external span icon"
          src="/images/distributed-tracing_icon_external-icon.webp"
        />
      </td>

      <td>
        Use um atributo com um prefixo `http.` . Por exemplo: `http.method`. Um intervalo também aparecerá como externo se tiver um filho proveniente de uma entidade diferente. Para ser indexado na [página Serviços externos](/docs/apm/apm-ui-pages/monitoring/external-services/external-services-intro), `http.url` ou `net.peer.name` devem ser fornecidos.
      </td>
    </tr>

    <tr>
      <td>
        Armazenamento de dados
      </td>

      <td>
        <img
          title="new-relic-distributed-tracing-database-span-icon.png"
          alt="New Relic distributed tracing datastore span icon"
          src="/images/distributed-tracing_icon_databases-icon.webp"
        />
      </td>

      <td>
        Use um atributo com um prefixo `db.` . Por exemplo: `db.statement`.
      </td>
    </tr>

    <tr>
      <td>
        Serviço
      </td>

      <td>
        <img
          title="new-relic-distributed-tracing-service-span-icon.png"
          alt="New Relic distributed tracing service icon"
          src="/images/distributed-tracing_icon_service-icon.webp"
        />
      </td>

      <td>
        Isso não pode ser feito com um atributo. Um intervalo é classificado como intervalo de serviço se for o intervalo raiz ou se seu pai for de uma entidade diferente. Se um intervalo tiver diversas propriedades, a classificação do intervalo de serviço terá precedência na interface.
      </td>
    </tr>

    <tr id="in-process">
      <td>
        Em processo
      </td>

      <td>
        <img
          title="new-relic-distributed-tracing-in-process-span-icon.png"
          alt="New Relic distributed tracing in-process span icon "
          src="/images/distributed-tracing_icon_in-process-icon.webp"
        />
      </td>

      <td>
        Isso não pode ser feito com um atributo. Um intervalo é classificado como em processo se não tiver sido classificado como intervalo de serviço, intervalo de armazenamento de dados ou intervalo externo.
      </td>
    </tr>
  </tbody>
</table>

Para obter mais informações sobre como essas propriedades de span são determinadas e armazenadas, consulte [estruturatrace ](/docs/understand-dependencies/distributed-tracing/get-started/how-new-relic-distributed-tracing-works).

Dicas para adicionar atributo:

* Você pode adicionar qualquer atributo a um intervalo. Por exemplo: você pode adicionar um atributo como `customer.id` para poder [pesquisar rastreamento globalmente](/docs/understand-dependencies/distributed-tracing/ui-data/additional-distributed-tracing-features-new-relic-one#find-data) por rastreamento contendo clientes específicos.
* Um intervalo pode estar em diversas categorias. Por exemplo, `external` é uma categoria mais geral do que `datastore`, portanto, se um intervalo for classificado como `external` e `datastore`, ele será indicado como um intervalo de armazenamento de dados na interface.

## Exemplos JSON [#examples]

Aqui estão exemplos JSON mostrando como usar atributo para definir propriedades de span:

<CollapserGroup>
  <Collapser
    id="newrelic"
    title="Exemplos de atributo no formato New Relic"
  >
    JSON [no formato New Relic](/docs/apm/distributed-tracing/trace-api/report-new-relic-format-traces-trace-api) com vários tipos de atributo adicionados. O significado do atributo personalizado está descrito em `customAttribute`.

    ```json
    [
      {
        "common": {
          "attributes": {
            "hostname": "cattle456.example.com",
            "environment": "staging"
          }
        },
        "spans": [
          {
            "id": "1-abcdefg",
            "trace.id": "abc123-xyz789",
            "attributes": {
              "service.name": "Order Service",
              "duration.ms": 3.5,
              "error.name": "StackOverflowException",
              "name": "/placeOrder [POST]",
              "customer.id": "datanerd@newrelic.com",
              "description": "This span is the root of the whole trace. It has no parent.id. Custom attributes like 'customer.id' can have any name. Using these kinds of attributes will allow you to do a global search across all traces for desired traces."
            }
          },
          {
            "id": "2-abcdefg",
            "trace.id": "abc123-xyz789",
            "attributes": {
              "service.name": "Order Service",
              "duration.ms": 1,
              "parent.id": "1-abcdefg",
              "db.query": "foo selection",
              "db.statement": "SELECT FOO FROM BAR",
              "name": "DB Span",
              "description": "This is a datastore span. The presence of one or more attributes prefixed with db. makes this display as a datastore span in the UI."
            }
          },
          {
            "id": "3-abcdefg",
            "trace.id": "abc123-xyz789",
            "attributes": {
              "service.name": "Order Service",
              "parent.id": "1-abcdefg",
              "duration.ms": 1.5,
              "http.method": "POST",
              "name": "HTTP Span",
              "description": "An external (HTTP) span. Spans with one or more attributes prefixed with http. are treated as external spans."
            }
          },
          {
            "id": "4-abcdefg",
            "trace.id": "abc123-xyz789",
            "attributes": {
              "service.name": "Order Service",
              "duration.ms": 1.2,
              "error.text": "404 file not found",
              "parent.id": "1-abcdefg",
              "http.method": "GET",
              "http.statusCode": 404,
              "name": "Error Http Span",
              "description": "Spans with error. prefixed attributes are displayed in red text in the UI. Errors can coexist with other span categories."
            }
          },
          {
            "id": "5-abcdefg",
            "trace.id": "abc123-xyz789",
            "attributes": {
              "service.name": "Order Service",
              "error.message": "404 file not found",
              "duration.ms": 1.2,
              "parent.id": "1-abcdefg",
              "http.method": "GET",
              "http.statusCode": 404,
              "db.query": "SELECT FOO FROM BAR",
              "name": "Error Http DB Span",
              "description": "Spans can have multiple properties. Relevant attributes are highlighted when you select a span to view its details."
            }
          },
          {
            "id": "6-abcdefg",
            "trace.id": "abc123-xyz789",
            "attributes": {
              "service.name": "Order Service",
              "duration.ms": 1.6,
              "parent.id": "1-abcdefg",
              "http.method": "GET",
              "db.query": "SELECT FOO FROM BAR",
              "name": "Http DB Span",
              "description": "External (HTTP) is a more general category than is datastore, so a span with both http.- and db.-prefixed attributes is displayed as a datastore span in the UI."
            }
          },
          {
            "id": "7-abcdefg",
            "trace.id": "abc123-xyz789",
            "attributes": {
              "service.name": "Order Service",
              "duration.ms": 2.0,
              "parent.id": "1-abcdefg",
              "description": "Spans with no explicit types that belong to the same entity as its parent and children are considered in-process spans.",
              "name": "In-process span 1"
            }
          },
          {
            "id": "8-abcdefg",
            "trace.id": "abc123-xyz789",
            "attributes": {
              "service.name": "Order Service",
              "duration.ms": 1.7,
              "parent.id": "7-abcdefg",
              "name": "In-process span 2",
              "description": "In-process spans can represent a breakdown of work being done within a process."
            }
          },
          {
            "id": "9-abcdefg",
            "trace.id": "abc123-xyz789",
            "attributes": {
              "service.name": "Order Service",
              "duration.ms": 1.0,
              "parent.id": "8-abcdefg",
              "name": "In-process span 3",
              "description": "The number and granularity of in-process spans vary depending on instrumentation and frameworks being used."
            }
          },
          {
            "id": "10-abcdefg",
            "trace.id": "abc123-xyz789",
            "attributes": {
              "service.name": "Order Service",
              "duration.ms": 2.2,
              "parent.id": "1-abcdefg",
              "name": "In-process span"
            }
          },
          {
            "id": "11-abcdefg",
            "trace.id": "abc123-xyz789",
            "attributes": {
              "service.name": "Order Service",
              "duration.ms": 2.2,
              "parent.id": "10-abcdefg",
              "name": "External determined by entity change",
              "description": "A span that’s a parent to a span from another entity is displayed as an external span in the UI."
            }
          },
          {
            "id": "12-abcdefg",
            "trace.id": "abc123-xyz789",
            "attributes": {
              "service.name": "Order Notification Service",
              "duration.ms": 1.8,
              "parent.id": "11-abcdefg",
              "name": "Entry span determined by entity change",
              "description": "The attribute 'service.name' is used to detect process boundaries in the UI. For compatibility with data from Lambda monitoring and APM agents, the attribute 'entity.name' can be used to search across all traces."
            }
          }
        ]
      }
    ]
    ```
  </Collapser>

  <Collapser
    id="zipkin"
    title="Exemplos de atributos em formato Zipkin"
  >
    JSON [em formato Zipkin](/docs/apm/distributed-tracing/trace-api/report-zipkin-format-traces-trace-api) com vários tipos de atributo adicionados. O significado do atributo (pares de valor principal) é descrito em `customAttribute`.

    ```json
    [
      {
        "traceId": "zipkinSampleTrace",
        "id": "1",
        "kind": "SERVER",
        "name": "Error Span",
        "duration": 35000,
        "localEndpoint": {
          "serviceName": "sampleApp",
          "ipv4": "127.0.0.1",
          "port": 8080
        },
        "tags": {
          "customAttribute": "This span is the root of the whole trace. It has no parent.id"
        }
      },
      {
        "traceId": "zipkinSampleTrace",
        "id": "2",
        "parentId": "1",
        "kind": "SERVER",
        "name": "post",
        "duration": 10000,
        "localEndpoint": {
          "serviceName": "sampleApp",
          "ipv4": "127.0.0.1",
          "port": 8080
        },
        "tags": {
          "customAttribute": "This is a datastore span. The presence of one or more attributes prefixed with db. makes this display as a datastore span in the UI."
        }
      },
      {
        "traceId": "zipkinSampleTrace",
        "id": "2",
        "parentId": "1",
        "kind": "CLIENT",
        "name": "DB Span",
        "duration": 12000,
        "localEndpoint": {
          "serviceName": "sampleApp",
          "ipv4": "127.0.0.1",
          "port": 8080
        },
        "tags": {
          "db.query": "foo selection",
          "db.statement": "SELECT FOO FROM BAR",
          "customAttribute": "This is a datastore span. The presence of one or more attributes prefixed with db. makes this display as a datastore span in the UI."
        }
      },
      {
        "traceId": "zipkinSampleTrace",
        "id": "3",
        "parentId": "1",
        "kind": "CLIENT",
        "name": "HTTP Span",
        "duration": 15000,
        "localEndpoint": {
          "serviceName": "sampleApp",
          "ipv4": "127.0.0.1",
          "port": 8080
        },
        "tags": {
          "http.method": "POST",
          "customAttribute": "AAn external (HTTP) span. Spans with one or more attributes prefixed with http. are treated as external spans."
        }
      },
      {
        "traceId": "zipkinSampleTrace",
        "id": "4",
        "parentId": "1",
        "kind": "CLIENT",
        "name": "Error Span",
        "duration": 12000,
        "localEndpoint": {
          "serviceName": "sampleApp",
          "ipv4": "127.0.0.1",
          "port": 8080
        },
        "tags": {
          "error.message": "404 file not found",
          "http.method": "GET",
          "http.statusCode": 404,
          "customAttribute": "Spans with error. prefixed attributes are displayed in red text in the UI. Errors can coexist with other span categories."
        }
      },
      {
        "traceId": "zipkinSampleTrace",
        "id": "5",
        "parentId": "1",
        "kind": "CLIENT",
        "name": "HTTP Error DB Span",
        "duration": 12000,
        "localEndpoint": {
          "serviceName": "sampleApp",
          "ipv4": "127.0.0.1",
          "port": 8080
        },
        "tags": {
          "error.message": "404 file not found",
          "http.method": "GET",
          "http.statusCode": 404,
          "db.query": "SELECT FOO FROM BAR",
          "customAttribute": "Spans can have multiple properties. Relevant attributes are highlighted when you select a span to view its details."
        }
      },
      {
        "traceId": "zipkinSampleTrace",
        "id": "6",
        "parentId": "1",
        "kind": "CLIENT",
        "name": "HTTP DB Span",
        "duration": 12000,
        "localEndpoint": {
          "serviceName": "sampleApp",
          "ipv4": "127.0.0.1",
          "port": 8080
        },
        "tags": {
          "http.method": "GET",
          "db.query": "SELECT FOO FROM BAR",
          "customAttribute": "External (HTTP) is a more general category than is datastore, so a span with both http.- and db.-prefixed attributes is displayed as a datastore span in the UI."
        }
      },
      {
        "traceId": "zipkinSampleTrace",
        "id": "7",
        "parentId": "1",
        "kind": "SERVER",
        "name": "In process span 1",
        "duration": 12000,
        "localEndpoint": {
          "serviceName": "sampleApp",
          "ipv4": "127.0.0.1",
          "port": 8080
        },
        "tags": {
          "customAttribute": "Spans with no explicit types that belong to the same entity as its parent and children are considered in-process spans."
        }
      },
      {
        "traceId": "zipkinSampleTrace",
        "id": "8",
        "parentId": "7",
        "kind": "SERVER",
        "name": "In process span 2",
        "duration": 12000,
        "localEndpoint": {
          "serviceName": "sampleApp",
          "ipv4": "127.0.0.1",
          "port": 8080
        },
        "tags": {
          "customAttribute": "In-process spans can represent a breakdown of work being done within a process."
        }
      },
      {
        "traceId": "zipkinSampleTrace",
        "id": "9",
        "parentId": "8",
        "kind": "SERVER",
        "name": "In process span 2",
        "duration": 12000,
        "localEndpoint": {
          "serviceName": "sampleApp",
          "ipv4": "127.0.0.1",
          "port": 8080
        },
        "tags": {
          "customAttribute": "The number and granularity of in-process spans vary depending on instrumentation and frameworks being used."
        }
      },
      {
        "traceId": "zipkinSampleTrace",
        "id": "10",
        "parentId": "1",
        "kind": "CLIENT",
        "name": "In process remote parent",
        "duration": 12000,
        "localEndpoint": {
          "serviceName": "sampleApp",
          "ipv4": "127.0.0.1",
          "port": 8080
        },
        "tags": {
          "name": "in process remote parent"
        }
      },
      {
        "traceId": "zipkinSampleTrace",
        "id": "10",
        "parentId": "1",
        "kind": "CLIENT",
        "name": "In process remote parent",
        "duration": 12000,
        "localEndpoint": {
          "serviceName": "sampleApp",
          "ipv4": "127.0.0.1",
          "port": 8080
        },
        "tags": {
          "customAttribute": "A span that is a parent to a span from another entity will be displayed as an external span."
        }
      },
      {
        "traceId": "zipkinSampleTrace",
        "id": "11",
        "parentId": "10",
        "kind": "SERVER",
        "name": "Downstream entry span",
        "duration": 12000,
        "localEndpoint": {
          "serviceName": "downstreamSampleApp",
          "ipv4": "127.0.0.1",
          "port": 8080
        },
        "tags": {
          "customAttribute": "The attribute 'service.name' is used to detect process boundaries in the UI. For compatibility with data from Lambda monitoring and APM agents, the attribute 'entity.name' can be used to search across all traces."
        }
      }
    ]
    ```
  </Collapser>
</CollapserGroup>
