---
title: Integración de monitoreo temporal
tags:
  - Temporal integration
  - Temporal monitoring
  - New Relic integrations
metaDescription: Install our Temporal dashboards and see your Temporal data in New Relic.
freshnessValidatedDate: never
translationType: machine
---

Nuestra integración temporal monitorea el rendimiento de sus datos temporales, ayudándolo a diagnosticar problemas en su aplicación de escritura distribuida, tolerante a fallas y escalable. Nuestra integración temporal le brinda un dashboard prediseñado con su aplicación Temporal SDK métrica más importante.

<img
  title="Temporal"
  alt="A screenshot depicting the Temporal dashboard"
  src="/images/infrastructure_screenshot-full_temporal-dashboard.webp"
/>

<figcaption>
  Después de configurar la integración con New Relic, vea sus datos en un panel como este, listo para usar.
</figcaption>

## Instalar el agente de infraestructura [#infra]

El agente New Relic Infrastructure es la base para introducir sus datos temporales en New Relic. Si aún no lo ha hecho, instale el agente usando una de estas opciones:

* Nuestra [instalación guiada](https://one.newrelic.com/marketplace?state=15321ec0-7cd8-0c04-52bf-7b65778f2e8c) es una herramienta CLI que inspecciona su sistema e instala el agente de infraestructura junto con el agente de monitoreo de aplicaciones que mejor funcione para su sistema. Para obtener más información sobre cómo funciona nuestra instalación guiada, consulte nuestra [descripción general de la instalación guiada](/docs/infrastructure/host-integrations/installation/new-relic-guided-install-overview).
* Si prefiere instalar nuestro agente de infraestructura manualmente, puede seguir un tutorial para la instalación manual para [Linux](/docs/infrastructure/install-infrastructure-agent/linux-installation/install-infrastructure-monitoring-agent-linux), [Windows](/docs/infrastructure/install-infrastructure-agent/windows-installation/install-infrastructure-monitoring-agent-windows/) o [macOS](/docs/infrastructure/install-infrastructure-agent/macos-installation/install-infrastructure-monitoring-agent-macos/).

## Exponer Temporal métrica [#expose-temporal-metrics]

Para obtener la Temporal métrica es necesario seguir algunos pasos de la siguiente manera:

Instale la docker y docker-compose en su host.

```yml
sudo apt-get update
sudo apt install docker
sudo apt install docker-compose
```

Los siguientes pasos ejecutarán una instancia local del servidor temporal utilizando el archivo de configuración predeterminado `docker-compose.yml`:

1. Clona el repositorio.

   ```yml
   git clone https://github.com/temporalio/docker-compose.git
   ```

2. Cambie el directorio a la raíz del proyecto y agregue el extremo y el puerto de Prometheus en el archivo `docker-compose.yml` .

   ```yml
   sudo nano docker-compose/docker-compose.yml
   ```

   * Debajo de `container_name: temporal` en la sección Medio ambiente, incluya el extremo Prometheus de la siguiente manera: `- PROMETHEUS_ENDPOINT=0.0.0.0:8000`.
   * De manera similar, dentro del mismo contenedor, debajo de la sección de puertos, especifique el puerto como: `- 8000:8000`.
   * A continuación se muestra un ejemplo de cómo exponer un extremo de Prometheus en su dockerlocal: componer la configuración del clúster temporal:

   ```yml
   Environment:
     - PROMETHEUS_ENDPOINT=0.0.0.0:8000
   ports:
     - 8000:8000
   ```

3. Ejecute el comando `docker-compose up` .

   ```yml
   sudo docker-compose up
   ```

   Puede comprobar el servidor temporal ejecutándose en las siguientes URL:

* El servidor temporal estará disponible el `localhost:7233`.
* La UI de usuario web temporal estará disponible en `http://<YOUR_DOMAIN>:8080`
* El servidor Temporal métrica estará disponible en el `http://<YOUR_DOMAIN>:8000/metrics`

## Exponer Java SDK métrica [#expose-java-sdk-metrics]

Puede configurar el registro de Prometheus y el reportero de estadísticas de Micrometer, establecer el alcance y exponer un extremo desde el cual Prometheus puede extraer la métrica del Cliente SDK de la siguiente manera.

1. Para configurar métrica para el temporal del SDK de Java, cree un archivo `MetricsWorker.java` en el directorio raíz del proyecto.

   ```java
   package <add_your_project_main_directory>; // please add your java application main directory name.

   import com.sun.net.httpserver.HttpServer;
   import com.uber.m3.tally.RootScopeBuilder;
   import com.uber.m3.tally.Scope;
   import com.uber.m3.tally.StatsReporter;
   import com.uber.m3.util.ImmutableMap;
   import io.micrometer.prometheus.PrometheusConfig;
   import io.micrometer.prometheus.PrometheusMeterRegistry;
   import io.temporal.client.WorkflowClient;
   import io.temporal.client.WorkflowClientOptions;
   import io.temporal.common.reporter.MicrometerClientStatsReporter;
   import io.temporal.serviceclient.WorkflowServiceStubs;
   import io.temporal.serviceclient.WorkflowServiceStubsOptions;
   import io.temporal.worker.Worker;
   import io.temporal.worker.WorkerFactory;

   public class MetricsWorker {
       static final String WORK_FLOW_TASK_QUEUE = "WORK_FLOW_TASK_QUEUE"; //This can be a work flow task name used to differentiate the metrics logs from other work flow

       public static void main(String[] args) {

           PrometheusMeterRegistry registry = new PrometheusMeterRegistry(PrometheusConfig.DEFAULT);
           StatsReporter reporter = new MicrometerClientStatsReporter(registry);

           // set up a new scope, report every 10 seconds
           Scope scope = new RootScopeBuilder()
                   .tags(ImmutableMap.of(
                           "workerCustomTag1",
                           "workerCustomTag1Value",
                           "workerCustomTag2",
                           "workerCustomTag2Value"))
                   .reporter(reporter)
                   .reportEvery(com.uber.m3.util.Duration.ofSeconds(10));

           // For Prometheus collection, expose the scrape endpoint at port 8077. See Micrometer documentation for details on starting the Prometheus scrape endpoint. For example,
           HttpServer scrapeEndpoint = MetricsUtils.startPrometheusScrapeEndpoint(registry, 8077); //note: MetricsUtils is a utility file with the scrape endpoint configuration. See Micrometer docs for details on this configuration.
           // Stopping the starter stops the HTTP server that exposes the scrape endpoint.
           //Runtime.getRuntime().addShutdownHook(new Thread(() -> scrapeEndpoint.stop(1)));

           //Create Workflow service stubs to connect to the Frontend Service.
           WorkflowServiceStubs service = WorkflowServiceStubs.newServiceStubs(
                   WorkflowServiceStubsOptions.newBuilder()
                           .setMetricsScope(scope) //set the metrics scope for the WorkflowServiceStubs
                           .build());

           //Create a Workflow service client, which can be used to start, signal, and query Workflow Executions.
           WorkflowClient yourClient = WorkflowClient.newInstance(service,
                   WorkflowClientOptions.newBuilder().build());
   ```

Runtime.getRuntime().addShutdownHook(new Thread(() -> scrapeEndpoint.stop(1)));
// Add metrics scope to workflow service stub options
WorkerFactory factory = WorkerFactory.newInstance(yourClient);

Worker worker = factory.newWorker(WORK_FLOW_TASK_QUEUE);
worker.registerWorkflowImplementationTypes(SampleWorkflowImpl.class);//Design a workflow incorporating temporal elements and invoking activities within it. Determine where to capture metrics logs and register them with the worker
worker.registerActivitiesImplementations(new SampleActivityImpl());  // Develop an Activity interface utilizing temporal annotations, proceed to its implementation, and establish a connection with the worker by mapping it to registerActivities

factory.start();
}
}

