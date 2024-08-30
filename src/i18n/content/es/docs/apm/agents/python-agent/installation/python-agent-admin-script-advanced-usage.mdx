---
title: 'Script de administración del agente Python: uso avanzado'
tags:
  - Agents
  - Python agent
  - Installation
metaDescription: A summary of functions and commands available with the New Relic Python agent's newrelic-admin script.
freshnessValidatedDate: never
translationType: machine
---

El script de administración del agente Python se utiliza durante el [proceso de instalación](/docs/apm/agents/python-agent/getting-started/introduction-new-relic-python/#installation). Cuando se instala el paquete del agente Python, el script `newrelic-admin` también se instala en el directorio `bin` de la instalación de Python o del entorno virtual.

Este documento brinda detalles más detallados sobre estos usos del script de administración:

* Generando el archivo de configuración inicial del agente
* Validando su archivo de configuración
* Probando la conexión con New Relic
* Ajuste del inicio de la aplicación web Python independiente

## Estructura de subcomando [#sub-commands]

Para ejecutar subcomandos, proporcione el nombre del subcomando como primer argumento del script `newrelic-admin` . Luego agregue cualquier opción después del nombre del subcomando. Por ejemplo:

```shell
newrelic-admin help
```

## help &lt;command> [#help]

Cuando se ejecuta sin más argumentos, proporciona una lista de todos los subcomandos aceptados:

```shell
newrelic-admin help
[output]  Usage: newrelic-admin command [options]
[output]  
[output]  Type 'newrelic-admin help <command>'for help on a specific command.
[output]  
[output]  Available commands are:
[output]    generate-config
[output]    license-key
[output]    local-config
[output]    network-config
[output]    record-deploy
[output]    run-program
[output]    run-python
[output]    server-config
[output]    validate-config
```

Para ver detalles adicionales sobre un subcomando, ejecute el comando de ayuda con el subcomando y cualquiera de sus opciones. Por ejemplo:

```shell
newrelic-admin help generate-config
[output]  Usage: newrelic-admin generate-config license_key [output_file]
[output]  
[output]  Generates a sample agent configuration file for <license_key>.
```

## generate-config license_key \[output_file] [#generate-config]

Genera un archivo de configuración del agente de muestra. La opción `license_key` es tu <InlinePopover type="licenseKey"/>.

De forma predeterminada, el archivo de configuración de muestra se dirigirá a la salida estándar y se mostrará en su pantalla. Para capturar el resultado, puede guardarlo en un archivo indicando el nombre del archivo como opción `output_file` .

Cuando se genera el archivo de configuración del agente de muestra, solo se actualiza la opción de clave de licencia en el archivo. Aún así debes editar el archivo y realizar cambios en las opciones `app_name` y `log_file` según corresponda. Para obtener más información, consulte [Instalación del agente Python](/docs/python/python-agent-installation).

Si no puede ejecutar el comando `generate-config` para generar el archivo de configuración inicial del agente, puede descargar un archivo de configuración de muestra desde [download.newrelic.com/python_agent/release/newrelic.ini](https://download.newrelic.com/python_agent/release/newrelic.ini).

## validate-config config_file \[log_file] [#validate-config]

Valida la sintaxis de un archivo de configuración de agente proporcionada por la opción `config_file` .

Esta podría ser la configuración del agente generada por `generate-config` y editada posteriormente, o un archivo de configuración del agente creado al descargar el archivo de configuración de muestra del sitio de descarga.

Además de validar la sintaxis del archivo de configuración, utilizar el `license_key` contenido en el archivo de configuración del agente para identificar su cuenta también probará si se puede establecer una conexión con nuestros servidores.

Por lo tanto, este subcomando se puede utilizar para garantizar que DNS esté disponible para resolver el nombre de host de nuestro host recolector de datos y que haya conectividad de red disponible y que ningún firewall esté bloqueando el acceso.

Al conectarse a nuestros servidores, la prueba creará una aplicación en su cuenta llamada `Python Agent Test`. En esta aplicación se reportarán una pequeña cantidad de datos y errores de transacciones web simuladas. Después de un período de tiempo, esta aplicación en su cuenta podrá eliminarse de la lista <DNT>**Applications**</DNT> si lo desea.

Cuando se ejecute esta prueba, se creará un archivo de registro en la ubicación:

```
/tmp/python-agent-test.log
```

Si necesita anular esta ubicación, puede proporcionar la opción `log_file` . Para que lo que se escribiría en el archivo de registro se muestre en su pantalla, puede usar `stdout` o `stderr` como valor pasado como la opción `log_file` .

Cuando se utiliza un servicio de alojamiento como Heroku, donde normalmente no se usaría un archivo de configuración de agente, este subcomando aún se puede usar para probar la conexión con nosotros. Para Heroku, la información de la clave de licencia se define en una variable de entorno que Heroku configura automáticamente cuando agrega el complemento New Relic a su instancia de Heroku.

En este caso en el que se utiliza una variable de entorno para definir la clave de licencia, para ejecutar la prueba de conectividad, pase el valor `-` para la opción `config_file` en lugar de la ruta al archivo de configuración del agente. Entonces, para ejecutar el comando en su instancia de Heroku, usaría:

```shell
heroku run newrelic-admin validate-config - stdout
```

Tenga en cuenta que hemos proporcionado `stdout` para el archivo de registro en este caso; de lo contrario, sería necesario recuperar por separado el archivo de registro generado.

Se recomienda que al configurar el agente Python por primera vez, o incluso quizás en un nuevo host, se utilice este subcomando para probar si los datos se pueden informar correctamente. Para obtener más información, consulte [Prueba del agente Python](/docs/python/testing-the-python-agent).

## run-program ... [#run-program]

Ejecuta la línea de comando para una aplicación web Python proporcionada como `...` pero fuerza la inicialización del agente automáticamente al inicio.

Este es un método abreviado para iniciar una aplicación web Python sin necesidad de realizar cambios manualmente en la aplicación web para agregar código para inicializar específicamente el agente Python. Se puede utilizar en cualquier situación en la que se utilice un framework web Python o un servidor WSGI donde se agregue automáticamente instrumentación para ajustar el punto de entrada de la aplicación WSGI. En otras palabras, en situaciones en las que solo era necesario agregar el código de inicialización del agente.

La configuración del agente cuando se utiliza este método se puede proporcionar de dos maneras diferentes. Si utiliza un archivo de configuración de agente completo, la ubicación de esa configuración puede ser proporcionada por la variable de entorno `NEW_RELIC_CONFIG_FILE` .

Si estuvieras usando gunicorn, por ejemplo, podrías decir:

```ini
NEW_RELIC_CONFIG_FILE=newrelic.ini newrelic-admin run-program gunicorn wsgi:application
```

O

```shell
NEW_RELIC_CONFIG_FILE=newrelic.ini
export NEW_RELIC_CONFIG_FILE

newrelic-admin run-program gunicorn wsgi:application
```

Al especificar la ubicación del archivo de configuración utilizando la variable de entorno `NEW_RELIC_CONFIG_FILE` , se pueden configurar las siguientes variables de entorno adicionales para personalizar cómo se procesa el archivo de configuración.

`NEW_RELIC_ENVIRONMENT`: El nombre de un entorno de implementación específico. Cuando se especifica, la configuración de anulación adicional se leerá desde una sección desplegable separada dentro del archivo de configuración. La sección del archivo de configuración para un entorno desplegable específico debe denominarse `newrelic:environment` donde `environment` se reemplaza con el nombre especificado por esta variable de entorno.

En lugar de un archivo de configuración del agente completo, también puede configurar variables de entorno que proporcionen solo la información clave de configuración del agente. Las variables de entorno que se pueden configurar en este caso son:

* `NEW_RELIC_LICENSE_KEY` - Tu New Relic

  <InlinePopover type="licenseKey"/>

  .

* `NEW_RELIC_APP_NAME` - El nombre de la aplicación sobre la que desea informar datos en la UI. Si no está definido, el valor predeterminado es `Python Application`.

* `NEW_RELIC_LOG` - La ruta a un archivo que se utilizará para el log del agente. Si no se define, no se producirá ningún registro. También se puede configurar en `stdout` o `stderr` para que el registro vaya a la salida estándar o al error estándar del proceso.

* `NEW_RELIC_LOG_LEVEL` - El nivel en el que el agente generará el registro. Si no está definido, el valor predeterminado es `info`. Los valores posibles, en orden creciente de detalle, son: `critical`, `error`, `warning`, `info` y `debug`.

Se utilizan variables de entorno individuales al alojar su aplicación en Heroku. Las variables de entorno se configurarán automáticamente según corresponda por el entorno Heroku cuando agregue el complemento New Relic. Por lo tanto, cuando se utiliza Heroku, no es necesario configurar ninguna de las variables de entorno anteriores cuando se utiliza el comando `newrelic-admin` con esta opción desde su <DNT>**Procfile**</DNT>.

Tenga en cuenta que el programa empaquetado debe utilizar la misma instalación de Python o entorno virtual en el que se instalaron el paquete del agente Python y el script `newrelic-admin` . Si este no es el caso, entonces el script contenedor no tendrá ningún efecto e incluso puede encontrar un error al iniciar el intérprete de Python debido a que no se puede encontrar el paquete `newrelic` de Python.

Si utiliza `sudo` para iniciar su aplicación WSGI como otro usuario, tenga en cuenta que la configuración predeterminada <DNT>**sudo**</DNT> generalmente será tal que se ignorarán las variables de entorno del usuario del shell en el que se ejecuta <DNT>**sudo**</DNT> . En este caso, deberá cambiar la configuración <DNT>**sudoers**</DNT> para permitir el paso de variables de entorno específicas. Alternativamente, cree un script de shell que establezca las variables de entorno y ejecute su aplicación WSGI en `newrelic-admin`. Para iniciar su aplicación WSGI como un usuario diferente, ejecute <DNT>**sudo**</DNT> en ese script en lugar de hacerlo directamente en su aplicación WSGI.

También puede ser necesario el uso de un script contenedor adicional para configurar las variables de entorno y ejecutar su aplicación WSGI en `newrelic-admin` al usar <DNT>**supervisord**</DNT> si se encuentra algún problema con la configuración de variables de entorno dentro de la configuración <DNT>**supervisord**</DNT> que no se pasa correctamente .

## run-python ... [#run-python]

Ejecuta el ejecutable `python` desde la instalación de Python o el entorno virtual en el que está instalado `newrelic-admin` con los argumentos dados como `...` pero fuerza la inicialización del agente automáticamente al inicio.

Este es un método abreviado para iniciar una aplicación web Python sin necesidad de realizar cambios manualmente en la aplicación web para agregar código para inicializar específicamente el agente Python. Se puede utilizar en cualquier situación en la que se utilice un framework web Python o un servidor WSGI donde se agregue automáticamente instrumentación para ajustar el punto de entrada de la aplicación WSGI. En otras palabras, en situaciones en las que solo era necesario agregar el código de inicialización del agente.

En cuanto al subcomando `run-program` anterior, las variables de entorno se utilizan para configurar el agente Python. Si estuviera usando el ejecutable `python` directamente, por ejemplo, podría decir:

```ini
NEW_RELIC_CONFIG_FILE=newrelic.ini newrelic-admin run-python wsgi.py
```

O

```shell
NEW_RELIC_CONFIG_FILE=newrelic.ini 
export NEW_RELIC_CONFIG_FILE 

newrelic-admin run-python wsgi.py
```

## license-key config_file \[log_file] [#license-key]

Genera la clave de licencia que se utilizará. Esto se puede utilizar en cualquier script de inicio antes de iniciar la aplicación WSGI real para log la clave de licencia con el fin de verificar que se esté utilizando el valor correcto.

Se puede utilizar con el archivo de configuración del agente:

```shell
newrelic-admin license-key newrelic.ini
```

O

Si configura la clave de licencia utilizando variables de entorno, utilice `-` como nombre del archivo de configuración:

```shell
NEW_RELIC_LICENSE_KEY='YOUR-LICENSE-KEY'
export NEW_RELIC_LICENSE_KEY 

newrelic-admin license-key -
```

La salida tendrá la forma:

```ini
license_key = 'YOUR-LICENSE-KEY'
```

Si no se encontró ninguna clave de licencia en el archivo de configuración del agente ni se recogió de las variables de entorno del usuario, el resultado será:

```ini
license_key = None
```

## network-config config_file \[log_file] [#network-config]

Genera la configuración de red que se utilizará. Esto se puede utilizar en cualquier script de inicio antes de iniciar la aplicación WSGI real para log la configuración de red con el fin de verificar que se estén utilizando los valores correctos.

Se puede utilizar con el archivo de configuración del agente:

```shell
newrelic-admin network-config newrelic.ini
```

O

Si configura cualquier información de proxy usando variables de entorno, use `-` como nombre del archivo de configuración:

```shell
NEW_RELIC_PROXY_HOST=proxy.example.com
export NEW_RELIC_PROXY_HOST

NEW_RELIC_PROXY_PORT=8888
export NEW_RELIC_PROXY_PORT

newrelic-admin network-config -
```

La salida tendrá la forma:

```ini
host = 'collector.newrelic.com'
port = 0
proxy_host = 'proxy.example.com'
proxy_port = 8888
proxy_user = None
proxy_pass = None
ssl = True
```

Un valor de `0` para el puerto indica que el número de puerto, ya sea `80` o `443`, se seleccionará automáticamente en función de si se utiliza una conexión SSL para comunicarse con nuestro recolector de datos.

## local-config config_file \[log_file] [#local-config]

Genera la configuración del agente local según los valores predeterminados integrados, las variables de entorno y cualquier archivo de configuración del agente. Nuestro soporte técnico puede solicitar esta información al intentar depurar cualquier problema de inicio del agente. Se puede utilizar con el archivo de configuración del agente:

```shell
newrelic-admin local-config newrelic.ini
```

O

Si establece alguna configuración utilizando variables de entorno, puede usar `-` como nombre del archivo de configuración:

```shell
newrelic-admin local-config -
```

## server-config config_file \[log_file] [#server-config]

Genera la configuración completa para una aplicación específica. Esta será la configuración del agente local, anulada por cualquier [configuración del lado del servidor](/docs/agents/manage-apm-agents/configuration/configure-agent#ssc) para la aplicación específica. Nuestro soporte técnico puede solicitar esta información al intentar depurar cualquier problema de inicio del agente.

Se puede utilizar con el archivo de configuración del agente:

```shell
newrelic-admin server-config newrelic.ini
```

O

Si cambia alguna configuración usando variables de entorno, puede usar `-` como nombre del archivo de configuración:

```shell
newrelic-admin server-config -
```

Para obtener la configuración del lado del servidor, este script forzará el registro del agente para la aplicación específica definida por la configuración. Si esa aplicación aún no aparece en la interfaz de usuario de APM, se creará una entrada, pero no se reportarán datos métricos en su contra.

## record-deploy config_file description [#record-deploy]

Este es un contenedor de la API REST de New Relic para registrar el despliegue de su aplicación. También puede grabar el despliegue [directamente a través de la API REST](/docs/apm/new-relic-apm/maintenance/recording-deployments).

Para usar el comando:

1. Agregue su [clave de API](/docs/apis/rest-api-v2/requirements/api-keys) en el [archivo de configuración del agente](/docs/agents/python-agent/installation-configuration/python-agent-configuration#agent-configuration-file) (`newrelic.ini`) agregando una línea similar a la siguiente en la sección `[newrelic]` :

   ```ini
   api_key=substitute-your-api-key-here
   ```

2. Llame al comando `newrelic-admin` desde la línea de comando. (No lo agregue a su archivo de configuración) usando la siguiente estructura de subcomando:

   ```shell
   newrelic-admin record-deploy config_file description [revision changelog user]
   ```

Este subcomando tiene dos argumentos obligatorios:

* `config_file`: Ruta al nombre del archivo de configuración
* `description`: Texto para describir o identificar el despliegue; por ejemplo, los comentarios de confirmación de Git

También hay tres argumentos opcionales:

* `revision`: Identifica una revisión específica que se está implementando
* `changelog`: Proporciona un log detallado de los cambios que se realizaron
* `user`: Identifica a la persona responsable del despliegue

## Otros consejos avanzados [#advanced-tips]

Aquí hay algunas instrucciones avanzadas para ejecutar el script de administración:

<CollapserGroup>
  <Collapser
    id="multi-line"
    title="Dividir el comando del script de administración en varias líneas"
  >
    Puede configurar y exportar por separado la variable de entorno `NEW_RELIC_CONFIG_FILE` antes de ejecutar el script. Asegúrese de sustituir sus opciones de comando existentes por `YOUR_COMMAND_OPTIONS`:

    ```shell
    NEW_RELIC_CONFIG_FILE=newrelic.ini
    export NEW_RELIC_CONFIG_FILE

    newrelic-admin run-program YOUR_COMMAND_OPTIONS
    ```

    Si su comando de inicio usa `exec`, separe la configuración de la variable de entorno de la ejecución del script de administración. Asegúrese de sustituir sus opciones de comando existentes por `YOUR_COMMAND_OPTIONS`:

    ```shell
    NEW_RELIC_CONFIG_FILE=newrelic.ini
    export NEW_RELIC_CONFIG_FILE

    exec newrelic-admin run-program YOUR_COMMAND_OPTIONS
    ```

    Si utiliza un sistema de gestión de procesos como <DNT>**supervisord**</DNT> donde las variables de entorno deben establecerse en una configuración separada, no puede configurarlas en la misma línea que el comando.

    Por ejemplo, en <DNT>**supervisord**</DNT> podría utilizar lo siguiente. Asegúrese de sustituir sus opciones de comando existentes por `YOUR_COMMAND_OPTIONS`.

    ```ini
    [program:warpdrive]
    command = newrelic-admin run-program YOUR_COMMAND_OPTIONS
    environment = NEW_RELIC_CONFIG_FILE=newrelic.ini
    ```
  </Collapser>

  <Collapser
    id="run-program"
    title="Ejecutando script de administración con ejecutable de Python"
  >
    Si el comando que se ejecuta es el ejecutable `python` y se ejecuta directamente en un archivo de código Python como `python main.py`, utilice cualquiera de los siguientes:

    ```shell
    newrelic-admin run-program python main.py

    newrelic-admin run-python main.py
    ```

    El uso de `run-python` siempre utilizará el mismo ejecutable `python` que está instalado en la instalación de Python o en el entorno virtual en el que está instalado <DNT>**newrelic-admin**</DNT> .
  </Collapser>

  <Collapser
    id="location-admin"
    title="Notas sobre la ubicación de newrelic-admin"
  >
    El programa <DNT>**newrelic-admin**</DNT> que ejecute debe provenir de la misma instalación de Python o entorno virtual que utiliza su aplicación. No se pueden mezclar programas/componentes de diferentes instalaciones de Python. Si se hace esto, el agente no se ejecutará correctamente.

    Si utiliza un sistema de gestión de procesos como <DNT>**supervisord**</DNT> en un entorno virtual, puede utilizar esta configuración:

    ```ini
    [program:warpdrive]
    command = newrelic-admin run-program  
    environment = PATH="/path/to/python/app/venv/bin",NEW_RELIC_CONFIG_FILE="newrelic.ini"
    directory = /path/to/python/app
    user = www-data
    ```

    Tenga en cuenta la variable de entorno `PATH` que apunta a la misma ruta que utilizaría el entorno virtual.

    Para obtener más información sobre estas opciones para `newrelic-admin` y las diferentes opciones de configuración basadas en variables de entorno del usuario, consulte la documentación más detallada para las opciones `run-program` y `run-python` .
  </Collapser>
</CollapserGroup>
