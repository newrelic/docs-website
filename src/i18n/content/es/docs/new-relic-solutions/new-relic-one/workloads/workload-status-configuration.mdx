---
title: Configuración del estado de la carga de trabajo
tags:
  - New Relic
  - Use New Relic
  - Workloads
metaDescription: 'How to configure your workload status, and how to obtain the workload status.'
freshnessValidatedDate: never
translationType: machine
---

Puede obtener el estado de su carga de trabajo de dos maneras:

* <DNT>
    **Automatic status**
  </DNT>

  : el estado se calcula a partir de una serie de reglas.

* <DNT>
    **Static status**
  </DNT>

  : el estado anula cualquier cálculo automático del estado de su carga de trabajo.

Para administrar la configuración del estado de la carga de trabajo, vaya a la página <DNT>**Health status**</DNT> de una carga de trabajo.

<img
  title="new-relic-workload-status-main.png"
  alt="new-relic-workload-status-main.png"
  src="/images/solutions_screenshot-crop_workload-status-main.webp"
/>

## Configurar el estado automático de la carga de trabajo [#configure-automatic]

Puede utilizar el estado de cada una de las entidades que pertenecen a una carga de trabajo para resumir el estado de la carga de trabajo en un solo valor.

No todas las entidades de una carga de trabajo son igualmente importantes desde la perspectiva del rendimiento, los errores o la disponibilidad:

* Es posible que desee que su carga de trabajo se muestre como interrumpida si un monitor o servicio esencial de Sintético tiene un incidente crítico.

* Sin embargo, si su infraestructura de host tiene cierta redundancia y resistencia a las interrupciones, es posible que no necesite cambiar el estado de su carga de trabajo de

  <DNT>
    **Operational**
  </DNT>

  solo porque un solo host tiene un incidente de alerta en curso.

De forma predeterminada, cuando crea una carga de trabajo, se agregan las siguientes reglas para calcular su estado:

1. Para tipos de entidades cercanas a la experiencia digital (es decir, monitor Sintético, aplicación browser , aplicación móvil y servicios), se propaga el peor estado disponible.
2. Para cualquier otro tipo de entidad, que son básicamente entidades de infraestructura, se propaga el mejor estado disponible.

### Crear reglas personalizadas [#create-custom-tules]

Para personalizar el estado de la carga de trabajo automática, puede definir sus propias reglas. Una regla consta de un grupo de entidades y un modo roll up:

<img
  title="new-relic-workloads-status-rule.png"
  alt="new-relic-workloads-status-rule.png"
  src="/images/new-relic-workloads-status-rule.webp"
/>

1. Defina el grupo de entidades según los tipos de entidades, valores de etiquetas, GUID o una combinación de todos ellos.
2. Decida cómo propagar el estado de esta entidad al estado de grupo:

* <DNT>
    **Roll up the best status**
  </DNT>

  : el estado del grupo coincide con el estado menos crítico de todas las entidades pertenecientes. Utilice esta opción cuando desee que el estado del grupo sea operativo siempre que al menos una entidad del grupo todavía esté operativa.

* <DNT>
    **Roll up the worst status**
  </DNT>

  : el estado del grupo coincide con el estado más crítico de todas las entidades pertenecientes. Utilice esta opción cuando desee que el estado del grupo indique una degradación o interrupción del servicio tan pronto como una entidad del grupo no esté operativa. También puede decidir acumular el peor estado solo después de que una cierta cantidad de entidades no estén operativas.

3. Guarde la regla y proceda a crear otra si es necesario.

El estado final de la carga de trabajo equivale al peor estado entre todos los estados del grupo individual.

<Callout variant="important">
  En este cálculo final, cualquier estado calculado automáticamente se anula si un administrador de carga de trabajo ha establecido un [estado estático](#configure-static) .
</Callout>

### Una regla para permanecer como entidad [#remaining-entities]

Para una configuración de estado más sencilla y dinámica, puede utilizar un tipo de resumen para todas las entidades que no se evalúan en ninguna otra regla que haya definido antes. En particular, si no agrega ninguna otra regla, la regla para la entidad restante tendrá en cuenta todas las entidades en la carga de trabajo.

Cuando se combina con la opción de agrupación por tipo de entidad, esta regla especial le permite tener una idea general de cómo funciona cada tipo de entidad en su carga de trabajo, sin tener que configurar una regla para cada tipo de entidad. Por lo tanto, recomendamos que siempre establezca una regla para todas las entidades restantes agrupadas por tipo y acumule su peor estado para detectar rápidamente cuando todas las entidades en una capa de su stack carga de trabajo no estén operativas.

<Callout variant="important">
  Después de seis meses de inactividad, detendremos automáticamente el cálculo del estado. Puedes reactivarlo accediendo a la carga de trabajo y poniéndolo en activo.
</Callout>

## Establecer un estado de carga de trabajo estático [#configure-static]

Si desea comunicar el estado de su carga de trabajo independientemente de cualquier [cálculo automático](#configure-automatic) basado en reglas, puede establecer un valor de estado estático para su carga de trabajo a partir de uno de los [valores de estado disponibles](/docs/workload-status#obtain-status).

Esto es útil durante las tareas de mantenimiento para comunicar a otros equipos que el estado de su carga de trabajo está interrumpido, para proporcionar más información o para dar el tiempo esperado para que la carga de trabajo vuelva a estar operativa.

<Callout variant="tip">
  Si necesita comunicar regularmente un estado temporal debido a sus procesos de despliegue u operaciones, puede automatizar la configuración del estado estático integrando la [API](/docs/apis/nerdgraph/tutorials/nerdgraph-workloads-api-tutorials) en su flujo de trabajo.
</Callout>

Para configurar un estado de carga de trabajo estático:

1. Establezca un valor de estado estático.
2. Opcionalmente, escriba un breve resumen del estado y una descripción más extensa de lo que sucede con la carga de trabajo.
3. Compruebe que el estado estático esté habilitado.

Cualquier estado estático configurado siempre anula cualquier otro valor de estado [calculado automáticamente](#configure-automatic).

## Comprender el valor del estado [#understand-value]

Si va a la página <DNT>**Health status**</DNT> , puede ver cómo se configuró el cálculo del estado y el resultado de todas las reglas y/o estados estáticos que se tuvieron en cuenta para calcular el valor del estado de la carga de trabajo global.

Cualquier cambio que realice en la configuración de estado entrará en vigencia solo una vez que guarde los cambios. Para su comodidad, mientras configura las reglas automáticas o un estado estático, obtendrá una vista previa de cuál sería el resultado del estado si guardara la configuración en ese momento.

<img
  title="workloads_preview_1.png"
  alt="workloads_preview_1.png"
  src="/images/solutions_screenshot-crop_workloads-preview.webp"
/>
