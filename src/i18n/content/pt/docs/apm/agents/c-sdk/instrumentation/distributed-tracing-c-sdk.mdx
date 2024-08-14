---
title: Distributed tracing para seus serviços C
tags:
  - Agents
  - C SDK
  - Instrumentation
metaDescription: 'For the New Relic C SDK: how to implement distributed tracing across your C language applications and services.'
freshnessValidatedDate: never
translationType: machine
---

<Callout
  variant="important"
  title="AVISO DE EOL"
>
  A partir de abril de 2022, não ofereceremos suporte ao recurso C SDK. Para obter mais detalhes, consulte nossa [postagem no Fórum de suporte](https://discuss.newrelic.com/t/q1-bulk-eol-announcement-fy23/181744).
</Callout>

Distributed tracing permite que você veja toda a jornada de suas solicitações em [sistemas distribuídos](/docs/distributed-tracing/concepts/introduction-distributed-tracing). O [C SDK](https://github.com/newrelic/c-sdk) suporta [distributed tracingpadrão](/docs/distributed-tracing/concepts/how-new-relic-distributed-tracing-works/#head-based) com Amostragem baseado em head. Ele não oferece suporte ao recurso chamado Infinite Tracing ou W3C Trace Context.

O C SDK exige que você instrumente manualmente seus serviços C, ao contrário da instrumentação automática de outro agente New Relic. Isso significa que você precisa adicionar algumas linhas ao seu código para usar o C SDK e, em seguida, adicionar uma configuração adicional para ativar distributed tracing.

Veja como começar:

* [Instrumentar um programa de amostra (recomendado):](#quick-start-apm) uma maneira rápida de começar
* [Instrumentar de transação e solicitações HTTP](#guidelines)

<Callout variant="tip">
  Se você quiser obter mais informações antes de começar, confira estes tópicos:

  * [Como funciona a amostragem de extensão](/docs/understand-dependencies/distributed-tracing/get-started/how-new-relic-distributed-tracing-works#sampling) explica as opções distributed tracing .

  * [Os impactos no APM](/docs/apm/distributed-tracing/getting-started/transition-guide-distributed-tracing) informam o que esperar caso você seja um usuário

    <InlinePopover type="apm"/>

    atual, mas não tenha configurado distributed tracing.
</Callout>

## Instrumentar um programa de exemplo (recomendado): [#quick-start-apm]

Esta é uma maneira rápida de ver como instalar o C SDK e utilizar um serviço com [distributed tracingpadrão](/docs/distributed-tracing/concepts/how-new-relic-distributed-tracing-works/#head-based).

Antes de começar com as etapas principais:

* Você precisará de uma conta New Relic para configurar distributed tracing. Se ainda não tiver uma, você pode [criar rapidamente uma conta gratuita](https://newrelic.com/signup). Observe que este link o levará a outro site para concluir a inscrição, mas você pode retornar aqui e seguir as etapas de configuração abaixo.
* Certifique-se de atender aos [requisitos](/docs/apm/agents/c-sdk/get-started/c-sdk-compatibility-requirements).

### Passo 1. Identificar serviços

Descubra quais serviços atendem à sua solicitação para que você possa instrumentar cada um deles para enviar dados trace para o New Relic.

### Passo 2. Instrumentar cada serviço com um agente APM [#update-agents]

Temos um exemplo de como instalar o C SDK e utilizar um aplicativo de exemplo para que ele comece a reportar telemetria para o New Relic. Depois de entender como funciona, você poderá aplicar os princípios a cada um dos serviços C envolvidos em suas solicitações. Se alguns dos seus serviços utilizam outros idiomas, basta seguir as [etapas de instalação](/docs/distributed-tracing/enable-configure/quick-start) para esses idiomas.

Antes de ir para o serviço de amostra abaixo, observe que será necessário criar um [`newrelic_app_config_t`](https://newrelic.github.io/c-sdk/structnewrelic__app__config__t.html) padrão, mas você também precisará adicionar `distributed_tracing.enabled` e defini-lo como `true`:

```c
#include <stdlib.h>
#include <stdio.h>
#include <unistd.h>

/*
* A standalone example that demonstrates to users how to
* configure logging, configure an app, connect an app,
* start a transaction and a segment, and cleanly destroy
* everything.
*/
#include "libnewrelic.h"

int main(void) {
  newrelic_app_t* app;
  newrelic_txn_t* txn;
  newrelic_app_config_t* config;
  newrelic_segment_t* seg;

  config = newrelic_create_app_config("<YOUR_APP_NAME>", "9931ae06b54780ab846c16fc602b5778ead3907f");
  config->distributed_tracing.enabled = true;
  ...

```

Para experimentar o programa de exemplo, [clique aqui](https://one.newrelic.com/launcher/nr1-core.settings?pane=eyJuZXJkbGV0SWQiOiJ0dWNzb24ucGxnLWluc3RydW1lbnQtZXZlcnl0aGluZyJ9&cards%5B0%5D=eyJuZXJkbGV0SWQiOiJzZXR1cC1uZXJkbGV0cy5zZXR1cC1jLWludGVncmF0aW9uIiwiYWNjb3VudElkIjoyNjQwNDA5fQ==&platform%5BaccountId%5D=2498654&platform%5BtimeRange%5D%5Bduration%5D=1800000&platform%5B$isFallbackTimeRange%5D=true).

### Etapa 3. Ver rastreamento [#view-traces]

Depois de instrumentar cada um de seus serviços com o agente APM, gere algum tráfego em sua aplicação para que possamos capturar algum rastro. Aqui estão algumas maneiras de visualizar seu rastreamento na interface:

<CollapserGroup>
  <Collapser
    id="entity-explorer"
    title="Ver rastreamento que inclui um serviço específico"
  >
    Esta é uma maneira de ver o rastreamento de um serviço específico:

    1. Vá para

       <DNT>
         **[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & services**
       </DNT>

       .

    2. Clique na sua entidade (serviço).

    3. Na seção

       <DNT>
         **Monitor**
       </DNT>

       do painel esquerdo, clique em

       <DNT>
         **Distributed tracing**
       </DNT>

       .

    4. Para obter detalhes, clique em um trace individual. Se

       <DNT>
         **Group similar traces**
       </DNT>

       estiver ativado no menu superior, clique em um grupo trace e, em seguida, clique em um trace individual.

    5. Se você não encontrar o rastreamento desejado, poderá filtrar por `trace.id`.
  </Collapser>

  <Collapser
    id="cross-acct-traces"
    title="Ver rastreamento entre contas"
  >
    Para ver o rastreamento que cruza contas:

    1. Vá para

       <DNT>
         **[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Traces**
       </DNT>

       .

    2. Selecione sua entidade (serviço) no painel esquerdo.

    3. Para obter detalhes, clique em um trace individual. Se

       <DNT>
         **Group similar traces**
       </DNT>

       estiver ativado no menu superior, clique em um grupo trace e, em seguida, clique em um trace individual.

    4. Se você não encontrar o rastreamento desejado, poderá filtrar por `trace.id`.
  </Collapser>

  <Collapser
    id="logs-context"
    title="Examinar o log relacionado ao rastreamento"
  >
    Você pode reunir seus detalhes de registro e rastreamento para tornar a resolução de problemas mais fácil e rápida. Com [logs contextualizados](/docs/logs/logs-context/configure-logs-context-apm-agents/), você pode ver a mensagem do log junto com o trace na interface do New Relic.

    Depois de localizar um trace interessante usando as etapas em [Exibir rastreamento que inclui um serviço específico](#entity-explorer) ou [Exibir rastreamento entre contas](#cross-acct-traces), faça o seguinte:

    1. Se você ativou o logs contextualizados, clique na guia

       <DNT>
         **Logs**
       </DNT>

       (ao lado de

       <DNT>
         **Trace details**
       </DNT>

       ).

    2. Para visualizar detalhes relacionados a um log individual, clique diretamente na mensagem.
  </Collapser>
</CollapserGroup>

Para obter mais ajuda para encontrar seu rastreamento na interface:

* [Compreender e usar a interface distributed tracing](/docs/distributed-tracing/ui-data/understand-use-distributed-tracing-ui)
* [Consultar dados distributed trace](/docs/understand-dependencies/distributed-tracing/ui-data/query-distributed-trace-data)

## Instrumentar de transação e solicitações HTTP [#guidelines]

Para transações que ocorrem em vários serviços, a carga útil distributed trace contém informações que permitem à New Relic juntá-las em um rastreamento de transação completo. No entanto, se os serviços do monitor New Relic não estiverem enviando contexto do trace entre si, isso resultará em detalhes trace incompletos. Para obter mais informações, consulte a documentação sobre [como passar o cabeçalho da API distributed tracing ](/docs/understand-dependencies/distributed-tracing/enable-configure/enable-distributed-tracing#agent-apis)e a [documentação distributed tracing do C SDK no GitHub](https://github.com/newrelic/c-sdk/blob/master/GUIDE.md#distributed-tracing).

<table>
  <thead>
    <tr>
      <th style={{ width: "300px" }}>
        Se você quiser...
      </th>

      <th>
        Usa isto
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Criar e retornar uma carga para ser enviada ao serviço chamado
      </td>

      <td>
        ```
        <a href="https://newrelic.github.io/c-sdk/libnewrelic_8h.html#ae4a3e1c28f84df02755f04f657ac76b4">newrelic_create_distributed_trace_payload()</a>
        ```
      </td>
    </tr>

    <tr>
      <td>
        Aceitar uma carga enviada do primeiro serviço
      </td>

      <td>
        ```
        <a href="https://newrelic.github.io/c-sdk/libnewrelic_8h.html#a83c315034829548ed1e4729a14c6b47a">newrelic_accept_distributed_trace_payload()</a>
        ```

        Isso vinculará esses serviços em um trace.
      </td>
    </tr>

    <tr>
      <td>
        Retornar uma representação de string JSON codificada em base64 da carga útil
      </td>

      <td>
        ```
        <a href="https://newrelic.github.io/c-sdk/libnewrelic_8h.html#a2e8a3c3e402a10bd8ffdd48f9c0cea8e">newrelic_create_distributed_trace_payload_httpsafe()</a>
        ```

        Isso oferece o mesmo comportamento que `newrelic_create_distributed_trace_payload()`.
      </td>
    </tr>

    <tr>
      <td>
        Aceite uma string codificada em base64 para a carga útil
      </td>

      <td>
        ```
        <a href="https://newrelic.github.io/c-sdk/libnewrelic_8h.html#a2e8a3c3e402a10bd8ffdd48f9c0cea8e">newrelic_accept_distributed_trace_payload_httpsafe()</a>
        ```

        Isso oferece o mesmo comportamento que `newrelic_accept_distributed_trace_payload()`.
      </td>
    </tr>
  </tbody>
</table>
