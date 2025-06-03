---
title: newrelic_get_trace_metadata
type: apiDoc
shortDescription: Retorna um array associativo contendo o identificador do trace atual e o span pai.
tags:
  - Agents
  - PHP agent
  - PHP agent API
freshnessValidatedDate: never
translationType: machine
---

## Sintaxe

```php
newrelic_get_trace_metadata()
```

Retorna um array associativo contendo o identificador do trace atual e o span pai.

## Requisitos

Requer agente PHP [versão 9.3 ou superior](/docs/release-notes/agent-release-notes/php-release-notes).

Deve ser chamado dentro de uma [transação](/docs/accounts-partnerships/education/getting-started-new-relic/glossary#transaction).

## Descrição

Retorna um array associativo contendo o identificador do trace atual e o span pai. Essas informações são úteis para integração com ferramentas distributed tracing de terceiros, como o Zipkin.

## Valores de retorno

Uma matriz associativa contendo as chaves:

* `trace_id`: o identificador trace atualmente em execução. Um valor vazio será retornado se a transação não suportar esta funcionalidade ou se distributed tracing estiver desabilitado.Retornos:
* `span_id`: o identificador de span atualmente em execução. Um valor vazio será retornado se a transação não suportar esta funcionalidade ou se distributed tracing estiver desabilitado.

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
