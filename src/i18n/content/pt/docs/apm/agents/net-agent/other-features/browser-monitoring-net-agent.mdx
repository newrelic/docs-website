---
title: Monitoramento de Browser e do agente .NET
tags:
  - Agents
  - NET agent
  - Other features
metaDescription: How to install browser monitoring automatically through the .NET APM agent.
freshnessValidatedDate: never
translationType: machine
---

Com o agente .NET, você pode adicionar [<InlinePopover type="browser"/>](/docs/browser/new-relic-browser/getting-started/introduction-new-relic-browser)instrumentação às suas páginas da web. Antes de usar o browser com seu agente .NET, consulte as [notas de versão do agente .NET](/docs/release-notes/agent-release-notes/net-release-notes) e certifique-se de ter [instalado a versão mais recente do agente .NET](/docs/agents/net-agent/installation/install-net-agent-windows).

Siga os [requisitos do agente .NET](/docs/agents/net-agent/getting-started/introduction-new-relic-net#extend) para [instalar o monitoramento do Browser](/docs/browser/new-relic-browser/installation/install-new-relic-browser-agent). Em seguida, siga os procedimentos deste documento para instrumentar manualmente o agente .NET.

## Instrumentação automática [#auto_instrumentation]

<Callout variant="important">
  A instrumentação automática está disponível apenas para aplicativos Web do .NET framework e aplicativos Web .NET Core v6.0 e posteriores. A instrumentação automática não está disponível para aplicativos ASP..NET Core v5.0 e anteriores, mesmo que sejam monitorados pelo agente .NET.
</Callout>

Com a instrumentação automática do browser, o agente .NET injeta automaticamente o cabeçalho JavaScript do browser em qualquer página que tenha um `content-type` de `text/html` e também tenha uma tag `<head>` na página. [A instrumentação automática do browser](/docs/agents/net-agent/configuration/net-agent-configuration#browsermon-autoInstrument) é habilitada por padrão para aplicativos Web do .NET framework , mas é desabilitada por padrão para aplicativos Web .NET Core v6 e posteriores. Consulte [Habilitando a instrumentação automática do browser para .NET Core v6+](#enable_netcore6plus) para obter mais informações.

A pesquisa da tag `<head>` começa no início do DOM. O agente .NET injeta o cabeçalho JavaScript por meio da adição de um `HttpModule` que modifica a página usando filtros de resposta HTTP antes de transmitir o conteúdo para o usuário.

Na primeira vez que você ativar a instrumentação automática, talvez seja necessário limpar o diretório de cache `asp.net` para que as páginas aspx sejam recompiladas. Use o seguinte comando:

```bash
flush_dotnet_temp.cmd
```

Com esta injeção, as páginas que funcionavam anteriormente poderão parar de funcionar se um `content-type` não estiver definido corretamente. Para corrigir, revise e atualize o `content-types` no seu aplicativo ou [desative a instrumentação automática](/docs/agents/net-agent/features/page-load-timing-net#disable-instrumentation).

## Instrumentação manual via API do agente [#manual_instrumentation]

Se não for possível ativar a instrumentação automática, você ainda poderá incluir o agente browser manualmente usando a API do agente .NET da New Relic e incluindo o código apropriado em suas páginas.

1. Para fazer download do `NewRelic.Api.Agent.dll`, execute novamente a instalação e faça referência ao `.dll`:

   * No diretório do agente .NET do New Relic, selecione a seção do agente

     <DNT>
       **New Relic.Net**
     </DNT>

     e selecione

     <DNT>
       **API Assembly**
     </DNT>

     .

   * NuGet: instale e faça referência ao

     <DNT>
       **.dll**
     </DNT>

     executando `Install-package NewRelic.Agent.Api`.

2. Para configurar seu aplicativo da web para chamar a API do agente .NET da New Relic, adicione uma referência a <DNT>**`NewRelic.Api.Agent.dll`**</DNT> ao seu projeto.

3. Opcional: Se você estiver modificando o diretório do aplicativo implantado no servidor da web, copie <DNT>**`NewRelic.Api.Agent.dll`**</DNT> no diretório <DNT>**`bin`**</DNT> do aplicativo.

4. Chame a API na sua tag `<head>` . Se existir umatag com o atributo `X-UA-COMPATIBLE http-equiv`, defina-a depois dessa tag.

<CollapserGroup>
  <Collapser
    id="net-web-forms"
    title="Mecanismo de visualização de formulários da Web .NET"
  >
    Ao usar o mecanismo de visualização do .NET Web Forms, certifique-se de usar `=` e não `:`. Dessa forma, o mecanismo de visualização reconhecerá a sequência de HTML retornada da API como HTML/JavaScript e a renderizará adequadamente.

    Se você estiver usando Web Forms .NET ASP com páginas mestras, adicione o cabeçalho manualmente chamando [`GetBrowserTimingHeader()`](/docs/agents/net-agent/net-agent-api/getbrowsertimingheader-net-agent) em sua página mestra sob a tag `<head>` :

    ```aspnet
    <%= NewRelic.Api.Agent.NewRelic.GetBrowserTimingHeader() %>
    ```

    Importe o namespace com:

    ```aspnet
    <%@ Import Namespace="NewRelic.Api.Agent" %>
    ```
  </Collapser>

  <Collapser
    id="razor"
    title="Outros mecanismos de visualização, como Razor"
  >
    Para outros mecanismos de visualização, como [Razor](https://en.wikipedia.org/wiki/ASP.NET_Razor), você pode usar o método [`GetBrowserTimingHeader()`](/docs/agents/net-agent/net-agent-api/getbrowsertimingheader-net-agent) para gerar a string de cabeçalho. Aqui está um exemplo de visualização baseada no Razor:

    ```razor
    <!DOCTYPE html>
    <html lang="en">
      <head>
        @Html.Raw(NewRelic.Api.Agent.NewRelic.GetBrowserTimingHeader())
        ...
      </head>
    </html>
    ```
  </Collapser>

  <Collapser
    id=".net-mvc"
    title=".NET MVC"
  >
    Ao usar o .NET MVC, chame o auxiliar `Html.Raw` . Dessa forma, o .NET MVC reconhecerá a string de HTML retornada da API como HTML/JavaScript e a renderizará adequadamente.
  </Collapser>
</CollapserGroup>

## Instrumentação manual com copiar/colar [#copy-paste]

Ao habilitar o monitoramento do Browser, você pode inserir manualmente o trecho JavaScript nas páginas do seu aplicativo. A opção copiar/colar dá a você controle sobre o posicionamento exato do nosso trecho JavaScript, que é necessário para monitor o desempenho da página da web. Para instruções sobre como habilitar o monitoramento do Browser com copiar/colar, consulte nossa [documentação do Browser](/docs/browser/browser-monitoring/installation/install-browser-monitoring-agent/#copy-paste).

## Desabilitar instrumentação [#disable_instrumentation]

Para desativar a instrumentação:

<CollapserGroup>
  <Collapser
    id="disable_auto-instrumentation"
    title="Desativar instrumentação automática"
  >
    Para desativar totalmente a instrumentação automática, edite <DNT>**`newrelic.config`**</DNT> e defina o [sinalizador`browserMonitoring` `autoInstrument` ](/docs/agents/net-agent/installation-configuration/net-agent-configuration#browsermon-autoInstrument)como `false`:

    ```xml
    <!-- disable auto instrumentation -->
    <browserMonitoring autoInstrument="false"/>
    ```

    <Callout variant="important">
      Se você alterar o sinalizador ou desinstalar o agente .NET, certifique-se de liberar o cache novamente para que as referências ao agente sejam removidas dos arquivos compilados.
    </Callout>
  </Collapser>

  <Collapser
    id="disable_instrumentation_pageview"
    title="Desative a instrumentação automática em uma visualização específica"
  >
    Para desativar apenas a instrumentação automática em uma visualização específica, use a chamada de API do agente `DisableBrowserMonitoring()`. Adicione esta chamada em qualquer visualização onde os scripts do browser não sejam necessários ou desejados. Coloque esta chamada de API o mais próximo possível do topo da visualização onde você deseja desativá-la.
  </Collapser>

  <Collapser
    id="disable_instrumentation_manually"
    title="Desative a instrumentação automática e manual em uma visualização específica"
  >
    Para desativar a instrumentação automática e a instrumentação manual para páginas da web individuais, use a chamada de API do agente [`DisableBrowserMonitoring(true)`](/docs/agents/net-agent/net-agent-api/disablebrowsermonitoring-net-agent).
  </Collapser>
</CollapserGroup>

## Resolução de problemas

Siga os procedimentos de resolução de problemas se você [não conseguir visualizar nenhum dado de tempo do browser](/docs/agents/net-agent/troubleshooting/no-page-load-timing-data-appears-net).

## Habilitar a instrumentação automática do browser para o aplicativo web .NET Core v6+ [#enable_netcore6plus]

Para habilitar a instrumentação automática do browser em aplicativos Web .NET Core v6+ (requer agente .NET v10.19.2 ou posterior):

1. Certifique-se de ter ativado a instrumentação automática globalmente editando <DNT>**`newrelic.config`**</DNT> e definindo o [sinalizador`browserMonitoring` `autoInstrument` ](/docs/agents/net-agent/installation-configuration/net-agent-configuration#browsermon-autoInstrument)como `true`:

   ```xml
   <!-- enable auto instrumentation globally -->
   <browserMonitoring autoInstrument="true"/>
   ```

2. Habilite a instrumentação automática para aplicativos da web .NET Core 6+ editando <DNT>**`newrelic.config`**</DNT> e adicionando um novo item na seção `appSettings` (ou adicione a seção `appSettings` se ela não existir) - Observe que **não** é a mesma coisa como a seção `appSettings` em um arquivo `web.config` :

   ```xml
   <!-- enable .NET Core 6+ instrumentation -->
   <appSettings>
     <add key="EnableAspNetCore6PlusBrowserInjection" value="true" />
   </appSettings>
   ```

Recomendamos testes completos deste recurso em um ambiente não produção para garantir compatibilidade com sua aplicação web. Se você tiver algum problema com esse recurso, entre [em contato conosco para obter suporte](/docs/new-relic-solutions/solve-common-issues/find-help-use-support-portal/).
