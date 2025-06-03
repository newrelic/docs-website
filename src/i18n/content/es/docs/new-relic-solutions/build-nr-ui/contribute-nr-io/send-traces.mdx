---
title: Envía traza de tu producto
metaDescription: With our Trace API you can send data from your library or platform.
freshnessValidatedDate: never
translationType: machine
---

<Callout variant="tip">
  Este procedimiento es parte del curso que le muestra cómo crear un inicio rápido. Si aún no lo hiciste, consulta la [introducción del curso](/docs/new-relic-solutions/build-nr-ui/contribute-nr-io/contribute-quickstart).

  Cada procedimiento de este curso se basa en el anterior, así que cerciorar de completar el último procedimiento y [envíe logs desde su producto](/docs/new-relic-solutions/build-nr-ui/contribute-nr-io/send-logs) antes de continuar con este.
</Callout>

Traza captura detalles de una sola solicitud a medida que avanza a través de un sistema. Están compuestos por tramos, que son estructuras de datos que representan operaciones individuales en el flujo de ejecución.

New Relic le proporciona una variedad de formas de instrumentar su aplicación para enviar traza a nuestra [Trace API](/docs/distributed-tracing/trace-api/introduction-trace-api).

En esta lección, aprenderá a enviar trazas desde su producto empleando nuestro kit de desarrollo de software (SDK) de telemetría.

```python fileName=db.py

import os
import random
import datetime
from sys import getsizeof
import psutil

from newrelic_telemetry_sdk import MetricClient, GaugeMetric, CountMetric, SummaryMetric
from newrelic_telemetry_sdk import EventClient, Event
from newrelic_telemetry_sdk import LogClient, Log

metric_client = MetricClient(os.environ["NEW_RELIC_LICENSE_KEY"])
event_client = EventClient(os.environ["NEW_RELIC_LICENSE_KEY"])
log_client = LogClient(os.environ["NEW_RELIC_LICENSE_KEY"])

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
        send_event(type_)
        send_logs()

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

def send_event(type_):

    print("sending event...")

    count = Event(
        "fdb_method", {"method": type_}
    )

    response = event_client.send_batch(count)
    response.raise_for_status()
    print("Event sent successfully!")

def send_logs():

    print("sending log...")

    process = psutil.Process(os.getpid())
    memory_usage = process.memory_percent()

    log = Log("FlashDB is using " + str(round(memory_usage * 100, 2)) + "% memory")

    response = log_client.send(log)
    response.raise_for_status()
    print("Log sent successfully!")

def clear(type_):
    stats[f"{type_}_response_times"] = []
    stats[f"{type_}_errors"] = 0
    stats["cache_hit"] = 0
    stats[f"{type_}_count"] = 0
    last_push[type_] = datetime.datetime.now()

```

## Emplee nuestro SDK [#use-our-sdk]

Ofrecemos un [SDK de telemetría](/docs/data-apis/ingest-apis/telemetry-sdks-report-custom-telemetry-data) de código abierto en varios de los lenguajes de programación más populares como Python, Java, Node/TypeScript. Estos envían datos a nuestra API de ingesta de datos, incluida nuestra [Trace API](/docs/distributed-tracing/trace-api/introduction-trace-api).

