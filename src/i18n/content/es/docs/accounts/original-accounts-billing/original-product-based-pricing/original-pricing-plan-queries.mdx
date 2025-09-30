---
title: Uso de suscripción (modelo de precios original)
tags:
  - Accounts
  - Original accounts and billing
  - Original pricing model usage
metaDescription: 'For New Relic customers on our original pricing plan: about the end-of-life of the original pricing usage UI and how to query your usage.'
freshnessValidatedDate: never
translationType: machine
---

<Callout variant="important">
  Este documento hace referencia a nuestro modelo original de precios basado en productos. Para obtener más información sobre los cambios de precios, consulte [Descripción general de nuestros modelos de precios](/docs/accounts/original-accounts-billing/original-product-based-pricing/overview-pricing-models/).
</Callout>

El 31 de mayo de 2023, la UI usuario de uso de nuestro modelo de precios original llega al final de su vida útil (EoL). En este documento hay consultas de NRQL que los clientes sobre el modelo de precios original pueden utilizar para comprender su uso.

## ¿Qué clientes se ven afectados? [#who-is-affected]

Esto afecta a la organización New Relic en nuestro [modelo de precios original](/docs/accounts/original-accounts-billing/original-product-based-pricing/overview-pricing-models/), que es un modelo de precios en el que facturamos por varios productos (como <InlinePopover type="apm"/>, <InlinePopover type="browser"/>, monitoreo de infraestructura y más).

## ¿Qué puedes hacer? [#actions]

Si su organización se ve afectada por este final de vida y permanecerá en nuestro plan de precios original, las opciones incluyen:

* Cree [un panel personalizado](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards) que incluya la consulta de uso a continuación
* Realice una consulta única cuando necesite comprender el uso

## Detalles sobre consultas [#querying]

Algunos detalles sobre la consulta de datos de uso:

