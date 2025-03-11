---
title: newrelic_is_sampled
type: apiDoc
shortDescription: Devuelve un valor que indica si la transacción actual está marcada como muestreada o no.
tags:
  - Agents
  - PHP agent
  - PHP agent API
freshnessValidatedDate: never
translationType: machine
---

## Sintaxis

```php
newrelic_is_sampled()
```

Devuelve un valor que indica si la transacción actual está marcada como muestreada o no.

## Requisitos

Requiere [la versión 9.3 o superior](/docs/release-notes/agent-release-notes/php-release-notes) del agente PHP.

Debe llamarse dentro de una [transacción](/docs/accounts-partnerships/education/getting-started-new-relic/glossary#transaction).

## Descripción

Devuelve un valor que indica si la transacción actual está marcada como muestreada o no.

## Valores de retorno

Devuelve `true` si rastreo distribuido está habilitado y la transacción actual está marcada como muestreada; en caso contrario, `false`.

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
