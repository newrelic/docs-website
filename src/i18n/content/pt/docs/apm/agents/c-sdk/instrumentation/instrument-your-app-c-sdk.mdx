---
title: Instrumente seu aplicativo com o C SDK
tags:
  - Agents
  - C SDK
  - Instrumentation
metaDescription: 'How to instrument transactions, their segments, and errors in your C application so you can monitor them with New Relic.'
freshnessValidatedDate: never
translationType: machine
---

<Callout
  variant="important"
  title="AVISO DE EOL"
>
  A partir de abril de 2022, não ofereceremos suporte ao recurso C SDK. Para obter mais detalhes, consulte nossa [postagem no Fórum de suporte](https://discuss.newrelic.com/t/q1-bulk-eol-announcement-fy23/181744).
</Callout>

Para monitor qualquer aplicação no Linux utilizando uma linguagem que possa importar biblioteca C, você deve:

1. Crie uma configuração usando `newrelic_new_app_config()`, conecte-se ao daemon usando [`newrelic_init()`](https://newrelic.github.io/c-sdk/libnewrelic_8h.html#a03f07e64a51b5f0cd51caa4f28c8b6c1) e conecte seu aplicativo usando [`newrelic_create_app()`](https://newrelic.github.io/c-sdk/libnewrelic_8h.html#a61dd90439ae3cc5060021f6ab4701132). Para obter mais informações, consulte os [procedimentos de instalação do C SDK](/docs/agents/c-sdk/install-configure/install-c-sdk-compile-link-your-code).
2. Instrumento de transação manual usando o C SDK, conforme descrito neste documento.

A New Relic define uma [transação fora da web](/docs/apm/transactions/intro-transactions/transactions-new-relic-apm) como uma unidade lógica de trabalho em um aplicativo de software. Após o instrumento de transação manual em seu código-fonte adicionando funções do New Relic, você poderá visualizar os dados na [página<DNT>**Transactions**</DNT> ](/docs/apm/applications-menu/monitoring/transactions-page)do New Relic. Você também pode instrumentar segmentos de uma transação e erros.

## Instrumentar de transação [#instrument-c-txn]

Para instrumentar uma transação para que você possa monitorá-la, envolva as funções do New Relic que iniciam e interrompem a instrumentação em torno da transação. A função que você usa depende se você deseja instrumento a [web ou transação fora da web](/docs/apm/transactions/intro-transactions/transactions-new-relic-apm#types).

No exemplo a seguir, o aplicativo é criado após uma chamada para `newrelic_create_app()`. Para obter mais informações, consulte os [procedimentos de instalação do C SDK](/docs/agents/c-sdk/install-configure/install-c-sdk-compile-link-your-code) , bem como a [documentação do C SDK `libnewrelic.h` no GitHub](https://newrelic.github.io/c-sdk/libnewrelic_8h.html).

1. Adicione o seguinte código imediatamente <DNT>**before**</DNT> à transação que você deseja monitor, fornecendo o parâmetro necessário.

   Para transferência da web:

   ```
   // Example code:
   <a href="https://newrelic.github.io/c-sdk/libnewrelic_8h.html#add4646ef16f4f0c9b75934cf96909655">newrelic_txn_t</a> *txn;
   /* ... */
   txn = <a href="https://newrelic.github.io/c-sdk/libnewrelic_8h.html#adbf7c1fa57482f6e0a7f291e0b5ec80f">newrelic_start_web_transaction</a>(app, "NAME_YOUR_TRANSACTION");
   ```

   Para transações fora da web:

   ```
   // Example code:
   newrelic_txn_t *txn;
   /* ... */
   txn = <a href="https://newrelic.github.io/c-sdk/libnewrelic_8h.html#a88648cc287f8d7e371139dc3809b7afb">newrelic_start_non_web_transaction</a>(app, "NAME_YOUR_TRANSACTION");
   ```

2. Adicione `newrelic_end_transaction()` imediatamente após a web ou transação fora da web que você deseja monitor, fornecendo um ponteiro para a transação, `&txn`, como parâmetro.

## Segmentos de instrumento [#segments]

Depois de instrumentar uma transação usando o C SDK, você pode instrumentar [segmentos](/docs/apm/transactions/intro-transactions/transactions-new-relic-apm#segments) nela. Por segmentos instrumentados, você pode monitor as funções e chamadas individuais dentro de uma transação.

<DNT>
  **Segments example**
</DNT>

Você tem uma transação associada a um processo de checkout, que processa informações de envio e de cartão de crédito. Você pode instrumentar seu aplicativo para dividir essa transação em dois segmentos: um segmento para envio e um segmento para pagamento.

Você pode usar segmentos de instrumentos para monitor os seguintes tipos de chamadas:

* [Serviços externos](#external-segments) usando segmentos externos
* [Segmentos personalizados](#custom-segments) para código arbitrário
* [Datastores](#datastore-segments) usando segmentos de armazenamento de dados
* [consulta lenta trace](#slow-query-datastore) (somente SQL banco de dados)

Para obter mais informações, consulte os [procedimentos de instalação do C SDK](/docs/agents/c-sdk/install-configure/install-c-sdk-compile-link-your-code) , bem como a [documentação do C SDK `libnewrelic.h` no GitHub](https://newrelic.github.io/c-sdk/libnewrelic_8h.html).

<CollapserGroup>
  <Collapser
    id="external-segments"
    title="Instrumentar chamadas para serviços externos"
  >
    Para monitor chamadas para serviços externos, instrumentos externos que estão dentro de uma transação instrumentada. Os segmentos externos aparecem na [tabela <DNT>**Breakdown**</DNT> da página<DNT>**Transactions**</DNT> ](/docs/apm/applications-menu/monitoring/transactions-page-find-specific-performance-problems)e na [página<DNT>**External services**</DNT> ](/docs/apm/applications-menu/monitoring/external-services-page).

    Para instrumentar um segmento externo, envolva as funções do New Relic que iniciam e param a instrumentação em torno da função que você deseja monitor:

    1. [instrumento uma transação](#instrument-c-txn).

    2. Crie um [`newrelic_external_segment_params_t`](https://newrelic.github.io/c-sdk/structnewrelic__external__segment__params__t.html) que descreva o segmento externo, fornecendo o parâmetro necessário.

    3. Adicione `newrelic_start_external_segment()` imediatamente antes da função que você deseja monitor, fornecendo o parâmetro necessário.

    4. Adicione `newrelic_end_segment()` imediatamente após a função que você deseja monitor, fornecendo o parâmetro necessário.

       Para obter mais informações, consulte os [procedimentos de instalação do C SDK](/docs/agents/c-sdk/install-configure/install-c-sdk-compile-link-your-code) , bem como a [documentação do C SDK `libnewrelic.h` no GitHub](https://newrelic.github.io/c-sdk/libnewrelic_8h.html).
  </Collapser>

  <Collapser
    id="custom-segments"
    title="Chamadas de instrumento para código arbitrário (segmentos personalizados)"
  >
    Para monitor chamadas a código arbitrário, o instrumento customiza segmentos que estão dentro de uma transação instrumentada. Os segmentos personalizados aparecem na tabela <DNT>**Breakdown**</DNT> da [página<DNT>**Transactions**</DNT> ](/docs/apm/applications-menu/monitoring/transactions-page-find-specific-performance-problems).

    Para instrumentar um segmento personalizado, envolva as funções do New Relic que iniciam e param a instrumentação em torno da função que você deseja monitor:

    1. [instrumento uma transação](#instrument-c-txn).

    2. Adicione `newrelic_start_segment()` imediatamente antes da função que você deseja monitor, fornecendo o parâmetro necessário.

    3. Adicione `newrelic_end_segment()` imediatamente após a função que você deseja monitor, fornecendo o parâmetro necessário.

       Para obter mais informações, consulte os [procedimentos de instalação do C SDK](/docs/agents/c-sdk/install-configure/install-c-sdk-compile-link-your-code) , bem como a [documentação do C SDK `libnewrelic.h` no GitHub](https://newrelic.github.io/c-sdk/libnewrelic_8h.html).
  </Collapser>

  <Collapser
    id="datastore-segments"
    title="Chamadas de instrumento para armazenamentos de dados"
  >
    Para monitor chamadas para armazenamentos de dados, instrumente os segmentos do armazenamento de dados em uma transação instrumentada. Os segmentos do armazenamento de dados aparecem na tabela <DNT>**Breakdown**</DNT> e na guia <DNT>**Databases**</DNT> na [página<DNT>**Transactions**</DNT> ](/docs/apm/applications-menu/monitoring/transactions-page)no New Relic. Você também pode visualizar segmentos de armazenamento de dados como um [atributo`databaseDuration` ](/attribute-dictionary/?event=Transaction&attribute=databaseDuration)do [evento `Transaction` do APM](/docs/insights/insights-data-sources/default-events-attributes/apm-default-event-attributes).

    Para instrumentar um segmento de armazenamento de dados, envolva as funções do New Relic que iniciam e param a instrumentação em torno da função que você deseja monitor:

    1. [instrumento uma transação](#instrument-c-txn).

    2. Crie um [`newrelic_datastore_segment_params_t`](https://newrelic.github.io/c-sdk/structnewrelic__datastore__segment__params__t.html) que descreva o segmento do armazenamento de dados.

    3. Adicione `newrelic_start_datastore_segment()` imediatamente antes da função que você deseja monitor, fornecendo o parâmetro necessário.

    4. Adicione `newrelic_end_segment()` imediatamente após a função que você deseja monitor, fornecendo o parâmetro necessário.

       Para obter mais informações, consulte os [procedimentos de instalação do C SDK](/docs/agents/c-sdk/install-configure/install-c-sdk-compile-link-your-code) , bem como a [documentação do C SDK `libnewrelic.h` no GitHub](https://newrelic.github.io/c-sdk/libnewrelic_8h.html).

       <Callout variant="tip">
         Para configurar como o nome do banco de dados e a instância do banco de dados são relatados, use [`newrelic_datastore_segment_config_t`](https://newrelic.github.io/c-sdk/structnewrelic__datastore__segment__config__t.html).
       </Callout>
  </Collapser>

  <Collapser
    id="slow-query-datastore"
    title="Reportar rastreamento de consulta lenta para segmentos de armazenamento de dados (somente SQL)"
  >
    <Callout variant="important">
      Você pode reportar rastreamento de consulta lenta apenas para SQL banco de dados.
    </Callout>

    Para relatar dados trace de consulta lenta para segmentos de armazenamento de dados que demoram mais do que o tempo especificado, habilite estas configurações em seu [newrelic_app_config_t](https://newrelic.github.io/c-sdk/structnewrelic__app__config__t.html):

    1. Ative o rastreamento de consulta lenta definindo [`transaction_tracer.datastore_reporting.enabled`](https://newrelic.github.io/c-sdk/structnewrelic__transaction__tracer__config__t.html) como `true`.

    2. Para definir o limite, adicione um período de tempo em microssegundos a [`transaction_tracer.datastore_reporting.threshold_us`](https://newrelic.github.io/c-sdk/structnewrelic__transaction__tracer__config__t.html).

       Então, se uma chamada do armazenamento de dados demorar mais que o limite, o C SDK a reportará como uma consulta lenta. Para visualizar detalhes trace de consulta lenta, use as páginas [<DNT>**Databases**</DNT>](/docs/apm/applications-menu/monitoring/databases-page) e [<DNT>**Slow queries**</DNT>](/docs/apm/applications-menu/monitoring/view-slow-query-details) no New Relic.

       Para obter mais informações, consulte os [procedimentos de instalação do C SDK](/docs/agents/c-sdk/install-configure/install-c-sdk-compile-link-your-code) , bem como a [documentação do C SDK `libnewrelic.h` no GitHub](https://newrelic.github.io/c-sdk/libnewrelic_8h.html).
  </Collapser>
</CollapserGroup>

## Erros de instrumento [#errors]

Para utilizar o C SDK para monitor erros de transação, você deve instrumentar manualmente seu código-fonte adicionando a função [`newrelic_notice_error()`](https://newrelic.github.io/c-sdk/libnewrelic_8h.html#a02a9a959015a0ca68ce11c750f690475) a ele.

Erros de transação e rastreamento de erros aparecem na [página<DNT>**Error analytics**</DNT> ](/docs/apm/applications-menu/error-analytics/error-analytics-manage-error-traces)do New Relic. O C SDK relata o número total de erros e até 100 rastreamentos de erros por minuto. Você também pode visualizar, consultar e visualizar erros de transação como [evento APM `TransactionError` ](/docs/insights/insights-data-sources/default-events-attributes/apm-default-event-attributes).

<Callout variant="tip">
  Para incluir chamadas de função no rastreamento de erros, use o sinalizador de vinculador `-rdynamic` do GNU para [vincular seus aplicativos ao compilar arquivos](/docs/agents/c-sdk/install-configure/install-c-sdk-compile-link-your-code#compile). O sinalizador do vinculador `-rdynamic` fornece um rastreamento de erro mais significativo.
</Callout>

Para instrumentar erros na transação:

1. [Inicie uma transação](#start-transaction).
2. Registre um erro com [`newrelic_notice_error()`](https://newrelic.github.io/c-sdk/libnewrelic_8h.html#a02a9a959015a0ca68ce11c750f690475), fornecendo o parâmetro necessário.
3. [Finalize a transação](#end-transaction), fornecendo o parâmetro necessário.

Para obter mais informações, consulte os [procedimentos de instalação do C SDK](/docs/agents/c-sdk/install-configure/install-c-sdk-compile-link-your-code) , bem como a [documentação do C SDK `libnewrelic.h` no GitHub](https://newrelic.github.io/c-sdk/libnewrelic_8h.html).

## Evite problemas de agrupamento métrico [#mgi]

Quando uma conta ou aplicativo envia muitas métricas individuais que poderiam ser melhor gerenciadas em grupos, a New Relic usa o termo <DNT>**metric grouping issue**</DNT> ou <DNT>**MGI**</DNT> para descrever esta situação. Se o seu aplicativo enviar grandes quantidades de dados desnecessariamente para o New Relic, isso reduzirá a eficácia de gráficos, tabelas e relatórios.

Problemas de agrupamento métrico ocorrem mais comumente com transações da web, especialmente se o nome for baseado em URLs. Para ajudar a prevenir esta situação, veja [questões de agrupamento métrico](/docs/agents/manage-apm-agents/troubleshooting/metric-grouping-issues).