````

2. Crear un archivo `MetricsUtils.java` en el directorio principal del proyecto, que contenga la configuración para el extremo de scraping.

```java
package <add_your_project_main_directory>; // please add your java application main directory name.

import com.sun.net.httpserver.HttpServer;
import io.micrometer.prometheus.PrometheusMeterRegistry;
import static java.nio.charset.StandardCharsets.UTF_8;
import java.io.IOException;
import java.io.OutputStream;
import java.net.InetSocketAddress;

public class MetricsUtils {
   public static HttpServer startPrometheusScrapeEndpoint(
           PrometheusMeterRegistry registry, int port) {
       try {
           HttpServer server = HttpServer.create(new InetSocketAddress(port), 0);
           server.createContext(
                   "/metrics",
                   httpExchange -> {
                       String response = registry.scrape();
                       httpExchange.sendResponseHeaders(200, response.getBytes(UTF_8).length);
                       try (OutputStream os = httpExchange.getResponseBody()) {
                           os.write(response.getBytes(UTF_8));
                       }
                   });

           server.start();
           return server;
       } catch (IOException e) {
           throw new RuntimeException(e);
       }
   }
}
````

3. Agregue la dependencia en el archivo `build.gradle` debajo de `dependency section`.

   ```java
   implementation "io.micrometer:micrometer-registry-prometheus"
   ```

4. Copie el fragmento a continuación y modifique el `mainClass` con el directorio relevante para su proyecto en la tarea del archivo `build.gradle` para iniciar el trabajador.

   ```java
   task startMetricsWorker(type: JavaExec) {
      mainClass = '<ProjectRoot.MetricsWorker>' // Add your MetricsWorker file directory.
      classpath = sourceSets.main.runtimeClasspath
   }
   ```

5. Vaya al directorio de su proyecto y construya.

   ```yml
   ./gradlew build
   ```

6. Iniciar al trabajador.

   ```yml
   ./gradlew startMetricsWorker
   ```

7. Vea el trabajador métrica en el extremo Prometheus Scrape expuesto: `http://<YOUR_DOMAIN>:8077/metrics`.

<Callout
  title="Nota"
  variant="tip"
