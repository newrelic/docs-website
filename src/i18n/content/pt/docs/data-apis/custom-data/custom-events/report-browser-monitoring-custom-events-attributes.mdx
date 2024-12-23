---
title: Report monitoramento de evento do Browser personalizado e atributo
tags:
  - Insights
  - Event data sources
  - Custom events
metaDescription: How to report custom events and attributes with browser monitoring in New Relic.
freshnessValidatedDate: never
translationType: machine
---

Você pode usar o monitoramento do Browser no New Relic para adicionar [evento personalizado e atributo](/docs/insights/insights-data-sources/custom-data/report-custom-event-data).

## Atributo personalizado [#attributes]

Adicione atributo personalizado a todos os eventos do browser para que você possa consultar ou filtrar seus dados e responder a mais perguntas sobre seu aplicativo.

## Evento personalizado [#events]

Use o método [`recordCustomEvent`](/docs/browser/new-relic-browser/browser-agent-spa-api/record-custom-event) da API do browser para capturar qualquer evento com atribuição personalizada.

## Ações de página [#overview]

Utilize a API [`addPageAction`](/docs/browser/new-relic-browser/browser-agent-spa-api/add-page-action) chamada da do browser para capturar eventos, ações, alterações de rota ou qualquer interação final do usuário com seu aplicativo. A chamada `addPageAction` adiciona um evento chamado `PageAction` que contém o nome da ação, os metadados relacionados à sua página e quaisquer nomes e valores de atributos personalizados que você capturar junto com ela.

## Pré-requisitos [#requirements]

Para relatar o evento `Custom` , verifique estes pré-requisitos:

