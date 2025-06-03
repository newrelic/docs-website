---
title: newrelic_is_sampled
type: apiDoc
shortDescription: Retorna um valor que indica se a transação atual está ou não marcada como amostrada.
tags:
  - Agents
  - PHP agent
  - PHP agent API
freshnessValidatedDate: never
translationType: machine
---

## Sintaxe

```php
newrelic_is_sampled()
```

Retorna um valor que indica se a transação atual está ou não marcada como amostrada.

## Requisitos

Requer agente PHP [versão 9.3 ou superior](/docs/release-notes/agent-release-notes/php-release-notes).

Deve ser chamado dentro de uma [transação](/docs/accounts-partnerships/education/getting-started-new-relic/glossary#transaction).

## Descrição

Retorna um valor que indica se a transação atual está ou não marcada como amostrada.

## Valores de retorno

Retornará `true` se distributed tracing estiver ativado e a transação atual estiver marcada como amostrada; caso contrário, `false`.

## Exemplos

### Preencher cabeçalhos B3 para uso com Zipkin

Adiciona metadados distributed tracing necessários aos cabeçalhos HTTP enviados a um consumidor Zipkin:

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