>
  Para más información sobre la configuración del SDK métrica, consulta la [documentación](https://docs.temporal.io/self-hosted-guide/monitoring#sdk-metrics-setup) oficial de Temporal.
</Callout>

## Configurando NRI-Prometheus [#configure-prometheus]

Después de una instalación exitosa, el agente New Relic Infrastructure . Para crear un archivo de configuración de nri-prometheus, siga estos pasos:

1.Cree un archivo con el nombre `nri-prometheus-temporal-config.yml` en esta ruta:

```yml
cd /etc/newrelic-infra/integrations.d/
```

Después de crear el archivo `nri-prometheus-temporal-config.yml` , debe actualizar las URL con `YOUR_HOST_IP`:

URL: `["http://<YOUR_HOST_IP>:8000/metrics", "http://<YOUR_HOST_IP>:8077/metrics"]`

```yml
integrations:
  - name: nri-prometheus
    config:
      standalone: false
      # Defaults to true. When standalone is set to `false`, `nri-prometheus` requires an infrastructure agent to send data.
      emitters: infra-sdk
      # When running with infrastructure agent emitters will have to include infra-sdk
      cluster_name: Temporal_Server_Metrics
      # Match the name of your cluster with the name seen in New Relic.
      targets:
        - description: Temporal_Server_Metrics
          urls: ["http://<YOUR_DOMAIN>:8000/metrics", "http://<YOUR_DOMAIN>:8077/metrics"]
      #    tls_config:
      #      ca_file_path: "/etc/etcd/etcd-client-ca.crt"
      #      cert_file_path: "/etc/etcd/etcd-client.crt"
      #      key_file_path: "/etc/etcd/etcd-client.key"
      verbose: false
      # Defaults to false. This determines whether or not the integration should run in verbose mode.
      audit: false
      # Defaults to false and does not include verbose mode. Audit mode logs the uncompressed data sent to New Relic and can lead to a high log volume.
      # scrape_timeout: "YOUR_TIMEOUT_DURATION"
      # `scrape_timeout` is not a mandatory configuration and defaults to 30s. The HTTP client timeout when fetching data from endpoints.
      scrape_duration: "5s"
      # worker_threads: 4
      # `worker_threads` is not a mandatory configuration and defaults to `4` for clusters with more than 400 endpoints. Slowly increase the worker thread until scrape time falls between the desired `scrape_duration`. Note: Increasing this value too much results in huge memory consumption if too many metrics are scraped at once.
      insecure_skip_verify: false
      # Defaults to false. Determins if the integration should skip TLS verification or not.
    timeout: 10s
```

### Configuración de registro temporal [#temporal-logs-configuration]

Para configurar el registro temporal, siga los pasos que se describen a continuación.

1. Ejecute el siguiente comando docker para verificar el estado de ejecución del contenedor.

   ```shell
   sudo docker ps
   ```

2. Copie el ID del contenedor para el contenedor **temporal-ui** y ejecute el comando proporcionado.

   ```shell
   sudo docker logs -f <container_id> &> /tmp/temporal.log &
   ```

   Luego, verifique el archivo de registro ubicado en el directorio `/tmp/` llamado `temporal.log`.

### Reenviar registro temporal a New Relic [#temporal-logs-to-newrelic]

Puede utilizar nuestro [reenvío de registros](https://docs.newrelic.com/docs/logs/forward-logs/forward-your-logs-using-infrastructure-agent/) para reenviar el registro temporal a New Relic. En máquinas Linux, su archivo de registro llamado logging.yml debe estar presente en esta ruta:

```shell
cd /etc/newrelic-infra/logging.d/
```

Una vez creado el archivo de registro, incluya el script siguiente en el archivo `logging.yml` :

```yml
logs:
  - name: temporal_logs
    file: /tmp/temporal.log
    attributes:
      logtype: temporal_logs
```

### Reiniciar el agente de infraestructura

Antes de que pueda comenzar a leer sus datos, utilice las instrucciones de nuestros [documentos del agente de infraestructura](https://docs.newrelic.com/docs/infrastructure/install-infrastructure-agent/manage-your-agent/start-stop-restart-infrastructure-agent/) para reiniciar su agente de infraestructura.

```bash
sudo systemctl restart newrelic-infra.service
```

En un par de minutos, tu Temporal enviará métrica a [one.newrelic.com](https://one.newrelic.com/).

## Encuentra tus datos [#find-your-data]

Puede elegir nuestra plantilla dashboard prediseñada llamada Temporal para monitor su métrica Temporal. Siga estos pasos para utilizar nuestra plantilla dashboard prediseñadas:

1. Desde [one.newrelic.com](https://one.newrelic.com/), vaya a la página **+ Add data** .
2. Haga clic en **Dashboards**.
3. En la barra de búsqueda, escribe **Temporal**.
4. Debería aparecer el dashboard temporal. Haga clic en él para instalarlo.

Su dashboard temporal se considera un panel personalizado y se puede encontrar en la UI del panel. Para obtener documentos sobre el uso y edición del panel, consulte [nuestros documentos dashboard ](https://docs.newrelic.com/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards/).

Aquí hay una consulta NRQL para verificar la suma de latencia de la solicitud temporal:

```sql
SELECT sum(temporal_request_latency_sum) FROM Metric

```
