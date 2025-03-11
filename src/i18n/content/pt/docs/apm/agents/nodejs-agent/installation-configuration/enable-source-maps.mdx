---
title: Ativar suporte a mapas de origem
tags:
  - Agents
  - Nodejs agent
metaDescription: Enable source map support in Node.js to see more meaningful error traces.
freshnessValidatedDate: never
translationType: machine
---

Aplicativos transpilados, como aqueles escritos em TypeScript ou Babel, mostrarão rastreamento de pilha de erros que normalmente apontam para arquivos, linhas e funções dentro dos arquivos criados, em vez dos arquivos de origem.

Se você habilitar o mapeamento de origem no Node.js, obterá um rastreamento de erro mais significativo que aponta para linhas e funções no código-fonte.

## Como habilitar o mapeamento de origem [#enable-command]

Você pode ativar o suporte ao mapa de origem do Node no comando `node` que inicia seu aplicativo:

```shell
node --enable-source-maps -r newrelic ./dist/server.js
```

## Exemplo [#source-map-example]

Um aplicativo executado sem suporte ao mapa de origem pode exibir um stack trace de erros como este:

```shell
[output] Error: Failed to get all entries in model
[output]    at /dist/models/entries.js:41:23
[output]    ... (multiple functions in New Relic Node agent js files)
[output]    at /dist/models/entries.js:39:35
[output]    at Generator.next (<anonymous>)
```

<Callout variant="tip">
  Observe que o trace se refere aos arquivos criados em `/dist`.
</Callout>

O mesmo aplicativo com suporte ao mapa de origem ativado fará referência aos arquivos de código-fonte:

```shell
[output] Error: Failed to get all entries in model
[output]    at <anonymous> (/src/models/entries.ts:28:13)
[output]    ... (multiple functions in New Relic Node agent js files)
[output]    at <anonymous> (/src/models/entries.ts:26:19)
[output]    at Generator.next (<anonymous>)
```

Esse stack trace aponta para funções específicas e números de linha em seus arquivos de origem, para que você possa encontrar erros com mais facilidade.

Você pode observar esse comportamento executando nosso [aplicativo de exemplo de mapas de origem](https://github.com/newrelic/newrelic-node-examples/tree/main/source-maps), o que facilita a comparação do rastreamento de erros com e sem mapas de origem ativados.