* Los datos de uso se almacenan en el [tipo de evento`NrDailyUsage` ](/attribute-dictionary/?event=NrDailyUsage)y en el [tipo de evento`NrUsage`](/attribute-dictionary/?event=NrUsage)
* Si está consultando el `consumingAccount`, asegúrese de ingresar el [ID de la cuenta](/docs/accounts/accounts-billing/account-structure/account-id).
* Al realizar consultas con el [generador de consultas](/docs/query-your-data/explore-query-data/query-builder/introduction-query-builder) en la UI , se consultará una cuenta específica y cualquier cuenta secundaria. También puede [utilizar NerdGraph para consultas entre cuentas](/docs/apis/nerdgraph/examples/nerdgraph-nrql-tutorial/#cross-account-query).

A continuación le daremos algunos ejemplos de consultas de uso para diferentes categorías de productos.

<CollapserGroup>
  <Collapser
    id="apm-cu"
    title="Consulta de uso de APM basada en CU"
  >
    Para obtener detalles sobre cómo funcionan los precios basados en CU, consulte [Precios basados en host y CU](#cu-vs-host).

    ### Consulta general

    Cartelera con comparación con el período anterior:

    ```sql
    SELECT rate(SUM(apmComputeUnits), 1 day) as usage 
    FROM NrDailyUsage, NrUsage 
    WHERE `productLine` = 'APM' AND `usageType` = 'Host' AND `consumingAccountId` = <a href='/docs/accounts/accounts-billing/account-structure/account-id'>YOUR_ACCOUNT_ID</a> 
    COMPARE WITH 1 month ago 
    SINCE '2023-02-01 00:00:00' UNTIL '2023-03-01 00:00:00' 
    LIMIT 500
    ```

    Gráfico de tendencias durante el período de tiempo:

    ```sql
    SELECT rate(SUM(apmComputeUnits), 1 day) as usage 
    FROM NrDailyUsage, NrUsage 
    WHERE `productLine` = 'APM' AND `usageType` = 'Host' AND `consumingAccountId` = <a href='/docs/accounts/accounts-billing/account-structure/account-id'>YOUR_ACCOUNT_ID</a> 
    TIMESERIES 1 day 
    SINCE '2023-02-01 00:00:00' UNTIL '2023-03-01 00:00:00' 
    LIMIT 5
    ```

    ### Consulta detallada

    Uso a lo largo del período de tiempo, por host:

    ```sql
    SELECT rate(SUM(apmComputeUnits), 1 day) as usage 
    FROM NrDailyUsage, NrUsage 
    WHERE `productLine` = 'APM' AND `usageType` = 'Host' AND `consumingAccountId` = <a href='/docs/accounts/accounts-billing/account-structure/account-id'>YOUR_ACCOUNT_ID</a>  
    FACET hostId,agentHostname,consumingAccountId 
    SINCE '2023-02-01 00:00:00' UNTIL '2023-03-01 00:00:00' 
    LIMIT 500
    ```

    Gráfico de tendencias durante el período de tiempo, por anfitrión:

    ```sql
    SELECT rate(SUM(apmComputeUnits), 1 day) as usage 
    FROM NrDailyUsage, NrUsage 
    WHERE `productLine` = 'APM' AND `usageType` = 'Host' AND `consumingAccountId` = <a href='/docs/accounts/accounts-billing/account-structure/account-id'>YOUR_ACCOUNT_ID</a> 
    TIMESERIES 1 day 
    FACET hostId 
    SINCE '2023-02-01 00:00:00' UNTIL '2023-03-01 00:00:00' 
    LIMIT 15
    ```
  </Collapser>

  <Collapser
    id="apm-host"
    title="Consulta de uso de APM basada en host"
  >
    Para obtener detalles sobre cómo funcionan los precios basados en host, consulte [Precios basados en host y CU](#cu-vs-host).

    ### Consulta general

    Cartelera con comparación con el período anterior:

    ```sql
    SELECT rate(SUM(apmHoursUsed) / 24, 1 day) as usage 
    FROM NrDailyUsage, NrUsage 
    WHERE `productLine` = 'APM' AND `usageType` = 'Host' AND `consumingAccountId` = <a href='/docs/accounts/accounts-billing/account-structure/account-id'>YOUR_ACCOUNT_ID</a> 
    COMPARE WITH 1 month ago 
    SINCE '2023-02-01 00:00:00' UNTIL '2023-03-01 00:00:00' 
    LIMIT 500
    ```

    Gráfico de tendencias durante el período de tiempo:

    ```sql
    SELECT rate(SUM(apmHoursUsed), 1 hour) as usage 
    FROM NrDailyUsage, NrUsage 
    WHERE `productLine` = 'APM' AND `usageType` = 'Host' AND `consumingAccountId` = <a href='/docs/accounts/accounts-billing/account-structure/account-id'>YOUR_ACCOUNT_ID</a> 
    TIMESERIES 1 day 
    SINCE '2023-02-01 00:00:00' UNTIL '2023-03-01 00:00:00' 
    LIMIT 5
    ```

    ### Consulta detallada

    Uso a lo largo del período de tiempo, por host:

    ```sql
    SELECT rate(SUM(apmHoursUsed), 1 hour) as usage 
    FROM NrDailyUsage, NrUsage 
    WHERE `productLine` = 'APM' AND `usageType` = 'Host' AND `consumingAccountId` = <a href='/docs/accounts/accounts-billing/account-structure/account-id'>YOUR_ACCOUNT_ID</a>  
    FACET hostId,agentHostname,consumingAccountId 
    SINCE '2023-02-01 00:00:00' UNTIL '2023-03-01 00:00:00' 
    LIMIT 500
    ```

    Gráfico de tendencias durante el período de tiempo, por anfitrión:

    ```sql
    SELECT rate(SUM(apmHoursUsed), 1 hour) as usage 
    FROM NrDailyUsage, NrUsage 
    WHERE `productLine` = 'APM' AND `usageType` = 'Host' AND `consumingAccountId` = <a href='/docs/accounts/accounts-billing/account-structure/account-id'>YOUR_ACCOUNT_ID</a> 
    TIMESERIES 1 day 
    FACET hostId 
    SINCE '2023-02-01 00:00:00' UNTIL '2023-03-01 00:00:00' 
    LIMIT 15
    ```
  </Collapser>

  <Collapser
    id="browser"
    title="Monitoreo de uso del navegador consulta"
  >
    ### Consulta general

    Cartelera con comparación con el período anterior:

    ```sql
    SELECT rate(SUM(browserPageViewCount), 1 day) as usage 
    FROM NrDailyUsage, NrUsage 
    WHERE `productLine` = 'Browser' AND `usageType` = 'Application' AND `consumingAccountId` = <a href='/docs/accounts/accounts-billing/account-structure/account-id'>YOUR_ACCOUNT_ID</a> AND `isPrimaryApp` != 'false' 
    COMPARE WITH 1 month ago 
    SINCE '2023-02-01 00:00:00' UNTIL '2023-03-01 00:00:00' 
    LIMIT 500
    ```

    Gráfico de tendencias durante el período de tiempo:

    ```sql
    SELECT SUM(browserPageViewCount) as usage 
    FROM NrDailyUsage, NrUsage 
    WHERE `productLine` = 'Browser' AND `usageType` = 'Application' AND `consumingAccountId` = <a href='/docs/accounts/accounts-billing/account-structure/account-id'>YOUR_ACCOUNT_ID</a> AND `isPrimaryApp` != 'false' 
    TIMESERIES 1 day 
    SINCE '2023-02-01 00:00:00' UNTIL '2023-03-01 00:00:00' 
    LIMIT 5
    ```

    ### Consulta detallada

    Uso a lo largo del período de tiempo, por cuenta consumidora:

    ```sql
    SELECT rate(SUM(browserPageViewCount), 1 day) as usage 
    FROM NrDailyUsage, NrUsage 
    WHERE `productLine` = 'Browser' AND `usageType` = 'Application' AND `consumingAccountId` = <a href='/docs/accounts/accounts-billing/account-structure/account-id'>YOUR_ACCOUNT_ID</a> AND `isPrimaryApp` != 'false'  
    FACET consumingAccountName,consumingAccountId 
    SINCE '2023-02-01 00:00:00' UNTIL '2023-03-01 00:00:00' 
    LIMIT 500
    ```

    Gráfico de tendencias durante el período de tiempo, por cuenta consumidora:

    ```sql
    SELECT SUM(browserPageViewCount) as usage 
    FROM NrDailyUsage, NrUsage WHERE `productLine` = 'Browser' AND `usageType` = 'Application' AND `consumingAccountId` = <a href='/docs/accounts/accounts-billing/account-structure/account-id'>YOUR_ACCOUNT_ID</a> AND `isPrimaryApp` != 'false' 
    TIMESERIES 1 day 
    FACET consumingAccountName 
    SINCE '2023-02-01 00:00:00' UNTIL '2023-03-01 00:00:00' 
    LIMIT 15
    ```
  </Collapser>

  <Collapser
    id="mobile"
    title="Consulta de monitoreo de uso de móviles"
  >
    ### Consulta general

    Cartelera con comparación con periodo anterior, usuario mensual:

    ```sql
    SELECT SUM(mobileUniqueUsersPerMonth) as usage 
    FROM NrDailyUsage, NrUsage 
    WHERE `productLine` = 'Mobile' AND `usageType` = 'Application' AND `consumingAccountId` = <a href='/docs/accounts/accounts-billing/account-structure/account-id'>YOUR_ACCOUNT_ID</a> 
    TIMESERIES 1 day 
    COMPARE WITH 1 month ago 
    SINCE '2023-02-01 00:00:00' UNTIL '2023-03-01 00:00:00' 
    LIMIT 500
    ```

    Gráfico de tendencias en el período de tiempo, usuario mensual:

    ```sql
    SELECT SUM(mobileUniqueUsersPerMonth) as usage 
    FROM NrDailyUsage, NrUsage 
    WHERE `productLine` = 'Mobile' AND `usageType` = 'Application' AND `consumingAccountId` = <a href='/docs/accounts/accounts-billing/account-structure/account-id'>YOUR_ACCOUNT_ID</a> 
    TIMESERIES 1 day 
    SINCE '2023-02-01 00:00:00' UNTIL '2023-03-01 00:00:00' 
    LIMIT 5
    ```

    ### Consulta detallada

    Uso a lo largo del período, por nombre de aplicación móvil:

    ```sql
    SELECT SUM(mobileUniqueUsersPerMonth) as usage 
    FROM NrDailyUsage, NrUsage 
    WHERE `productLine` = 'Mobile' AND `usageType` = 'Application' AND `consumingAccountId` = <a href='/docs/accounts/accounts-billing/account-structure/account-id'>YOUR_ACCOUNT_ID</a> 
    TIMESERIES 1 day 
    FACET mobileAppName,mobileAppId 
    SINCE '2023-02-01 00:00:00' UNTIL '2023-03-01 00:00:00' 
    LIMIT 500
    ```

    Gráfico de tendencias durante el período de tiempo, por nombre de aplicación móvil:

    ```sql
    SELECT SUM(mobileUniqueUsersPerMonth) as usage 
    FROM NrDailyUsage, NrUsage 
    WHERE `productLine` = 'Mobile' AND `usageType` = 'Application' AND `consumingAccountId` = <a href='/docs/accounts/accounts-billing/account-structure/account-id'>YOUR_ACCOUNT_ID</a> 
    TIMESERIES 1 day 
    FACET mobileAppName 
    SINCE '2023-02-01 00:00:00' UNTIL '2023-03-01 00:00:00' 
    LIMIT 15
    ```
  </Collapser>

  <Collapser
    id="infra"
    title="Consulta de uso de monitoreo de infraestructura"
  >
    Para obtener detalles sobre cómo funcionan los precios basados en CU de infraestructura, consulte [Precios basados en host y CU](#cu-vs-host).

    ### Consulta general

    Cartelera con comparación con el período anterior:

    ```sql
    SELECT rate(SUM(infrastructureComputeUnits), 1 day) as usage 
    FROM NrDailyUsage, NrUsage 
    WHERE `productLine` = 'Infrastructure' AND `usageType` = 'Host' AND `consumingAccountId` = <a href='/docs/accounts/accounts-billing/account-structure/account-id'>YOUR_ACCOUNT_ID</a> 
    COMPARE WITH 1 month ago 
    SINCE '2023-02-01 00:00:00' UNTIL '2023-03-01 00:00:00' 
    LIMIT 500
    ```

    Gráfico de tendencias durante el período de tiempo:

    ```sql
    SELECT SUM(infrastructureComputeUnits) as usage 
    FROM NrDailyUsage, NrUsage 
    WHERE `productLine` = 'Infrastructure' AND `usageType` = 'Host' AND `consumingAccountId` = <a href='/docs/accounts/accounts-billing/account-structure/account-id'>YOUR_ACCOUNT_ID</a> 
    TIMESERIES 1 day 
    SINCE '2023-02-01 00:00:00' UNTIL '2023-03-01 00:00:00' 
    LIMIT 5
    ```

    ### Consulta detallada

    Uso a lo largo del período, por nombre de host del agente:

    ```sql
    SELECT rate(SUM(infrastructureComputeUnits), 1 day) as usage 
    FROM NrDailyUsage, NrUsage 
    WHERE `productLine` = 'Infrastructure' AND `usageType` = 'Host' AND `consumingAccountId` = <a href='/docs/accounts/accounts-billing/account-structure/account-id'>YOUR_ACCOUNT_ID</a>  
    FACET agentHostname 
    SINCE '2023-02-01 00:00:00' UNTIL '2023-03-01 00:00:00' 
    LIMIT 500
    ```

    Gráfico de tendencias durante el período de tiempo, por anfitrión:

    ```sql
    SELECT SUM(infrastructureComputeUnits) as usage 
    FROM NrDailyUsage, NrUsage 
    WHERE `productLine` = 'Infrastructure' AND `usageType` = 'Host' AND `consumingAccountId` = <a href='/docs/accounts/accounts-billing/account-structure/account-id'>YOUR_ACCOUNT_ID</a> 
    TIMESERIES 1 day 
    FACET agentHostname 
    SINCE '2023-02-01 00:00:00' UNTIL '2023-03-01 00:00:00' 
    LIMIT 15
    ```
  </Collapser>

  <Collapser
    id="logs"
    title="Consulta de uso de registros"
  >
    ### Consulta general

    Cartelera con comparación con el período anterior:

    ```sql
    SELECT rate(SUM(usage), 1 day) as usage 
    FROM NrDailyUsage, NrUsage 
    WHERE `productLine` = 'Logs' AND `consumingAccountId` = <a href='/docs/accounts/accounts-billing/account-structure/account-id'>YOUR_ACCOUNT_ID</a> AND `metric` = 'BytesSaved' 
    COMPARE WITH 1 month ago 
    SINCE '2023-02-01 00:00:00' UNTIL '2023-03-01 00:00:00' 
    LIMIT 500
    ```

    Gráfico de tendencias durante el período de tiempo:

    ```sql
    SELECT rate(SUM(usage), 1 day) as usage 
    FROM NrDailyUsage, NrUsage 
    WHERE `productLine` = 'Logs' AND `consumingAccountId` = <a href='/docs/accounts/accounts-billing/account-structure/account-id'>YOUR_ACCOUNT_ID</a> AND `metric` = 'BytesSaved' 
    TIMESERIES 1 day 
    SINCE '2023-02-01 00:00:00' UNTIL '2023-03-01 00:00:00' 
    LIMIT 5
    ```

    ### Consulta detallada

    Uso a lo largo del período de tiempo, por cuenta consumidora:

    ```sql
    SELECT rate(SUM(usage), 1 day) as usage 
    FROM NrDailyUsage, NrUsage 
    WHERE `productLine` = 'Logs' AND `consumingAccountId` = <a href='/docs/accounts/accounts-billing/account-structure/account-id'>YOUR_ACCOUNT_ID</a> AND `metric` = 'BytesSaved' 
    FACET consumingAccountName,consumingAccountId 
    SINCE '2023-02-01 00:00:00' UNTIL '2023-03-01 00:00:00' 
    LIMIT 500
    ```

    Gráfico de tendencias durante el período de tiempo, por cuenta consumidora:

    ```sql
    SELECT rate(SUM(usage), 1 day) as usage 
    FROM NrDailyUsage, NrUsage 
    WHERE `productLine` = 'Logs' AND `consumingAccountId` = <a href='/docs/accounts/accounts-billing/account-structure/account-id'>YOUR_ACCOUNT_ID</a> AND `metric` = 'BytesSaved' 
    TIMESERIES 1 day 
    FACET consumingAccountName 
    SINCE '2023-02-01 00:00:00' UNTIL '2023-03-01 00:00:00' 
    LIMIT 15
    ```
  </Collapser>

  <Collapser
    id="metrics"
    title="Consulta de uso de monitoreo métrico"
  >
    ### Consulta general

    Cartelera con comparación con el período anterior:

    ```sql
    SELECT rate(SUM(usage), 1 minute) as usage 
    FROM NrDailyUsage, NrUsage 
    WHERE `productLine` = 'Metrics' AND `consumingAccountId` = <a href='/docs/accounts/accounts-billing/account-structure/account-id'>YOUR_ACCOUNT_ID</a> AND `metric` = 'DataPointsSent' 
    COMPARE WITH 1 month ago 
    SINCE '2023-02-01 00:00:00' UNTIL '2023-03-01 00:00:00' 
    LIMIT 500
    ```

    Gráfico de tendencias durante el período de tiempo:

    ```sql
    SELECT rate(SUM(usage), 1 minute) as usage 
    FROM NrDailyUsage, NrUsage 
    WHERE `productLine` = 'Metrics' AND `consumingAccountId` = <a href='/docs/accounts/accounts-billing/account-structure/account-id'>YOUR_ACCOUNT_ID</a> AND `metric` = 'DataPointsSent' 
    TIMESERIES 1 day 
    SINCE '2023-02-01 00:00:00' UNTIL '2023-03-01 00:00:00' 
    LIMIT 5
    ```

    ### Consulta detallada

    Uso a lo largo del período de tiempo, por cuenta consumidora:

    ```sql
    SELECT rate(SUM(usage), 1 minute) as usage 
    FROM NrDailyUsage, NrUsage 
    WHERE `productLine` = 'Metrics' AND `consumingAccountId` = <a href='/docs/accounts/accounts-billing/account-structure/account-id'>YOUR_ACCOUNT_ID</a> AND `metric` = 'DataPointsSent'  
    FACET consumingAccountName,consumingAccountId 
    SINCE '2023-02-01 00:00:00' UNTIL '2023-03-01 00:00:00' 
    LIMIT 500
    ```

    Gráfico de tendencias durante el período de tiempo, por cuenta consumidora:

    ```sql
    SELECT rate(SUM(usage), 1 minute) as usage 
    FROM NrDailyUsage, NrUsage 
    WHERE `productLine` = 'Metrics' AND `consumingAccountId` = <a href='/docs/accounts/accounts-billing/account-structure/account-id'>YOUR_ACCOUNT_ID</a> AND `metric` = 'DataPointsSent' 
    TIMESERIES 1 day 
    FACET consumingAccountName 
    SINCE '2023-02-01 00:00:00' UNTIL '2023-03-01 00:00:00' 
    LIMIT 15
    ```
  </Collapser>

  <Collapser
    id="serverless"
    title="Consulta sobre el uso de monitoreo sin servidor"
  >
    ### Consulta general

    Cartelera con comparación con el período anterior:

    ```sql
    SELECT rate(SUM(usage), 1 day) as usage 
    FROM NrDailyUsage, NrUsage 
    WHERE `productLine` = 'Serverless' AND `consumingAccountId` = <a href='/docs/accounts/accounts-billing/account-structure/account-id'>YOUR_ACCOUNT_ID</a> AND `metric` = 'LambdaEventsSaved' 
    COMPARE WITH 1 month ago 
    SINCE '2023-02-01 00:00:00' UNTIL '2023-03-01 00:00:00' 
    LIMIT 500
    ```

    Gráfico de tendencias durante el período de tiempo:

    ```sql
    SELECT rate(SUM(usage), 1 day) as usage 
    FROM NrDailyUsage, NrUsage 
    WHERE `productLine` = 'Serverless' AND `consumingAccountId` = <a href='/docs/accounts/accounts-billing/account-structure/account-id'>YOUR_ACCOUNT_ID</a> AND `metric` = 'LambdaEventsSaved' 
    TIMESERIES 1 day 
    SINCE '2023-02-01 00:00:00' UNTIL '2023-03-01 00:00:00' 
    LIMIT 5
    ```

    ### Consulta detallada

    Uso a lo largo del período de tiempo, por cuenta consumidora:

    ```sql
    SELECT rate(SUM(usage), 1 day) as usage 
    FROM NrDailyUsage, NrUsage 
    WHERE `productLine` = 'Serverless' AND `consumingAccountId` = <a href='/docs/accounts/accounts-billing/account-structure/account-id'>YOUR_ACCOUNT_ID</a> AND `metric` = 'LambdaEventsSaved' 
    FACET consumingAccountName,consumingAccountId 
    SINCE '2023-02-01 00:00:00' UNTIL '2023-03-01 00:00:00' 
    LIMIT 500
    ```

    Gráfico de tendencias durante el período de tiempo, por cuenta consumidora:

    ```sql
    SELECT rate(SUM(usage), 1 day) as usage 
    FROM NrDailyUsage, NrUsage 
    WHERE `productLine` = 'Serverless' AND `consumingAccountId` = <a href='/docs/accounts/accounts-billing/account-structure/account-id'>YOUR_ACCOUNT_ID</a> AND `metric` = 'LambdaEventsSaved' 
    TIMESERIES 1 day 
    FACET consumingAccountName 
    SINCE '2023-02-01 00:00:00' UNTIL '2023-03-01 00:00:00' 
    LIMIT 15
    ```
  </Collapser>

  <Collapser
    id="synthetics"
    title="Consulta de uso de Sintético"
  >
    ### Consulta general

    Cartelera con comparación con el período anterior:

    ```sql
    SELECT rate(SUM(syntheticsSuccessCheckCount + syntheticsFailedCheckCount), 1 day) as usage 
    FROM NrDailyUsage, NrUsage 
    WHERE `productLine` = 'Synthetics' AND `usageType` = 'Check' AND `consumingAccountId` = <a href='/docs/accounts/accounts-billing/account-structure/account-id'>YOUR_ACCOUNT_ID</a> AND `syntheticsTypeLabel` != 'Ping' 
    COMPARE WITH 1 month ago 
    SINCE '2023-02-01 00:00:00' UNTIL '2023-03-01 00:00:00' 
    LIMIT 500
    ```

    Gráfico de tendencias durante el período de tiempo:

    ```sql
    SELECT rate(SUM(syntheticsSuccessCheckCount + syntheticsFailedCheckCount), 1 day) as usage 
    FROM NrDailyUsage, NrUsage 
    WHERE `productLine` = 'Synthetics' AND `usageType` = 'Check' AND `consumingAccountId` = <a href='/docs/accounts/accounts-billing/account-structure/account-id'>YOUR_ACCOUNT_ID</a> AND `syntheticsTypeLabel` != 'Ping' 
    TIMESERIES 1 day 
    SINCE '2023-02-01 00:00:00' UNTIL '2023-03-01 00:00:00' 
    LIMIT 5
    ```

    ### Consulta detallada

    Uso a lo largo del período, por nombre de monitor:

    ```sql
    SELECT rate(SUM(syntheticsSuccessCheckCount + syntheticsFailedCheckCount), 1 day) as usage 
    FROM NrDailyUsage, NrUsage 
    WHERE `productLine` = 'Synthetics' AND `usageType` = 'Check' AND `consumingAccountId` = <a href='/docs/accounts/accounts-billing/account-structure/account-id'>YOUR_ACCOUNT_ID</a> AND `syntheticsTypeLabel` != 'Ping' 
    FACET syntheticsMonitorName,syntheticsMonitorId 
    SINCE '2023-02-01 00:00:00' UNTIL '2023-03-01 00:00:00' 
    LIMIT 500
    ```

    Gráfico de tendencias durante el período de tiempo, por nombre de monitor:

    ```sql
    SELECT rate(SUM(syntheticsSuccessCheckCount + syntheticsFailedCheckCount), 1 day) as usage 
    FROM NrDailyUsage, NrUsage 
    WHERE `productLine` = 'Synthetics' AND `usageType` = 'Check' AND `consumingAccountId` = <a href='/docs/accounts/accounts-billing/account-structure/account-id'>YOUR_ACCOUNT_ID</a> AND `syntheticsTypeLabel` != 'Ping' 
    TIMESERIES 1 day 
    FACET syntheticsMonitorName 
    SINCE '2023-02-01 00:00:00' UNTIL '2023-03-01 00:00:00' 
    LIMIT 15
    ```

    Uso a lo largo del período de tiempo, por etiqueta de tipo:

    ```sql
    SELECT rate(SUM(syntheticsSuccessCheckCount + syntheticsFailedCheckCount), 1 day) as usage 
    FROM NrDailyUsage, NrUsage 
    WHERE `productLine` = 'Synthetics' AND `usageType` = 'Check' AND `consumingAccountId` = <a href='/docs/accounts/accounts-billing/account-structure/account-id'>YOUR_ACCOUNT_ID</a> AND `syntheticsTypeLabel` != 'Ping' 
    FACET syntheticsTypeLabel 
    SINCE '2023-02-01 00:00:00' UNTIL '2023-03-01 00:00:00' 
    LIMIT 500
    ```

    Gráfico de tendencias durante el período de tiempo, por etiqueta de tipo:

    ```sql
    SELECT rate(SUM(syntheticsSuccessCheckCount + syntheticsFailedCheckCount), 1 day) as usage 
    FROM NrDailyUsage, NrUsage 
    WHERE `productLine` = 'Synthetics' AND `usageType` = 'Check' AND `consumingAccountId` = <a href='/docs/accounts/accounts-billing/account-structure/account-id'>YOUR_ACCOUNT_ID</a> AND `syntheticsTypeLabel` != 'Ping' TIMESERIES 1 day 
    FACET syntheticsTypeLabel 
    SINCE '2023-02-01 00:00:00' UNTIL '2023-03-01 00:00:00' 
    LIMIT 15
    ```

    Uso a lo largo del período de tiempo, por ubicación:

    ```sql
    SELECT rate(SUM(syntheticsSuccessCheckCount + syntheticsFailedCheckCount), 1 day) as usage 
    FROM NrDailyUsage, NrUsage 
    WHERE `productLine` = 'Synthetics' AND `usageType` = 'Check' AND `consumingAccountId` = <a href='/docs/accounts/accounts-billing/account-structure/account-id'>YOUR_ACCOUNT_ID</a> AND `syntheticsTypeLabel` != 'Ping' 
    FACET syntheticsLocation 
    SINCE '2023-02-01 00:00:00' UNTIL '2023-03-01 00:00:00' 
    LIMIT 500
    ```

    Gráfico de tendencias durante el período de tiempo, por ubicación:

    ```sql
    SELECT rate(SUM(syntheticsSuccessCheckCount + syntheticsFailedCheckCount), 1 day) as usage 
    FROM NrDailyUsage, NrUsage 
    WHERE `productLine` = 'Synthetics' AND `usageType` = 'Check' AND `consumingAccountId` = <a href='/docs/accounts/accounts-billing/account-structure/account-id'>YOUR_ACCOUNT_ID</a> AND `syntheticsTypeLabel` != 'Ping' 
    TIMESERIES 1 day 
    FACET syntheticsLocation 
    SINCE '2023-02-01 00:00:00' UNTIL '2023-03-01 00:00:00' 
    LIMIT 15
    ```
  </Collapser>

  <Collapser
    id="traces"
    title="Consulta de uso de trazas"
  >
    ### Consulta general

    Cartelera con comparación con el período anterior:

    ```sql
    SELECT rate(SUM(usage), 1 day) as usage 
    FROM NrDailyUsage, NrUsage 
    WHERE `productLine` = 'Traces' AND `consumingAccountId` = <a href='/docs/accounts/accounts-billing/account-structure/account-id'>YOUR_ACCOUNT_ID</a> AND `metric` = 'SpansSaved' 
    COMPARE WITH 1 month ago 
    SINCE '2023-02-01 00:00:00' UNTIL '2023-03-01 00:00:00' 
    LIMIT 500
    ```

    Gráfico de tendencias durante el período de tiempo:

    ```sql
    SELECT rate(SUM(usage), 1 day) as usage 
    FROM NrDailyUsage, NrUsage 
    WHERE `productLine` = 'Traces' AND `consumingAccountId` = <a href='/docs/accounts/accounts-billing/account-structure/account-id'>YOUR_ACCOUNT_ID</a> AND `metric` = 'SpansSaved' 
    TIMESERIES 1 day 
    SINCE '2023-02-01 00:00:00' UNTIL '2023-03-01 00:00:00' 
    LIMIT 5
    ```

    ### Consulta detallada

    Uso a lo largo del período de tiempo, por cuenta consumidora:

    ```sql
    SELECT rate(SUM(usage), 1 day) as usage 
    FROM NrDailyUsage, NrUsage 
    WHERE `productLine` = 'Traces' AND `consumingAccountId` = <a href='/docs/accounts/accounts-billing/account-structure/account-id'>YOUR_ACCOUNT_ID</a> AND `metric` = 'SpansSaved'  
    FACET consumingAccountName,consumingAccountId 
    SINCE '2023-02-01 00:00:00' UNTIL '2023-03-01 00:00:00' 
    LIMIT 500
    ```

    Gráfico de tendencias durante el período de tiempo, por cuenta consumidora:

    ```sql
    SELECT rate(SUM(usage), 1 day) as usage 
    FROM NrDailyUsage, NrUsage 
    WHERE `productLine` = 'Traces' AND `consumingAccountId` = <a href='/docs/accounts/accounts-billing/account-structure/account-id'>YOUR_ACCOUNT_ID</a> AND `metric` = 'SpansSaved' 
    TIMESERIES 1 day 
    FACET consumingAccountName 
    SINCE '2023-02-01 00:00:00' UNTIL '2023-03-01 00:00:00' 
    LIMIT 15
    ```
  </Collapser>
</CollapserGroup>

## APM e infraestructura: unidad de computación vs precios basados en host [#cu-vs-host]

APM ofrece la posibilidad de elegir entre dos modelos de precios: [precios basados en unidades de computación (CU)](#compute-unit) y precios [basados en host](#host-based) . New Relic Infrastructure ofrece solo [precios basados en CU](#compute-unit). Esta sección muestra cómo se calculan ambas opciones y explica qué significa "host" en estos contextos de precios:

<CollapserGroup>
  <Collapser
    id="compute-unit"
    title="Precio de la unidad de computación"
  >
    En nuestro modelo de precios original, los precios basados en CU están disponibles para estos productos New Relic:

    * APM (elección de precios basados en CU o [precios basados en host](#host-based))

    * Infraestructura: solo precios basados en CU

      Con los precios basados en CU, su precio mensual está determinado por el tamaño del [host](#understand) (potencia informática y memoria) que ejecuta New Relic y la cantidad de horas que se conecta a New Relic durante el mes. Si un host está conectado a New Relic en cualquier momento durante una hora, esa hora cuenta para el cálculo de CU.

      Cada anfitrión se cuenta por separado para cada cuenta de New Relic a la que el anfitrión reporta datos. Por ejemplo, si tiene una cuenta principal con dos cuentas secundarias, cada una de las cuales ejecuta una aplicación en el mismo host por 3000 CU en un mes determinado, el uso de la cuenta principal será de 6000 CU.

      Para APM, el precio basado en CU es la mejor opción si tiene muchos recursos informáticos dinámicos basados en la nube. Por este motivo, a veces se hace referencia a los precios basados en CU como <DNT>**cloud pricing**</DNT>.

      Las CU se calculan de la siguiente manera:

      `CUs = (# of CPUs + GBs of RAM) x hours used`

      El tamaño máximo de un host determinado (CPU + GB de RAM) tiene un límite de 16.

      Ejemplos:

    * Si un host tiene 2 núcleos de CPU, 2 GB de RAM y se conecta a New Relic durante una hora (o menos de una hora), consume 4 CU.

    * Si un host tiene 2 núcleos de CPU, 2 GB de RAM y se conecta a New Relic durante un mes completo (se utilizan 750 horas como tamaño mensual estándar), consume 3000 CU.

      Puede comprar bloques de CU para consumir mensualmente. La cantidad total de CU compradas mensualmente se calcula sumando el consumo estimado de CU para todos los hosts durante el mes. No hay transferencia mensual de CU no utilizadas. Además, New Relic no cobra por JVM, contenedor (como docker o Cloud Foundry) o instancia de aplicación; cobra por los hosts que ejecutan esos contenedores o instancia de aplicación.

      Los precios varían según el producto New Relic y el nivel de suscripción.
  </Collapser>

  <Collapser
    id="host-based"
    title="Precios basados en el host"
  >
    <Callout variant="tip">
      Para nuestro modelo de precios original, los precios de APM pueden estar basados en CU o en host, mientras que New Relic Infrastructure utiliza solo [precios basados en CU](#compute-unit).
    </Callout>

    Con precios basados en host, New Relic cobra según la cantidad de <DNT>**equivalent hosts**</DNT> utilizados en un mes. Un <DNT>**equivalent host**</DNT> se define como: un [host](#understand) conectado a New Relic durante 750 horas (750 horas utilizadas como tamaño mensual estándar). Si un host está conectado a New Relic en cualquier momento durante una hora, esa hora cuenta para el cálculo del host.

    Estas horas se pueden dividir entre varios hosts. Por ejemplo, es posible que tenga tres hosts conectados cada uno a New Relic durante 250 horas durante un mes: estas horas sumarían un <DNT>**equivalent host**</DNT>.

    Cada anfitrión se cuenta por separado para cada cuenta de New Relic a la que el anfitrión reporta datos. Por ejemplo, si tiene una cuenta principal con dos cuentas secundarias, cada una de las cuales ejecuta aplicaciones en el mismo host durante 750 horas en un mes determinado, el uso de la cuenta principal será de 2 hosts equivalentes.

    Una vez conectados a New Relic, los anfitriones se distinguen por su nombre de anfitrión único. Un anfitrión se conecta a New Relic cuando el agente lingüístico está activo y se implementa en el anfitrión. New Relic no cobra por contenedor (como docker o Cloud Foundry), JVM o instancia de aplicación; lo cobran los hosts que ejecutan esos contenedores o instancias de aplicaciones.

    New Relic APM le ofrece la posibilidad de elegir entre precios basados en host y [precios basados en CU](#compute-unit). Los precios basados en host son ideales si tiene entornos principalmente estáticos, que consisten en hosts que administra en su propio centro de datos.
  </Collapser>

  <Collapser
    id="understand"
    title="¿Cómo se define un &quot;anfitrión&quot;?"
  >
    Para comprender cómo New Relic calcula tanto [los precios basados en host](#host-based) como [los precios basados en CU](#compute-unit), es importante comprender cómo se usa la palabra <DNT>**host**</DNT> . Un anfitrión puede ser uno de los siguientes:

    * Un <DNT>**physical machine**</DNT> es un dispositivo basado en hardware con recursos físicos dedicados, incluidos memoria, procesamiento y almacenamiento. Cada máquina tiene su propio sistema operativo en el que se ejecuta la aplicación.

    * Una <DNT>**virtual machine**</DNT> (máquina virtual (VM)) es la implementación de software de una máquina física que ejecuta programas como una máquina física. Una o más máquinas virtuales pueden ejecutarse en una máquina física. Cada máquina virtual tiene su propio sistema operativo y recursos asignados a la máquina virtual, como RAM y CPU.

    * Un <DNT>**cloud instance**</DNT> es un tipo de máquina virtual que se ejecuta en la nube pública. En este contexto, la máquina virtual y la instancia de la nube son diferentes de la máquina virtual Java (JVM) y el contenedor.

      Para fines de cálculo de precios de New Relic, un <DNT>**month**</DNT> se define como 750 horas.
  </Collapser>
</CollapserGroup>
