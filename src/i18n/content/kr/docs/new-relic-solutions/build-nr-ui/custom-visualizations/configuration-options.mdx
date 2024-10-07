---
title: 구성 옵션
tags:
  - Custom visualization
metaDescription: Configure your custom visualization
freshnessValidatedDate: '2024-04-29T00:00:00.000Z'
translationType: machine
---

이 문서에서는 맞춤 시각화를 구성하는 방법과 시각화의 `nr1.json` 파일 내용에 대해 알아봅니다. 이를 수정하는 방법과 이를 사용하여 시각화를 보다 유연하고 재사용 가능하게 만드는 방법을 알게 됩니다.

## 시각화의 메타데이터 편집 [#edit]

`nr1.json` 파일은 시각화 디렉터리에 있는 메타데이터 파일이며 다음과 같습니다.

```json fileName=nr1.json
{
  "schemaType": "VISUALIZATION",
  "id": "fun-visualization",
  "displayName": "FunVisualization",
  "description": "",
  "configuration": []
}
```

여기에는 다음과 같은 최상위 키가 포함되어 있습니다.

* `schemaType`: Nerdpack 항목에는 모두 `nr1.json` 메타데이터 파일이 있습니다. `schemaType` 은 항목의 스키마를 설명합니다. 모든 시각화의 경우 `schemaType` 는 `VISUALIZATION` 입니다.
* `id`: 시각화의 문자열 식별자입니다. 이는 특정 Nerdpack 내에서 고유해야 하지만 모든 Nerdpack에서 고유할 필요는 없습니다.
* `displayName`: 뉴렐릭이 **Custom Visualizations** \[사용자 정의 시각화] 에 표시하는 사람이 읽을 수 있는 이름입니다.
* `description`: 뉴렐릭이 **Custom Visualizations** \[사용자 정의 시각화] 에 표시하는 설명입니다.
* `configuration`: 시각화에 대해 구성 가능한 속성 목록입니다. 웹 UI에서 이러한 속성을 편집할 수 있으며 해당 값은 시각화 구성 요소에 전달됩니다.

## 시각화의 구성 가능한 속성을 선언합니다. [#declare]

시각화의 구성 가능한 속성을 선언하려면 `nr1.json` 파일의 `configuration` 키 아래에 나열하세요.

```json
"configuration": [
    {
      "name": "nrqlQueries",
      "title": "NRQL Queries",
      "type": "collection",
      "items": [
        {
          "name": "accountId",
          "title": "Account ID",
          "description": "Account ID to be associated with the query",
          "type": "number"
        },
        {
          "name": "query",
          "title": "Query",
          "description": "NRQL query for visualization",
          "type": "nrql"
        }
      ]
    },
    {
      "name": "fill",
      "title": "Fill color",
      "description": "A fill color to override the default fill color",
      "type": "string"
    },
    {
      "name": "stroke",
      "title": "Stroke color",
      "description": "A stroke color to override the default stroke color",
      "type": "string"
    }
]
```

이 예에서 `nrqlQueries` 쿼리 개체의 컬렉션입니다. 각 쿼리 객체는 `accountId` 및 `query` 로 구성됩니다. 컬렉션으로서 이 시각화에는 여러 쿼리 개체가 있을 수 있습니다. `fill` 및 `stroke` 는 시각화를 렌더링할 때 사용할 수 있는 색상을 정의하는 문자열입니다.

이는 시각화 설정 UI의 다음 필드에 있는 `configuration` 결과의 예입니다.

<img
  title="Configure visualization properties"
  alt="Configure visualization properties"
  src="/images/queries-nrql_screenshot-crop_conf-visualization-prop.webp"
/>

**NRQL Queries** \[NRQL 컬렉션에 쿼리] 개체를 추가하는 데 사용할 수 있는 쿼리 옆의 **+**를 확인하세요. 쿼리가 두 개 이상인 경우 쿼리 위로 마우스를 가져간 다음 **-** 를 클릭하여 쿼리를 제거할 수도 있습니다. 또한 대부분의 필드에 대해 제공되는 도구 설명을 확인하세요. UI의 각 도구 설명은 해당 필드의 `description` 에 해당합니다(있는 경우).

