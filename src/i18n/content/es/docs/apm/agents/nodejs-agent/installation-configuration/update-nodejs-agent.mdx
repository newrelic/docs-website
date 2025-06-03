---
title: Actualizar el agente Node.js
tags:
  - Agents
  - Nodejs agent
  - Installation and configuration
metaDescription: 'How to update your APM Node.js agent, and notes on EOL support for early agent versions.'
freshnessValidatedDate: never
translationType: machine
---

Para aprovechar al máximo las últimas características, mejoras y parches de seguridad importantes de New Relic, le recomendamos que actualice su agente Node.js a la última versión. Para obtener información adicional sobre actualizaciones de agentes específicos, consulte las [notas de la versión del agente de Node.js.](/docs/release-notes/agent-release-notes/nodejs-release-notes) Las notas de la versión incluyen un enlace de descarga cuando corresponde, además de instrucciones para descargar e [instalar](/docs/agents/nodejs-agent/installation-configuration/install-nodejs-agent) la última versión.

* Si el módulo `newrelic` aparece en su `package.json`, ejecute `npm install`.
* Si desea apuntar solo al módulo `newrelic` , ejecute `npm update newrelic`.

<DNT>**Recommendation:**</DNT> Pruebe su versión actualizada antes de pasarla a producción. Si tiene problemas, siga los [procedimientos de resolución de problemas](/docs/agents/nodejs-agent/troubleshooting/troubleshooting-your-nodejs-installation) del agente Node.js.

## Actualice a la versión 11 del agente Node.js [#node-agent-v11]

Antes de actualizar a Node.js versión 11, revise esta información para ver cambios importantes.

