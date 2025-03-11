---
title: Envía métrica de tu producto
metaDescription: With our Metric API you can send data from your library or platform.
freshnessValidatedDate: never
translationType: machine
---

<Callout variant="tip">
  Este procedimiento es parte del curso que le muestra cómo crear un inicio rápido. Si aún no lo hiciste, consulta la [introducción del curso](/docs/new-relic-solutions/build-nr-ui/contribute-nr-io/contribute-quickstart).

  Cada procedimiento de este curso se basa en el anterior, así que cerciorar de [implementar su aplicación](/docs/new-relic-solutions/build-nr-ui/contribute-nr-io/deploy-your-application) antes de continuar con este.
</Callout>

Las métricas son medidas agregadas derivadas del rendimiento y comportamiento del sistema. Si su producto es una base de datos, puede enviar métricas como utilización de CPU, utilización de memoria y consulta de rendimiento. Tenga en cuenta que las métricas generalmente solo se usan si desea limitar la cantidad de datos enviados a New Relic. Tenga en cuenta que muchas métricas, como la tasa de errores y el rendimiento, se pueden calcular agregando evento.

New Relic le ofrece una variedad de formas de instrumentar su aplicación para enviar métricas a nuestra [APImétrica](/docs/data-apis/ingest-apis/metric-api/introduction-metric-api). En esta lección, enviará métrica desde su producto empleando nuestro kit de desarrollo de software (SDK) de telemetría.

## Emplee nuestro SDK [#use-sdk]

Ofrecemos un [SDK de telemetría de](/docs/data-apis/ingest-apis/telemetry-sdks-report-custom-telemetry-data) código abierto en varios de los lenguajes de programación más populares. Estos envían datos a nuestra API de ingesta de datos, incluida nuestra API métrica. De estos SDK de lenguajes, Python, Java, Node/TypeScript y Go funcionan con la API métrica.

En esta lección, aprenderá cómo instalar y usar el [SDK de telemetría de Python](https://github.com/newrelic/newrelic-telemetry-sdk-python) para enviar métrica a New Relic.

<Steps>
  <Step>
    Cambie al directorio `send-metrics/flashDB` del [repositorio del curso](https://github.com/newrelic-experimental/build-a-quickstart-lab).

    ```bash
    cd ../send-metrics/flashDB
    ```
  </Step>

  <Step>
    Emplee `pip` para instalar el paquete `newrelic-telemetry-sdk` .

    ```bash
    pip install newrelic-telemetry-sdk
    ```
  </Step>

  <Step>
    Almacene su clave de licencia de New Relic en una variable de entorno llamada `$NEW_RELIC_LICENSE_KEY`.

    ```bash
    export NEW_RELIC_LICENSE_KEY=<YOUR_USER_KEY>
    ```

    <Callout variant="tip">
      Puede encontrar su clave de licencia de New Relic en [la configuración de su cuenta](/docs/apis/intro-apis/new-relic-api-keys).
    </Callout>
  </Step>
</Steps>

A continuación, se familiarizará con la lógica de la aplicación.

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

## Familiarízate con la aplicación. [#familiarize-with-app]

Abra el archivo `db.py` en el IDE de su elección y familiarizar con la lógica de la aplicación.

Esta demostración emplea una aplicación Python ficticia que imita las operaciones Crear, Leer, Actualizar y Eliminar (CRUD).

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

Los `read`, `create`, `update` y `delete` son los métodos ficticios para imitar las operaciones CRUD. Para cada operación CRUD, `stat` respectivo se incrementa para reflejar que se realizó la operación. A continuación, envía estos `stats` datos a New Relic.

## Enviar métrica a New Relic [#send-metrics]

Hay 3 tipos diferentes de métrica:

* **GaugeMetric**: envía un valor único en un único momento.
* **CountMetric**: rastrea el número total de ocurrencias de un evento.
* **SummaryMetric**: realiza un seguimiento de los valores de recuento, suma, mínimo y máximo a lo largo del tiempo.

A continuación, instrumente su aplicación para enviar estas métricas.

<Steps>
  <Step>
    En `db.py`, configure el `MetricClient`.

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
    Instrumenta tu aplicación para enviar la siguiente métrica a New Relic:

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

      Aquí, configura su plataforma para usar `GaugeMetric`, `CountMetric` y `SummaryMetric` para informar métricamente a New Relic.
  </Step>

  <Step>
    Modifique el módulo `try_send` para enviar estas métricas cada 2 segundos.

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

    Tu plataforma ahora reportará todas las métricas configuradas cada 2 segundos.
  </Step>

  <Step>
    Navegue hasta la raíz de su aplicación en `build-a-quickstart-lab/send-metrics/flashDB`.
  </Step>

  <Step>
    Ejecute sus servicios para verificar que esté reportando métrica.

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

## Opciones alternativas

Si el SDK de idiomas no se ajusta a tus necesidades o quieres algo más personalizado para enviar métricas a New Relic, prueba una de nuestras otras opciones:

* **Implementación manual**: si nuestro SDK en su idioma preferido no es compatible con métrica, siempre puede instrumentar manualmente su propia biblioteca para realizar una solicitud POST a la New Relic Metric API.
* **Datos de Prometheus**: los datos de Prometheus se pueden enviar a New Relic de dos formas: escritura remota y OpenMetrics. En un nivel muy alto, deberías usar escritura remota si gestionas tus propios servidores Prometheus y OpenMetrics si no lo haces.

En este procedimiento, instrumentaste tu servicio para enviar métrica a New Relic. A continuación, úselo para enviar evento.

<Callout variant="tip">
  Este procedimiento es parte del curso que le muestra cómo crear un inicio rápido. Continúe con la siguiente lección, [envíe el evento desde su producto](/docs/new-relic-solutions/build-nr-ui/contribute-nr-io/send-events).
</Callout>
