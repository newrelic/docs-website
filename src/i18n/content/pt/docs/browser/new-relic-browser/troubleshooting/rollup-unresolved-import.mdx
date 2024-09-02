---
title: Agregar importações não resolvidas
type: troubleshooting
tags:
  - Browser
  - Browser monitoring
  - Troubleshooting
metaDescription: 'If you use rollup to bundle your project and get an UNRESOLVED_IMPORT error, you may need to update your dependencies.'
freshnessValidatedDate: never
translationType: machine
---

## Problema

Você recebe um erro `UNRESOLVED_IMPORT` ao compilar seu projeto usando o pacote NPM do browser agente em um projeto que usa agregar para empacotamento.

## Solução

Atualize sua configuração agregar para usar o [plug-in](https://www.npmjs.com/package/@rollup/plugin-node-resolve) `node-resolve` . Se você já usa esse plug-in, atualize-o para uma versão mínima de `15.2.1`.

### Projetos de estêncil

Se o seu projeto usar a framework stencil , você não poderá substituir a versão do plug-in `node-resolve`. Use a solução alternativa listada abaixo em seu projeto e monitor [esse](https://github.com/ionic-team/stencil/issues/3605) problema no repositório stencil do github.

## Solução alternativa

Se você não conseguir atualizar o plug-in `node-resolve` ou estiver usando uma framework que agrupa o plug-in que não pode ser substituído, será necessário alterar a instrução de importação do agente browser.

```js
// Instead of importing the browser agent like this
import { MicroAgent } from "@newrelic/browser-agent/loaders/micro-agent";

// Import like this
import { MicroAgent } from "@newrelic/browser-agent/src/loaders/micro-agent";
```

O diretório `src` contém nosso código ES2019+. Se você não puder aplicar a transpilação a este código e precisar oferecer suporte a browsers mais antigos, atualize o pacote NPM do browser agente para a versão 1.252.0 e use a instrução de importação abaixo:

```js
import { MicroAgent } from "@newrelic/browser-agent/dist/esm/loaders/micro-agent";
```

O conteúdo do diretório `dist` segue nossa [declaração de suporte do browser](/docs/browser/new-relic-browser/getting-started/compatibility-requirements-browser-monitoring/#browser-types).
