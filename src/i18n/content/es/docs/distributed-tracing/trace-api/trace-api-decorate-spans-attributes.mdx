---
title: 'Traza API: Decorar vanos con atributo'
tags:
  - Understand dependencies
  - Distributed tracing
  - Trace API
metaDescription: 'When sending trace data to New Relic''s Trace API, you can decorate spans so that they display with specific properties and details in the UI.'
freshnessValidatedDate: never
translationType: machine
---

Este documento explicará cómo agregar un atributo a los datos de traza enviados a la [API de traza](/docs/apm/distributed-tracing/trace-api/introduction-new-relic-trace-api) para que los tramos muestren propiedades específicas en [la UI](/docs/apm/distributed-tracing/ui-data/understand-use-distributed-tracing-data).

## ¿Por qué decorar tus vanos? [#why]

Cuando envía datos a nuestra traza API, puede agregar [atributos](/docs/using-new-relic/welcome-new-relic/get-started/glossary#attribute) personalizados a los tramos. Por ejemplo, puede decidir agregar atributos como `customer.id` o `user.id` para ayudarlo a analizar los datos de su traza.

Algunos valores de atributos esperados hacen que nuestra UI de rastreo distribuido muestre algunas [propiedades y detalles específicos de la traza](/docs/apm/distributed-tracing/ui-data/understand-use-distributed-tracing-data#span-types) . Por ejemplo, si un intervalo tiene un atributo con un prefijo `error.`, la UI muestra ese intervalo con un error. Para otro ejemplo, un intervalo con un atributo que tiene un prefijo `db.` se mostrará como un intervalo de almacenamiento de datos en la UI y su consulta de almacenamiento de datos se resaltará.

Decorar sus tramos para mostrar propiedades específicas en nuestra UI puede ayudarle a:

* Comprenda mejor la [estructura de sus datos de traza](/docs/understand-dependencies/distributed-tracing/get-started/how-new-relic-distributed-tracing-works#trace-structure).
* Solucionar problemas más fácilmente.

## Cómo decorar tus vanos con atributo [#decorate]

Esta tabla explica cómo hacer que los tramos enviados a la traza API se muestren con propiedades específicas en la UI. Para obtener descripciones de propiedades, consulte [propiedades de extensión](/docs/apm/distributed-tracing/ui-data/understand-use-distributed-tracing-data#span-types).

<table>
  <thead>
    <tr>
      <th style={{ width: "120px" }}>
        Propiedad de extensión deseada
      </th>

      <th style={{ width: "100px" }}>
        Indicador UI
      </th>

      <th>
        Cómo agregar propiedad
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Errores
      </td>

      <td>
        <img
          title="new-relic-distributed-tracing-error-icon.png"
          alt="New Relic distributed tracing error icon"
          src="/images/distributed-tracing_icon_error-icon.webp"
        />
      </td>

      <td>
        Utilice un atributo con un prefijo `error.` . Por ejemplo: `error.message`.
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
        Utilice un atributo con un prefijo `http.` . Por ejemplo: `http.method`. Un intervalo también aparecerá como externo si tiene un hijo que proviene de una entidad diferente. Para ser indexado en la [página de servicios externos](/docs/apm/apm-ui-pages/monitoring/external-services/external-services-intro), se debe proporcionar `http.url` o `net.peer.name` .
      </td>
    </tr>

    <tr>
      <td>
        Almacenamiento de datos
      </td>

      <td>
        <img
          title="new-relic-distributed-tracing-database-span-icon.png"
          alt="New Relic distributed tracing datastore span icon"
          src="/images/distributed-tracing_icon_databases-icon.webp"
        />
      </td>

      <td>
        Utilice un atributo con un prefijo `db.` . Por ejemplo: `db.statement`.
      </td>
    </tr>

    <tr>
      <td>
        Servicio
      </td>

      <td>
        <img
          title="new-relic-distributed-tracing-service-span-icon.png"
          alt="New Relic distributed tracing service icon"
          src="/images/distributed-tracing_icon_service-icon.webp"
        />
      </td>

      <td>
        Esto no se puede hacer con un atributo. Un tramo se clasifica como tramo de servicio si es el tramo raíz o si su padre es de una entidad diferente. Si un tramo tiene varias propiedades, la clasificación del tramo de servicio tiene prioridad en la UI.
      </td>
    </tr>

    <tr id="in-process">
      <td>
        En proceso
      </td>

      <td>
        <img
          title="new-relic-distributed-tracing-in-process-span-icon.png"
          alt="New Relic distributed tracing in-process span icon "
          src="/images/distributed-tracing_icon_in-process-icon.webp"
        />
      </td>

      <td>
        Esto no se puede hacer con un atributo. Un intervalo se clasifica como en proceso si no se ha clasificado como intervalo de servicio, intervalo de almacenamiento de datos o intervalo externo.
      </td>
    </tr>
  </tbody>
</table>

Para obtener más información sobre cómo se determinan y almacenan estas propiedades de extensión, consulte [la estructura de la traza](/docs/understand-dependencies/distributed-tracing/get-started/how-new-relic-distributed-tracing-works).

Consejos para agregar atributos:

* Puede agregar cualquier atributo a un intervalo. Por ejemplo: puede agregar un atributo como `customer.id` para poder [buscar trazas globalmente](/docs/understand-dependencies/distributed-tracing/ui-data/additional-distributed-tracing-features-new-relic-one#find-data) trazas que contengan clientes específicos.
* Un lapso puede estar en varias categorías. Por ejemplo, `external` es una categoría más general que `datastore`, por lo que si un intervalo se clasifica como `external` y `datastore`, se indicará como un intervalo de almacenamiento de datos en la UI.

## Ejemplos JSON [#examples]

Aquí hay ejemplos JSON que muestran cómo usar el atributo para establecer propiedades de intervalo:

<CollapserGroup>
  <Collapser
    id="newrelic"
    title="Ejemplos de atributos de formato New Relic"
  >
    [New Relic](/docs/apm/distributed-tracing/trace-api/report-new-relic-format-traces-trace-api) con múltiples tipos de atributos agregados. El significado del atributo personalizado se describe en `customAttribute`.

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
    title="Ejemplos de atributos en formato Zipkin"
  >
    JSON [en formato Zipkin](/docs/apm/distributed-tracing/trace-api/report-zipkin-format-traces-trace-api) con múltiples tipos de atributos agregados. El significado del atributo (valor principal pares) se describe en `customAttribute`.

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
