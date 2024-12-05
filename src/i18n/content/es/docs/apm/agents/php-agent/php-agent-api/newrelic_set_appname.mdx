---
title: newrelic_set_appname (API del agente PHP)
type: apiDoc
shortDescription: 'Establece el nombre de la aplicación New Relic, que controla la acumulación de datos.'
tags:
  - Agents
  - PHP agent
  - PHP agent API
metaDescription: 'New Relic PHP agent API call to set the New Relic app name, if you can''t edit your config file.'
freshnessValidatedDate: never
translationType: machine
---

## Sintaxis

```php
newrelic_set_appname(string $name)
newrelic_set_appname(string $name, string $license[, bool $xmit])
```

Establece el nombre de la aplicación New Relic, que controla la acumulación de datos.

## Requisitos

Versión del agente [3.1.5.111](/docs/release-notes/agent-release-notes/php-release-notes/php-agent-315111) o superior.

## Descripción

Establezca el [nombre de la aplicación](/docs/agents/manage-apm-agents/app-naming/name-your-application) New Relic, que la UI de New Relic utiliza para conectar sus datos a la aplicación correcta.

El método recomendado y preferido para configurar el nombre de la aplicación New Relic es utilizar [la configuración INI global o por directorio](/docs/agents/php-agent/configuration/php-agent-configuration#inivar-appname) para asociar su aplicación al nombre deseado al inicio de la ejecución.

Si no puede editar el archivo de configuración de su agente (por ejemplo, muchos entornos de alojamiento compartido no le permiten editar archivos de configuración), se puede usar la llamada API [newrelic_set_appname](/docs/agents/php-agent/php-agent-api/newrelic_set_appname) para configurar el nombre de la aplicación, <InlinePopover type="licenseKey"/>(opcional, si usa varias cuentas). ) y una marca de verdadero/falso (opcional, para determinar si se deben conservar o descartar los datos registrados previamente). Para garantizar la máxima continuidad de la traza de APM, llame a esto lo antes posible. Esta llamada API descartará todos los datos de la transacción actual e iniciará una nueva transacción después de que se haya vuelto a conectar con el nombre de la aplicación proporcionada.

Para otras opciones de nombres de aplicaciones, consulte [Nombre de su aplicación PHP](/docs/agents/php-agent/configuration/name-your-php-application). Cuando sea posible, se recomiendan soluciones basadas en INI.

### Comportamiento de llamadas y ubicación

Le recomendamos encarecidamente que llame a esta función lo antes posible después de comenzar a monitorear su aplicación y en una stack de llamadas lo más superficial posible. Las aplicaciones son entidades discretas en APM, y cuando cambia el nombre de una aplicación, no hay nada que vincule los datos de los nombres de las dos aplicaciones. El uso de la función `newrelic_set_appname` puede provocar una discontinuidad en su traza de la transacción. En otras palabras, las nuevas transacciones se informan con el nombre de la nueva aplicación y no hay nada que las vincule con los datos conectados al nombre de la aplicación anterior.

Este método debe llamarse una vez, ya que cada llamada a la API (incluso con el mismo nombre de aplicación) hará que los datos de la transacción actual se descarten y provocará una mayor discontinuidad en la traza de la transacción.

## Parámetros

<table>
  <thead>
    <tr>
      <th width="25%">
        Parámetro
      </th>

      <th>
        Descripción
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td colSpan={2}>
        ```php
        function newrelic_set_appname(string $name) : bool
        ```
      </td>
    </tr>

    <tr>
      <td>
        `$name`

        _cadena_
      </td>

      <td>
        Requerido. Los nombres de la aplicación métrica deben informarse en la interfaz de usuario de New Relic. Utiliza el mismo formato que [`newrelic.appname`](/docs/agents/php-agent/configuration/php-agent-newrelicini-settings#inivar-appname) y puede establecer varios nombres de aplicaciones separándolos con un punto y coma `;`.
      </td>
    </tr>

    <tr>
      <td colSpan={2}>
        ```php
        function newrelic_set_appname(string $name, string $license, bool $xmit) : bool
        ```
      </td>
    </tr>

    <tr>
      <td>
        `$name`

        _cadena_
      </td>

      <td>
        Requerido. Los nombres de la aplicación métrica deben informarse en la interfaz de usuario de New Relic. Utiliza el mismo formato que [`newrelic.appname`](/docs/agents/php-agent/configuration/php-agent-newrelicini-settings#inivar-appname) y puede establecer varios nombres de aplicaciones separándolos con un punto y coma `;`.
      </td>
    </tr>

    <tr>
      <td>
        `$license`

        _cadena_
      </td>

      <td>
        Requerido (puede ser una cadena vacía). Especifique una clave de licencia diferente para informar métrica a una cuenta New Relic diferente. Si se establece en una cadena vacía, el valor predeterminado es la clave de licencia en el archivo `newrelic.ini` del agente.
      </td>
    </tr>

    <tr>
      <td>
        `$xmit`

        _booleano_
      </td>

      <td>
        Opcional. El valor predeterminado es `false`.

        Si se omite `false` , el agente descarta la transacción actual y se pierden todos los datos capturados hasta esta llamada.

        Si `true`, el agente envía los datos que se recopilaron justo antes de ejecutar esta llamada. <DNT>**The data is associated with the old app name**</DNT>. Esto tiene un impacto muy leve en el rendimiento, ya que el agente tarda unos milisegundos en volcar sus datos.
      </td>
    </tr>
  </tbody>
</table>

## Valores de retorno

Devuelve `true` si el nombre de la aplicación se cambió correctamente, o `false` en caso contrario.

## Ejemplos

### Establecer un único nombre de aplicación [#only-app-name]

```php
function example() {
    if (extension_loaded('newrelic')) { // Ensure PHP agent is available
        newrelic_set_appname("App1");
    }
    ...
}
```

### Establecer dos nombres de aplicaciones [#two-app-names]

Este ejemplo establece [varios nombres de aplicaciones](/docs/agents/manage-apm-agents/app-naming/use-multiple-names-app):

```php
function example() {
    if (extension_loaded('newrelic')) { // Ensure PHP agent is available
        newrelic_set_appname("App1;App2");
    }
    ...
}
```

### Establecer el nombre de la aplicación y la clave de licencia [#app-name-license-key]

```php
function example() {
    if (extension_loaded('newrelic')) { // Ensure PHP agent is available
        newrelic_set_appname("App1", "01234567890abcde01234567890abcde01234567890");
    }
    ...
}
```

### Establecer el nombre de la aplicación y conservar los datos anteriores [#app-name-and-data]

Este ejemplo establece el nombre de una aplicación y mantiene los datos existentes, pero no cambia el <InlinePopover type="licenseKey"/>:

```php
function example() {
    if (extension_loaded('newrelic')) { // Ensure PHP agent is available
        newrelic_set_appname("App1", "", true);
    }
    ...
}
```

### Configure el nombre de la aplicación y la clave de licencia y conserve los datos anteriores [#app-name-and-data]

Este ejemplo establece el nombre de la aplicación y la clave de licencia y mantiene los datos existentes:

```php
function example() {
    if (extension_loaded('newrelic')) { // Ensure PHP agent is available
        newrelic_set_appname("App1", "01234567890abcde01234567890abcde01234567890", true);
    }
    ...
}
```
