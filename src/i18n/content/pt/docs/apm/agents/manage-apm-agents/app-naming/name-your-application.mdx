---
title: Nomeie ou altere o nome do seu aplicativo
tags:
  - Agents
  - Manage APM agents
  - App naming
metaDescription: 'After deploying your app in New Relic, change the default app name to something descriptive. You can also add an alias for your app.'
freshnessValidatedDate: never
translationType: machine
---

O New Relic conecta o métrica a aplicativos individuais usando sua [chave de licença](/docs/apis/intro-apis/new-relic-api-keys/#ingest-license-key) e o nome principal do aplicativo. Você pode alterar o nome do aplicativo em seu arquivo de configuração ou atribuir um alias ao aplicativo para alterar a forma como ele aparece na interface do New Relic.

<Callout variant="important">
  Se você não especificar o nome do aplicativo no arquivo de configuração do New Relic, a maioria dos agentes do New Relic fornecerá um nome de aplicativo genérico por padrão. Para garantir que todos os [dados agregados](/docs/accounts-partnerships/accounts/account-billing-usage/data-retention-components#components-aggregate-metrics) do mesmo aplicativo sejam relatados com precisão, [forneça um nome descritivo a cada aplicativo](#app-name).
</Callout>

## Alterando o nome versus o alias [#differences]

Você pode atribuir um novo nome ao aplicativo ou alterar o alias do aplicativo. Eles têm dois efeitos diferentes:

<table>
  <thead>
    <tr>
      <th width={100}>
        Prazo
      </th>

      <th width={200}>
        <DNT>
          **How to change it**
        </DNT>
      </th>

      <th>
        <DNT>
          **Effect**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Nome
      </td>

      <td>
        [Atribua o nome em seu arquivo de configuração](#assigning)
      </td>

      <td>
        Alterar o nome do aplicativo no arquivo de configuração do agente fará com que o aplicativo se reporte a um novo cabeçalho na interface do usuário do New Relic, com total descontinuidade de dados.

        Isto é útil, por exemplo, se você quiser recomeçar e relatar novos dados. Se nenhum outro agente estiver reportando ao nome antigo do aplicativo, o nome antigo do aplicativo aparecerá em cinza e poderá ser excluído.
      </td>
    </tr>

    <tr>
      <td>
        Alias
      </td>

      <td>
        [Altere o alias na interface de configurações do APM](#app-alias)
      </td>

      <td>
        [A criação de um <DNT>**alias**</DNT> para o nome do aplicativo](/docs/apm/new-relic-apm/maintenance/rename-your-application#app-alias) altera apenas a forma como o nome do aplicativo aparece na interface do New Relic. A alteração do alias não afeta a forma como os dados são relatados. Ele simplesmente ajuda você a controlar seus dados com um alias útil.
      </td>
    </tr>
  </tbody>
</table>

## Dê a cada aplicativo um nome descritivo [#app-name]

Por padrão, a maioria dos agentes New Relic fornece um nome de aplicativo padrão, como <DNT>**My Application**</DNT> ou <DNT>**PHP Application**</DNT>, para cada aplicativo vinculado à sua conta.

<Callout variant="important">
  Recomendamos alterar o nome padrão de um aplicativo para um nome mais descritivo antes da implantação, e ele pode ter até 128 caracteres.
</Callout>

Cada nome de aplicativo exclusivo cria um novo registro de aplicativo na interface do New Relic, que permite:

* Execute um aplicativo em mais de um host e tenha todos os dados agregados (coletados) sob o mesmo nome.
* Execute vários aplicativos em um único host e tenha todos os dados agregados (coletados) sob nomes diferentes.

## Atribua o nome em seu arquivo de configuração [#assigning]

Para alterar o nome do aplicativo, defina o valor do nome do aplicativo no arquivo de configuração do agente. Se você implantou um aplicativo por meio de um agente APM e, em seguida, implantou outro aplicativo com o mesmo nome por meio de um agente APM diferente, a New Relic anexará automaticamente o nome do idioma do agente ao final do nome do segundo aplicativo. Por exemplo, se você implantar um aplicativo Node.js chamado `New-App` e, em seguida, implantar um aplicativo .NET chamado `New-App`, o New Relic anexará automaticamente o segundo nome do aplicativo como `New-App (DOTNET)`.

Para garantir a conformidade com as convenções de nomenclatura, observe que os símbolos `<` e `>` não são permitidos no nome do aplicativo. Se estes símbolos forem incluídos, eles serão removidos automaticamente. Certifique-se de que o nome do seu aplicativo atenda a esse requisito.

<table>
  <thead>
    <tr>
      <th width={100}>
        <DNT>
          **Agent**
        </DNT>
      </th>

      <th>
        <DNT>
          **Configuration file value**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        C
      </td>

      <td>
        Identifique no máximo três nomes separados por ponto e vírgula `;`em seu [`newrelic_app_config_t* config;`](/docs/agents/c-sdk/install-configure/install-c-sdk-compile-link-your-code#app-name).
      </td>
    </tr>

    <tr>
      <td>
        Go
      </td>

      <td>
        Defina [`AppName`](/docs/agents/go-agent/instrumentation/go-agent-configuration#app-name) com no máximo três nomes separados por ponto e vírgula.
      </td>
    </tr>

    <tr>
      <td>
        Java
      </td>

      <td>
        Veja as opções para [nomear seu aplicativo Java](/docs/agents/java-agent/configuration/name-your-java-application).
      </td>
    </tr>

    <tr>
      <td>
        .NET
      </td>

      <td>
        Use qualquer uma das opções disponíveis para [nomear seu aplicativo .NET](/docs/agents/net-agent/installation-and-configuration/naming-your-net-application).
      </td>
    </tr>

    <tr>
      <td>
        Node.js
      </td>

      <td>
        Defina [`app_name`](/docs/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration#app_name) com no máximo três nomes separados por vírgula. Coloque os nomes entre aspas simples ou duplas. (Ou altere a variável de ambiente [`NEW_RELIC_APP_NAME`](/docs/agents/nodejs-agent/installation-configuration/configuring-nodejs-environment-variables#app_name).)
      </td>
    </tr>

    <tr>
      <td>
        PHP
      </td>

      <td>
        Veja as opções para [nomear seu aplicativo PHP](/docs/agents/php-agent/configuration/name-your-php-application).
      </td>
    </tr>

    <tr>
      <td>
        Python
      </td>

      <td>
        Defina [`app_name`](/docs/agents/python-agent/installation-configuration/python-agent-configuration#app_name) com no máximo três nomes separados por ponto e vírgula. Não adicione espaço após o ponto e vírgula, ou o próximo nome será interpretado como um comentário.
      </td>
    </tr>

    <tr>
      <td>
        Ruby
      </td>

      <td>
        Defina [`app_name`](/docs/agents/ruby-agent/installation-configuration/ruby-agent-configuration#app_name) com no máximo três nomes separados por ponto e vírgula.
      </td>
    </tr>
  </tbody>
</table>

## Alterar o alias do aplicativo [#app-alias]

O nome do aplicativo definido na interface do usuário do New Relic é um <DNT>**alias**</DNT> legível por humanos. Se você renomear seu aplicativo, o nome visível será atualizado em todos os lugares da interface do New Relic, inclusive [em aplicativos de browser vinculados](/docs/browser/new-relic-browser/installation-configuration/rename-browser-apps).

Inicialmente, esse alias é igual ao nome do identificador do aplicativo no arquivo de configuração do agente New Relic. No entanto, alterar o alias da interface <DNT>**does not**</DNT> afeta o nome do aplicativo subjacente usado para agregar dados, que é definido no arquivo de configuração do agente. O aplicativo deve relatar dados ativamente para alterar o alias. Alterar o alias da interface fará com que todos os agentes que reportam sob o identificador do aplicativo sejam reiniciados.

Para alterar o <DNT>**alias**</DNT> do nome do seu aplicativo na interface do usuário do New Relic:

1. Vá para

   <DNT>
     **[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & services > (select an app) > Settings > Application**
   </DNT>

   .

2. No campo

   <DNT>
     **Application alias**
   </DNT>

   , digite um novo nome (alias) para o aplicativo selecionado.

3. Selecione

   <DNT>
     **Save application settings**
   </DNT>

   .

Você também pode alterar o alias do aplicativo [com a API REST New Relic](/docs/apm/apis/application-examples-v2/changing-alias-your-application-api-v2).

<Callout variant="tip">
  Quando você faz uma alteração por meio de <DNT>**Application settings**</DNT>, a alteração salva reinicia o agente. Somente o agente desse serviço específico será reiniciado, mas a ação não reiniciará seus pools de aplicativos ou servidores Web.
</Callout>

## Usando vários nomes para um aplicativo [#multiple-names]

Ao [fornecer vários nomes ao seu aplicativo](/docs/agents/manage-apm-agents/app-naming/use-multiple-names-app), você pode agregar métricas para vários agentes em um aplicativo ou serviço inteiro.

<Callout variant="important">
  Se você usar vários nomes para um aplicativo, o sobrenome atribuído será o nome menos específico que a New Relic usa para acumular os dados. Para obter melhores resultados, visualize o conjunto de dados agregados e em nível de instância, a ordem dos nomes agregados do seu aplicativo, do mais específico para o menos específico, em seu arquivo de configuração.
</Callout>
