---
title: 設定オプション
tags:
  - Custom visualization
metaDescription: Configure your custom visualization
freshnessValidatedDate: '2024-04-29T00:00:00.000Z'
translationType: machine
---

このドキュメントでは、カスタム視覚化を構成する方法と、視覚化の`nr1.json`ファイルの内容について説明します。 これを変更し、視覚化をより柔軟かつ再利用可能にするために使用する方法がわかります。

## 視覚化のメタデータを編集する [#edit]

`nr1.json`ファイルは視覚化ディレクトリにあるメタデータ ファイルで、次のような形式になります。

```json fileName=nr1.json
{
  "schemaType": "VISUALIZATION",
  "id": "fun-visualization",
  "displayName": "FunVisualization",
  "description": "",
  "configuration": []
}
```

次のトップレベル キーが含まれています:

* `schemaType`: Nerdpack アイテムにはすべて`nr1.json`メタデータ ファイルがあります。 `schemaType`はアイテムのスキーマを記述します。 すべての視覚化において、 `schemaType`は`VISUALIZATION`です。
* `id`: 視覚化の文字列識別子。 これは特定の Nerdpack 内で一意である必要がありますが、すべての Nerdpack 間で一意である必要はありません。
* `displayName`: New Relic が**Custom Visualizations** \[カスタム視覚化]で表示する、人間が判読できる名前。
* `description`: New Relic が**Custom Visualizations** \[カスタム視覚化]で表示する説明。
* `configuration`: 視覚化の構成可能なプロパティのリスト。 これらのプロパティは Web UI で編集でき、その値は視覚化コンポーネントに渡されます。

## 視覚化の構成可能なプロパティを宣言する [#declare]

視覚化の構成可能なプロパティを宣言するには、 `nr1.json`ファイルの`configuration`キーの下にそれらをリストします。

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

この例では、 `nrqlQueries`クエリ オブジェクトのコレクションです。 各クエリ オブジェクトは`accountId`と`query`で構成されます。 コレクションとして、この視覚化には複数のクエリ オブジェクトを含めることができます。 `fill`と`stroke`は、視覚化をレンダリングするときに使用できる色を定義する文字列です。

これは、視覚化の設定 UI の次のフィールドの`configuration`結果の例です。

<img
  title="Configure visualization properties"
  alt="Configure visualization properties"
  src="/images/queries-nrql_screenshot-crop_conf-visualization-prop.webp"
/>

**NRQL Queries** \[NRQL クエリ] の横にある**+** に注目してください。これを使用して、クエリ オブジェクトをコレクションに追加できます。クエリが複数ある場合は、クエリの上にマウスを置いて**-**を クリックしてクエリを削除することもできます。 また、ほとんどのフィールドにツールチップが提供されていることにも注意してください。 UI 内の各ツールチップは、そのフィールドの`description` （存在する場合）に対応します。

React コードでは、視覚化コンポーネントのプロパティ内のこれらのフィールドの値にアクセスできます。

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

すべての`configuration`オブジェクトには、次のオプション キーがあります。

* `name`: Reactコンポーネントのプロパティ名
* `title`: UI表示名
* `description`: ツールチップの説明

すべての`configuration`オブジェクトには、フィールドのデータ型を参照する`type`キーが必要です。 各データ タイプは、構成方法と表示方法がそれぞれ異なります。

### `boolean`

`boolean`プロパティは UI でトグルとしてレンダリングされ、true または false の状態を表します。

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

`string`プロパティは UI でテキスト フィールドとしてレンダリングされ、文字列を表します。

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

`number`プロパティは UI でテキスト フィールドとしてレンダリングされ、数値を表します。 `number`プロパティには、3 つの追加のオプション キーが必要です。

* `min`: テキストフィールドが取り得る最小値
* `max`: テキストフィールドが取れる最大値
* `step`: 有効な値の間の間隔

これらのキーは使用可能ですが、強制されません。 これらは純粋に UI 目的のものです。

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

`json`プロパティは UI でテキスト ボックスとしてレンダリングされ、JSON オブジェクトを表します。

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

`enum`プロパティは、UI でドロップダウン メニューとしてレンダリングされ、事前に定義された選択肢のリストを表します。 `enum`は`items`の配列を受け取り、各配列には独自の`title`と`value`が含まれます。 アイテムの`title`は UI 表示タイトルです。 `value`は React コンポーネントのプロパティ名です。

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

`nrql`プロパティは UI にテキスト ボックスとしてレンダリングされ、NRQL クエリを表します。 `nr1` コンポーネント ライブラリの `NrqlQuery` コンポーネントを使用して、 New Relicのデータベースをクエリできます。 視覚化のニーズに合わせてデータを変換する必要がある場合があります。

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
  NRQLプロパティは設定内のどこにでも表示できますが、nrqlQueries コレクション内に配置し、`account-id` を付けることを強くお勧めします。 こうすることで、最高の NRQL 編集エクスペリエンスとその他の便利な機能 (ダッシュボード フィルタリングなど) をすぐに提供できるようになります。
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

`account-id`プロパティは UI にドロップダウン メニューとして表示され、New Relic アカウントを表します。 メニューからアカウントを検索して選択できます。

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

`namespace` UI 内のプロパティを 1 つの見出しの下にグループ化します。 ネームスペースには、ネームスペース プロパティの属性として、コード内で名前によってアクセスされる`items`があります。

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

`collection`は、単一の見出しの下にある繰り返し可能なプロパティ セットまたはネームスペースのグループです。 コレクションを作成するときは、コレクションの子項目のプロパティを指定します。 UI でコレクションを構成するときに、コレクション内の子アイテムの数を増減できます。

コードでは、コレクション プロパティにアイテムの配列としてアクセスします。

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

## 使用する `nr1.json`

`nr1.json`は自由に編集できますが、 `index.js`とは異なり、ローカルで提供される視覚化では変更を確認するために再起動が必要です。 したがって、視覚化をローカルで提供している場合は、 `CTRL+C`を使用してローカル サーバーを終了し、再度起動します。

```sh
nr1 nerdpack:serve
```

視覚化がすでに公開されている場合は、 `package.json`で Nerdpack のバージョンを更新し、新しいバージョンを公開してサブスクライブする必要があります。

```sh
nr1 nerdpack:publish
nr1 nerdpack:subscribe
```
