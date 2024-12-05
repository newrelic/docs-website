---
title: 'Marco PHP: integración del soporte para New Relic'
tags:
  - Agents
  - PHP agent
  - Frameworks and libraries
metaDescription: An overview of what New Relic is and what developers or maintainers of PHP frameworks need to do in order to integrate support for New Relic.
freshnessValidatedDate: never
translationType: machine
---

Este documento es un monitoreo de IA a los desarrolladores o mantenedores del framework PHP. Sugiere formas de ampliar su framework agregando soporte para New Relic.

El agente PHP admite el marco averiguando en qué parte del código framework se puede nombrar apropiadamente transacción web y nombrando transacción web según la información encontrada en la clase, llamada a función, etc. Esta solución es frágil y está sujeta a que los desarrolladores modifiquen su código. New Relic alienta a los desarrolladores framework a realizar las pocas llamadas necesarias para mejorar la experiencia del usuario lista para usar con el framework que mantienen.

## Ayuda a tu usuario [#frameworks]

New Relic puede identificar el nombre de la transacción web y dónde insertar encabezados y pies de página de JavaScript para <InlinePopover type="browser"/>de New Relic. Sin embargo, para mejorar la experiencia del usuario final, aumentar el rendimiento y facilitar el mantenimiento del código, los desarrolladores framework deberían hacer este trabajo ellos mismos.

Depende de los desarrolladores de los distintos marcos decidir si quieren ayudar a su usuario agregando soporte nativo para New Relic. En casi todos los casos, agregar soporte para New Relic implica insertar tres API de llamada en algún lugar del código framework .

## Terminología

Para comprender cuál es la mejor manera de agregar soporte para New Relic, es útil comprender algunos de los puntos clave de interacción.

<table>
  <thead>
    <tr>
      <th width={150}>
        <DNT>
          **Term**
        </DNT>
      </th>

      <th>
        <DNT>
          **Definition**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        <DNT>
          **Web transactions**
        </DNT>
      </td>

      <td>
        <DNT>**Web transactions**</DNT> son solicitudes de activos (o visitas de usuarios) a su sitio. Con el marco, esto suele ser manejado por un mecanismo de despacho MVC.
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **Metrics**
        </DNT>
      </td>

      <td>
        <DNT>**Metrics**</DNT> Se denominan entidades que reportan información temporal. New Relic utiliza estas métricas para generar gráficos y páginas, como la [página APM <DNT>**Summary**</DNT> ](/docs/apm/applications-menu/monitoring/apm-overview-page). Por ejemplo, New Relic instrumentado llama a MySQL y genera métrica llamada `Database/select` o `Database/update` cada vez que un usuario selecciona o actualiza datos.

        Métrica sólo contiene datos de sincronización.
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **Transaction traces**
        </DNT>
      </td>

      <td>
        Durante cada período de cosecha, New Relic registra la transacción web más lenta que cae por debajo de un umbral definido por el usuario. Este es un <DNT>**transaction trace**</DNT>.

        Tiene más detalle que la simple métrica. Si está habilitado, incluirá un gráfico de llamadas detallado de exactamente qué funciones se llamaron y cuánto tiempo tardaron. Para declaraciones de consulta lenta, confunde todos los datos de la llamada.
      </td>
    </tr>
  </tbody>
</table>

## Nombre transacción [#dev]

El nombre que le des a tu transacción web afectará la calidad de la experiencia del usuario.

<Callout variant="important">
  No utilice corchetes `[suffix]` al final del nombre de su transacción. New Relic elimina automáticamente los corchetes del nombre. En su lugar, utilice paréntesis `(suffix)` u otros símbolos si es necesario.
</Callout>

<DNT>
  **Examples:**
</DNT>

Si tiene un framework estilo blog, nombraría las distintas transacciones según la actividad del usuario: `display`, `edit`, `login`, etc.

