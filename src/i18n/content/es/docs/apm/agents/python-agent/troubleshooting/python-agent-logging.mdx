---
title: Registro del agente Python
type: troubleshooting
tags:
  - Agents
  - Python agent
  - Troubleshooting
metaDescription: 'How to define log_file, log_level, and other log settings in the New Relic Python agent''s config file.'
freshnessValidatedDate: never
translationType: machine
---

## Problema

Puede configurar el agente Python para log la salida. Esta configuración permite al agente rastrear si se está conectando correctamente a New Relic y si se produce algún error. Esta información será útil para el soporte de New Relic si tiene problemas.

## Solución

El registro `debug` detallado puede ayudar a solucionar problemas de instalación estándar del agente Python.

<Callout variant="important">
  Algunos socios utilizan diferentes procedimientos:

  * [Depurando el agente Python con Heroku](/docs/agents/python-agent/hosting-services/python-agent-and-heroku#debugging-the-python-agent)
  * [Depurando el agente Python con OpenShift](/docs/agents/python-agent/hosting-services/python-agent-openshift#debugging-the-python-agent)
</Callout>

Para habilitar el registro `debug` :

1. Abra su <DNT>**newrelic.ini**</DNT>, generalmente ubicado dentro de la jerarquía de su aplicación.

2. Descomentar `#log_file = /tmp/newrelic-python-agent.log`. Asegúrese de tener permisos de escritura en la ubicación del log y cambie la ruta y el nombre del archivo si es necesario. Si no hay una ubicación de archivo adecuada, puede configurar `log_file` en `stderr`.

3. Cambie `log_level` a `debug` (de `info`).

   <Callout variant="caution">
     Iniciar sesión en `debug` puede generar una gran cantidad de datos muy rápidamente. monitor de cerca el tamaño de su archivo de registro, cambiando `log_level` nuevamente a `info` a medida que finalice la resolución de problemas.
   </Callout>

4. Guarde y cierre el archivo. Reinicie su aplicación para que la configuración surta efecto.

5. Genera unos minutos de tráfico a tu aplicación.

6. Si envía su archivo de registro al soporte de New Relic, adjunte su <DNT>**newrelic.ini**</DNT> a su ticket de soporte e indique a Soporte su zona horaria.

<Callout variant="important">
  Cuando resuelva los problemas de su agente New Relic Python, asegúrese de que esté configurado para generar un archivo de registro de nivel de depuración y monitor de cerca el tamaño de su archivo de registro. El uso de `log_level = debug` genera una gran cantidad de datos muy rápidamente. Después de reproducir su problema, devuelva el archivo de registro a `log_level = info`.
</Callout>

### Log en un archivo [#logging-to-a-file]

El agente utiliza el módulo de registro de Python para generar mensajes de registro. Por lo tanto, los resultados del agente deben tenerse en cuenta en la estrategia de registro general de su aplicación.

Si no está utilizando el módulo de registro, el agente proporciona una forma simplificada de habilitar un archivo de registro para el agente Python. Para utilizar esto, configure las opciones `log_file` y `log_level` en el [archivo de configuración del agente](/docs/agents/python-agent/installation-and-configuration/python-agent-configuration).

<DNT>
  **Example:**
</DNT>

```
log_file = /tmp/newrelic-python-agent.log
log_level = info
```

La ruta proporcionada para `log_file` debe permitir que el usuario con el que se ejecuta su aplicación pueda escribir.

<Callout variant="tip">
  Si usa `Apache/mod_wsgi` el usuario de Apache tiene acceso restringido al sistema de archivos. Cree un directorio especial en el que se pueda colocar el archivo de registro en el que pueda escribir el usuario de Apache. Se recomienda utilizar una ruta absoluta y no una ruta relativa.
</Callout>

El nivel de registros utilizado puede ser uno de `error`, `warning`, `info` o `debug`. En circunstancias normales, utilice `info`. Se utilizan opciones de depuración más detalladas para `debug`. No utilice estas opciones de depuración detalladas durante un período prolongado. Pueden generar resultados excesivos y el controlador de archivos de registro del módulo de registro es el controlador de archivos estándar y no realiza ninguna rotación de archivos de registros.

### Log en error estándar [#logging-to-standard-error]

Para algunos proveedores de alojamiento, es posible que no sea posible utilizar un archivo de registro distinto para el agente. Configure el módulo de registro para log en la salida de error estándar. Este resultado se captura en el archivo de registro de error normal de su mecanismo de alojamiento.

Para hacer esto dentro del archivo de configuración del agente, ejecute:

```
log_file = stderr
log_level = info
```

El valor `stdout` también se puede utilizar en lugar de `stderr`.

### Log todos los datos ( log de auditoría) [#audit-log]

Si necesita registrar y ver información sobre [<DNT>**all**</DNT> datos que se transmiten](/docs/agents/manage-apm-agents/configuration/log-audit-all-data-your-new-relic-agent-transmits) entre el proceso de monitoreo y el recolector de New Relic, puede habilitar [el registro de auditoría](/docs/apm/agents/python-agent/configuration/python-agent-configuration/#audit-log-file) por períodos cortos de tiempo. Esto es útil, por ejemplo, durante la depuración o la auditoría, cuando necesita información detallada sobre qué se está transmitiendo exactamente.

### Solucionar problemas de conflictos del módulo log [#logging-module-conflicts]

Si no se captura ningún registro, puede haber un conflicto con la forma en que se inicializa y/o configura el módulo de registro de Python. Pueden surgir problemas al utilizar las siguientes funciones:

<CollapserGroup>
  <Collapser
    id="config.file"
    title={<><InlineCode>logging.config.fileConfig()</InlineCode> función</>}
  >
    Un problema que puede surgir es cuando la aplicación de supervisión utiliza la función `logging.config.fileConfig()` para inicializar el módulo de registro de Python. Si el módulo de registro de Python se inicializa con esta llamada, esto deshabilitará de forma predeterminada el registro del agente si el agente ya se había inicializado antes de la llamada.

    Si usa Python 2.6 o superior y la llamada a `logging.config.fileConfig()` está bajo su control, una opción es modificar la llamada para pasar el argumento `disable_existing_loggers` con el valor de `False`. Esto evitará que el registrador existente se desactive y, como tal, el registrador agente quedará solo.

    ```
    logging.config.fileConfig('logging.cfg', disable_existing_loggers=False)
    ```

    Si no puede modificar la llamada, o no sería apropiado hacerlo, la alternativa es restablecer el logger instalado por el agente. Para hacer esto, se debe agregar una sección logger al archivo de configuración de registro que se pasa a `logging.config.fileConfig()`.

    ```
    [loggers]
    keys = root,newrelic

    [logger_newrelic]
    qualname = newrelic
    level = INFO
    handlers =
    ```

    En este caso, si la configuración `handlers` no está configurada, el controlador asociado con el logger raíz dictará cómo se registrarán los mensajes. Alternativamente, puede consultar directamente el controlador apropiado que debe usarse para log los mensajes.

    También puede surgir un problema similar al anterior cuando la aplicación de monitorización utiliza `logging.config.dictConfig()`.
  </Collapser>

  <Collapser
    id="existing.loggers"
    title={<><InlineCode>disable_existing_loggers</InlineCode> argumento de función</>}
  >
    Cuando se utiliza un diccionario para configurar el módulo de registro, no hay ningún argumento de función `disable_existing_loggers`. En su lugar, especifíquelo como una clave dentro del diccionario.

    ```
    LOGGING = {
        'disable_existing_loggers': False,
        ...
    }
    ```

    Al igual que antes, para evitar el registrador existente heredado, se debe agregar una definición logger explícita al diccionario utilizado para configurar el módulo de registro.

    ```
    LOGGING = {
        ...,

        'loggers': {
            'newrelic': {
                'level': 'INFO',
            },
            ...
        }
    }
    ```

    Para obtener más información, consulte la documentación [del módulo de registro de Python](http://docs.python.org/library/logging.config.html) .
  </Collapser>
</CollapserGroup>

Consulte la documentación de cualquier framework web o aplicación que se esté utilizando. Puede proporcionar un mecanismo especializado para configurar el módulo de registro de Python. Por ejemplo, cuando se utiliza Django, el método de diccionario para configurar el módulo de registro de Python se admite automáticamente, y las definiciones se establecen en el atributo `LOGGING` dentro del módulo de configuración de Django.

Para obtener más información, consulte la documentación [de configuración de registro de Django](https://docs.djangoproject.com/en/dev/topics/logging/#configuring-logging) .

### Rotar agente archivo de registro [#rotation-of-agent-log-file]

Cuando se utiliza la opción `log_file` en la configuración del agente, se utiliza el controlador de archivos estándar del módulo de registro. Esto no realiza ninguna rotación de archivo de registro. La rotación de archivos de registros no se realiza automáticamente ya que no sabremos qué tipo de controlador de archivos de registros giratorio puede querer utilizar, además los controladores de archivos de registros giratorios estándar suministrados con Python no son necesariamente seguros para una configuración de múltiples procesos. Como tal, puede ser necesario descargar y utilizar uno de los controladores de archivos de registro rotativos de terceros o utilizar un sistema de registro dedicado.

Si su aplicación se ejecuta en un solo proceso, puede utilizar de forma segura cualquiera de los controladores `RotatingFileHandler` o `TimedRotatingFileHandler` suministrados con el módulo de registro. Para usar esto solo para la salida del agente Python, incluya al inicio de su módulo o archivo script WSGI, pero antes de la importación del módulo `newrelic`, lo siguiente:

```
_LOG_FORMAT = '%(asctime)s (%(process)d/%(threadName)s)' \
        ' %(name)s %(levelname)s - %(message)s'

_logger = logging.getLogger('newrelic')
_handler = logging.handlers.TimedRotatingFileHandler(
        'agent.log', when='midnight', backupCount=7)
_formatter = logging.Formatter(_LOG_FORMAT)
_handler.setFormatter(_formatter)
_logger.addHandler(_handler)
_logger.setLevel(logging.INFO)
```

Este código accede a la instancia logger raíz `newrelic`, le adjunta el controlador de archivo de registro giratorio y establece el nivel de registros para los mensajes que se enviarán a este archivo de registro. También mostramos cómo configurar el formato de mensaje de registro, pero eso es opcional.

Si se inicializa el módulo de registro en su totalidad, cualquier salida log se propagará hacia arriba y será registrada por cualquier controlador asociado con el logger raíz, incluido posiblemente un error estándar. Para evitar duplicados, configure el controlador log para el logger raíz.

El código anterior también podría simplificarse utilizando la función `logging.fileConfig()` y un archivo de configuración. Para obtener más detalles sobre el uso de un archivo de configuración, consulte la documentación del módulo de registro de Python en [Configuración de registro](http://docs.python.org/howto/logging.html#configuring-logging).

### Rotar log en configuración multiproceso [#multi-process-safe-log-rotation]

Los controladores de archivo de registro giratorios proporcionados en el módulo de registro estándar no son del todo seguros de usar en una configuración de servidor multiproceso. Los problemas que pueden ocurrir son la mezcla de mensajes de múltiples procesos y los intentos de múltiples procesos de realizar la rotación de archivos de registros al mismo tiempo.

Para obtener un mecanismo de rotación de archivos de registros más sólido, utilice un controlador log de terceros junto con el módulo de registro de Python.

Una de esas implementaciones disponibles en PyPi es:

* [Controlador log simultáneos](http://pypi.python.org/pypi/ConcurrentLogHandler/)

Para una solución más compleja, también puedes considerar un servicio de registro como:

* [Servidor de registro de Python](http://code.google.com/p/python-loggingserver/)

Consulte también la lista de [otros controladores](http://docs.python.org/library/logging.handlers.html#module-logging.handlers) proporcionados como estándar en el módulo de registro de Python, ya que aquellos para enviar a un socket o publicar en una URL HTTP también pueden ser soluciones razonables en algunas circunstancias.
