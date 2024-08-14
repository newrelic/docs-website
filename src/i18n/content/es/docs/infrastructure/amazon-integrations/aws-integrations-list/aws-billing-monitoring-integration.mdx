---
title: Integración del monitoreo de facturación AWS
tags:
  - Integrations
  - Amazon integrations
  - AWS integrations list
metaDescription: 'New Relic''s AWS Billing integration: what data it reports and how to enable it.'
freshnessValidatedDate: never
translationType: machine
---

[La integración New Relic Infrastructure ](/docs/infrastructure/integrations-getting-started/getting-started/introduction-infrastructure-integrations)incluye una integración para informar sus datos de facturación AWS a New Relic. Este documento explica cómo activar esta integración y describe los datos que se pueden reportar.

## Característica [#features]

New Relic AWS La integración de facturación de recopila datos financieros para todas sus aplicaciones y AWS cuentas , y luego los agrupa para que a los equipos les resulte más fácil obtener visibilidad de costos. Esta integración recopila datos de diferentes subcuentas y servicios, y también evalúa sus [presupuestos AWS ](http://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/budgets-managing-costs.html)en términos de gasto real y gasto previsto.

Estos datos financieros se dividen en el siguiente panel:

* Dashboard facturación (costos)
* Dashboard facturación (presupuestos)

## Requisitos [#requirements]

Antes de [habilitar los presupuestos de AWS](#configure-budget), debe:

* Configure un presupuesto de AWS a través de la consola de AWS para que New Relic recopile datos de facturación de AWS.

* Habilite la casilla de verificación

  <DNT>
    **Receive Billing Alerts**
  </DNT>

  en

  <DNT>
    **AWS console > Billing and cost management > Billing preferences**
  </DNT>

  . Esto es necesario para que Amazon informe las tarifas de uso a través de CloudWatch. No es necesario que reciba alertas de AWS.

<Callout variant="important">
  Solo necesita habilitar la casilla de verificación <DNT>**Receive Billing Alerts**</DNT> para acceder al dashboard de Facturación (Costos).
</Callout>

## Activar la integración [#activate]

Para habilitar esta integración, siga los procedimientos estándar para [conectar los servicios de AWS a New Relic](/docs/infrastructure/infrastructure-integrations/getting-started/connect-aws-integrations-infrastructure).

## Habilite los presupuestos de AWS [#configure-budget]

Habilitar los presupuestos de AWS permite a New Relic capturar el consumo de servicios, así como información de uso y costos para los presupuestos que configuró en AWS.

<Callout variant="tip">
  Si **no** ha creado una función en AWS, siga el procedimiento para [conectar AWS a New Relic](/docs/infrastructure/infrastructure-integrations/getting-started/connect-aws-integrations-infrastructure#connect) antes de configurar una política de presupuesto.
</Callout>

1. Desde la consola de administración de AWS, seleccione <DNT>**Services > IAM > Roles**</DNT>.

2. Seleccione el rol que ha configurado para New Relic y luego seleccione <DNT>**Permissions**</DNT>.

3. En la pestaña <DNT>**Inline policy**</DNT> del rol seleccionado, seleccione expandir <Icon name="fe-chevron-down"/> si ya existe uno, o seleccione la opción para agregar una nueva política en línea al rol.

4. Seleccione la opción para agregar una política personalizada.

5. Ingrese un nuevo nombre de política personalizada; por ejemplo, NewRelicBudget.

6. Introduzca la siguiente declaración de permiso en <DNT>**Policy Document**</DNT>:

   ```
   {
     "Version": "2012-10-17",
     "Statement": [
       {
         "Effect": "Allow",
         "Action": [
           "budgets:ViewBudget"
         ],
         "Resource": "*"
       }
     ]
   }
   ```

7. Guarde sus cambios.

<Callout variant="tip">
  Si está configurando New Relic para obtener datos [de presupuestos de AWS](http://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/budgets-managing-costs.html) de una cuenta de miembro de AWS, asegúrese de que el propietario de la cuenta haya [activado el acceso de usuario de IAM a la consola de administración de costos y facturación](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/grantaccess.html).
</Callout>

## Buscar y utilizar datos [#find-data]

Para encontrar sus datos de integración en la UI de infraestructura, vaya a <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Infrastructure > AWS**</DNT> y seleccione uno de los enlaces de integración de facturación AWS .

Para obtener información general sobre cómo buscar y utilizar datos de integración, consulte [Comprender los datos de integración](/docs/infrastructure/integrations/find-use-infrastructure-integration-data).

Los datos se adjuntan al [tipo de evento](/docs/data-apis/understand-data/new-relic-data-types/#event-data) `FinanceSample` . Ese tipo de evento puede tener cuatro valores `provider` diferentes, según el tipo de datos de facturación:

* [Presupuestos](#billing-budget)
* [Gastos de servicios de AWS](#billing-service-cost)
* [Gastos agregados de cuenta y subcuenta](#billing-account-cost)
* [Datos de cuenta/subcuenta no agregados y gastos de servicios de AWS no agregados](#billing-account-service)

A continuación se detallan estos tipos de datos de facturación y cómo consultarlos:

<CollapserGroup>
  <Collapser
    id="billing-budget"
    title="Presupuestos"
  >
    Los datos del proveedor `BillingBudget` están relacionados con los presupuestos de AWS. Estos datos le permiten monitor:

    * Dinero gastado en un presupuesto

    * Límites que estableces para cada presupuesto

    * Gastos previstos

      Puede configurar presupuestos basados en el uso o gasto, en diferentes monedas o para un período de tiempo mensual, trimestral o anual. Los presupuestos son una gran herramienta para monitor y controlar los costos y aprovechar el modelo predictivo AWS para ver los costos pronosticados.

      <DNT>**NRQL example**</DNT>: Para obtener una tabla de diferentes presupuestos con gasto real, pronóstico, límites y uso versus costo monetario, ejecute la siguiente consulta NRQL:

      ```
      SELECT latest(`provider.budgetType`) as 'Budget Type',
      	max(`provider.actualAmount`) as 'Actual Amount',
      	max(`provider.limitAmount`) as 'Budget Limit',
      	latest(`provider.forecastedAmount`) as 'Forecast' 
      FROM FinanceSample 
      WHERE provider='BillingBudget' 
      AND providerAccountId = 'NEW_RELIC_ID_FOR_YOUR_CLOUD_ACCOUNT' 
      FACET `provider.budgetName` 
      SINCE 1 day ago
      ```

      <Callout variant="tip">
        El `providerAccountId` es el ID de tu cuenta de servicios en la nube en New Relic. Puedes encontrarlo en <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Infrastructure > AWS**</DNT>, al lado de <DNT>**Provider account**</DNT>.
      </Callout>
  </Collapser>

  <Collapser
    id="billing-service-cost"
    title="Costos de servicio agregados"
  >
    Los datos almacenados en el proveedor `BillingServiceCost` se agregan para los costos de servicio y contienen los datos más recientes y más recientes para todos los costos de servicios de AWS en todas las cuentas registradas.

    <Callout variant="tip">
      Si ha configurado varias cuentas de AWS, New Relic recomienda filtrar por cada cuenta con el atributo `providerAccountName` o `providerAccountId`.
    </Callout>

    <DNT>**NRQL example**</DNT>: Para agrupar proveedores por nombres de servicios, ejecute la siguiente consulta NRQL:

    ```
    SELECT latest(`provider.estimatedCharges.Maximum`) 
    FROM FinanceSample  
    WHERE provider='BillingServiceCost' 
    AND providerAccountId = 'NEW_RELIC_ID_FOR_YOUR_CLOUD_ACCOUNT' 
    SINCE 1 day ago 
    FACET `provider.serviceName` 
    LIMIT 20
    ```

    <Callout variant="tip">
      El `providerAccountId` es el ID de tu cuenta de servicios en la nube en New Relic. Puedes encontrarlo en <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Infrastructure > AWS**</DNT>, al lado de <DNT>**Provider account**</DNT>.
    </Callout>
  </Collapser>

  <Collapser
    id="billing-account-cost"
    title="Costos agregados de cuenta/subcuenta"
  >
    El proveedor `BillingAccountCost` almacena datos agregados para la cuenta y la subcuenta que contienen el agregado de datos financieros más reciente y reciente. Tenga en cuenta que si tiene muchas Cuentas de AWS configuradas se recomienda filtrar por cada cuenta con el atributo `providerAccountName` o `providerAccountId`.

    <DNT>**NRQL example**</DNT>: Para agrupar proveedores por nombres de cuentas, ejecute la siguiente consulta NRQL:

    ```
    SELECT latest(`provider.estimatedCharges.Maximum`) 
    FROM FinanceSample  
    WHERE provider='BillingAccountCost' 
    AND providerAccountId = 'NEW_RELIC_ID_FOR_YOUR_CLOUD_ACCOUNT' 
    SINCE 1 day ago 
    FACET `provider.accountId` 
    LIMIT 20
    ```

    <Callout variant="tip">
      El `providerAccountId` es el ID de tu cuenta de servicios en la nube en New Relic. Puedes encontrarlo en <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Infrastructure > AWS**</DNT>, al lado de <DNT>**Provider account**</DNT>.
    </Callout>
  </Collapser>

  <Collapser
    id="billing-account-service"
    title="Costos desagregados de cuenta/subcuenta y servicios de AWS"
  >
    El proveedor `BillingAccountServiceCost` contiene datos no agregados que se pueden filtrar por ID de cuenta AWS o nombre de servicios de AWS.

    <DNT>**NRQL example**</DNT>: Para comprender la división de costos de los servicios de AWS para un ID de cuenta de AWS en particular, ejecute la siguiente consulta NRQL:

    ```
    SELECT latest(`provider.estimatedCharges.Maximum`) 
    FROM FinanceSample 
    WHERE provider='BillingAccountServiceCost' 
    AND providerAccountId = 'NEW_RELIC_ID_FOR_YOUR_CLOUD_ACCOUNT' 
    SINCE 1 day ago 
    FACET `provider.serviceName`
    LIMIT 100
    ```

    <DNT>**NRQL example**</DNT>: Para comprender la división de costos de las cuentas de AWS para su servicio AWS EC2, ejecute la siguiente consulta NRQL:

    ```
    SELECT latest(`provider.estimatedCharges.Maximum`) 
    	FROM FinanceSample 
    	WHERE provider='BillingAccountServiceCost' 
    	AND providerAccountId = 'NEW_RELIC_ID_FOR_YOUR_CLOUD_ACCOUNT' 
    	AND `provider.serviceName`='AmazonEC2' 
    	FACET `provider.accountId` 
    	SINCE 1 day ago 
    	LIMIT 100
    ```

    <Callout variant="tip">
      El `providerAccountId` es el ID de tu cuenta de servicios en la nube en New Relic. Puedes encontrarlo en <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Infrastructure > AWS**</DNT>, al lado de <DNT>**Provider account**</DNT>.
    </Callout>
  </Collapser>
</CollapserGroup>

## Configuración y sondeo [#polling]

Puede cambiar la frecuencia de sondeo y filtrar datos usando [las opciones de configuración](/docs/integrations/new-relic-integrations/getting-started/configure-polling-frequency-data-collection-cloud-integrations).

Información [de sondeo predeterminada](/docs/infrastructure/amazon-integrations/aws-integrations-list/aws-polling-intervals-infrastructure-integrations) para la integración de facturación de AWS:

* New Relic intervalo de sondeo: 1 hora
* Intervalo de datos de Amazon CloudWatch: 4 horas

## Datos métricos [#metrics]

La New Relic Infrastructure AWS integración de facturación recopila los siguientes datos métricos:

<table>
  <thead>
    <tr>
      <th style={{ width: "250px" }}>
        <DNT>
          **Data**
        </DNT>
      </th>

      <th>
        <DNT>
          **Description**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        AWS Facturación métrica
      </td>

      <td>
        `EstimatedCharges`: Los cargos estimados por su uso de AWS. Pueden ser cargos estimados para un servicio o una acumulación de cargos estimados para todos los servicios. La moneda es USD.
      </td>
    </tr>

    <tr>
      <td>
        AWS Presupuestos métricos
      </td>

      <td>
        * `actualAmount`: El costo o uso real al que se realiza un seguimiento mediante un presupuesto.
        * `limitAmount`: La cantidad total de costo o uso que desea rastrear con un presupuesto como límite superior.
        * `forecastedAmount`: El costo o uso previsto al que se realiza un seguimiento mediante un presupuesto.
      </td>
    </tr>
  </tbody>
</table>

## Otros datos del sistema [#attributes]

La integración de facturación AWS también recoge el siguiente [atributo](/docs/accounts-partnerships/education/getting-started-new-relic/glossary#attribute):

<table>
  <thead>
    <tr>
      <th style={{ width: "250px" }}>
        <DNT>
          **Attributes**
        </DNT>
      </th>

      <th>
        <DNT>
          **Description**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Atributo de facturación AWS
      </td>

      <td>
        * `Service Name`: El nombre de los servicios de AWS. Esta dimensión se omite para el total de cargos estimados en todos los servicios.
        * `Linked Account`: El número de cuenta vinculado.
      </td>
    </tr>

    <tr>
      <td>
        Atributo de presupuestos AWS
      </td>

      <td>
        * `budgetName`: El nombre de un presupuesto. Único dentro de las cuentas
        * `budgetType`: si el presupuesto rastrea el costo monetario o el uso
      </td>
    </tr>
  </tbody>
</table>