React 코드에서 시각화 구성 요소의 props에 있는 다음 필드 값에 액세스할 수 있습니다.

```js
export default class MyCustomVisualization extends React.Component {
  render() {
    const { nrqlQueries, stroke, fill } = this.props;
    return <div>
      <p>Fill color: { fill }</p>
      <p>Stroke color: { stroke }</p>
      <p>First query account ID: { nrqlQueries[0].accountId }</p>
      <p>First query: { nrqlQueries[0].query }</p>
    </div>
  }
```

모든 `configuration` 객체에는 다음과 같은 선택적 키가 있습니다.

* `name`: React 컴포넌트 소품 이름
* `title`: UI 표시 이름
* `description`: 툴팁 설명

모든 `configuration` 객체에는 필드의 데이터 유형을 참조하는 `type` 키가 필요합니다. 각 데이터 유형은 구성 및 표시 방식이 고유합니다.

### `boolean`

`boolean` 속성은 UI에서 토글로 렌더링되며 true 또는 false 상태를 나타냅니다.

```json fileName=nr1.json lineHighlight=6-13
{
  "schemaType": "VISUALIZATION",
  "id": "custom-viz",
  "displayName": "CustomViz",
  "description": "MyCustomViz",
  "configuration": [
    {
        "name": "showLabels",
        "title": "Show labels",
        "description": "Toggles the visibility of the chart's labels.",
        "type": "boolean"
    }
  ]
}
```

```js fileName=index.js lineHighlight=7-8,17
import React from 'react';
import data from './data';
import { RadialBarChart, RadialBar, Legend } from 'recharts';

export default class CustomVizVisualization extends React.Component {
    render() {
        const { showLabels } = this.props;
        const label = showLabels ? { fill: '#666' } : false

        return (
            <RadialBarChart
                width={1000}
                height={700}
                data={data}
            >
                <RadialBar
                    label={label}
                    background dataKey='val'
                />
                <Legend
                    layout='vertical'
                    verticalAlign='middle'
                    align="right"
                />
            </RadialBarChart>
        )
    }
}
```

### `string`

`string` 속성은 UI에서 텍스트 필드로 렌더링되며 문자열을 나타냅니다.

```json fileName=nr1.json lineHighlight=6-13
{
  "schemaType": "VISUALIZATION",
  "id": "custom-viz",
  "displayName": "CustomViz",
  "description": "MyCustomViz",
  "configuration": [
    {
      "name": "title",
      "title": "Chart title",
      "description": "The chart's title.",
      "type": "string"
    }
  ]
}
```

```js fileName=index.js lineHighlight=8,12-14
import React from 'react';
import data from './data';
import { HeadingText } from 'nr1';
import { RadialBarChart, RadialBar, Legend, Label } from 'recharts';

export default class CustomVizVisualization extends React.Component {
    render() {
        const { title } = this.props;

        return (
            <div>
                <HeadingText className="chart-heading">
                    {title}
                </HeadingText>
                <RadialBarChart
                    width={1000}
                    height={700}
                    data={data}
                >
                    <RadialBar
                        background dataKey='val'
                    />
                    <Legend
                        layout='vertical'
                        verticalAlign='middle'
                        align="right"
                    />
                </RadialBarChart>
            </div>
        )
    }
}
```

### `number`

`number` 속성은 UI에서 텍스트 필드로 렌더링되며 숫자를 나타냅니다. `number` 소품은 3개의 추가 선택적 키를 사용합니다.

* `min`: 텍스트 필드가 취할 수 있는 최소값
* `max`: 텍스트 필드가 취할 수 있는 최대값
* `step`: 유효한 값 사이의 간격

이러한 키를 사용할 수 있지만 적용되지는 않습니다. 순전히 UI 목적으로 사용됩니다.

```json fileName=nr1.json lineHighlight=6-13
{
  "schemaType": "VISUALIZATION",
  "id": "custom-viz",
  "displayName": "CustomViz",
  "description": "MyCustomViz",
  "configuration": [
    {
        "name": "iconSize",
        "title": "Icon size",
        "description": "The size of legend icons.",
        "type": "number"
    }
  ]
}
```

