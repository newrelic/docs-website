---
title: Registro de reenvío desde Google Cloud Platform
tags:
  - Logs
  - Enable log management in New Relic
  - Enable log monitoring in New Relic
  - GCP
  - Dataflow
metaDescription: 'Configure New Relic logging for a Google Cloud Platform Pub/Sub topic, so you can use enhanced log management capabilities.'
freshnessValidatedDate: never
translationType: machine
---

Admitimos dos métodos diferentes para reenviar su registro desde un tema Pub/Sub Google Cloud Platform a New Relic.

## Seleccione una opción [#gcp-options]

Lo siguiente puede ayudarle a decidir qué opción es mejor para las necesidades de su negocio.

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        Opciones de reenvío de registros de GCP
      </th>

      <th>
        Consideraciones
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        API sin encabezado
      </td>

      <td>
        * Es más adecuado para volúmenes log bajos, ya que realiza una llamada API para cada log que envía.
        * No genera ningún costo adicional a tu suscripción a GCP.
        * Si su volumen log aumenta, esta solución podría alcanzar los límites de cuota de su cuenta New Relic .
      </td>
    </tr>

    <tr>
      <td>
        Trabajo de flujo de datos
      </td>

      <td>
        * Es más adecuado para volúmenes log más grandes, ya que agrupa log en lotes antes de enviarlos a New Relic.
        * Reduce la cantidad de llamadas API y le permite reducir el uso de su cuota.
        * Puede generar costos adicionales en tu suscripción a GCP, debido a la ejecución de un trabajo de Dataflow en tus instalaciones.
      </td>
    </tr>
  </tbody>
</table>

## Utilice API sin encabezado [#gcp-headerless-api]

Para enviar su registro de GCP a New Relic utilizando nuestra API sin encabezado:

