---
title: newrelic_get_trace_metadata
type: apiDoc
shortDescription: Devuelve un array asociativo que contiene el identificador de la traza actual y el span principal.
tags:
  - Agents
  - PHP agent
  - PHP agent API
freshnessValidatedDate: never
translationType: machine
---

## Sintaxis

```php
newrelic_get_trace_metadata()
```

Devuelve un array asociativo que contiene el identificador de la traza actual y el span principal.

## Requisitos

Requiere [la versión 9.3 o superior](/docs/release-notes/agent-release-notes/php-release-notes) del agente PHP.

Debe llamarse dentro de una [transacción](/docs/accounts-partnerships/education/getting-started-new-relic/glossary#transaction).

## Descripción

Devuelve un array asociativo que contiene el identificador de la traza actual y el span principal. Esta información es útil para la integración con herramientas de rastreo distribuidas de terceros, como Zipkin.

## Valores de retorno

Una matriz asociativa que contiene las claves:

* `trace_id`: el identificador de traza que se está ejecutando actualmente. Se devolverá un valor vacío si la transacción no admite esta funcionalidad o el rastreo distribuido está disabled.Returns:
* `span_id`: el identificador de intervalo que se está ejecutando actualmente. Se devolverá un valor vacío si la transacción no admite esta funcionalidad o el rastreo distribuido está deshabilitado.

## Ejemplos

### Complete los encabezados B3 para usar con Zipkin

Agrega los metadatos necesarios del rastreo distribuido a los encabezados HTTP que se envían a un consumidor de Zipkin:

```php
function make_http_request($url) {
    $metadata = newrelic_get_trace_metadata();
    $sampled = newrelic_is_sampled();

    $ch = curl_init($url);

    curl_setopt($ch, CURLOPT_HTTPHEADER, array(
        'X-B3-TraceId: ' . $metadata['trace_id'],
        'X-B3-SpanId: ' . substr(uniqid() . uniqid(), 0, 16),
        'X-B3-ParentSpanId: ' . $metadata['span_id'],
        'X-B3-Sampled: ' . $sampled));

    return curl_exec($ch);
}

$status = make_http_request("zipkin-consumer.example");
```
