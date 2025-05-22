---
title: Recurso Experimental em Monitoramento de Browser
metaDescription: Opt-in to use experimental features in New Relic browser monitoring before they're generally available.
freshnessValidatedDate: never
translationType: machine
---

Os recursos New Relic Browser são lançados gradualmente para garantir estabilidade e confiabilidade. No entanto, você pode optar por aproveitar algum recurso antes da GA. Esses são conhecidos como recursos experimentais.

## Recurso experimental atual

Os seguintes recursos experimentais estão disponíveis no New Relic Browser:

* agente browser v1.272.0 - [Rastreie automaticamente marcas e medidas nativas como `BrowserPerformance` evento](/docs/browser/new-relic-browser/browser-pro-features/marks-and-measures).
* agente browser v1.276.0 - [Observar automaticamente os ativos de recursos da página como `BrowserPerformance` evento](/docs/browser/new-relic-browser/browser-pro-features/page-resources).

<Callout variant="important">
  Recursos experimentais estão disponíveis apenas para inclusão manual com copiar e colar ou implementações NPM do agente. Para obter acesso ao aplicativo com APM , entre em contato com seu representante de suporte. Recursos experimentais estão sujeitos a alterações e devem ser usados com cautela.
</Callout>

## Optar manualmente para usar o recurso experimental

### Implementação de copiar/colar do desempenho do browser - Marcas, medidas e recursos

1. Certifique-se de estar usando uma versão do agente do New Relic Browser compatível com o recurso experimental, em uma versão pro ou pro+spa equivalente.
2. Encontre o código do agente do New Relic Browser no aplicativo HTML ou JS da sua página da web.
3. No objeto de configuração `init` , adicione a configuração do recurso `performance` . Aqui está um exemplo que permite a detecção de marcas e medidas:

```js
<script type="text/javascript"> ;window.NREUM||(NREUM={});init={ …, performance: {
  capture_marks: true, // enable to capture browser performance marks (default false)
  capture_measures: true // enable to capture browser performance measures (default false)
  resources: {
    enabled: true, // enable to capture browser peformance resource timings (default false)
    asset_types: [], // Asset types to collect -- an empty array will collect all types (default []). See https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming/initiatorType for the list of types.
    first_party_domains: [], // when included, will decorate any resource as a first party resource if matching (default [])
    ignore_newrelic: true // ignore capturing internal agent scripts and harvest calls (default true)
  }
} }:
```

4. Implantar seu aplicativo.

### Implementação NPM de desempenho do browser - Marcas, Medidas &amp; Recursos

1. Certifique-se de estar usando uma versão do agente do New Relic Browser compatível com o recurso experimental.
2. Encontre o construtor do agente do New Relic Browser na implementação do seu aplicativo.
3. No objeto de configuração `init` , adicione a configuração do recurso `performance` . Aqui está um exemplo que permite a detecção de marcas e medidas:

```js
import { BrowserAgent } from '@newrelic/browser-agent/loaders/browser-agent'

// Populate using values in copy-paste JavaScript snippet.
const options = {
  init: {
    // ... other configurations
    performance: {
      capture_marks: true, // enable to capture browser performance marks (default false)
      capture_measures: true // enable to capture browser performance measures (default false)
      resources: {
        enabled: true, // enable to capture browser peformance resource timings (default false)
        asset_types: [], // Asset types to collect -- an empty array will collect all types (default []). See https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming/initiatorType for the list of types.
        first_party_domains: [], // when included, will decorate any resource as a first party resource if matching (default [])
        ignore_newrelic: true // ignore capturing internal agent scripts and harvest calls (default true)
      }
    }
   },
  info: { ... },
  loader_config: { ... } 
}

// The agent loader code executes immediately on instantiation.
new BrowserAgent(options)
```

Consulte a [documentação do pacote NPM](https://www.npmjs.com/package/@newrelic/browser-agent) para obter mais informações sobre como configurar o agente via NPM.

## Opte por aplicativo injetado APM

O aplicativo da web fornecido APMpode optar por recursos experimentais entrando em contato com seu representante de suporte, preenchendo um ticket de ajuda ou enviando um e-mail para `browser-agent@newrelic.com` com uma linha de assunto começando com `[Experimental Features]: `.