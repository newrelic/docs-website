---
title: 'Editor de instrumentación personalizada: instrumento desde UI'
tags:
  - Agents
  - Java agent
  - Custom instrumentation
metaDescription: 'To instrument methods and frameworks in your Java app directly from the APM UI, use New Relic''s custom instrumentation editor.'
freshnessValidatedDate: never
translationType: machine
---

El editor de instrumentación personalizada de New Relic permite al usuario de la aplicación Java implementar instrumentación personalizada a través de la interfaz de usuario de New Relic. El editor es la opción preferida cuando no puedes modificar el código de tu aplicación y no tienes tantos métodos para tocar. Consulte [Instrumentación personalizada de Java](/docs/agents/java-agent/custom-instrumentation/java-custom-instrumentation) para conocer otras opciones de instrumentación y los motivos para utilizar cada una.

Para utilizar el editor de instrumentación personalizado: Vaya a <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & services > (select a Java app) > Settings > Instrumentation**</DNT>. Utilice el editor de instrumentación personalizada para:

* Instrumento un framework sin soporte.
* Obtenga información adicional valiosa con métodos no instrumentados.
* [Ignorar transacción particular](/docs/agents/java-agent/instrumentation/blocking-instrumentation-java).

## Requisitos

Para utilizar el editor de instrumentación personalizada es necesario cumplir con los siguientes requisitos:

