---
title: Instalar e configurar o monitoramento do Azure Functions no New Relic
metaDescription: Configure your Azure Functions with New Relic
freshnessValidatedDate: never
translationType: machine
---

## Antes de você começar [#begin]

Certifique-se de que suas Azure Functions atendem à nossa [compatibilidade e aos nossos requisitos](/docs/serverless-function-monitoring/azure-function-monitoring/compatibility-requirement-azure-monitoring).

<Steps>
  <Step>
    ## Vincule sua conta do Azure ao New Relic

    Você pode vincular sua conta Azure ao New Relic configurando a sondagem do Azure Monitor Métrica. Isso permite que você veja a métrica na interface do New Relic. Para obter mais informações, consulte [integraçãoAzure ](https://docs.newrelic.com/docs/infrastructure/microsoft-azure-integrations/azure-integrations-list/azure-functions-monitoring-integration/#polling).
  </Step>

  <Step>
    ## Instrumente seu Azure Functions com o agente New Relic .NET

    Com base em suas necessidades, selecione uma das seguintes opções para instrumentar seu Azure Functions com o agente .NET do New Relic.

    <Tabs>
      <TabsBar>
        <TabsBarItem id="containerized-instrumentation">Funções em contêiner</TabsBarItem> <TabsBarItem id="linux-instrumentation">Linux</TabsBarItem> <TabsBarItem id="windows-instrumentation">Windows</TabsBarItem>
      </TabsBar>

      <TabsPages>
        <TabsPageItem id="linux-instrumentation">
          1. Adicione o pacote NuGet `NewRelic.Agent` ao seu projeto de aplicativo.

             * No editor de código do Visual Studio, use o gerenciador de pacotes NuGet para procurar e adicionar a versão mais recente do `NewRelic.Agent` ao seu aplicativo.
             * Se estiver usando outros ambientes de desenvolvimento, você pode adicionar o pacote com `dotnet add package NewRelic.Agent`.

          2. Use seu mecanismo de publicação preferido para implantar seu aplicativo atualizado no Azure. Isso inclui o agente New Relic, que é instalado na pasta `/home/site/www/newrelic` .
        </TabsPageItem>

        <TabsPageItem id="windows-instrumentation">
          A extensão New Relic Azure Websites (v1.6.0 e posterior) configura automaticamente a instrumentação para suas funções Windows Azure .

          Para instalar a extensão New Relic Azure Websites, siga estas etapas:

          1. No portal do Azure, navegue até seu aplicativo de funções.
          2. Clique na seção <DNT>**Development tools**</DNT> e selecione <DNT>**Extensions**</DNT>.
          3. Clique em <DNT>**+ Add**</DNT>.
          4. Selecione <DNT>**Search for an extension to install**</DNT> e digite `New Relic .NET Agent` na caixa <DNT>**Filter items**</DNT> .
          5. Selecione a extensão <DNT>**New Relic .NET Agent(vx.x.x) - New Relic**</DNT> e clique em <DNT>**Add**</DNT>.
          6. Quando a instalação estiver concluída, a extensão aparecerá na lista de extensões instaladas. Para verificar a instalação correta, clique no link na coluna &quot;Navegar&quot; para visualizar o log de instalação.
        </TabsPageItem>

        <TabsPageItem id="containerized-instrumentation">
          Para instalar o agente New Relic .NET, no estágio final do seu Dockerfile, adicione as seguintes linhas:

          ```dockerfile
          # Install the latest New Relic .NET agent using the apt-get package manager
          RUN apt-get update && apt-get install -y wget ca-certificates gnupg \
              && echo 'deb http://apt.newrelic.com/debian/ newrelic non-free' | tee /etc/apt/sources.list.d/newrelic.list \
              && wget https://download.newrelic.com/548C16BF.gpg \
              && apt-key add 548C16BF.gpg \
              && apt-get update \
              && apt-get install -y newrelic-dotnet-agent \
              && rm -rf /var/lib/apt/lists/*
          ```
        </TabsPageItem>
      </TabsPages>
    </Tabs>
  </Step>

  <Step>
    ## Configurar as variáveis de ambiente

    Depois de instrumentar seu Azure Functions com o agente .NET do New Relic, faça o seguinte para configurar as [variáveis de ambiente](/docs/serverless-function-monitoring/azure-function-monitoring/env-variables-azure) para enviar os dados ao New Relic.

    1. Navegue até suas Azure Functions no portal Azure , em **Settings**, clique em **Environment variables** e, em seguida, clique em **Advanced edit**.

    2. Com base nos requisitos do seu aplicativo, cole os seguintes valores.

    <Callout variant="important">
      Certifique-se de adicionar uma vírgula no final da última linha existente e atualizar sua chave de licença e o nome do aplicativo na seguinte configuração.
    </Callout>

    <Tabs>
      <TabsBar>
        <TabsBarItem id="containerized-configuration">Funções em contêiner</TabsBarItem> <TabsBarItem id="linux-configuration">Linux</TabsBarItem> <TabsBarItem id="windows-configuration">Windows</TabsBarItem>
      </TabsBar>

      <TabsPages>
        <TabsPageItem id="linux-configuration">
          ```json
          {
            "name": "CORECLR_ENABLE_PROFILING",
            "value": "1",
            "slotSetting": false
          },
          {
            "name": "CORECLR_NEW_RELIC_HOME",
            "value": "/home/site/wwwroot/newrelic",
            "slotSetting": false
          },
          {
            "name": "CORECLR_PROFILER",
            "value": "{36032161-FFC0-4B61-B559-F6C5D41BAE5A}",
            "slotSetting": false
          }, 
          {
            "name": "CORECLR_PROFILER_PATH",
            "value": "/home/site/wwwroot/newrelic/libNewRelicProfiler.so",
            "slotSetting": false
          },
          {
            "name": "NEW_RELIC_AZURE_FUNCTION_MODE_ENABLED",
            "value": "1",
            "slotSetting": false
          },
          {
            "name": "NEW_RELIC_LOG_DIRECTORY",
            "value": "/home/LogFiles/NewRelic",
            "slotSetting": false
          },
          {
            "name": "NEW_RELIC_LICENSE_KEY",
            "value": "<your newrelic license key here>",
            "slotSetting": false
          }
          ```
        </TabsPageItem>

        <TabsPageItem id="windows-configuration">
          ```json
          {
            "name": "NEW_RELIC_LICENSE_KEY",
            "value": "YOUR_NEW_RELIC_LICENSE_KEY",
            "slotSetting": false
          }
          ```

          Opcionalmente, você pode especificar a versão do agente .NET que deseja instalar adicionando a seguinte variável de ambiente:

          ```json
          {
            "name": "NEW_RELIC_AGENT_VERSION_OVERRIDE",
            "value": "10.35.0",
            "slotSetting": false
          }
          ```
        </TabsPageItem>

        <TabsPageItem id="containerized-configuration">
          ```json
          {
            "name": "CORECLR_ENABLE_PROFILING",
            "value": "1",
            "slotSetting": false
          },
          {
            "name": "CORECLR_NEW_RELIC_HOME",
            "value": "/usr/local/newrelic-dotnet-agent",
            "slotSetting": false
          },
          {
            "name": "CORECLR_PROFILER",
            "value": "{36032161-FFC0-4B61-B559-F6C5D41BAE5A}",
            "slotSetting": false
          }, 
          {
            "name": "CORECLR_PROFILER_PATH",
            "value": "/usr/local/newrelic-dotnet-agent/libNewRelicProfiler.so",
            "slotSetting": false
          },
          {
            "name": "NEW_RELIC_AZURE_FUNCTION_MODE_ENABLED",
            "value": "1",
            "slotSetting": false
          },
          {
            "name": "NEW_RELIC_LOG_DIRECTORY",
            "value": "/home/LogFiles/NewRelic",
            "slotSetting": false
          },
          {
            "name": "NEW_RELIC_LICENSE_KEY",
            "value": "<your newrelic license key here>",
            "slotSetting": false
          }
          ```
        </TabsPageItem>
      </TabsPages>
    </Tabs>
  </Step>

  <Step>
    ## Reinicie suas Azure Functions

    Depois de adicionar as variáveis de ambiente, reinicie o Azure Functions para aplicar as alterações.
  </Step>
</Steps>

## Qual é o próximo

Após concluir as etapas de instalação e configuração, envie tráfego para o Azure Functions para ver a métrica no dashboard da interface do New Relic.