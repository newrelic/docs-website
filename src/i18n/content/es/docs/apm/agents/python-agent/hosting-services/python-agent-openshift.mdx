---
title: Agente Python y OpenShift
tags:
  - Agents
  - Python agent
  - Hosting services
metaDescription: 'OpenShift users: How to prepare, install, test, and initialize the Python agent.'
freshnessValidatedDate: never
translationType: machine
---

[OpenShift](http://www.openshift.com/ "El enlace se abre en una ventana nueva.") es una solución de plataforma como servicio (PaaS) capaz de alojar aplicaciones web utilizando varios lenguajes, incluido el agente Python.

## Prepara tu solicitud [#preparing-your-application]

Antes de instalar el agente de Python, asegúrese de que su aplicación web de Python esté instalada y ejecutándose en OpenShift utilizando uno de los cartuchos de Python disponibles. Consulte las [guías para desarrolladores de OpenShift](https://developers.openshift.com/en/python-overview.html "El enlace se abre en una ventana nueva.") para obtener más información.

## Instalar el agente APM Python [#installing-the-python-agent]

OpenShift admite dos formas diferentes de instalar paquetes Python de terceros. Puede enumerar el paquete como una dependencia en el `setup.py` de su aplicación web o en el archivo `requirements.txt` utilizado por `pip`.

Si está utilizando un archivo `setup.py` , instale el agente agregando `newrelic` a la lista de módulos de terceros pasados a `install_requires`:

```
from setuptools import setup

setup(name='YourAppName',
      version='1.0',
      description='OpenShift App',
      author='Your Name',
      author_email='example@example.com',
      url='https://www.python.org/community/sigs/current/distutils-sig',
      install_requires=['Flask>=0.7.2', 'MarkupSafe', 'newrelic'],
     )
```

Si está utilizando `pip`, agregue la siguiente línea a `requirements.txt`:

```
newrelic
```

Cuando envíe su proyecto a OpenShift, esto instalará el paquete del agente Python. Utilizará la última versión del agente Python del espejo OpenShift del índice de paquetes de Python (PyPi). Las actualizaciones de la réplica OpenShift de PyPi pueden retrasarse, por lo que es posible que deba esperar hasta un día antes de que una nueva versión de PyPi esté disponible en OpenShift.

## Actualizar el agente Python [#updating-the-python-agent]

OpenShift almacenará en caché los paquetes y no detectará cuando esté disponible una versión más nueva del agente Python. Para forzar una actualización a una versión más nueva, incluya explícitamente la versión junto al nombre del paquete en el archivo `setup.py` o `requirements.txt` y envíe su aplicación. Utilice esta sintaxis:

```
newrelic==A.B.C.D
```

Reemplace `A.B.C.D` con la versión del agente Python que desea instalar.

## Utilice variables de entorno del agente Python [#agent-environment-variables]

Para que el agente de Python informe datos a la cuenta correcta, debe indicarle el <InlinePopover type="licenseKey"/>de su cuenta de New Relic. Para OpenShift, la forma más segura de proporcionar la clave de licencia es utilizar una variable de entorno configurada en la configuración de su aplicación mediante el comando `rhc env set` . Esto evita almacenar información confidencial en su repositorio GIT y también funciona si está utilizando una aplicación web escalada que está alojada en múltiples hosts físicos.

```
rhc env set NEW_RELIC_LICENSE_KEY=YOUR_LICENSE_KEY -a YOUR_APP_NAME
```

Mientras especifica su clave de licencia, dígale también al agente de Python dónde registrar el mensaje de registro:

```
rhc env set NEW_RELIC_LOG=stderr -a YOUR_APP_NAME
```

Para verificar que se estén configurando las variables de entorno, ejecute:

```
rhc env list -a YOUR_APP_NAME
```

Aunque estén configurados, estos solo tendrán efecto la próxima vez que se reinicien los engranajes de la aplicación web.

## Probar la instalación del agente [#testing-the-agent-installation]

Para comprobar que el paquete del agente Python se ha instalado correctamente y que las variables de entorno del agente se están configurando correctamente, puede `ssh` acceder al equipo principal de su aplicación y ejecutar:

```
newrelic-admin validate-config - stdout
```

Este script de administración creará una conexión e informará los datos de la transacción de prueba en la aplicación <DNT>**Python Agent Test**</DNT> de su cuenta.

Los datos pueden tardar hasta cinco minutos en aparecer en la UI. Si no aparece después de un tiempo, capture el resultado de ejecutar la prueba y use los datos para solucionar el problema. Si necesita más ayuda, obtenga asistencia en [support.newrelic.com](https://support.newrelic.com "El enlace se abre en una ventana nueva.").

## Inicializar el agente Python [#initializing-the-python-agent]

Los cartuchos OpenShift Python proporcionan dos formas de ejecutar una aplicación WSGI.

* El primer método utiliza una instalación Apache/mod_wsgi preconfigurada. En este caso, el punto de entrada de su aplicación WSGI debe estar definido en el archivo `wsgi.py` .
* El segundo método depende de que usted proporcione un script de aplicación web Python independiente llamado `app.py`. Por lo general, esto iniciará un servidor Python WSGI incorporado, con el punto de entrada de la aplicación WSGI especificado dentro del archivo `app.py` , o se importará desde un archivo de código Python separado, como el archivo `wsgi.py` .

Para cualquiera de los métodos, OpenShift controla el inicio del servidor WSGI. Debe integrar manualmente el agente Python en su aplicación WSGI. No puede utilizar el script contenedor `newrelic-admin` durante el inicio del servidor WSGI.

Si está utilizando el enfoque Apache/mod_wsgi, agregue el siguiente código al principio del archivo `wsgi.py` :

```
import newrelic.agent
newrelic.agent.initialize()
```

Asegúrese de que esto preceda a cualquier otra importación de módulo de Python que aparezca en el archivo `wsgi.py` . No es necesario proporcionar ningún argumento para la llamada `initialize()` , porque la información de la clave de licencia y el destino del registro se leen de las variables de entorno.

Si está utilizando un servidor Python WSGI integrado de `app.py`, coloque estas líneas en la parte superior del archivo `app.py` , incluso si importa el punto de entrada de la aplicación WSGI desde un archivo `wsgi.py` . Cuando utilice `app.py` con `wsgi.py`, no agregue estas líneas a `wsgi.py`.

Evite el uso de los servidores de desarrollo integrados de cualquier framework web. Además, no utilice el cartucho OpenShift Python 2.6 ni versiones anteriores de Django. Esto se debe a que estos servidores de desarrollo suelen estar basados en el servidor WSGI del módulo <DNT>**wsgiref**</DNT> de la biblioteca estándar de Python. El servidor WSGI del módulo <DNT>**wsgiref**</DNT> tenía un error, lo que significaba que no era totalmente compatible con WSGI y esto causaba que el agente Python informara datos incorrectos. Este problema con el módulo <DNT>**wsgiref**</DNT> solo se solucionó en Python 2.7.4. El servidor WSGI integrado en versiones anteriores de Django anteriores a Django 1.4 tenía un problema similar.

## Envuelva la aplicación WSGI [#wrapping-the-wsgi-application]

Si está utilizando un framework web Python para el cual el agente proporciona ajuste automático del punto de entrada de la aplicación WSGI, esto es todo lo que necesita hacer. El marco web Python con ajuste automático incluye Django, Flask y Bottle.

Para otros, debe modificar el archivo de código Python con el punto de entrada de su aplicación WSGI para encapsular el objeto de la aplicación WSGI con un contenedor de aplicación WSGI. Esto iniciará el tiempo para las solicitudes web recibidas por su aplicación.

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        Punto de entrada
      </th>

      <th>
        Código de ejemplo
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        El punto de entidad es una función.
      </td>

      <td>
        Envuélvelo en un decorador.

        ```
        import newrelic.agent

        @newrelic.agent.wsgi_application()
        def application(environ, start_response):
            ...
        ```
      </td>
    </tr>

    <tr>
      <td>
        El punto de entidad es una función u objeto importado desde un módulo diferente.
      </td>

      <td>
        Envuélvelo en estilo predecorador.

        ```
        import myapp
        application = myapp.WSGIHandler()
        application = newrelic.agent.WSGIApplicationWrapper(application)
        ```
      </td>
    </tr>
  </tbody>
</table>

## Anular el nombre de la aplicación [#overriding-the-application-name]

De forma predeterminada, sus datos se registran con el nombre de la aplicación <DNT>**Python Application**</DNT>. Para cambiar el nombre para mostrar, utilice la interfaz de usuario de APM. Sin embargo, desde el lado del agente, recomendamos encarecidamente mantenerlo como un valor único e invariable, independiente de los cambios en el nombre para mostrar en la UI. Esto es necesario si tiene la intención de ejecutar varios sitios distintos bajo una sola cuenta de New Relic y desea que los datos se informen por separado.

Para anular el nombre de la aplicación, utilice el comando `rhc env set` :

```
rhc env set NEW_RELIC_APP_NAME='Web Site (Production)' -a yourappname
```

Para verificar que la configuración se haya actualizado, ejecute:

```
rhc env list -a yourappname
```

Entonces busca:

```
NEW_RELIC_APP_NAME=Web Site (Production)
```

Los cambios en las variables de entorno solo surtirán efecto la próxima vez que reinicie los engranajes de su aplicación web.

## Depurar el agente Python [#debugging-the-python-agent]

Para comenzar la depuración, recopile la salida log del agente Python. Cuando la variable de entorno `NEW_RELIC_LOG` se establece en `stderr`, el mensaje de registro del agente de Python se capturará dentro del registro de aplicación web estándar de Python.

Para seguir el registro web de la aplicación en OpenShift, ejecute:

```
rhc tail -a YOUR_APP_NAME
```

Para obtener el log completo, copie desde cada una de sus aplicaciones web el archivo de registro:

```
$OPENSHIFT_PYTHON_LOG_DIR/python.log
```

De forma predeterminada, el agente Python iniciará log en el nivel `info`. Si el agente requiere un nivel alternativo de registro, deberá agregar manualmente una variable de entorno adicional. Por ejemplo, para configurar la salida del registro en `debug`, ejecute:

```
rhc env set NEW_RELIC_LOG_LEVEL=debug -a YOUR_APP_NAME
```

Las variables de entorno no entran en vigor inmediatamente, así que asegúrese de reiniciar los engranajes de su aplicación web.

Ejecute el registro `debug` solo cuando se solicite y solo durante el tiempo necesario. El registro de depuración puede producir una gran cantidad de resultados e inflará su archivo de registro. Elimine esta configuración tan pronto como ya no sea necesaria ejecutando el siguiente comando y luego reinicie los engranajes de su aplicación web:

```
rhc env unset NEW_RELIC_LOG_LEVEL -a YOUR_APP_NAME
```

Utilice el archivo de registro para solucionar el problema. Si necesita más ayuda, obtenga soporte en [support.newrelic.com](https://support.newrelic.com "El enlace se abre en una ventana nueva.")

## Actualizar el archivo de configuración del agente [#agent-configuration-file]

Con OpenShift, la forma preferida de especificar la clave de licencia de su cuenta y definir dónde debe ir el registro es utilizar variables de entorno. Esto significa que no es necesario utilizar un archivo de configuración del agente para que el agente funcione. Sin embargo, sin el archivo de configuración del agente, no es posible [personalizar otras configuraciones del agente](/docs/agents/python-agent/installation-configuration/python-agent-configuration).

Si habilita la configuración del lado del servidor para su aplicación, no necesita un archivo de configuración del agente. Esto se hace desde <DNT>**Application settings**</DNT> en la aplicación de interfaz de usuario de APM. Al utilizar la configuración del lado del servidor, puede anular la configuración principal del agente. Cuando se realiza un cambio en una configuración a través de la UI, se notificará al agente que se ejecuta dentro de cada uno de los procesos de su aplicación web y recogerá la configuración modificada.

Sin embargo, algunas características del agente son incompatibles con la configuración del lado del servidor. En estos casos, utilice un archivo de configuración del agente enviado con su aplicación web a OpenShift.

Para agregar y habilitar un archivo de configuración de agente con OpenShift:

1. Agregue el archivo de configuración del agente <DNT>**newrelic.ini**</DNT> al directorio raíz del repositorio de su proyecto que está subiendo a OpenShift. Esto debe contener una sección `[newrelic]` junto con solo la configuración específica que necesita establecer. Por ejemplo:

   ```
   [newrelic]
   transaction_tracer.function_trace = mydbm:connect
   ```

   No utilice el archivo de configuración del agente para configuraciones principales como la clave de licencia o el nombre de la aplicación, ya que al hacerlo se anulará la configuración de las variables de entorno. Probablemente tampoco desees la clave de licencia como parte de tu repositorio GIT, especialmente si el código fuente del proyecto está disponible públicamente.

   También tenga en cuenta que si la configuración del lado del servidor está habilitada al mismo tiempo, cualquier configuración que pueda establecerse a través de la configuración del lado del servidor siempre anulará la configuración local. Por lo tanto, utilice esto únicamente para configuraciones que no se pueden establecer mediante la configuración del lado del servidor si la configuración del lado del servidor está habilitada.

2. Ahora modifique el archivo `wsgi.py` o `app.py` donde agregó el código para inicializar el agente Python. Cambie el código que ya había agregado a:

   ```
   import os
   import newrelic.agent

   repo_dir = os.environ['OPENSHIFT_REPO_DIR']
   config_file = os.path.join(repo_dir, 'newrelic.ini')

   newrelic.agent.initialize(config_file)
   ```

3. Confirme el archivo de configuración en su repositorio y envíe el cambio a OpenShift.
