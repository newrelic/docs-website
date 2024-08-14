---
title: 'Seguridad APM: SDK de C'
tags:
  - Agents
  - C SDK
  - Get started
metaDescription: How the C SDK ensures that the data sent from your application to be monitored by New Relic is secure.
freshnessValidatedDate: never
translationType: machine
---

<Callout
  variant="important"
  title="AVISO EOL"
>
  A partir de abril de 2022, no admitimos la capacidad C SDK. Para obtener más detalles, consulte nuestra [publicación en el foro de soporte](https://discuss.newrelic.com/t/q1-bulk-eol-announcement-fy23/181744).
</Callout>

Debido a la naturaleza del SDK de C, usted tiene control directo sobre qué datos se reportan a New Relic. Para garantizar la privacidad de los datos y limitar los tipos de información que recibe New Relic, no se capturan datos de los clientes excepto los que usted proporciona en su API de llamada. Además, C SDK informa todos los datos a New Relic a través de HTTPS.

Para obtener más información sobre nuestras medidas de seguridad, consulte nuestra [documentación de seguridad y privacidad](/docs/using-new-relic/new-relic-security/security/security-matters-data-privacy-new-relic) o visite el [sitio web de seguridad de New Relic](https://newrelic.com/security).

## Configuración de seguridad predeterminada [#default]

De forma predeterminada, así es como el SDK de C maneja los siguientes datos potencialmente confidenciales. Para obtener más información, incluidos valores de código y ejemplos, consulte la [documentación del SDK de C sobre estructuras de datos en GitHub](https://newrelic.github.io/c-sdk/annotated.html).

<table>
  <thead>
    <tr>
      <th width="200px">
        Tipo de información
      </th>

      <th>
        C SDK seguridad de los datos
      </th>
    </tr>
  </thead>

  <tbody>
    <tr id="name">
      <td>
        Nombre de la instancia de almacenamiento de datos o nombre de la base de datos
      </td>

      <td>
        [`newrelic_datastore_segment_config_t`](https://newrelic.github.io/c-sdk/structnewrelic__datastore__segment__config__t.html) es una estructura que configura si el nombre de la instancia y el nombre de la tabla de un almacenamiento de datos se capturan para la instrumentación del segmento de almacenamiento de datos.

        * <DNT>
            **Instance names:**
          </DNT>

          De forma predeterminada, la configuración devuelta por `newrelic_new_config()` habilita segmentos de almacenamiento de datos con `instance_reporting` establecido en `true`.

        * <DNT>
            **Database names:**
          </DNT>

          De forma predeterminada, la configuración devuelta por `newrelic_new_config()` habilita segmentos de almacenamiento de datos con `database_name_reporting` establecido en `true`.
      </td>
    </tr>

    <tr id="sql">
      <td>
        SQL
      </td>

      <td>
        La configuración `record_sql` en [`newrelic_transaction_tracer_config_t`](https://newrelic.github.io/c-sdk/structnewrelic__transaction__tracer__config__t.html) controla el formato SQL en la traza de la transacción para productos similares a SQL compatibles. La configuración predeterminada, `NEWRELIC_SQL_OBFUSCATED`, establece los caracteres alfanuméricos en `?`.
      </td>
    </tr>

    <tr id="audit-mode">
      <td>
        [Modo de auditoría](/docs/agents/manage-apm-agents/configuration/log-audit-all-data-your-new-relic-agent-transmits)
      </td>

      <td>
        El log de auditoría es un registro de texto sin formato de todos los datos enviados a New Relic por el C SDK. Al [iniciar el daemonC SDK](/docs/agents/c-sdk/install-configure/install-c-sdk-compile-link-your-code#daemon), agregue `-auditlog <file>` al archivo de configuración daemon . Por ejemplo:

        ```sh
        ./newrelic-daemon -f -logfile stdout -loglevel debug -auditlog audit.log
        ```

        <Callout variant="tip">
          Para ver todas las opciones disponibles para el daemon C: En la línea de comando, escriba:

          ```sh
          ./newrelic-daemon --help
          ```
        </Callout>
      </td>
    </tr>
  </tbody>
</table>

## Personalizar la configuración de seguridad [#customize]

Si la configuración predeterminada no funciona para las necesidades de su negocio, puede personalizar cómo se envía la información a New Relic modificando [`newrelic_datastore_segment_config_t`](https://newrelic.github.io/c-sdk/structnewrelic__datastore__segment__config__t.html) y [`newrelic_transaction_tracer_config_t`](https://newrelic.github.io/c-sdk/structnewrelic__transaction__tracer__config__t.html).

<Callout variant="caution">
  Si personaliza su configuración, puede afectar la seguridad de su aplicación.
</Callout>
