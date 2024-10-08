---
title: 'Ofuscación de logs: hash o enmascarar datos sensibles en tu log'
metaDescription: How to hash or mask sensitive data in logs you send to New Relic with our log obfuscation UI or API.
freshnessValidatedDate: never
translationType: machine
---

Con log de regla de ofuscación, puedes evitar que ciertos tipos de información se guarden en New Relic.

## Requisitos [#requirements]

Nuestra característica de ofuscación de registros está disponible como parte de nuestra [opción Data Plus](/docs/accounts/accounts-billing/new-relic-one-pricing-billing/data-ingest-billing#data-prices).

## Qué es ofuscación de logs? [#overview]

Nuestro [servicio<InlinePopover type="logs"/>](/docs/logs/get-started/get-started-log-management) enmascara automáticamente los patrones numéricos que identificamos como elementos probablemente confidenciales, como números de tarjetas de crédito o de Seguro Social.

Si necesita ofuscación adicional, una opción es ajustar la configuración del reenviador de registros que utiliza (por ejemplo, nuestro agente de infraestructura). Pero una opción más sencilla es utilizar nuestra característica de ofuscación de registros, disponible con [Data Plus](/docs/accounts/accounts-billing/new-relic-one-pricing-billing/data-ingest-billing#data-prices). Esta característica le permite configurar la regla de ofuscación log directamente desde la UI de administración de registros, o mediante nuestra API NerdGraph, sin una configuración manual prolongada. Definirá expresiones regulares que coincidan con su información confidencial y luego creará reglas para ofuscar esos datos. Puede elegir entre tener información confidencial enmascarada o hash.

## Definiciones [#definitions]

Aquí hay algunos términos importantes:

* <DNT>
    **Obfuscation rules**
  </DNT>

  definir a qué log aplicar acciones de ofuscación.

* <DNT>
    **Obfuscation rule actions**
  </DNT>

  define qué atributo mirar, qué texto ofuscar y cómo ofuscar (ya sea mediante enmascaramiento o hash).

* <DNT>
    **Obfuscation expressions**
  </DNT>

  se denominan expresiones regulares que identifican qué texto ofuscar.

* <DNT>
    **Masking**
  </DNT>

  elimina completamente la información, reemplazándola con `X` caracteres. No puede buscar valores específicos una vez hecho esto.

* <DNT>
    **Hashing**
  </DNT>

  oculta información. Puede utilizar la herramienta de hash para obtener el hash de un valor confidencial y luego buscar el registro que contenga ese hash.

## Cómo funciona la ofuscación [#overview]

Los objetos JSON que se muestran en el siguiente ejemplo son simplificaciones de la carga utilizada por nuestra API NerdGraph. Esto le ayudará a correlacionar mejor las diferentes operaciones de API con sus contrapartes equivalentes de UI.

### Ejemplo: registro log antes de la ofuscación [#example-before]

Imagine que tiene el siguiente registro log :

```json
{
  "message": "The credit card number 4321-5678-9876-2345 belongs to user user@email.com (born on 01/02/2003) with SSN 123-12-1234",
  "creditCardNumber": "4321-5678-9876-2345",
  "ssn": "123-12-1234",
  "department": "sales",
  "serviceName": "loginService"
}
```

Este log contiene varios datos confidenciales. Idealmente, le gustaría que su log terminara luciendo así:

```json
{
  "message": "The credit card number 9aa9bc1528859aee1b1df75795f1ebd54beb2f0d26c8a1d4580a71a07189cdd5 belongs to user user@email.com (born on XXXXXXXXXX) with SSN 30e6897f76dc102e32ee1d781c43417d259e586eac15c963d75ab8b5187769da",
  "creditCardNumber": "9aa9bc1528859aee1b1df75795f1ebd54beb2f0d26c8a1d4580a71a07189cdd5",
  "ssn": "30e6897f76dc102e32ee1d781c43417d259e586eac15c963d75ab8b5187769da",
  "department": "sales",
  "serviceName": "loginService"
}
```

### Ejemplo: proceso básico [#example-process]

Este es el proceso básico que usaría para ofuscar los datos confidenciales en este ejemplo.

<CollapserGroup>
  <Collapser
    id="example-actions"
    title="1. Qué acciones aplicar"
  >
    Decides que quieres aplicar las siguientes acciones de ofuscación a todo el log proveniente de ese servicio:

    * `HASH` el número de tarjeta de crédito presente en el atributo `message` y `creditCardNumber` .
    * `MASK` la fecha de nacimiento presente en el atributo `message` .
    * `HASH` el número de Seguro Social presente en el atributo `message` y `ssn` .
  </Collapser>

  <Collapser
    id="example-expressions"
    title="2. Cómo las expresiones capturarán datos confidenciales"
  >
    Lo primero que debes hacer es definir alguna expresión de ofuscación que te permita capturar esta información sensible.

    <Callout variant="tip">
      Los siguientes ejemplos muestran expresiones regulares que usaría directamente en la UI. Más adelante en este documento, analizamos cómo se pueden utilizar versiones de escape de estas expresiones regulares para [NerdGraph](#expressions-create).
    </Callout>

    <table>
      <thead>
        <tr>
          <th style={{ width: "200px" }}>
            Expresión de ofuscación
          </th>

          <th>
            Definición
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            Número de Tarjeta de Crédito
          </td>

          <td>
            Necesitamos capturar 4 grupos de 4 dígitos separados por guiones:

            ```json
            {
              "name": "Credit Card Number",
              "regex": "((?:(?:4\d{3})|(?:5[1-5]\d{2})|6(?:011|5[0-9]{2}))(?:-?|\040?)(?:\d{4}(?:-?|\040?)){3}|(?:3[4,7]\d{2})(?:-?|\040?)\d{6}(?:-?|\040?)\d{5})"
            }
            ```
          </td>
        </tr>

        <tr>
          <td>
            Número de seguro social
          </td>

          <td>
            Necesitamos capturar 3 grupos de 3, 2 y 4 dígitos separados por guiones:

            ```json
            {
              "name": "Social Security Number",
              "regex": "(\d{3}-\d{2}-\d{4})"
            }
            ```
          </td>
        </tr>

        <tr>
          <td>
            Fecha de nacimiento (`loginService` específica)
          </td>

          <td>
            En este ejemplo, la fecha de nacimiento es parte del servicio de inicio de sesión. Definimos la parte a ofuscar según la información de fecha en las palabras circundantes `"(born on 01/02/2003)"`:

            ```json
            {
              "name": "Born date - loginService specific",
              "regex": "born on (.*)\)"
            }
            ```
          </td>
        </tr>
      </tbody>
    </table>

    Cada expresión de ofuscación define cómo capturar información confidencial de una cadena (usando una expresión regular) y la asocia con algún nombre descriptivo para que pueda identificarla fácilmente más adelante.

    La expresión de ofuscación _puede_ ser reutilizable; son totalmente independientes de cómo se nombra el atributo log que contiene los datos confidenciales. Por ejemplo, la expresión del Seguro Social definida anteriormente podría aplicarse a un atributo log denominado `ssn`, `socialSecurityNumber` o `socSecNum`.

    También puede crear expresiones de ofuscación no reutilizables, como `Born date (loginService specific)`, que estén estrechamente acopladas al formato del atributo log . Por ejemplo, podrías usar lo que venga después de `born on` y `before`.

    <Callout
      variant="caution"
      title="No se admiten grupos de captura de expresiones regulares anidados"
    >
      La principal responsabilidad de esta característica es reemplazar datos sensibles con el hash o enmascarar de una manera fácil y eficaz. Si desea o necesita agrupar diferentes coincidencias dentro de un grupo de captura, recuerde utilizar la sintaxis de grupo sin captura `(?:{EXPRESSION})` para evitar crear grupos de captura anidados. Por ejemplo, evite `(([A-Z]{12})|([a-z]{6}))` y en su lugar utilice `((?:[A-Z]{12})|((?:[a-z]{6}))`.
    </Callout>
  </Collapser>

  <Collapser
    id="example-rules"
    title="3. ¿Qué registro utilizará su regla?"
  >
    Ahora que hemos definido cómo capturar nuestros datos sensibles, necesitamos especificar qué registros deben ofuscarse (los del Servicio de inicio de sesión) y cómo (con las acciones de ofuscación que definimos). Para lograr esto, definimos una regla de ofuscación.

    ```json
    {
      "name": "Obfuscate Login Service Logs",
      "filter": "serviceName = 'loginService' AND department = 'sales'",
      "actions": [
        {
          "attributes": ["message", "creditCardNumber"],
          "expression": {"name": "Credit Card Number"},
          "method": "HASH_SHA256"
        },
        {
          "attributes": ["message"],
          "expression": {"name": "Born date - loginService specific"},
          "method": "MASK"
        },
        {
          "attributes": ["message", "ssn"],
          "expression": {"name": "Social Security Number"},
          "method": "HASH_SHA256"
        }
      ]
    }
    ```

    Esta regla contiene tres componentes principales:

    <table>
      <thead>
        <tr>
          <th style={{ width: "200px" }}>
            Componente de regla de ofuscación
          </th>

          <th>
            Descripción
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            Nombre
          </td>

          <td>
            El nombre ayuda a identificar fácilmente lo que hace la regla. En este ejemplo, esta regla define cómo ofuscar los diferentes atributos del registro provenientes del Servicio de inicio de sesión.
          </td>
        </tr>

        <tr>
          <td>
            Filtrar
          </td>

          <td>
            El filtro utiliza el formato NRQL para indicarle a nuestro sistema cómo identificar el registro de destino proveniente del servicio de inicio de sesión. Este ejemplo consulta para el registro donde `serviceName = loginService` y `department = sales`.
          </td>
        </tr>

        <tr>
          <td>
            Comportamiento
          </td>

          <td>
            Finalmente, esta regla define el conjunto de acciones de ofuscación a aplicar al registro que coincide con el filtro. Cada acción define:

            * ¿Cuál expresión de ofuscación creada previamente se utilizará para extraer la información sensible de cada conjunto de atributos?

            * Qué método de ofuscación (`HASH_SHA256` o `MASK`) se aplicará para ofuscar estos datos

              Tenga en cuenta que al definir la regla de ofuscación a través de NerdGraph, deberá especificar el `id` de la expresión de ofuscación en lugar de sus nombres. Para hacer más legible el ejemplo anterior, utilizamos la expresión de ofuscación nombres.
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>

  <Collapser
    id="example-more"
    title="4. Reutilizar expresiones en otras reglas"
  >
    Como ejemplo final, imagine que también necesitábamos ofuscar el registro proveniente de otro servicio llamado "Servicio de pago" que tiene un atributo `serviceName = checkoutService` así como un atributo `ccn` que contiene información de tarjeta de crédito:

    ```json
    {
      "message": "Order completed",
      "ccn": "4321-5678-9876-2345",
      "department": "sales",
      "serviceName": "checkoutService"
    }
    ```

    Para ofuscar el registro de este servicio, solo tendríamos que definir otra regla de ofuscación dirigida a estos registros específicos, y simplemente reutilizaríamos la `Credit card number` expresión de ofuscación creada previamente:

    ```json
    {
      "name": "Obfuscate Checkout Service Logs",
      "filter": "serviceName = 'checkoutService' AND department = 'sales'",
      "actions": [
        {
          "attributes": ["ccn"],
          "expression": {"name": "Credit Card Number"},
          "method": "HASH_SHA256"
        }
      ]
    }
    ```
  </Collapser>
</CollapserGroup>

## Lista de verificación: pasos para ofuscar el registro [#checklist]

Para ofuscar su registro:

1. Estudie la forma de su registro identificando patrones de datos confidenciales que aparecen en ellos. Por ejemplo:

   * ¿Todo su registro contiene información confidencial? ¿O puede ser más específico (solo el registro del servicio A o la región B)?
   * ¿Qué información sensible contienen: números de tarjetas de crédito, números de licencia de conducir, documentos de identidad, datos biométricos, otros valores?

2. Cree [expresiones](#expressions) de ofuscación para identificar cómo extraer datos confidenciales.

3. Definir [reglas](#rules) de ofuscación para cada conjunto de logs:

   * Defina cómo los capturará usando NRQL.
   * Defina qué acciones de ofuscación se deben aplicar a cada uno de ellos. Pregúntese: ¿Tendré que consultar mi registro utilizando esta información confidencial más adelante (considere usar `HASH`), o tendré que eliminar esta información por completo de mi registro (considere usar `MASK`)?

<Callout variant="tip">
  La UI <DNT>**Logs obfuscation**</DNT> incluye un <DNT>**Hashing tool**</DNT> para que pueda encontrar un hash de un valor conocido y copiarlo para usarlo con otras expresiones y reglas.
</Callout>

## Límites de CPU [#cpu-limits]

La ofuscación tiene límites de CPU por minuto. Si una cuenta alcanza estos límites de recursos, el registro no se ocultará como se esperaba. Para verificar los límites de su CPU, vaya a [la página <DNT>**Limits**</DNT> de su sistema](/docs/data-apis/manage-data/view-system-limits/#limits-ui) en la UI <DNT>**Data management**</DNT>.

Si excede los límites de ofuscación por minuto de CPU y el registro no se puede ofuscar ni aplicar hash, el atributo al que se aplicó la regla de ofuscación será <DNT>**dropped**</DNT> y se reemplazará con un texto que indique por qué se eliminó el atributo. Por ejemplo, si se aplica la regla de ofuscación al campo `message` y se alcanza el límite de CPU por minuto, el log resultante se verá así:

```json
{
  ...
  "message": "<OBFUSCATION> The account is over its obfuscation per-minute limit, attribute dropped",
  ...
}
```

Esto es para evitar que la PII u otros datos confidenciales se ingieran sin darse cuenta.

Además, se registrará el siguiente \`NrIntegrationError' en la cuenta:

```json
{
  "category": "RateLimit",
  "level": "error",
  "limitName": "Log API obfuscation per account per minute",
  "message": "You’ve exceeded our limit of per-account obfuscation time per-minute for the Log ingestion pipeline. Please reduce your usage or contact New Relic support.",
  "name": "ObfuscationTimeLimitReached",
  "newRelicFeature": "Logs",
  "rateLimitType": "ObfuscationTimePerMinute",
  "timestamp": 1678819264283
}
```

Para evaluar qué tan bien está funcionando su regla de ofuscación y ver cuáles se están saltando, vaya a <DNT>**Logs Obfuscation > Health**</DNT>. Las reglas de ofuscación consumen mucha CPU, por lo que estos gráficos pueden ayudarle a decidir qué reglas se ven más afectadas por las limitaciones de recursos.

## Expresión de ofuscación [#expressions]

Puede crear, leer, actualizar o eliminar expresión de ofuscación utilizando la New Relic UI o utilizando NerdGraph, nuestro Explorador GraphQL.

<img
  title="Logs obfuscation expressions in UI"
  alt="Screenshot of Logs obfuscation expressions UI"
  src="/images/logs_screenshot-crop_log-obfuscation-expression.webp"
/>

<figcaption>
  <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Logs > Obfuscation**</DNT>: Primero crea una o más expresiones de ofuscación, luego crea tu regla de ofuscación.
</figcaption>

<CollapserGroup>
  <Collapser
    id="expressions-create"
    title="Crear una expresión de ofuscación"
  >
    Utilice cualquiera de estas opciones para crear una expresión de ofuscación:

    <DNT>
      **Using the logs UI:**
    </DNT>

    1. Vaya a <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Logs**</DNT> y, en el panel de navegación izquierdo, seleccione <DNT>**Obfuscation**</DNT>.

    2. Haga clic en <DNT>**Create regex**</DNT>.

    3. Ingrese un nombre para su nueva regla de ofuscación, así como una expresión regular que coincida con los datos confidenciales que desea capturar. Utilice [la sintaxis RE2](https://github.com/google/re2/wiki/Syntax).

       El siguiente ejemplo muestra una expresión de ofuscación básica que coincidirá con números de tarjetas de crédito:

       <img
         title="Create an obfuscation expression using the logs UI"
         alt="Create an obfuscation expression using the logs UI"
         src="/images/logs_screenshot-crop_obfuscation-create-expression.webp"
       />

       <DNT>
         **Using NerdGraph:**
       </DNT>

       Utilice la mutación `logConfigurationsCreateObfuscationExpression` en `logConfigurations`. Consulte el ejemplo completo en GraphiQL, así como la documentación relacionada en [<DNT>**api.newrelic.com/graphiql**</DNT>](https://api.newrelic.com/graphiql#query=mutation%20%7B%0A%20%20logConfigurationsCreateObfuscationExpression%28accountId%3A%201234%2C%20expression%3A%20%7Bname%3A%20%22Credit%20Card%20Number%22%2C%20regex%3A%20%22%28%5C%5Cd%7B4%7D-%5C%5Cd%7B4%7D-%5C%5Cd%7B4%7D-%5C%5Cd%7B4%7D%29%22%2C%20description%3A%20%22Reusable%20expression%20to%20capture%20credit%20card%20numbers%22%7D%29%20%7B%0A%20%20%20%20id%0A%20%20%20%20name%0A%20%20%20%20regex%0A%20%20%20%20description%0A%20%20%20%20createdAt%0A%20%20%20%20createdBy%20%7B%0A%20%20%20%20%20%20name%0A%20%20%20%20%20%20email%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A).

       <Callout variant="important">
         Debes escapar de las expresiones regulares cuando las uses en NerdGraph. Por ejemplo: `((?:(?:4\\d{3})|(?:5[1-5]\\d{2})|6(?:011|5[0-9]{2}))(?:-?|\\040?)(?:\\d{4}(?:-?|\\040?)){3}|(?:3[4,7]\\d{2})(?:-?|\\040?)\\d{6}(?:-?|\\040?)\\d{5})`
       </Callout>
  </Collapser>

  <Collapser
    id="expressions-read"
    title="Leer una expresión de ofuscación"
  >
    Utilice cualquiera de estas opciones para consultar una expresión de ofuscación:

    <DNT>
      **Using the logs UI:**
    </DNT>

    1. Vaya a

       <DNT>
         **[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Logs**
       </DNT>

       y, en el panel de navegación izquierdo, seleccione

       <DNT>
         **Obfuscation**
       </DNT>

       .

    2. Seleccione la pestaña

       <DNT>
         **Expressions**
       </DNT>

       para ver todas las expresiones de ofuscación disponibles y sus definiciones.

       <DNT>
         **Using NerdGraph:**
       </DNT>

       Utilice el buscador `obfuscationExpressions` en `actor.account.logConfigurations`. Consulte el ejemplo completo en GraphiQL, así como la documentación relacionada en [<DNT>**api.newrelic.com/graphiql**</DNT>](https://api.newrelic.com/graphiql?#query=%7B%0A%20%20actor%20%7B%0A%20%20%20%20account%28id%3A%201234%29%20%7B%0A%20%20%20%20%20%20logConfigurations%20%7B%0A%20%20%20%20%20%20%20%20obfuscationExpressions%20%7B%0A%20%20%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%20%20%20%20regex%0A%20%20%20%20%20%20%20%20%20%20description%0A%20%20%20%20%20%20%20%20%20%20createdAt%0A%20%20%20%20%20%20%20%20%20%20createdBy%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%20%20%20%20%20%20email%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20updatedAt%0A%20%20%20%20%20%20%20%20%20%20updatedBy%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%20%20%20%20%20%20email%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A).
  </Collapser>

  <Collapser
    id="expressions-update"
    title="Actualizar una expresión de ofuscación"
  >
    Utilice cualquiera de estas opciones para actualizar una expresión de ofuscación:

    <DNT>
      **Using the logs UI:**
    </DNT>

    1. Vaya a <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Logs**</DNT> y, en el panel de navegación izquierdo, seleccione <DNT>**Obfuscation**</DNT>.
    2. Seleccione la pestaña <DNT>**Expressions**</DNT> .
    3. Haga clic en el icono de puntos suspensivos <DNT>**...**</DNT> en el lado derecho de la expresión de ofuscación que desea editar y haga clic en <DNT>**Edit**</DNT>.
    4. Modifique los campos según sea necesario y haga clic en <DNT>**Update**</DNT>.

       <DNT>
         **Using NerdGraph:**
       </DNT>

       Utilice la mutación `logConfigurationsUpdateObfuscationExpression` en `logConfigurations`. Consulte el ejemplo completo en GraphiQL, así como la documentación relacionada en [<DNT>**api.newrelic.com/graphiql**</DNT>](https://api.newrelic.com/graphiql?#query=mutation%20%7B%0A%20%20logConfigurationsUpdateObfuscationExpression%28accountId%3A%201234%2C%20expression%3A%20%7Bname%3A%20%22Credit%20Card%20Number%20-%20EDITED%22%2C%20regex%3A%20%22%28%5C%5Cd%7B4%7D-%5C%5Cd%7B4%7D-%5C%5Cd%7B4%7D-%5C%5Cd%7B4%7D%29%22%2C%20description%3A%20%22Reusable%20expression%20to%20capture%20credit%20card%20numbers%20-%20EDITED%22%2C%20id%3A%20%225678%22%7D%29%20%7B%0A%20%20%20%20id%0A%20%20%20%20name%0A%20%20%20%20regex%0A%20%20%20%20description%0A%20%20%20%20createdAt%0A%20%20%20%20createdBy%20%7B%0A%20%20%20%20%20%20name%0A%20%20%20%20%20%20email%0A%20%20%20%20%7D%0A%20%20%20%20updatedAt%0A%20%20%20%20updatedBy%20%7B%0A%20%20%20%20%20%20name%0A%20%20%20%20%20%20email%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A).

       <Callout variant="important">
         Debes escapar de las expresiones regulares cuando las uses en NerdGraph. Por ejemplo: `((?:(?:4\\d{3})|(?:5[1-5]\\d{2})|6(?:011|5[0-9]{2}))(?:-?|\\040?)(?:\\d{4}(?:-?|\\040?)){3}|(?:3[4,7]\\d{2})(?:-?|\\040?)\\d{6}(?:-?|\\040?)\\d{5})`
       </Callout>

       No es necesario especificar todos los campos de una expresión de ofuscación al actualizarla, solo el id (obligatorio) y los campos que desea modificar.
  </Collapser>

  <Collapser
    id="expressions-delete"
    title="Eliminar una expresión de ofuscación"
  >
    <Callout variant="important">
      No podrá eliminar una expresión de ofuscación si actualmente está siendo utilizada por una regla de ofuscación.
    </Callout>

    Utilice cualquiera de estas opciones para eliminar una expresión de ofuscación:

    <DNT>
      **Using the logs UI:**
    </DNT>

    1. Vaya a <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Logs**</DNT> y, en el panel de navegación izquierdo, seleccione <DNT>**Obfuscation**</DNT>.
    2. Seleccione la pestaña <DNT>**Expressions**</DNT> .
    3. Haga clic en el icono de puntos suspensivos <DNT>**...**</DNT> en el lado derecho de la expresión de ofuscación que desea eliminar y haga clic en <DNT>**Delete**</DNT>.
    4. Confirme que desea eliminar la expresión haciendo clic en <DNT>**Delete**</DNT>.

       <DNT>
         **Using NerdGraph:**
       </DNT>

       Utilice la mutación `logConfigurationsDeleteObfuscationExpression` en `logConfigurations`. Consulte el ejemplo completo en GraphiQL, así como la documentación relacionada en [<DNT>**api.newrelic.com/graphiql**</DNT>](https://api.newrelic.com/graphiql?#query=mutation%20%7B%0A%20%20logConfigurationsDeleteObfuscationExpression%28accountId%3A%201234%2C%20id%3A%205678%29%20%7B%0A%20%20%20%20id%0A%20%20%20%20name%0A%20%20%20%20regex%0A%20%20%20%20description%0A%20%20%20%20createdAt%0A%20%20%20%20createdBy%20%7B%0A%20%20%20%20%20%20email%0A%20%20%20%20%20%20name%0A%20%20%20%20%7D%0A%20%20%20%20updatedAt%0A%20%20%20%20updatedBy%20%7B%0A%20%20%20%20%20%20email%0A%20%20%20%20%20%20name%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A).

       La mutación devolverá una instantánea de la expresión antes de ser eliminada.
  </Collapser>
</CollapserGroup>

## Expresiones de muestra [#samples]

A continuación, proporcionamos algunos ejemplos de expresiones regulares para ofuscar algunos de los tipos de datos confidenciales más comunes. La expresión de ofuscación debe crearse para cada cuenta New Relic donde se utilizarán esas expresiones.

<Callout variant="tip">
  Los siguientes ejemplos son expresiones regulares que podría utilizar en la UI. Para usarlos en GraphQL, deberá escaparlos como se muestra en este [ejemplo](#expressions-create).
</Callout>

<CollapserGroup>
  <Collapser
    id="ssn"
    title="Número de Seguro Social EE.UU"
  >
    <DNT>
      **Expression:**
    </DNT>

    ```regex
    (\d{3}[-\s\.]?\d{2}[-\s\.]?\d{4})
    ```
  </Collapser>

  <Collapser
    id="ccn"
    title="Número de Tarjeta de Crédito"
  >
    <DNT>
      **Expression:**
    </DNT>

    ```regex
    ((?:(?:4\d{3})|(?:5[1-5]\d{2})|6(?:011|5[0-9]{2}))(?:-?|\040?)(?:\d{4}(?:-?|\040?)){3}|(?:3[4,7]\d{2})(?:-?|\040?)\d{6}(?:-?|\040?)\d{5})
    ```
  </Collapser>

  <Collapser
    id="dob"
    title="Fecha de nacimiento de EE. UU."
  >
    <DNT>
      **Expression:**
    </DNT>

    ```regex
    ((?:\d{2})?\d\d(?:\\)?(?:\/)?\d\d(?:\\)?(?:\/)?\d{2}(?:\d{2})?)
    ```
  </Collapser>

  <Collapser
    id="email-address"
    title="Dirección de correo electrónico"
  >
    <DNT>
      **Expression:**
    </DNT>

    ```regex
    ([a-zA-Z0-9!#$'*+?^_`{|}~.-]+(?:@|%40)(?:[a-zA-Z0-9-]+\.)+[a-zA-Z0-9-]+)
    ```
  </Collapser>

  <Collapser
    id="ipv4"
    title="Dirección IP (ipv4)"
  >
    <DNT>
      **Expression:**
    </DNT>

    ```regex
    ^([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})$
    ```
  </Collapser>

  <Collapser
    id="usstreetaddress"
    title="Dirección postal en EE. UU."
  >
    <DNT>
      **Expression:**
    </DNT>

    ```regex
    /\d{1,}(\s{1}\w{1,})(\s{1}?\w{1,})/g
    ```
  </Collapser>

  <Collapser
    id="usphone"
    title="Número de teléfono de EE. UU."
  >
    <DNT>
      **Expression:**
    </DNT>

    ```regex
    (^[\+]?[1]?[\W]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4})
    ```
  </Collapser>

  <Collapser
    id="uspassport"
    title="Número de pasaporte estadounidense"
  >
    <DNT>
      **Expression:**
    </DNT>

    ```regex
    ([a-zA-Z]?\d?\d{5,8})
    ```
  </Collapser>

  <Collapser
    id="uknino"
    title="Número de seguro nacional del Reino Unido (NINO)"
  >
    <DNT>
      **Expression:**
    </DNT>

    ```regex
    ([a-zA-Z]{2}[-\s]?\d{2}[-\s]?\d{2}[-\s]?\d{2}[-\s]?[a-dA-D])
    ```
  </Collapser>

  <Collapser
    id="spainnid"
    title="DNI de España (NIE/DNI/NIF)"
  >
    <DNT>
      **Expression:**
    </DNT>

    ```regex
    ([a-zA-Z]?[-\s]?\d{7,8}[-\s]?[a-zA-Z])
    ```
  </Collapser>

  <Collapser
    id="indiapanid"
    title="ID PAN de la India"
  >
    <DNT>
      **Expression:**
    </DNT>

    ```regex
    ^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$
    ```
  </Collapser>

  <Collapser
    id="indiaaadhaar"
    title="ID de AADHAAR de India"
  >
    <DNT>
      **Expression:**
    </DNT>

    ```regex
    ^([2-9]{1}[0-9]{3}\s\d{4}\s\d{4})$
    ```
  </Collapser>

  <Collapser
    id="caphin"
    title="Número de seguro social/salud personal de Canadá (PHIN/SIN)"
  >
    <DNT>
      **Expression:**
    </DNT>

    ```regex
    (\d{3}[-\s\.]?\d{3}[-\s\.]?\d{3})
    ```
  </Collapser>

  <Collapser
    id="cahcn"
    title="Número de tarjeta sanitaria de Canadá"
  >
    <DNT>
      **Expression:**
    </DNT>

    ```regex
    (\d{10})
    ```
  </Collapser>

  <Collapser
    id="japanid"
    title="Número de identidad nacional de Japón (Mi número)"
  >
    <DNT>
      **Expression:**
    </DNT>

    ```regex
    (d{4}\sd{4}\sd{4})
    ```
  </Collapser>
</CollapserGroup>

## Regla de ofuscación [#rules]

Puede crear, leer, actualizar o eliminar regla de ofuscación utilizando la New Relic UI o utilizando NerdGraph, nuestro Explorador GraphQL.

<CollapserGroup>
  <Collapser
    id="rules-create"
    title="Crear una regla de ofuscación"
  >
    Utilice cualquiera de estas opciones para crear una regla de ofuscación:

    <DNT>
      **Using the logs UI:**
    </DNT>

    1. Vaya a <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Logs**</DNT> y, en el panel de navegación izquierdo, seleccione <DNT>**Obfuscation**</DNT>.

    2. Haga clic en <DNT>**Create obfuscation rule**</DNT>.

    3. Ingrese un nombre para su nueva regla de ofuscación, así como un criterio coincidente (en formato NRQL ) para capturar el conjunto objetivo de registros que desea ofuscar.

    4. Agregue un nuevo `actions` (el primero se agrega automáticamente) para especificar la expresión de ofuscación (regex) para capturar cada conjunto de atributos, así como si se deben `MASK` o `HASH` .

       * Se pueden especificar varios atributos separados por comas.
       * `MASK` reemplazará todos los caracteres coincidentes con `X`es. Si usa `MASK`, no podrá consultar un valor ofuscado en particular más adelante.
       * `HASH` reemplazará los datos confidenciales con el valor hash SHA-256. Si utiliza `HASH`, podrá consultarlos utilizando nuestra herramienta hash, siempre que conozca su valor de texto sin cifrar.

       Tu regla debería verse así:

       <img
         title="Create an obfuscation rule using the logs UI"
         alt="Create an obfuscation rule using the logs UI"
         src="/images/logs_screenshot-crop_log-obfuscation-create-rule.webp"
       />

    5. Haga clic en <DNT>**Create rule**</DNT> para crear y activar su regla de ofuscación.

       <DNT>
         **Using NerdGraph:**
       </DNT>

       Utilice la mutación `logConfigurationsCreateObfuscationRule` en `logConfigurations`. Consulte el ejemplo completo en GraphiQL, así como la documentación relacionada en [<DNT>**api.newrelic.com/graphiql**</DNT>](https://api.newrelic.com/graphiql?#query=mutation%20%7B%0A%20%20logConfigurationsCreateObfuscationRule%28accountId%3A%201234%2C%20rule%3A%20%7Bname%3A%20%22Obfuscate%20Login%20Service%20Logs%22%2C%20description%3A%20%22Removes%20PII%20from%20the%20Login%20Service%20Logs%20owned%20by%20the%20Sales%20department.%20Do%20not%20modify%20this%20rule%20without%20contacting%20the%20Sales%20team%20first.%22%2C%20filter%3A%20%22serviceName%20%3D%20%27loginService%27%20AND%20department%20%3D%20%27sales%27%22%2C%20enabled%3A%20true%2C%20actions%3A%20%5B%7Battributes%3A%20%5B%22message%22%2C%20%22creditCardNumber%22%5D%2C%20expressionId%3A%20%2212%22%2C%20method%3A%20HASH_SHA256%7D%2C%20%7Battributes%3A%20%5B%22message%22%5D%2C%20expressionId%3A%20%2234%22%2C%20method%3A%20MASK%7D%2C%20%7Battributes%3A%20%5B%22message%22%2C%20%22ssn%22%5D%2C%20expressionId%3A%20%2256%22%2C%20method%3A%20HASH_SHA256%7D%5D%7D%29%20%7B%0A%20%20%20%20id%0A%20%20%20%20name%0A%20%20%20%20description%0A%20%20%20%20filter%0A%20%20%20%20enabled%0A%20%20%20%20actions%20%7B%0A%20%20%20%20%20%20attributes%0A%20%20%20%20%20%20expression%20%7B%0A%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20method%0A%20%20%20%20%7D%0A%20%20%20%20createdAt%0A%20%20%20%20createdBy%20%7B%0A%20%20%20%20%20%20name%0A%20%20%20%20%20%20email%0A%20%20%20%20%7D%0A%20%20%20%20updatedAt%0A%20%20%20%20updatedBy%20%7B%0A%20%20%20%20%20%20name%0A%20%20%20%20%20%20email%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A).

       <Callout variant="important">
         Debe especificar la ofuscación `expressionId` para vincularla a una acción de ofuscación determinada. Para recuperar esta identificación, puede [consultar el `obfuscationRules`](#rules-read).
       </Callout>
  </Collapser>

  <Collapser
    id="rules-read"
    title="Leer una regla de ofuscación"
  >
    Utilice cualquiera de estas opciones para consultar una regla de ofuscación:

    <DNT>
      **Using the logs UI:**
    </DNT>

    1. Vaya a <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Logs**</DNT> y, en el panel de navegación izquierdo, seleccione <DNT>**Obfuscation**</DNT>.
    2. Seleccione la pestaña <DNT>**Rules**</DNT> (predeterminada) para ver todas las reglas de ofuscación disponibles y sus definiciones.

       <DNT>
         **Using NerdGraph:**
       </DNT>

       Utilice el buscador `obfuscationRules` en `actor.account.logConfigurations`. Consulte el ejemplo completo en GraphiQL, así como la documentación relacionada en [<DNT>**api.newrelic.com/graphiql**</DNT>](https://api.newrelic.com/graphiql?#query=%7B%0A%20%20actor%20%7B%0A%20%20%20%20account%28id%3A%201234%29%20%7B%0A%20%20%20%20%20%20logConfigurations%20%7B%0A%20%20%20%20%20%20%20%20obfuscationRules%20%7B%0A%20%20%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%20%20%20%20description%0A%20%20%20%20%20%20%20%20%20%20filter%0A%20%20%20%20%20%20%20%20%20%20enabled%0A%20%20%20%20%20%20%20%20%20%20actions%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20attributes%0A%20%20%20%20%20%20%20%20%20%20%20%20expression%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20method%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20createdAt%0A%20%20%20%20%20%20%20%20%20%20createdBy%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%20%20%20%20%20%20email%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20updatedAt%0A%20%20%20%20%20%20%20%20%20%20updatedBy%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%20%20%20%20%20%20email%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A)
  </Collapser>

  <Collapser
    id="rules-update"
    title="Actualizar una regla de ofuscación"
  >
    Utilice cualquiera de estas opciones para actualizar una regla de ofuscación:

    <DNT>
      **Using the logs UI:**
    </DNT>

    1. Vaya a <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Logs**</DNT> y, en el panel de navegación izquierdo, seleccione <DNT>**Obfuscation**</DNT>.
    2. Seleccione la pestaña <DNT>**Rules**</DNT> (predeterminada).
    3. Haga clic en el icono de puntos suspensivos <DNT>**...**</DNT> en el lado derecho de la regla de ofuscación que desea editar y haga clic en <DNT>**Edit**</DNT>.
    4. Modifique los campos según sea necesario y haga clic en <DNT>**Update rule**</DNT>.

       <DNT>
         **Using NerdGraph:**
       </DNT>

       Utilice la mutación `logConfigurationsUpdateObfuscationRule` en `logConfigurations`. Consulte el ejemplo completo en GraphiQL, así como la documentación relacionada en [<DNT>**api.newrelic.com/graphiql**</DNT>](https://api.newrelic.com/graphiql?#query=mutation%20%7B%0A%20%20logConfigurationsUpdateObfuscationRule%28accountId%3A%201234%2C%20rule%3A%20%7Bid%3A%20%225678%22%2C%20name%3A%20%22EDITED%20-%20Obfuscate%20Login%20Service%20Logs%22%2C%20description%3A%20%22EDITED%20-%20Removes%20PII%20from%20the%20Login%20Service%20Logs%20owned%20by%20the%20Sales%20department.%20Do%20not%20modify%20this%20rule%20without%20contacting%20the%20Sales%20team%20first.%22%2C%20filter%3A%20%22serviceName%20%3D%20%27loginService%27%20AND%20department%20%3D%20%27sales%27%22%2C%20enabled%3A%20true%2C%20actions%3A%20%5B%7Battributes%3A%20%5B%22message%22%2C%20%22creditCardNumber%22%5D%2C%20expressionId%3A%20%2212%22%2C%20method%3A%20HASH_SHA256%7D%2C%20%7Battributes%3A%20%5B%22message%22%5D%2C%20expressionId%3A%20%2234%22%2C%20method%3A%20MASK%7D%2C%20%7Battributes%3A%20%5B%22message%22%2C%20%22ssn%22%5D%2C%20expressionId%3A%20%2256%22%2C%20method%3A%20HASH_SHA256%7D%5D%7D%29%20%7B%0A%20%20%20%20id%0A%20%20%20%20name%0A%20%20%20%20description%0A%20%20%20%20filter%0A%20%20%20%20enabled%0A%20%20%20%20actions%20%7B%0A%20%20%20%20%20%20attributes%0A%20%20%20%20%20%20expression%20%7B%0A%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20method%0A%20%20%20%20%7D%0A%20%20%20%20createdAt%0A%20%20%20%20createdBy%20%7B%0A%20%20%20%20%20%20name%0A%20%20%20%20%20%20email%0A%20%20%20%20%7D%0A%20%20%20%20updatedAt%0A%20%20%20%20updatedBy%20%7B%0A%20%20%20%20%20%20name%0A%20%20%20%20%20%20email%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A).

       <Callout variant="important">
         Debe especificar la ofuscación `expressionId` para vincularla a una acción de ofuscación determinada. Para recuperar esta identificación, puede usar `obfuscationRules`, como se describe en \[consulta el `obfuscationRules`]](#rules-read).
       </Callout>

       No es necesario especificar todos los campos de una regla de ofuscación al actualizarla, solo el `id` (obligatorio) y los campos que deseas modificar. A continuación se muestra un ejemplo para [actualizar solo el nombre](https://api.newrelic.com/graphiql?#query=mutation%20%7B%0A%20%20logConfigurationsUpdateObfuscationRule%28accountId%3A%201234%2C%20rule%3A%20%7Bid%3A%20%225678%22%2C%20name%3A%20%22EDITED%20-%20Obfuscate%20Login%20Service%20Logs%22%7D%29%20%7B%0A%20%20%20%20id%0A%20%20%20%20name%0A%20%20%20%20description%0A%20%20%20%20filter%0A%20%20%20%20enabled%0A%20%20%20%20actions%20%7B%0A%20%20%20%20%20%20attributes%0A%20%20%20%20%20%20expression%20%7B%0A%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20method%0A%20%20%20%20%7D%0A%20%20%20%20createdAt%0A%20%20%20%20createdBy%20%7B%0A%20%20%20%20%20%20name%0A%20%20%20%20%20%20email%0A%20%20%20%20%7D%0A%20%20%20%20updatedAt%0A%20%20%20%20updatedBy%20%7B%0A%20%20%20%20%20%20name%0A%20%20%20%20%20%20email%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A).
  </Collapser>

  <Collapser
    id="rules-delete"
    title="Eliminar una regla de ofuscación"
  >
    Utilice cualquiera de estas opciones para eliminar una regla de ofuscación:

    <DNT>
      **Using the logs UI:**
    </DNT>

    1. Vaya a <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Logs**</DNT> y, en el panel de navegación izquierdo, seleccione <DNT>**Obfuscation**</DNT>.
    2. Seleccione la pestaña <DNT>**Rules**</DNT> (predeterminada).
    3. Haga clic en el icono de puntos suspensivos <DNT>**...**</DNT> en el lado derecho de la regla de ofuscación que desea eliminar y haga clic en <DNT>**Delete**</DNT>.
    4. Confirme que desea eliminar la expresión haciendo clic en <DNT>**Delete**</DNT>.

       <DNT>
         **Using NerdGraph:**
       </DNT>

       Utilice la mutación `logConfigurationsDeleteObfuscationRule` en `logConfigurations`. Consulte el ejemplo completo en GraphiQL, así como la documentación relacionada en [<DNT>**api.newrelic.com/graphiql**</DNT>](https://api.newrelic.com/graphiql?#query=mutation%20%7B%0A%20%20logConfigurationsDeleteObfuscationRule%28accountId%3A%201234%2C%20id%3A%205678%29%20%7B%0A%20%20%20%20id%0A%20%20%20%20name%0A%20%20%20%20description%0A%20%20%20%20filter%0A%20%20%20%20enabled%0A%20%20%20%20actions%20%7B%0A%20%20%20%20%20%20attributes%0A%20%20%20%20%20%20expression%20%7B%0A%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20method%0A%20%20%20%20%7D%0A%20%20%20%20createdAt%0A%20%20%20%20createdBy%20%7B%0A%20%20%20%20%20%20name%0A%20%20%20%20%20%20email%0A%20%20%20%20%7D%0A%20%20%20%20updatedAt%0A%20%20%20%20updatedBy%20%7B%0A%20%20%20%20%20%20name%0A%20%20%20%20%20%20email%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A).

       La mutación devolverá una instantánea de la regla antes de ser eliminada.
  </Collapser>
</CollapserGroup>