Si utiliza una arquitectura MVC, una convención de nomenclatura adecuada es `controller/action`. **No** incluya ningún dato específico de la solicitud en el nombre de la transacción. Por ejemplo, el uso de la URL de solicitud real genera [problemas de agrupación métrica](/docs/features/metric-grouping-issues).

<table>
  <thead>
    <tr>
      <th width={150}>
        <DNT>
          **Platform**
        </DNT>
      </th>

      <th>
        <DNT>
          **Transaction naming example**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        <DNT>
          **Drupal 7**
        </DNT>
      </td>

      <td>
        El envío se realiza en `menu_execute_active_handler()`. Esto llama a `call_user_func_array()`, siendo el primer argumento el nombre de la acción. Eso es lo que se debe establecer como nombre de la transacción web.
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **CakePHP 1.3**
        </DNT>
      </td>

      <td>
        CakePHP tiene una clase `Dispatcher` con un método `_invoke` . Esto llama a la clase de controlador adecuada con una acción determinada y la transacción se denomina `controller/action` donde `controller` es el nombre de la clase de controlador.
      </td>
    </tr>
  </tbody>
</table>

En el punto donde desea enrutar el código a un controlador y una acción específicos (si está usando MVC) o a una acción (si no está usando MVC), inserte un código similar a este:

<DNT>**Controller and action**</DNT> (cuando se usa MVC):

```php
if (extension_loaded ('newrelic')) {
    newrelic_name_transaction ($controller . '/' . $action);
}
```

<DNT>**Action only**</DNT> (sin usar MVC):

```php
if (extension_loaded ('newrelic')) {
    newrelic_name_transaction ($action);
}
```

## Inserte el encabezado y pie de página de JavaScript [#page-load-timing]

Para el tiempo de carga de la página (a veces denominado monitoreo de usuarios reales o RUM), inserte el encabezado y pie de página de JavaScript. Esto le permite monitor la experiencia del usuario final de la página generada.

* <DNT>
    **Recommendation:**
  </DNT>

  Si su framework tiene una función central que genera todos los encabezados y pies de página, instale el código JavaScript aquí.

* Para marcos basados en plantillas, insértelos en sus plantillas de encabezado y pie de página.

<CollapserGroup>
  <Collapser
    id="page-generator"
    title="Insertar en una función de generador de página"
  >
    El encabezado <DNT>**must**</DNT> se insertará lo más cerca posible de la parte superior de la página generada. Inmediatamente después de la etiqueta `<meta http-equiv....>` está el lugar ideal. Debe preceder a <DNT>**any**</DNT> JavaScript, hojas de estilo CSS u otro contenido vinculado o incrustado.

    ```php
    if (extension_loaded ('newrelic')) {
        echo newrelic_get_browser_timing_header();
    }
    ```

    `newrelic_get_browser_timing_header()` toma un argumento opcional `bool` cuyo valor predeterminado es <DNT>**true**</DNT>. Indica si la cadena devuelta debe estar encerrada o no por una etiqueta script .

    <DNT>**Recommendation:**</DNT> Inserte el pie de página inmediatamente antes de la etiqueta de cierre de página `</body>` como lo último en la página generada.

    ```php
    if (extension_loaded ('newrelic')) {
        echo newrelic_get_browser_timing_footer();
    }
    ```

    `newrelic_get_browser_timing_footer()` toma un `bool` opcional que por defecto es <DNT>**true**</DNT>. Indica si la cadena devuelta debe estar encerrada o no por una etiqueta script .
  </Collapser>

  <Collapser
    id="template"
    title="Insertar en plantillas"
  >
    Utilice esta plantilla de encabezado como ejemplo:

    ```php
    <?php if (extension_loaded ('newrelic')) {
        echo newrelic_get_browser_timing_header();
    } ?>
    ```

    Utilice esta plantilla de pie de página como ejemplo:

    ```php
    <?php if (extension_loaded ('newrelic')) {
        echo newrelic_get_browser_timing_footer();
    } ?>
    ```
  </Collapser>
</CollapserGroup>
