---
title: Instrumentar de transação com o C SDK
metaDescription: Learn how to instrument transactions in your C application so you can monitor them with New Relic.
freshnessValidatedDate: never
translationType: machine
---

<Callout
  variant="important"
  title="AVISO DE EOL"
>
  A partir de abril de 2022, não ofereceremos suporte ao recurso C SDK. Para obter mais detalhes, consulte nossa [postagem no Fórum de suporte](https://discuss.newrelic.com/t/q1-bulk-eol-announcement-fy23/181744).
</Callout>

Instrumentar [transação](/docs/apm/transactions/intro-transactions/transactions-new-relic-apm) usando o C SDK para que você possa monitor qualquer aplicativo no Linux que use uma linguagem que possa importar a biblioteca C. Após a transação manual em seu código-fonte adicionando funções do New Relic, você poderá visualizar os dados na [página<DNT>**Transactions**</DNT> ](/docs/apm/applications-menu/monitoring/transactions-page)na interface do New Relic.

## Instrumentar de transação [#c-agent-txn]

Para instrumentar uma transação para que você possa monitorá-la na interface do New Relic, envolva as funções do New Relic que iniciam e interrompem a instrumentação em torno da transação. A função que você usa depende se você deseja instrumento a [web ou transação fora da web](/docs/apm/transactions/intro-transactions/transactions-new-relic-apm#types).

1. Adicione o seguinte código imediatamente <DNT>**before**</DNT> à transação que você deseja monitor:

   Para transferência da web:

   ```c
   newrelic_txn_t *txn;
   /* ... */
   txn = newrelic_start_web_transaction(app, "NAME_YOUR_TRANSACTION");
   ```

   Para transações fora da web:

   ```c
   newrelic_txn_t *txn;
   /* ... */
   txn = newrelic_start_non_web_transaction(app, "NAME_YOUR_TRANSACTION");
   ```

2. Adicione o seguinte código imediatamente após a web ou transação fora da web que você deseja monitor:

   ```c
   newrelic_end_transaction(&txn);
   ```

## Instrumentar segmentos e erros [#segments-errors]

Segmentos são as funções e chamadas que constituem uma transação. Após o instrumento de transação, você poderá:

* [segmentos de instrumento](/docs/instrument-segments-c-agent) de uma transação se você quiser mais dados sobre funções chamadas durante essa transação.
* [erros do instrumento](/docs/instrument-errors-c-agent) para que você possa usar a interface do New Relic para monitor erros que ocorrem durante sua transação.
