---
title: 'Integración en el host: formato de configuración legacy'
tags:
  - Create integrations
  - Infrastructure Integrations SDK
  - Specifications
freshnessValidatedDate: never
translationType: machine
---

La integración New Relic Infrastructure [en el host](/docs/integrations/host-integrations/getting-started/introduction-host-integrations) puede utilizar uno de dos tipos de [formatos de configuración](/docs/integrations/integrations-sdk/file-specifications/config-file-overview). Este documento explica el formato de configuración legacy más antiguo.

<Callout variant="important">
  New Relic recomienda utilizar el nuevo [formato de configuración estándar mejorado](/docs/create-integrations/infrastructure-integrations-sdk/specifications/host-integrations-standard-configuration-format). Para actualizar su archivo de configuración a este nuevo formato, consulte la [sección de actualización](/docs/create-integrations/infrastructure-integrations-sdk/specifications/host-integrations-standard-configuration-format#update)
</Callout>

Para obtener una introducción a la configuración, consulte [Descripción general de la configuración](/docs/integrations/integrations-sdk/file-specifications/config-file-overview).

## Estructura del archivo de configuración [#structure]

Una integración en el host que utiliza el formato de configuración estándar requiere dos archivos de configuración:

* Un [archivo de definición](#definition-file)
* Un [archivo de configuración](#config-file)

## Archivo de definición

El archivo de definición tiene un formato de nombre como `INTEGRATION_NAME-definition.yml`. Este archivo proporciona información descriptiva sobre la integración, como por ejemplo: la versión del protocolo JSON que admite, una lista de comandos que puede ejecutar y los argumentos que acepta. Vive en este directorio:

* Linux:

  ```
  /var/db/newrelic-infra/newrelic-integrations
  ```

* Ventanas:

  ```
  C:\Program Files\New Relic\newrelic-infra\newrelic-integrations
  ```

A continuación se muestra un ejemplo de un archivo de definición de integración NGINX con dos secciones de comando en un sistema Linux:

```
name: com.myorg.nginx
protocol_version: 2
description: Collect metric and configuration data from NGINX
os: linux
commands:
  metrics:
    command:
      - myorg-nginx
      - --metrics
    interval: 15
  inventory:
    command:
      - myorg-nginx
      - --inventory
    interval: 120
    prefix: integration/myorg-nginx
```

Un archivo de definición se puede dividir en dos partes:

* el [encabezado](#def-header)
* La [sección de comandos](#def-commands)

### Encabezado del archivo de definición [#def-header]

Aquí hay explicaciones de los elementos de encabezado de un archivo de definición:

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        Campo de encabezado de definición
      </th>

      <th>
        Descripción
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `name`
      </td>

      <td>
        Requerido. Un nombre único `name` para identificar la integración para registro, métrica interna, etc. Cuando el agente carga el archivo de configuración, New Relic usa `name` para buscar la integración en el registro del agente.
      </td>
    </tr>

    <tr>
      <td>
        `protocol_version`
      </td>

      <td>
        Requerido. El número de versión del protocolo. New Relic utiliza esto para garantizar la compatibilidad entre la integración y el agente. Si el agente no reconoce la versión de una integración, filtrará esa integración y creará un mensaje de registro.

        La versión actual del protocolo JSON es `2`. Para obtener más información sobre los cambios de protocolo, consulte [Cambios en el SDK](/docs/integrations/integrations-sdk/getting-started/compatibility-requirements-infrastructure-integrations-sdk#change-log).
      </td>
    </tr>

    <tr>
      <td>
        `description`
      </td>

      <td>
        Opcional. Explicación amigable para los humanos de lo que hace la integración.
      </td>
    </tr>

    <tr>
      <td>
        `os`
      </td>

      <td>
        Opcional. El sistema operativo donde se ejecuta la integración. New Relic usa esto para filtrar la integración que desea ejecutar solo en un sistema operativo específico.

        Predeterminado: ejecute la integración independientemente del valor `os` .

        Para restringir la integración a un sistema operativo específico, utilice cualquiera de estas opciones:

        * `linux`
        * `windows`
      </td>
    </tr>
  </tbody>
</table>

### Comandos de archivos de definición [#def-commands]

Después del encabezado hay una lista de comandos. La sección de comandos define:

* Uno o más modos de funcionamiento independientes para el ejecutable.
* Los datos de tiempo de ejecución necesarios para que se ejecute.

La sección de comandos es un mapa YAML de definiciones de comandos, donde cada clave es el nombre de alias único del comando en el archivo de configuración de la integración que especifica el ejecutable que se ejecutará.

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        Comandos de definición
      </th>

      <th>
        Descripción
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `command`
      </td>

      <td>
        Requerido. La línea de comando real que se ejecutará como una matriz YAML de partes de comando. Estos se ensamblan para ejecutar el comando real. Para comandos simples, la matriz puede tener un solo elemento.

        Las reglas de comando adicionales incluyen:

        * `command` argumentos: El comando y cualquier argumento de línea de comando que se comparta para todas las instancias de la configuración de integración.

        * `command` ejecución: el comando se ejecutará en el mismo directorio que el archivo de definición.

        * `command` ruta: se puede utilizar cualquier comando disponible en el `$PATH` del host. Los ejecutables ubicados en el mismo directorio que el archivo de definición, o en un subdirectorio del mismo, se pueden ejecutar utilizando una ruta relativa. Por ejemplo:

          * <DNT>
              **Linux:**
            </DNT>

            Para ejecutar un ejecutable llamado `myorg-nginx` en el mismo directorio que el archivo de definición, puede usar `myorg-nginx` o `./myorg-nginx`. Los sistemas Linux ejecutarán `myorg-nginx` como si el usuario usara `./myorg-nginx`.

          * <DNT>
              **Windows:**
            </DNT>

            Para ejecutar un ejecutable llamado `myorg-nginx.exe` en el mismo directorio que el archivo de definición, puede usar `\myorg-nginx.exe` o `.\myorg-nginx.exe`. Los sistemas Windows que escriban `myorg-nginx.exe` se ejecutarán como si indicaran la ruta actual: `.\myorg-nginx.exe`.

          * Para usar un comando instalado dentro de un directorio en el `$PATH` del host, simplemente use el nombre del comando. Ejemplo `python`.

          * Para ejecutar cualquier otro ejecutable que no esté en el `$PATH` del host ni en el directorio de integración, utilice una ruta absoluta al ejecutable. Ejemplo `/opt/jdk/bin/java`.

          Si el nombre del ejecutable proporcionado existe dentro del directorio de la integración pero también existe en otra parte del sistema `$PATH`, la versión en el directorio de la integración tiene prioridad.
      </td>
    </tr>

    <tr>
      <td>
        `interval`
      </td>

      <td>
        Opcional. El número de segundos entre dos ejecuciones consecutivas del comando, en particular entre el final de la ejecución anterior y el inicio de la siguiente ejecución.

        * Valor predeterminado para sondeo métrico: 30 segundos.
        * Mínimo (piso): 15 segundos.
        * Alertas: Si se utiliza métrica para alertas, utilice un intervalo de 30 segundos o menos.
      </td>
    </tr>

    <tr>
      <td>
        `prefix`
      </td>

      <td>
        Opcional. La categorización del inventario en forma de `category/short_integration_name`. Ejemplo `integration/myorg-nginx`.

        El prefijo no es una ruta específica de la plataforma. La barra diagonal es el separador correcto entre la categoría y `short_integration_name`.

        El prefijo puede tener un máximo de dos niveles. De lo contrario, no se informará el inventario.

        Valor predeterminado si no se establece: `integration/integration_name`.
      </td>
    </tr>
  </tbody>
</table>

## Archivo de configuración [#config-file]

El [archivo de configuración](/docs/infrastructure/infrastructure-integrations/custom-integrations/create-integration-config-file) tiene un formato de nombre como `INTEGRATION_NAME-config.yml`. Este archivo especifica qué ejecutables ejecutar y el parámetro requerido para ejecutarlos. Vive en este directorio:

* Linux:

  ```
  /etc/newrelic-infra/integrations.d/
  ```

* Ventanas:

  ```
  C:\Program Files\New Relic\newrelic-infra\integrations.d
  ```

<Callout variant="tip">
  Recomendamos [borrar](http://www.yamllint.com/) los archivos de configuración YAML antes de usarlos para evitar problemas de formato.
</Callout>

A continuación se muestra un ejemplo de un archivo de configuración con una instancia definida. Las explicaciones de estos campos se explican debajo del ejemplo.

```
integration_name: com.myorg.nginx
instances:
  - name: nginx1.myorg.com-metrics
    command: metrics
    arguments:
      status_url: http://127.0.0.1/status
    labels:
      environment: production
      role: load_balancer
```

Otro ejemplo de un archivo de configuración con dos instancias definidas.

```
integration_name: com.myorg.nginx
instances:
  - name: nginx1.myorg.com-metrics
    command: metrics
    arguments:
      status_url: http://one.url/status
    labels:
      environment: production
      role: load_balancer
 - name: nginx2.myorg.com-metrics
   command: metrics
   arguments:
     status_url: http://another.url/status
   labels:
     environment: production
     role: load_balancer
```

### Definiciones de campos del archivo de configuración [#config-fields]

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        Campo de archivo de configuración
      </th>

      <th>
        Descripción
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `integration_name`
      </td>

      <td>
        Requerido. Este es el encabezado y se utiliza para identificar qué ejecutables ejecutar. Este nombre debe coincidir exactamente con el nombre especificado en el [archivo de definición](#definition-file) de la integración.

        <DNT>**Recommendation:**</DNT> Para garantizar nombres únicos, utilice notación de nombre de dominio inversa.
      </td>
    </tr>

    <tr>
      <td>
        `name`
      </td>

      <td>
        Requerido. Este es el nombre de la invocación (instancia) específica de la integración. Esto se utiliza para ayudar a identificar cualquier mensaje de registro generado por esta integración y también es útil para [la resolución de problemas](/docs/infrastructure/new-relic-infrastructure/troubleshooting/generate-logs-troubleshooting-infrastructure).
      </td>
    </tr>

    <tr>
      <td>
        `command`
      </td>

      <td>
        Requerido. Este es el comando a ejecutar. Debe coincidir exactamente con uno de los nombres de alias únicos especificados en el [archivo de definición](/docs/infrastructure/integrations-sdk/file-specifications/integration-definition-file-specifications) de la integración.
      </td>
    </tr>

    <tr>
      <td>
        `arguments`
      </td>

      <td>
        Opcional. Un objeto YAML donde:

        * Claves: el nombre del argumento. Transformado a mayúsculas cuando se establece como variable de entorno.

        * Valores: los valores del argumento. Pasado tal cual.

          Los argumentos están disponibles para una integración como un conjunto de variables de entorno.

          Los argumentos en el archivo de configuración no pueden escribirse en mayúscula y deben usar guiones bajos para separar las palabras.
      </td>
    </tr>

    <tr>
      <td>
        `labels`
      </td>

      <td>
        Opcional. Un objeto YAML donde:

        * Claves: El nombre de la etiqueta.
        * Valores: el valor de etiqueta definido.
      </td>
    </tr>

    <tr>
      <td>
        `integration_user`
      </td>

      <td>
        Opcional. Cadena con el nombre que utilizará el agente para ejecutar el binario de integración.

        Predeterminado: depende del `usermode`. De forma predeterminada, la integración se ejecuta con el mismo usuario que ejecuta el agente de integración, nri-agente para el modo privilegiado y no privilegiado y el usuario raíz para el modo raíz.

        Cuando esté presente, el agente de infraestructura ejecutará el binario de integración como el usuario especificado. Por ejemplo, para ejecutar el binario de integración como usuario root cuando se ejecuta el agente en un `usermode` diferente de `root`, simplemente agregue `integration_user: root` al archivo de configuración.
      </td>
    </tr>
  </tbody>
</table>
