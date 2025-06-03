---
title: Nomeie seu aplicativo .NET
tags:
  - Agents
  - NET agent
  - Configuration
metaDescription: 'Name your New Relic .NET app: Our recommended and full list of naming options for your IIS-hosted and non-IIS apps.'
freshnessValidatedDate: never
translationType: machine
---

[O agente .NET da New Relic](/docs/agents/net-agent/getting-started/introduction-new-relic-net) oferece várias maneiras de alterar o nome do aplicativo relatado e exibido no APM. Este documento fornece uma visão geral dessas opções de nomenclatura.

Para obter uma visão geral da nomenclatura de aplicativos APM (não específica do .NET), consulte [Nomeie seu aplicativo](/docs/agents/manage-apm-agents/app-naming/name-your-application). Para alterar o nome de um aplicativo sem interromper a continuidade dos dados, use a [opção interface alias-change](/docs/agents/manage-apm-agents/app-naming/name-your-application#differences).

## Defina o nome do seu aplicativo (método recomendado) [#naming-options]

Ao implantar seu aplicativo pela primeira vez, você pode alterar o nome padrão para um nome mais descritivo. Como o New Relic coleta métricas usando esses nomes, personalizá-los permite executar a mesma aplicação em vários hosts e obter métricas de todas as suas instâncias.

Normalmente, configurar o arquivo `newrelic.config` local do aplicativo é o método de nomenclatura mais conveniente.

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        Método de nomenclatura
      </th>

      <th>
        Descrição
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Recomendado:

        Configure seu arquivo `newrelic.config` local do aplicativo
      </td>

      <td>
        Este método permite que você dê ao seu aplicativo um nome exclusivo com definições de configuração específicas. Ele também funciona para aplicativos hospedados em IIS e não IIS.

        1. Copie o arquivo `newrelic.config` do diretório inicial do agente para a pasta raiz do seu aplicativo.

           <DNT>**Default:**</DNT> `%ALLUSERSPROFILE%\New Relic\.NET Agent`

        2. Abra a cópia e defina o nome do seu aplicativo da seguinte forma:

           ```xml
           <application>
               <name>App Name</name>
           </application>
           ```

        3. Reinicie seu aplicativo.
      </td>
    </tr>
  </tbody>
</table>

Enquanto seu aplicativo estiver ativo, os dados deverão aparecer em alguns minutos. Caso contrário, siga nossos [procedimentos de resolução de problemas](/docs/agents/net-agent/troubleshooting/no-data-appears-net).

## Outros métodos

Se você tiver um uso ou propósito específico em mente, poderá preferir um método de nomenclatura diferente. Aqui está uma lista completa dos métodos alternativos:

<Callout variant="important">
  Alguns métodos [têm precedência](/docs/agents/net-agent/configuration/net-agent-configuration#config-options-precedence) sobre outros. Antes de escolher um método de nomenclatura, certifique-se de entender como sua configuração pode ser afetada.
</Callout>

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        Método de nomenclatura
      </th>

      <th>
        Descrição
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Configure seu arquivo `web.config`
      </td>

      <td>
        Se você tiver aplicativos hospedados no IIS e preferir não ter um arquivo `newrelic.config` local, poderá definir as configurações de nomenclatura em seu arquivo `web.config` .

        <CollapserGroup>
          <Collapser
            id="web"
            title="Passos"
          >
            <DNT>
              **For .NET Framework apps:**
            </DNT>

            1. Adicione a seguinte entrada à seção `appSettings` do arquivo e reinicie o aplicativo.

               ```xml
               <appSettings>
                   <add key="NewRelic.AppName" value="App Name" />
               </appSettings>
               ```

               <DNT>
                 **For .NET Core apps:**
               </DNT>

            2. Adicione a variável de ambiente `NEW_RELIC_APP_NAME` ao arquivo da seguinte maneira e reinicie o aplicativo.

               ```xml
               <aspNetCore processPath="dotnet" arguments=".\MyApp.dll" stdoutLogEnabled="false" stdoutLogFile=".\logs\stdout" hostingModel="InProcess" >
                   <environmentVariables>
                       <environmentVariable name="NEW_RELIC_APP_NAME" value="App Name" />
                   </environmentVariables>
               </aspNetCore>
               ```
          </Collapser>
        </CollapserGroup>
      </td>
    </tr>

    <tr>
      <td>
        Defina o nome do aplicativo usando variáveis de ambiente
      </td>

      <td>
        Se você deseja definir facilmente os nomes das aplicações durante a implantação do contêiner, defina uma variável de ambiente no ambiente da aplicação.

        <CollapserGroup>
          <Collapser
            id="env-var"
            title="Passos"
          >
            1. Defina a variável ambiental `NEW_RELIC_APP_NAME` no ambiente do seu aplicativo:

               ```ini
               NEW_RELIC_APP_NAME = "App name"
               ```

               <Callout variant="important">
                 Este método só funciona se você estiver usando o agente .NET [versão 6.17.387.0 ou superior](/docs/release-notes/agent-release-notes/net-release-notes).
               </Callout>
          </Collapser>
        </CollapserGroup>
      </td>
    </tr>

    <tr>
      <td>
        Nome após pools de aplicativos
      </td>

      <td>
        Se seus pools de aplicativos do IIS já tiverem nomes exclusivos de sua preferência ou se você estiver usando uma [infraestrutura de conteúdo de rede compartilhada (SNCI)](https://www.iis.net/learn/web-hosting/scenario-build-a-web-farm-with-iis-servers), você poderá nomear seu aplicativo com base no pool de aplicativos atribuído.

        <CollapserGroup>
          <Collapser
            id="app-pool"
            title="Passos"
          >
            1. Remova quaisquer chaves `NewRelic.AppName` da seção `<appSettings>` em `web.config.` Certifique-se de não excluir a tag `<appSettings>` ao redor.

            2. Remova quaisquer elementos filhos `<name>` do elemento pai `<application>` em `newrelic.config`. Certifique-se de não excluir a tag `<application>` ao redor.

               ```xml
               <application>
                   <!-- <name>App Name</name> -->
               </application>
               ```

               Cada aplicativo reportará de acordo com o nome do pool de aplicativos.
          </Collapser>
        </CollapserGroup>
      </td>
    </tr>

    <tr>
      <td>
        Configure seu arquivo `app.config`
      </td>

      <td>
        Se você tiver um aplicativo não hospedado no IIS e preferir não ter um arquivo `newrelic.config` local, poderá definir as configurações de nomenclatura em seu arquivo `app.config` .

        <CollapserGroup>
          <Collapser
            id="app-config"
            title="Passos"
          >
            1. Adicione a seguinte entrada ao arquivo `app.config` (por exemplo, `applicationname.exe.config`) e reinicie o aplicativo.

               ```xml
               <appSettings>
                   <add key="NewRelic.AppName" value="App Name" />
               </appSettings>
               ```
          </Collapser>
        </CollapserGroup>
      </td>
    </tr>

    <tr>
      <td>
        Use a API do agente .NET
      </td>

      <td>
        Se quiser renomear seu aplicativo programaticamente, você poderá usar a [chamada de API do agente`SetApplicationName()` ](/docs/apm/agents/net-agent/net-agent-api/set-application-name/)para definir o nome do aplicativo no tempo de execução. Este nome terá prioridade sobre todas as outras fontes de nomenclatura de aplicativos.
      </td>
    </tr>
  </tbody>
</table>

Enquanto seu aplicativo estiver ativo, os dados deverão aparecer em alguns minutos. Caso contrário, certifique-se de ter executado um `IISRESET` em um prompt de comando administrativo se tiver alterado [o arquivo de configuração do seu aplicativo .NET](/docs/agents/net-agent/installation-and-configuration/net-agent-configuration) (`newrelic.config` ou `app.config`). Caso contrário, siga nossos [procedimentos de resolução de problemas](/docs/agents/net-agent/troubleshooting/no-data-appears-net).

## Use vários nomes de aplicativos [#multiple]

Você pode usar vários nomes de aplicativos para agregar dados do seu aplicativo. Às vezes chamamos isso de “acumulação” de seus dados.

Para o agente .NET, você pode configurar até três nomes de aplicativos. O primeiro nome é o nome principal do aplicativo e o segundo e terceiro nomes são usados para as categorias de agregação de dados mais gerais. Para saber mais sobre como funcionam vários nomes de aplicativos, consulte [Usar vários nomes de aplicativos](/docs/agents/manage-apm-agents/app-naming/use-multiple-names-app).

<CollapserGroup>
  <Collapser
    id="example-applocal"
    title={<><InlineCode>
      newrelic.config
    </InlineCode> arquivo</>}
  >
    Aqui está um exemplo de configuração de vários nomes no arquivo `newrelic.config` local do aplicativo:

    ```xml
    <application>
        <name>Primary App Name</name>
        <name>Second App Name</name>
        <name>Third App Name</name>
    </application>
    ```
  </Collapser>

  <Collapser
    id="example-web"
    title={<><InlineCode>
      web.config
    </InlineCode> arquivo</>}
  >
    Aqui está um exemplo de configuração de vários nomes em seu arquivo `web.config` :

    ```xml
    <appSettings>
        <add key="NewRelic.AppName" value="App Name, App Name 2, App Name 3" />
    </appSettings>
    ```
  </Collapser>

  <Collapser
    id="example-app"
    title={<><InlineCode>
      app.config
    </InlineCode> arquivo</>}
  >
    Aqui está um exemplo de configuração de vários nomes em seu arquivo `app.config` :

    ```xml
    <appSettings>
        <add key="NewRelic.AppName" value="App Name, App Name 2, App Name 3" />
    </appSettings>
    ```
  </Collapser>

  <Collapser
    id="example-app"
    title={<><InlineCode>
      NEW_RELIC_APP_NAME
    </InlineCode> variável de ambiente</>}
  >
    Aqui está um exemplo de configuração de vários nomes na variável de ambiente `NEW_RELIC_APP_NAME` :

    ```
    NEW_RELIC_APP_NAME="App Name, App Name 2, App Name 3"
    ```
  </Collapser>
</CollapserGroup>
