---
title: 'Resolución de problemas de Azure Web Apps: Problema con Azure Pipelines'
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

Para las aplicaciones web de Azure que usan `NewRelic.Azure.WebSites.Extension` y se implementan con Azure Pipelines, los directorios `newrelic` se eliminan, por lo que no se produce ninguna instrumentación. Otros intentos de implementar usando Azure Pipeline indican que `NewRelic.Azure.WebSites.Extension` ya está instalado, por lo que la extensión no se puede volver a instalar usando Azure Pipeline.

## Solución

Para controlar la retención de carpetas `newrelic` , utilice las siguientes opciones para WebDeploy:

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
        Habilite `skipAction=Delete` argumentos de WebDeploy.
      </td>

      <td>
        Excluya explícitamente carpetas específicas de la eliminación, como las carpetas `newrelic` , con lo siguiente:

        UI de Azure Pipelines:

        Agregue estos argumentos a la <DNT>**Azure App Service deploy -> Additional Deployment Options -> Additional Arguments**</DNT>

        ```
        -skip:skipAction=Delete,objectName=dirPath,absolutePath='newrelic$' -skip:skipAction=Delete,objectName=dirPath,absolutePath='newrelic_core$'
        ```

        O

        `Pipeline.yml` archivo:

        agregue el siguiente `input` a la tarea WebDeploy:

        ```yml
        AdditionalArguments: '-skip:skipAction=Delete,objectName=dirPath,absolutePath=''newrelic$'' -skip:skipAction=Delete,objectName=dirPath,absolutePath=''newrelic_core$'''
        ```

        <DNT>**Note**</DNT> las comillas simples escapadas.
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

Si se selecciona la opción `Remove additional files at destination` para la tarea `AzureRmWebAppDeployment` en Azure Pipeline, los directorios `newrelic` y `newrelic_core` se eliminan de `wwwroot`, pero Azure no considera que la extensión esté desinstalada. Como resultado, la próxima vez que se ejecute el pipeline e intente instalar la extensión, el pipeline mostrará el mensaje `Extension 'NewRelic.Azure.WebSites.Extension' already installed.` La extensión no se puede ejecutar sin sus carpetas y Azure no la reinstalará porque considera que todavía está instalada.