<table>
  <thead>
    <tr>
      <th width={200}>
        <DNT>
          **Requirement**
        </DNT>
      </th>

      <th>
        <DNT>
          **Comments**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Versão do agente
      </td>

      <td>
        A versão do seu agente de monitoramento de browser deve ser [1.277.0 ou superior](/docs/browser/new-relic-browser/installation-configuration/upgrading-browser-agent#checking).
      </td>
    </tr>

    <tr>
      <td>
        Versão do browser do cliente
      </td>

      <td>
        Para gravar o evento `Custom` , o browser deve [suportar XHRs entre domínios](/docs/browser/new-relic-browser/getting-started/compatibility-requirements#browser-types).
      </td>
    </tr>

    <tr>
      <td>
        Eventos por ciclo
      </td>

      <td>
        `Custom` eventos são armazenados em buffer com outros eventos do browser e são enviados a cada 30 segundos. Se forem observados 1.000 eventos no total, o agente coletará o evento armazenado em buffer imediatamente, ignorando o intervalo do ciclo de coleta.
      </td>
    </tr>

    <tr>
      <td>
        Nomenclatura de evento/atributo, tipo de dados, tamanho
      </td>

      <td>
        Certifique-se de seguir [os requisitos gerais](/docs/insights/insights-data-sources/custom-data/data-requirements#general) sobre sintaxe de nomenclatura de evento/atributo, tipos de dados e tamanho.
      </td>
    </tr>
  </tbody>
</table>

Para relatar o evento `PageAction` , verifique estes pré-requisitos:

<table>
  <thead>
    <tr>
      <th width={200}>
        <DNT>
          **Requirement**
        </DNT>
      </th>

      <th>
        <DNT>
          **Comments**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Versão do agente
      </td>

      <td>
        A versão do seu agente de monitoramento do Browser deve ser [593 ou superior](/docs/browser/new-relic-browser/installation-configuration/upgrading-browser-agent#checking).
      </td>
    </tr>

    <tr>
      <td>
        Versão do browser do cliente
      </td>

      <td>
        Para gravar o evento `PageAction` , o browser deve [suportar XHRs entre domínios](/docs/browser/new-relic-browser/getting-started/compatibility-requirements#browser-types).
      </td>
    </tr>

    <tr>
      <td>
        Eventos por ciclo
      </td>

      <td>
        `PageAction` eventos são armazenados em buffer com outros eventos do browser e são enviados a cada 30 segundos. Se 1.000 eventos forem observados, o agente coletará o evento armazenado em buffer imediatamente, ignorando o intervalo do ciclo de coleta.
      </td>
    </tr>

    <tr>
      <td>
        Nomenclatura de evento/atributo, tipo de dados, tamanho
      </td>

      <td>
        Certifique-se de seguir [os requisitos gerais](/docs/insights/insights-data-sources/custom-data/data-requirements#general) sobre sintaxe de nomenclatura de evento/atributo, tipos de dados e tamanho.
      </td>
    </tr>
  </tbody>
</table>

## Criar evento personalizado [#creating-custom-events]

Para criar um evento `custom` :

1. Certifique-se de que o [agente browser esteja instalado](/docs/browser/new-relic-browser/installation/install-new-relic-browser-agent) para seu aplicativo.
2. Chame a função [`newrelic.recordCustomEvent`](/docs/browser/new-relic-browser/browser-apis/record-custom-event) na parte relevante do JavaScript do seu aplicativo.
3. Aguarde alguns minutos para que o aplicativo seja executado e relate o evento `custom` relevante no eventType especificado.
4. Execute uma consulta NRQL do evento que inclua o atributo `eventType` que você usou para capturar o evento (e qualquer atributo associado que você enviou junto com o evento).

* Por exemplo, se você enviou um evento `custom` com um `eventType` de `Foo` e um atributo de `bar: 123`, você poderia executar uma consulta como esta:
  ```sql
  SELECT * FROM Foo WHERE bar = 123
  ```

## Criar evento PageAction [#creating-pageactions]

Para criar um evento `PageAction` :

1. Certifique-se de que o [agente browser esteja instalado](/docs/browser/new-relic-browser/installation/install-new-relic-browser-agent) para seu aplicativo.
2. Chame a função [`newrelic.addPageAction`](/docs/browser/new-relic-browser/browser-agent-spa-api/newrelicaddpageaction-browser-agent-api) na parte relevante do JavaScript do seu aplicativo.
3. Aguarde alguns minutos para que o aplicativo seja executado e relate o evento `PageAction` relevante.
4. Execute uma [consulta NRQL](/docs/query-data/nrql-new-relic-query-language/nrql-query-examples/insights-query-examples-new-relic-browser-spa) do evento `PageAction` que inclui o atributo `actionName` usado para capturar o evento (e quaisquer atributos associados enviados junto com a ação).

* Por exemplo, se você enviou um evento `PageAction` com um `actionName` de `Foo` e um atributo de `bar: 123`, você poderia executar uma consulta como esta:
  ```sql
  SELECT * FROM PageAction WHERE actionName = 'Foo' AND bar = 123
  ```

## Adicionar atributo personalizado ao evento do browser [#custom-attributes]

Você pode adicionar um atributo personalizado a todos os eventos do browser. Qualquer atributo personalizado que você adicionar usando a API `setCustomAttribute` será adicionado a todos os eventos capturados.

Existem duas maneiras de adicionar atributo personalizado:

<CollapserGroup>
  <Collapser
    id="custom-attribute-via-browser-api"
    title={<>Use <Link to="/docs/browser/new-relic-browser/browser-agent-spa-api/newrelicsetcustomattribute-browser-agent-api"><InlineCode>
      setCustomAttribute
    </InlineCode></Link> chamada de API do browser</>
    }
  >
    Para adicionar um atributo personalizado ao evento do browser por meio do agente do browser, use a [`setCustomAttribute`](/docs/browser/new-relic-browser/browser-agent-spa-api/newrelicsetcustomattribute-browser-agent-api) chamada de API do browser .
  </Collapser>

  <Collapser id="custom-attribute-forward-apm" title="Encaminhar atributo personalizado a partir de dados APM">
    Se você adicionou um atributo personalizado ao evento <InlinePopover type="apm" />`Transaction` por meio de um agente APM, poderá encaminhá-lo automaticamente para o evento `PageView` :

    1. Insira o atributo personalizado seguindo as [instruções específicas do agente](/docs/insights/insights-data-sources/custom-data/add-custom-attributes-apm-data).

    2. Habilite o encaminhamento de atributo no arquivo de configuração do seu agente:

       <table>
         <thead>
           <tr>
             <th style={{ width: "100px" }}>
               Agente
             </th>

             <th>
               Habilitar encaminhamento de atributo
             </th>
           </tr>
         </thead>

         <tbody>
           <tr>
             <td>
               Go
             </td>

             <td>
               Para habilitar o atributo, adicione isto à sua configuração (desabilitado por padrão):

               ```go
               cfg.BrowserMonitoring.Attributes.Enabled = true
               ```

               Em seguida, adicione o atributo que deseja incluir:

               ```go
               cfg.BrowserMonitoring.Attributes.Include = []string{"request.*"}
               ```
             </td>
           </tr>

           <tr>
             <td>
               Java
             </td>

             <td>
               Adicione a opção [`attributes.enabled`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#cfg-browser-attributes-enabled) na seção `browser_monitoring` e defina-a como `true`.
             </td>
           </tr>

           <tr>
             <td>
               .NET
             </td>

             <td>
               Adicione o elemento [`<attributes enabled="true">`](/docs/agents/net-agent/installation-configuration/net-agent-configuration#browser-attributes) como filho do elemento `browserMonitoring` :

               ```xml
               <configuration xmlns="urn:newrelic-config">
                 ...
                 <browserMonitoring autoInstrument="true">
                   ...
                   <attributes enabled="true">
                     ...
                   </attributes>
                 </browserMonitoring>
                 ...
               </configuration>
               ```

               Se você estiver usando [instrumentação manual do browser,](/docs/agents/net-agent/features/page-load-timing-net#manual_instrumentation) o atributo precisará ser criado antes da chamada `GetBrowserTimingHeader()` .
             </td>
           </tr>

           <tr>
             <td>
               Node.js
             </td>

             <td>
               Adicione [`attributes: {enabled: true}`](/docs/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration#browser-debug-enabled) à seção `browser_monitoring` do arquivo de configuração `newrelic.js` do seu aplicativo.
             </td>
           </tr>

           <tr>
             <td>
               PHP
             </td>

             <td>
               Adicione a opção [`newrelic.browser_monitoring.attributes.enabled`](/docs/agents/php-agent/attributes/enabling-disabling-attributes#cfg-browser-attributes-enabled) e defina-a como `true`.
             </td>
           </tr>

           <tr>
             <td>
               Python
             </td>

             <td>
               Adicione a opção [`browser_monitoring.attributes.enabled`](/docs/agents/python-agent/installation-configuration/python-agent-configuration#cfg-browser-attributes-enabled) e defina-a como `true`.
             </td>
           </tr>

           <tr>
             <td>
               Ruby
             </td>

             <td>
               Adicione a opção [`browser_monitoring.attributes.enabled`](/docs/agents/ruby-agent/installation-configuration/ruby-agent-configuration#browser_monitoring-attributes-enabled) e defina-a como `true`.
             </td>
           </tr>
         </tbody>
       </table>
  </Collapser>
</CollapserGroup>

## Considerações importantes e práticas recomendadas incluem:

Você deve monitorar a IA para limitar o número total de tipos de eventos personalizados para aproximadamente cinco. Os tipos de eventos personalizados devem ser usados para encapsular categorias de alto nível. Por exemplo, você pode criar um tipo de evento chamado Gestos que contém muitos eventos com vários propósitos.

Evite usar tipo de evento para nomear eventos personalizados. Crie tipos de eventos para abrigar uma categoria de dados e use atributos dentro dessa categoria para diferenciar eventos. Embora você possa criar vários eventos personalizados, é importante manter seus dados gerenciáveis, limitando o número de tipos de eventos relatados.

## Atribuição incluída

Eventos de browser personalizados são decorados com os seguintes atributos, com o objetivo de ajudar você a entender o contexto do ambiente do browser quando o evento ocorreu:

<CollapserGroup>
  <Collapser id="custom-event-attributes" title="Evento personalizado atributo">
    <table>
      <thead>
        <tr>
          <th style={{ width: "100px" }}>
            Atributo
          </th>

          <th>
            Descrição
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            ID do aplicativo
          </td>

          <td>
            ID do aplicativo da entidade New Relic.
          </td>
        </tr>

        <tr>
          <td>
            Nome do aplicativo
          </td>

          <td>
            Nome do aplicativo da entidade New Relic.
          </td>
        </tr>

        <tr>
          <td>
            asn
          </td>

          <td>
            Número do Sistema Autônomo.
          </td>
        </tr>

        <tr>
          <td>
            asnLatitude
          </td>

          <td>
            A latitude associada ao ASN
          </td>
        </tr>

        <tr>
          <td>
            asnLongitude
          </td>

          <td>
            A longitude associada ao ASN
          </td>
        </tr>

        <tr>
          <td>
            asnOrganização
          </td>

          <td>
            A organização associada à ASN
          </td>
        </tr>

        <tr>
          <td>
            cidade
          </td>

          <td>
            A cidade onde o evento ocorreu.
          </td>
        </tr>

        <tr>
          <td>
            Código do país
          </td>

          <td>
            O código do país onde o evento ocorreu.
          </td>
        </tr>

        <tr>
          <td>
            URL atual
          </td>

          <td>
            A URL onde o evento ocorreu, que inclui navegações suaves
          </td>
        </tr>

        <tr>
          <td>
            Tipo de dispositivo
          </td>

          <td>
            O tipo de dispositivo no qual o evento ocorreu.
          </td>
        </tr>

        <tr>
          <td>
            EntidadeGuia
          </td>

          <td>
            O GUID da entidade New Relic.
          </td>
        </tr>

        <tr>
          <td>
            nome
          </td>

          <td>
            O nome da transação se fornecido pelo APM
          </td>
        </tr>

        <tr>
          <td>
            URL da página
          </td>

          <td>
            A URL onde o evento ocorreu.
          </td>
        </tr>

        <tr>
          <td>
            regiãoCódigo
          </td>

          <td>
            O código da região onde o evento ocorreu.
          </td>
        </tr>

        <tr>
          <td>
            sessão
          </td>

          <td>
            O identificador de sessão vinculado à sessão do usuário onde o evento ocorreu.
          </td>
        </tr>

        <tr>
          <td>
            sessãoTraceId
          </td>

          <td>
            O ID do trace da sessão está vinculado ao carregamento da página onde o evento ocorreu.
          </td>
        </tr>

        <tr>
          <td>
            Timestamp
          </td>

          <td>
            O timestamp unix do evento.
          </td>
        </tr>

        <tr>
          <td>
            Nome do Agente do Usuário
          </td>

          <td>
            O nome do agente do usuário onde o evento ocorreu.
          </td>
        </tr>

        <tr>
          <td>
            usuárioAgentOS
          </td>

          <td>
            O sistema operacional do agente do usuário onde o evento ocorreu.
          </td>
        </tr>

        <tr>
          <td>
            Versão do agente do usuário
          </td>

          <td>
            A versão do agente do usuário onde o evento ocorreu.
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>
</CollapserGroup>

## Resolução de problemas

Aqui estão algumas dicas de resolução de problemas:

<table>
  <thead>
    <tr>
      <th width={200}>
        <DNT>
          **Problem**
        </DNT>
      </th>

      <th>
        <DNT>
          **Comments**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Atributo personalizado faltando
      </td>

      <td>
        Se seu atributo personalizado não aparecer em eventos `PageView` , verifique se você está ligando para `setCustomAttribute` antes do evento Load em sua página. Se o atributo personalizado for chamado após o carregamento da página, ele não ficará visível em `PageView`.
      </td>
    </tr>

    <tr>
      <td>
        `PageAction` eventos
      </td>

      <td>
        Se o seu evento `PageAction` não aparecer quando você fizer a consulta, revise os [requisitos](#requirements).

        Se os requisitos forem atendidos, verifique se você não está usando [nomes de atributos reservados ou valores inválidos](/docs/insights/new-relic-insights/adding-querying-data/inserting-custom-events-insights-api#limits).
      </td>
    </tr>

    <tr>
      <td>
        `Custom` eventos
      </td>

      <td>
        Se o seu evento `custom` não aparecer quando você fizer a consulta, revise os [requisitos](#requirements).

        Se os requisitos forem atendidos, verifique se você não está usando [nomes de atributos reservados ou valores inválidos](/docs/insights/new-relic-insights/adding-querying-data/inserting-custom-events-insights-api#limits).
      </td>
    </tr>
  </tbody>
</table>