---
title: Integración del monitoreo de Azure Cost Management
tags:
  - Integrations
  - Microsoft Azure integrations
  - Azure integrations list
metaDescription: 'New Relic''s Microsoft Azure Cost Management integration: what data it reports and how to enable it.'
freshnessValidatedDate: never
translationType: machine
---

[La integración de New Relic](/docs/infrastructure/integrations-getting-started/getting-started/introduction-infrastructure-integrations) incluye una integración para informar sus datos [Microsoft Azure Cost Management](https://docs.microsoft.com/en-us/azure/cost-management/) a New Relic. Aquí te explicamos cómo activar la integración y qué datos recopila.

## Característica

La integración de Azure Cost Management de New Relic recopila sus gastos mensuales acumulados para los recursos de Azure en su suscripción, agrupados por servicio, ubicación, grupo de recursos o etiqueta.

Nuestra integración le permite rastrear cómo evolucionan los costos para cada período de facturación y detectar tendencias inesperadas, o alertar sobre los costos acumulados para el período de facturación actual.

## Activar la integración [#requirements]

Siga los procedimientos estándar para [activar su servicio Azure en New Relic](/docs/infrastructure/microsoft-azure-integrations/getting-started/activate-azure-integrations).

En algunos casos, la integración de Azure Cost Management requiere que agregue un rol adicional para recuperar datos de facturación:

1. En la sección

   <DNT>
     **Subscriptions**
   </DNT>

   de Azure Portal, seleccione la suscripción que desea New Relic monitor.

2. Seleccione

   <DNT>
     **Access control (IAM) > Add**
   </DNT>

   .

3. En el menú desplegable

   <DNT>
     **Role**
   </DNT>

   , seleccione

   <DNT>
     **Billing Reader**
   </DNT>

   .

4. En el menú desplegable

   <DNT>
     **Select**
   </DNT>

   , seleccione el nombre de la aplicación; por ejemplo, `NewRelic-Integrations`.

5. Desde

   <DNT>
     **Selected members**
   </DNT>

   , verifica que aparezca el nombre de tu aplicación y luego selecciona

   <DNT>
     **Save**
   </DNT>

   .

## Configuración y sondeo [#polling]

Puede cambiar la frecuencia de sondeo y filtrar datos usando [las opciones de configuración](/docs/integrations/new-relic-integrations/getting-started/configure-polling-frequency-data-collection-cloud-integrations).

Información [de sondeo](/docs/infrastructure/microsoft-azure-integrations/azure-integrations-list/azure-polling-intervals-infrastructure-integrations) predeterminada para la integración de Azure Cost Management:

* Frecuencia de sondeo predeterminada: 1 hora
* Frecuencia máxima de sondeo recomendada: 1 hora
* Resolución: 1 día

## Buscar y utilizar datos [#find-and-use]

Para encontrar sus datos de integración, vaya a <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Infrastructure > Azure**</DNT> y busque la integración.

Puedes [consultar y explorar tus datos](/docs/using-new-relic/data/understand-data/query-new-relic-data) utilizando el tipo de evento `AzureCostManagementSample` . El valor de metadatos `provider` indica cómo se agrupa el costo diario:

* `AzureCostLocation`: Los costos se agrupan por ubicación.
* `AzureCostService`: Los costos están agrupados por servicios en la nube.
* `AzureCostResourceGroup`: Los costos se agrupan por grupo de recursos.
* `AzureCostTag`: Los costos se agrupan por una etiqueta de recurso, indicada en los metadatos `label.<tag_key>` del mismo evento. No se recopilarán recursos no etiquetados. Para recopilar costos agrupados por etiqueta, especifique la clave de etiqueta en la configuración de integración.

Los costos son estimaciones, ya que Microsoft puede realizar actualizaciones de los datos de costos hasta que se genere la factura para el período de facturación. Para obtener el valor más preciso del costo acumulado en el período de facturación, use la [función`max()` ](/docs/insights/nrql-new-relic-query-language/nrql-reference/nrql-syntax-components-functions#func-max)en su consulta NRQL .

## Datos del evento [#metrics]

Aquí están las métricas y metadatos reportados por la integración Azure Cost Management. Para obtener más información sobre cómo se estructuran los datos y se informan a New Relic, consulte [Comprender y utilizar los datos de integración](/docs/infrastructure/integrations-getting-started/getting-started/understand-integration-data-data-types#metric).

<table>
  <thead>
    <tr>
      <th style={{ width: "290px" }}>
        Métrica
      </th>

      <th>
        Descripción
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `currency`
      </td>

      <td>
        `USD`
      </td>
    </tr>

    <tr>
      <td>
        `cost`
      </td>

      <td>
        Monto gastado para el día del evento.
      </td>
    </tr>
  </tbody>
</table>
