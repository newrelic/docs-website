---
title: newrelic_is_sampled
type: apiDoc
shortDescription: Renvoie une valeur indiquant si la transaction en cours est marquée comme échantillonnée ou non.
tags:
  - Agents
  - PHP agent
  - PHP agent API
freshnessValidatedDate: never
translationType: machine
---

## Syntaxe

```php
newrelic_is_sampled()
```

Renvoie une valeur indiquant si la transaction en cours est marquée comme échantillonnée ou non.

## Exigences

Nécessite l&apos;agent PHP [version 9.3 ou supérieure](/docs/release-notes/agent-release-notes/php-release-notes).

Doit être appelé à l&apos;intérieur d&apos;une [transaction](/docs/accounts-partnerships/education/getting-started-new-relic/glossary#transaction).

## Description

Renvoie une valeur indiquant si la transaction en cours est marquée comme échantillonnée ou non.

## Valeurs de retour

Renvoie `true` si le tracing distribué est activé et que la transaction en cours est marquée comme échantillonnée, sinon `false`.

## Exemples

### Remplissez les en-têtes B3 pour une utilisation avec Zipkin

Ajoute le tracing distribué métadonnées nécessaire aux en-têtes HTTP envoyés à un consommateur Zipkin :

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