```js fileName=index.js lineHighlight=7,22
import React from 'react';
import data from './data';
import { RadialBarChart, RadialBar, Legend } from 'recharts';

export default class CustomVizVisualization extends React.Component {
    render() {
        const { iconSize } = this.props;

        return (
            <RadialBarChart
                width={1000}
                height={700}
                data={data}
            >
                <RadialBar
                    background dataKey='val'
                />
                <Legend
                    layout='vertical'
                    verticalAlign='middle'
                    align="right"
                    iconSize={iconSize}
                />
            </RadialBarChart>
        )
    }
}
```

### `json`

`json` 속성은 UI에서 텍스트 상자로 렌더링되며 JSON 객체를 나타냅니다.

```json fileName=nr1.json lineHighlight=6-13
{
  "schemaType": "VISUALIZATION",
  "id": "custom-viz",
  "displayName": "CustomViz",
  "description": "MyCustomViz",
  "configuration": [
    {
      "name": "data",
      "title": "Chart data",
      "description": "The data in the chart",
      "type": "json"
    }
  ]
}
```

```js fileName=index.js lineHighlight=6,12
import React from 'react';
import { RadialBarChart, RadialBar, Legend } from 'recharts';

export default class CustomVizVisualization extends React.Component {
    render() {
        const { data } = this.props;

        return (
            <RadialBarChart
                width={1000}
                height={700}
                data={JSON.parse(data)}
            >
                <RadialBar
                    background dataKey='val'
                />
                <Legend
                    layout='vertical'
                    verticalAlign='middle'
                    align="right"
                />
            </RadialBarChart>
        )
    }
}
```

### `enum`

`enum` 속성은 UI에서 드롭다운 메뉴로 렌더링되며 사전 정의된 선택 항목 목록을 나타냅니다. `enum` 은 각각 자체 `title` 및 `value` 포함하는 `items` 의 다시를 가져옵니다. 항목의 `title` 는 UI 표시 제목입니다. `value` 은 React 구성 요소 소품 이름입니다.

```json fileName=nr1.json lineHighlight=6-35
{
  "schemaType": "VISUALIZATION",
  "id": "custom-viz",
  "displayName": "CustomViz",
  "description": "MyCustomViz",
  "configuration": [
    {
        "name": "iconType",
        "title": "Icon shape",
        "description": "The shape of legend icons.",
        "type": "enum",
        "items": [
            {
                "title": "square",
                "value": "square"
            },
            {
                "title": "circle",
                "value": "circle"
            },
            {
                "title": "diamond",
                "value": "diamond"
            },
            {
                "title": "star",
                "value": "star"
            },
            {
                "title": "triangle",
                "value": "triangle"
            }
        ]
    }
  ]
}
```

```js fileName=index.js lineHighlight=7,22
import React from 'react';
import data from './data';
import { RadialBarChart, RadialBar, Legend } from 'recharts';

export default class CustomVizVisualization extends React.Component {
    render() {
        const { iconType } = this.props;

        return (
            <RadialBarChart
                width={1000}
                height={700}
                data={data}
            >
                <RadialBar
                    background dataKey='val'
                />
                <Legend
                    layout='vertical'
                    verticalAlign='middle'
                    align="right"
                    iconType={iconType}
                />
            </RadialBarChart>
        )
    }
}
```

### `nrql`

`nrql` 속성은 UI에서 텍스트 상자로 렌더링되며 NRQL 쿼리를 나타냅니다. `nr1` 구성 요소 라이브러리의 `NrqlQuery` 구성 요소를 쿼리 뉴렐릭의 데이터베이스에 사용할 수 있습니다. 시각화 요구 사항에 맞게 데이터를 변환해야 할 수도 있습니다.

```json fileName=nr1.json lineHighlight=6-13
{
  "schemaType": "VISUALIZATION",
  "id": "custom-viz",
  "displayName": "CustomViz",
  "description": "MyCustomViz",
  "configuration": [
    {
        "name": "query",
        "title": "Query",
        "description": "The query for chart data.",
        "type": "nrql"
    }
  ]
}
```

