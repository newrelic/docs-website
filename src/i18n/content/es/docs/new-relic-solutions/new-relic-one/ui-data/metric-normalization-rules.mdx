---
title: Reglas de normalización métrica
tags:
  - New Relic
  - Use New Relic
  - UI and data
metaDescription: How to create and manage rules in New Relic  to deal with noise from high cardinality metrics and prevent metric grouping issues (MGIs).
freshnessValidatedDate: never
translationType: machine
---

Puede haber casos en los que una aplicación envíe muchas métricas individuales que podrían gestionarse mejor en grupos. La mayoría de estos ocurren con transacciones web métricas nombradas a partir de URL. Para obtener una explicación de este problema, consulte [Problemas de agrupación métrica](/docs/using-new-relic/cross-product-functions/troubleshooting/metric-grouping-issues) (MGI).

Para reducir la alta cardinalidad y evitar problemas de agrupación métrica, New Relic admite reglas para agrupar o filtrar datos de intervalo de tiempo de métrica (normalización). En algunos casos, cuando se detectan problemas de agrupación de métricas con un número muy alto de métricas, se crea automáticamente una regla para proteger la plataforma de la degradación del rendimiento.

## Requisitos [#requirements]

Los problemas de agrupación métrica y la normalización métrica se aplican solo a [los datos de intervalo de tiempo de métrica](/docs/data-apis/understand-data/new-relic-data-types/#timeslice-data). <InlinePopover type="apm"/>agente, agente móvil y <InlinePopover type="browser"/>agente informan y muestran datos de intervalo de tiempo de métrica.

## Gestión de reglas de normalización métrica. [#create-rules]

Puede crear y gestionar nuevas reglas que aborden el ruido producido por la cardinalidad métrica alta utilizando la herramienta de normalización métrica, a la que se puede acceder desde dashboard de cada servicio en el [explorador de entidad](/docs/new-relic-solutions/new-relic-one/core-concepts/new-relic-explorer-view-performance-across-apps-services-hosts#find). Una vez allí, seleccione <DNT>**Metric normalization**</DNT> en la barra lateral izquierda.

Allí podrás ver las reglas existentes o crear otras nuevas. Haga clic en una regla para modificarla o haga clic en <DNT>**Create a new rule**</DNT> para crear una nueva. Se mostrará un nuevo panel para configurar la regla.

<img
  style={{ width: '324px', height: '352px'}}
  class="inline"
  title="create new rule.png"
  alt="Create New Rule"
  src="/images/solutions_screenshot-full_create-new-rule-window.webp"
/>

Los campos disponibles son:

* <DNT>**Order**</DNT>: Determina la prioridad de la regla. Un número más bajo significa una prioridad más alta.

* <DNT>**Match expression**</DNT>: Ingresa la expresión regular para agrupar todas las métricas que deseas incluir en la regla.

* <DNT>**Matches**</DNT>: Aquí verá una vista previa de la métrica que coincide con la expresión regular anterior.

* <DNT>**Action**</DNT>: La acción que deseas realizar sobre la métrica.

  * <DNT>
      **Replace**
    </DNT>

    : Reemplace la métrica coincidente por la expresión regular con el valor descrito en el campo

    <DNT>
      **Replacement**
    </DNT>

    .

  * <DNT>
      **Ignore**
    </DNT>

    : ignora cualquier métrica que coincida con la expresión regular.

  * <DNT>
      **Deny new metrics**
    </DNT>

    : Escriba únicamente métricas que ya hayan sido reportadas e ignore aquellas que coincidan con la expresión regular.

* <DNT>**Replacement**</DNT>: Sólo activo cuando <DNT>**Replace**</DNT> está habilitado. Las métricas coincidentes se reemplazan con el valor del campo. Si la expresión regular captura grupos, puede usar un marcador de posición para ellos con `\1` o `\2` para los grupos `1` y `2` respectivamente.

* <DNT>**Active**</DNT>: Las reglas no se pueden eliminar, pero se pueden desactivar. Haga clic en el interruptor para habilitar o deshabilitar la regla.

* <DNT>**Terminate**</DNT>: Cuando está habilitado, se sale de la cascada de reglas cuando el patrón asociado coincide.

* <DNT>**Notes**</DNT>: Notas internas sobre la regla. No tiene ningún efecto sobre la regla.

Una vez que haya configurado los campos, haga clic en <DNT>**Create**</DNT> (o <DNT>**Edit**</DNT> en caso de que esté editando una regla existente) y la regla se aplicará inmediatamente siempre que sea <DNT>**Active**</DNT>.
