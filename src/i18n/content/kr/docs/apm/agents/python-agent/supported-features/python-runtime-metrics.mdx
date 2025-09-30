---
title: Python 런타임 측정항목
tags:
  - Agents
  - Python agent
  - Supported features
metaDescription: The Python agent records runtime metrics for garbage collection and CPU/ memory usage
freshnessValidatedDate: never
translationType: machine
---

Python 에이전트는 런타임 지표를 기록하여 Python 프로세스와 인터프리터의 성능을 분석할 수 있도록 해줍니다. 여기에는 CPU 사용량, 메모리 사용량, 가비지 수집과 관련된 지표가 포함됩니다. 이 동작은 기본적으로 활성화되어 있습니다. 이를 비활성화하려면 [구성 파일이나 환경 변수에서 설정을 비활성화하십시오](/docs/apm/agents/python-agent/configuration/python-agent-configuration#runtime-metrics).

## CPU 사용량

CPU 런타임 메트릭을 사용하면 사용자 및 시스템 CPU 사용률을 검사하여 CPU 사용률을 모니터링하고 CPU의 여러 구성 요소에서 소요된 시간도 확인할 수 있습니다. 다음 CPU 사용량 메트릭을 사용할 수 있습니다.

* <DNT>
    **CPU time**
  </DNT>

  : CPU의 다양한 상태에서 소요되는 시간을 추적합니다. 여기에는 사용자(코드 실행 시간)와 시스템(운영 시스템에서 소요된 시간)이 포함됩니다. 이 지표는 총 경과 시간(초)으로 표시됩니다.

* <DNT>
    **CPU utilization**
  </DNT>

  : 시간이 지남에 따라 CPU의 다양한 구성 요소에서 활용되는 처리 리소스의 양을 분석합니다. 여기에는 사용자 구성 요소(애플리케이션 코드 실행용)와 시스템 구성 요소(커널 코드 실행용)가 포함됩니다. 이 지표는 지정된 CPU 구성 요소에서 소요된 시간을 총 경과된 CPU 시간으로 나눈 백분율로 보고됩니다.

## 메모리 사용량

프로세스 및 호스트별로 시스템의 전체 메모리 소비 및 사용률을 모니터링할 수 있습니다. 다음 메모리 사용량 메트릭을 사용할 수 있습니다.

* <DNT>
    **Total physical memory**
  </DNT>

  : 시간이 지남에 따라 시스템에서 사용되는 총 실제 메모리 양(MB)을 모니터링합니다. 이 지표는 개별 프로세스 ID에도 사용할 수 있습니다.

* <DNT>
    **Memory utilization**
  </DNT>

  : 시간 경과에 따른 시스템 및 개별 프로세스의 메모리 활용도를 추적합니다. 이 지표는 시스템(또는 특정 프로세스)에서 사용 중인 총 물리적 메모리의 값을 사용 가능한 총 메모리 양으로 나눈 값으로 표시됩니다.

## 쓰레기 수거

<Callout variant="important">
  가비지 수집 프로파일링은 에이전트에서 기본적으로 비활성화되어 있습니다. 활성화하려면 [여기에서](/docs/agents/python-agent/configuration/python-agent-configuration/#garbage-collection-runtime-metrics) 설명서를 확인하세요.
</Callout>

가비지 수집기는 사용되지 않는 데이터 개체를 찾고 다른 프로세스에서 사용할 수 있도록 해당 메모리 공간을 회수합니다. Python 에이전트는 다음과 같은 가비지 수집 메트릭을 제공합니다.

* <DNT>
    **Object count by type**
  </DNT>

  : 인사이트에서 관련 수집 횟수를 확인하여 가비지 수집기에서 수집하는 가장 일반적인 개체 유형을 알아보세요. [top_object_count_limit 설정을](/docs/agents/python-agent/configuration/python-agent-configuration/#garbage-collection-runtime-metrics) 구성하여 이 지표 유형으로 보고하려는 객체 유형의 최대 수를 사용자 정의할 수 있습니다.

* <DNT>
    **Object count by generation**
  </DNT>

  : 쓰레기 수집기의 각 세대마다 수집이 이루어지면서 살아남은 개체는 상위 세대로 승격됩니다. 이 지표를 사용하면 시간이 지남에 따라 각 가비지 수집기 세대에 저장되는 개체 수를 볼 수 있습니다.

* <DNT>
    **Total time by generation**
  </DNT>

  : 각 수집 세대에서 가비지 수집기가 소비하는 시간을 분석합니다.

* <DNT>
    **Garbage collector collections**
  </DNT>

  : 컬렉션 수는 각 세대별로 설정한 객체 레버 값의 영향을 받습니다. 레버 값에 도달하면 수집 프로세스가 시작됩니다. [gc.collect()](https://docs.python.org/3/library/gc.html#gc.collect) 를 호출하여 애플리케이션 코드 내에서 컬렉션을 수동으로 트리거할 수도 있습니다. 이 지표는 시간이 지남에 따라 각 세대에서 발생한 가비지 수집기 청소 횟수를 보고합니다.

* <DNT>
    **Garbage collector uncollectable**
  </DNT>

  : 일부에서는 쓰레기 수집기가 수집할 수 없는 것으로 간주하여 특정 물건에 도달하거나 해제할 수 없는 경우가 있습니다. 이 지표를 사용하면 각 세대에서 가비지 수집기에서 수집할 수 없는 개체의 수를 확인할 수 있습니다.

* <DNT>
    **Garbage collector collected**
  </DNT>

  : 이 지표는 각 세대에서 가비지 수집기에 의해 수집된 총 개체 수를 보고합니다.
