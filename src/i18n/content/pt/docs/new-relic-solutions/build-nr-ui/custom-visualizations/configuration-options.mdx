---
title: Opções de configuração
tags:
  - Custom visualization
metaDescription: Configure your custom visualization
freshnessValidatedDate: '2024-04-29T00:00:00.000Z'
translationType: machine
---

Neste documento, você aprenderá como configurar sua visualização personalizada e o que está no arquivo `nr1.json` da sua visualização. Você saberá como modificá-lo e como usá-lo para tornar sua visualização mais flexível e reutilizável.

## Edite os metadados da sua visualização [#edit]

O arquivo `nr1.json` é um arquivo de metadados que fica em seu diretório de visualização e se parece com isto:

```json fileName=nr1.json
{
  "schemaType": "VISUALIZATION",
  "id": "fun-visualization",
  "displayName": "FunVisualization",
  "description": "",
  "configuration": []
}
```

Ele contém estas chaves de nível superior:

* `schemaType`: todos os itens do Nerdpack possuem `nr1.json` arquivos de metadados. O `schemaType` descreve o esquema do item. Para todas as visualizações, `schemaType` é `VISUALIZATION`.
* `id`: o identificador de string da sua visualização. Deve ser exclusivo em um determinado Nerdpack, mas não precisa ser exclusivo em todos os Nerdpacks.
* `displayName`: o nome legível que o New Relic exibe em **Custom Visualizations**.
* `description`: a descrição que o New Relic exibe em **Custom Visualizations**.
* `configuration`: uma lista de propriedades configuráveis para sua visualização. Você pode editar essas propriedades na interface da web e seus valores são passados para o seu componente de visualização.

## Declare as propriedades configuráveis da sua visualização [#declare]

Para declarar as propriedades configuráveis da sua visualização, liste-as na chave `configuration` no arquivo `nr1.json` :

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

Neste exemplo, `nrqlQueries` é uma coleção de objetos de consulta. Cada objeto de consulta consiste em um `accountId` e um `query`. Como uma coleção, você pode ter vários objetos de consulta nesta visualização. `fill` e `stroke` são strings que definem uma cor que você pode usar ao renderizar a visualização.

Este é um exemplo de resultados `configuration` nos seguintes campos da interface de configuração da visualização:

<img
  title="Configure visualization properties"
  alt="Configure visualization properties"
  src="/images/queries-nrql_screenshot-crop_conf-visualization-prop.webp"
/>

Observe o **+** ao lado de **NRQL Queries**, que você pode usar para adicionar objetos de consulta à coleção. Você também pode remover consultas passando o mouse sobre elas e clicando em **-**, se tiver mais de uma. Observe também a dica de ferramenta fornecida para a maioria dos campos. Cada dica de ferramenta na interface corresponde ao `description` de seu campo, se houver.

No seu código React, você pode acessar os valores destes campos nas props do seu componente de visualização:

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

Todos os objetos `configuration` possuem as seguintes chaves opcionais:

* `name`: O nome da propriedade do componente React
* `title`: O nome de exibição da interface
* `description`: uma descrição da dica de ferramenta

Todos os objetos `configuration` requerem uma chave `type` que faça referência ao tipo de dados do campo. Cada tipo de dados é único na forma como é configurado e apresentado.

### `boolean`

Uma propriedade `boolean` é renderizada na interface como uma alternância e representa um estado verdadeiro ou falso.

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

Uma propriedade `string` é renderizada na interface como um campo de texto e representa uma sequência de caracteres.

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

Uma propriedade `number` é renderizada na interface como um campo de texto e representa um número. `number` adereços recebem três chaves opcionais extras:

* `min`: O valor mínimo que o campo de texto pode assumir
* `max`: O valor máximo que o campo de texto pode assumir
* `step`: O intervalo entre valores válidos

Embora essas chaves estejam disponíveis, elas não são aplicadas. Eles são puramente para fins de interface do usuário.

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

Uma propriedade `json` é renderizada na interface como uma caixa de texto e representa um objeto JSON.

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

Uma propriedade `enum` é renderizada na interface como um menu suspenso e representa uma lista predefinida de opções. Um `enum` usa uma matriz de `items`, cada uma com seu próprio `title` e `value`. `title` de um item é o título de exibição da interface. Seu `value` é o nome do componente React.

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

Uma propriedade `nrql` é renderizada na interface como uma caixa de texto e representa uma consulta NRQL . Você pode usar o componente `NrqlQuery` da biblioteca de componentes `nr1` para consultar o banco de dados do New Relic. Talvez seja necessário transformar os dados para atender às necessidades da sua visualização.

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
  Embora a propriedade NRQL possa aparecer em qualquer lugar da sua configuração, é altamente recomendável colocá-la dentro da coleção nrqlQueries e acompanhá-la com `account-id`. Dessa forma, seríamos capazes de fornecer a melhor experiência de edição NRQL e outros recursos úteis (como filtragem dashboard ) prontos para uso.
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

Uma propriedade `account-id` é renderizada na interface como um menu suspenso e representa uma conta New Relic . No menu, você pode pesquisar e selecionar uma conta.

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

Um `namespace` agrupa propriedades na interface sob um único título. Um namespace possui `items` que são acessados em código, por nome, como atributo da propriedade namespace .

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

Um `collection` é um grupo de conjuntos de propriedades ou namespaces repetíveis sob um único título. Ao criar uma coleção, você especifica propriedades para os itens filho da coleção. Ao configurar uma coleção na interface, você pode aumentar ou diminuir a quantidade de itens filhos na coleção.

No código, você acessa a propriedade de coleção como uma matriz de itens.

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

## Usar `nr1.json`

Você pode editar `nr1.json` livremente, mas, diferentemente de `index.js` sua visualização servida localmente requer uma reinicialização para ver suas alterações. Portanto, se você estiver exibindo sua visualização localmente, desmonte seu servidor local com `CTRL+C` e ative-o novamente:

```sh
nr1 nerdpack:serve
```

Se sua visualização já estiver publicada, você precisa atualizar a versão do seu Nerdpack em `package.json` e publicar e assinar a nova versão:

```sh
nr1 nerdpack:publish
nr1 nerdpack:subscribe
```