<table>
  <thead>
    <tr>
      <th style={{ width: "250px" }}>
        <DNT>
          **Major changes with Node.js agent v11**
        </DNT>
      </th>

      <th>
        <DNT>
          **Comments**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Se agregó soporte de paridad oficial para Node.js 20.
      </td>

      <td/>
    </tr>

    <tr>
      <td>
        <DNT>**BREAKING**</DNT>: Se eliminó la compatibilidad con Node.js 14.
      </td>

      <td>
        * Para más información consulte nuestra [política de soporte](/docs/agents/nodejs-agent/getting-started/compatibility-requirements-nodejs-agent).
      </td>
    </tr>

    <tr>
      <td>
        <DNT>**BREAKING**</DNT>: Cargador ESM actualizado para admitir Node.js 20.
      </td>

      <td>
        * Ahora debe utilizar los argumentos `--experimental-loader` y `-r` al ejecutar una aplicación.
        * `node --experimental-loader newrelic/esm-loader.mjs -r newrelic path/to/app.js`
      </td>
    </tr>

    <tr>
      <td>
        <DNT>**BREAKING**</DNT>: Se actualizó el administrador de contexto predeterminado para que sea AsyncLocalContextManager.
      </td>

      <td>
        * El LegacyContextManager predeterminado anterior se puede restaurar configurando el indicador característico de `config.feature_flag.legacy_context_manager` en `true`.
        * Si prefiere las variables de entorno, puede configurar `NEW_RELIC_FEATURE_FLAG_LEGACY_CONTEXT_MANAGER` en `true`.
        * Tenga en cuenta que este administrador de contexto se eliminará en versiones futuras. Si descubre que debe volver a utilizar este administrador de contexto legacy , comuníquese con [el soporte de New Relic](https://support.newrelic.com/s/) o con un [problema de GitHub](https://github.com/newrelic/node-newrelic/issues/new?assignees=&labels=bug%2C+needs-triage&projects=&template=bug_report.md&title=).
      </td>
    </tr>

    <tr>
      <td>
        <DNT>**BREAKING**</DNT>: Renombrado `shim.handleCATHeaders` a `shim.handleMqTracingHeaders`.
      </td>

      <td/>
    </tr>

    <tr>
      <td>
        Actualice la dependencia de New Relic a versiones con soporte para la versión actualizada de Node.js
      </td>

      <td>
        * @newrelic/AWS-sdk v7.0.0
        * @newrelic/koa v8.0.0
        * @newrelic/native-métrica v10.0.0
        * @newrelic/superagent v7.0.0
        * @newrelic/test-utilities v8.0.0
      </td>
    </tr>
  </tbody>
</table>

## Compatibilidad con la versión Node.js [#node-support-v11]

Node.js 16 es la versión más antigua admitida por el agente New Relic Node.js v11. Node.js 14 y 15 no son compatibles con v11. Los clientes que ejecutan Node.js 15 y versiones anteriores tienen dos opciones:

* Actualice a una versión compatible de Node.js y aproveche la nueva característica del agente New Relic Node.js v11.
* Permanecer en el agente New Relic Node.js v10 sin la capacidad de usar la nueva característica que solo está disponible con las versiones actualizadas del agente.

<Callout variant="tip">
  Actualice a una versión más reciente de Node.js lo antes posible. La próxima versión principal del agente New Relic Node.js probablemente eliminará la compatibilidad con Node.js 16.
</Callout>

## Actualice a la versión 10 del agente Node.js [#node-agent-v10]

Antes de actualizar a Node.js versión 10, revise esta información para ver cambios importantes.

<table>
  <thead>
    <tr>
      <th style={{ width: "250px" }}>
        <DNT>
          **Major changes with Node.js agent v11**
        </DNT>
      </th>

      <th>
        <DNT>
          **Comments**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        * Se agregó la capacidad de registrar múltiples enlaces de instrumentación (onRequire, onResolved) para el mismo nombre de módulo resuelto.
      </td>

      <td>
        * Esta ha sido una limitación del agente desde el principio.
        * Si usó la API para instrumentar api.instrument, api.instrumentDatastore, api.instrumentWebframework, api.instrumentMessages o api.instrumentConglomerate, anularía los enlaces de instrumentación existentes.
        * El efecto fue que el agente Node.js no funcionaría según lo diseñado.
      </td>
    </tr>

    <tr>
      <td>
        <DNT>**BREAKING**</DNT>: Se actualizó el valor predeterminado de `config.transaction_tracer.record_sql` de desactivado a ofuscado. Esto significa que las declaraciones SQL serán capturadas pero ofuscadas.
      </td>
    </tr>

    <tr>
      <td>
        <DNT>**BREAKING**</DNT>: Los parámetros de ruta (URL) ahora se almacenan como `request.parameters.route.*` atributo en transacciones, segmentos raíz y tramos.
      </td>

      <td>
        * El parámetro de consulta estará disponible como atributo con el prefijo request.parameters.\* sobre transacción y Spans.
        * El parámetro de ruta estará disponible como atributo con el prefijo request.parameters.route.\* sobre transacción y Spans.
        * El parámetro de ruta (también conocido como parámetro de URL) es una característica común de varios marcos web, donde puede crear un marcador de posición como parte de una definición de ruta API.
      </td>
    </tr>

    <tr>
      <td>
        <DNT>**BREAKING**</DNT>: Se eliminó captureUrlParams de la clase WebFrameworkShim.
      </td>
    </tr>

    <tr>
      <td>
        <DNT>**DEPRECATION NOTICE**</DNT>: shim.unwrap y shim.unwrapOnce ya no funcionarán si intentas desenvolver un artículo que ha sido envuelto varias veces.
      </td>

      <td>
        * Esto se debe a que ahora permitimos instrumentar el mismo módulo más de una vez, no se puede desenvolver de forma segura sin romper toda la instrumentación registrada. Planeamos eliminar shim.unwrap y shim.unwrapOnce en la próxima versión importante.
      </td>
    </tr>

    <tr>
      <td>
        Actualice la dependencia de New Relic a versiones con soporte para la versión actualizada de Node.js
      </td>

      <td>
        * @newrelic/AWS-sdk v7.0.0
        * @newrelic/koa v8.0.0
        * @newrelic/native-métrica v10.0.0
        * @newrelic/superagent v7.0.0
        * @newrelic/test-utilities v8.0.0
      </td>
    </tr>
  </tbody>
</table>

## Compatibilidad con la versión Node.js [#node-support-v10]

Node.js 14 es la versión más antigua admitida por el agente New Relic Node.js v10. Node.js 12 y 13 no son compatibles con v10. Los clientes que ejecutan Node.js 13 y versiones anteriores tienen dos opciones:

* Actualice a una versión compatible de Node.js y aproveche la nueva característica del agente New Relic Node.js v10.
* Permanecer en el agente New Relic Node.js v8 sin la capacidad de usar la nueva característica que solo está disponible con las versiones de actualización del agente.

<Callout variant="tip">
  Actualice a una versión más reciente de Node.js lo antes posible. La próxima versión principal del agente New Relic Node.js probablemente eliminará la compatibilidad con Node.js 14.
</Callout>

## Actualice a la versión 9 del agente Node.js [#node-agent-v9]

Antes de actualizar a Node.js versión 9, revise esta información para ver cambios importantes.

<table>
  <thead>
    <tr>
      <th style={{ width: "250px" }}>
        <DNT>
          **Major changes with Node.js agent v9**
        </DNT>
      </th>

      <th>
        <DNT>
          **Comments**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Se agregó soporte de paridad oficial para Node.js 18.
      </td>

      <td/>
    </tr>

    <tr>
      <td>
        <DNT>**BREAKING**</DNT>: Se eliminó la compatibilidad con Node.js 12.
      </td>

      <td>
        * Para más información consulte nuestra [política de soporte](/docs/agents/nodejs-agent/getting-started/compatibility-requirements-nodejs-agent).
      </td>
    </tr>

    <tr>
      <td>
        <DNT>**BREAKING**</DNT>: El agente ya no incluye el paquete de certificados New Relic automáticamente cuando usa la configuración de 'certificados' (comúnmente con servidores proxy).
      </td>

      <td>
        * El agente ya no incluye el paquete de certificados New Relic cuando usa la configuración de 'certificados' (comúnmente con servidores proxy). Si encuentra que esto interrumpe su entorno actual, le recomendamos obtener un paquete de CA como el de Mozilla.
      </td>
    </tr>

    <tr>
      <td>
        <DNT>**BREAKING**</DNT>: El agente ahora excluye el puerto cuando realiza solicitudes HTTPS externas al puerto 443 para cumplir con la especificación y otros agentes.
      </td>

      <td>
        * Los segmentos externos anteriores se denominarían `External/example.com:443` cuando se utilizara el puerto HTTPS predeterminado.
        * El segmento externo ahora se llamará `External/example.com`.
      </td>
    </tr>

    <tr>
      <td>
        <DNT>**BREAKING**</DNT>: Se eliminó la capacidad de deshabilitar el seguimiento de contexto de promesa basado en ganchos asíncronos a través del indicador de característica `await_support` . Esto también elimina la instrumentación legacy de Promise.
      </td>

      <td>
        * Se liberó la bandera de característica `await_support` . El agente ahora depende de async_hooks para rastrear la propagación de la promesa asíncrona. El resultado neto es que si `feature_flag.await_support` se configuró en falso, la instrumentación legacy realizó un seguimiento de cada función en una cadena de promesa como un segmento separado.
      </td>
    </tr>

    <tr>
      <td>
        <DNT>**BREAKING**</DNT>: Se eliminó la instrumentación para el paquete npm obsoleto [de Oracle](https://www.npmjs.com/package/oracle) .
      </td>

      <td/>
    </tr>

    <tr>
      <td>
        <DNT>**BREAKING**</DNT>: Se actualizó la versión mínima de `pg` para que sea 8.2.x. Esta es la primera versión de soporte que se ejecuta en Node.js 14+.
      </td>

      <td/>
    </tr>

    <tr>
      <td>
        <DNT>**BREAKING**</DNT>: Se actualizó la versión mínima admitida de hapi para que sea v20.0.0.
      </td>

      <td>
        * Todas las versiones anteriores a v20.0.0 están obsoletas por hapi por razones de seguridad. Vea [su política de soporte](https://hapi.dev/policies/support/).
      </td>
    </tr>

    <tr>
      <td>
        Actualice la dependencia de New Relic a versiones con soporte para la versión actualizada de Node.js
      </td>

      <td>
        * @newrelic/AWS-sdk v5.0.0
        * @newrelic/koa v7.0.0
        * @newrelic/native-métrica v9.0.0
        * @newrelic/superagent v6.0.0
        * @newrelic/test-utilities v7.0.0
      </td>
    </tr>
  </tbody>
</table>

## Compatibilidad con la versión Node.js [#node-support-v9]

Node.js 14 es la versión más antigua admitida por el agente New Relic Node.js v9. Node.js 12 y 13 no son compatibles con v9. Los clientes que ejecutan Node.js 13 y versiones anteriores tienen dos opciones:

* Actualice a una versión compatible de Node.js y aproveche la nueva característica del agente New Relic Node.js v9.
* Permanecer en el agente New Relic Node.js v8 sin la capacidad de usar la nueva característica que solo está disponible con las versiones de actualización del agente.

<Callout variant="tip">
  Actualice a una versión más reciente de Node.js lo antes posible. La próxima versión principal del agente New Relic Node.js probablemente eliminará la compatibilidad con Node.js 14.
</Callout>

## Actualice a la versión 8 del agente Node.js [#node-agent-v8]

Antes de actualizar a Node.js versión 8, revise esta información para ver cambios importantes.

<table>
  <thead>
    <tr>
      <th style={{ width: "250px" }}>
        <DNT>
          **Major changes with Node.js agent v8**
        </DNT>
      </th>

      <th>
        <DNT>
          **Comments**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Se agregó soporte de paridad oficial para Node.js 16.
      </td>

      <td/>
    </tr>

    <tr>
      <td>
        <DNT>**BREAKING**</DNT>: Se eliminó la compatibilidad con Node.js v10.x.
      </td>

      <td>
        * Para más información consulte nuestra [política de soporte](/docs/agents/nodejs-agent/getting-started/compatibility-requirements-nodejs-agent).
      </td>
    </tr>

    <tr>
      <td>
        <DNT>**BREAKING**</DNT>: Se eliminó `serverless_mode` como indicador de característica.
      </td>

      <td>
        * La configuración estándar `serverless_mode` todavía existe.
      </td>
    </tr>

    <tr>
      <td>
        <DNT>**BREAKING**</DNT>: El agente ya no incluye el paquete de certificados New Relic automáticamente cuando usa la configuración de 'certificados' (comúnmente con servidores proxy).
      </td>

      <td>
        * Si encuentra que esto interrumpe su entorno actual, puede aprovechar un indicador de característica para restaurar temporalmente esta funcionalidad. Configuración de ejemplo: `feature_flag: { certificate_bundle: true }`. En este caso, recomendamos adquirir un paquete de certificados para su entorno, como el de Mozilla. El paquete New Relic y la bandera de característica se eliminarán por completo en la próxima versión importante.
        * config.feature_flags.certificate_bundle predeterminado a falso.
      </td>
    </tr>

    <tr>
      <td>
        Actualice la dependencia de New Relic a versiones con soporte para la versión actualizada de Node.js
      </td>

      <td>
        * @newrelic/AWS-sdk v4.0.1
        * @newrelic/koa v6.0.1
        * @newrelic/native-métrica v7.0.1
        * @newrelic/superagent v5.0.1
        * @newrelic/test-utilities v6.0.0
      </td>
    </tr>
  </tbody>
</table>

## Compatibilidad con la versión Node.js [#node-support-v8]

Node.js v12 es la versión más antigua admitida por el agente New Relic Node.js v8. Node.js 10 y 11 no son compatibles con v8. Los clientes que ejecutan Node.js 11 y versiones anteriores tienen dos opciones:

* Actualice a una versión compatible de Node.js y aproveche la nueva característica del agente New Relic Node.js v8.
* Permanecer en el agente New Relic Node.js v7 sin la capacidad de usar la nueva característica que solo está disponible con las versiones actualizadas del agente.

<Callout variant="tip">
  Actualice a una versión más reciente de Node.js lo antes posible. La próxima versión principal del agente New Relic Node.js probablemente eliminará la compatibilidad con Node.js 12.
</Callout>

## Actualice a la versión 7 del agente Node.js [#node-agent-v7]

Antes de actualizar a Node.js versión 7, revise esta información para ver cambios importantes.

<table>
  <thead>
    <tr>
      <th style={{ width: "250px" }}>
        <DNT>
          **Major changes with Node.js agent v7**
        </DNT>
      </th>

      <th>
        <DNT>
          **Comments**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        <DNT>**BREAKING**</DNT> Se eliminaron los atributos de respuesta http `httpResponseCode`, `response.status` y `httpResponseMessage` obsoletos.
      </td>

      <td>
        * <DNT>
            **v6.4.2-v6.14.0:**
          </DNT>

          A partir del agente v6.4.2, estos atributos se marcaron como obsoletos pero se dejaron para dar un período de transición para el nuevo atributo.

        * <DNT>
            **v7:**
          </DNT>

          Cuando los informes de atributos de respuesta http están habilitados, se informarán `http.statusCode` y `http.statusText` .
      </td>
    </tr>

    <tr>
      <td>
        <DNT>**BREAKING**</DNT> Se eliminó el método de API `setIgnoreTransaction` obsoleto.
      </td>

      <td>
        * <DNT>
            **v5 - v6:**
          </DNT>

          A partir del agente v5.0.0, este método se marcó como obsoleto pero se dejó para dar un período de transición para los nuevos métodos.

        * <DNT>
            **v7:**
          </DNT>

          La aplicación debe utilizar el método API [`transactionHandle.ignore()`](/docs/agents/nodejs-agent/api-guides/nodejs-agent-api/#transaction-handle-ignore).
      </td>
    </tr>

    <tr>
      <td>
        <DNT>**BREAKING**</DNT> Se eliminó el elemento de configuración `api.custom_parameters_enabled` y la variable de entorno asociada `NEW_RELIC_API_CUSTOM_PARAMETERS`.
      </td>

      <td>
        * La aplicación debe usar la configuración [`api.custom_attributes_enabled` o la variable de entorno asociada `NEW_RELIC_API_CUSTOM_ATTRIBUTES`](/docs/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#custom-attributes) para habilitar [`newrelic.addCustomAttribute`](/docs/agents/nodejs-agent/api-guides/nodejs-agent-api/#add-custom-attribute) y [`newrelic.addCustomAttributes`](/docs/agents/nodejs-agent/api-guides/nodejs-agent-api/#add-custom-attributes).
      </td>
    </tr>

    <tr>
      <td>
        <DNT>**BREAKING**</DNT> Se eliminaron los métodos de API rastreo distribuido obsoletos, `createDistributedTracePayload()` y `acceptDistributedTracePayload()`
      </td>

      <td>
        * <DNT>
            **v6.4.0-v6.14.0:**
          </DNT>

          A partir del agente v6.4.0, estos métodos se marcaron como obsoletos pero se dejaron para dar un período de transición para los nuevos métodos.

        * <DNT>
            **v7:**
          </DNT>

          La aplicación debe utilizar los métodos API [`transactionHandle.insertDistributedTraceHeaders(headers)`](/docs/agents/nodejs-agent/api-guides/nodejs-agent-api/#transaction-handle-insertDistributedTraceHeaders) y [`transactionHandle.acceptDistributedTraceHeaders(transportType, headers) `](/docs/agents/nodejs-agent/api-guides/nodejs-agent-api/#transaction-handle-acceptDistributedTraceHeaders). Con estos métodos, el agente de Node.js ahora aceptará los encabezados `traceparent` y `tracestate` del W3C al llamar a `transactionHandle.acceptDistributedTraceHeaders(headers)` e incluirá los encabezados del W3C junto con el encabezado rastreo distribuido de New Relic al llamar a `transactionHandle.insertDistributedTraceHeaders(headers)`, a menos que el encabezado New Relic El formato rastreo se deshabilita usando [`distributed_tracing.exclude_newrelic_header:true`.](/docs/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#dt-exclude-newrelic-header)
      </td>
    </tr>

    <tr>
      <td>
        Actualice la dependencia de New Relic a versiones con soporte para la versión actualizada de Node.js
      </td>

      <td>
        * @newrelic/AWS-sdk v3.0.0
        * @newrelic/koa v5.0.0
        * @newrelic/native-métrica v6.0.0
        * @newrelic/superagent v4.0.0
        * @newrelic/test-utilities v5.0.0
      </td>
    </tr>
  </tbody>
</table>

## Compatibilidad con la versión Node.js [#node-support-v7]

Node.js v10 es la versión más antigua admitida por el agente New Relic Node.js v7. Node.js 8 y 9 no son compatibles con v7. Los clientes que ejecutan Node.js 9 y versiones anteriores tienen dos opciones:

* Actualice a una versión compatible de Node.js y aproveche la nueva característica del agente New Relic Node.js v7.
* Permanecer en el agente New Relic Node.js v6 sin la capacidad de usar la nueva característica que solo está disponible con las versiones actualizadas del agente.

[Node.js 10 no recibe actualizaciones](https://github.com/nodejs/Release/tree/cecdcf#end-of-life-releases). Actualice a una versión más reciente de Node.js lo antes posible. La compatibilidad con Node.js 10 se suspendió con el agente New Relic Node.js v8.

## Actualice a la versión 6 del agente Node.js [#node-agent-v6]

Antes de actualizar a la versión 6 del agente Node.js, revise esta información para ver cambios importantes.

<table>
  <thead>
    <tr>
      <th style={{ width: "250px" }}>
        <DNT>
          **Major changes with Node.js agent v6**
        </DNT>
      </th>

      <th>
        <DNT>
          **Comments**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Módulo de instrumentación oficial framework Koa actualizado a v3.0.0
      </td>

      <td>
        * <DNT>
            **v6:**
          </DNT>

          Se agregó soporte para @koa/router hasta v8.0.2. @koa/router v8.0.3 y posteriores no son compatibles actualmente.

        * <DNT>
            **v6:**
          </DNT>

          Se agregó soporte para Node.js v12 y se eliminó el soporte para Node.js v6, 7 y 9. La versión mínima admitida es Node.js v8.

        * Consulte también [las Notas de la versión Koa de New Relic en Github.](https://github.com/newrelic/node-newrelic-koa/blob/master/NEWS.md).
      </td>
    </tr>

    <tr>
      <td>
        Se eliminó el parámetro de configuración `max_samples_per_minute` obsoleto, que se reemplaza por el comportamiento `max_samples_stored` .
      </td>

      <td>
        * <DNT>
            **v1 - v5:**
          </DNT>

          `max_samples_per_minute` definió el número máximo de eventos que el agente recopila por minuto. Si su aplicación utilizó previamente `max_samples_per_minute` como límite superior, es posible que deba reducir el umbral a un máximo válido para evitar que se eliminen datos en el servidor. Recomendamos menos de 10k.

        * <DNT>
            **v5:**
          </DNT>

          En el agente v5 y versiones anteriores, `max_samples_stored` definió la cantidad máxima de eventos que el agente almacena si no puede comunicarse con el [recolector New Relic](/docs/accounts-partnerships/education/getting-started-new-relic/glossary#collector).

        * <DNT>
            **v6:**
          </DNT>

          El nuevo comportamiento de `max_samples_stored` define la cantidad máxima de eventos que el agente recopila por minuto. Si hay más que este número, el agente recopila un muestreo estadístico. Este uso de la configuración es consistente con el otro agente APM.

        * <DNT>
            **Troubleshooting tips:**
          </DNT>

          Si faltan datos del evento, aumente el valor de `max_samples_stored` o vuelva al valor predeterminado. El valor de `max_samples_stored` no debe ser superior a 10.000.
      </td>
    </tr>
  </tbody>
</table>

## Compatibilidad con la versión Node.js [#node-support-v6]

Node.js 8 es la versión más antigua admitida por el agente New Relic Node.js v6. Node.js 6, 7 y 9 no son compatibles con v6. Los clientes que ejecutan Node.js 6, 7 y 9 tienen dos opciones:

* Actualice a una versión compatible de Node.js y aproveche la nueva característica del agente New Relic Node.js v6.
* Permanecer en el agente New Relic Node.js v5 sin la capacidad de usar la nueva característica que solo está disponible con las versiones actualizadas del agente.

[Node.js 8 ya no recibe actualizaciones](https://github.com/nodejs/Release/tree/cecdcf#end-of-life-releases), pero New Relic seguirá admitiendo estas versiones de Node.js por el momento.

<Callout variant="tip">
  Actualice a una versión más reciente de Node.js lo antes posible. La próxima versión principal del agente New Relic Node.js probablemente eliminará la compatibilidad con Node.js 8.
</Callout>

## Actualice a la versión 5 del agente Node.js [#node-agent-v5]

Antes de actualizar al agente Node.js v5, revise esta información para ver cambios importantes. Consulte también [la guía de migración Node.js v5 de New Relic en GitHub](https://github.com/newrelic/node-newrelic/blob/819db2f3f9051960e034f36540817450f663241f/Migration%20Guide.md).

<table>
  <thead>
    <tr>
      <th style={{ width: "250px" }}>
        <DNT>
          **Major changes with Node.js v5 agent**
        </DNT>
      </th>

      <th>
        <DNT>
          **Comments**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Se eliminaron los métodos `addCustomParameter` obsoletos.
      </td>

      <td>
        * <DNT>
            **v2 - v4:**
          </DNT>

          A partir del agente v2.7.0, estos métodos se marcaron como obsoletos pero se dejaron para dar un período de transición para los nuevos métodos.

        * <DNT>
            **v5:**
          </DNT>

          La aplicación debe utilizar los métodos API [`newrelic.addCustomAttribute()`](/docs/agents/nodejs-agent/api-guides/nodejs-agent-api#add-custom-attribute) y [`newrelic.addCustomAttributes()`](/docs/agents/nodejs-agent/api-guides/nodejs-agent-api#add-custom-attributes). Estos son reemplazos directos de los métodos antiguos.
      </td>
    </tr>

    <tr>
      <td>
        Se eliminaron los métodos `create*Transaction` obsoletos.
      </td>

      <td>
        * <DNT>
            **v2 - v4:**
          </DNT>

          A partir del agente v2.0.2, estos métodos se marcaron como obsoletos pero se dejaron para dar un período de transición a los nuevos métodos.

        * <DNT>
            **v5:**
          </DNT>

          La aplicación debe actualizarse a los métodos API [`newrelic.startWebTransaction()`](/docs/agents/nodejs-agent/api-guides/nodejs-agent-api#startWebTransaction) y [`newrelic.startBackgroundTransaction()`](/docs/agents/nodejs-agent/api-guides/nodejs-agent-api#startBackgroundTransaction).

        * <DNT>
            **Troubleshooting tips:**
          </DNT>

          Estos nuevos métodos **no** reemplazan a los antiguos. Antes de pasar a estos nuevos métodos, revise nuestra [guía de instrumentación personalizada](/docs/agents/nodejs-agent/supported-features/nodejs-custom-instrumentation#web-txn).
      </td>
    </tr>

    <tr>
      <td>
        Se eliminó el método `createTracer` obsoleto.
      </td>

      <td>
        * <DNT>
            **v3 - v4:**
          </DNT>

          A partir del agente v3.3.0, este método se marcó como obsoleto en favor de `newrelic.startSegment()`.

        * <DNT>
            **v5:**
          </DNT>

          la aplicación debe actualizarse a [`newrelic.startSegment()`](/docs/agents/nodejs-agent/api-guides/nodejs-agent-api#startSegment).
      </td>
    </tr>

    <tr>
      <td>
        Se eliminó `node-cassandra-cql` instrumentación.
      </td>

      <td>
        * <DNT>
            **v4:**
          </DNT>

          La aplicación que utiliza el paquete npm [`node-cassandra-cql`](https://www.npmjs.com/package/node-cassandra-cql) obtendría almacenamiento de datos métricos para Cassandra.

        * <DNT>
            **v5:**
          </DNT>

          La aplicación debe migrar al paquete [`cassandra-driver`](https://www.npmjs.com/package/cassandra-driver) para obtener Cassandra almacenamiento de datos métricos. Este módulo es mantenido activamente por los mismos desarrolladores. El paquete `node-cassandra-cql` se abandonó en febrero de 2014 en favor del paquete `cassandra-driver` .
      </td>
    </tr>

    <tr>
      <td>
        Se eliminaron las configuraciones obsoletas `capture_params` y `ignored_params` .
      </td>

      <td>
        * <DNT>
            **v2 - v4:**
          </DNT>

          A partir del agente v2.7.0, estos parámetros de configuración provocaron que se registrara una advertencia y los valores se actualizaron automáticamente a las nuevas configuraciones de atributos.

        * <DNT>
            **v5:**
          </DNT>

          Se seguirá registrando una advertencia, pero se ignorará la configuración y ya no se realizará ninguna actualización automática.

        * <DNT>
            **Troubleshooting tips:**
          </DNT>

          Si su aplicación tenía parámetros enumerados en la configuración `ignored_params` , deberá moverlos a [`attributes.exclude`](/docs/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration#attributes_exclude).
      </td>
    </tr>
  </tbody>
</table>

## Compatibilidad con la versión Node.js [#node-support-v5]

Node.js 6 es la primera versión compatible con el agente New Relic Node.js v5. Node.js 4 y 5 no son compatibles con v5. Los clientes que ejecutan Node.js 4 o 5 tienen dos opciones:

* Actualice a una versión compatible de Node.js y aproveche la nueva característica del agente New Relic Node.js v5.
* Permanecer en el agente New Relic Node.js v4 sin la capacidad de usar la nueva característica que solo está disponible con las versiones actualizadas del agente.

[Node.js 7 y 9 ya no reciben actualizaciones](https://github.com/nodejs/Release/tree/cecdcf#end-of-life-releases), pero New Relic seguirá admitiendo estas versiones de Node.js por el momento.

<Callout variant="tip">
  Actualice a una versión más reciente de Node.js lo antes posible. La próxima versión principal del agente New Relic Node.js probablemente eliminará la compatibilidad con Node.js 6 y 7.
</Callout>

## Banderas de características a partir de v5 [#v5-feature-flags]

A partir de New Relic para Node.js v5:

* `custom_instrumentation`: Esta característica ya no es configurable.
* `custom_metrics`: Esta característica ya no es configurable.
* `synthetics`: Esta característica ya no es configurable.
* `native_metrics`: Esta característica ahora está controlada por el valor de configuración `plugins.native_metrics.enabled` .

## Actualice a la versión 4 del agente Node.js [#node-agent-v4]

Antes de actualizar al agente Node.js v4, revise esta información para ver cambios importantes. Consulte también [la guía de migración Node.js v4 de New Relic en GitHub](https://github.com/newrelic/node-newrelic/blob/819db2f3f9051960e034f36540817450f663241f/Migration%20Guide.md#upgrading-to-agent-v4).

<CollapserGroup>
  <Collapser
    id="https-proxy-agent"
    title="Actualice https-proxy-agente de v0 a v2"
  >
    Los cambios importantes con el agente Node.js v4 incluyen una actualización de `https-proxy-agent` de v0 a v2. Esta dependencia se actualizó debido a un [problema de seguridad](/docs/using-new-relic/new-relic-security/security-bulletins/security-bulletin-nr18-08) en el `https-proxy-agent` que utilizó el agente New Relic Node.js. Debido a que `https-proxy` v2 es incompatible con el nodo v0.10 y v0.12, New Relic ha dejado obsoletas esas versiones de agente. No se requiere ninguna acción para migrar de la v3 a la v4 del agente Node.js de New Relic.
  </Collapser>

  <Collapser
    id="v4-node-version"
    title="Compatibilidad con la versión Node.js"
  >
    Node.js 4 es la versión más antigua admitida por el agente New Relic Node.js v4. Node.js 0.10 y 0.12 no son compatibles con v4. Los clientes que ejecutan Node.js 0.10 o 0.12 tienen dos opciones:

    * Actualice a una versión compatible de Node.js y aproveche la nueva característica del agente New Relic Node.js v4.

    * Permanecer en el agente New Relic Node.js v3 sin la capacidad de utilizar la nueva característica que solo está disponible con versiones actualizadas del agente.

      [Node.js 4, 5 y 7 tampoco reciben actualizaciones](https://github.com/nodejs/Release/tree/1d8fca#end-of-life-releases), pero New Relic seguirá admitiendo estas versiones de Node.js por el momento.

      <Callout variant="tip">
        Actualice a una versión más reciente de Node.js lo antes posible. La próxima versión principal del agente New Relic Node.js probablemente eliminará la compatibilidad con Node.js 4 y 5.
      </Callout>
  </Collapser>
</CollapserGroup>

## Actualice a la versión 3 del agente Node.js [#node-agent-v3]

Antes de actualizar a Node.js agente agente v3, revise esta información para ver cambios importantes. Consulte también [la guía de migración de Node.js v3 de New Relic en GitHub](https://github.com/newrelic/node-newrelic/blob/819db2f3f9051960e034f36540817450f663241f/Migration%20Guide.md#upgrading-to-agent-v3).

<CollapserGroup>
  <Collapser
    id="changes-v3"
    title="Cambios importantes con el agente Node.js v3"
  >
    <table>
      <thead>
        <tr>
          <th style={{ width: "250px" }}>
            <DNT>
              **Major changes with Node.js v3 agent**
            </DNT>
          </th>

          <th>
            <DNT>
              **Comments**
            </DNT>
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            Configuración SSL eliminada
          </td>

          <td>
            * <DNT>
                **v2:**
              </DNT>

              Con el agente v2, fue posible configurar el agente para conectarse a New Relic sin cifrado.

            * <DNT>
                **v3:**
              </DNT>

              El agente Node.js v3 siempre se conecta a los servidores de New Relic mediante cifrado TLS para proteger las comunicaciones. Si el agente está configurado para desactivar esto, se registra una advertencia y se ignora la configuración.
          </td>
        </tr>

        <tr>
          <td>
            Solicitar parámetro ahora con el prefijo `request.parameters.`
          </td>

          <td>
            * <DNT>
                **v2:**
              </DNT>

              El agente v2 recopila el parámetro de solicitud, como el parámetro de ruta (`/users/:userId`) y el parámetro de consulta (`/users?userId=123`), como el nombre del parámetro (`userId`).

            * <DNT>
                **v3:**
              </DNT>

              El agente v3 antepone a todos los parámetros de solicitud la cadena `request.parameters.`. Por ejemplo,`userId` aparece como `request.parameters.userId`.

            * <DNT>
                **Troubleshooting tips:**
              </DNT>

              Si tiene un panel, una política de alertas u otra consulta NRQL basada en el parámetro de solicitud, actualícelos con los nuevos nombres de los parámetros.
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>

  <Collapser
    id="v3-feature-flags"
    title="Banderas de características a partir de v3"
  >
    A partir del agente New Relic Node.js v3, la característica `send_request_uri_attribute` ya no es configurable.
  </Collapser>
</CollapserGroup>

## Actualice a la versión 2 del agente Node.js [#node-agent-v2]

Antes de actualizar al agente Node.js v2, revise esta información para ver cambios importantes. Consulte también [la guía de migración de Node.js v2 de New Relic en GitHub](https://github.com/newrelic/node-newrelic/blob/819db2f3f9051960e034f36540817450f663241f/Migration%20Guide.md#upgrading-to-agent-v2).

<CollapserGroup>
  <Collapser
    id="changes-v2"
    title="Cambios importantes con el agente Node.js v2"
  >
    <table>
      <thead>
        <tr>
          <th style={{ width: "200px" }}>
            <DNT>
              **Major changes with Node.js v2 agent**
            </DNT>
          </th>

          <th>
            <DNT>
              **Comments**
            </DNT>
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            Nombramiento invertido e ignorar reglas
          </td>

          <td>
            * <DNT>
                **v1:**
              </DNT>

              Con el agente v1, las reglas definidas en las propiedades de configuración `rules.name` y `rules.ignore` se aplicaron en orden inverso; la primera regla de la lista se aplicó en último lugar.

            * <DNT>
                **v2:**
              </DNT>

              El agente Node.js v2 aplica las reglas en el orden en que están definidas, por lo que la primera regla de la lista se aplica primero.

            * <DNT>
                **Troubleshooting tips:**
              </DNT>

              Si utilizó reglas de nomenclatura en el agente v1 y nota problemas, invierta el orden de sus reglas en su configuración.
          </td>
        </tr>

        <tr>
          <td>
            Transacción de solicitud HTTP deduplicada
          </td>

          <td>
            * <DNT>
                **v1:**
              </DNT>

              El agente v1 inició una nueva transacción para cada escucha en el evento `request` de un servidor HTTP. En una aplicación con varios oyentes en el evento `request` , esto dio lugar a la creación de transacciones extrañas que casi siempre no se nombraban correctamente.

            * <DNT>
                **v2:**
              </DNT>

              El agente v2 solo crea una única transacción para cada evento `request` emitido.

            * <DNT>
                **Troubleshooting tips:**
              </DNT>

              Si utilizó varios detectores de eventos `request` y agregó una llamada a `newrelic.ignoreTransaction()` para eliminar la transacción adicional, elimine esas llamadas.
          </td>
        </tr>

        <tr>
          <td>
            Dejó de tragar errores de solicitud saliente
          </td>

          <td>
            * <DNT>
                **v1:**
              </DNT>

              El agente v1 tragó el evento `error` no controlado emitido por objetos de solicitud HTTP salientes.

            * <DNT>
                **v2:**
              </DNT>

              El agente v2 elimina este comportamiento. En cambio, el agente v2 no cambia la ejecución normal de Node.js. Esto significa que el evento `error` siempre se emitirá.

            * <DNT>
                **Troubleshooting tips:**
              </DNT>

              Si está realizando solicitudes salientes y actualmente no escucha el evento `error` , agregue un detector y maneje el error según corresponda para su aplicación.
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>

  <Collapser
    id="config-options"
    title="Opciones de configuración actualizadas a partir de v2"
  >
    En `newrelic.js`, edite las propiedades [de configuración del agente Node.js](/docs/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration) que utiliza para compatibilidad con las últimas versiones:

    <table>
      <thead>
        <tr>
          <th width={200}>
            <DNT>
              **Deprecated property**
            </DNT>
          </th>

          <th>
            <DNT>
              **New property**
            </DNT>
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            `capture_params`
          </td>

          <td>
            `attributes.enabled: false`

            De forma predeterminada, los atributos de solicitud no se envían a New Relic. Establezca `attributes.enabled: true` para incluir el atributo definido por el agente o personalizado en la traza. La propiedad `capture_params` ha quedado obsoleta.
          </td>
        </tr>

        <tr>
          <td>
            `ignored_params`
          </td>

          <td>
            `attributes.exclude: []`

            Agregue cualquier clave de atributo de solicitud a la lista `attributes.exclude` . Ahora, en lugar de tener que ser una coincidencia exacta, se pueden agregar comodines (`*`) a cada elemento para un filtrado más amplio. La propiedad `ignored_params` ha quedado obsoleta.
          </td>
        </tr>
      </tbody>
    </table>

    Estas propiedades [de configuración del agente Node.js](/docs/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration) también tienen anulaciones para destinos específicos, que incluyen:

    * `transaction_tracer`

    * `transaction_events`

    * `error_collector`

    * `browser_monitoring`

      Por ejemplo, si la raíz `attributes.enabled` es `true` y configuras `transaction_tracer.attributes.enabled: false`, esto restringirá la recopilación de atributos en la traza de la transacción, y al mismo tiempo los permitirá para todos los demás.
  </Collapser>

  <Collapser
    id="deprecated-apis"
    title="Métodos API obsoletos a partir de v2"
  >
    Los siguientes métodos del agente Node.js han quedado obsoletos y New Relic los ha eliminado en la versión 5 del agente. Cada uno tiene un reemplazo fácil que realiza la misma tarea de una manera más flexible y confiable.

    <CollapserGroup>
      <Collapser
        id="newrelic_createWebTransaction"
        title={<InlineCode>nuevarelic.createWebTransaction()</InlineCode>}
      >
        Reemplace con [`newrelic.startWebTransaction()`](#newrelic_start_transaction) y [`newrelic.getTransaction()`](#newrelic_getTransaction).
      </Collapser>

      <Collapser
        id="newrelic_createBackgroundTransaction"
        title={<InlineCode>nuevarelic.createBackgroundTransaction()</InlineCode>}
      >
        Reemplace con [`newrelic.startBackgroundTransaction()`](#newrelic_start_transaction) y [`newrelic.getTransaction()`](#newrelic_getTransaction).
      </Collapser>

      <Collapser
        id="newrelic_addCustomParameter"
        title={<InlineCode>nuevarelic.addCustomParameter()</InlineCode>}
      >
        Reemplace con [`newrelic.addCustomAttribute()`](#newrelic_add_custom_attribute).
      </Collapser>

      <Collapser
        id="newrelic_addCustomParameter"
        title={<InlineCode>newrelic.addCustomParameters()</InlineCode>}
      >
        Reemplace con [`newrelic.addCustomAttributes()`](#newrelic_add_custom_attributes).
      </Collapser>
    </CollapserGroup>
  </Collapser>

  <Collapser
    id="api-methods"
    title="Nuevos métodos API del agente v2"
  >
    Los siguientes métodos API son nuevos con el agente New Relic Node.js v2.

    <CollapserGroup>
      <Collapser
        id="newrelic_getTransaction"
        title={<InlineCode>newrelic.getTransaction()</InlineCode>}
      >
        Este método obtiene una referencia a la transacción que se está ejecutando actualmente. Úselo junto con:

        * `newrelic.startWebTransaction`
        * `newrelic.startBackgroundTransaction`
        * Servicios de devolución de mensajes de consumidor basados en llamadas para [resolución de problemas de consumidores de mensajes](/docs/agents/nodejs-agent/troubleshooting/troubleshoot-message-consumers)
      </Collapser>

      <Collapser
        id="newrelic_start_transaction"
        title={<><InlineCode>newrelic.startWebTransaction()</InlineCode><InlineCode>newrelic.startBackgroundTransaction()</InlineCode></>}
      >
        Estos nuevos métodos API reemplazan a los métodos `create*Transaction` más antiguos. Son más fáciles de usar y funcionan perfectamente con las promesas. A diferencia del método v1, la devolución de llamada proporcionada se invoca inmediatamente.
      </Collapser>

      <Collapser
        id="newrelic_instrument"
        title={<><InlineCode>newrelic.instrument()</InlineCode><InlineCode>newrelic.instrumentDatastore()</InlineCode><InlineCode>newrelic.instrumentWebframework()</InlineCode><InlineCode>newrelic.instrumentMessages()</InlineCode></>}
      >
        Utilice estos métodos para agregar instrumentación personalizada para módulos de terceros, incluidos aquellos ya instrumentados por el agente New Relic Node.js. Para obtener más información, consulte [los tutoriales de instrumentación de Node.js de New Relic en GitHub](https://newrelic.github.io/node-newrelic/tutorial-Instrumentation-Basics.html).
      </Collapser>

      <Collapser
        id="newrelic_add_custom_attribute"
        title={<InlineCode>nuevarelic.addCustomAttribute()</InlineCode>}
      >
        Utilice este método para agregar un atributo de traza personalizado.
      </Collapser>

      <Collapser
        id="newrelic_add_custom_attributes"
        title={<InlineCode>nuevarelic.addCustomAttributes()</InlineCode>}
      >
        Utilice este método para agregar múltiples atributos de traza personalizados.
      </Collapser>
    </CollapserGroup>
  </Collapser>

  <Collapser
    id="node-support"
    title="Compatibilidad con la versión Node.js para v2"
  >
    La versión más antigua de Node.js compatible con el agente New Relic Node.js v2 es la 0.10. Node.js 0.8, que no se ha actualizado desde julio de 2014, no es compatible con la v2. Los clientes que ejecutan Node.js 0.8 tienen dos opciones:

    * Actualice a una versión compatible de Node.js y aproveche la nueva característica del agente New Relic Node.js v2.

    * Permanecer en el agente New Relic Node.js v1 sin la capacidad de usar la nueva característica que solo está disponible con versiones actualizadas del agente.

      [Node.js 0.10 tampoco recibe actualizaciones](https://github.com/nodejs/LTS/tree/2b4253#lts-schedule1), pero New Relic seguirá admitiendo esta versión de Node.js por el momento.

      <DNT>**Recommendation:**</DNT> Actualice a una versión más reciente de Node.js lo antes posible.
  </Collapser>

  <Collapser
    id="npm-versions"
    title="Soporte de versión npm a partir de v2"
  >
    El agente New Relic Node.js ahora requiere npm versión 2.0.0 o superior. Esta versión de npm viene con Node.js 0.10.44 o superior.

    Si está utilizando una versión anterior de Node.js 0.10, primero deberá instalar npm 2.0.0 o superior, o actualizar a una versión más reciente de Node. Para instalar npm versión 2:

    ```
    $ npm install --global npm@2
    ```
  </Collapser>

  <Collapser
    id="v2-feature-flags"
    title="Banderas de características a partir de v2"
  >
    A partir del agente New Relic Node.js v2:

    * `express_segments`: Esta característica ya no es configurable.
    * `cat`: Esta característica ahora está controlada por el valor de configuración `cross_application_tracer.enabled` .
  </Collapser>

  <Collapser
    id="framework-minimum"
    title="Versiones mínimas del framework a partir de v2"
  >
    A partir del agente New Relic Node.js v2:

    <table>
      <thead>
        <tr>
          <th style={{ width: "150px" }}>
            <DNT>
              **Module**
            </DNT>
          </th>

          <th style={{ width: "175px" }}>
            <DNT>
              **V2 minimum**
            </DNT>
          </th>

          <th style={{ width: "175px" }}>
            <DNT>
              **Minimum before v2**
            </DNT>
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            expresar
          </td>

          <td>
            4.6.0
          </td>

          <td>
            2.0.0
          </td>
        </tr>

        <tr>
          <td>
            mysql
          </td>

          <td>
            2.0.0
          </td>

          <td>
            0.9.0
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>
</CollapserGroup>
