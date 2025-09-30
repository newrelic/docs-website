---
title: Nerdpackのカタログ情報を更新する
tags:
  - New Relic
  - Nerdpack
metaDescription: Learn to describe your Nerdpack in the Instant Observability catalog.
freshnessValidatedDate: never
translationType: machine
---

スクリーンショット、説明、その他の情報を Nerdpack に追加し、すべてを[Instant App](https://newrelic.com/instant-observability)にアップロードします。

## CLIを更新する [#update-cli]

コマンドを実行する前に、CLI の最新バージョンがインストールされていることを確認してください。

```shell
nr1 update
```

## 権限を確認してください [#check-permissions]

Nerdpack を公開し、カタログ情報を更新するには、次のものが必要です。

* 公開したアカウントへのアクセス。
* Nerdpacks を管理するために[必要な権限](/docs/new-relic-solutions/new-relic-one/build-nr-apps/permission-manage-apps)。

## Nerdpackを公開する [#publish-nerdpack]

カタログ情報を更新する前に、作成した Nerdpack[を公開する](/docs/new-relic-solutions/new-relic-one/build-nr-apps/publish)必要があります。

## Nerdpackのカタログメタデータを更新する [#update-nerdpack]

Nerdpack を[Instant オブザーバビリティ](https://newrelic.com/instant-observability)カタログに公開したら、Nerdpack のメタデータを更新して、Nerdlet または視覚化についてユーザーにすべて知らせます。

```json fileName=catalog/config.json
{
  "tagline": "",
  "details": "",
  "categoryTerms": [],
  "keywords": [],
  "repository": "",
  "whatsNew": "",
  "support": {
    "email": {
      "address": ""
    },
    "issues": {
      "url": ""
    },
    "community": {
      "url": ""
    }
  }
}
```

<Steps>
  <Step>
    [New Relic](https://one.newrelic.com)ホームページから、上部のナビゲーション バーの<DNT>**+ Integrations & Agents**</DNT>に移動します。
  </Step>

  <Step>
    アプリ フィルターまたは検索バーを使用して、公開済みの Nerdpack を見つけます。 Nerdpack の名前と`nr1.json`にある簡単な説明以外には、情報や詳細ページがないことに注意してください。 スクリーンショット、アイコン、詳細、新機能などはありません。 これらについては、Nerdpack にカタログ情報を提供する必要があります。
  </Step>

  <Step>
    Nerdpack のルートから、Nerdpack のスクリーンショットとメタデータを格納する**カタログ**ディレクトリを作成します。

    ```sh
    nr1 create --type catalog
    [output] {success}✔{normal}  created: launchers/launcher/catalog
    [output] {success}✔{normal}  created: nerdlets/home/catalog
    [output]
    [output] {success}✔{normal}  catalog created successfully!
    [output]    {purple}catalog{normal} is available at "./catalog"
    ```

    ルート`catalog`ディレクトリ内には、Nerdpack に関する情報をユーザーに表示するための特定のファイルとディレクトリがあります。

    ```sh
    ls catalog
    [output] README.md         additionalInfo.md config.json       documentation.md  {blue}screenshots
    ```

    <table>
      <thead>
        <tr>
          <th>
            ファイル
          </th>

          <th>
            説明
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            README.md
          </td>

          <td>
            カタログ内の情報とメタデータの使用方法を説明するマークダウンファイル
          </td>
        </tr>

        <tr>
          <td>
            config.json
          </td>

          <td>
            次のフィールドを含む JSON ファイル:

            * `tagline`: アプリケーションの簡単な見出し。 30 文字を超えることはできません。

            * `repository`: Nerdpack のリモート リポジトリの URL。 1000 文字を超えることはできません。

            * `details`: Nerdpack の目的とその使用方法。 1000 文字を超えることはできません。 書式設定には改行を使用し、マークダウンや HTML を含めないでください。

            * `categoryTerms`: Nerdpack[を Instant のアクセシビリティ](https://newrelic.com/instant-observability)カタログのカテゴリに一致させる用語のリスト。 NerdGraph を使用すると、カテゴリ用語のマッピングを調べることができます。

              * [米国のクエリ](https://api.newrelic.com/graphiql?#query=%7B%0A%20%20actor%20%7B%0A%20%20%20%20nr1Catalog%20%7B%0A%20%20%20%20%20%20categories%20%7B%0A%20%20%20%20%20%20%20%20displayName%0A%20%20%20%20%20%20%20%20terms%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A)
              * [EUクエリ](https://api.eu.newrelic.com/graphiql?#query=%7B%0A%20%20actor%20%7B%0A%20%20%20%20nr1Catalog%20%7B%0A%20%20%20%20%20%20categories%20%7B%0A%20%20%20%20%20%20%20%20displayName%0A%20%20%20%20%20%20%20%20terms%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A)

            * `keywords`: Nerdpack の検索の発見可能性を向上させる関連単語のリスト。 50 語を超えることはできません。また、各語は 64 文字を超えることはできません。

            * `support`: 次の内容を含むオブジェクト:

              * `issues`: リポジトリの問題リストの URL。 たとえば、GitHub を使用している場合は**Issues** \[問題]タブです。
              * `email`: アプリケーションをサポートするチームの有効な電子メール アドレス。
              * `community`: トラブルシューティングと使用方法のサポートのためのサポート スレッド、フォーラム、または Web サイトの URL。

            * `whatsNew`: 現在のリリース バージョンの変更点の箇条書きリスト。 500 文字を超えることはできません。 書式設定には改行を使用し、マークダウンや HTML を含めないでください。

              実際の実装を確認するには、 [Pageview Map アプリケーションの`config.json`](https://github.com/newrelic/nr1-pageview-map/blob/main/catalog/config.json)をご覧ください。
          </td>
        </tr>

        <tr>
          <td>
            ドキュメント
          </td>

          <td>
            Nerdpack の Nerdlets または視覚化の使用方法をユーザーに伝えるマークダウン ファイル。 これは詳細ビューの**Documentation** \[ドキュメント]タブに表示されます。
          </td>
        </tr>

        <tr>
          <td>
            追加情報.md
          </td>

          <td>
            アプリケーションの使用に関する追加情報のためのオプションのマークダウンファイル
          </td>
        </tr>

        <tr>
          <td>
            スクリーンショット
          </td>

          <td>
            Nerdlets や視覚化の選択画像など、Nerdpack を紹介するスクリーンショットを含むディレクトリ。 含められる画像は 6 枚までです。 すべてのスクリーンショットは次の基準を満たしている必要があります。

            * 3:2アスペクト比
            * PNG形式
            * 横向き
            * 幅1600～2400ピクセル
          </td>
        </tr>
      </tbody>
    </table>

    このコマンドは、Nerdpack 内の各ランチャー、Nerdlet、視覚化に対して`catalog`ディレクトリも生成します。 内部には、Nerdpack の各アイテムのスクリーンショットを追加できるディレクトリがあります。

    ```shell
    ls launchers/launcher/catalog
    [output] {blue}screenshots
    [output]
    ls nerdlets/home/catalog
    [output] {blue}screenshots
    ```
  </Step>

  <Step>
    Nerdpack の`documentation.md`ファイルを更新します:

    ```md fileName=catalog/documentation.md
    Enter your first and last name into the fields provided. When you're done, press **Submit** to see a personalized "Hello!" message.
    ```
  </Step>

  <Step>
    `config.json`ファイルを更新します:

    ```json fileName=catalog/config.json
    {
        "tagline": "Say hi!",
        "details": "DemoApp says Hello to a user.",
        "categoryTerms": [],
        "keywords": ["hello world"],
        "repository": "https://github.com/newrelic/developer-website",
        "whatsNew": "feat: Initial commit"
    }
    ```
  </Step>

  <Step>
    スクリーンショットをルート`screenshots`ディレクトリまたは Nerdpack アイテム`screenshots`ディレクトリに含めます。
  </Step>

  <Step>
    情報を Instant of servability カタログに送信します。

    ```shell
    nr1 catalog:submit
    [output] Uploading screenshots from demo-app...
    [output]  {success}✔{normal}  Screenshots uploaded from: demo-app
    [output] Uploading screenshots from demo-app/launchers/launcher...
    [output]  {success}✔{normal}  Screenshots uploaded from: demo-app/launchers/launcher
    [output] Uploading screenshots from demo-app/nerdlets/home...
    [output]  {success}✔{normal}  Screenshots uploaded from: demo-app/nerdlets/home
    [output]  {success}✔{normal}  Updated metadata for DemoApp 1.0.0
    ```
  </Step>

  <Step>
    変更を確認するには、「インスタント アクセシビリティ」に移動します。 新しい詳細を表示するには、Nerdpack をクリックしてください。 次に、 **What's inside**をクリックすると、Nerdpack 内の個々のアイテムにアップロードしたスクリーンショットが表示されます。
  </Step>
</Steps>

## Nerdpackのアイコンを更新する [#nerdpack-icons]

Nerdpack 内では、次の 2 種類のアイコンを設定できます。

* 1 つは Nerdpack 全体用で、カタログ内で Nerdpack を表します。
* ランチャーごとに 1 つずつあり、Nerdlets を表します。

これらのアイコンを置き換えて Nerdpack を公開し、変更を確認してください。

<Steps>
  <Step>
    Nerdpack のルートにある`icon.png`を更新します。 このアイコンはカタログと Nerdpack の詳細ページで使用されます。
  </Step>

  <Step>
    1 つ以上のランチャーを含む Nerdpack をビルドする場合は、各ランチャーのサブフォルダー内の`icon.png`を更新します。
  </Step>

  <Step>
    `package.json`バージョンを更新します:

    ```json fileName=package.json lineHighlight=4
    {
      "private": true,
      "name": "demo-app",
      "version": "1.0.1",
      "scripts": {
        "start": "nr1 nerdpack:serve",
        "test": "exit 0"
      },
      "nr1": {
        "uuid": "f2dbc999-e9a3-49b9-933d-5a704c6750bd"
      },
      "dependencies": {
        "prop-types": "^15.6.2",
        "react": "^16.6.3",
        "react-dom": "^16.6.3"
      },
      "browserslist": ["last 2 versions", "not ie < 11", "not dead"]
    }
    ```

    これにより、Nerdpack の新しいバージョンを公開できるようになります。
  </Step>

  <Step>
    Nerdpack[を公開する](/docs/new-relic-solutions/new-relic-one/build-nr-apps/publish):

    ```sh
    nr1 nerdpack:publish
    ```
  </Step>

  <Step>
    `catalog/config.json`の`whatsNew`文字列を更新します:

    ```json fileName=catalog/config.json
    {
      "tagline": "Say hi!",
      "details": "DemoApp says Hello to a user.",
      "categoryTerms": [],
      "keywords": ["hello world"],
      "repository": "https://github.com/newrelic/developer-website",
      "whatsNew": "feat: Add new icons"
    }
    ```

    これにより、最新バージョンの Nerdpack に何を追加したかがユーザーに伝わります。
  </Step>

  <Step>
    この新しいメタデータをカタログに送信します。

    ```sh
    nr1 catalog:submit
    [output] Uploading screenshots from demo-app...
    [output]  {success}✔{normal}  Screenshots uploaded from: demo-app
    [output] Uploading screenshots from demo-app/launchers/launcher...
    [output]  {success}✔{normal}  Screenshots uploaded from: demo-app/launchers/launcher
    [output] Uploading screenshots from demo-app/nerdlets/home...
    [output]  {success}✔{normal}  Screenshots uploaded from: demo-app/nerdlets/home
    [output]  {success}✔{normal}  Updated metadata for DemoApp 1.0.1
    ```
  </Step>

  <Step>
    新しいアイコンを表示するには、カタログにアクセスして[Nerdpack をサブスクライブしてください](/docs/new-relic-solutions/new-relic-one/build-nr-apps/subscribe)。
  </Step>
</Steps>

## カタログ情報の送信に関する問題を解決する [#resolve-issues]

カタログ メタデータを操作するときに、問題が発生することがあります。 これらの問題を解決するための一般的な解決策をいくつか検討してください。

### Nerdpackを公開する [#publish-nerdpack]

すでに公開されている Nerdpacks のカタログ メタデータのみを送信できることに注意してください。 公開されていない Nerdpack の情報を送信しようとすると、CLI が支援を試みます:

```sh
nr1 catalog:submit
[output] Uploading screenshots...
[output]  {error}›{normal}   Error: {error}1 error while updating DemoApp 1.0.0
[output]  {error}›
[output]  {error}›   Invalid Version: Nerdpack version 1.0.0 not found. Have you run `nr1 nerdpack:publish` yet?
[output]  {error}›{normal}   Code: UNKNOWN
```

### 画像のサイズを変更する [#resize-images]

カタログのスクリーンショットは、このガイドで前述した基準を満たしている必要があります。 そうでない場合は、CLI が支援を試みます:

```sh
nr1 catalog:submit
[output] Uploading screenshots...
[output]  {error}›{normal}   Error: {error}2 errors while updating DemoApp 1.0.1
[output]  {error}›{normal}
[output]  {error}›{normal}   {blue}catalog/screenshots/screenshot.png
[output]  {error}›{normal}   {red}Invalid Screenshot: screenshot.png has a size ratio of 4:2. Update size ratio to 3:2.
[output]  {error}›{normal}
[output]  {error}›{normal}   {blue}catalog/screenshots/screenshot.png
[output]  {error}›{normal}   {red}Invalid Screenshot: screenshot.png has a width of 3054px. Update size to be between 1600px and 2400px.
[output]  {error}›{normal}   Code: UNKNOWN
```

### 弦の長さを確認する [#check-strings]

`config.json`のコンテンツのほとんどには文字列の長さの要件があります。 `config.json`ファイルを更新するときは、必ずこれらの要件を確認し、それに従ってください。 そうしないと、設定をカタログに送信しようとするとエラーが表示されます。

```sh
nr1 catalog:submit
[output] Uploading screenshots...
[output]  {success}✔{normal}  Screenshots uploaded
[output]  {error}›{normal}   Error: {error}2 errors while updating DemoApp 1.0.1
[output]  {error}›{normal}
[output]  {error}›{normal}   {blue}catalog/config.json
[output]  {error}›{normal}   {error}Invalid Metadata: `details` has a character length of 2204. Must be no longer than 1000 characters
[output]  {error}›{normal}
[output]  {error}›{normal}   {blue}catalog/config.json
[output]  {error}›{normal}   {error}Invalid Metadata: `tagline` has a character length of 266. Must be no longer than 30 characters
[output]  {error}›{normal}   Code: UNKNOWN
```
