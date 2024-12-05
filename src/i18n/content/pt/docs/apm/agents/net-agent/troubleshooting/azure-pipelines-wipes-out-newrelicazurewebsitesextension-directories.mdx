---
title: Azure Pipelines elimina diretórios NewRelic.Azure.WebSites.Extension
type: troubleshooting
tags:
  - Agents
  - NET agent
  - Troubleshooting
metaDescription: Troubleshooting steps if data does not appear in your app after you installed the New Relic .NET agent.
freshnessValidatedDate: never
translationType: machine
---

## Problema

Para aplicativos Web do Azure que usam `NewRelic.Azure.WebSites.Extension` e implantados com Azure Pipelines, os diretórios `newrelic` são excluídos, portanto, nenhuma instrumentação ocorre. Outras tentativas de implantação usando o Azure Pipeline indicam que o `NewRelic.Azure.WebSites.Extension` já está instalado, portanto, a extensão não pode ser reinstalada usando o Azure Pipeline.

## Solução

Para controlar a retenção de pasta `newrelic` , use as seguintes opções para WebDeploy:

<table>
  <thead>
    <tr>
      <th>
        <DNT>
          **Basic solutions**
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
        Ative `skipAction=Delete` argumentos do WebDeploy.
      </td>

      <td>
        Exclua explicitamente pastas específicas da exclusão, como as pastas `newrelic` , com o seguinte:

        Interface do Azure Pipelines:

        Adicione esses argumentos ao <DNT>**Azure App Service deploy -> Additional Deployment Options -> Additional Arguments**</DNT>

        ```
        -skip:skipAction=Delete,objectName=dirPath,absolutePath='newrelic$' -skip:skipAction=Delete,objectName=dirPath,absolutePath='newrelic_core$'
        ```

        OU

        `Pipeline.yml` arquivo:

        adicione o seguinte `input` à tarefa WebDeploy:

        ```yml
        AdditionalArguments: '-skip:skipAction=Delete,objectName=dirPath,absolutePath=''newrelic$'' -skip:skipAction=Delete,objectName=dirPath,absolutePath=''newrelic_core$'''
        ```

        <DNT>**Note**</DNT> as aspas simples escapadas.
      </td>
    </tr>
  </tbody>
</table>

<img
  title="Screenshot showing skipAction"
  alt="Screenshot showing skipAction"
  src="/images/apm_screenshot-crop_skipaction-in-azure-pipeline.webp"
/>

## Causa

Se a opção `Remove additional files at destination` for selecionada para a tarefa `AzureRmWebAppDeployment` no Azure Pipeline, os diretórios `newrelic` e `newrelic_core` serão excluídos de `wwwroot`, mas a extensão não será considerada desinstalada pelo Azure. Como resultado, na próxima vez que o pipeline for executado e tentar instalar a extensão, o pipeline exibirá a mensagem `Extension 'NewRelic.Azure.WebSites.Extension' already installed.` A extensão não pode ser executada sem suas pastas e o Azure não a reinstalará porque considera que ainda está instalada.