```js fileName=index.js lineHighlight=8-17,20,23-27,31,42-43
import React from 'react';
import inputData from './data';
import { NrqlQuery } from 'nr1';
import { RadialBarChart, RadialBar, Legend } from 'recharts';

export default class CustomVizVisualization extends React.Component {

    transformData(rawData) {
        if (rawData) {
            return rawData.map((entry) => ({
                "name": entry.metadata.name,
                "val": entry.data[0].y,
                "fill": entry.metadata.color
            }));
        }
    }

    render() {
        const { query } = this.props;

        return (
            <NrqlQuery
                accountId={inputData.accountId}
                query={query}
            >
                {({ data }) => {
                    return <RadialBarChart
                        width={1000}
                        height={700}
                        data={this.transformData(data)}
                    >
                        <RadialBar
                            background dataKey='val'
                        />
                        <Legend
                            layout='vertical'
                            verticalAlign='middle'
                            align="right"
                        />
                    </RadialBarChart>
                }}
            </NrqlQuery>
        )
    }
}
```

<Callout variant="important">
  NRQL 속성은 설정의 어느 위치에나 나타날 수 있지만 nrqlQueries 컬렉션에 넣고 `account-id`과 함께 사용하는 것이 좋습니다. 이렇게 하면 우리는 최고의 NRQL 편집 경험과 기타 유용한 기능(예: 대시보드 필터링)을 즉시 제공할 수 있습니다.
</Callout>

```json fileName=nr1.json lineHighlight=7-25
{
  "schemaType": "VISUALIZATION",
  "id": "custom-viz",
  "displayName": "CustomViz",
  "description": "MyCustomViz",
  "configuration": [
    {
      "name": "nrqlQueries",
      "title": "NRQL Queries",
      "type": "collection",
      "items": [
        {
          "name": "query",
          "title": "Query",
          "description": "NRQL query for visualization",
          "type": "nrql"
        },
        {
          "name": "accountId",
          "title": "Account ID",
          "description": "Account ID to run query against",
          "type": "account-id"
        }
      ]
    },
  ]
}
```

### `account-id`

`account-id` 속성은 UI 에서 드롭다운 메뉴로 렌더링되며 뉴렐릭 계정을 나타냅니다. 메뉴에서 계정을 검색하고 선택할 수 있습니다.

```json fileName=nr1.json lineHighlight=6-13
{
  "schemaType": "VISUALIZATION",
  "id": "custom-viz",
  "displayName": "CustomViz",
  "description": "MyCustomViz",
  "configuration": [
    {
      "name": "account",
      "title": "Account",
      "description": "Select the appropriate New Relic account",
      "type": "account-id"
    }
  ]
}
```

```js fileName=index.js lineHighlight=18,23
import React from 'react';
import { NrqlQuery } from 'nr1';
import { RadialBarChart, RadialBar, Legend } from 'recharts';

export default class CustomVizVisualization extends React.Component {

    transformData(rawData) {
        if (rawData) {
            return rawData.map((entry) => ({
                "name": entry.metadata.name,
                "val": entry.data[0].y,
                "fill": entry.metadata.color
            }));
        }
    }

    render() {
        const { account } = this.props;
        const query = "SELECT count(*) FROM Public_APICall FACET `http.method`"

        return (
            <NrqlQuery
                accountId={account}
                query={query}
            >
                {({ data }) => {
                    return <RadialBarChart
                        width={1000}
                        height={700}
                        data={this.transformData(data)}
                    >
                        <RadialBar
                            background dataKey='val'
                        />
                        <Legend
                            layout='vertical'
                            verticalAlign='middle'
                            align="right"
                        />
                    </RadialBarChart>
                }}
            </NrqlQuery>
        )
    }
}
```

### `namespace`

`namespace` UI의 속성을 단일 제목 아래에 그룹화합니다. 네임스페이스에는 네임스페이스 소품의 속성으로 코드에서 이름으로 액세스되는 `items` 이 있습니다.

