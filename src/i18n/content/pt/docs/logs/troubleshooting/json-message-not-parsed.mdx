---
title: A mensagem JSON não é analisada
type: troubleshooting
tags:
  - Logs
  - Log management
  - Troubleshooting
metaDescription: Troubleshooting tips if the JSON message for your log isn't being parsed in New Relic.
freshnessValidatedDate: never
translationType: machine
---

## Problema

Quando o conteúdo JSON é enviado no campo de mensagem do log, ele não é analisado automaticamente e não é armazenado como atributo (pares de valor principal). Em vez disso, o conteúdo permanece na mensagem. Também poderá ser truncado se a mensagem exceder o [limite de caracteres](/docs/logs/troubleshooting/log-message-truncated/).

## Solução

Razões pelas quais isso pode estar acontecendo:

* Se o conteúdo não for JSON válido, ele não será analisado. Em vez disso, ele será armazenado como uma string e truncado se exceder o limite de caracteres.
* Se o conteúdo for JSON válido, ele pode ter sido "stringificado" com caracteres de escape. Se for esse o caso, primeiro será avaliado como uma string, o que significa que será truncado para 4.096 caracteres antes de ser avaliado como JSON. O resultado do truncamento será JSON inválido e os dados serão armazenados como uma string.

Para resolver esse problema, envie mensagens contendo JSON que não foram convertidas em string. Este conteúdo será analisado mesmo se o comprimento total exceder o limite de caracteres. Se o JSON contiver matriz, eles serão nivelados e armazenados como strings não exploradas.
