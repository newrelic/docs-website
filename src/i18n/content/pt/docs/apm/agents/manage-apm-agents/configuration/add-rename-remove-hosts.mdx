---
title: 'Adicionar, renomear e remover hosts'
tags:
  - Agents
  - Manage APM agents
  - Configuration
metaDescription: 'To add a host, install the New Relic agent and start your app. To remove a host, uninstall or disable the agent first.'
freshnessValidatedDate: never
translationType: machine
---

Você pode adicionar e remover hosts do seu aplicativo. Você não pode renomear um host existente, mas pode criar um aplicativo com o nome de um host ou cluster. Você também pode [atribuir um rótulo cosmético ao host](#display_name) para diferenciar os hosts sem alterar a configuração do nome do host subjacente.

## Adicionar hosts [#adding_hosts]

Para adicionar um host para monitoramento, instale o agente e inicie seu aplicativo. O host que executa o aplicativo será identificado pela New Relic e aparecerá automaticamente no site após alguns minutos.

## Renomear hosts [#renaming_hosts]

Não é possível alterar o nome do host. No entanto, você pode [criar um aplicativo com o nome de um host ou cluster](/docs/site/renaming-applications). Por exemplo, se os hosts `ey01-s00057` e `ey01-s00058` fizerem parte de um [nível](/docs/accounts-partnerships/education/getting-started-new-relic/glossary#tier) de produção, você poderá criar um aplicativo chamado `App - Production` e fazer com que esses dois hosts se reportem a ele.

## Alterar o nome de exibição dos hosts [#display_name]

Você também pode atribuir um nome de exibição a um host para distinguir facilmente os hosts atribuídos dinamicamente. Esse nome de exibição não afeta o link entre um aplicativo e seu host pai. O nome de exibição aparece na interface do APM para decorar o nome `host:port` atribuído automaticamente.

No exemplo a seguir, `QA Server` e `Local Dev Server` são nomes de exibição:

<img
  title="crop-cosmetic-label-hostname.png"
  alt="crop-cosmetic-label-hostname.png"
  src="/images/apm_screenshot-crop_host-name-display.webp"
/>

Para definir um nome de exibição:

<table>
  <thead>
    <tr>
      <th style={{ width: "150px" }}>
        Agente New Relic
      </th>

      <th>
        Defina o nome de exibição do host
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Go
      </td>

      <td>
        Edite a [configuração do agente Go`HostDisplayName` .](/docs/agents/go-agent/instrumentation/go-agent-configuration#host-display-name)
      </td>
    </tr>

    <tr>
      <td>
        Java
      </td>

      <td>
        [Edite seu arquivo de configuração ou variáveis de ambiente](/docs/agents/java-agent/configuration/hostname-logic-java#display-name). No entanto, se o agente Java [detectar um nome de instância](/docs/agents/java-agent/configuration/hostname-logic-java#instance-names), o APM usará esse nome em vez do nome de exibição.
      </td>
    </tr>

    <tr>
      <td>
        .NET
      </td>

      <td>
        Edite o atributo `displayName` no elemento `processHost` do arquivo de configuração do agente .NET ou [das variáveis de ambiente](http://docs.newrelic.com/docs/agents/net-agent/configuration/net-agent-configuration#host-name).
      </td>
    </tr>

    <tr>
      <td>
        Node.js
      </td>

      <td>
        Edite `display_name` na seção `process_host` do seu arquivo de configuração.
      </td>
    </tr>

    <tr>
      <td>
        PHP
      </td>

      <td>
        Edite `process_host.display_name` em seu arquivo <DNT>**newrelic.ini**</DNT> .
      </td>
    </tr>

    <tr>
      <td>
        Python
      </td>

      <td>
        Edite `process_host.display_name` no seu arquivo de configuração.
      </td>
    </tr>

    <tr>
      <td>
        Ruby
      </td>

      <td>
        Edite `process_host.display_name` no seu arquivo de configuração.
      </td>
    </tr>
  </tbody>
</table>

## Remover hosts [#removing_hosts]

Para remover um host, use uma das opções:

* [Desinstale](/docs/agents/manage-apm-agents/installation/uninstall-agent) o agente.
* Desative-o editando ou removendo o arquivo de configuração do agente. Certifique-se de que todas as instâncias do host do aplicativo (Passenger, Jetty, etc.) foram totalmente reiniciadas após desabilitar o agente.

Ocasionalmente, processos de servidores de aplicativos não autorizados continuarão reportando dados. Nessa situação [, o indicador de status de saúde do seu aplicativo](/docs/using-new-relic/welcome-new-relic/getting-started/glossary#health-status) aparecerá em verde, mesmo que você tenha desligado o agente e verificado que nenhum dado está sendo relatado. Verifique se há processos perdidos em seu servidor web ou obtenha suporte em [support.newrelic.com](https://support.newrelic.com "O link abre em uma nova janela").

Depois de desinstalar um agente APM de uma instância de host, pode levar até 75 minutos para que o host antigo desapareça da visualização do APM. Se você removeu um host desinstalando o agente de infraestrutura, poderá levar até 24 horas para que ele desapareça.