<CollapserGroup>
  <Collapser
    id="ingest-url"
    title="1. Genere una URL de ingesta de GCP Pub/Sub."
  >
    Comience creando una URL de ingesta para su tema de GCP Pub/Sub:

    1. Vaya a la [UI<DNT>**Integrations & Agents**</DNT> ](https://one.newrelic.com/marketplace), haga clic en <DNT>**Logging**</DNT> y haga clic en <DNT>**Google Cloud Platform**</DNT>.

    2. Seleccione la cuenta New Relic a la que desea reenviar el registro y haga clic en <DNT>**Continue**</DNT>.

    3. Opcional: configure metadatos (pares attribute-value) para que se incluyan en cada registro de eventos enviado a la URL de ingesta que generará en el siguiente paso.

    4. Haga clic en <DNT>**Generate URL**</DNT>.

    5. Copie su <DNT>**ingest URL**</DNT> recién generado y guárdelo en un lugar seguro.

       Utilizará su nueva URL de ingesta para configurar un tema de Pub/Sub que envíe el registro a New Relic.
  </Collapser>

  <Collapser
    id="create-gcp-topic"
    title="2. Cree un tema de publicación/subscripción de GCP."
  >
    A continuación, creará el tema de GCP Pub/Sub que utilizará su URL de ingesta.

    <img
      title="Create GCP topic"
      alt="Create GCP topic"
      src="/images/logs_screenshot-full_GCP-logs-create-topic.webp"
    />

    1. Navegue hasta la [consola GCP Pub/Sub](https://console.cloud.google.com/cloudpubsub/topic/list).

    2. Haga clic en

       <DNT>
         **Create Topic**
       </DNT>

       .

    3. Ingrese un

       <DNT>
         **Topic ID**
       </DNT>

       significativo y luego configure otras opciones según sea necesario.

    4. Haga clic en

       <DNT>
         **Create Topic**
       </DNT>

       .
  </Collapser>

  <Collapser
    id="configure-gcp-log-forwarding"
    title="3. Prepare el tema de publicación/subscripción de GCP para reenviar el registro a New Relic."
  >
    Una vez que hayas creado tu tema de Pub/Sub, crea una suscripción para él.

    <img
      title="Create GCP Pub/Sub topic subscription"
      alt="Create GCP Pub/Sub topic subscription"
      src="/images/logs_screenshot-crop_GCP-create-subscription.webp"
    />

    1. Regrese a la [consola de GCP Pub/Sub](https://console.cloud.google.com/cloudpubsub/topic/list).

    2. Haga clic en el [tema de Pub/Sub](#create-gcp-topic) que creó anteriormente.

    3. Desplácese hacia abajo y seleccione la pestaña <DNT>**Subscriptions**</DNT> , luego haga clic en <DNT>**Create Subscription**</DNT> y seleccione <DNT>**Create a simple subscription**</DNT>.

       <img
         title="Select GCP Pub/Sub topic subscription type"
         alt="Select GCP Pub/Sub topic subscription type"
         src="/images/logs_screenshot-crop_GCP-create-subscription-type.webp"
       />

    4. Introduzca un <DNT>**Subscription ID**</DNT>. Luego, en <DNT>**Delivery Type**</DNT>, seleccione <DNT>**Push**</DNT>.

    5. En el campo <DNT>**Endpoint URL**</DNT> , pegue la [URL de ingesta](#ingest-url) que generó anteriormente.

    6. Configure las opciones restantes según sea necesario y haga clic en <DNT>**Create**</DNT>.
  </Collapser>

  <Collapser
    id="forward-logs"
    title="4. Cree un receptor de enrutamiento para reenviar el registro a New Relic."
  >
    Para finalizar la configuración, cree un receptor de enrutamiento para su tema de GCP Pub/Sub que reenviará su registro a New Relic.

    <img
      title="Create GCP Pub/Sub logs router sink"
      alt="Create GCP Pub/Sub logs router sink"
      src="/images/logs_screenshot-crop_GCP-create-sink.webp"
    />

    1. Navegue hasta la [consola del enrutador del registro de GCP](https://console.cloud.google.com/logs/router).

    2. Haga clic en

       <DNT>
         **Create Sink**
       </DNT>

       .

    3. Introduzca un

       <DNT>
         **Sink name**
       </DNT>

       y

       <DNT>
         **Sink description**
       </DNT>

       , luego haga clic en

       <DNT>
         **Next**
       </DNT>

       .

    4. En

       <DNT>
         **Select sink service**
       </DNT>

       , seleccione

       <DNT>
         **Cloud Pub/Sub topic**
       </DNT>

       y seleccione el [tema de Pub/Sub](#create-gcp-topic) que creó anteriormente.

    5. Configure los filtros restantes según sea necesario y luego haga clic en

       <DNT>
         **Create sink**
       </DNT>

       para completar la configuración.
  </Collapser>
</CollapserGroup>

## Usar trabajo de flujo de datos [#gcp-dataflow]

Para enviar su registro de GCP a New Relic mediante un trabajo de Dataflow, utilizará nuestra plantilla de Dataflow. Antes de comenzar, asegúrese de tener las siguientes herramientas en su computadora local:

* Una terminal Unix para Linux o macOS
* [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
* [JavaJDK 8](https://adoptopenjdk.net/index.html)
* [Apache Maven 3.2 o superior](https://maven.apache.org/). Hemos visto versiones anteriores fallar durante el proceso de compilación.
* El [SDKGoogle Cloud ](https://cloud.google.com/sdk/docs/install), que incluye herramientas de línea de comando `gcloud` y `gsutil`

<CollapserGroup>
  <Collapser
    id="dataflow-login-gcp"
    title="1. log en su cuenta Google Cloud Platform ."
  >
    Ejecute el siguiente comando y siga el símbolo para log en GCP y seleccionar su proyecto en la nube:

    ```bash
    gcloud init
    ```

    Con el asistente, seleccionará un proyecto en la nube para usar y, opcionalmente, podrá seleccionar una región y zona de cálculo predeterminadas para los recursos que cree usando `gcloud` o `gsutil`. No asumiremos un proyecto, ubicación o región predeterminados para los siguientes comandos.
  </Collapser>

  <Collapser
    id="dataflow-repo"
    title="2. Clonar el repositorio GitHub de DataflowTemplates."
  >
    1. Clona el repositorio GitHub de DataflowTemplates usando el siguiente comando:

       ```bash
       git clone https://github.com/newrelic-forks/DataflowTemplates.git
       ```

    2. Ingrese al directorio que acaba de crear:

       ```bash
       cd DataflowTemplates
       ```

       Luego continúe con la siguiente sección para ejecutar comandos adicionales.
  </Collapser>

  <Collapser
    id="dataflow-configuration"
    title="3. Compile y ejecute el reenviador de flujo de datos."
  >
    Para establecer la configuración requerida para compilar y ejecutar el reenviador de Dataflow, ejecute los siguientes comandos en su directorio `DataflowTemplates` . Los únicos valores requeridos son:

    * `PROJECT_ID`

    * `BUCKET_NAME`

    * `NR_LICENSE_KEY`

    * `INPUT_SUBSCRIPTION_NAME`

      Puede dejar los demás valores predeterminados como están.

      ```ini
      # The Google Cloud Platform project id where your logs are and where the Dataflow log forwarder will run
      PROJECT_ID=<your_project_id>
      # Temporary bucket that will store intermediary files as a result of compiling the Dataflow template. Its name must be unique.
      BUCKET_NAME=<a_nonexisting_gcs_bucket_name>
      # New Relic license key
      NR_LICENSE_KEY=<your_newrelic_license_key>
      # Input PubSub subscription to read logs from
      INPUT_SUBSCRIPTION_NAME=<your_pubsub_input_subscription_name>

      # Region where the created resources will be placed
      REGION=us-west1
      # Service account used to execute the Dataflow template
      SERVICE_ACCOUNT_NAME=nr-dataflow-forwarder-sa
      # File name where the service account credentials will be stored
      SERVICE_ACCOUNT_KEY_FILENAME=service-account-key.json
      # The name your Dataflow log forwarder job will have
      JOB_NAME=nr-log-forwarder
      ```
  </Collapser>

  <Collapser
    id="dataflow-bucket"
    title="4. Cree un depósito de GCP para la plantilla de flujo de datos."
  >
    Cree un depósito en GCP para contener la plantilla de flujo de datos generada ejecutando el siguiente comando:

    ```bash
    gsutil mb -p ${PROJECT_ID} -l ${REGION} gs://${BUCKET_NAME}
    ```
  </Collapser>

  <Collapser
    id="dataflow-account"
    title="5. Cree una cuenta de servicio."
  >
    Ejecute los siguientes comandos:

    1. Cree la cuenta de servicio:

       ```bash
       gcloud iam service-accounts create ${SERVICE_ACCOUNT_NAME}
       ```

    2. Otorgar permisos a la cuenta de servicio:

       ```bash
       gcloud projects add-iam-policy-binding ${PROJECT_ID} --member="serviceAccount:${SERVICE_ACCOUNT_NAME}@${PROJECT_ID}.iam.gserviceaccount.com" --role="roles/owner"
       ```

    3. Genere el archivo de clave de cuenta de servicio:

       ```bash
       gcloud iam service-accounts keys create ${SERVICE_ACCOUNT_KEY_FILENAME} --iam-account=${SERVICE_ACCOUNT_NAME}@${PROJECT_ID}.iam.gserviceaccount.com
       ```

    4. Haga referencia al archivo de clave de su cuenta de servicio utilizando la variable de entorno `GOOGLE_APPLICATION_CREDENTIALS` , ya que la utilizarán los comandos posteriores:

       ```bash
       export GOOGLE_APPLICATION_CREDENTIALS=${SERVICE_ACCOUNT_KEY_FILENAME}
       ```
  </Collapser>

  <Collapser
    id="dataflow-compile"
    title="6. Compile y publique la plantilla PubsubToNewRelic."
  >
    Ejecute el siguiente comando:

    ```bash
    mvn compile exec:java \
        -Dexec.mainClass=com.google.cloud.teleport.templates.PubsubToNewRelic \
        -Dexec.cleanupDaemonThreads=false \
        -Dexec.args=" \
            --project=${PROJECT_ID} \
            --region=${REGION} \
            --enableStreamingEngine \
            --stagingLocation=gs://${BUCKET_NAME}/staging/ \
            --gcpTempLocation=gs://${BUCKET_NAME}/temp/ \
            --templateLocation=gs://${BUCKET_NAME}/template/PubsubToNewRelic \
            --runner=DataflowRunner \
        "
    ```
  </Collapser>

  <Collapser
    id="dataflow-job"
    title="7. Ejecute la plantilla como un trabajo de Dataflow."
  >
    Ejecute el siguiente comando para comenzar a enviar el registro usando un trabajo de Dataflow que lee desde su tema de Pub/Sub:

    ```bash
    gcloud dataflow jobs run ${JOB_NAME} \
        --gcs-location=gs://${BUCKET_NAME}/template/PubsubToNewRelic \
        --region=${REGION} \
        --parameters "inputSubscription=projects/${PROJECT_ID}/subscriptions/${INPUT_SUBSCRIPTION_NAME},licenseKey=${NR_LICENSE_KEY}"
    ```

    Este comando solo requiere estos dos valores:

    * La entrada PubSub suscripción utilizada para leer el mensaje de registro

    * La New Relic

      <InlinePopover type="licenseKey"/>

      usada para enviar tu registro

    <CollapserGroup>
      <Collapser
        id="eu-customers-gcp-dataflow"
        title="Cuentas de la región europea"
      >
        Las cuentas europeas también deben agregar el parámetro `logsApiUrl` con `https://log-api.eu.newrelic.com/log/v1` como valor.

        ```bash
        gcloud dataflow jobs run ${JOB_NAME} \
            --gcs-location=gs://${BUCKET_NAME}/template/PubsubToNewRelic \
            --region=${REGION} \
            --parameters "inputSubscription=projects/${PROJECT_ID}/subscriptions/${INPUT_SUBSCRIPTION_NAME},licenseKey=${NR_LICENSE_KEY},logsApiUrl=https://log-api.eu.newrelic.com/log/v1"
        ```
      </Collapser>
    </CollapserGroup>

    <Callout variant="tip">
      Para otros valores, el comando utiliza ajustes de configuración predeterminados que puede [personalizar aún más según sea necesario](#dataflow-config).
    </Callout>
  </Collapser>

  <Collapser
    id="dataflow-config"
    title="8. Opcional: ajuste su trabajo de reenviador de registros de Dataflow."
  >
    A continuación se incluye una referencia de las opciones disponibles que puede utilizar para optimizar aún más la ejecución de su trabajo de reenviador de registros de Dataflow.

    <table>
      <thead>
        <tr>
          <th style={{ width: "250px" }}>
            Parámetro de configuración
          </th>

          <th>
            Descripción
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            `licenseKey` <DNT>**Required.**</DNT>
          </td>

          <td>
            New Relic <InlinePopover type="licenseKey"/>.
          </td>
        </tr>

        <tr>
          <td>
            `inputSubscription` <DNT>**Required.**</DNT>
          </td>

          <td>
            La suscripción de Cloud Pub/Sub utilizada para consumir el registro. Utilice este formato:

            ```
            projects/<project-id>/subscriptions/<subscription-name>
            ```
          </td>
        </tr>

        <tr>
          <td>
            `logsApiUrl`
          </td>

          <td>
            New RelicURL de para la log API. Esto se enruta desde la VPC donde se ejecuta la pipeline de Dataflow.

            Por defecto:

            ```
            https://log-api.newrelic.com/log/v1
            ```

            Región de Europa:

            ```
            https://log-api.eu.newrelic.com/log/v1
            ```
          </td>
        </tr>

        <tr>
          <td>
            `batchCount`
          </td>

          <td>
            Número máximo de log para agregar en un lote antes de enviarlos a New Relic en una única solicitud HTTP POST.

            Por defecto: `100`
          </td>
        </tr>

        <tr>
          <td>
            `flushDelay`
          </td>

          <td>
            Número de segundos para esperar un registro adicional (hasta `batchCount`) desde la recepción del último log en un lote no completo, antes de enviarlos a New Relic.

            Por defecto: `2`
          </td>
        </tr>

        <tr>
          <td>
            `parallelism`
          </td>

          <td>
            Número máximo de solicitudes paralelas.

            Por defecto: `1`
          </td>
        </tr>

        <tr>
          <td>
            `disableCertificateValidation`
          </td>

          <td>
            Deshabilite la validación del certificado SSL.

            Por defecto: `false`
          </td>
        </tr>

        <tr>
          <td>
            `useCompression`
          </td>

          <td>
            Comprime (en GZIP) la carga enviada a New Relic de registro de API.

            Por defecto: `true`
          </td>
        </tr>

        <tr>
          <td>
            `tokenKMSEncryptionKey`
          </td>

          <td>
            Clave de cifrado KMS para el token. Utilice este formato:

            ```
            projects/{gcp_project}/locations/{key_region}/keyRings/{key_ring}/cryptoKeys/{kms_key_name}
            ```

            Por defecto: `null`
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>
</CollapserGroup>

<InstallFeedback/>

## ¿Que sigue? [#what-next]

Explore los datos de logging en su plataforma con nuestra [UI de logs](/docs/logs/log-management/ui-data/use-logs-ui/).

* Obtenga una visibilidad más profunda de los datos de rendimiento de su aplicación y de su plataforma reenviando su log con nuestras capacidades [de logs en el contexto](/docs/logs/enable-log-management-new-relic/configure-logs-context/configure-logs-context-apm-agents/) .
* Configurar [alerta](/docs/alerts-applied-intelligence/new-relic-alerts/alert-conditions/create-alert-conditions/).
* [Consulta tus datos](/docs/query-your-data/explore-query-data/get-started/introduction-querying-new-relic-data/) y [crea un panel](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards/).

## Desactivar reenvío de logs [#disable]

Para desactivar las capacidades de reenvío de registros, siga los procedimientos estándar en [la documentación Google Cloud Platform ](https://cloud.google.com/sdk/docs/). No necesitas hacer nada más en New Relic.
