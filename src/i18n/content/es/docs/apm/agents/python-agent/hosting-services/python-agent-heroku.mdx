---
title: Agente Python y Heroku
tags:
  - Agents
  - Python agent
  - Hosting services
metaDescription: 'Heroku users: How to prepare, install, test, and initialize the Python agent.'
freshnessValidatedDate: never
translationType: machine
---

[Heroku](https://devcenter.heroku.com/articles/newrelic) es una solución de plataforma como servicio (PaaS) para alojar aplicaciones web en varios lenguajes de agentes, incluido Python. Con el agente podrás ampliar Heroku con métrica de New Relic.

Este documento describe consideraciones especiales para usar Heroku como servicio de alojamiento con el agente Python.

## Instale el complemento New Relic [#installing]

Después de implementar su aplicación Python en Heroku, instale el agente Python:

<CollapserGroup>
  <Collapser
    id="via_heroku"
    title="A través del sitio web de Heroku"
  >
    Para instalar el complemento New Relic a través del sitio web de Heroku, debe iniciar sesión en Heroku:

    1. Desde [la página de complementos de Heroku para New Relic](https://elements.heroku.com/addons/newrelic#pricing), seleccione un plan de suscripción.

    2. Desde <DNT>**Select an app**</DNT>, selecciona tu aplicación New Relic.

    3. Dale a tu aplicación un [nombre descriptivo](/docs/apm/new-relic-apm/installation-configuration/name-your-application) con este comando del cinturón de herramientas de Heroku:

       ```bash
       heroku config:set NEW_RELIC_APP_NAME='Your Application Name'
       ```

    4. Reinicie su banco de pruebas.

    5. Genera algo de tráfico a tu aplicación.
  </Collapser>

  <Collapser
    id="via_toolbelt"
    title="A través del cinturón de herramientas Heroku"
  >
    Para instalar el complemento del agente Python con Heroku the toolbelt:

    1. Ejecute el siguiente comando, donde `$planlevel` es el [plan de suscripción adecuado](https://elements.heroku.com/addons/newrelic#pricing):

       ```bash
       heroku addons:create newrelic:$planlevel
       ```

    2. Asigne a su aplicación un [nombre descriptivo](/docs/apm/new-relic-apm/installation-configuration/name-your-application) con este comando del cinturón de herramientas:

       ```bash
       heroku config:set NEW_RELIC_APP_NAME='Your Application Name'
       ```

    3. Reinicie su banco de pruebas.

    4. Genera algo de tráfico a tu aplicación.
  </Collapser>
</CollapserGroup>

La instalación del complemento crea automáticamente una cuenta privada de New Relic y configura el acceso para los hosts de Heroku. El agente comenzará a monitorear el rendimiento de la aplicación, la experiencia del usuario final y el rendimiento del host recopilados después de instalar el complemento. En unos minutos, los datos deberían comenzar a aparecer en su [página Resumen de APM](/docs/apm/applications-menu/monitoring/apm-overview-page).

## Actualizar desde una instalación de agente existente [#upgrading]

Si ya hay un agente instalado, reinstale el complemento usando el comando del cinturón de herramientas de Heroku.

```bash
heroku config:set NEW_RELIC_APP_NAME='Your Application Name'
```

## Instalar el agente Python [#installing-the-python-agent]

Para instalar un paquete Python de terceros, como nuestro agente Python en Heroku, use <DNT>**pip**</DNT>. Heroku busca automáticamente un archivo <DNT>**requirements.txt**</DNT> en el directorio raíz de su proyecto. Instala todo lo que figura en ese archivo cuando envía su proyecto a Heroku.

1. Cree o edite el archivo `requirements.txt` , agregando la línea:

   ```
   newrelic
   ```

2. <DNT>**Django users:**</DNT> Modifique la entrada `web` de su `Procfile`, anteponiendo el valor con `newrelic-admin run-program`. Por ejemplo:

   ```
   web: newrelic-admin run-program gunicorn mysite.wsgi
   ```

3. Envía tu proyecto a Heroku.

Esto instalará el paquete del agente Python con la última versión que figura en el Índice de paquetes Python (PyPi).

## Actualizar el agente Python [#updating-the-python-agent]

Heroku almacena en caché los paquetes y no detecta cuando hay disponible una versión más nueva del agente Python. Para forzar una actualización:

1. Edite el archivo `requirements.txt` incluyendo la versión específica del agente Python (`n.n.n.n`) con el nombre del paquete:

   ```
   newrelic==n.n.n.n
   ```

2. Envía tu proyecto a Heroku.

## Verifique el complemento New Relic [#verify-new-relic-add-on]

Para verificar que el complemento New Relic se haya habilitado, ejecute:

```bash
heroku run env | grep NEW_RELIC
```

Esto genera una lista de variables de entorno específicas de New Relic en Heroku. El agente de Python los utiliza para determinar qué cuenta de New Relic y qué datos de aplicación utilizar para generar informes.

Como mínimo, deberías ver:

```ini
NEW_RELIC_LOG=stdout
NEW_RELIC_LICENSE_KEY=****************************************
NEW_RELIC_APP_NAME=Your app name
```

El <InlinePopover type="licenseKey"/>es exclusivo de su cuenta New Relic.

## Solucionar problemas de su instalación [#troubleshooting]

A los pocos minutos de instalar y configurar el agente, los datos deberían comenzar a aparecer en [la página Resumen](/docs/apm/applications-menu/monitoring/apm-overview-page) de APM de su aplicación. Si no aparecen datos, pruebe que las variables de entorno se estén detectando correctamente ejecutando:

```bash
heroku run newrelic-admin validate-config - stdout
```

Esto creará una conexión e informará los datos de la transacción de prueba en la aplicación <DNT>**Python Agent Test**</DNT>. Capture el resultado de la ejecución de la prueba y utilice los datos para solucionar el problema. Si necesita más ayuda, siga los [procedimientos de resolución de problemas del agente Python](/docs/agents/python-agent/troubleshooting/no-data-appears-python).

## Inicializar el agente Python [#initializing-the-python-agent]

Para inicializar el agente Python:

1. Desde la raíz de su proyecto, busque el `Procfile`
2. Modifique la entrada `web` en su `Procfile` para definir qué hacer para iniciar su aplicación web Python.
3. Consulte los siguientes ejemplos para insertar `newrelic-admin run-program` al inicio del comando.
4. Ejecute su aplicación web Python bajo el control del script de administración del agente Python.

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        Mecanismo de alojamiento
      </th>

      <th>
        Ejemplo de entrada web
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Flask con el host de desarrollo incorporado
      </td>

      <td>
        ```
        web: newrelic-admin run-program python hello.py
        ```
      </td>
    </tr>

    <tr>
      <td>
        Frasco con gunicorn
      </td>

      <td>
        ```
        web: newrelic-admin run-program gunicorn -b "0.0.0.0:$PORT" -w 3 hello:app
        ```
      </td>
    </tr>

    <tr>
      <td>
        Django con gunicorn listado en `INSTALLED_APPS`
      </td>

      <td>
        ```
        web: newrelic-admin run-program python hellodjango/manage.py run_gunicorn -b "0.0.0.0:$PORT" -w 3
        ```
      </td>
    </tr>
  </tbody>
</table>

<Callout variant="caution">
  Evite el uso de hosts de desarrollo integrados de cualquier framework web anterior a la versión 2.7.4 de Python o anterior a Django 1.4. En su lugar, utilice <DNT>**gunicorn**</DNT> o <DNT>**uWSGI**</DNT>.

  El host WSGI que utilizaba el módulo <DNT>**wsgiref**</DNT> no era totalmente compatible con WSGI para los hosts de desarrollo anteriores a la versión 2.7.4 de Python. Esto impidió que el agente Python pudiera informar datos correctos.
</Callout>

## Envoltura de aplicaciones WSGI [#wrapping-the-wsgi-application]

El agente proporciona un ajuste automático del punto de aplicación WSGI para estos marcos web:

* Bottle
* Django
* Flask

Si está utilizando alguno de estos marcos web de Python, no se requieren pasos adicionales.

Para otros, debe modificar el archivo de código Python con el punto de entrada de su aplicación WSGI para encapsular el objeto de la aplicación WSGI con un contenedor de aplicación WSGI. Esto iniciará el tiempo para las solicitudes web recibidas por su aplicación.

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        Si el punto de entrada es este...
      </th>

      <th>
        Hacer esto...
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        El punto de entrada es una función.
      </td>

      <td>
        Envuélvelo en un decorador:

        ```python
        import newrelic.agent

          @newrelic.agent.wsgi_application()
          def application(environ, start_response):
            ...
        ```
      </td>
    </tr>

    <tr>
      <td>
        El punto de entrada es una función u objeto importado de un módulo diferente.
      </td>

      <td>
        Envuélvalo en estilo decorador `pre` :

        ```python
        import myapp
          application = myapp.WSGIHandler()
          application = newrelic.agent.WSGIApplicationWrapper(application)
        ```
      </td>
    </tr>
  </tbody>
</table>

## Seguimiento de tareas de Celery [#tracking-of-celery-tasks]

Para registrar el tiempo de ejecución de las tareas de Celery como tareas en segundo plano en su aplicación web, complete el inicio del host de Celery con el comando `newrelic-admin` .

Anteponga el comando de inicio existente definido por la entrada `worker` en su `Procfile`:

```
worker: newrelic-admin run-program python hellodjango/manage.py celeryd -E -B --loglevel=INFO
```

## Depurar el agente Python [#debugging-the-python-agent]

Para comenzar la depuración, recopile la salida log del agente Python. Heroku envía la salida del agente Python a la salida estándar y la captura en el log del servidor web.

Para obtener acceso al log del servidor web de Heroku, ejecute:

```bash
heroku logs
```

De forma predeterminada, el agente Python iniciará log en el nivel `info`. Si el soporte de New Relic solicita un nivel alternativo de registro, debe agregar manualmente una variable de configuración. Por ejemplo, para configurar la salida del registro en `debug`, ejecute:

```bash
heroku config:add NEW_RELIC_LOG_LEVEL=debug
```

Su aplicación se reinicia automáticamente cuando cambia el nivel de registros.

<Callout variant="caution">
  El nivel de registros `debug` produce grandes cantidades de resultados. Asegúrese de eliminar esta configuración tan pronto como ya no sea necesaria, ejecutando:

  ```bash
  heroku config:remove NEW_RELIC_LOG_LEVEL
  ```
</Callout>

## Editar el archivo de configuración del agente [#agent-configuration-file]

Cuando se utiliza el complemento de Heroku con New Relic, esto establece automáticamente variables de entorno clave para el agente Python. También puede personalizar configuraciones adicionales con el archivo de configuración del agente o usar [la configuración del lado del servidor](/docs/agents/python-agent/installation-configuration/python-agent-configuration#options).

No agregue configuraciones principales como la clave de licencia, el nombre de la aplicación, etc. al archivo de configuración. Heroku agrega automáticamente estas configuraciones.

Para personalizar otras configuraciones, use el archivo de configuración del agente Python con Heroku:

1. Agregue el archivo de configuración del agente `newrelic.ini` al directorio raíz del repositorio de su proyecto que está subiendo a Heroku: en la sección `[newrelic]` , incluya la configuración específica; Por ejemplo:

   ```ini
   [newrelic]
   transaction_tracer.function_trace = mydbm:connect
   ```

2. Confirme el archivo de configuración en su repositorio y envíe el cambio a Heroku.

3. Utilice el comando `heroku config:add` para configurar la variable de entorno `NEW_RELIC_CONFIG_FILE` para su aplicación desplegar:

   ```bash
   heroku config:add NEW_RELIC_CONFIG_FILE=newrelic.ini
   ```

Si está utilizando el programa contenedor <DNT>**newrelic-admin**</DNT> para lanzar su host WSGI, la configuración de su clave de licencia, nombre de la aplicación, etc., se obtendrá de las variables de entorno establecidas por Heroku. También se aplicará cualquier configuración adicional que establezca en el archivo de configuración del agente. Luego, cuando el agente se registre en New Relic, cualquier configuración del lado del servidor también se fusionará para crear la configuración final que utilizará el agente.
