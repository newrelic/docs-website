---
title: Reenviar registro de acceso a Amazon CloudFront
tags:
  - Logs
  - Enable log management in New Relic
  - Enable log monitoring in New Relic
  - CloudFront
metaDescription: 'Configure New Relic logging for your Amazon CloudFront distribution, so you can use enhanced log management capabilities.'
freshnessValidatedDate: never
translationType: machine
---

Puede habilitar el registro desde su distribución de Amazon CloudFront para enviar el registro de acceso web a New Relic.

## Opciones para enviar registro [#log-types]

Hay dos opciones para enviar registros desde CloudFront: registro estándar o registro en tiempo real.

<DNT>**Standard logs**</DNT> se envían desde CloudFront a un depósito de S3 donde se almacenan. Luego, utilizaría nuestro activador AWS Lambda para enviar el registro desde S3 a New Relic. Revise [los documentos de Amazon CloudFront para configurar y utilizar el registro estándar (registro de acceso)](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/AccessLogs.html). Contiene información detallada sobre cómo crear su depósito S3 y configurar los permisos adecuados. El registro estándar incluye todos los campos de datos y se envía a S3 y luego a New Relic cada 5 minutos. Para obtener instrucciones detalladas sobre cómo configurar el registro estándar en la consola de Amazon y enviarlos a New Relic a través de nuestro activador S3 Lambda, consulte la [sección Habilitar el registro estándar](#enable-standard-logging).

<DNT>**Real-time logs**</DNT> se envían segundos después de recibir las solicitudes utilizando un consumidor de Kinesis Data Stream y un Kinesis Data Firehose para su entrega a New Relic. Revise [los documentos de Amazon CloudFront para configurar el registro de tiempo real](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/real-time-logs.html). tiempo real log son configurables y le permiten configurar una tasa de muestreo (qué porcentaje de registro enviar), seleccionar campos específicos para recibir en los log y definir comportamientos de caché específicos (patrones de ruta) para los que desea recibir registros. tiempo real log también requiere un depósito de respaldo S3 para enviar todos los datos o solo los datos fallidos. Entonces, para habilitar el registro de tiempo real, también debes seguir [nuestras instrucciones para crear un depósito S3](#create-s3-bucket). Para obtener instrucciones detalladas sobre cómo configurar el registro estándar en la consola de Amazaon y enviarlos a New Relic a través de nuestro activador S3 Lambda, consulte la [sección Habilitar registro de tiempo real](#enable-real-time-logging).

Para ambas opciones, puede utilizar nuestras [reglas integradas de análisis de registros](/docs/logs/ui-data/built-log-parsing-rules) para analizar automáticamente su registro de acceso a CloudFront y nuestro dashboard inicio rápido para obtener inmediatamente información valiosa sobre sus datos. Para que las reglas de análisis integradas funcionen y completen datos en el widget del dashboard de inicio rápido proporcionado, debe configurar el atributo `logtype` como se define en las instrucciones. Para obtener detalles adicionales sobre cómo analizar el registro de tiempo real si solo selecciona algunos de los campos de registro, consulte la [sección Análisis](#parsing-real-time-logs)

## Cree un depósito de S3 para almacenar el registro de CloudFront [#create-s3-bucket]

Para habilitar el registro estándar o el registro de tiempo real para su distribución de CloudFront, primero debe crear un depósito S3 para usarlo para almacenar el inicio de sesión de acceso a CloudFront:

1. En la Consola de administración de AWS, elija

   <DNT>
     **Services > All services > S3**
   </DNT>

   .

2. Seleccione

   <DNT>
     **Create bucket**
   </DNT>

   .

3. Ingrese un

   <DNT>
     **Bucket name**
   </DNT>

   y seleccione el

   <DNT>
     **AWS region**
   </DNT>

   de su elección. (Tenga en cuenta que su depósito S3 debe estar en la misma región que la función Lambda que crea en la siguiente sección si está utilizando el registro estándar).

4. En la sección

   <DNT>
     **Object ownership**
   </DNT>

   , seleccione

   <DNT>
     **ACLs enabled**
   </DNT>

   .

5. Seleccione

   <DNT>
     **Create bucket**
   </DNT>

   .

Ahora puede habilitar el registro estándar o en tiempo real. Para obtener instrucciones sobre esas opciones, siga leyendo.

## Habilitar el registro estándar [#enable-standard-logging]

Actualice su distribución de CloudFront para habilitar el registro estándar:

1. En la Consola de administración de AWS, elija

   <DNT>
     **Services > All Services > CloudFront**
   </DNT>

   .

2. Haga clic en su distribución

   <DNT>
     **ID**
   </DNT>

   . En la pestaña General, seleccione

   <DNT>
     **Edit**
   </DNT>

   en la sección Configuración.

3. En la sección

   <DNT>
     **Standard logging**
   </DNT>

   , seleccione

   <DNT>
     **On**
   </DNT>

   para habilitar el registro y mostrar los ajustes de configuración del registro.

4. Para

   <DNT>
     **S3 bucket**
   </DNT>

   , busque y elija el nombre del depósito de S3 que creó anteriormente.

5. Opcional: puede agregar un prefijo log como `cloudfront_logs`.

6. Elija

   <DNT>
     **Save changes**
   </DNT>

   .

En cinco minutos, debería comenzar a ver el archivo de registro que aparece en su depósito S3 con el siguiente formato de nombre de archivo:

```
<optional prefix>/<distribution ID>.YYYY-MM-DD-HH.unique-ID.gz
```

A continuación, debes instalar y configurar nuestra función AWS Lambda `NewRelic-log-ingestion-s3` para enviar el log de acceso en S3 a New Relic. Necesitará una única función Lambda para el registro de Amazon CloudFront para poder configurar la variable de entorno `LOG_TYPE` adecuada: esto le permite utilizar nuestras [reglas de análisis integradas de CloudFront](/docs/logs/ui-data/built-log-parsing-rules/#cloudfront) y el [dashboard de inicio rápido](https://newrelic.com/instant-observability/amazon-cloudfront-web-logs). Si ya tiene esta función Lambda instalada en una región y la está utilizando para enviar otro registro S3 a New Relic (por ejemplo, registro ALB/NLB), deberá instalar la función Lambda nuevamente en otra región. Además, como se señaló anteriormente, su depósito S3 para almacenar el registro de acceso y su función Lambda para enviar el registro S3 a New Relic deben estar en la misma región.

Para realizar estos pasos:

7. Siga las instrucciones aquí para [configurar AWS Lambda para enviar registros desde S3](/docs/logs/forward-logs/aws-lambda-sending-logs-s3/).

8. Una vez instalada la función Lambda, seleccione

   <DNT>
     **Functions > NewRelic-s3-log-ingestion**
   </DNT>

   .

9. Seleccione el botón

   <DNT>
     **+ Add trigger**
   </DNT>

   debajo de S3.

10. Para

    <DNT>
      **Trigger Configuration**
    </DNT>

    , seleccione S3.

11. Para

    <DNT>
      **Bucket**
    </DNT>

    , busque y elija el depósito de S3 que creó anteriormente.

12. En la sección

    <DNT>
      **Recursive invocation**
    </DNT>

    , marque la casilla de reconocimiento y luego elija

    <DNT>
      **Add**
    </DNT>

    .

13. En la pestaña

    <DNT>
      **Configuration**
    </DNT>

    de la función, elija la opción

    <DNT>
      **Environment variables**
    </DNT>

    a la izquierda.

14. Seleccione

    <DNT>
      **Edit**
    </DNT>

    y, para `LOG_TYPE` ingrese `cloudfront-web`.

15. Seleccione

    <DNT>
      **Save**
    </DNT>

    .

En cinco minutos debería comenzar a ver su registro en la UI de registro. Para confirmar que está recibiendo el registro, puede buscar `logtype:cloudfront-web` en la [barra de búsqueda UI del registro](/docs/logs/ui-data/use-logs-ui) o ejecutar una consulta NRQL con algo como `FROM Log SELECT * WHERE logtype='cloudfront-web'`

## Habilitar registro de tiempo real [#enable-real-time-logs]

Para habilitar el registro en tiempo real para su distribución de CloudFront, primero debe crear un Kinesis Data Stream para recibir el registro de CloudFront:

1. En la Consola de administración de AWS, elija

   <DNT>
     **Services > Kinesis**
   </DNT>

   .

2. Seleccione

   <DNT>
     **Data streams**
   </DNT>

   y luego

   <DNT>
     **Create data stream**
   </DNT>

   .

3. Introduzca un

   <DNT>
     **Data stream name**
   </DNT>

   . Por ejemplo, `CloudFront-DataStream`.

4. Seleccione el modo de capacidad de Data Stream de su elección.

5. Seleccione

   <DNT>
     **Create data stream**
   </DNT>

   .

6. En la sección

   <DNT>
     **Consumers**
   </DNT>

   , seleccione

   <DNT>
     **Process with delivery stream**
   </DNT>

   .

7. Para

   <DNT>
     **Destination**
   </DNT>

   , seleccione

   <DNT>
     **New Relic**
   </DNT>

   .

8. Introduzca un

   <DNT>
     **Delivery stream name**
   </DNT>

   . Por ejemplo, `CloudFront-DeliveryStream`.

9. En la sección de configuración

   <DNT>
     **Destination**
   </DNT>

   , para la URL del extremo HTTP, seleccione

   <DNT>
     **New Relic logs - US**
   </DNT>

   o

   <DNT>
     **New Relic logs - EU**
   </DNT>

   .

10. Para

    <DNT>
      **API key**
    </DNT>

    , ingrese el

    <InlinePopover type="licenseKey"/>

    para su cuenta New Relic.

11. Seleccione

    <DNT>
      **Add parameter**
    </DNT>

    .

12. Si selecciona todos los campos para iniciar sesión en el paso 21 a continuación, para

    <DNT>
      **Key**
    </DNT>

    , ingrese `logtype` y para

    <DNT>
      **Value**
    </DNT>

    , ingrese `cloudfront-rtl` . Si planea seleccionar un subconjunto de campos para iniciar sesión en el Paso 21 a continuación, ingrese `cloudfront-rtl-custom`. Si elige no seleccionar todos los campos, consulte la [sección de tiempo real análisis de registros](#parsing-real-time-logs) a continuación para obtener información sobre cómo crear una regla de análisis personalizada para su registro.

13. En la sección

    <DNT>
      **Backup settings**
    </DNT>

    , puede elegir

    <DNT>
      **Failed data**
    </DNT>

    solo o

    <DNT>
      **All data**
    </DNT>

    para la opción

    <DNT>
      **Source record backup in Amazon S3**
    </DNT>

    , según sus preferencias.

14. Para el depósito de respaldo de S3, seleccione

    <DNT>
      **Browse**
    </DNT>

    para buscar y seleccionar el nombre del depósito de S3 que creó anteriormente para almacenar el registro de CloudFront.

15. Elija

    <DNT>
      **Create delivery stream**
    </DNT>

    .

A continuación, cree una configuración de registro en tiempo real y adjúntela a su distribución de CloudFront:

16. En la Consola de administración de AWS, elija

    <DNT>
      **Services > CloudFront**
    </DNT>

    .

17. En el

    <DNT>
      **Telemetry section**
    </DNT>

    de la izquierda, seleccione

    <DNT>
      **Logs**
    </DNT>

    .

18. Haga clic en la pestaña

    <DNT>
      **Real-time configurations**
    </DNT>

    y luego elija

    <DNT>
      **Create configuration**
    </DNT>

    .

19. Introduzca un nombre de configuración. Por ejemplo: `CloudFront-RealTimeLogs`.

20. Introduzca una frecuencia de muestreo de `1` a `100`.

21. Para

    <DNT>
      **Fields**
    </DNT>

    , seleccione

    <DNT>
      **All fields**
    </DNT>

    o elija los campos que desea incluir en su registro.

22. Para

    <DNT>
      **Endpoint**
    </DNT>

    , seleccione el nombre del flujo de datos que creó en el paso 3. Por ejemplo: `CloudFront-DataStream`.

23. En la sección

    <DNT>
      **Distrubutions**
    </DNT>

    , seleccione su ID de distribución de CloudFront.

24. Para

    <DNT>
      **Cache behaviors**
    </DNT>

    , marque

    <DNT>
      **Default (\*)**
    </DNT>

    .

25. Elija

    <DNT>
      **Create configuration**
    </DNT>

    .

En un par de minutos debería comenzar a ver su registro en nuestra [UI de logs](/docs/logs/ui-data/use-logs-ui). Para confirmar que está recibiendo el registro de tiempo real, puede buscar `logtype:cloudfront-rtl*` en la barra de búsqueda UI del registro o mediante una consulta NRQL como `FROM Log SELECT * WHERE logtype LIKE 'cloudfront-rtl%'`

## Tiempo real análisis de registros [#parsing-real-time-logs]

Nuestra regla de análisis incorporada para el registro de tiempo real supone que se registrarán todos los campos. Si elige log solo un subconjunto de campos, debe definir una regla de análisis personalizada que coincida con su formato log . Esto es necesario para que el registro se analice correctamente y utilice nuestro [dashboard de inicio rápido](https://newrelic.com/instant-observability/amazon-cloudfront-web-logs).

Para crear una regla de análisis personalizada, seleccione <DNT>**Parsing**</DNT> en la sección <DNT>**Manage data**</DNT> de la UI del registro.

1. Para

   <DNT>
     **Rule name**
   </DNT>

   , ingrese `CloudFront custom parsing rule`.

2. Para

   <DNT>
     **Filter logs based on NRQL**
   </DNT>

   , ingrese `logtype='cloundfront-rtl-custom'`.

3. Actualice la lógica de análisis de Grok a continuación para que incluya

   <DNT>
     **only**
   </DNT>

   los campos que ha seleccionado en la configuración de registro de tiempo real. Por ejemplo, si elige no incluir el campo `cs_headers` , elimine `%{SPACE}%{NOTSPACE:cs_headers}%` de Grok, y así sucesivamente.

   ```
   ^%{NOTSPACE:timestamp}.\d{3}%{SPACE}%{NOTSPACE:c_ip}%{SPACE}%{NUMBER:time_to_first_byte:INT}%{SPACE}%{NUMBER:sc_status:INT}%{SPACE}%{NUMBER:sc_bytes:INT}%{SPACE}%{WORD:cs_method}%{SPACE}%{NOTSPACE:cs_protocol}%{SPACE}%{NOTSPACE:cs_host}%{SPACE}%{NOTSPACE:cs_uri_stem}%{SPACE}%{NUMBER:cs_bytes:INT}%{SPACE}%{NOTSPACE:x_edge_location}%{SPACE}%{NOTSPACE:x_edge_request_id}%{SPACE}%{NOTSPACE:x_host_header}%{SPACE}%{NUMBER:time_taken:INT}%{SPACE}%{NOTSPACE:cs_protocol_version}%{SPACE}%{NOTSPACE:cs_ip_version}%{SPACE}%{NOTSPACE:cs_user_agent}%{SPACE}%{NOTSPACE:cs_referer}%{SPACE}%{NOTSPACE:cs_cookie}%{SPACE}%{NOTSPACE:cs_uri_query}%{SPACE}%{NOTSPACE:x_edge_response_result_type}%{SPACE}%{NOTSPACE:x_forwarded_for}%{SPACE}%{NOTSPACE:ssl_protocol}%{SPACE}%{NOTSPACE:ssl_cipher}%{SPACE}%{NOTSPACE:x_edge_result_type}%{SPACE}%{NOTSPACE:fle_encrypted_fields}%{SPACE}%{NOTSPACE:fle_status}%{SPACE}%{NOTSPACE:sc_content_type}%{SPACE}%{NOTSPACE:sc_content_len}%{SPACE}%{NOTSPACE:sc_range_start}%{SPACE}%{NOTSPACE:sc_range_end}%{SPACE}%{NUMBER:c_port:INT}%{SPACE}%{NOTSPACE:x_edge_detailed_result_type}%{SPACE}%{NOTSPACE:c_country}%{SPACE}%{NOTSPACE:cs_accept_encoding}%{SPACE}%{NOTSPACE:cs_accept}%{SPACE}%{NOTSPACE:cache_behavior_path_pattern}%{SPACE}%{NOTSPACE:cs_headers}%{SPACE}%{NOTSPACE:cs_header_names}%{SPACE}%{NOTSPACE:cs_headers_count}$
   ```

4. Pegue el Grok actualizado en la sección de lógica de análisis y luego seleccione

   <DNT>
     **Test grok**
   </DNT>

   para validar que su analizador esté funcionando.

5. Habilite la regla y luego elija

   <DNT>
     **Save parsing rule**
   </DNT>

   .

<img
  title="Creating a CloudFront custom parsing rule"
  alt="Creating a CloudFront custom parsing rule"
  src="/images/logs_screenshot-crop_Cloudfront-log-parsing.webp"
/>

<figcaption>
  Una captura de pantalla de la configuración de análisis personalizado de CloudFront.
</figcaption>

## ¿Que sigue? [#what-next]

<img
  title="Dashboard in Amazon CloudFront Access Logs quickstart"
  alt="Dashboard in Amazon CloudFront Access Logs quickstart"
  src="/images/logs_screenshot-crop_Cloudfront-logs-dashboard.webp"
/>

<figcaption>
  Nuestro registro de inicio rápido para Amazon CloudFront Access incluye un dashboard prediseñado.
</figcaption>

Aquí hay algunas ideas para los próximos pasos:

* Comience en minutos con un dashboard prediseñado para ver las métricas clave de su registro de acceso a Amazon CloudFront. Vaya al [registro de acceso de Amazon CloudFront inicio rápido](https://newrelic.com/instant-observability/amazon-cloudfront-web-logs) y haga clic en

  <DNT>
    **Install now**
  </DNT>

  .

* Explore los datos de logging en su plataforma con nuestra [UI de logs](/docs/logs/log-management/ui-data/use-logs-ui).

* Obtenga una visibilidad más profunda de los datos de rendimiento de su aplicación y de su plataforma reenviando su registro con nuestras capacidades [de logs en el contexto](/docs/logs/enable-log-management-new-relic/configure-logs-context/configure-logs-context-apm-agents) .

* Configurar [alertas](/docs/alerts-applied-intelligence/new-relic-alerts/alert-conditions/create-alert-conditions).

* [Consulta tus datos](/docs/query-your-data/explore-query-data/get-started/introduction-querying-new-relic-data/) y [crea un panel](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards).

## Desactivar reenvío de logs [#disable]

Para desactivar las capacidades de reenvío de registros, hay dos opciones. Si solo desea dejar de enviar el registro de S3 a New Relic , puede eliminar el disparador de S3 en la función `NewRelic-log-ingestion-s3` Lambda. Si desea deshabilitar completamente el registro de acceso de Amazon CloudFront, deberá eliminar el activador y desactivar el registro en la configuración general de la distribución de CloudFront.
