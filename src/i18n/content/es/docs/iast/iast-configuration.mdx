---
title: Configuración IAST
tags:
  - IAST
  - New Relic IAST
  - Configuration
metaDescription: Find out how to configure IAST.
freshnessValidatedDate: '2024-09-16T00:00:00.000Z'
translationType: machine
---

Puede configurar su IAST para gestionar la programación del escaneo. Estas configuraciones le permiten excluir ciertas API, parámetros y categorías de vulnerabilidades del análisis IAST . También puede retrasar las exploraciones IAST o programarlas para momentos específicos del día.

## Programación de exploraciones IAST [#scheduling-iast-scans]

Puede iniciar y detener sus exploraciones IAST programadas empleando 2 variables. Estas variables le permiten establecer tiempos específicos para el escaneo IAST o agregar un retraso al tiempo de inicio del escaneo IAST desde la aplicación.

### Configurar sus exploraciones IAST programadas [#configure-scheduled]

Abra el archivo de configuración `newrelic.yml` para establecer el parámetro `scan_schedule` .

```yml
security:
  scan_schedule:
    delay: 0			          #In minutes, default is 0 min
    duration: 0		          #In minutes, default is forever
    schedule: ""                    #Cron Expression to define start time
    always_sample_traces: false     #regardless of scan schedule
```

