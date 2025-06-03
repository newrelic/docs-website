---
title: Guia para usar a API C SDK
tags:
  - Agents
  - C SDK
  - Instrumentation
metaDescription: Quick reference of New Relic C SDK API calls you can use to manually instrument your application's code.
freshnessValidatedDate: never
translationType: machine
---

<Callout
  variant="important"
  title="AVISO DE EOL"
>
  A partir de abril de 2022, não ofereceremos suporte ao recurso C SDK. Para obter mais detalhes, consulte nossa [postagem no Fórum de suporte](https://discuss.newrelic.com/t/q1-bulk-eol-announcement-fy23/181744).
</Callout>

O C SDK da New Relic monitora seu aplicativo e microsserviços para ajudá-lo a identificar e resolver problemas de desempenho. Aplicativo C executado a partir de um arquivo binário nativo compilado. Para monitor [a transação](/docs/apm/transactions/intro-transactions/transactions-new-relic-apm), você deve instrumentar manualmente seu código adicionando métodos New Relic a ele.

Este guia ajuda você a decidir qual método usar. O código do método, os parâmetros obrigatórios e os exemplos residem na [documentação C SDK da New Relic no GitHub](https://newrelic.github.io/c-sdk/index.html).

## Certifique-se de que sua personalização seja segura para threads [#thread-safety]

O C SDK oferece suporte à instrumentação de aplicativos multithread, mas deve ser inicializado antes da instrumentação de vários threads. Ao chamar qualquer uma das funções a seguir, certifique-se de que elas sejam <DNT>**called on the main thread**</DNT> antes de qualquer outra função do C SDK ser chamada:

* [`newrelic_configure_log`](https://newrelic.github.io/c-sdk/libnewrelic_8h.html#a8922f48a2b92714fb2fc05ad7bd5c003)
* [`newrelic_init`](https://newrelic.github.io/c-sdk/libnewrelic_8h.html#a03f07e64a51b5f0cd51caa4f28c8b6c1)

## Monitor transação [#monitor-tx]

Antes de instrumentar manualmente seu código para monitor a transação:

1. Verifique a [compatibilidade e os requisitos do C SDK](/docs/c-agent-compatibility-requirements) para seu aplicativo.
2. Certifique-se de estar usando a versão mais recente da biblioteca C SDK e [atualize](/docs/update-your-c-agent-library) conforme necessário.

<table>
  <thead>
    <tr>
      <th style={{ width: "250px" }}>
        Se você quiser...
      </th>

      <th>
        Utilize este método...
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Comece a cronometrar a transação da web
      </td>

      <td>
        [`newrelic_start_web_transaction()`](https://newrelic.github.io/c-sdk/libnewrelic_8h.html#adbf7c1fa57482f6e0a7f291e0b5ec80f)
      </td>
    </tr>

    <tr>
      <td>
        Comece a cronometrar uma transação fora da web
      </td>

      <td>
        [`newrelic_start_non_web_transaction()`](https://newrelic.github.io/c-sdk/libnewrelic_8h.html#a88648cc287f8d7e371139dc3809b7afb)
      </td>
    </tr>

    <tr>
      <td>
        Pare de cronometrar uma transação
      </td>

      <td>
        `newrelic_end_transaction()`
      </td>
    </tr>

    <tr>
      <td>
        Impedir que uma transação seja reportada à New Relic
      </td>

      <td>
        [`newrelic_ignore_transaction()`](https://newrelic.github.io/c-sdk/libnewrelic_8h.html#a7b41f8690c3b2b7e024a16fa4bb59320)
      </td>
    </tr>
  </tbody>
</table>

## Métodos específicos de tempo usando segmentos [#segments]

Se uma transação já estiver visível no New Relic, mas você não tiver dados suficientes sobre um método específico que foi chamado durante essa transação, você poderá [instrumentar segmentos](/docs/instrument-your-app-c-sdk#segments). Por exemplo, se você quiser cronometrar um método que possui lógica complexa, poderá criar um segmento para cada um dos métodos na transação.

Para instrumentar um método em uma transação existente, crie segmentos para qualquer um dos seguintes:

* Serviços externos
* Funções ou outros blocos arbitrários de código (usando segmentos personalizados)
* Armazenamentos de dados
* Consulta lenta trace (somente armazenamentos de dados SQL)

<table>
  <thead>
    <tr>
      <th style={{ width: "250px" }}>
        Se você quiser...
      </th>

      <th>
        Utilize este método...
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Comece a cronometrar um segmento
      </td>

      <td>
        ```c
        newrelic_start_datastore_segment()
        newrelic_start_external_segment()
        newrelic_start_segment()
        ```
      </td>
    </tr>

    <tr>
      <td>
        Pare de cronometrar um segmento
      </td>

      <td>
        `newrelic_end_segment()`
      </td>
    </tr>

    <tr id="async">
      <td>
        Segmentos pais manualmente
      </td>

      <td>
        `newrelic_set_segment_parent()` e `newrelic_set_segment_parent_root()`

        Isto é útil, por exemplo, com um processo assíncrono quando você deseja visualizar um segmento como filho da chamada de nível superior da transação. Para obter mais informações, consulte a [documentação de criação manual de segmentos no GitHub](https://github.com/newrelic/c-sdk/blob/master/GUIDE.md#manual-segment-parenting).
      </td>
    </tr>
  </tbody>
</table>

Os segmentos são registrados na transação ativa. Ao adicionar um segmento a uma transação ativa, você precisa de acesso ao `newrelic_txn_t*` ou ponteiro de transação, retornado por `newrelic_start_web_transaction()` ou `newrelic_start_non_web_transaction()`.

## Aprimore os metadados de uma transação [#metadata]

Você pode gerenciar os metadados que a New Relic reporta para transação. Isto é útil quando você deseja um nível diferente de detalhe para sua transação. Por exemplo:

* Se você estiver enfrentando um [problema de agrupamento métrico](/docs/agents/manage-apm-agents/troubleshooting/metric-grouping-issues#video), poderá alterar os nomes padrão da sua transação para torná-los mais identificáveis.

* Se você deseja criar

  <InlinePopover type="dashboards"/>

  para sua transação, você pode adicionar um atributo personalizado.

<table>
  <thead>
    <tr>
      <th style={{ width: "250px" }}>
        Se você quiser...
      </th>

      <th>
        Utilize este método...
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Adicione metadados (como o nome da conta do seu cliente ou nível de assinatura) à sua transação
      </td>

      <td>
        Adicione atributo personalizado à sua transação com base no tipo:

        * [`newrelic_add_attribute_int()`](https://newrelic.github.io/c-sdk/libnewrelic_8h.html#a1f0fe987526c023a2101111b7ee557b3)
        * [`newrelic_add_attribute_string()`](https://newrelic.github.io/c-sdk/libnewrelic_8h.html#a9eac445521cecdd046520d2178f232a0)
        * [`newrelic_add_attribute_long()`](https://newrelic.github.io/c-sdk/libnewrelic_8h.html#a2a082a144cff6c805c6373d9d4f1f551)
        * [`newrelic_add_attribute_double()`](https://newrelic.github.io/c-sdk/libnewrelic_8h.html#abfe6f64a8eec7d60d8588f8969781d34)
      </td>
    </tr>
  </tbody>
</table>

## Instrumentar chamadas para serviços externos [#externals]

Use estes métodos para coletar dados sobre as conexões do seu aplicativo com outros aplicativos ou banco de dados:

<table>
  <thead>
    <tr>
      <th style={{ width: "250px" }}>
        Se você quiser...
      </th>

      <th>
        Utilize este método...
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Veja o caminho que uma solicitação percorre ao percorrer um sistema distribuído
      </td>

      <td>
        Siga os procedimentos para ativar o [distributed tracing](/docs/agents/c-sdk/instrumentation/enable-distributed-tracing-your-c-applications) por instrumento.
      </td>
    </tr>

    <tr>
      <td>
        Cronometrar uma chamada para um recurso externo (como um serviço externo, servidor de banco de dados ou fila de mensagens)
      </td>

      <td>
        Siga os procedimentos para [Instrumentar chamadas para segmentos externos](/docs/instrument-your-app-c-sdk#external-segments).
      </td>
    </tr>
  </tbody>
</table>

## Coletar ou log erros [#errors]

O C SDK detecta erros automaticamente. Se você quiser alterar a forma como ele relata erros ao New Relic, altere a configuração do coletor de erros.

<table>
  <thead>
    <tr>
      <th style={{ width: "250px" }}>
        Se você quiser...
      </th>

      <th>
        Utilize este método...
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Defina níveis de registro para seu aplicativo
      </td>

      <td>
        Use `newrelic_configure_log()` para configurar o log do SDK C e sinalizadores de linha de comando para configurar o log do daemon C. Para obter mais informações, consulte a [documentação de registro do C SDK](/docs/generate-logs-troubleshooting-c-sdk).
      </td>
    </tr>

    <tr>
      <td>
        Informar um erro
      </td>

      <td>
        [`newrelic_notice_error()`](https://newrelic.github.io/c-sdk/libnewrelic_8h.html#a02a9a959015a0ca68ce11c750f690475)
      </td>
    </tr>
  </tbody>
</table>

## Envie dados personalizados do seu aplicativo [#custom-data]

Para registrar [dados personalizados](/docs/data-analysis/metrics/analyze-your-metrics/data-collection-metric-timeslice-event-data) com o C SDK, você pode usar qualquer um dos seguintes métodos:

* <DNT>
    **Custom events:**
  </DNT>

  Na New Relic, dados [de eventos](/docs/using-new-relic/welcome-new-relic/getting-started/glossary#event) são um tipo de dados fundamental. Os dados do evento representam um registro de um único evento em um determinado momento. Isto é útil para visualizar ou consultar detalhes específicos.

* <DNT>
    **Custom event attributes:**
  </DNT>

  Para incluir metadados adicionais sobre o evento, você pode adicionar pares de valores principais ([atributo personalizado](/docs/using-new-relic/welcome-new-relic/getting-started/glossary#event)) ao seu evento personalizado.

* <DNT>
    **Custom metrics:**
  </DNT>

  [métrica de fração de tempo data](/docs/using-new-relic/welcome-new-relic/getting-started/glossary#metric) é a medida estatística de dados que o New Relic agrega para que você possa visualizá-los na interface do usuário e mapeá-los. Normalmente, os dados métricos têm um período de retenção mais longo do que os dados de eventos.

<CollapserGroup>
  <Collapser
    id="custom-events"
    title="Evento personalizado"
  >
    O C SDK fornece uma API de eventos personalizados que permite enviar [eventos personalizados](/docs/using-new-relic/welcome-new-relic/getting-started/glossary#custom-event) para o New Relic. Para enviar um evento, inicie uma transação e use as funções `newrelic_create_custom_event` e `newrelic_record_custom_event` . Por exemplo:

    ```
    // txn is a newrelic_txn_t*, created via newrelic_start_web_transaction
    newrelic_custom_event_t* custom_event=0;
    custom_event = <a href="https://newrelic.github.io/c-sdk/libnewrelic_8h.html#a83b5b78623bcefda6d4e1e6d207f7b7a">newrelic_create_custom_event</a>("aTypeForYourEvent");
    <a href="https://newrelic.github.io/c-sdk/libnewrelic_8h.html#a4af935da4651e398e3773c148e8db814">newrelic_record_custom_event</a>(txn, &custom_event);
    ```

    Certifique-se de revisar os [requisitos e limites de dados personalizados](/docs/insights/insights-data-sources/custom-data/insights-custom-data-requirements-limits) para obter orientação sobre quais valores são ou não permitidos em seu evento personalizado. Para mais informações, consulte [evento personalizado no APM](/docs/insights/insights-data-sources/custom-data/insert-custom-events-new-relic-apm-agents).

    <Callout variant="tip">
      Se você criou um evento personalizado, mas precisa removê-lo antes do término da transação, use `newrelic_discard_custom_event(&custom_event);`.
    </Callout>
  </Collapser>

  <Collapser
    id="custom-attributes"
    title="Evento personalizado atributo"
  >
    Você também pode adicionar um atributo `int`, `long`, `double` e `char*` (string) ao seu evento personalizado usando a família de funções `newrelic_custom_event_add_*` . Por exemplo:

    ```
    // Example custom attributes:
    <a href="https://newrelic.github.io/c-sdk/libnewrelic_8h.html#add4646ef16f4f0c9b75934cf96909655">newrelic_custom_event_t</a>* custom_event=0;
    custom_event = newrelic_create_custom_event("aTypeForYourEvent");

    <a href="https://newrelic.github.io/c-sdk/libnewrelic_8h.html#a1f0fe987526c023a2101111b7ee557b3">newrelic_custom_event_add_attribute_int</a>(custom_event, "keya", 42);
    <a href="https://newrelic.github.io/c-sdk/libnewrelic_8h.html#a2a082a144cff6c805c6373d9d4f1f551">newrelic_custom_event_add_attribute_long</a>(custom_event, "keyb", 84);
    <a href="https://newrelic.github.io/c-sdk/libnewrelic_8h.html#abfe6f64a8eec7d60d8588f8969781d34">newrelic_custom_event_add_attribute_double</a>(custom_event, "keyc", 42.42);
    <a href="https://newrelic.github.io/c-sdk/libnewrelic_8h.html#a9eac445521cecdd046520d2178f232a0">newrelic_custom_event_add_attribute_string</a>(custom_event, "keyd", "A string");

    <a href="https://newrelic.github.io/c-sdk/libnewrelic_8h.html#a4af935da4651e398e3773c148e8db814">newrelic_record_custom_event</a>(txn, &custom_event);
    ```

    Para mais informações, consulte a documentação sobre [atributo personalizado](/docs/agents/manage-apm-agents/agent-data/collect-custom-attributes).
  </Collapser>

  <Collapser
    id="custom-metrics"
    title="Métrica personalizada"
  >
    O C SDK fornece a função [`newrelic_record_custom_metric()`](https://newrelic.github.io/c-sdk/libnewrelic_8h.html#aee71182588ace508cc816044d2024ff3) . Isso permite registrar dados de desempenho baseados em tempo usando uma chamada de API, como:

    * Dados de tempo de transação

    * Dados de recursos de computador

    * Dados de assinatura ou compra

      Para criar uma métrica personalizada, forneça um nome ou outro identificador e um período de tempo em milissegundos para a função, juntamente com a transação ativa.

      <Callout variant="important">
        Sempre prefixe os nomes métricos personalizados com `Custom/`.
      </Callout>

      Por exemplo:

      ```c
      // txn is a newrelic_txn_t*, created via newrelic_start_web_transaction

      // Record a metric value of 100ms in the transaction txn
      newrelic_record_custom_metric(txn, "Custom/MyMetric/My_label", 100);
      ```

      Para mais informações consulte [Coletar métrica personalizada](/docs/agents/manage-apm-agents/agent-data/collect-custom-metrics).
  </Collapser>
</CollapserGroup>

Aqui estão algumas maneiras de usar seus dados personalizados. Para obter detalhes de código e exemplos dessas opções, consulte a [documentação global do New Relic no GitHub](https://newrelic.github.io/c-sdk/globals.html).

<table>
  <thead>
    <tr>
      <th style={{ width: "300px" }}>
        Se você quiser...
      </th>

      <th>
        Utilize este método...
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Crie um evento personalizado para preencher com timestamp e atributo.
      </td>

      <td>
        [`newrelic_create_custom_event()`](https://newrelic.github.io/c-sdk/libnewrelic_8h.html#a83b5b78623bcefda6d4e1e6d207f7b7a)
      </td>
    </tr>

    <tr>
      <td>
        Timestamp e adicione o evento personalizado à transação atual para que você possa consultá-lo ou visualizá-lo.
      </td>

      <td>
        [`newrelic_record_custom_event()`](https://newrelic.github.io/c-sdk/libnewrelic_8h.html#a4af935da4651e398e3773c148e8db814)
      </td>
    </tr>

    <tr>
      <td>
        Aprimore seu evento personalizado com metadados adicionais.
      </td>

      <td>
        Adicione evento personalizado atributo ao seu evento personalizado com base no tipo:

        * [`newrelic_custom_event_add_attribute_double()`](https://newrelic.github.io/c-sdk/libnewrelic_8h.html#af84bdcea08fbefb2023b47907a304188)
        * [`newrelic_custom_event_add_attribute_int()`](https://newrelic.github.io/c-sdk/libnewrelic_8h.html#ade406683e960b53a1b4a2d832872ab1a)
        * [`newrelic_custom_event_add_attribute_long()`](https://newrelic.github.io/c-sdk/libnewrelic_8h.html#a0ee8f438644f7699c8427fe231d7ffc1)
        * [`newrelic_custom_event_add_attribute_string()`](https://newrelic.github.io/c-sdk/libnewrelic_8h.html#aa59111072aaa6d539adf6745c5dbfaa4)
      </td>
    </tr>

    <tr>
      <td>
        Descarte um evento personalizado após ele ter sido criado, mas antes de sua transação terminar, para evitar relatá-lo à New Relic.
      </td>

      <td>
        [`newrelic_discard_custom_event`](https://newrelic.github.io/c-sdk/libnewrelic_8h.html#a15aa71f0d4fac8fec8f4105c2c1d8dde)

        Isso é necessário para liberar a memória alocada para seu evento personalizado indesejado, a fim de evitar vazamentos em seu programa.
      </td>
    </tr>

    <tr>
      <td>
        Relate uma duração de desempenho personalizada que você pode pesquisar ou traçar.
      </td>

      <td>
        [`newrelic_record_custom_metric()`](https://newrelic.github.io/c-sdk/libnewrelic_8h.html#aee71182588ace508cc816044d2024ff3)
      </td>
    </tr>
  </tbody>
</table>

## Monitor desktop browser performance [#browser]

Para monitor o desempenho do browser de desktop para seu aplicativo, instale o agente do browser usando o [método copiar/colar](/docs/browser/new-relic-browser/installation/install-new-relic-browser-agent#copy-paste-app).

## Alterar definições de configuração [#configuration]

Normalmente, as configurações padrão da configuração do seu aplicativo não precisam ser alteradas. No entanto, quando necessário, você pode ajustar algumas configurações. Para obter mais informações, consulte a [documentação de configuração do C SDK](/docs/c-agent-configuration).
