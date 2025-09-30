---
title: Solucionar problemas de coleta de dados AJAX
type: troubleshooting
tags:
  - Browser
  - Browser monitoring
  - Troubleshooting
metaDescription: Troubleshooting for not seeing AJAX data for your browser app.
freshnessValidatedDate: never
translationType: machine
---

## Problema

Você não está vendo [dados AJAX](/docs/browser/new-relic-browser/browser-pro-features/ajax-page-identifying-time-consuming-calls) do seu aplicativo de browser.

## Solução

Se seu aplicativo estiver instrumentado com [<InlinePopover type="browser" />](/docs/browser/new-relic-browser/installation-configuration/troubleshooting-browser-monitoring-installation)e estiver coletando dados corretamente para outros [recursos Pro](/docs/browser/new-relic-browser/browser-pro-features), siga estas etapas:

<Steps>
  <Step>
    ## Verifique se a página está instrumentada [#verify-page-intrum]

    Se você estiver usando XMLHttpRequest, use o console de desenvolvimento do seu browser para verificar se a página foi corretamente instrumentada. Digite `XMLHttpRequest` e/ou `fetch` no console. Se a instrumentação falhar, você verá algo como:

    ```js
    // XMLHttpRequest
    ƒ XMLHttpRequest() { [native code] }
    ```

    Se você vir algo mais, a verificação foi bem-sucedida.
  </Step>

  <Step>
    ## Verifique se a instrumentação AJAX está habilitada [#verify-instrum]

    A instrumentação AJAX não está incluída no agente lite.

    Para verificar a instrumentação AJAX:

    1. Abra a ferramenta de desenvolvimento do console do seu browser e verifique o objeto `newrelic.initializedAgents` . Este objeto contém uma entrada para cada agente em execução na página. Normalmente, há apenas um agente em uma página.

    2. Inspecione o objeto do agente inicializado para um objeto `runtime` . Este objeto contém informações sobre o agente em execução, como `loaderType`. Se `loaderType` for `lite`, a instrumentação AJAX não será incluída no agente que está sendo usado.

    3. Se `loaderType` não for `lite`, você também pode verificar o agente inicializado para objetos `config` e `features` .

       * O objeto `config` conterá a configuração de tempo de execução do agente, incluindo um objeto `ajax` com um booleano `enabled` .
       * O objeto `features` deve conter uma entrada para cada recurso inicializado pelo agente, incluindo uma entrada `ajax` .

    4. Verifique se este objeto AJAX contém um booleano `enabled` de `true` e uma entrada `featAggregate` .

    Se algum desses itens não for verdadeiro, a instrumentação AJAX pode não ter sido inicializada devido a uma alteração de configuração no New Relic na entidade do browser ou possivelmente uma alteração manual no objeto `NREUM.init` que foi copiado e colado no HTML.

    <Callout variant="important">
      `newrelic.initializedAgents` é a propriedade aceita para verificar a existência do agente em uma página, a menos que você esteja usando uma versão antiga ou sem suporte do agente.
    </Callout>
  </Step>

  <Step>
    ## Verifique a configuração da lista de negação [#verify-deny-list]

    O agente pode ser configurado para ignorar determinados domínios e caminhos ao criar [o evento AjaxRequest](/attribute-dictionary/?event=AjaxRequest).

    Use o console de desenvolvimento do seu browser para verificar as regras atuais da lista de negações AJAX executando `newrelic.init`. Procure uma propriedade `ajax` contendo uma matriz chamada `deny_list`.

    Se você vir entradas na lista de negações que não são familiares ou que fazem com que as chamadas AJAX sejam filtradas, revise a documentação [do evento Filtrar AjaxRequest](/docs/browser/new-relic-browser/configuration/filter-ajax-request-events/) para obter mais orientações.
  </Step>

  <Step>
    ## Verificar acesso à rede [#verify-network-access]

    Se o objeto estiver corretamente instrumentado, tente disparar uma chamada AJAX no seu aplicativo enquanto monitora o tráfego de rede nas ferramentas de desenvolvimento do browser. Aguarde até um minuto e procure uma chamada para `bam.nr-data.net/jserrors` com um parâmetro `xhr` . Se a chamada falhar, verifique se há problemas de rede. Como alternativa, procure uma solicitação para `bam.nr-data.net/events` com uma carga útil que comece com `bel.7;2`.

    Se você não vir esta chamada, se ela falhar com um erro não relacionado ao acesso à rede, ou se for bem-sucedida, mas você ainda não estiver vendo os dados, continue na documentação de resolução de problemas.
  </Step>

  <Step>
    ## Revise como JSONP afeta solicitações [#jsonp]

    Se suas solicitações usarem [JSONP](https://en.wikipedia.org/wiki/JSONP), elas não aparecerão na [página da interface do usuário do AJAX](/docs/browser/new-relic-browser/browser-pro-features/ajax-page-identifying-time-consuming-calls).

    No entanto, você pode visualizá-los como ativos dentro [do trace da sessão](/docs/browser/new-relic-browser/browser-pro-features/session-traces-exploring-webpages-life-cycle).

    Se estiver usando o monitoramento SPA, você poderá visualizá-los na guia <DNT>**AJAX**</DNT> da página <DNT>**Page views**</DNT> .

    Requisitos para JSONP ser reconhecido:

    * Cada solicitação JSONP deve usar uma função de retorno de chamada exclusiva. A biblioteca mais popular (como jQuery) gera uma função de retorno de chamada exclusiva dinamicamente para cada solicitação.
    * A string de consulta que contém o nome da função de retorno de chamada deve ser nomeada `"callback"` ou `"cb"` para ser reconhecida pelo New Relic. Este é o comportamento padrão na biblioteca mais popular.
  </Step>
</Steps>

<Callout variant="tip">
  Se alguma dessas etapas de resolução de problemas falhar ou você ainda estiver tendo problemas com dados AJAX ausentes, obtenha suporte em [support.newrelic.com](https://support.newrelic.com).
</Callout>