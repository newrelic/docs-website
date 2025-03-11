---
title: Dimensionando a instância do agente Prometheus
tags:
  - Integrations
  - Prometheus integrations
  - Install and configure Prometheus agent
metaDescription: Scaling Prometheus agent instances
freshnessValidatedDate: never
translationType: machine
---

Quando o cluster aumenta de tamanho, há mais dados coletados pelo Prometheus e, em algum ponto, ele atinge os limites de quantidade de dados que o agente do Prometheus pode processar. O modo de falha mais comum é a falta de memória devido ao aumento da cardinalidade da série temporal. Quando isso acontece, sua instância do Prometheus começa a morrer porque precisa de mais memória, o que significa que você precisa começar a escalar.

Para analisar detalhadamente a solução, disponibilizamos um dashboard com diversos gráficos que nos ajudam a saber quando devemos dimensionar nossa solução Prometheus.

Existem duas abordagens de dimensionamento diferentes para o agente Prometheus da New Relic: vertical ou horizontal.

## Escala Vertical [#vertical]

Esse tipo de dimensionamento vem sem qualquer complexidade. É tão simples quanto atualizar a memória ou a CPU da máquina correspondente onde o nó do cluster está localizado.

No entanto, esta abordagem pode não ser escalável para grandes clusters, ou simplesmente não queremos ter um único pod que consuma tantos GBs de memória em nosso nó. Nesse caso, pode ser necessário usar a escala horizontal.

## Escala horizontal [#horizontal]

O dimensionamento horizontal, também conhecido como fragmentação, é suportado pela configuração de um parâmetro de configuração que permite executar vários servidores prometheus no modo de agente para coletar seus dados.

Se você definir o valor `sharding.total_shards_count` , o implante `StatefulSet` incluirá tantas réplicas quanto você definir. Ao usá-lo, o componente _configurador_ inclui automaticamente algumas regras de reetiquetagem adicionais, de forma que cada destino seja copiado apenas por um servidor prometheus. Essas regras dependem do endereço do destino [aplicar hash-mod](https://prometheus.io/docs/prometheus/latest/configuration/configuration/#relabel_config).

Para definir as regras de reetiquetagem para cada destino, o agente calcula um hash aplicar para o destino `__address__` fornecido e então aplica o `modulus` ao hash aplicar, sendo o módulo o número total de shards. Então, ele sabe em qual fragmento o destino copiado deve ser incluído.

Por exemplo, se você incluir o seguinte no arquivo `custom-values.yaml` :

```yaml
# (...)
sharding:
  total_shards_count: 2
# (...)
```

E então, você atualiza a versão executando:

```shell
helm upgrade my-prometheus-release newrelic-prometheus-configurator/newrelic-prometheus-agent -f custom-values.yaml
```

Então, dois servidores prometheus serão executados e cada destino será raspado apenas por um deles.

Um diagrama de exemplo seria o seguinte:

<img
  src="/images/infrastructure_diagram_prometheus-sharding.webp"
  alt="Prometheus sharding"
  title="Prometheus sharding"
/>

### Identificação do raspador de destino [#target-scraper-id]

A identificação do shard (nome do `StatefulSet Pod`) é adicionada como um rótulo `prometheus_server` a todas as métricas e você pode usá-la para entender o que a instância do Prometheus está raspando em cada destino.

Para identificar exclusivamente uma instância do servidor Prometheus em uma conta, você deve usar uma combinação dos rótulos `cluster_name` e `prometheus_server` .

### Autométrica [#self-metrics]

A autométrica do servidor Prometheus deve ser coletada de todos os servidores prometheus, portanto, as regras adicionais quando o sharding é configurado não se aplicam ao trabalho de coleta da autométrica do prometheus. Isso é possível porque o agente aceita a sinalização `skip_sharding` nos trabalhos `static_target` . Este parâmetro já está configurado no trabalho de autométrica padrão.

### Limitações [#limitations]

Se você incluir trabalhos de raspagem adicionais na configuração como `extra_scrape_configs`, como esse campo contém a definição bruta de trabalhos do prometheus, o agente não incluirá as regras correspondentes à configuração de sharding e, como resultado, o destino correspondente será descartado por todos os servidores prometheus.

Atualmente, o escalonamento automático não é compatível. Para aumentar ou diminuir o número de fragmentos, é necessário atualizar as configurações do gráfico, o que reinicia o pod do Prometheus.
