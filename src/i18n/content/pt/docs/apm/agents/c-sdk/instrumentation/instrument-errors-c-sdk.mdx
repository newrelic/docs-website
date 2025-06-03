---
title: Instrumentar erros com o C SDK
metaDescription: Learn how to instrument errors in your C application so you can monitor them with New Relic.
freshnessValidatedDate: never
translationType: machine
---

<Callout
  variant="important"
  title="AVISO DE EOL"
>
  A partir de abril de 2022, não ofereceremos suporte ao recurso C SDK. Para obter mais detalhes, consulte nossa [postagem no Fórum de suporte](https://discuss.newrelic.com/t/q1-bulk-eol-announcement-fy23/181744).
</Callout>

A New Relic define uma [transação fora da web](/docs/apm/transactions/intro-transactions/transactions-new-relic-apm) como uma unidade lógica de trabalho em um aplicativo de software. Depois de [instrumentar uma transação](/docs/instrument-transactions-c-agent), você também pode instrumentar erros na transação para poder monitorá-los na interface do New Relic. Para usar o C SDK para monitor erros, você deve instrumentar manualmente seu código-fonte adicionando a função New Relic `newrelic_notice_error()` a ele.

<Callout variant="tip">
  Para incluir chamadas de função no rastreamento de erros, use o sinalizador de vinculador `-rdynamic` do GNU para [vincular seus aplicativos ao compilar arquivos](/docs/install-c-agent-compile-link-your-code#compile). O sinalizador do vinculador `-rdynamic` fornece um rastreamento de erro mais significativo.
</Callout>

## Instrumentar erros na transação [#errors]

Para instrumentar erros na transação:

1. [Inicie uma transação](/docs/instrument-transactions-c-agent#start-transaction).
2. Registre um erro com `newrelic_notice_error()`, fornecendo o parâmetro necessário.
3. [Finalize a transação](/docs/instrument-transactions-c-agent#end-transaction).

## Ver erros

Erros de transação e [rastreamentos de erros](#error-trace-examples) aparecem na [página<DNT>**Error analytics**</DNT> ](/docs/apm/applications-menu/error-analytics/error-analytics-manage-error-traces)da interface do New Relic. O C SDK informa o número total de erros e até 100 rastreamentos de erros por minuto na página <DNT>**Error analytics**</DNT> .

Você também pode visualizar, consultar e visualizar erros de transação como evento `TransactionError` .

## Examine o log para obter detalhes do erro [#logs-context]

Você pode reunir os dados do seu log e da aplicação para tornar a resolução de problemas mais fácil e rápida. Com [os logs contextualizados](/docs/logs/logs-context/c-sdk-configure-logs-context/), você pode ver a mensagem do log relacionada aos seus erros e rastrear diretamente na interface do seu aplicativo.

1. Na página

   <DNT>
     **Errors**
   </DNT>

   , clique em um trace para ir para a [página](/docs/apm/apm-ui-pages/error-analytics/errors-page-find-fix-verify-problems/)

   <DNT>
     [**Error details**](/docs/apm/apm-ui-pages/error-analytics/errors-page-find-fix-verify-problems/)
   </DNT>

   [](/docs/apm/apm-ui-pages/error-analytics/errors-page-find-fix-verify-problems/).

2. Na página de detalhes do erro, clique em

   <DNT>
     **See logs**
   </DNT>

   .

3. Para visualizar detalhes relacionados a uma mensagem do log individual, clique diretamente na mensagem.

Você também pode ver o logs contextualizados dos [dados da sua infraestrutura](/docs/logs/forward-logs/forward-your-logs-using-infrastructure-agent/), como cluster do Kubernetes. Não há necessidade de mudar para outra página de interface.