<table>
  <thead>
    <tr>
      <th width={200}>
        <DNT>
          **Requirement**
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
        Agente
      </td>

      <td>
        Agente de Java versión 3.17.0 o superior
      </td>
    </tr>

    <tr>
      <td>
        Seguridad
      </td>

      <td>
        El usuario del [modo de alta seguridad](/docs/accounts-partnerships/accounts/security/high-security) debe [exportar su instrumentación](#manual-deploy) e importarla manualmente a su servidor de aplicaciones.
      </td>
    </tr>
  </tbody>
</table>

## Definir instrumentación personalizada [#defining]

Para definir instrumentación personalizada desde la interfaz de usuario de New Relic, utilice una sesión de creación de perfiles de subprocesos para recopilar un rastreo detallado de la pila de cada subproceso en su aplicación. Si es posible, pruebe su instrumentación personalizada en un entorno previo de producción antes de cambiar las reglas de instrumentación en su aplicación de producción.

En cualquiera de los entornos, utilice el editor de instrumentación personalizada para definir los métodos que desea instrumentar y aplicar sus cambios:

1. Crear un nuevo [hilo de sesión generador de perfiles](/docs/apm/applications-menu/events/thread-profiler-dashboard#starting). Para asegurarse de recopilar suficiente conjunto de datos, la duración de la sesión debe ser de al menos dos minutos.

2. Vaya a <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & services > (select an app) > Settings > Instrumentation**</DNT>. Desplácese hasta la parte inferior de la página hasta que vea la lista <DNT>**Recently collected thread profiles**</DNT> y luego seleccione el perfil del hilo más reciente.

3. Amplíe los métodos individuales para localizar instrumentos no instrumentados. <Icon style={{color: '#307099'}} name="fe-circle"/> métodos.

4. Para definir reglas de instrumentación para nodos particulares, seleccione <DNT>**Instrument**</DNT> o <DNT>**Ignore**</DNT> y [personalice las reglas si es necesario](#options).

5. Para guardar su configuración, seleccione <DNT>**Confirm instrumentation changes**</DNT>.

6. desplegar tus cambios desde la [página<DNT>**Instrumentation**</DNT> ](#dashboard):

   * Para desplegar sus cambios automáticamente, seleccione

     <DNT>
       **Deploy instrumentation changes**
     </DNT>

     .

   * Para implementar sus cambios manualmente, seleccione

     <DNT>
       **Export XML**
     </DNT>

     y consulte [cómo exportar su instrumentación](#manual-deploy).

<Callout variant="caution">
  Evite el exceso de instrumentación siempre que sea posible. Con cada método adicional que se instrumente, el agente utilizará más recursos y su aplicación incurrirá en más gastos generales. Además, desplegar su instrumentación provocará un breve período de mayores gastos generales. Esto puede ralentizar notablemente las solicitudes de aplicaciones durante varios segundos.
</Callout>

Si aplicó sus cambios desde la UI, el agente comenzará a instrumentar sus métodos dentro de unos pocos [ciclos de recolección](/docs/apm/new-relic-apm/getting-started/glossary#harvest-cycle) (normalmente unos minutos).

## Instrumentación manual mediante el editor. [#manual-instrumentation]

También puede crear puntos de instrumentación directamente en el editor sin utilizar un perfil de hilo:

1. Desde el editor de instrumentación personalizada, seleccione

   <DNT>
     **Add manual instrumentation**
   </DNT>

   para ingresar manualmente una clase y método para instrumentarlos o ignorarlos.

2. Siga la [instrumentación personalizada mediante reglas XML al definir sus puntos de instrumentación](/docs/agents/java-agent/custom-instrumentation/java-custom-instrumentation-xml-examples#file-format).

3. Despliega tus cambios desde el editor de instrumentación.

El uso de este método para agregar instrumentación expone una funcionalidad adicional más allá de lo que está disponible en un perfil de subproceso. Además de hacer coincidir métodos por firma, también puede instrumentar métodos por tipo de retorno, métodos en interfaces y por anotación Java.

Estos tipos de instrumentación más complejos se pueden crear y eliminar en el editor, pero no editarse.

<Callout variant="important">
  Si un método está marcado como `Instrumentation not allowed`, siga [los procedimientos de resolución de problemas de New Relic para instrumentación personalizada](/docs/agents/java-agent/custom-instrumentation/troubleshooting-java-custom-instrumentation).
</Callout>

## Desplegar cambios manualmente [#manual-deploy]

También puede utilizar el editor de instrumentación personalizada para crear un conjunto de instrumentación personalizada, luego exportar un archivo de instrumentación e importarlo manualmente a su servidor de aplicaciones. Esto es necesario para el usuario del [modo de alta seguridad](/docs/accounts-partnerships/accounts/security/high-security).

Para exportar su instrumentación, [defina instrumentación personalizada a través de la UI](#defining). Luego seleccione <DNT>**Export xml**</DNT> en la página <DNT>**Instrumentation**</DNT> e [importe el archivo en su servidor de aplicaciones](/docs/agents/java-agent/custom-instrumentation/java-instrumentation-xml#file-location).

## Funciones de página [#dashboard]

La página <DNT>**Instrumentation**</DNT> admite la siguiente característica:

<table>
  <thead>
    <tr>
      <th width={200}>
        Si quieres...
      </th>

      <th>
        Hacer esto...
      </th>
    </tr>
  </thead>

  <tbody>
    <tr id="disable">
      <td>
        Pausar o desactivar la instrumentación personalizada
      </td>

      <td>
        * Seleccionar

          <Icon
            style={{color: '#55555A'}}
            name="fe-slash"
          />

          <DNT>
            **Disable instrumentation**
          </DNT>

          para inhabilitar temporalmente toda la instrumentación personalizada definida por UI .

        * Seleccione

          <DNT>
            **Enable instrumentation**
          </DNT>

          para volver a habilitar la configuración de instrumentación.
      </td>
    </tr>

    <tr id="import">
      <td>
        Importar instrumentación existente
      </td>

      <td>
        * Puede importar un [archivo xml de instrumentación personalizada](/docs/agents/java-agent/custom-instrumentation/java-instrumentation-xml) existente seleccionando

          <DNT>
            **Import xml**
          </DNT>

          .

        * También puedes

          <DNT>
            **Export xml**
          </DNT>

          si [no quieres desplegar tus cambios automáticamente](#manual-deploy).
      </td>
    </tr>

    <tr id="edit-delete">
      <td>
        Editar o eliminar puntos de instrumentación
      </td>

      <td>
        No puede editar [la instrumentación manual](#manual-instrumentation), solo eliminarla.

        * Seleccione

          <DNT>
            **Remove**
          </DNT>

          para dejar de instrumentar un método en particular.

        * Seleccione

          <DNT>
            **Edit**
          </DNT>

          para cambiar las reglas de instrumentación.
      </td>
    </tr>

    <tr id="history">
      <td>
        Ver historial de instrumentación
      </td>

      <td>
        * Puede ver cada iteración anterior de su instrumentación personalizada desde la pestaña

          <DNT>
            **Instrumentation history**
          </DNT>

          , incluido quién implementa los cambios y cuándo.

        * Puede restaurar una versión anterior seleccionando

          <DNT>
            **export**
          </DNT>

          para descargar una copia del archivo personalizado de instrumentación y luego [importarlo](#import) al editor de instrumentación.
      </td>
    </tr>
  </tbody>
</table>

## Opciones de instrumentación [#options]

Puedes definir las siguientes opciones con el editor de instrumentación personalizada:

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        <DNT>
          **Instrumentation options**
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
        Métodos de instrumentos
      </td>

      <td>
        Comience a instrumentar el método seleccionado. Los métodos instrumentados serán visibles en la UI de New Relic. <DNT>**Instrument**</DNT> admite las siguientes opciones secundarias:

        * <DNT>
            **Name the transaction (transaction name)**
          </DNT>

          : Anula el nombre de transacción estándar, definido por las [reglas de nomenclatura automática](/docs/agents/java-agent/instrumentation/naming-web-transactions). En su lugar, la UI utilizará el nombre indicado.

        * <DNT>
            **Start the transaction when this method executes**
          </DNT>

          : En lugar de incluir métricas de esta métrica dentro de su transacción principal, cree una nueva transacción para este método. [El comportamiento del agente](#start-results) con esta opción depende de si existe una transacción preexistente en el hilo.
      </td>
    </tr>

    <tr>
      <td>
        Informe atributo personalizado
      </td>

      <td>
        El parámetro del método se puede capturar como atributo en una transacción. New Relic informa estos atributos a la traza de la transacción, errores de traza y `Transaction` evento.

        Por motivos de seguridad, la captura de atributos personalizados mediante el Editor de instrumentación personalizada es <DNT>**disabled**</DNT> de forma predeterminada y no se puede habilitar mientras se utiliza [el modo de alta seguridad](/docs/agents/java-agent/getting-started/apm-agent-security-java). Si desea reportar atributo personalizado usando el editor de instrumentación personalizada y no desea que el agente de Java esté en modo de alta seguridad, desactive [el modo de alta seguridad](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#cfg-enable_high_security) y luego agregue el siguiente texto en el bloque `common:` de su <DNT>**newrelic.yml**</DNT>:

        ```yml
        reinstrument:
            attributes_enabled: true
        ```
      </td>
    </tr>

    <tr>
      <td>
        Ignorar transacción
      </td>

      <td>
        [Ignore este método por completo](/docs/agents/java-agent/instrumentation/blocking-instrumentation-java). El agente no informará métricas de este método y el método no contribuirá a los cálculos de Apdex.
      </td>
    </tr>
  </tbody>
</table>

## Resultados con opción "iniciar" [#start-results]

Si selecciona <DNT>**Instrument methods > Start the transaction when this method executes**</DNT>, el comportamiento del agente depende de si hay una transacción preexistente en el hilo.

Cuando la clase o método está instrumentado:

<table>
  <thead>
    <tr>
      <th colSpan={2}>
        ¿Está marcada la bandera "<DNT>**Start the transaction"**</DNT> ?
      </th>
    </tr>

    <tr>
      <th>
        <DNT>
          **Yes**
        </DNT>
      </th>

      <th>
        <DNT>
          **No**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Si una transacción preexistente <DNT>**is**</DNT> en ese hilo y el indicador <DNT>**Start the transaction**</DNT> <DNT>**is**</DNT> están marcados:

        1. El agente ignora el indicador

           <DNT>
             **Start the transaction**
           </DNT>

           .

        2. El agente incluye la clase/método en la transacción preexistente.
      </td>

      <td>
        Si una transacción preexistente <DNT>**is**</DNT> en ese subproceso y el indicador <DNT>**Start the transaction**</DNT> **no** está marcado, el agente incluye la clase/método en la transacción preexistente.
      </td>
    </tr>

    <tr>
      <td>
        Si una transacción **no** está en ese hilo y la <DNT>**Start the transaction**</DNT> bandera <DNT>**is**</DNT> está marcada:

        1. El agente descubre que no hay ninguna transacción actual.
        2. El agente crea una nueva transacción comenzando con la clase/método que usted ha instrumentado.
      </td>

      <td>
        Si una transacción **no** está en ese hilo y el indicador <DNT>**Start the transaction**</DNT> **no** está marcado:

        1. El agente busca una transacción en ese hilo y no encuentra ninguna.
        2. La métrica se elimina.
      </td>
    </tr>
  </tbody>
</table>
