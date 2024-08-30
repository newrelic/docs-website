---
title: Envie métricas do seu produto
metaDescription: With our Metric API you can send data from your library or platform.
freshnessValidatedDate: never
translationType: machine
---

<Callout variant="tip">
  Este procedimento faz parte do curso que ensina como criar um início rápido. Se ainda não o fez, confira a [introdução do curso](/docs/new-relic-solutions/build-nr-ui/contribute-nr-io/contribute-quickstart).

  Cada procedimento neste curso se baseia no anterior, portanto, certifique-se de [implantar seu aplicativo](/docs/new-relic-solutions/build-nr-ui/contribute-nr-io/deploy-your-application) antes de prosseguir com este.
</Callout>

Métricas são medidas agregadas derivadas do desempenho e comportamentos do sistema. Se o seu produto for um banco de dados, você poderá enviar métricas como utilização de CPU, utilização de memória e taxas de transferência de consulta. Observe que as métricas geralmente são usadas apenas se você deseja limitar a quantidade de dados enviados para New Relic. Note-se que muitas métricas, tais como taxas de erros e taxas de transferência, podem ser calculadas por agregação de eventos.

New Relic oferece várias maneiras de instrumentar seu aplicativo para enviar métricas para nossa [APImétrica](/docs/data-apis/ingest-apis/metric-api/introduction-metric-api). Nesta lição, você envia métricas do seu produto usando nosso kit de desenvolvimento de software de telemetria (SDK).

## Use nosso SDK [#use-sdk]

Oferecemos um [SDK de telemetria](/docs/data-apis/ingest-apis/telemetry-sdks-report-custom-telemetry-data) de código aberto em diversas das linguagens de programação mais populares. Eles enviam dados para nossa API de ingestão de dados, incluindo nossa API métrica. Desses SDKs de linguagem, Python, Java, Node/TypeScript e Go funcionam com a API métrica.

