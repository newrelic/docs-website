---
title: URL de ofuscação do agente Node.js
tags:
  - Distributed Tracing
  - Span attributes
  - Transaction attributes
  - Transaction Trace
  - Transaction Trace Details
metaDescription: 'For apps monitored by the Node.js agent, obfuscate URLS in distributed traces and transaction traces with a regex pattern that protects sensitive data.'
freshnessValidatedDate: never
translationType: machine
---

Com nosso agente APM Node.js, você pode ofuscar URLs em rastreamento distribuído e rastrear a transação usando um padrão regex para proteger dados confidenciais. Este recurso está disponível no [agente Node.js v9.9.0+](/docs/release-notes/agent-release-notes/nodejs-release-notes/).

## Habilitar ofuscação de URL [#enable-url-obfuscation]

Para ativar a ofuscação de URL, adicione o seguinte trecho à configuração do seu agente:

```js
url_obfuscation: {
  enabled: true,
  regex: {
    pattern: '{your regex pattern}',
    flags: '{regex flags}'}',
    replacement: '{replacement string}'
  }
}

```

Ou usando variáveis de ambiente:

```bash
NEW_RELIC_URL_OBFUSCATION_ENABLED=true
NEW_RELIC_URL_OBFUSCATION_REGEX_PATTERN={your regex pattern}
NEW_RELIC_URL_OBFUSCATION_REGEX_FLAGS={regex flags}
NEW_RELIC_URL_OBFUSCATION_REGEX_REPLACEMENT={replacement string}

```

As bandeiras são opcionais. Se você não especificá-los, o agente não os utilizará. Embora recomendemos o uso de um padrão de substituição, o uso de um padrão de substituição é opcional. Se você não especificar, o agente usará o padrão de substituição padrão, que é uma string vazia (`''`).

## Exemplo de configuração [#example-configuration]

```js
url_obfuscation: {
  enabled: true,
  regex: {
    pattern: /(\/api\/v1\/users\/)([\d]+)(\/.*$)/,
    flags: "i",
    replacement: '$1<DNT>**$3'
  }
}

```

Esta configuração ofuscará os URLs que correspondem a um URL de exemplo `/api/v1/users/12345456/edit` e substituirá todos os dígitos no meio do URL por `**</DNT>` (dois asteriscos). O URL resultante será `/api/v1/users/**/edit`.

## Exemplo de configuração com variáveis de ambiente [#example-configuration-with-environment-variables]

```bash
NEW_RELIC_URL_OBFUSCATION_ENABLED=true
NEW_RELIC_URL_OBFUSCATION_REGEX_PATTERN=(/api/v1/users/)([\d]+)(/.*$)
NEW_RELIC_URL_OBFUSCATION_REGEX_FLAGS=i
NEW_RELIC_URL_OBFUSCATION_REGEX_REPLACEMENT=$1**$3

```

## Regra de ofuscação [#obfuscation-rules]

O agente ofuscará URLs que correspondam ao padrão regex fornecido. O agente não ofuscará URLs que não correspondam ao padrão regex. Se você não fornecer um padrão regex, o agente não ofuscará nenhum URL. Se você não fornecer um padrão de substituição, o agente substituirá o padrão correspondente por uma string vazia. Se você não fornecer nenhum sinalizador, o agente não usará nenhum sinalizador.
