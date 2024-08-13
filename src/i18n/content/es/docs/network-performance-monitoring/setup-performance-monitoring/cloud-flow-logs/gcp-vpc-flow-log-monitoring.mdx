---
title: Configurar el monitoreo del registro de flujo de VPC de Google
tags:
  - Integrations
  - Network monitoring
  - Installation
  - Setup
  - AWS
metaDescription: Set up Amazon VPC Flow Logs monitoring.
freshnessValidatedDate: never
translationType: machine
---

El registro de flujo de nube privada virtual (VPC) de Google Cloud admite la transmisión sin fricciones de registros a New Relic. Con el registro de flujo de VPC de todos sus activos de GCP, puede comprender rápidamente información clave y valiosa para el análisis de rendimiento y la resolución de problemas de conectividad de red.

<img
  title="Google VPC Flow Logs overview"
  alt="Google VPC Flow Logs overview"
  src="/images/network_screenshot-crop_cloud-flow-logs-overview.webp"
/>

<figcaption>
  <DNT>**Add [Google's VPC Flow Logs to your New Relic account](https://one.newrelic.com/nr1-core?&state=bd947742-3034-63b7-7196-8baaf36dd8d9)**</DNT>.
</figcaption>

Google Virtual Private Cloud (VPC) le permite lanzar recursos de GCP en una red virtual aislada y segura con los beneficios de utilizar una infraestructura de GCP escalable.

<ButtonLink
  role="button"
  to="https://one.newrelic.com/nr1-core?&state=bd947742-3034-63b7-7196-8baaf36dd8d9"
  variant="primary"
>
  Agregar registro de flujo de VPC de Google
</ButtonLink>

## Requisitos previos [#prerequisites]

### Requisitos previos New Relic [#prerequisites-NR]

* Una cuenta New Relic . ¿No tienes uno? [¡Registrate gratis!](https://newrelic.com/signup) No se requiere tarjeta de crédito.

### Requisitos previos de GCP [#prerequisites-gcp]

<Callout variant="important">
  El registro de flujo de VPC de Google aún no es compatible con los clientes de FedRAMP. Mientras tanto, puede utilizar [nuestras API de ingesta de FedRAMP](/docs/security/security-privacy/compliance/fedramp-compliant-endpoints#data-ingest-apis).
</Callout>

* Ambiente:

  * Deberías tener acceso a la [CLI de GCloud](https://cloud.google.com/sdk/docs/install) o a la capacidad de implementar plantillas de terraform en tu entorno.
  * Habilite las subredes cuyo tráfico desea enviar a New Relic para recopilar registros de flujo. Vea cómo hacerlo en [la documentación oficial de Google](https://cloud.google.com/vpc/docs/using-flow-logs#enable-logging-existing).

* Permisos:

  * La capacidad de crear un tema de Pub/Sub y establecer sus permisos.
  * La capacidad de crear y actualizar un enrutador log .
  * La capacidad de crear un trabajo de Dataflow.

## Enviar registro adicional de flujo de VPC de Google [#additional-gcp-vpc-flow-logs]

Para enviar el registro de flujo de VPC de Google a New Relic, siga estos pasos:

1. Inicie el <DNT>**[guided install process](https://one.newrelic.com/nr1-core?&state=bd947742-3034-63b7-7196-8baaf36dd8d9)**</DNT>.

2. En el <DNT>**Select an account**</DNT> desplegable, elija la cuenta New Relic a la que desea enviar el registro de flujo de VPC de Google y haga clic en <DNT>**Continue**</DNT>.

3. En la sección <DNT>**Choose Setup Options**</DNT> :

   * En

     <DNT>
       **Setup Method**
     </DNT>

     , puedes optar por utilizar la CLI de GCloud o Terraform para crear recursos en tu cuenta. Terraform puede ser más fácil si ya lo usas en tu entorno de Google.

   * Introduzca el

     <DNT>
       **GCP project ID**
     </DNT>

     desde el que desea ingerir el registro de flujo.

   * En el menú desplegable

     <DNT>
       **Region**
     </DNT>

     , elija una región de GCP. Esta región se utilizará al configurar recursos regionales.

4. <DNT>**Enable Flow Logging**</DNT> - Activar el registro de flujo para una subred. Debe activar el registro de flujo para cada subred de la que desee recopilar el registro de flujo. Puede cambiar esta configuración a través de la CLI, Cloud Console o cualquier otra herramienta de configuración de la nube que utilice su equipo.

   <Callout variant="tip">
     Al configurar el registro de flujo, es posible que desee ajustar la frecuencia de muestreo y el intervalo de agregación. Una tasa de muestreo más alta o un intervalo de agregación más bajo producirán datos más granulares pero tendrán un costo de ingesta de datos más alto.
   </Callout>

5. Definir receptor de registro: configure un enrutador log en Google Cloud Platform (GCP). El enrutador log le permite elegir qué registro de flujo se enviará a New Relic. Puede enviar registros de flujo para una única subred, varias subredes, una VPC completa y más.

6. Si elige <DNT>**GCloud CLI**</DNT> como método de configuración:

   * <DNT>
       **Create Pub/Sub resources**
     </DNT>

     \- Ejecute los comandos generados en la CLI de GCloud para crear un tema y una suscripción de Pub/Sub.

   * <DNT>
       **Create Logging Sink**
     </DNT>

     \- Ejecute el comando generado en la CLI de GCloud para crear su enrutador log .

   * <DNT>
       **Setup up Pub/Sub permissions**
     </DNT>

     \- Ejecute el comando generado para obtener la identidad del escritor asociada con su enrutador log . Copie el resultado del comando y péguelo en el siguiente cuadro de texto. Luego, ejecute los siguientes dos comandos para modificar los permisos de su tema Pub/Sub para permitir el acceso desde el enrutador log .

   * <DNT>
       **Create Dataflow job**
     </DNT>

     \- Ejecute el comando generado para crear un trabajo de flujo de datos, que reúne varios flujos y los envía a New Relic en lotes grandes. Esto le ayuda a ahorrar dinero y evitar límites de tarifas.

   <Callout variant="tip">
     Generamos automáticamente un nuevo <InlinePopover type="licenseKey"/>que se utilizará para esta ingesta de datos. Para regenerar una clave, haga clic en <DNT>**Generate and use a new key**</DNT>.
   </Callout>

7. Si elige <DNT>**Terraform**</DNT> como método de configuración:

   * <DNT>
       **Run Terraform template**
     </DNT>

     \- implementar la plantilla Terraform proporcionada en su proyecto GCP para crear todos los recursos necesarios para enviar el registro de flujo de VPC a New Relic.

8. [Visualice los datos de rendimiento de su red en New Relic](/docs/network-performance-monitoring/monitoring-network-data/visualize-network-data).

## Actualizar una integración existente \[#]

Si ya comenzó a enviar algún registro de flujo de VPC de Google a New Relic desde algunas de sus subredes, pero desea enviar más o menos registros de flujo de VPC:

1. Asegúrese de que las subredes nuevas tengan habilitado el registro de flujo en Google Cloud Platform (GCP).

2. Actualice el

   <DNT>
     **Log Router**
   </DNT>

   que creó cuando definió

   <DNT>
     **Logging Sink**
   </DNT>

   , para que su [condición de filtro](https://cloud.google.com/logging/docs/view/logging-query-language) capture el nuevo conjunto de registros de flujo de VPC que desea enviar a New Relic.

   <Callout variant="tip">
     En el [proceso de instalación guiada](https://one.newrelic.com/marketplace?duration=1800000&state=00731ead-620f-4a71-b1fa-b4fc6af24fca), puede encontrar algunos ejemplos de cómo podrían verse las condiciones del filtro. Si su entorno es complejo, es posible que deba ajustar estas condiciones según sea necesario.
   </Callout>

<InstallFeedback/>
