---
title: Crie um Nerdpack
metaDescription: Create a Nerdpack
freshnessValidatedDate: never
translationType: machine
---

<Callout variant="tip">
  Esta lição faz parte de um curso que ensina como construir um aplicativo New Relic do zero. Se ainda não o fez, confira a Visão Geral.

  Cada lição do curso se baseia na anterior, portanto, certifique-se de ter concluído a última lição, Instalar e configurar a CLI do New Relic One, antes de iniciar esta.
</Callout>

Um Nerdpack é um pacote que contém todos os arquivos que compõem um aplicativo ou visualização New Relic. Nerdpacks incluem arquivos para metadados, Nerdlets, ativos e muito mais. Para criar um Nerdpack, use a CLI do New Relic One:

```bash
nr1 create --type nerdpack
```

Quando `nr1` solicitar um nome de componente, use "ab-test" e observe a ferramenta criar as bases do seu Nerdpack. Quando terminar, explore os arquivos criados para você.

## Root directory [#root]

No nível raiz, você tem um diretório chamado `ab-test`. Tudo dentro deste diretório faz parte do Nerdpack:

```bash
ls ab-test
[output] README.md         {blue}nerdlets{plain}          nr1.json          package.json
[output] {blue}launchers         node_modules{plain}      package-lock.json
```

`Readme.md` fornece instruções para criar elementos Nerdpack e servir seu aplicativo localmente. Isto e `nr1 --help` são úteis se você esquecer como interagir com seu Nerdpack usando a ferramenta de linha de comando.

### Arquivos Javascript [#javascript]

`package.json`, `package-lock.json` e _node_modules_ são importantes para executar seu aplicativo JavaScript, mas não são exclusivos dos Nerdpacks. Você pode aprender sobre esses módulos em cursos de JavaScript, caso precise ajustá-los. Por enquanto, dê uma olhada em `nr1.json`, um dos arquivos mais relevantes deste diretório.

### Arquivo de metadados [#metadata]

`nr1.json` é o arquivo de metadados do Nerdpack, contendo um tipo de esquema, identificador exclusivo, um nome de exibição e uma descrição. Como você está construindo um aplicativo New Relic para executar e analisar o teste A/B, atualize o `displayName` do pacote para "teste A/B" e defina a descrição para "teste A/B seu aplicativo usando New Relic One":

```json
fileName=nr1.json
{
    "schemaType": "NERDPACK",
    "id": "311bcd0c-f7eb-4285-afed-4219179bf91d",
    "displayName": "A/B Test",
    "description": "A/B test your application using New Relic One."
}
```

É bom descrever a finalidade do seu aplicativo, especialmente se você for publicá-lo para uso de outras pessoas.

A seguir, observe os subdiretórios `launchers` e `nerdlets`.

## Launchers [#launchers]

`launchers` é um diretório porque você pode criar vários launchers para seu aplicativo New Relic. `nr1 create` criou apenas um launcher para seu Nerdpack e o chamou de "ab-test-launcher". Dentro de seu diretório, existem dois arquivos:

* `icon.png` é uma imagem que representa o aplicativo
* `nr1.json` é o arquivo de metadados do launcher

Use "teste A/B Launcher" para o `displayName` do launcher e "Open the teste A/B Nerdlet" para o `description` em _nr1.json_:

```json
fileName=launchers/ab-test-launcher/nr1.json
{
    "schemaType": "LAUNCHER",
    "id": "ab-test-launcher",
    "displayName": "A/B Test Launcher",
    "description": "Open the A/B test Nerdlet",
    "rootNerdletId": "ab-test-nerdlet"
}
```

Observe que o launcher tem um `rootNerdletId`. Isso identifica o Nerdlet que o inicializador abre quando é selecionado. Este Nerdpack possui apenas um Nerdlet, chamado `ab-test-nerdlet`, mas alguns Nerdpacks podem ter vários. Certifique-se de definir `rootNerdletId` para o Nerdlet que deseja que o launcher abra.

## Nerdlets [#nerdlets]

O diretório `nerdlets` contém todos os Nerdlets que compõem seu aplicativo New Relic. Como `ab-test-nerdlet` é o único Nerdlet neste Nerdpack, existe apenas um subdiretório. Em `nerdlets/ab-test-nerdlet`, existem três arquivos:

* `index.js` é o arquivo JavaScript que contém seu componente Nerdlet
* `styles.scss` contém a folha de estilo Sass do seu Nerdlet
* `nr1.json` contém os metadados do Nerdlet

Atualize `displayName` do seu Nerdlet para "teste A/B" e `description` para "Controlar e visualizar resultados do seu teste A/B":

```json fileName=nerdlets/ab-test-nerdlet/nr1.json
{
    "schemaType": "NERDLET",
    "id": "ab-test-nerdlet",
    "displayName": "A/B Test",
    "description": "Control and view results of your A/B test"
}
```

Agora você personalizou seu Nerdpack, Nerdlet e launcher com nomes de exibição e descrições informativas, mas o que seu aplicativo realmente faz? Confira `index.js` para ver a aparência do seu Nerdlet padrão:

```js fileName=nerdlets/ab-test-nerdlet/index.js
import React from 'react';

export default class AbTestNerdletNerdlet extends React.Component {
    render() {
        return <h1>Hello, ab-test-nerdlet Nerdlet!</h1>;
    }
}
```

Aqui você tem `AbTestNerdletNerdlet`, que `nr1` criou para você. É um componente React que renderiza um título de boas-vindas de primeiro nível. Como este é o Nerdlet raiz, conforme especificado no arquivo `nr1.json` do seu launcher, quando você clica no seu launcher na plataforma New Relic, o launcher abrirá uma visualização que exibe este título.

<Callout variant="tip">
  Nesta lição, você usou `nr1 create` para criar um Nerdpack, completo com um launcher e um Nerdlet. Se quiser criar outro Nerdlet ou Launcher no seu Nerdpack, você também pode fazer isso com `nr1 create`:

  ```sh
  nr1 create --type nerdlet
  nr1 create --type launcher
  ```

  Você pode até pular a sinalização `--type` e selecionar uma opção em uma lista:

  ```sh
  nr1 create
  [output] {green}?{plain} What kind of component do you want to create? {muted}› - Use arrow-keys. Return to submit.
  [output]     nerdpack
  [output] {green}❯   nerdlet{muted} - create a/an Nerdlet Nerdpack item inside your Nerdpack.
  [output]     launcher
  [output]     catalog
  [output]     visualization
  ```
</Callout>

Na próxima lição, você aprenderá como servir seu Nerdpack localmente e ver seu aplicativo em ação!

<Callout variant="tip">
  Esta lição faz parte de um curso que ensina como construir um aplicativo New Relic do zero. Continue para a próxima lição: Servir seu aplicativo New Relic.
</Callout>