<CollapserGroup>
  <Collapser
    id="delay"
    title={<><InlineCode>
      delay
    </InlineCode> (en minutos)</>
    }
  >
    El campo `delay` especifica el tiempo en minutos antes de que comience un escaneo IAST después de que se inicia la aplicación. El valor predeterminado es `0`.
  </Collapser>

  <Collapser
    id="duration"
    title={<><InlineCode>
      duration
    </InlineCode> (en minutos)</>
    }
  >
    El campo `duration` especifica el tiempo en minutos que se ejecutará el escaneo IAST. El valor predeterminado es para siempre, no tiene límites.

    Por ejemplo, si configura `duration: 300`, el análisis IAST se ejecutará durante 300 minutos (5 horas).
  </Collapser>

  <Collapser
    id="schedule-cron"
    title={<><InlineCode>
      schedule
    </InlineCode> (Expresión cron)</>
    }
  >
    El campo `schedule` especifica una expresión cron que define cuándo debe ejecutar el escaneo IAST. De forma predeterminada, `schedule` está deshabilitado. La [expresión cron](https://www.quartz-scheduler.org/documentation/quartz-2.3.0/tutorials/crontrigger.html) consta de seis campos separados por espacios:

    * **second**: especifica el segundo de la hora (0-59)
    * **minute**: especifica el minuto de la hora (0-59)
    * **hour**: especifica la hora del día (0-23)
    * **day**: especifica el día del mes (1-31)
    * **month**: El mes del año (1-12 o ENE-DIC)
    * **day\_of\_week**: especifica el día de la semana (1-7 o DOM-SÁB), donde 1 = domingo

    <Callout variant="important">
      ¿Qué sucede si no se especifica `duration` ? Omitir el parámetro de duración implica que el escaneo IAST nunca debe detener. En este escenario, la programación especificada se trata como una hora de inicio en lugar de una operación recurrente. El escaneo continuará indefinidamente sin interrupción ni finalización. Por ejemplo, `schedule: "0 0 0 * * ?"` programaría el escaneo IAST para que se ejecute a las 12 a. m. todos los días.
    </Callout>
  </Collapser>

  <Collapser
    id="always-sample-traces"
    title={<><InlineCode>
      always_sample_traces
    </InlineCode> (Booleano)</>
    }
  >
    `always-sample-traces` permite que IAST recopile activamente datos de seguimiento en segundo plano, y el agente de seguridad empleará estos datos recopilados para realizar un escaneo IAST en el momento programado. Sin embargo, para aplicaciones con gestión de sesiones, la opción recomendada es dejar el valor predeterminado del indicador `always_sample_traces` establecido en `false` . Esto garantiza que la ejemplificación y el escaneo de IAST estén limitados a una ventana específica. Las sesiones suelen tener una duración corta y a menudo finalizan en 30 minutos. En este escenario, tomar muestras antes de la ventana no proporcionará información valiosa y puede dar lugar a vulnerabilidades perdidas. De forma predeterminada, el valor de `always_sample_traces` es falso.
  </Collapser>
</CollapserGroup>

### Ejemplos [#configure-scheduled-examples]

<CollapserGroup>
  <Collapser id="start-30-minutes" title="Programe IAST para que comience 30 minutos después de que se inicie la aplicación y se ejecute durante 300 minutos">
    Para programar que IAST comience 30 minutos después de que se inicie la aplicación y se ejecute durante 300 minutos, debe establecer el retraso en 30 y la duración en 300.

    ```yml
      security:
        scan_schedule:
          delay: 30			         #In minutes, default is 0 min
          duration: 300		       #In minutes, default is forever
    ```
  </Collapser>

  <Collapser id="specific-time" title="Programar IAST para que se ejecute a una hora específica">
    Para programar la ejecución de IAST en un momento específico, configure la programación en una expresión cron que represente el momento deseado. Por ejemplo, para programar el IAST para que se ejecute todos los días a medianoche, deberá establecer la programación en `"0 0 0 * * ?"`.

    ```yml
      security:
        scan_schedule:
          schedule: "0 0 0 * * ?"         #By default, schedule is inactive
    ```

    <Callout variant="important">
      Si se especifican tanto el retraso como el cronograma, el retraso tiene prioridad. Esto significa que el IAST comenzará luego del retraso especificado, independientemente del cronograma.
    </Callout>
  </Collapser>

  <Collapser id="iast-sample-traces" title="Establezca IAST para que siempre muestree traza">
    Si desea que IAST siempre muestree traza, deberá establecer `always_sample_traces` en `true`. De manera predeterminada, esto se establece en `false`, lo que significa que IAST solo toma muestras de traza dentro de la ventana de escaneo activa.

    ```yml
      security:
        scan_schedule:
          delay: 30			                 #In minutes, default is 0 min
          always_sample_traces: true     #regardless of scan schedule
    ```
  </Collapser>
</CollapserGroup>

## Excluir del análisis IAST [#exclude-iast-scans]

La configuración de exclusión del análisis IAST le permite excluir API específicas, categorías de vulnerabilidades y parámetros del análisis IAST . Esto es útil en situaciones en las que se sabe que ciertos componentes de la aplicación son seguros o en las que el escaneo IAST de ciertas API podría provocar un mal funcionamiento de la aplicación, como la limitación del inicio de sesión.

Para configurar la exclusión del escaneo IAST, abra el archivo de configuración `newrelic.yml` para establecer el parámetro `exclude_from_iast_scan` .

```yml
security:
  exclude_from_iast_scan:
    api: []
    http_request_parameters:
      header: []
      query: []
      body: []
    iast_detection_category:
      insecure_settings: false
      invalid_file_access: false
      sql_injection: false
      nosql_injection: false
      ldap_injection: false
      javascript_injection: false
      command_injection: false
      xpath_injection: false
      ssrf: false
      rxss: false
```

### Excluir API [#exclude-api]

Puede ignorar API específicas del análisis IAST agregándolas a la sección API del archivo de configuración `newrelic.yml`. Puede especificar API empleando patrones de expresiones regulares (regex) que siguen la sintaxis de Perl 5. El patrón regex debe proporcionar una coincidencia completa para la URL sin el extremo.

Este es el formato para especificar las API:

```yml
  exclude_from_iast_scan:
    api:
      - .*account.* 
      - .*/\api\/v1\/.*?\/login
```

Por ejemplo:

* `.*account.*` Coincide con las API con las URL como `http://localhost:80/api/v1/account/login`

* `.*/\api\/v1\/.*?\/login` Coincide con las API con las URL como `http://localhost:80/api/v1/{'{account_id}'}/login`

### Excluir `http_request_parameters` [#exclude-http]

Puede ignorar parámetros de solicitud HTTP específicos del análisis IAST agregándolos a la sección `http_request_parameters` del archivo de configuración `newrelic.yml`.

<CollapserGroup>
  <Collapser id="header" title="Encabezamiento">
    Esta es una lista de claves de encabezado HTTP. Si una solicitud incluye algún encabezado con estas claves, se omitirá el escaneo IAST correspondiente. Por ejemplo, si tiene una solicitud curl con encabezados y desea omitir el escaneo IAST en el encabezado `X-Forwarded-For` , puede pasar esta configuración:

    ```bash
      curl -X POST -H "X-Forwarded-For: 123.456.789.012" -H "Content-Type: application/x-www-form-urlencoded" -d "param1=value1&param2=value2" http://example.com
    ```

    Puedes emplear esta configuración:

    ```yml
      exclude_from_iast_scan:
        http_request_parameters:
          header: 
            - X-Forwarded-For
    ```
  </Collapser>

  <Collapser id="query" title="Consultar">
    Esta es una lista de claves de consulta parámetro. La presencia de estos parámetros en la cadena de consulta de la solicitud hará que se omita el escaneo IAST . Por ejemplo, si tiene una solicitud curl con el parámetro de consulta y desea omitir el escaneo IAST en el parámetro de consulta `customerID` y `username`, puede pasar esta configuración:

    ```bash
      curl --location --request GET 'localhost:8080/sql/save?firstName=test&lastName=user&customerID=testuser&username=test123'
    ```

    Puedes emplear esta configuración:

    ```yml
      exclude_from_iast_scan:
        http_request_parameters:
          query: 
            - username
            - customerID
    ```
  </Collapser>

  <Collapser id="body" title="Cuerpo">
    Esta es una lista de claves dentro del cuerpo de la solicitud. Si estas claves se encuentran en el contenido del cuerpo, se omite el escaneo IAST. Estos son los tipos de contenido admitidos para el cuerpo de la solicitud: JSON, XML y datos codificados en URL de formulario.

    #### Ejemplo de tipo de contenido JSON

    Este es un ejemplo de curl para el tipo de contenido JSON cuando tienes una solicitud curl con un cuerpo JSON y deseas omitir el escaneo IAST en `customerID` y `firstName`.

    ```bash
      curl --location --request POST 'localhost:8080/application/json/post' \
      --header 'Content-Type: application/json' \
      --data '{
          "path": "sample.txt",
          "script":"testscript",
          "customerID":"GREAL",
          "name": {
      "firstName": "john",
      "lastName": "wick"
      },
          "url":"http://example.com",
          "cmd":"ls"
      }'
    ```

    Puedes emplear esta configuración:

    ```yml
      exclude_from_iast_scan:
        http_request_parameters:
          body: 
            - customerID
            - name.firstName
    ```

    #### Ejemplo de tipo de contenido XML

    Esta es una solicitud curl con cuerpo XML y desea omitir el escaneo IAST en `customerID` y `username`.

    ```bash
      curl --location 'localhost:8080/application/xml/post' \
      --header 'Content-Type: application/xml' \
      --data '<?xml version="1.0" encoding="UTF-8" ?>
      <AppData>
        <path>sample.txt</path>
        <script>K2</script>
        <customerID>GREAL</customerID>
        <username>bob</username>
        <url>http://example.com</url>
        <cmd>ls</cmd>
        <name>keshav</name>
        <firstName>Aliko</firstName>
      </AppData>'
    ```

    Puedes emplear esta configuración:

    ```yml
      exclude_from_iast_scan:
        http_request_parameters:
          body: 
            - AppData.customerID
            - AppData.username
    ```

    #### Ejemplo de formulario con URL codificada como tipo de contenido

    Esta es una solicitud curl con cuerpo codificado en Form-URL y desea omitir el escaneo IAST en `customerID` y `username`.

    ```bash
      curl --location 'localhost:8080/application/urlencode/post' \
      --header 'Content-Type: application/x-www-form-urlencoded' \
      -d 'name=madhav&path=sample.txt&customerID=GREAL&script=K2&url=http://example.com&username=bob&firstName=Aliko&cmd=ls'
    ```

    Puedes emplear esta configuración:

    ```yml
      http_request_parameters:
        body: 
          - customerID
          - username
    ```

    <Callout variant="tip">
      Para parámetros de cuerpo anidados, especifique un valor parámetro separado por un punto (.).
    </Callout>
  </Collapser>
</CollapserGroup>

### Excluir `iast_detection_category` [#exclude-iast-detection]

La configuración `iast_detection_category` permite al usuario especificar categorías de vulnerabilidades para las cuales se aplicará o ignorará el análisis IAST . Si una de estas categorías se establece en `true`, el agente de seguridad IAST no generará eventos ni marcará vulnerabilidades para esa categoría.

Vea este ejemplo para omitir el escaneo en busca de inyección SQL y SSRF. Los parámetros `sql_injection` y `ssrf` se establecen en `true`:

```yml
    exclude_from_iast_scan:
      iast_detection_category:
        insecure_settings: false
        invalid_file_access: false
        sql_injection: true
        nosql_injection: false
        ldap_injection: false
        javascript_injection: false
        command_injection: false
        xpath_injection: false
        ssrf: true
        rxss: false
```

<Callout variant="tip">
  El `iast_detection_category` tendrá prioridad sobre la configuración de detección presente en la sección de seguridad.
</Callout>

Puedes emplear esta configuración combinada:

```yml
  security:
    enabled: true
    scan_schedule:
      delay: 0        #In minutes, default is 0 min
      duration: 0     #In minutes, default will be forever
      #schedule: ""   #Cron Expression to define start time
      always_sample_traces: false  #continuously collect samples
    exclude_from_iast_scan:
      api: []
      http_request_parameters:
        header: []
        query: []
        body: []
      iast_detection_category:
        insecure_settings: false
        invalid_file_access: false
        sql_injection: false
        nosql_injection: false
        ldap_injection: false
        javascript_injection: false
        command_injection: false
        xpath_injection: false
        ssrf: false
        rxss: false
    agent:
      enabled: true
```

## Controladores de escaneo IAST [#iast-scan-controllers]

### Límite de velocidad de escaneo IAST [#iast-scan-rate-limit]

La configuración del límite de velocidad de escaneo IAST limita la cantidad máxima de sondas o solicitudes de análisis que se pueden enviar a la aplicación en un minuto. El límite de velocidad de escaneo IAST predeterminado se establece en un mínimo de 12 solicitudes de reproducción por minuto y un máximo de 3600 solicitudes de reproducción por minuto.