---
title: Nombra tu aplicación Java
tags:
  - Agents
  - Java agent
  - Configuration
freshnessValidatedDate: never
translationType: machine
---

[El agente de Java de New Relic](/docs/agents/java-agent/getting-started/introduction-new-relic-java) le ofrece varias formas de cambiar el nombre de la aplicación que se informa y se muestra en APM. Este documento le brinda una descripción general de esas opciones de nombres.

Para obtener una descripción general de los nombres de aplicaciones <InlinePopover type="apm"/>(no específicos de Java), consulte [Asigne un nombre a su aplicación](/docs/agents/manage-apm-agents/app-naming/name-your-application).

## Establecer o cambiar el nombre de la aplicación [#naming-options]

APM diferencia las aplicaciones por el nombre con el que informan. La continuidad de los datos se interrumpe cuando cambia el nombre de la aplicación. Para cambiar el nombre de una aplicación sin interrumpir la continuidad de los datos, utilice la opción de cambio de alias UI .

Estas son las formas de cambiar el nombre de su aplicación Java:

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        Método de denominación
      </th>

      <th>
        Descripción
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        <DNT>**Recommended**</DNT>: Configurar `app_name` en `newrelic.yml`
      </td>

      <td>
        [Configure su archivo `newrelic.yml` ](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#cfg-app_name)para establecer el nombre de su aplicación. Esta es la opción recomendada y más utilizada:

        ```
        app_name: My Application
        ```
      </td>
    </tr>

    <tr>
      <td>
        Configurar `app_name` usando argumentos JVM
      </td>

      <td>
        [Establezca una propiedad del sistema con argumentos JVM](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#System_Properties) para establecer nombres de aplicaciones únicos para múltiples aplicaciones que reportan al mismo agente de Java:

        ```
        -Dnewrelic.config.app_name="My App"
        ```
      </td>
    </tr>

    <tr>
      <td>
        Establecer el nombre de la aplicación usando variables de entorno
      </td>

      <td>
        [Configure una variable de entorno](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#Environment_Variables) para configurar fácilmente los nombres de las aplicaciones durante el despliegue del contenedor, o para garantizar que el nombre de una aplicación permanezca igual a través de múltiples iteraciones de un archivo `newrelic.yml` :

        ```
        export NEW_RELIC_APP_NAME="My App"
        ```
      </td>
    </tr>

    <tr>
      <td>
        Nomenclatura automática de aplicaciones
      </td>

      <td>
        [Habilite la nomenclatura automática de aplicaciones](/docs/agents/java-agent/configuration/automatic-application-naming) en su archivo `newrelic.yml` si desea que la aplicación tenga un nombre según su contexto, filtro, servlet o atributo de solicitud:

        ```
        enable_auto_app_naming: true
        ```
      </td>
    </tr>

    <tr>
      <td>
        Cambiar alias a través de UI
      </td>

      <td>
        [Cambie el alias de una aplicación](/docs/agents/manage-apm-agents/app-naming/name-your-application#app-alias) para cambiar solo el nombre que se muestra en la UI. Esto no cambia el nombre con el que informa la aplicación.

        Esto no interrumpe la continuidad de los datos, a diferencia de todas las demás opciones.
      </td>
    </tr>
  </tbody>
</table>

<Callout variant="tip">
  Tenga en cuenta que algunos métodos [tienen prioridad sobre otros](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#config-options-precedence).
</Callout>

## Utilice varios nombres de aplicaciones [#multiple]

Puede utilizar varios nombres de aplicaciones para agregar datos de varias aplicaciones con el mismo nombre en APM (a veces denominado "acumular" sus datos). Para obtener más información sobre cómo funcionan varios nombres de aplicaciones, consulte [Usar varios nombres de aplicaciones](/docs/agents/manage-apm-agents/app-naming/use-multiple-names-app).

En Java, puedes configurar hasta tres nombres de aplicaciones. El nombre de la aplicación principal es el primero, mientras que el segundo y tercer nombre se utilizan para las categorías de agregación de datos más generales.

<CollapserGroup>
  <Collapser
    id="example-yml"
    title="Archivo de configuración de Java"
  >
    A continuación se muestra un ejemplo de configuración de varios nombres en el [archivo`newrelic.yml` ](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#cfg-app_name):

    ```
    app_name: My Application;My Application 2;My application 3
    ```
  </Collapser>

  <Collapser
    id="example-env"
    title="Variable de entorno java"
  >
    A continuación se muestra un ejemplo de configuración de varios nombres como [variable de entorno](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#Environment_Variables):

    ```
    export NEW_RELIC_APP_NAME="My Application;My Application 2;My application 3"
    ```
  </Collapser>

  <Collapser
    id="example-sysprop"
    title="Propiedades del sistema"
  >
    <Callout variant="important">
      Si configura varios nombres de aplicaciones usando las propiedades del sistema en la línea de comando de Java, recuerde citar el parámetro línea de comando debido a ; personaje.
    </Callout>

    A continuación se muestra un ejemplo de configuración de varios nombres como [propiedad del sistema](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#Environment_Variables):

    ```
    -Dnewrelic.config.app_name="My Application;My Application 2;My application 3"
    ```
  </Collapser>
</CollapserGroup>
