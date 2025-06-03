---
title: Integración de monitoreo PowerDNS
tags:
  - Integrations
  - On-host integrations
  - On-host integrations list
metaDescription: 'New Relic''s PowerDNS integration: how to enable, configure it, and an explanation of what data it reports.'
freshnessValidatedDate: never
translationType: machine
---

<Callout title="VISTA PREVIA PÚBLICA">
  Esta característica se encuentra actualmente en versión preliminar pública y solo se aplica a las versiones a partir de [0.0.5](https://github.com/newrelic/newrelic-prometheus-exporters-packages/releases/tag/nri-powerdns-0.0.5) lanzadas en octubre de 2021.
</Callout>

Nuestra [integración](/docs/integrations/host-integrations/getting-started/introduction-host-integrations) PowerDNS recopila y envía métricas dimensionales desde [PowerDNS](https://www.powerdns.com). Puede ver estos [datos métricos](#metrics) en un panel prediseñado, crear políticas de alertas y crear consultas y gráficos personalizados.

Continúe leyendo para instalar la integración y ver qué datos recopilamos.

## Compatibilidad y requisitos [#req]

Nuestra integración es compatible con PowerDNS Recursor y Authoritative Server.

Antes de instalar la integración, asegúrese de cumplir con los siguientes requisitos:

* [Instale el agente de infraestructura](/docs/infrastructure/install-infrastructure-agent/get-started/install-infrastructure-agent-new-relic), versión mínima 1.19.2.
* Distribución de Linux [compatible con el agente de infraestructura](/docs/infrastructure/new-relic-infrastructure/getting-started/compatibility-requirements-new-relic-infrastructure#operating-systems).

Para obtener datos de la infraestructura PowerDNS, nuestra integración PowerDNS utiliza un [exportador Prometheus](https://github.com/janeczku/powerdns_exporter) de terceros, que expone Prometheus métrica en el puerto especificado en la configuración. La integración recopila estas métricas, las transforma en entidad, las filtra y luego las envía a New Relic.

Para habilitar la API, es necesario habilitar el servidor web y la API HTTP.

Agregue estas líneas al pdns.conf:

```
api=yes
api-key=changeme
```

Y reinicie, los siguientes ejemplos deberían comenzar a funcionar:

```
curl -v -H 'X-API-Key: changeme' http://127.0.0.1:8081/api/v1/servers/localhost | jq .
curl -v -H 'X-API-Key: changeme' http://127.0.0.1:8081/api/v1
```

Para obtener más información, [Habilitación del servidor web y la API.](https://doc.powerdns.com/authoritative/http-api/index.html)

## Instalar y activar [#install]

Para instalar la integración de PowerDNS, elija su configuración:

<CollapserGroup>
  <Collapser
    id="linux-install"
    title="Instalación de linux"
  >
    1. Instale [el agente de infraestructura](/docs/integrations/host-integrations/installation/install-infrastructure-host-integrations/#install) y reemplace la variable `INTEGRATION_FILE_NAME` con `nri-powerdns`.

    2. Cambie el directorio a la carpeta de integración:

       ```
       cd /etc/newrelic-infra/integrations.d
       ```

    3. Copia del archivo de configuración de muestra:

       ```
       sudo cp powerdns-config.yml.sample powerdns-config.yml
       ```

    4. Edite el archivo `powerdns-config.yml` como se describe en los [ajustes de configuración](#config).
  </Collapser>

  <Collapser
    id="tarball"
    title="Instalación de Tarball (avanzado)"
  >
    También puedes [instalar la integración desde un archivo tarball](/docs/integrations/host-integrations/installation/install-host-integrations-built-new-relic#tarball). Esto le brinda control total sobre el proceso de instalación y configuración.
  </Collapser>
</CollapserGroup>

<InstallFeedback/>

## Configurar la integración [#config]

Para configurar la integración, edite la configuración en el archivo de configuración YAML de la integración `powerdns-config.yml`.

Utilice la configuración YAML para colocar las credenciales de inicio de sesión requeridas y configurar cómo se recopilan sus datos, según su configuración y preferencias.

Dado que esta integración se basa en un exportador de Prometheus, no se admiten configuraciones aplicables a otras integraciones, como `interval`, `timeout` o `inventory_source` .

## Configuración de instancia de PowerDNS [#instance-settings]

Están disponibles las siguientes opciones de configuración:

<table>
  <thead>
    <tr>
      <th style={{ width: "150px" }}>
        Configuración
      </th>

      <th>
        Descripción
      </th>

      <th>
        Por defecto
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        <DNT>
          **powerdns_url**
        </DNT>
      </td>

      <td>
        URL API del servicio powerdns
      </td>

      <td>
        N/A
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **exporter_port**
        </DNT>
      </td>

      <td>
        Puerto para exponer el extremo de scrape. Si no se proporciona, se utilizará un puerto aleatorio para iniciar el exportador.
      </td>

      <td>
        port aleatorio
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **scrape_timeout**
        </DNT>
      </td>

      <td>
        Tiempo hasta que se agote el tiempo de espera de una solicitud de extracción
      </td>

      <td>
        5s
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **api_key**
        </DNT>
      </td>

      <td>
        Clave de API utilizada para conectarse al servidor PowerDNS
      </td>

      <td>
        N/A
      </td>
    </tr>
  </tbody>
</table>

## Configuración de ejemplo [#examples]

<CollapserGroup>
  <Collapser
    id="basic-config"
    title="Configuración básica"
  >
    Esta es la configuración básica utilizada para recopilar métricas de una instancia autoritativa y recursor:

    ```
    integrations:
      - name: nri-powerdns
        config:
          api_key: authoritative-secret
          exporter_port: 9121
          powerdns_url: http://localhost:8081/api/v1/
      - name: nri-powerdns
        config:
          api_key: recursor-secret
          exporter_port: 9122
          powerdns_url: http://localhost:8082/api/v1/
    ```
  </Collapser>
</CollapserGroup>

## Buscar y utilizar datos [#find-and-use]

Para obtener más información sobre cómo encontrar y utilizar sus datos, consulte [Comprender los datos de integración](/docs/infrastructure/integrations/find-use-infrastructure-integration-data).

Métrica se adjuntan a los [tipos de muestra y evento métrica](/docs/using-new-relic/data/understand-data/new-relic-data-types#events-new-relic) de la entidad `POWERDNS_AUTHORITATIVE` y `POWERDNS_RECURSOR`. Puede [consultar estos datos](/docs/using-new-relic/data/understand-data/query-new-relic-data) para fines de resolución de problemas o para crear [gráficos y paneles personalizados](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards/).

## Datos métricos [#metrics]

Se crean dos entidades: `POWERDNS_AUTHORITATIVE` y `POWERDNS_RECURSOR`.

Las siguientes dimensiones métricas se capturan raspando el exportador y se vinculan a la entidad `POWERDNS_AUTHORITATIVE`:

<table>
  <thead>
    <tr>
      <th style={{ width: "350px" }}>
        Nombre
      </th>

      <th>
        Descripción
      </th>

      <th>
        Dimensiones
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `powerdns_authoritative_uptime (count)`
      </td>

      <td>
        Tiempo de actividad en segundos del daemon.
      </td>

      <td>
        * tipo
      </td>
    </tr>

    <tr>
      <td>
        `powerdns_authoritative_packet_cache_size (gauge)`
      </td>

      <td>
        Número de entradas en la caché de paquetes.
      </td>

      <td/>
    </tr>

    <tr>
      <td>
        `powerdns_authoritative_recursive_queries_total (count)`
      </td>

      <td>
        Número total de consultas recursivas por estado.
      </td>

      <td>
        * estado
      </td>
    </tr>

    <tr>
      <td>
        `powerdns_authoritative_remote_queries (count)`
      </td>

      <td>
        Direcciones IP del servidor remoto.
      </td>

      <td>
        * remoto
      </td>
    </tr>

    <tr>
      <td>
        `powerdns_authoritative_security_status (gauge)`
      </td>

      <td>
        Estado de seguridad del servidor PDNS basado en `security-status.secpoll.powerdns.com`.
      </td>

      <td/>
    </tr>

    <tr>
      <td>
        `powerdns_authoritative_exceptions_total (count)`
      </td>

      <td>
        Número total de excepciones por error.
      </td>

      <td>
        * error
      </td>
    </tr>

    <tr>
      <td>
        `powerdns_authoritative_latency_average_seconds (gauge)`
      </td>

      <td>
        Número promedio de microsegundos que pasa un paquete dentro de PowerDNS.
      </td>

      <td/>
    </tr>

    <tr>
      <td>
        `powerdns_authoritative_dnsupdate_queries_total (count)`
      </td>

      <td>
        Número total de consultas de actualización de DNS por estado.
      </td>

      <td>
        * estado
      </td>
    </tr>

    <tr>
      <td>
        `powerdns_authoritative_qsize (gauge)`
      </td>

      <td>
        Número de paquetes en espera de atención de la base de datos.
      </td>

      <td/>
    </tr>

    <tr>
      <td>
        `powerdns_authoritative_response_rcodes (count)`
      </td>

      <td>
        Distribución de rcodes.
      </td>

      <td>
        * rcode
      </td>
    </tr>

    <tr>
      <td>
        `powerdns_authoritative_signature_cache_size (gauge)`
      </td>

      <td>
        Número de entradas en la caché de firmas.
      </td>

      <td/>
    </tr>

    <tr>
      <td>
        `powerdns_authoritative_queries_unauth (count)`
      </td>

      <td>
        Consulta por dominio para el cual no tenemos autoridad.
      </td>

      <td>
        * registro
      </td>
    </tr>

    <tr>
      <td>
        `powerdns_authoritative_answers_bytes_total (count)`
      </td>

      <td>
        Número total de bytes de respuesta enviados por protocolo.
      </td>

      <td>
        * prototipo
      </td>
    </tr>

    <tr>
      <td>
        `powerdns_authoritative_queries (count)`
      </td>

      <td>
        Consulta UDP recibida.
      </td>

      <td>
        * registro
      </td>
    </tr>

    <tr>
      <td>
        `powerdns_authoritative_exporter_json_parse_failures (count)`
      </td>

      <td>
        Número de errores al analizar las estadísticas JSON de PowerDNS.
      </td>

      <td/>
    </tr>

    <tr>
      <td>
        `powerdns_authoritative_deferred_cache_actions (count)`
      </td>

      <td>
        Acciones de caché diferidas por mantenimiento por tipo.
      </td>

      <td>
        * tipo
      </td>
    </tr>

    <tr>
      <td>
        `powerdns_authoritative_up (gauge)`
      </td>

      <td>
        La última versión de PowerDNS fue exitosa.
      </td>

      <td/>
    </tr>

    <tr>
      <td>
        `powerdns_authoritative_query_cache_lookup (count)`
      </td>

      <td>
        Consulta búsquedas de caché por resultado.
      </td>

      <td>
        * resultado
      </td>
    </tr>

    <tr>
      <td>
        `powerdns_authoritative_key_cache_size (gauge)`
      </td>

      <td>
        Número de entradas en la caché de claves.
      </td>

      <td/>
    </tr>

    <tr>
      <td>
        `powerdns_authoritative_answers_total (count)`
      </td>

      <td>
        Número total de respuestas por protocolo.
      </td>

      <td>
        * prototipo
      </td>
    </tr>

    <tr>
      <td>
        `powerdns_authoritative_packet_cache_lookup (count)`
      </td>

      <td>
        Búsquedas de caché de paquetes por resultado.
      </td>

      <td>
        * resultado
      </td>
    </tr>

    <tr>
      <td>
        `powerdns_authoritative_metadata_cache_size (gauge)`
      </td>

      <td>
        Número de entradas en la caché de metadatos.
      </td>

      <td/>
    </tr>

    <tr>
      <td>
        `powerdns_authoritative_queries_total (count)`
      </td>

      <td>
        Número total de consultas por protocolo.
      </td>

      <td>
        * prototipo
      </td>
    </tr>

    <tr>
      <td>
        `powerdns_authoritative_cpu_utilisation (count)`
      </td>

      <td>
        Número de milisegundos de CPU invertidos en el espacio del usuario y del kernel.
      </td>

      <td>
        * tipo
      </td>
    </tr>

    <tr>
      <td>
        `powerdns_authoritative_dnssec (count)`
      </td>

      <td>
        Contadores DNSSEC.
      </td>

      <td>
        * tipo
      </td>
    </tr>

    <tr>
      <td>
        `powerdns_authoritative_response_sizes (count)`
      </td>

      <td>
        Distribución del tamaño de las respuestas.
      </td>

      <td>
        * tamaño
      </td>
    </tr>

    <tr>
      <td>
        `powerdns_authoritative_exporter_total_scrapes (count)`
      </td>

      <td>
        Eliminaciones totales actuales de PowerDNS.
      </td>

      <td/>
    </tr>

    <tr>
      <td>
        `powerdns_authoritative_remote_queries_unauth (count)`
      </td>

      <td>
        Hosts remotos que consultan dominios para los cuales no tenemos autoridad.
      </td>

      <td>
        * remoto
      </td>
    </tr>
  </tbody>
</table>

Las siguientes dimensiones métricas se capturan raspando el exportador y se vinculan a la entidad `POWERDNS_RECURSOR`:

<table>
  <thead>
    <tr>
      <th style={{ width: "350px" }}>
        Nombre
      </th>

      <th>
        Descripción
      </th>

      <th>
        Dimensiones
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `powerdns_recursor_incoming_queries_total (count)`
      </td>

      <td>
        Número total de consultas entrantes por red.
      </td>

      <td>
        * neto
      </td>
    </tr>

    <tr>
      <td>
        `powerdns_recursor_outgoing_queries_total (count)`
      </td>

      <td>
        Número total de consultas salientes por red.
      </td>

      <td>
        * neto
      </td>
    </tr>

    <tr>
      <td>
        `powerdns_recursor_cache_size (gauge)`
      </td>

      <td>
        Número de entradas en la caché.
      </td>

      <td/>
    </tr>

    <tr>
      <td>
        `powerdns_recursor_cache_lookups_total (count)`
      </td>

      <td>
        Número total de búsquedas de caché por resultado.
      </td>

      <td>
        * resultado
      </td>
    </tr>

    <tr>
      <td>
        `powerdns_recursor_exporter_json_parse_failures (count)`
      </td>

      <td>
        Número de errores al analizar las estadísticas JSON de PowerDNS.
      </td>

      <td/>
    </tr>

    <tr>
      <td>
        `powerdns_recursor_answers_rcodes_total (count)`
      </td>

      <td>
        Número total de respuestas por código de respuesta.
      </td>

      <td>
        * rcode
      </td>
    </tr>

    <tr>
      <td>
        `powerdns_recursor_exporter_total_scrapes (count)`
      </td>

      <td>
        Eliminaciones totales actuales de PowerDNS.
      </td>

      <td/>
    </tr>

    <tr>
      <td>
        `powerdns_recursor_concurrent_queries (gauge)`
      </td>

      <td>
        Número de consultas concurrentes.
      </td>

      <td/>
    </tr>

    <tr>
      <td>
        `powerdns_recursor_answers_rtime_total (count)`
      </td>

      <td>
        Número total de respuestas agrupadas por intervalos de tiempo de respuesta.
      </td>

      <td>
        * intervalo de tiempo
      </td>
    </tr>

    <tr>
      <td>
        `powerdns_recursor_latency_average_seconds (gauge)`
      </td>

      <td>
        Media móvil exponencial de latencia entre preguntas y respuestas.
      </td>

      <td/>
    </tr>

    <tr>
      <td>
        `powerdns_recursor_exceptions_total (count)`
      </td>

      <td>
        Número total de excepciones por error.
      </td>

      <td>
        * error
      </td>
    </tr>

    <tr>
      <td>
        `powerdns_recursor_response_time_seconds_sum (count)`
      </td>

      <td>
        Histograma del recursor PowerDNS tiempo de respuesta en segundos. (suma métrica)
      </td>

      <td/>
    </tr>

    <tr>
      <td>
        `powerdns_recursor_response_time_seconds_bucket (count)`
      </td>

      <td>
        Histograma del recursor PowerDNS tiempo de respuesta en segundos. (métrica del cubo)
      </td>

      <td>
        * le
      </td>
    </tr>

    <tr>
      <td>
        `powerdns_recursor_up (gauge)`
      </td>

      <td>
        La última versión de PowerDNS fue exitosa.
      </td>

      <td/>
    </tr>
  </tbody>
</table>

## Comprueba el código fuente [#source-code]

Esta integración es software de código abierto. Esto significa que puedes [explorar su código fuente](https://github.com/newrelic/newrelic-prometheus-exporters-packages) y enviar mejoras, o crear tu propia bifurcación y compilarla.

Además, esta integración aprovecha un exportador de código abierto creado por la comunidad.
