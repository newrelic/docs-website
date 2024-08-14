---
title: Escalando la instancia del agente Prometheus
tags:
  - Integrations
  - Prometheus integrations
  - Install and configure Prometheus agent
metaDescription: Scaling Prometheus agent instances
freshnessValidatedDate: never
translationType: machine
---

Cuando el clúster crece en tamaño, Prometheus recopila más datos y, en algún momento, alcanza los límites de la cantidad de datos que el agente Prometheus puede procesar. El modo de falla más común es quedarse sin memoria debido a la mayor cardinalidad de las series temporales. Cuando esto sucede, tu instancia de Prometheus comienza a morir porque necesita más memoria, lo que significa que necesitas comenzar a escalar.

Para analizar la solución en detalle, proporcionamos un dashboard con diferentes gráficos que nos ayudan a saber cuándo tenemos que escalar nuestra solución Prometheus.

Hay dos enfoques de escala diferentes para el agente Prometheus de New Relic: vertical u horizontal.

## Escalado vertical [#vertical]

Este tipo de escalado no presenta ninguna complejidad. Es tan simple como actualizar la memoria o la CPU de la máquina correspondiente donde se encuentra el nodo del clúster.

Sin embargo, este enfoque puede no ser escalable para grandes clústeres, o simplemente no queremos tener un solo pod que consuma tantos GB de memoria en nuestro nodo. Si es así, es posible que necesite utilizar una escala horizontal.

## Escala horizontal [#horizontal]

El escalado horizontal, también conocido como fragmentación, se admite mediante la configuración de un parámetro de configuración que permite ejecutar varios servidores Prometheus en modo agente para recopilar sus datos.

Si defines el valor `sharding.total_shards_count` , desplegar `StatefulSet` incluirá tantas réplicas como definas. Cuando lo usa, el componente _configurador_ incluye automáticamente algunas reglas de reetiquetado adicionales, por lo que cada objetivo solo es eliminado por un servidor Prometheus. Esas reglas se basan en la dirección [hash-mod](https://prometheus.io/docs/prometheus/latest/configuration/configuration/#relabel_config) del objetivo.

Para establecer las reglas de reetiquetado para cada objetivo, el agente calcula un hash para el objetivo dado `__address__` y luego aplica el `modulus` al hash, siendo el módulo el número total de fragmentos. Entonces, sabe en qué fragmento debe incluirse el objetivo raspado.

Por ejemplo, si incluye lo siguiente en el archivo `custom-values.yaml` :

```yaml
# (...)
sharding:
  total_shards_count: 2
# (...)
```

Y luego, actualiza la versión ejecutando:

```shell
helm upgrade my-prometheus-release newrelic-prometheus-configurator/newrelic-prometheus-agent -f custom-values.yaml
```

Luego, se ejecutarán dos servidores Prometheus y cada objetivo solo será eliminado por uno de ellos.

Un diagrama de ejemplo sería el siguiente:

<img
  src="/images/infrastructure_diagram_prometheus-sharding.webp"
  alt="Prometheus sharding"
  title="Prometheus sharding"
/>

### Identificación del raspador objetivo [#target-scraper-id]

La identificación del fragmento (nombre del `StatefulSet Pod`) se agrega como una etiqueta `prometheus_server` a todas las métricas y puede usarla para comprender qué instancia de Prometheus está eliminando cada objetivo.

Para identificar de forma única una instancia del servidor Prometheus dentro de una cuenta, debe utilizar una combinación de las etiquetas `cluster_name` y `prometheus_server` .

### Autométrica [#self-metrics]

El servidor Prometheus self-métrica debe recopilarse de todos los servidores Prometheus, por lo que las reglas adicionales cuando se configura la fragmentación no se aplican al trabajo de recopilar el Prometheus self-métrica. Esto es posible porque el agente acepta el indicador `skip_sharding` en los trabajos `static_target` . Este parámetro ya está configurado en el trabajo autométrico predeterminado.

### Limitaciones [#limitations]

Si incluye trabajos de raspado adicionales en la configuración como `extra_scrape_configs`, ya que ese campo contiene la definición sin formato de trabajos de Prometheus, el agente no incluirá las reglas correspondientes a la configuración de fragmentación y, como resultado, el objetivo correspondiente será descartado por Todos los servidores Prometheus.

Actualmente, no se admite el escalado automático. Para aumentar o disminuir la cantidad de fragmentos, debe actualizar la configuración del gráfico, lo que reinicia el pod de Prometheus.