En esta lección, aprenderá cómo instalar y emplear el [SDK de telemetría de Python](https://github.com/newrelic/newrelic-telemetry-sdk-python) para informar su primer intervalo a New Relic.

## Reporta tu primer lapso [#report-first-span]

<Steps>
  <Step>
    Cambie al directorio `send-traces/flashDB` del [repositorio del curso](https://github.com/newrelic-experimental/build-a-quickstart-lab).

    ```bash
    cd ../../send-traces/flashDB
    ```
  </Step>

  <Step>
    Si aún no lo hizo, instale el paquete `newrelic-telemetry-sdk` .

    ```bash
    pip install newrelic-telemetry-sdk
    ```
  </Step>

  <Step>
    Abra el archivo `db.py` en el IDE de su elección y configure el `SpanClient`.

    ```python fileName=db.py
    import os
    import random
    import datetime
    from sys import getsizeof
    import psutil

    from newrelic_telemetry_sdk import MetricClient, GaugeMetric, CountMetric, SummaryMetric
    from newrelic_telemetry_sdk import EventClient, Event
    from newrelic_telemetry_sdk import LogClient, Log
    from newrelic_telemetry_sdk import SpanClient

    metric_client = MetricClient(os.environ["NEW_RELIC_LICENSE_KEY"])
    event_client = EventClient(os.environ["NEW_RELIC_LICENSE_KEY"])
    log_client = LogClient(os.environ["NEW_RELIC_LICENSE_KEY"])
    span_client = SpanClient(os.environ["NEW_RELIC_LICENSE_KEY"])

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
            send_event(type_)
            send_logs()

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

    def send_event(type_):

        print("sending event...")

        count = Event(
            "fdb_method", {"method": type_}
        )

        response = event_client.send_batch(count)
        response.raise_for_status()
        print("Event sent successfully!")

    def send_logs():

        print("sending log...")

        process = psutil.Process(os.getpid())
        memory_usage = process.memory_percent()

        log = Log("FlashDB is using " + str(round(memory_usage * 100, 2)) + "% memory")

        response = log_client.send(log)
        response.raise_for_status()
        print("Log sent successfully!")

    def clear(type_):
        stats[f"{type_}_response_times"] = []
        stats[f"{type_}_errors"] = 0
        stats["cache_hit"] = 0
        stats[f"{type_}_count"] = 0
        last_push[type_] = datetime.datetime.now()
    ```

    <Callout variant="important">
      Este ejemplo espera una variable de entorno llamada `$NEW_RELIC_LICENSE_KEY`.
    </Callout>
  </Step>

  <Step>
    Instrumente su aplicación para informar un lapso a New Relic.

    ```python fileName=db.py
    import os
    import random
    import datetime
    from sys import getsizeof
    import psutil
    import time

    from newrelic_telemetry_sdk import MetricClient, GaugeMetric, CountMetric, SummaryMetric
    from newrelic_telemetry_sdk import EventClient, Event
    from newrelic_telemetry_sdk import LogClient, Log
    from newrelic_telemetry_sdk import SpanClient, Span

    metric_client = MetricClient(os.environ["NEW_RELIC_LICENSE_KEY"])
    event_client = EventClient(os.environ["NEW_RELIC_LICENSE_KEY"])
    log_client = LogClient(os.environ["NEW_RELIC_LICENSE_KEY"])
    span_client = SpanClient(os.environ["NEW_RELIC_LICENSE_KEY"])

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
            send_event(type_)
            send_logs()

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

    def send_event(type_):

        print("sending event...")

        count = Event(
            "fdb_method", {"method": type_}
        )

        response = event_client.send_batch(count)
        response.raise_for_status()
        print("Event sent successfully!")

    def send_logs():

        print("sending log...")

        process = psutil.Process(os.getpid())
        memory_usage = process.memory_percent()

        log = Log("FlashDB is using " + str(round(memory_usage * 100, 2)) + "% memory")

        response = log_client.send(log)
        response.raise_for_status()
        print("Log sent successfully!")

    def send_spans():

        print("sending span...")

        with Span(name="sleep") as span:
            time.sleep(0.5)

        response = span_client.send(span)
        response.raise_for_status()
        print("Span sleep sent successfully!")

    def clear(type_):
        stats[f"{type_}_response_times"] = []
        stats[f"{type_}_errors"] = 0
        stats["cache_hit"] = 0
        stats[f"{type_}_count"] = 0
        last_push[type_] = datetime.datetime.now()
    ```

    Aquí, instrumenta su plataforma para enviar un lapso de sueño simple a New Relic.
  </Step>

  <Step>
    Modifique el módulo `try_send` para enviar el intervalo cada 2 segundos.

    ```python fileName=db.py
    import os
    import random
    import datetime
    from sys import getsizeof
    import psutil
    import time

    from newrelic_telemetry_sdk import MetricClient, GaugeMetric, CountMetric, SummaryMetric
    from newrelic_telemetry_sdk import EventClient, Event
    from newrelic_telemetry_sdk import LogClient, Log
    from newrelic_telemetry_sdk import SpanClient, Span

    metric_client = MetricClient(os.environ["NEW_RELIC_LICENSE_KEY"])
    event_client = EventClient(os.environ["NEW_RELIC_LICENSE_KEY"])
    log_client = LogClient(os.environ["NEW_RELIC_LICENSE_KEY"])
    span_client = SpanClient(os.environ["NEW_RELIC_LICENSE_KEY"])

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
            send_event(type_)
            send_logs()
            send_spans()

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

    def send_event(type_):

        print("sending event...")

        count = Event(
            "fdb_method", {"method": type_}
        )

        response = event_client.send_batch(count)
        response.raise_for_status()
        print("Event sent successfully!")

    def send_logs():

        print("sending log...")

        process = psutil.Process(os.getpid())
        memory_usage = process.memory_percent()

        log = Log("FlashDB is using " + str(round(memory_usage * 100, 2)) + "% memory")

        response = log_client.send(log)
        response.raise_for_status()
        print("Log sent successfully!")

    def send_spans():

        print("sending span...")

        with Span(name="sleep") as span:
            time.sleep(0.5)

        response = span_client.send(span)
        response.raise_for_status()
        print("Span sleep sent successfully!")

    def clear(type_):
        stats[f"{type_}_response_times"] = []
        stats[f"{type_}_errors"] = 0
        stats["cache_hit"] = 0
        stats[f"{type_}_count"] = 0
        last_push[type_] = datetime.datetime.now()
    ```

    Su plataforma ahora informará este lapso cada 2 segundos.
  </Step>

  <Step>
    Navegue hasta la raíz de su aplicación en `build-a-quickstart-lab/send-traces/flashDB`.
  </Step>

  <Step>
    Ejecute sus servicios para verificar que esté informando el intervalo.

    ```bash animate
    python simulator.py
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
    [output] sending event...
    [output] {green}Event sent successfully!
    [output] sending log...
    [output] {green}Log sent successfully!
    [output] sending span...
    [output] {green}Span sleep sent successfully!
    ```
  </Step>
</Steps>

## Opciones alternativas [#alternative-options]

Si el SDK de idioma no se ajusta a sus necesidades, pruebe una de nuestras otras opciones:

* **Instrumentación Zipkin existente**: si tiene una implementación Zipkin existente, simplemente puede cambiar el extremo a New Relic para informar sus datos. Lea nuestra documentación para [informar datos de la instrumentación Zipkin existente](/docs/distributed-tracing/trace-api/report-zipkin-format-traces-trace-api/#existing-zipkin).
* **Implementación manual**: si las opciones anteriores no se ajustan a sus requisitos, siempre puede implementar manualmente su propia biblioteca para realizar una solicitud POST a la de [New Relic Trace API](/docs/distributed-tracing/trace-api/report-new-relic-format-traces-trace-api).

Su plataforma ahora está reportando datos a New Relic. A continuación, observa estos datos en New Relic usando dashboard.

<Callout variant="tip">
  Este procedimiento es parte del curso que le muestra cómo crear un inicio rápido. Continúe con la siguiente lección, [cree un dashboard](/docs/new-relic-solutions/build-nr-ui/contribute-nr-io/create-a-dashboards).
</Callout>
