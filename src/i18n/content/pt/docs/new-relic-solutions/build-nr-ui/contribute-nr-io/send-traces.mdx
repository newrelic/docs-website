---
title: Envie trace do seu produto
metaDescription: With our Trace API you can send data from your library or platform.
freshnessValidatedDate: never
translationType: machine
---

<Callout variant="tip">
  Este procedimento faz parte do curso que ensina como criar um início rápido. Se ainda não o fez, confira a [introdução do curso](/docs/new-relic-solutions/build-nr-ui/contribute-nr-io/contribute-quickstart).

  Cada procedimento neste curso é baseado no anterior, portanto, certifique-se de ter concluído o último procedimento e [envie logs do seu produto](/docs/new-relic-solutions/build-nr-ui/contribute-nr-io/send-logs) antes de prosseguir com este.
</Callout>

Traces capturam detalhesde de uma única solicitação à medida que ela se move através de um sistema. Eles são compostos de spans, que são estruturas de dados que representam operações individuais no fluxo de execução.

New Relic oferece uma variedade de maneiras de instrumentar seu aplicativo para enviar rastreamento para nossa [Trace API](/docs/distributed-tracing/trace-api/introduction-trace-api).

Nesta lição, você aprenderá a enviar rastreamento do seu produto usando nosso kit de desenvolvimento de software de telemetria (SDK).

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

## Use nosso SDK [#use-our-sdk]

Oferecemos um [SDK de telemetria](/docs/data-apis/ingest-apis/telemetry-sdks-report-custom-telemetry-data) de código aberto em diversas linguagens de programação mais populares, como Python, Java, Node/TypeScript. Eles enviam dados para nossa de ingestão de API dados, incluindo nossa [Trace API](/docs/distributed-tracing/trace-api/introduction-trace-api).

Nesta lição, você aprenderá como instalar e usar o [SDK de telemetria do Python](https://github.com/newrelic/newrelic-telemetry-sdk-python) para relatar seu primeiro período ao New Relic.

## Relate seu primeiro período [#report-first-span]

<Steps>
  <Step>
    Mude para o diretório `send-traces/flashDB` do [repositório do curso](https://github.com/newrelic-experimental/build-a-quickstart-lab).

    ```bash
    cd ../../send-traces/flashDB
    ```
  </Step>

  <Step>
    Se ainda não o fez, instale o pacote `newrelic-telemetry-sdk` .

    ```bash
    pip install newrelic-telemetry-sdk
    ```
  </Step>

  <Step>
    Abra o arquivo `db.py` no IDE de sua preferência e configure o `SpanClient`.

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
      Este exemplo espera uma variável de ambiente chamada `$NEW_RELIC_LICENSE_KEY`.
    </Callout>
  </Step>

  <Step>
    Instrumento seu aplicativo para relatar um intervalo para New Relic.

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

    Aqui você instrumenta sua plataforma para enviar um período de sono simples para New Relic.
  </Step>

  <Step>
    Altere o módulo `try_send` para enviar o intervalo a cada 2 segundos.

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

    Sua plataforma agora reportará esse intervalo a cada 2 segundos.
  </Step>

  <Step>
    Navegue até a raiz do seu aplicativo em `build-a-quickstart-lab/send-traces/flashDB`.
  </Step>

  <Step>
    Execute seus serviços para verificar se eles estão relatando o intervalo.

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

## Opções alternativas [#alternative-options]

Se o SDK da linguagem não atender às suas necessidades, experimente uma de nossas outras opções:

* **Instrumentação Zipkin existente**: se você tiver uma implementação Zipkin existente, você pode simplesmente alterar o endpoint para New Relic para relatar seus dados. Leia nossa documentação para [relatar dados da instrumentação Zipkin existente](/docs/distributed-tracing/trace-api/report-zipkin-format-traces-trace-api/#existing-zipkin).
* **Implementação manual**: se as opções anteriores não atenderem aos seus requisitos, você sempre pode instrumentar manualmente sua própria biblioteca para fazer uma solicitação POST para a [New Relic Trace API](/docs/distributed-tracing/trace-api/report-new-relic-format-traces-trace-api).

Sua plataforma agora está reportando dados para a New Relic. A seguir, você observa esses dados no New Relic usando dashboard.

<Callout variant="tip">
  Este procedimento faz parte do curso que ensina como criar um início rápido. Continue na próxima lição, [crie um dashboard](/docs/new-relic-solutions/build-nr-ui/contribute-nr-io/create-a-dashboards).
</Callout>
