---
title: Integración de monitoreo stack LAMPy
tags:
  - New Relic integrations
  - LAMPy
  - Linux
  - Apache
  - Python
  - MySQL
metaDescription: 'Use New Relic Linux, Apache, Python and MySQL monitoring to get a dashboard with metrics from your LAMPy application.'
freshnessValidatedDate: never
translationType: machine
---

Nuestra integración LAMPy utiliza el agente de infraestructura, la integración MySQL, la integración Apache y el agente Python para brindarle un dashboard prediseñado con sus métricas más importantes, como el tiempo de respuesta, la utilización de la CPU, el tráfico y las frecuencias de inicio de sesión.

<img
  title="Lampy dashboard"
  alt="A screenshot depicting the LAMPy prebuilt dashboard"
  src="/images/infrastructure_screenshot-full_lampy-dashboard-1.webp"
/>

<figcaption>
  Después de configurar nuestra integración LAMPy, le brindamos un dashboard para su aplicación web LAMPy.
</figcaption>

## Paso 1: instalar el agente de infraestructura [#infra-install]

Para hacer esto, siga [los pasos de instalación del agente de infraestructura](/docs/infrastructure/install-infrastructure-agent/linux-installation/install-infrastructure-monitoring-agent-linux) para el host que contiene su aplicación LAMPy.

## Paso 2: Instale la integración MySQL [#mysql-install]

Nuestra integración LAMPy depende de la integración MySQL para funcionar. Para obtener más información y comprobar los requisitos, revise nuestros [documentos de MySQL](/install/mysql/).

1. Desde [one.newrelic.com,](https://one.newrelic.com) haga clic en

   <DNT>
     **Integrations & Agents > Infrastructure & OS > MySQL**
   </DNT>

   .

2. Siga las instrucciones para instalar el agente MySQL.

## Paso 3: instale la integración de Apache [#apache-install]

Nuestra integración LAMPy depende de la integración de Apache para funcionar. Para obtener más información y comprobar los requisitos, consulte nuestros [documentos de Apache](/docs/infrastructure/host-integrations/host-integrations-list/apache-monitoring-integration/).

1. Desde [one.newrelic.com,](https://one.newrelic.com) haga clic en

   <DNT>
     **Integrations & Agents > Infrastructure & OS > Apache**
   </DNT>

   .

2. Siga las instrucciones en pantalla para instalar el agente Apache.

## Paso 4: instalar el agente Python [#python-install]

Nuestra integración LAMPy depende del agente Python para funcionar. Para obtener más información y comprobar los requisitos, consulte nuestros [documentos de Python](/docs/apm/agents/python-agent/getting-started/introduction-new-relic-python/).

1. Desde [one.newrelic.com,](https://one.newrelic.com) haga clic en <DNT>**Integrations & Agents > Application monitoring > Python**</DNT>.

2. Nombra tu aplicación.

3. Descargue el archivo de configuración y colóquelo en el directorio raíz de su aplicación.

4. Integre su agente Python que está conectado al sitio web de Django. Este agente Python también se ejecuta en el servidor Apache.

5. Agregue esta línea a su archivo `settings.py` :

   ```py
     NEW_RELIC_CONFIG_FILE = BASE_DIR / 'newrelic.ini'
   ```

6. Agregue estas líneas a su archivo `wsgi.py` :

   ```py
   import newrelic.agent

   from django.conf import settings 
   from django.core.wsgi import get_wsgi_application

   application = get_wsgi_application()

   newrelic.agent.initialize(settings.NEW_RELIC_CONFIG_FILE)
   newrelic.agent.WSGIApplicationWrapper(application)

   ```

## Paso 5: reinicie su servidor Apache

Espere unos minutos y luego proceda a buscar sus datos en New Relic.

## Encuentra tus datos [#find-data]

Para obtener su dashboard LAMPy:

1. Desde [one.newrelic.com](https://one.newrelic.com), vaya a la [página](https://one.newrelic.com/marketplace)

   <DNT>
     [**Integrations & Agents**](https://one.newrelic.com/marketplace)
   </DNT>

   [](https://one.newrelic.com/marketplace).

2. Haga clic en

   <DNT>
     **Dashboards**
   </DNT>

   .

3. En la barra de búsqueda, escriba `LAMPy`.

4. Debería aparecer el dashboard de LAMPy. Haga clic en él para instalarlo.

Su dashboard de LAMPy se considera un panel personalizado y se puede encontrar en la UI <DNT>**Dashboards**</DNT>. Para obtener documentos sobre el uso y edición del panel, consulte [nuestros documentos dashboard ](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards).

Para obtener información sobre los datos reportados, consulte los documentos de cada una de las herramientas que instaló:

* [Datos de linux](/docs/infrastructure/install-infrastructure-agent/linux-installation/install-infrastructure-monitoring-agent-linux/)
* [Datos MySQL](/install/mysql/#metrics)
* [Datos de apache](/docs/infrastructure/host-integrations/host-integrations-list/apache-monitoring-integration/)
* [Datos de Python](/docs/apm/agents/python-agent/getting-started/introduction-new-relic-python/)

Si instaló el agente de infraestructura, también recibirá [datos de infraestructura](/docs/infrastructure/manage-your-data/data-instrumentation/default-infrastructure-monitoring-data/#infrastructure-events).

Aquí hay un ejemplo de consulta NRQL para verificar los bytes enviados por solicitud:

```sql
SELECT (average(`apache.server.net.bytesPerSecond`) / average(`apache.server.net.requestsPerSecond`)) as 'Bytes sent per request' 
FROM Metric 
TIMESERIES auto
```

## ¿Que sigue? [#whats-next]

Para obtener más información sobre cómo consultar sus datos y crear un panel personalizado, consulte estos documentos:

* [Introducción al generador de consultas](/docs/query-your-data/explore-query-data/query-builder/introduction-query-builder)
* [Introducción al panel personalizado](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards)
* [Administra tu dashboard](/docs/query-your-data/explore-query-data/dashboards/manage-your-dashboard)
