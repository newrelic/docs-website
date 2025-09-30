---
title: 製品からトレースを送信する
metaDescription: With our Trace API you can send data from your library or platform.
freshnessValidatedDate: never
translationType: machine
---

<Callout variant="tip">
  この手順は、クイックスタートを構築する方法を教えるコースの一部です。 まだご覧になっていない方は、[コース紹介を](/docs/new-relic-solutions/build-nr-ui/contribute-nr-io/contribute-quickstart)ご覧ください。

  このコースの各手順は、前の手順に基づいて構築されるため、この手順に進む前に、必ず前の手順を完了し、[製品からログを送信してください](/docs/new-relic-solutions/build-nr-ui/contribute-nr-io/send-logs)。
</Callout>

トレースは、システム内を移動する単一のリクエストの詳細をキャプチャします。 これらは、実行フロー内の個々の操作を表すデータ構造であるスパンで構成されています。

New Relicでは、トレースを[API](/docs/distributed-tracing/trace-api/introduction-trace-api)に送信するためにアプリケーションをセットアップするさまざまな方法を提供しています。

このレッスンでは、テレメトリー ソフトウェア開発キット (SDK) を使用して製品からトレースを送信する方法を学習します。

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

## SDKを使用する [#use-our-sdk]

当社は、Python、Java、Node/TypeScript などの最も人気のあるプログラミング言語のいくつかでオープンソース[テレメトリ SDK](/docs/data-apis/ingest-apis/telemetry-sdks-report-custom-telemetry-data)を提供しています。 これらは、API [を含むデータ取り込みAPI](/docs/distributed-tracing/trace-api/introduction-trace-api) にデータを送信します。

このレッスンでは、 [Python テレメトリー SDK を](https://github.com/newrelic/newrelic-telemetry-sdk-python)インストールして使用し、最初のスパンをNew Relicに報告する方法を学習します。

## 最初のスパンを報告する [#report-first-span]

<Steps>
  <Step>
    [コース リポジトリ](https://github.com/newrelic-experimental/build-a-quickstart-lab)の`send-traces/flashDB`ディレクトリに変更します。

    ```bash
    cd ../../send-traces/flashDB
    ```
  </Step>

  <Step>
    まだインストールしていない場合は、 `newrelic-telemetry-sdk`パッケージをインストールしてください。

    ```bash
    pip install newrelic-telemetry-sdk
    ```
  </Step>

  <Step>
    任意の IDE で`db.py`ファイルを開き、 `SpanClient`を構成します。

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
      この例では、 `$NEW_RELIC_LICENSE_KEY`という環境変数が必要です。
    </Callout>
  </Step>

  <Step>
    New Relicにスパンを報告するようにアプリを準備します。

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

    ここでは、単純なスリープ期間をNew Relicに送信するようにシステムを設計します。
  </Step>

  <Step>
    2 秒ごとにスパンを送信するように`try_send`モジュールを修正します。

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

    プラットフォームはこのスパンを 2 秒ごとに報告するようになります。
  </Step>

  <Step>
    `build-a-quickstart-lab/send-traces/flashDB`にあるアプリケーションのルートに移動します。
  </Step>

  <Step>
    サービスを実行して、スパンが報告されていることを確認します。

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

## 代替オプション [#alternative-options]

言語 SDK がニーズに合わない場合は、他のオプションをお試しください。

* **既存の Zipkin インストゥルメント**: 既存の Zipkin 実装がある場合は、単に インタフェース をNew Relicに変更するだけでデータをレポートできます。 [既存の Zipkin インストゥルメンテーションからデータを報告する](/docs/distributed-tracing/trace-api/report-zipkin-format-traces-trace-api/#existing-zipkin)には、ドキュメントをお読みください。
* **手動実装**: 前のオプションが要件に適合しない場合は、いつでも独自のライブラリを手動で実装して、 [New Relic API](/docs/distributed-tracing/trace-api/report-new-relic-format-traces-trace-api)に POST リクエストを送信できます。

プラットフォームが New Relic にデータを報告しています。 次に、ダッシュボードを使用して New Relic でこのデータを観察します。

<Callout variant="tip">
  この手順は、クイックスタートを構築する方法を教えるコースの一部です。 次のレッスンに進み、[ダッシュボードを作成します](/docs/new-relic-solutions/build-nr-ui/contribute-nr-io/create-a-dashboards)。
</Callout>
