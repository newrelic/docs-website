---
title: Rubí métrica personalizada
tags:
  - Agents
  - Ruby agent
  - API guides
metaDescription: 'For information about customizing New Relic''s Ruby agent API to collect additional metrics, start here.'
freshnessValidatedDate: never
translationType: machine
---

Métrica personalizada le permite registrar datos de rendimiento arbitrarios a través de una llamada API (por ejemplo, datos de tiempo o recursos informáticos). Luego use el [generador de consultas](/docs/query-your-data/explore-query-data/query-builder/introduction-query-builder) para crear gráficos y realizar un seguimiento de esa métrica. Puedes utilizar métrica personalizada para unificar tu monitoreo dentro de New Relic.

<Callout variant="caution">
  Recopilar demasiadas métricas puede afectar el rendimiento de su aplicación y de su agente New Relic. Para evitar problemas de datos, mantenga el número total de métricas únicas personalizadas por debajo de 2000.
</Callout>

## Denominación métrica [#metric_names]

Los nombres métricos identifican valores de datos específicos rastreados por New Relic. Al utilizar la API del agente Ruby de New Relic para realizar un seguimiento de las métricas personalizadas, es importante tener en cuenta el nombre de las métricas y cómo se agregarán los valores.

Un nombre de métrica personalizada consta del prefijo `Custom/`, el nombre de clase o categoría y una etiqueta, cada uno de ellos separado por una barra diagonal `/`: `Custom/<class>/<method>` o `Custom/<category>/<name>` (por ejemplo, `Custom/MyClass/My_method`).

<CollapserGroup>
  <Collapser
    id="metric_names"
    title="Nombres y caminos métricos"
  >
    Los nombres métricos son caminos delimitados por una barra diagonal `/`. Para instrumentación personalizada utilice este patrón:

    ```
    <category>/<class>/<method>
    ```

    Para anular el nombre de métrica predeterminado, pase un segundo argumento a `add_method_tracer`. Esto puede ser necesario para especificar una categoría distinta a la `Custom` predeterminada, o si el método y el nombre de la clase no representan bien la métrica.

    Las categorías reservadas incluyen:

    * Registro activo
    * Apdex
    * UPC
    * Controlador
    * Base de datos
    * Memoria
    * Vista
    * Costumbre

    <Callout variant="tip">
      Para nombres métricos personalizados, utilice `Custom/<class>/<method>` o `Custom/<category>/<name>`
    </Callout>
  </Collapser>

  <Collapser
    id="metrics_and_stats"
    title="Métrica y estadísticas en el agente Ruby"
  >
    Hay dos estructuras de datos básicas que se utilizan para recopilar datos métricos: `MetricSpec` y `Stats`.

    Un `MetricSpec` es un identificador del que tenemos datos. El siguiente pseudo Ruby define una métrica:

    ```rb
    class MetricSpec
      attr_accessor :name    # String - metric name
      attr_accessor :scope   # String - current controller action
    end
    ```

    El nombre identifica lo que representa la métrica. El alcance opcional es el nombre de la acción del controlador que maneja la solicitud actual. Una métrica es "global" si el alcance está vacío.

    Los valores de métrica los registra `Stats`. `Stats` normalmente recopila datos sobre la ejecución del método, pero puede almacenar cualquier dato interesante. El siguiente pseudo Ruby define `Stats`:

    ```rb
    class Stats
      attr_accessor :call_count           # Integer - method invocation count
      attr_accessor :total_call_time      # Float - total method call time (in seconds)
      attr_accessor :total_exclusive_time # Float - total time spent in the traced method minus any child time (in seconds)
      attr_accessor :min_call_time        # Float - the smallest method invocation time (in seconds)
      attr_accessor :max_call_time        # Float - the largest method invocation time (in seconds)
      attr_accessor :sum_of_squares       # Float - the sum of squares of response times - used for standard deviation computation
      attr_accessor :begin_time           # Time - the start of the time window for this data
      attr_accessor :end_time             # Time - end of the time window for this data
    end
    ```
  </Collapser>

  <Collapser
    id="stat_policy"
    title="Política de agregación de estadísticas"
  >
    Una de las fortalezas de New Relic es su capacidad para agregar datos a lo largo del tiempo. (La agregación es el acto de combinar varias cosas en una). Al recopilar métrica personalizada, puede ser importante conocer la política de agregación al recopilar métrica personalizada. Éstas incluyen:

    * `call_count`: Suma
    * `total_call_time`: Suma
    * `total_exclusive_time`: Suma
    * `min_call_time`: Min() de cada min_call_time
    * `max_call_time`: Max() de cada max_call_time
    * `sum_of_squares`: Suma
    * `begin_time`: Min() de cada begin_time
    * `end_time`: Max() de cada end_time
  </Collapser>
</CollapserGroup>

## Registro métrico personalizado [#recording-custom-metrics]

La API pública para registrar datos métricos consta de dos métodos en `NewRelic::Agent`, [`record_metric`](#record_metric) y [`increment_metric`](#increment_metric).

<Callout variant="tip">
  Tanto `record_metric` como `increment_metric` son seguros para subprocesos.
</Callout>

### record_metric(metric_name, value) [#record_metric]

`record_metric` debe usarse para registrar una métrica basada en eventos, generalmente asociada con una duración particular. `metric_name` debe ser una cadena que siga las reglas de nomenclatura métricas estándar. `value` normalmente será numérico, pero también puede ser un hash.

Cuando `value` es un valor numérico, debe representar la magnitud de una medida asociada con un evento, como la duración de una llamada a un método en particular.

Cuando `value` es un hash, debe contener claves `:count`, `:total`, `:min`, `:max` y `:sum_of_squares`, todas con valores numéricos. Este formulario es útil si deseas realizar métricas agregadas por tu cuenta e informarlas periódicamente (por ejemplo, desde un hilo en segundo plano). Las estadísticas proporcionadas se agregarán con los valores recopilados previamente para la misma métrica. Los nombres de las claves hash se han elegido para que coincidan con los nombres de las claves utilizadas por la API de la plataforma.

### increment_metric(metric_name, amount=1) [#increment_metric]

`increment_metric` debe usarse para actualizar una métrica que actúa como un contador simple. El recuento de la métrica seleccionada se incrementará en la cantidad especificada.

## Ejemplo de métrica personalizada [#example]

A continuación se muestra un ejemplo que muestra cómo se puede utilizar métrica para realizar un seguimiento del flujo de divisas a través de un sitio:

```rb
class Cart

  def checkout()
    amount = compute_cart_total    # computes the amount to charge the customer

    ::NewRelic::Agent.record_metric('Custom/Cart/charge_amount', amount)

    charge_customer(amount)
    ...
  end
end
```

Para obtener más información sobre cómo se agregan los datos a lo largo del tiempo, consulte [Política de agregación de estadísticas](/docs/ruby/ruby-custom-metric-naming#stat_policy).

## Ver métrica personalizada [#viewing-custom]

Para ver estas métricas personalizadas, utilice el [generador de consultas](/docs/query-your-data/explore-query-data/query-builder/introduction-query-builder) para buscar métricas, crear gráficos personalizables y agregar esos gráficos al panel.
