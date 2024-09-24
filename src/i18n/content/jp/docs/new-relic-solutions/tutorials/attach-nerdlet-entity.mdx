---
title: エンティティにNerdletを添付する
metaDescription: Attach your Nerdlet to entities
freshnessValidatedDate: never
translationType: machine
---

ユーザーが Nerdlet にアクセスする方法の 1 つは、ランチャーを作成することです。 ランチャーは、New Relic の**Apps** \[アプリ]ページから Nerdlet を開きます。 アカウント内の[エンティティ](/docs/new-relic-one/use-new-relic-one/core-concepts/what-entity-new-relic/)から Nerdlet へのアクセスを提供することもできます。

このガイドでは、Nerdlet をエンティティに接続する方法を学習します。

## あなたが始める前に [#begin]

まだ行っていない場合:

* New Relic アカウントに[サインアップする](https://newrelic.com/signup/)
* [New Relic One CLIをインストールして設定する](https://one.newrelic.com/launcher/developer-center.launcher?pane=eyJuZXJkbGV0SWQiOiJkZXZlbG9wZXItY2VudGVyLmRldmVsb3Blci1jZW50ZXIifQ==)

## ナードパックを作成する [#create-nerdpack]

<Steps>
  <Step>
    CLI を更新します:

    ```sh
    nr1 update
    ```
  </Step>

  <Step>
    CLI を使用して Nerdpack を作成します。

    ```sh
    nr1 create --type nerdpack --name entity-nerdlet
    ```

    この結果、 `entity-nerdlet`と呼ばれる Nerdpack が作成されます。これは、 `entity-nerdlet-launcher`と呼ばれるランチャーと、 `entity-nerdlet-nerdlet`と呼ばれる Nerdlet で構成されます。
  </Step>

  <Step>
    Nerdpack を提供します:

    ```sh
    cd entity-nerdlet
    nr1 nerdpack:serve
    ```
  </Step>

  <Step>
    [https://one.newrelic.com/?nerdpacks=local](https://one.newrelic.com/?nerdpacks=local)にアクセスし、 **Apps**に移動します。

    `?nerdpacks=local` ローカルで提供される Nerdpacks を New Relic に読み込むには、これが必要です。
  </Step>

  <Step>
    **Your apps**の下でランチャーをクリックして、New Relic アプリケーションを表示します。
  </Step>
</Steps>

## Nerdletをエンティティに添付する [#attach-nerdlet]

ランチャーから Nerdlet にアクセスする方法を説明しました。 次に、エンティティから Nerdlet にアクセスします。

<Steps>
  <Step>
    Nerdpack のルートディレクトリ内から、 `nerdlets/entity-nerdlet-nerdlet/nr1.json`を開きます。 これは Nerdlet のメタデータ ファイルです。 このファイルを使用して、Nerdlet をエンティティに添付します。
  </Step>

  <Step>
    `entities`配列を持つ`context`オブジェクトを追加します。

    ```json fileName=nerdlets/entity-nerdlet-nerdlet/nr1.json
    {
        "schemaType": "NERDLET",
        "id": "entity-nerdlet-nerdlet",
        "displayName": "EntityNerdletNerdlet",
        "description": "",
        "context": {
            "entities": [
            ]
        }
    }
    ```

    これは、エンティティ コンテキストの配列で Nerdlet を表示することを New Relic に伝えます。
  </Step>

  <Step>
    エンティティ コンテキストを追加します。

    ```json fileName=nerdlets/entity-nerdlet-nerdlet/nr1.json
    {
        "schemaType": "NERDLET",
        "id": "entity-nerdlet-nerdlet",
        "displayName": "EntityNerdletNerdlet",
        "description": "",
        "context": {
            "entities": [
                {
                    "domain": "APM",
                    "type": "APPLICATION"
                }
            ]
        }
    }
    ```

    ここで、Nerdlet を*APM*ドメイン内のすべての*アプリケーション*エンティティに接続しました。
  </Step>

  <Step>
    **APM**に移動します。

    Nerdpack をローカルで提供しているため、 `?nerdpacks=local`クエリ文字列を指定する必要があることに注意してください。
  </Step>

  <Step>
    任意のアプリケーションを選択してください。
  </Step>

  <Step>
    下にスクロールして、アプリケーションに添付された Nerdlet を確認します。

    このメニュー オプションをクリックすると、ランチャーと同じように Nerdlet が表示されます。
  </Step>
</Steps>

## 設定する `entities` [#configure-entity]

Nerdlet の`nr1.json`ファイル内の`context.entities`キーは、Nerdlet をアタッチするエンティティを指定します。

### エンティティを指定する `domain` [#entity-domain]

`domain`を次のいずれかの値として指定して、Nerdlet を特定のエンティティ ドメインにアタッチします。

* `APM`:[アプリケーションパフォーマンス監視](/docs/apm/new-relic-apm/getting-started/introduction-apm/)
* `BROWSER`:[ブラウザ](/docs/browser/browser-monitoring/getting-started/introduction-browser-monitoring/)
* `INFRA`: [インフラモニタリング](/docs/infrastructure/infrastructure-monitoring/get-started/get-started-infrastructure-monitoring/)
* `MOBILE`:[モバイル監視](/docs/mobile-monitoring/new-relic-mobile/get-started/introduction-mobile-monitoring/)
* `SYNTH`: [外形監視](/docs/synthetics/synthetic-monitoring/getting-started/get-started-synthetic-monitoring/)

たとえば、Nerdlet を`APM`ドメイン内のすべてのエンティティにアタッチします。

```json
{
    "context": {
        "entities": [
            {"domain": "APM"}
        ]
    }
}
```

ドメイン内のエンティティ*を除く*すべてのエンティティに Nerdlet をアタッチします。

```json
{
    "context": {
        "entities": [
            {"domain": "!APM"}
        ]
    }
}
```

複数のドメイン内のすべてのエンティティに Nerdlet をアタッチします。

```json
{
    "context": {
        "entities": [
            {"domain": "APM"},
            {"domain": "BROWSER"}
        ]
    }
}
```

### エンティティを指定する `type` [#entity-type]

`type`を次のいずれかの値として指定して、Nerdlet を特定のエンティティ タイプにアタッチします。

* `APPLICATION`
* `HOST`
* `MONITOR`

たとえば、Nerdlet を`APPLICATION`タイプのエンティティすべてにアタッチします。

```json
{
    "context": {
        "entities": [
            {"type": "APPLICATION"}
        ]
    }
}
```

指定されたタイプを*除く*すべてのエンティティに Nerdlet をアタッチします。

```json
{
    "context": {
        "entities": [
            {"type": "!APPLICATION"}
        ]
    }
}
```

型の配列のいずれかに一致する型を持つすべてのエンティティに Nerdlet をアタッチします。

```json
{
    "context": {
        "entities": [
            {"type": "APPLICATION"},
            {"type": "MONITOR"}
        ]
    }
}
```

### エンティティを指定 `tags` [#entity-tags]

指定された[タグを](/docs/new-relic-solutions/new-relic-one/core-concepts/use-tags-help-organize-find-your-data/)持つエンティティに Nerdlet を添付します。

たとえば、特定の GUID を持つエンティティに Nerdlet をアタッチします。

```json
{
    "context": {
        "entities": [
            {
                "tags": [
                    {
                        "key": "guid",
                        "values": [
                            "<SOME ENTITY GUID>"
                        ]
                    }
                ]
            }
        ]
    }
}
```

特定の`accountId`を持ち*、* Python プログラミング言語を使用するすべてのエンティティに Nerdlet をアタッチします。

```json
{
    "context": {
        "entities": [
            {
                "tags": [
                    {
                        "key": "accountId",
                        "values": [
                            "<SOME ACCOUNT ID>"
                        ]
                    },
                    {
                        "key": "language",
                        "values": [
                            "python"
                        ]
                    }
                ]
            }
        ]
    }
}
```

### フィルターを組み合わせる [#combine-filters]

Nerdlet を追加するエンティティをフィルタリングするときに、 `domain` 、 `type` 、 `tags`を組み合わせることができます。

```json
{
    "context": {
        "entities": [
            {
                "domain": "APM",
                "type": "APPLICATION",
                "tags": [
                    {
                        "key": "language",
                        "values": [
                            "python"
                        ]
                    }
                ]
            },
            {
                "domain": "SYNTH",
                "type": "MONITOR"
            },
            {
                "domain": "BROWSER"
            }
        ]
    }
}
```

この例では、Nerdlet を次の場所に添付しました。

* メタデータタグが `python` 言語を指定しているすべてのAPMアプリケーション
* **そして**すべての外形監視モニター
* **そして**すべてのBrowserエンティティ