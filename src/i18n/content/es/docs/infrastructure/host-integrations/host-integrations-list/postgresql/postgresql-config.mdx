---
title: Ajustes de configuración de la integración de PostgreSQL
tags:
  - Integrations
  - On-host integrations
  - Advanced configuration
metaDescription: New Relic's PostgreSQL monitoring integration's advanced configuration
freshnessValidatedDate: never
translationType: machine
---

Esta integración es software de código abierto. Eso significa que puedes [explorar su código fuente](https://github.com/newrelic/nri-postgresql) y enviar mejoras, o crear tu propia bifurcación y compilarla.

### Configuración de instancia de PostgreSQL [#instance-settings]

La integración PostgreSQL recopila información tanto métrica (<DNT>**M**</DNT>) como de inventario (<DNT>**I**</DNT>). La columna <DNT>**Applies To**</DNT> en la siguiente tabla indica qué configuraciones se pueden usar para cada colección específica:

<table>
  <thead>
    <tr>
      <th>
        Configuración
      </th>

      <th>
        Descripción
      </th>

      <th style={{ width: '150px' }}>
        Se aplica a
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `HOSTNAME`
      </td>

      <td>
        El nombre de host para la conexión PostgreSQL. El valor predeterminado es localhost.
      </td>

      <td style={{ "text-align": "center" }}>
        M/I
      </td>
    </tr>

    <tr>
      <td>
        `PORT`
      </td>

      <td>
        El puerto donde se ejecuta PostgreSQL. El valor predeterminado es 5432.
      </td>

      <td style={{ 'text-align': 'center' }}>
        M/I
      </td>
    </tr>

    <tr>
      <td>
        `USERNAME`
      </td>

      <td>
        El nombre de usuario para la conexión PostgreSQL. <DNT>**Required.**</DNT>
      </td>

      <td style={{ 'text-align': 'center' }}>
        M/I
      </td>
    </tr>

    <tr>
      <td>
        `PASSWORD`
      </td>

      <td>
        La contraseña para la conexión PostgreSQL. <DNT>**Required.**</DNT>
      </td>

      <td style={{ 'text-align': 'center' }}>
        M/I
      </td>
    </tr>

    <tr>
      <td>
        `COLLECTION_LIST`
      </td>

      <td>
        Matriz JSON, un objeto JSON o la cadena literal `ALL` que especifica la entidad que se va a recopilar. El usuario de PostgreSQL solo puede recopilar tablas e índices métricos de tablas para las que tiene `SELECT` permisos.

        Obligatorio, excepto `PgBouncer`.

        <Callout variant="important">
          Esto no se aplica a la consulta personalizada configurada con `CUSTOM_METRICS_QUERY` o `CUSTOM_METRICS_CONFIG`.
        </Callout>

        Para obtener ayuda, consulte estos [ejemplos](/docs/infrastructure/host-integrations/host-integrations-list/postgresql/postgresql-integration#examples).
      </td>

      <td style={{ "text-align": "center" }}>
        M
      </td>
    </tr>

    <tr>
      <td>
        `COLLECTION_IGNORE_DATABASE_LIST`
      </td>

      <td>
        Matriz JSON de nombres de base de datos que se ignorarán para la recopilación métrica. Normalmente es útil para casos en los que `COLLECTION_LIST` está establecido en `ALL` y es necesario ignorar alguna base de datos. El valor predeterminado es `[]`.

        <Callout variant="important">
          Esto no se aplica a la consulta personalizada configurada con `CUSTOM_METRICS_QUERY` o `CUSTOM_METRICS_CONFIG`.
        </Callout>
      </td>

      <td style={{ 'text-align': 'center' }}>
        M
      </td>
    </tr>

    <tr>
      <td>
        `PGBOUNCER`
      </td>

      <td>
        Recoge `pgbouncer` métrica. El valor predeterminado es `false`.
      </td>

      <td style={{ 'text-align': 'center' }}>
        M
      </td>
    </tr>

    <tr>
      <td>
        `ENABLE_SSL`
      </td>

      <td>
        Determina si SSL está habilitado. Si se requieren `true`, `ssl_cert_location` y `ssl_key_location` . El valor predeterminado es `false`.
      </td>

      <td style={{ 'text-align': 'center' }}>
        M/I
      </td>
    </tr>

    <tr>
      <td>
        `TRUST_SERVER_CERTIFICATE`
      </td>

      <td>
        Si es `true`, el certificado del servidor no se verifica para SSL. Si `false`, se verifica el certificado del servidor identificado en `ssl_root_cert_location` . El valor predeterminado es `false`.
      </td>

      <td style={{ 'text-align': 'center' }}>
        M/I
      </td>
    </tr>

    <tr>
      <td>
        `SSL_ROOT_CERT_LOCATION`
      </td>

      <td>
        Ruta absoluta al archivo de certificado raíz codificado en PEM. Obligatorio si `trust_server_certificate` es `false`.
      </td>

      <td style={{ 'text-align': 'center' }}>
        M/I
      </td>
    </tr>

    <tr>
      <td>
        `SSL_CERT_LOCATION`
      </td>

      <td>
        Ruta absoluta al archivo de certificado de cliente codificado en PEM. Obligatorio si `enable_ssl` es `true`.
      </td>

      <td style={{ 'text-align': 'center' }}>
        M/I
      </td>
    </tr>

    <tr>
      <td>
        `SSL_KEY_LOCATION`
      </td>

      <td>
        Ruta absoluta al archivo de clave de cliente codificado en PEM. Obligatorio si `enable_ssl` es `true`.
      </td>

      <td style={{ 'text-align': 'center' }}>
        M/I
      </td>
    </tr>

    <tr>
      <td>
        `TIMEOUT`
      </td>

      <td>
        Espera máxima de conexión, en segundos. Establezca en `0` para que no haya tiempo de espera. El valor predeterminado es 10.
      </td>

      <td style={{ 'text-align': 'center' }}>
        M/I
      </td>
    </tr>

    <tr>
      <td>
        `DATABASE`
      </td>

      <td>
        La base de datos PostgreSQL a la que conectarse. El valor predeterminado es `postgres`.
      </td>

      <td style={{ 'text-align': 'center' }}>
        M/I
      </td>
    </tr>

    <tr>
      <td>
        `CUSTOM_METRICS_QUERY`
      </td>

      <td>
        La consulta SQL que requiere `columns metric_name`, `metric_type` y `metric_value.metric_type` puede ser `gauge`, `rate`, `delta` o `attribute`. Las columnas adicionales recopiladas con la consulta se agregan al conjunto métrico como atributo.
      </td>

      <td style={{ 'text-align': 'center' }}>
        M
      </td>
    </tr>

    <tr>
      <td>
        `CUSTOM_METRICS_CONFIG`
      </td>

      <td>
        Una ruta a un archivo YAML con una lista de consultas personalizadas, junto con su tipo de métrica, base de datos y anulaciones de nombres de muestra. Vea los [ejemplos](/docs/infrastructure/host-integrations/host-integrations-list/postgresql/postgresql-integration#examples) para más detalles.
      </td>

      <td style={{ 'text-align': 'center' }}>
        M
      </td>
    </tr>

    <tr>
      <td>
        `COLLECT_DB_LOCK_METRICS`
      </td>

      <td>
        Habilite la recopilación de datos base de bloqueo métrico, que puede ser intensivo en rendimiento. El valor predeterminado es `false`.
      </td>

      <td style={{ 'text-align': 'center' }}>
        M
      </td>
    </tr>

    <tr>
      <td>
        `COLLECT_BLOAT_METRICS`
      </td>

      <td>
        Habilite el aumento del espacio de tabla métrica, lo que puede requerir un alto rendimiento. El valor predeterminado es `true`.
      </td>

      <td style={{ 'text-align': 'center' }}>
        M
      </td>
    </tr>

    <tr>
      <td>
        `METRICS`
      </td>

      <td>
        Establezca en `true` para habilitar la recopilación solo métrica. El valor predeterminado es `false`.
      </td>

      <td style={{ 'text-align': 'center' }}/>
    </tr>

    <tr>
      <td>
        `INVENTORY`
      </td>

      <td>
        Configúrelo en `true` para habilitar la recopilación solo de inventario. El valor predeterminado es `false`.
      </td>

      <td style={{ 'text-align': 'center' }}/>
    </tr>
  </tbody>
</table>

Los valores para estas configuraciones se pueden definir de varias maneras:

* Agregando el valor directamente en el archivo de configuración. Esta es la forma más común.
* Reemplazar los valores de las variables de entorno usando la notación `{{ }}` . Lea más sobre [el uso de transferencias de variables de entorno con integración en el host](/docs/infrastructure/install-infrastructure-agent/configuration/configure-infrastructure-agent/#passthrough) o vea el ejemplo para [el reemplazo de variables de entorno](/docs/infrastructure/host-integrations/host-integrations-list/elasticsearch/elasticsearch-integration#envvar-replacement). <Callout variant="important">Esto requiere el agente de infraestructura v1.14.0+.</Callout>
* Utilizando la gestión de secretos. Utilícelo para proteger información confidencial, como contraseñas que quedarían expuestas en texto sin formato en el archivo de configuración. Para obtener más información, consulte [gestión de secretos](/docs/integrations/host-integrations/installation/secrets-management).

### Etiquetas y atributos personalizados [#labels]

Las variables de entorno se pueden utilizar para controlar los ajustes de configuración, como su <InlinePopover type="licenseKey"/>, y luego se pasan al agente de infraestructura. Para obtener instrucciones sobre cómo utilizar esta característica, consulte [Configurar el agente de infraestructura](/docs/infrastructure/install-infrastructure-agent/configuration/configure-infrastructure-agent).

Puedes decorar aún más tu métrica usando etiquetas. Las etiquetas le permiten agregar valor de pares principales de atributos a su métrica que luego puede usar para consultar, filtrar o agrupar su métrica.

Nuestro archivo de configuración de muestra predeterminado incluye ejemplos de etiquetas pero, como no son obligatorias, puede eliminar, modificar o agregar nuevas de su elección:

```yml
 labels:
   env: production
   role: postgresql
```

## Datos de inventario [#inventory]

La integración de PostgreSQL recopila cada configuración de `pg_settings` junto con sus `boot_val` y `reset_val`. Los [datos de infraestructura de inventario](/docs/infrastructure/integrations-getting-started/getting-started/understand-integration-data-data-types#inventory-data) aparecen en la [página Inventario](/docs/infrastructure/new-relic-infrastructure/infrastructure-ui-pages/infrastructure-inventory-page-search-your-entire-infrastructure), bajo la fuente `config/postgresql` .

## Resolución de problemas [#troubleshooting]

A continuación se ofrecen algunos consejos para la resolución de problemas de la integración de PostgreSQL:

* Si tiene problemas de conexión, asegúrese de poder conectarse al clúster desde el mismo cuadro con `psql`.
* Si tienes problemas para recolectar `PgBouncer` métrica, asegúrate de estar conectado a la instancia a través de `PgBouncer`. El puerto predeterminado es `6432`.
* Si recibe el mensaje de error `Error creating list of entities to collect: pq: unsupported startup parameter: extra_float_digits`, configure `ignore_startup_parameters = extra_float_digits` en el archivo de configuración `PgBouncer` .
