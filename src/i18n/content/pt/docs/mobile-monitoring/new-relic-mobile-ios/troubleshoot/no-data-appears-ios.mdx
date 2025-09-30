---
title: Nenhum dado aparece (iOS)
type: troubleshooting
tags:
  - Mobile monitoring
  - New Relic Mobile iOS
  - Troubleshoot
metaDescription: 'If your iOS app is not reporting data to New Relic, follow these steps to troubleshoot.'
freshnessValidatedDate: never
translationType: machine
---

## Problema

Seu aplicativo iOS ou tvOS não está reportando dados após a instalação do agente iOS.

## Solução

Após enviar uma solicitação em seu aplicativo, os dados deverão aparecer na interface de monitoramento do Mobile em três a cinco minutos. Se nenhum dado aparecer:

1. Certifique-se de chamar o agente na primeira linha de `didFinishLaunchingWithOptions()` e de executar o agente no thread principal. Para evitar comportamento inesperado ou instável, não inicie `didFinishLaunchingWithOptions()` mais tarde, de forma assíncrona ou em um encadeamento em segundo plano.
2. Certifique-se de ter concluído todas as [instruções de instalação](/docs/mobile-monitoring/mobile-monitoring-installation/getting-started/ios-installation-configuration#installation).
3. Use [o New Relic Diagnostics](/docs/agents/manage-apm-agents/troubleshooting/new-relic-diagnostics) para tentar identificar automaticamente o problema.
4. Examine [o log detalhado](#logs) em busca de erros.
5. Confirme se o dispositivo pode alcançar o endpoint de monitoramento de Mobile listado em [Redes](/docs/using-new-relic/cross-product-functions/install-configure/networks).
6. Se precisar de ajuda adicional, obtenha suporte em [support.newrelic.com](https://support.newrelic.com).

Para configurar seu arquivo de log:

1. Aumente o nível de registro do New Relic adicionando esta chamada de método antes de chamar `startWithApplicationToken`:

   ```objectivec
   [NRLogger setLogLevels:NRLogLevelALL];
   ```

2. Gere alguns minutos de atividade em seu aplicativo.

3. Examine o log do seu dispositivo em busca de linhas do SDK da New Relic que possam indicar possíveis problemas.

4. Para remover o aumento da sobrecarga de desempenho causado por `NRLogLevelALL`, comente o aumento do nível de registro após examinar seu registro:

   ```objectivec
   //[NRLogger setLogLevels:NRLogLevelALL];
   ```

5. Verifique o log de compilação do seu aplicativo em busca de sinais de problemas de instrumentação do New Relic.
