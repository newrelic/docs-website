---
title: 제품에서 트레이 보내기
metaDescription: With our Trace API you can send data from your library or platform.
freshnessValidatedDate: never
translationType: machine
---

<Callout variant="tip">
  이 절차는 퀵스타트를 만드는 방법을 가르치는 과정의 일부입니다. 아직 확인하지 않으셨다면 [과정 소개를](/docs/new-relic-solutions/build-nr-ui/contribute-nr-io/contribute-quickstart) 확인해 보세요.

  이 과정의 각 절차는 마지막 절차를 토대로 구성되므로 마지막 절차를 완료했는지 확인하고 이 절차를 진행하기 전에 [제품에서 로그를 보내세요](/docs/new-relic-solutions/build-nr-ui/contribute-nr-io/send-logs) .
</Callout>

트레이스는 시스템을 통해 이동하는 단일 요청의 세부 정보를 캡처합니다. 실행 흐름에서 개별 작업을 나타내는 데이터 구조인 범위로 구성됩니다.

뉴렐릭은 트레이스를 [트레이스 API](/docs/distributed-tracing/trace-api/introduction-trace-api) 로 전송하기 위한 다양한 방법을 제공합니다.

이 단원에서는 마더보드 소프트웨어 개발 키트(SDK)를 사용하여 제품에서 트레이스를 보내는 방법을 배웁니다.

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

## 우리의 SDK를 사용하세요 [#use-our-sdk]

우리는 Python, Java, Node/TypeScript 등 가장 널리 사용되는 프로그래밍 언어로 오픈 소스 [텔레메트리 SDK를](/docs/data-apis/ingest-apis/telemetry-sdks-report-custom-telemetry-data) 제공합니다. 이는 API [트레이스 API](/docs/distributed-tracing/trace-api/introduction-trace-api) 포함한 데이터 수집 로 데이터를 보냅니다.

이 단원에서는 [Python 스프레드시트 SDK를](https://github.com/newrelic/newrelic-telemetry-sdk-python) 설치하고 사용하여 첫 번째 범위를 뉴렐릭에 보고하는 방법을 알아봅니다.

## 첫 번째 범위를 보고하세요. [#report-first-span]

<Steps>
  <Step>
    [강좌 저장소](https://github.com/newrelic-experimental/build-a-quickstart-lab) 의 `send-traces/flashDB` 디렉터리로 변경합니다.

    ```bash
    cd ../../send-traces/flashDB
    ```
  </Step>

  <Step>
    아직 설치하지 않았다면 `newrelic-telemetry-sdk` 패키지를 설치하세요.

    ```bash
    pip install newrelic-telemetry-sdk
    ```
  </Step>

  <Step>
    선택한 IDE에서 `db.py` 파일을 열고 `SpanClient` 을 구성합니다.

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
      이 예에서는 `$NEW_RELIC_LICENSE_KEY` 이라는 환경 변수를 예상합니다.
    </Callout>
  </Step>

  <Step>
    앱을 사용하여 뉴렐릭에 범위를 보고합니다.

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

    여기서는 귀하의 플랫폼을 사용하여 뉴렐릭에 간단한 수면 기간을 보냅니다.
  </Step>

  <Step>
    2초마다 범위를 전송하도록 `try_send` 모듈을 수정합니다.

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

    이제 플랫폼은 이 범위를 2초마다 보고합니다.
  </Step>

  <Step>
    `build-a-quickstart-lab/send-traces/flashDB` 에서 애플리케이션 루트로 이동합니다.
  </Step>

  <Step>
    서비스를 실행하여 범위를 보고하는지 확인하세요.

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

## 대체 옵션 [#alternative-options]

언어 SDK가 귀하의 요구 사항에 맞지 않으면 다음 옵션 중 하나를 시도해 보십시오.

* **기존 Zipkin 출력**: 기존 Zipkin 구현이 있는 경우 간단히 엔드포인트를 뉴렐릭으로 변경하여 데이터를 보고할 수 있습니다. [기존 Zipkin 계측의 데이터를 보고](/docs/distributed-tracing/trace-api/report-zipkin-format-traces-trace-api/#existing-zipkin) 하려면 설명서를 읽어보세요.
* **수동 구현**: 이전 옵션이 요구 사항에 맞지 않는 경우 언제든지 직접 라이브러리를 수동으로 생성하여 [뉴렐릭 트레이스 API](/docs/distributed-tracing/trace-api/report-new-relic-format-traces-trace-api) 에 대한 POST 요청을 만들 수 있습니다.

귀하의 플랫폼이 이제 뉴렐릭에 데이터를 보고하고 있습니다. 다음으로 대시보드를 사용하여 뉴렐릭에서 이 데이터를 관찰합니다.

<Callout variant="tip">
  이 절차는 퀵스타트를 만드는 방법을 가르치는 과정의 일부입니다. 다음 단원인 [대시보드 만들기를](/docs/new-relic-solutions/build-nr-ui/contribute-nr-io/create-a-dashboards) 계속 진행하세요.
</Callout>
