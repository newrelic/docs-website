---
title: 製品からメトリクスを送信する
metaDescription: With our Metric API you can send data from your library or platform.
freshnessValidatedDate: never
translationType: machine
---

<Callout variant="tip">
  この手順は、クイックスタートを構築する方法を教えるコースの一部です。 まだご覧になっていない方は、[コース紹介を](/docs/new-relic-solutions/build-nr-ui/contribute-nr-io/contribute-quickstart)ご覧ください。

  このコースの各手順は前回の手順に基づいて構築されるため、この手順に進む前に必ず[アプリケーションをデプロイして](/docs/new-relic-solutions/build-nr-ui/contribute-nr-io/deploy-your-application)ください。
</Callout>

メトリクスは、システムのパフォーマンスと動作から得られた集計された測定値です。 製品がデータベースの場合は、CPU 使用率、メモリ使用率、クエリ実行率などのメトリックを送信する場合があります。 メトリックは通常、 New Relicに送信されるデータの量を制限する場合にのみ使用されることに注意してください。 エラー率や最大など、多くのメトリックはイベントを集計することで計算できることに注意してください。

New Relicアプリケーションをセットアップしてメトリックを[メトリックAPI](/docs/data-apis/ingest-apis/metric-api/introduction-metric-api)に送信するためのさまざまな方法を提供しています。 このレッスンでは、テレメトリ ソフトウェア開発キット (SDK) を使用して、製品からメトリクスを送信します。

## SDKを使用する [#use-sdk]

当社は、最も人気のあるプログラミング言語のいくつかでオープンソース[テレメトリ SDK](/docs/data-apis/ingest-apis/telemetry-sdks-report-custom-telemetry-data)を提供しています。 これらは、メトリクスAPIを含むデータ取り込みAPIにデータを送信します。 これらの言語 SDK のうち、Python、Java、Node/TypeScript、Go はメトリクスAPIで動作します。

このレッスンでは、 [Python テレメトリ SDK を](https://github.com/newrelic/newrelic-telemetry-sdk-python)インストールして使用し、メトリクスをNew Relicに送信する方法を学習します。

<Steps>
  <Step>
    [コース リポジトリ](https://github.com/newrelic-experimental/build-a-quickstart-lab)の`send-metrics/flashDB`ディレクトリに変更します。

    ```bash
    cd ../send-metrics/flashDB
    ```
  </Step>

  <Step>
    `pip`を使用して`newrelic-telemetry-sdk`パッケージをインストールします。

    ```bash
    pip install newrelic-telemetry-sdk
    ```
  </Step>

  <Step>
    New Relicライセンスキーを `$NEW_RELIC_LICENSE_KEY` という環境変数に保存します。

    ```bash
    export NEW_RELIC_LICENSE_KEY=<YOUR_USER_KEY>
    ```

    <Callout variant="tip">
      New Relicライセンスキーは[アカウント設定](/docs/apis/intro-apis/new-relic-api-keys)で確認できます。
    </Callout>
  </Step>
</Steps>

次に、アプリのロジックを理解します。

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

## アプリケーションに慣れる [#familiarize-with-app]

任意の IDE で`db.py`ファイルを開き、アプリのロジックを理解してください。

このデモでは、作成、読み取り、更新、削除 (CRUD) 操作を模倣したダミーの Python アプリケーションを使用します。

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

`read` 、 `create` 、 `update` 、および`delete`は、CRUD 操作を模倣するダミー メソッドです。 すべての CRUD 操作ごとに、操作が実行されたことを反映して、それぞれの`stat`が増分されます。 次に、この`stats`データを New Relic に送信します。

## New Relic にメトリクスを送信する [#send-metrics]

メトリクスには 3 つの種類があります。

* **GaugeMetric** : 単一の時点で単一の値を送信します。
* **CountMetric** : イベントの発生回数の合計を追跡します。
* **SummaryMetric** : 時間の経過に伴うカウント、合計、最小値、最大値を追跡します。

次に、これらのメトリックを送信するためのアプリケーションを計画します。

<Steps>
  <Step>
    `db.py`で、 `MetricClient`を構成します。

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
    以下のメトリックをNew Relicに送信するようにアプリを構成します。

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

      ここでは、`GaugeMetric`、`CountMetric`、`SummaryMetric` を使用してメトリックをNew Relicに報告するようにプラットフォームを構成します。
  </Step>

  <Step>
    `try_send`モジュールを修正して、これらのメトリックを 2 秒ごとに送信します。

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

    これで、ネットワークは構成されたすべてのメトリックを 2 秒ごとに報告するようになります。
  </Step>

  <Step>
    `build-a-quickstart-lab/send-metrics/flashDB`にあるアプリケーションのルートに移動します。
  </Step>

  <Step>
    サービスを実行して、メトリックが報告されていることを確認します。

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

## 代替オプション

言語 SDK がニーズに合わない場合、または New Relic にメトリクスを送信するためにさらにカスタマイズされたものをご希望の場合は、他のオプションをお試しください。

* **手動実装**: ご希望の言語の SDK がメトリックスをサポートしていない場合は、いつでも手動で独自のライブラリを実装し、 New RelicメトリックスAPIに POST リクエストを送信できます。
* **Prometheus データ**: Prometheus データは、リモート書き込みと OpenMetrics の 2 つの方法で New Relic に送信できます。 大まかに言えば、独自の Prometheus サーバーを管理する場合はリモート書き込みを使用し、管理しない場合は OpenMetrics を使用する必要があります。

この手順では、メトリックをNew Relicに送信するようにサービスをインストゥルメントしました。 次に、イベントを送信するためにそれを計装します。

<Callout variant="tip">
  この手順は、クイックスタートを構築する方法を教えるコースの一部です。 次のレッスンに進み、[製品からイベントを送信します](/docs/new-relic-solutions/build-nr-ui/contribute-nr-io/send-events)。
</Callout>
