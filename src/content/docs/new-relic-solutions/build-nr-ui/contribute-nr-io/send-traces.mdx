---
title: 'Send traces from your product'
metaDescription: 'With our Trace API you can send data from your library or platform.'
freshnessValidatedDate: never
---

<Callout variant="tip">
  This procedure is a part of course that teaches you how to build a quickstart. If you haven't already, checkout the [course introduction](/docs/new-relic-solutions/build-nr-ui/contribute-nr-io/contribute-quickstart).

  Each procedure in this course builds on top of the last one, so make sure you've completed the last procedure, [send logs from your product](/docs/new-relic-solutions/build-nr-ui/contribute-nr-io/send-logs) before proceeding with this one.
</Callout>

Traces capture details of a single request as it moves through a system. They're composed of spans, which are data structures that represent individual operations in the flow of execution.

New Relic, provides you a variety of ways to instrument your application to send traces to our [Trace API](/docs/distributed-tracing/trace-api/introduction-trace-api).

In this lesson, you learn to send traces from your product using our telemetry software development kit (SDK).

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

## Use our SDK [#use-our-sdk]

We offer an open source [telemetry SDK](/docs/data-apis/ingest-apis/telemetry-sdks-report-custom-telemetry-data) in several of the most popular programming languages such as Python, Java, Node/TypeScript. These send data to our data ingest APIs, including our [Trace API](/docs/distributed-tracing/trace-api/introduction-trace-api).

In this lesson, you learn how to install and use the [Python telemetry SDK](https://github.com/newrelic/newrelic-telemetry-sdk-python) to report your first span to New Relic.

## Report your first span [#report-first-span]

<Steps>
  <Step>
    Change to the `send-traces/flashDB` direcrory of the [course repository](https://github.com/newrelic-experimental/build-a-quickstart-lab).

    ```bash
    cd ../../send-traces/flashDB
    ```
  </Step>

  <Step>
    If you haven't already, install the `newrelic-telemetry-sdk` package.

    ```bash
    pip install newrelic-telemetry-sdk
    ```
  </Step>

  <Step>
    Open `db.py` file in the IDE of your choice and configure the `SpanClient`.

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
      This example expects an environment variable called `$NEW_RELIC_LICENSE_KEY`.
    </Callout>
  </Step>

  <Step>
    Instrument your app to report a span to New Relic.

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

    Here, you instrument your platform to send a simple sleep span to New Relic.
  </Step>

  <Step>
    Amend the `try_send` module to send the span every 2 second.

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

    Your platform will now report this span every 2 seconds.
  </Step>

  <Step>
    Navigate to the root of your application at `build-a-quickstart-lab/send-traces/flashDB`.
  </Step>

  <Step>
    Run your services to verify that it is reporting the span.

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

## Alternative Options [#alternative-options]

If the language SDK doesn't fit your needs, try out one of our other options:

* **Existing Zipkin instrumentation**: if you've an existing Zipkin implementation, you can simply change the endpoint to New Relic to report your data. Read our documentation to [report data from existing Zipkin instrumentation](/docs/distributed-tracing/trace-api/report-zipkin-format-traces-trace-api/#existing-zipkin).

* **Manual Implementation**: If the previous options don't fit your requirements, you can always manually instrument your own library to make a POST request to the [New Relic Trace API](/docs/distributed-tracing/trace-api/report-new-relic-format-traces-trace-api).

Your platform is now reporting data to New Relic. Next, you observe this data in New Relic using dashboard.

<Callout variant="tip">
  This procedure is a part of course that teaches you how to build a quickstart. Continue to next lesson, [create a dashboard](/docs/new-relic-solutions/build-nr-ui/contribute-nr-io/create-a-dashboards).
</Callout>