Nesta lição, você aprende como instalar e usar o [SDK de telemetria Python](https://github.com/newrelic/newrelic-telemetry-sdk-python) para enviar métricas para o New Relic.

<Steps>
  <Step>
    Mude para o diretório `send-metrics/flashDB` do [repositório do curso](https://github.com/newrelic-experimental/build-a-quickstart-lab).

    ```bash
    cd ../send-metrics/flashDB
    ```
  </Step>

  <Step>
    Use `pip` para instalar o pacote `newrelic-telemetry-sdk` .

    ```bash
    pip install newrelic-telemetry-sdk
    ```
  </Step>

  <Step>
    Armazene sua chave de licença do New Relic em uma variável de ambiente chamada `$NEW_RELIC_LICENSE_KEY`.

    ```bash
    export NEW_RELIC_LICENSE_KEY=<YOUR_USER_KEY>
    ```

    <Callout variant="tip">
      Você pode encontrar sua chave de licença do New Relic nas [configurações da sua conta](/docs/apis/intro-apis/new-relic-api-keys).
    </Callout>
  </Step>
</Steps>

A seguir, você se familiarizará com a lógica do aplicativo.

```python fileName=db.py
import os
import random
import datetime

db = {}
stats = {
    "read_response_times": [],
    "read_errors": 0,
    "read_count": 0,
    "create_response_times": [],
    "create_errors": 0,
    "create_count": 0,
    "update_response_times": [],
    "update_errors": 0,
    "update_count": 0,
    "delete_response_times": [],
    "delete_errors": 0,
    "delete_count": 0,
    "cache_hit": 0,
}
last_push = {
    "read": datetime.datetime.now(),
    "create": datetime.datetime.now(),
    "update": datetime.datetime.now(),
    "delete": datetime.datetime.now(),
}

def read(key):

    print(f"Reading...")

    if random.randint(0, 30) > 10:
        stats["cache_hit"] += 1

    stats["read_response_times"].append(random.uniform(0.5, 1.0))
    if random.choice([True, False]):
        stats["read_errors"] += 1
    stats["read_count"] += 1
    try_send("read")

def create(key, value):

    print(f"Writing...")

    db[key] = value
    stats["create_response_times"].append(random.uniform(0.5, 1.0))
    if random.choice([True, False]):
        stats["create_errors"] += 1
    stats["create_count"] += 1
    try_send("create")

def update(key, value):

    print(f"Updating...")

    db[key] = value
    stats["update_response_times"].append(random.uniform(0.5, 1.0))
    if random.choice([True, False]):
        stats["update_errors"] += 1
    stats["update_count"] += 1
    try_send("update")

def delete(key):

    print(f"Deleting...")

    db.pop(key, None)
    stats["delete_response_times"].append(random.uniform(0.5, 1.0))
    if random.choice([True, False]):
        stats["delete_errors"] += 1
    stats["delete_count"] += 1
    try_send("delete")

def try_send(type_):

    print("try_send")

def clear(type_):
    stats[f"{type_}_response_times"] = []
    stats[f"{type_}_errors"] = 0
    stats["cache_hit"] = 0
    stats[f"{type_}_count"] = 0
    last_push[type_] = datetime.datetime.now()

```

## Familiarize-se com o aplicativo [#familiarize-with-app]

Abra o arquivo `db.py` no IDE de sua preferência e familiarize-se com a lógica do aplicativo.

Esta demonstração usa um aplicativo Python fictício que imita as operações Criar, Ler, Atualizar e Excluir (CRUD).

```python fileName=db.py
import os
import random
import datetime

db = {}
stats = {
    "read_response_times": [],
    "read_errors": 0,
    "read_count": 0,
    "create_response_times": [],
    "create_errors": 0,
    "create_count": 0,
    "update_response_times": [],
    "update_errors": 0,
    "update_count": 0,
    "delete_response_times": [],
    "delete_errors": 0,
    "delete_count": 0,
    "cache_hit": 0,
}
last_push = {
    "read": datetime.datetime.now(),
    "create": datetime.datetime.now(),
    "update": datetime.datetime.now(),
    "delete": datetime.datetime.now(),
}

def read(key):

    print(f"Reading...")

    if random.randint(0, 30) > 10:
        stats["cache_hit"] += 1

    stats["read_response_times"].append(random.uniform(0.5, 1.0))
    if random.choice([True, False]):
        stats["read_errors"] += 1
    stats["read_count"] += 1
    try_send("read")

def create(key, value):

    print(f"Writing...")

    db[key] = value
    stats["create_response_times"].append(random.uniform(0.5, 1.0))
    if random.choice([True, False]):
        stats["create_errors"] += 1
    stats["create_count"] += 1
    try_send("create")

def update(key, value):

    print(f"Updating...")

    db[key] = value
    stats["update_response_times"].append(random.uniform(0.5, 1.0))
    if random.choice([True, False]):
        stats["update_errors"] += 1
    stats["update_count"] += 1
    try_send("update")

def delete(key):

    print(f"Deleting...")

    db.pop(key, None)
    stats["delete_response_times"].append(random.uniform(0.5, 1.0))
    if random.choice([True, False]):
        stats["delete_errors"] += 1
    stats["delete_count"] += 1
    try_send("delete")

def try_send(type_):

    print("try_send")

def clear(type_):
    stats[f"{type_}_response_times"] = []
    stats[f"{type_}_errors"] = 0
    stats["cache_hit"] = 0
    stats[f"{type_}_count"] = 0
    last_push[type_] = datetime.datetime.now()

```

Os `read`, `create`, `update` e `delete` são os métodos fictícios para imitar operações CRUD. Para cada operação CRUD, o respectivo `stat` é incrementado para refletir que a operação foi executada. Em seguida, você envia esses dados `stats` para o New Relic.

## Enviar métrica para New Relic [#send-metrics]

Existem 3 tipos diferentes de métricas:

* **GaugeMetric**: envia um único valor em um único momento.
* **CountMetric**: rastreia o número total de ocorrências de um evento.
* **SummaryMetric**: rastreia os valores de contagem, soma, mínimo e máximo ao longo do tempo.

A seguir, instrumento seu aplicativo para enviar essas métricas.

<Steps>
  <Step>
    Em `db.py`, configure o `MetricClient`.

    ```python fileName=db.py
    import os
    import random
    import datetime

    from newrelic_telemetry_sdk import MetricClient

    metric_client = MetricClient(os.environ["NEW_RELIC_LICENSE_KEY"])

    db = {}
    stats = {
        "read_response_times": [],
        "read_errors": 0,
        "read_count": 0,
        "create_response_times": [],
        "create_errors": 0,
        "create_count": 0,
        "update_response_times": [],
        "update_errors": 0,
        "update_count": 0,
        "delete_response_times": [],
        "delete_errors": 0,
        "delete_count": 0,
        "cache_hit": 0,
    }
    last_push = {
        "read": datetime.datetime.now(),
        "create": datetime.datetime.now(),
        "update": datetime.datetime.now(),
        "delete": datetime.datetime.now(),
    }

    def read(key):

        print(f"Reading...")

        if random.randint(0, 30) > 10:
            stats["cache_hit"] += 1

        stats["read_response_times"].append(random.uniform(0.5, 1.0))
        if random.choice([True, False]):
            stats["read_errors"] += 1
        stats["read_count"] += 1
        try_send("read")

    def create(key, value):

        print(f"Writing...")

        db[key] = value
        stats["create_response_times"].append(random.uniform(0.5, 1.0))
        if random.choice([True, False]):
            stats["create_errors"] += 1
        stats["create_count"] += 1
        try_send("create")

    def update(key, value):

        print(f"Updating...")

        db[key] = value
        stats["update_response_times"].append(random.uniform(0.5, 1.0))
        if random.choice([True, False]):
            stats["update_errors"] += 1
        stats["update_count"] += 1
        try_send("update")

    def delete(key):

        print(f"Deleting...")

        db.pop(key, None)
        stats["delete_response_times"].append(random.uniform(0.5, 1.0))
        if random.choice([True, False]):
            stats["delete_errors"] += 1
        stats["delete_count"] += 1
        try_send("delete")

    def try_send(type_):

        print("try_send")

    def clear(type_):
        stats[f"{type_}_response_times"] = []
        stats[f"{type_}_errors"] = 0
        stats["cache_hit"] = 0
        stats[f"{type_}_count"] = 0
        last_push[type_] = datetime.datetime.now()
    ```
  </Step>

  <Step>
    Instrumento seu aplicativo para enviar a seguinte métrica para New Relic:

    * `keys`
    * `db_size`
    * `errors`
    * `cache_hits`
    * `response_times`

      ```python fileName=db.py

      import os
      import random
      import datetime
      from sys import getsizeof

      from newrelic_telemetry_sdk import MetricClient, GaugeMetric, CountMetric, SummaryMetric

      metric_client = MetricClient(os.environ["NEW_RELIC_LICENSE_KEY"])

      db = {}
      stats = {
          "read_response_times": [],
          "read_errors": 0,
          "read_count": 0,
          "create_response_times": [],
          "create_errors": 0,
          "create_count": 0,
          "update_response_times": [],
          "update_errors": 0,
          "update_count": 0,
          "delete_response_times": [],
          "delete_errors": 0,
          "delete_count": 0,
          "cache_hit": 0,
      }
      last_push = {
          "read": datetime.datetime.now(),
          "create": datetime.datetime.now(),
          "update": datetime.datetime.now(),
          "delete": datetime.datetime.now(),
      }

      def read(key):

          print(f"Reading...")

          if random.randint(0, 30) > 10:
              stats["cache_hit"] += 1

          stats["read_response_times"].append(random.uniform(0.5, 1.0))
          if random.choice([True, False]):
              stats["read_errors"] += 1
          stats["read_count"] += 1
          try_send("read")

      def create(key, value):

          print(f"Writing...")

          db[key] = value
          stats["create_response_times"].append(random.uniform(0.5, 1.0))
          if random.choice([True, False]):
              stats["create_errors"] += 1
          stats["create_count"] += 1
          try_send("create")

      def update(key, value):

          print(f"Updating...")

          db[key] = value
          stats["update_response_times"].append(random.uniform(0.5, 1.0))
          if random.choice([True, False]):
              stats["update_errors"] += 1
          stats["update_count"] += 1
          try_send("update")

      def delete(key):

          print(f"Deleting...")

          db.pop(key, None)
          stats["delete_response_times"].append(random.uniform(0.5, 1.0))
          if random.choice([True, False]):
              stats["delete_errors"] += 1
          stats["delete_count"] += 1
          try_send("delete")

      def try_send(type_):

          print("try_send")

      def send_metrics(type_, interval_ms):

          print("sending metrics...")

          keys = GaugeMetric("fdb_keys", len(db))
          db_size = GaugeMetric("fdb_size", getsizeof(db))

          errors = CountMetric(
              name=f"fdb_{type_}_errors",
              value=stats[f"{type_}_errors"],
              interval_ms=interval_ms
          )

          cache_hits = CountMetric(
              name=f"fdb_cache_hits",
              value=stats["cache_hit"],
              interval_ms=interval_ms
          )

          response_times = stats[f"{type_}_response_times"]
          response_time_summary = SummaryMetric(
              f"fdb_{type_}_responses",
              count=len(response_times),
              min=min(response_times),
              max=max(response_times),
              sum=sum(response_times),
              interval_ms=interval_ms,
          )

          batch = [keys, db_size, errors, cache_hits, response_time_summary]
          response = metric_client.send_batch(batch)
          response.raise_for_status()
          print("Sent metrics successfully!")
          clear(type_)

      def clear(type_):
          stats[f"{type_}_response_times"] = []
          stats[f"{type_}_errors"] = 0
          stats["cache_hit"] = 0
          stats[f"{type_}_count"] = 0
          last_push[type_] = datetime.datetime.now()

      ```

      Aqui, você configura sua plataforma para usar `GaugeMetric`, `CountMetric` e `SummaryMetric` para reportar métricas para New Relic.
  </Step>

  <Step>
    Altere o módulo `try_send` para enviar essas métricas a cada 2 segundos.

    ```python fileName=db.py
    import os
    import random
    import datetime
    from sys import getsizeof

    from newrelic_telemetry_sdk import MetricClient, GaugeMetric, CountMetric, SummaryMetric

    metric_client = MetricClient(os.environ["NEW_RELIC_LICENSE_KEY"])

    db = {}
    stats = {
        "read_response_times": [],
        "read_errors": 0,
        "read_count": 0,
        "create_response_times": [],
        "create_errors": 0,
        "create_count": 0,
        "update_response_times": [],
        "update_errors": 0,
        "update_count": 0,
        "delete_response_times": [],
        "delete_errors": 0,
        "delete_count": 0,
        "cache_hit": 0,
    }
    last_push = {
        "read": datetime.datetime.now(),
        "create": datetime.datetime.now(),
        "update": datetime.datetime.now(),
        "delete": datetime.datetime.now(),
    }

    def read(key):

        print(f"Reading...")

        if random.randint(0, 30) > 10:
            stats["cache_hit"] += 1

        stats["read_response_times"].append(random.uniform(0.5, 1.0))
        if random.choice([True, False]):
            stats["read_errors"] += 1
        stats["read_count"] += 1
        try_send("read")

    def create(key, value):

        print(f"Writing...")

        db[key] = value
        stats["create_response_times"].append(random.uniform(0.5, 1.0))
        if random.choice([True, False]):
            stats["create_errors"] += 1
        stats["create_count"] += 1
        try_send("create")

    def update(key, value):

        print(f"Updating...")

        db[key] = value
        stats["update_response_times"].append(random.uniform(0.5, 1.0))
        if random.choice([True, False]):
            stats["update_errors"] += 1
        stats["update_count"] += 1
        try_send("update")

    def delete(key):

        print(f"Deleting...")

        db.pop(key, None)
        stats["delete_response_times"].append(random.uniform(0.5, 1.0))
        if random.choice([True, False]):
            stats["delete_errors"] += 1
        stats["delete_count"] += 1
        try_send("delete")

    def try_send(type_):

        print("try_send")

        now = datetime.datetime.now()
        interval_ms = (now - last_push[type_]).total_seconds() * 1000
        if interval_ms >= 2000:
            send_metrics(type_, interval_ms)

    def send_metrics(type_, interval_ms):

        print("sending metrics...")

        keys = GaugeMetric("fdb_keys", len(db))
        db_size = GaugeMetric("fdb_size", getsizeof(db))

        errors = CountMetric(
            name=f"fdb_{type_}_errors",
            value=stats[f"{type_}_errors"],
            interval_ms=interval_ms
        )

        cache_hits = CountMetric(
            name=f"fdb_cache_hits",
            value=stats["cache_hit"],
            interval_ms=interval_ms
        )

        response_times = stats[f"{type_}_response_times"]
        response_time_summary = SummaryMetric(
            f"fdb_{type_}_responses",
            count=len(response_times),
            min=min(response_times),
            max=max(response_times),
            sum=sum(response_times),
            interval_ms=interval_ms,
        )

        batch = [keys, db_size, errors, cache_hits, response_time_summary]
        response = metric_client.send_batch(batch)
        response.raise_for_status()
        print("Sent metrics successfully!")
        clear(type_)

    def clear(type_):
        stats[f"{type_}_response_times"] = []
        stats[f"{type_}_errors"] = 0
        stats["cache_hit"] = 0
        stats[f"{type_}_count"] = 0
        last_push[type_] = datetime.datetime.now()
    ```

    Sua plataforma agora reportará todas as métricas configuradas a cada 2 segundos.
  </Step>

  <Step>
    Navegue até a raiz do seu aplicativo em `build-a-quickstart-lab/send-metrics/flashDB`.
  </Step>

  <Step>
    Execute seus serviços para verificar se está reportando métrica.

    ```bash animate
    python simulator.py
    [output] Writing...
    [output] try_send
    [output] Writing...
    [output] try_send
    [output] Reading...
    [output] try_send
    [output] Reading...
    [output] try_send
    [output] Writing...
    [output] try_send
    [output] Writing...
    [output] try_send
    [output] Reading...
    [output] sending metrics...
    [output] {green}Sent metrics successfully!
    ```
  </Step>
</Steps>

## Opções alternativas

Se o SDK da linguagem não atender às suas necessidades ou você quiser algo mais customizado para enviar métricas para a New Relic, experimente uma de nossas outras opções:

* **Implementação Manual**: Se nosso SDK em sua linguagem preferida não suporta métrica, você pode sempre instrumentar manualmente sua própria biblioteca para fazer uma solicitação POST para a New Relic Metric API.
* **Dados do Prometheus**: os dados do Prometheus podem ser enviados para o New Relic de duas maneiras: gravação remota e OpenMetrics. Em um nível muito alto, você deve usar gravação remota se gerenciar seus próprios servidores Prometheus e OpenMetrics se não gerenciar.

Neste procedimento você instrumentou seu serviço para enviar métricas para New Relic. A seguir, instrumento-o para enviar o evento.

<Callout variant="tip">
  Este procedimento faz parte do curso que ensina como criar um início rápido. Continue para a próxima lição, [envie um evento do seu produto](/docs/new-relic-solutions/build-nr-ui/contribute-nr-io/send-events).
</Callout>
