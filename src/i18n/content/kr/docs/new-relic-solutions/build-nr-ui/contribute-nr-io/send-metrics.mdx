---
title: 제품에서 지표 보내기
metaDescription: With our Metric API you can send data from your library or platform.
freshnessValidatedDate: never
translationType: machine
---

<Callout variant="tip">
  이 절차는 퀵스타트를 만드는 방법을 가르치는 과정의 일부입니다. 아직 확인하지 않으셨다면 [과정 소개를](/docs/new-relic-solutions/build-nr-ui/contribute-nr-io/contribute-quickstart) 확인해 보세요.

  이 과정의 각 절차는 마지막 절차를 기반으로 구축되므로 이 과정을 진행하기 전에 [구현하고 배포하는 것을](/docs/new-relic-solutions/build-nr-ui/contribute-nr-io/deploy-your-application) 확인하세요.
</Callout>

지표는 시스템의 성능과 동작에서 파생된 집계된 측정값입니다. 제품이 데이터베이스인 경우 CPU 사용률, 메모리 사용률 및 쿼리 처리량과 같은 지표를 보낼 수 있습니다. 지표는 일반적으로 뉴렐릭으로 전송되는 데이터의 양을 제한하려는 경우에만 사용됩니다. 오류율 및 처리량과 같은 많은 지표는 이벤트를 집계하여 컴퓨트할 수 있습니다.

뉴렐릭은 [지표 API](/docs/data-apis/ingest-apis/metric-api/introduction-metric-api) 에 지표를 보내기 위한 다양한 방법을 제공합니다. 이 레슨에서는 텔레메트리 소프트웨어 개발 키트(SDK)를 사용하여 제품에서 지표를 보냅니다.

## 우리의 SDK를 사용하세요 [#use-sdk]

우리는 가장 널리 사용되는 여러 프로그래밍 언어로 오픈 소스 [텔레메트리 SDK를](/docs/data-apis/ingest-apis/telemetry-sdks-report-custom-telemetry-data) 제공합니다. 지표 API 를 포함한 데이터 수집 API 로 데이터를 보냅니다. 이러한 언어 SDK 중 Python, Java, Node/TypeScript 및 Go는 지표 API 와 함께 작동합니다.

이 단원에서는 [Python 스프레드시트 SDK를](https://github.com/newrelic/newrelic-telemetry-sdk-python) 설치하고 사용하여 지표를 뉴렐릭으로 보내는 방법을 배웁니다.

<Steps>
  <Step>
    [강좌 저장소](https://github.com/newrelic-experimental/build-a-quickstart-lab) 의 `send-metrics/flashDB` 디렉터리로 변경합니다.

    ```bash
    cd ../send-metrics/flashDB
    ```
  </Step>

  <Step>
    `pip` 사용하여 `newrelic-telemetry-sdk` 패키지를 설치합니다.

    ```bash
    pip install newrelic-telemetry-sdk
    ```
  </Step>

  <Step>
    `$NEW_RELIC_LICENSE_KEY` 이라는 환경 변수에 뉴렐릭 클러스터 키를 저장하세요.

    ```bash
    export NEW_RELIC_LICENSE_KEY=<YOUR_USER_KEY>
    ```

    <Callout variant="tip">
      귀하의 [계정 설정](/docs/apis/intro-apis/new-relic-api-keys) 에서 귀하의 뉴벨릭 볼륨 키를 찾으실 수 있습니다.
    </Callout>
  </Step>
</Steps>

다음으로 앱 논리에 익숙해집니다.

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

## 특수 기능을 숙지하세요 [#familiarize-with-app]

선택한 IDE에서 `db.py` 파일을 열고 앱 로직을 숙지하세요.

이 데모에서는 CRUD(만들기, 읽기, 업데이트 및 삭제) 작업을 모방하는 더미 Python 애플리케이션을 사용합니다.

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

`read`, `create`, `update` 및 `delete` 는 CRUD 작업을 모방하는 더미 메서드입니다. 모든 CRUD 작업에 대해 작업이 수행되었음을 반영하기 위해 해당 `stat` 증가됩니다. 다음으로 이 `stats` 데이터를 뉴렐릭으로 보냅니다.

## 측정항목을 New Relic으로 보내기 [#send-metrics]

지표에는 3가지 유형이 있습니다.

* **GaugeMetric**: 단일 시점에 단일 값을 보냅니다.
* **CountMetric**: 이벤트의 총 발생 횟수를 추적합니다.
* **SummaryMetric**: 시간 경과에 따른 개수, 합계, 최소값 및 최대값을 추적합니다.

다음으로, 이러한 지표를 보내도록 합니다.

<Steps>
  <Step>
    `db.py` 에서 `MetricClient` 을 구성합니다.

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
    앱을 사용하여 다음 지표를 뉴렐릭으로 보내세요.

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

      여기에서는 `GaugeMetric`, `CountMetric` 및 `SummaryMetric` 를 사용하여 뉴렐릭에 지표를 보고하도록 플랫폼을 구성합니다.
  </Step>

  <Step>
    이러한 지표를 2초마다 보내도록 `try_send` 모듈을 수정하세요.

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

    이제 귀하의 플랫폼은 구성된 지표를 모두 2초마다 보고합니다.
  </Step>

  <Step>
    `build-a-quickstart-lab/send-metrics/flashDB` 에서 애플리케이션 루트로 이동합니다.
  </Step>

  <Step>
    서비스를 실행하여 지표를 보고하고 있는지 확인하세요.

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

## 대체 옵션

언어 SDK가 귀하의 요구 사항에 맞지 않거나 지표를 뉴렐릭으로 보내기 위해 좀 더 맞춤화된 것을 원하는 경우, 다른 옵션 중 하나를 사용해 보세요:

* **수동 구현**: 원하는 언어의 SDK가 지표를 지원하지 않는 경우 언제든지 자신의 라이브러리를 수동으로 추출하여 뉴렐릭 지표 API 에 POST 요청을 할 수 있습니다.
* **프로메테우스 데이터**: 프로메테우스 데이터는 원격 쓰기와 OpenMetrics의 두 가지 방법으로 뉴렐릭으로 전송될 수 있습니다. 매우 높은 수준에서 자체 Prometheus 서버를 관리하는 경우 원격 쓰기를 사용해야 하고, 그렇지 않은 경우 OpenMetrics를 사용해야 합니다.

이 절차에서는 인덱스를 뉴렐릭으로 보내기 위해 서비스를 축소했습니다. 다음으로 이벤트를 보내도록 합니다.

<Callout variant="tip">
  이 절차는 퀵스타트를 만드는 방법을 가르치는 과정의 일부입니다. 다음 강의를 계속 진행하세요. [제품에서 이벤트를 보내세요](/docs/new-relic-solutions/build-nr-ui/contribute-nr-io/send-events).
</Callout>