```json fileName=nr1.json lineHighlight=6-48
{
  "schemaType": "VISUALIZATION",
  "id": "custom-viz",
  "displayName": "CustomViz",
  "description": "MyCustomViz",
  "configuration": [
    {
        "name": "legend",
        "title": "Legend",
        "type": "namespace",
        "items": [
            {
                "name": "iconSize",
                "title": "Icon size",
                "description": "The size of legend icons.",
                "type": "number"
            },
            {
                "name": "iconType",
                "title": "Icon shape",
                "description": "The shape of legend icons.",
                "type": "enum",
                "items": [
                    {
                        "title": "square",
                        "value": "square"
                    },
                    {
                        "title": "circle",
                        "value": "circle"
                    },
                    {
                        "title": "diamond",
                        "value": "diamond"
                    },
                    {
                        "title": "star",
                        "value": "star"
                    },
                    {
                        "title": "triangle",
                        "value": "triangle"
                    }
                ]
            }
        ]
    }
  ]
}
```

```js fileName=index.js lineHighlight=7,22-23
import React from 'react';
import data from './data';
import { RadialBarChart, RadialBar, Legend } from 'recharts';

export default class CustomVizVisualization extends React.Component {
    render() {
        const { legend } = this.props;

        return (
            <RadialBarChart
                width={1000}
                height={700}
                data={data}
            >
                <RadialBar
                    background dataKey='val'
                />
                <Legend
                    layout='vertical'
                    verticalAlign='middle'
                    align="right"
                    iconSize={legend.iconSize}
                    iconType={legend.iconType}
                />
            </RadialBarChart>
        )
    }
}
```

### `collection`

`collection` 은 단일 제목 아래에 있는 반복 가능한 속성 집합 또는 네임스페이스 그룹입니다. 컬렉션을 생성할 때 컬렉션의 하위 항목에 대한 속성을 지정합니다. UI에서 컬렉션을 구성할 때 컬렉션의 하위 항목 양을 늘리거나 줄일 수 있습니다.

코드에서는 항목의 제외로 collection prop에 액세스합니다.

```json fileName=nr1.json lineHighlight=6-32
{
  "schemaType": "VISUALIZATION",
  "id": "custom-viz",
  "displayName": "CustomViz",
  "description": "MyCustomViz",
  "configuration": [
    {
        "name": "data",
        "title": "Chart data",
        "type": "collection",
        "items": [
            {
                "name": "name",
                "title": "Age group",
                "description": "The age range of the group.",
                "type": "string"
            },
            {
                "name": "val",
                "title": "Amount",
                "description": "The amount of people in the age group.",
                "type": "number",
                "min": 0
            },
            {
                "name": "fill",
                "title": "Bar color",
                "description": "The color of the chart bar.",
                "type": "string"
            }
        ]
    }
  ]
}
```

```js fileName=index.js lineHighlight=6,12
import React from 'react';
import { RadialBarChart, RadialBar, Legend } from 'recharts';

export default class CustomVizVisualization extends React.Component {
    render() {
        const { data } = this.props;

        return (
            <RadialBarChart
                width={1000}
                height={700}
                data={data}
            >
                <RadialBar
                    background dataKey='val'
                />
                <Legend
                    layout='vertical'
                    verticalAlign='middle'
                    align="right"
                />
            </RadialBarChart>
        )
    }
}
```

## 사용 `nr1.json`

`nr1.json`) 자유롭게 편집할 수 있지만 `index.js` 과 달리 로컬로 제공되는 시각화는 변경 사항을 보려면 다시 시작해야 합니다. 따라서 로컬에서 시각화를 제공하는 경우 `CTRL+C` 사용하여 로컬 서버를 해제하고 다시 가동하세요.

```sh
nr1 nerdpack:serve
```

시각화가 이미 게시된 경우 `package.json` 에서 Nerdpack 버전을 업데이트하고 새 버전을 게시하고 구독해야 합니다.

```sh
nr1 nerdpack:publish
nr1 nerdpack:subscribe
```
