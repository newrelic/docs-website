---
title: 'Resolução de problemas de aplicativos Web do Azure: conflito insights de aplicativos'
tags:
  - Agents
  - NET agent
  - Azure troubleshooting
metaDescription: What to do if no data appears and Microsoft's Application Insights profiler is preventing the New Relic .NET profiler from instrumenting your app.
freshnessValidatedDate: never
translationType: machine
---

## Problema

O agente .NET foi instalado e os <DNT>**App Settings**</DNT> necessários estão configurados, mas nenhum dado aparece e nenhum New Relic Logs foi criado em `D:\Home\Logfiles\NewRelic\`. Além disso, quando você usa o <DNT>**Process Explorer**</DNT> do console do Azure Kudu para inspecionar <DNT>**Environment Variables**</DNT> do seu aplicativo, ele mostra que `COR_PROFILER_PATH_64` e `COR_PROFILER_PATH_32` estão definidos e apontando para o seguinte:

```
D:\Program Files (x86)\SiteExtensions\InstrumentationEngine\1.0.19\Instrumentation64\MicrosoftInstrumentationEngine_x64.dll
```

## Solução

O .NET Common Language Runtime (CLR) permite apenas um profiler. Se o aplicativo insights profiler da Microsoft estiver instalado no sistema, o New Relic profiler não irá instrumentar nenhum aplicativo e nenhum dado aparecerá. Para obter mais informações, consulte a [documentação dos Aplicativos Web do Microsoft Azure](https://docs.microsoft.com/en-us/azure/azure-monitor/app/azure-web-apps).

Para resolver esse problema, remova ou desative o aplicativo insights do seu aplicativo.

Para <DNT>**remove**</DNT> a extensão do site do aplicativo insights :

1. Remova todas as configurações relacionadas aos insights do aplicativo de <DNT>**Application > Settings > Application Settings**</DNT> e <DNT>**Save**</DNT>. Isso pode incluir as seguintes chaves:

   * Qualquer chave que comece com `APPINSIGHTS_`
   * Qualquer chave que comece com `APPLICATIONINSIGHTS_`
   * Qualquer chave que comece com `XDT_MicrosoftApplicationInsights_`
   * `DiagnosticServices_EXTENSION_VERSION`
   * `InstrumentationEngine_EXTENSION_VERSION`
   * `MicrosoftInstrumentationEngine_LatestPath`

2. Remova a extensão de <DNT>**Application > Tools > Extensions**</DNT>. Clique com o botão direito na extensão e <DNT>**Delete**</DNT>.

3. Remova o <DNT>**Tile Add-On**</DNT> do seu <DNT>**Application Panel**</DNT> (se houver).

4. Reinicie seu aplicativo.

Para <DNT>**disable**</DNT> insights do aplicativo por meio do Portal do Azure: Acesse o painel insights do aplicativo em <DNT>**Settings**</DNT>. Isso pode reiniciar seu aplicativo.
