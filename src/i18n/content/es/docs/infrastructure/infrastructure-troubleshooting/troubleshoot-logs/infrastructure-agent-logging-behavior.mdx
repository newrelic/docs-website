---
title: Comportamiento de registro del agente de infraestructura
tags:
  - Infrastructure
  - Infrastructure monitoring troubleshooting
  - Troubleshoot logs
metaDescription: How New Relic generates and stores logs for the infrastructure agent.
freshnessValidatedDate: never
translationType: machine
---

El agente de infraestructura de New Relic recopila sus propios datos, así como el registro de integración, y los consolida en una sola fuente. De forma predeterminada, el registro aparece en `standard-output` y se agrega a un [archivo de registro](/docs/infrastructure/install-configure-infrastructure/configuration/infrastructure-configuration-settings#log-file). Para deshabilitar la salida estándar de inicio de sesión, [consulte las opciones de configuración del agente](/docs/infrastructure/install-infrastructure-agent/configuration/infrastructure-agent-configuration-settings/#stdout).

## Configuración básica

El siguiente ejemplo muestra una configuración típica para el log de agente en sistemas Linux (cambie la ruta del archivo cuando ejecute Windows u otra plataforma):

```
log:
  level: info
  file: '/var/log/newrelic-infra/newrelic-infra.log'
  rotate:
    max_size_mb: 100
    max_files: 5
    compression_enabled: true
    file_pattern: YYYY-MM-DD_hh-mm-ss.log
```

## Niveles de gravedad del registro [#security-levels]

La infraestructura utiliza un subconjunto de los [niveles de gravedad estándar de Syslog](https://en.wikipedia.org/wiki/Syslog#Severity_level):

* `ERROR`: Se cumplieron las condiciones de error
* `WARN`: Condiciones de advertencia cumplidas
* `INFO`: Mensajes informativos
* `DEBUG`: Contiene mensajes a nivel de depuración (útil cuando se resuelven problemas)

## Formato log

Para [agente de infraestructura v1.4.9 o superior](/docs/release-notes/infrastructure-release-notes/infrastructure-agent-release-notes), los mensajes de registro están alineados con los valores de contexto. Esto ofrece una mejor agrupación y filtrado; Por ejemplo:

```
containerized agent found in container
     containerID: VALUE
```

De forma predeterminada, el registro de infraestructura tiene el formato de texto:

* En modo de primer plano, la salida log está coloreada, sin timestamp:

  ```
  DEBUG Sending deltas divided in blocks component=PatchSender mentityKey=ohaimaci mnumberOfBlocks=1
  ```

* En modo de fondo, el registro es una salida de marca de tiempo, que se utiliza cuando se ejecuta como un servicio o se volca el registro en un archivo:

  ```
  time="2019-07-12T09:54:15+02:00" level=info msg="Agent service manager shutdown completed successfully." component=AgentService service=newrelic-infra
  ```

Alternativamente, el registro se puede formatear como un archivo JSON:

```
{"context":{},"level":"info","msg":"upstart_interval_sec: 0","timestamp":"2019-07-11T18:24:03+02:00"}
{"context":{},"level":"info","msg":"plugin_dir: ","timestamp":"2019-07-11T18:24:03+02:00"}
```

Para cambiar el formato de registro, consulte los [ajustes de configuración del agente](/docs/infrastructure/install-infrastructure-agent/configuration/infrastructure-agent-configuration-settings/#log-format).

## Rotación log incorporada [#builtin-log-rotation]

Para [agente de infraestructura v1.28.0 o superior](/docs/release-notes/infrastructure-release-notes/infrastructure-agent-release-notes), hay disponible un mecanismo integrado de rotación y compresión log en el agente.

## Modo detallado inteligente

Para [las versiones 1.9.0 o superiores del agente de infraestructura](/docs/release-notes/infrastructure-release-notes/infrastructure-agent-release-notes), puede habilitar el modo detallado inteligente para el registro.

El modo detallado inteligente evita que se registren mensajes de depuración hasta que se detecte un mensaje de error. Una vez que se detecta un error, los mensajes de depuración se escriben en el archivo de registro antes del error. Tenga en cuenta que solo se registra el número más reciente de mensajes de depuración configurados. Por ejemplo, si tiene un límite configurado de 10, cuando se detecta un error, se registran los 10 mensajes de depuración más recientes antes de que se detectara el error.

Para obtener más información sobre cómo habilitar el modo detallado inteligente y el límite de mensajes de depuración, consulte [configuración de infraestructura](/docs/infrastructure/install-infrastructure-agent/configuration/infrastructure-agent-configuration-settings/#logging-variables).

## Integración administración de registros

Integración escriba JSON carga en STDOUT e inicie sesión en texto sin formato (JSON estructurado en el futuro) en STDERR.

El agente de infraestructura maneja las líneas de integración STDERR y envía esta salida al log del agente.

El agente maneja cada línea STDERR de la siguiente manera:

* <DNT>
    **when agent runs in verbose mode**
  </DNT>

  : simplemente reenvía la línea STDERR completa como una entrada log del agente DEBUG colocando contextos de línea de integración dentro del campo \`msg\`.

* <DNT>
    **otherwise**
  </DNT>

  : analiza la línea con el formato esperado (ver más abajo) y solo registra como nivel de agente ERROR las entradas producidas por la integración con niveles de gravedad "fatal" o "error". En este caso, los campos se extraen y reenvían de manera estructurada (por lo tanto, si la salida JSON está habilitada para el agente, los campos se vuelven consultables.

De forma predeterminada, el agente de infraestructura filtra cualquier error de la integración que no impida que la integración se ejecute. Solo verá todos los errores de una integración si el nivel de registros está configurado en DEBUG, o si la integración aparece específicamente en la configuración log . Por ejemplo, en esta configuración se mostrarán todos los errores provenientes de `nri-mssql`, incluso si el nivel de registros es INFO:

```YAML
log:
  include_filters:
    integration_name:
      - nri-mssql
```

### Formato esperado STDERR de integración

Se espera que una línea sea una lista de pares de valores principales separados por un carácter igual. Las claves pueden contener cualquier carácter, mientras que los valores pueden tener tres formatos diferentes:

1. cadena: &lt;quote>cualquier carácter, incluidas las comillas escapadas \\"&lt;quote>
2. mapa: &&#x7B;cualquier personaje}
3. palabra: cualquier carácter excepto espacios

Internamente, el agente utilizó esta expresión regular para extraer los campos:

```
([^\s]*?)=(".*?[^\\]"|&{.*?}|[^\s]*)
```

Por ejemplo, esta línea:

```
time="2015-03-26T01:27:38-04:00" level=error msg="Foo bar baz" foo=bar
```

Generará una línea log de agente estructurada con estos campos:

```
- "time": "2015-03-26T01:27:38-04:00"
- "level": "error"
- "msg": "Foo bar baz"
- "foo": "bar"
```
