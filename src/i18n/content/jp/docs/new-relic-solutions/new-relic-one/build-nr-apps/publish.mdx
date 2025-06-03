---
title: Nerdpackを公開する
tags:
  - New Relic
  - Nerdpack
  - Publish
metaDescription: Learn to publish your Nerdpack to Instant Observability.
freshnessValidatedDate: never
translationType: machine
---

Nerdpack がまだ開発中であっても、テストの準備が整っていても、安定していても、公開して他の人と共有できます。

## CLIを更新する

コマンドを実行する前に、CLI の最新バージョンがインストールされていることを確認してください。

```shell
nr1 update
```

## 権限を確認してください

Nerdpack を公開すると、Instant の可用性カタログに登録されます。 そこから、一部のユーザーが Nerdpack を購読できるようになります。 サブスクリプションユーザーは以下が必要です:

* Nerdpackを公開したアカウントへのアクセス
* Nerdpacksを管理するために[必要な権限](/docs/new-relic-solutions/new-relic-one/build-nr-apps/permission-manage-apps)

## パッケージのバージョンを更新する

パッケージ バージョン[を Instant Support](https://newrelic.com/instant-observability)カタログに公開できるのは 1 回だけです。 たとえば、バージョン 1.0.0 のインスタンスを 2 つ公開することはできません。 したがって、新しいバージョンのコードをデプロイするたびに、Nerdpack の`package.json`ファイルでバージョンを増やす必要があります。

```json fileName=package.json lineHighlight=4
{
  "private": true,
  "name": "demo-app",
  "version": "1.0.0",
  "scripts": {
    "start": "nr1 nerdpack:serve",
    "test": "exit 0"
  },
  "nr1": {
    "uuid": "ab123c45-678d-9012-efg3-45hi6jkl7890"
  },
  "dependencies": {
    "prop-types": "^15.6.2",
    "react": "^16.6.3",
    "react-dom": "^16.6.3"
  },
  "browserslist": ["last 2 versions", "not ie < 11", "not dead"]
}
```

<Callout variant="tip">
  Nerdpack のバージョンはセマンティック バージョン管理に従います。 詳細については[ドキュメント](https://semver.org)をお読みください。
</Callout>

## NerdpackのUUIDを生成する

`nr1 create --type nerdpack`を使用して Nerdpack を最初から構築した場合、Nerdpack には一意の識別子が付きます。 ルートディレクトリの`nr1.json`ファイルでこの識別子を見つけます。

```json fileName=nr1.json lineHighlight=3
{
  "schemaType": "NERDPACK",
  "id": "ab123c45-678d-9012-efg3-45hi6jkl7890",
  "displayName": "DemoApp",
  "description": "Nerdpack demo-app"
}
```

この ID は、Nerdpack をカタログに公開するときに、Nerdpack に対して一意である必要があります。 プラットフォームは、ID を認識した場合、Nerdpack を拒否します。 したがって、既存の Nerdpack をクローンした場合、または OSS コードを使用している場合は、新しい UUID を生成します。

```shell
nr1 nerdpack:uuid --generate --force
```

<Callout variant="tip">
  詳細については、 [`nr1 nerdpack:uuid`](/docs/new-relic-solutions/build-nr-ui/nr1-cli/nr1-nerdpack/#nr1-nerdpackuuid)ドキュメントをお読みください。 または、 `nr1`ヘルプ ページを参照してください:

  ```shell
  nr1 nerdpack:uuid --help
  ```
</Callout>

## Nerdpackを公開する

<Steps>
  <Step>
    Nerdpack のルート フォルダーで、 `nr1 nerdpack:publish`を実行します。

    ```shell
    nr1 nerdpack:publish
    ```

    Nerdpack が正常に公開された場合は、次のような成功出力が表示されます。

    ```shell
    [output] {green}✔{normal}  Nerdpack published successfully!
    [output] {green}✔{normal}  Tagged {purple}ab123c45-678d-9012-efg3-45hi6jkl7890{normal} version {blue}1.0.0{normal} as {blue}STABLE{normal}.
    ```

    この出力は、公開された Nerdpack について説明します。 まず、Nerdpack の ID ( `ab123c45-678d-9012-efg3-45hi6jkl7890` ) を示します。 次に、そのバージョン（ `1.0.0` ）。 最後に、バージョン タグ ( `STABLE` ) です。

    Nerdpack の ID とバージョンはすでに管理されていますが、バージョン タグは新しいものです。 Nerdpack のバージョンを管理するには、任意のタグを付けることができます。 たとえば、バージョンがまだ開発中の場合は、 `DEV`タグでタグ付けできます。 バージョンが QA フェーズに移行する場合は、 `QA`のタグを付けることができます。 本番環境の準備が整ったら、 `STABLE`タグを付けることができます。

    <Callout variant="tip">
      詳細については、[タグ ガイドを](/docs/new-relic-solutions/new-relic-one/build-nr-apps/tag)お読みください。
    </Callout>

    タグ付きの Nerdpack を公開するには、 `-t`または`--tag`オプションを使用します。

    ```shell
    nr1 nerdpack:publish --tag DEV
    ```

    `nr1 nerdpack:publish`出力で確認したように、タグを渡さない場合、 `nr1` `STABLE`タグを自動的に適用します。 ただし、 `-T`または`--skip-tag`オプションを使用して、リリースにタグを適用しないように指示できます。

    ```shell
    nr1 nerdpack:publish --skip-tag
    ```

    また、ドライランを実行して、Nerdpack を希望どおりに公開できるかどうかを確認することもできます。

    ```shell
    nr1 nerdpack:publish --dry-run
    ```
  </Step>

  <Step>
    Nerdpack を正常に公開したら、 [New Relic](https://one.newrelic.com)に移動します。 ローカルで提供されている Nerdpack ではなく、公開されている Nerdpack を表示するため、 `?nerdpacks=local`クエリ文字列を渡す必要はありません。
  </Step>

  <Step>
    **+ Integrations & Agents**に移動します。 New Relic アプリケーションを公開した場合でも、カスタム視覚化を公開した場合でも、プロジェクトはここで見つかります。
  </Step>

  <Step>
    アプリ フィルターまたは検索バーを使用して、公開済みの Nerdpack を見つけます。

    <Callout variant="tip">
      [インスタントオブザバビリティ](https://newrelic.com/instant-observability)には、タグバージョンの Nerdpack のみが表示されます。 したがって、タグなしで公開した場合、または公開した Nerdpack からタグを削除した場合、カタログには表示されません。
    </Callout>
  </Step>
</Steps>

## 公開したNerdpackへのアクセスに関する問題を解決する

Nerdpack を公開するときに、問題が発生することがあります。 コードに何らかの問題があるため Nerdpack を公開できない場合や、Instant の可用性で Nerdpack が見つからない場合は、これらの問題を解決するための一般的な解決策を検討してください。

### コマンドをデバッグする

Nerdpack を公開しようとするときは、 `nr1`コマンドの出力を注意深く読んでください。 次のような成功出力が返される場合があります:

```shell
[output] {green}✔{normal}  Nerdpack published successfully!
[output] {green}✔{normal}  Tagged {purple}ab123c45-678d-9012-efg3-45hi6jkl7890{normal} version {blue}1.0.0{normal} as {blue}STABLE{normal}.
```

ただし、出力には Nerdpack のエラーが表示される場合があります。 例えば：

```shell
[output] Publishing Nerdpack DemoApp ({purple}ab123c45-678d-9012-efg3-45hi6jkl7890{normal})
[output] {error}›{normal}   Error: There is already a Nerdpack with given id & version.
[output] {error}›{normal}   Code: 409
```

より詳細な出力を表示するのにも役立つ場合があります。 詳細なコンテンツを表示するには、 `--verbose`コマンドを使用します。

```sh
nr1 nerdpack:publish --verbose
```

## 公開したNerdpack情報を公開する

New Relic で Nerdpack が見つからない場合は、タグ付けされていない可能性があります。 公開した Nerdpack のバージョンを**Apps** \[アプリ]ページに表示するには、少なくとも 1 つにタグが付いている必要があることに注意してください。 `nr1 nerdpack:info`で公開した Nerdpack の詳細情報を参照してください:

```shell
nr1 nerdpack:info
[output] Id: {purple}ab123c45-678d-9012-efg3-45hi6jkl7890
[output] Region: {muted}us
[output] Account ID: 3014918
[output] Local version: 1.0.0
[output] Subscription Model: OWNER_AND_ALLOWED
[output] Version Count: 1
[output]
[output] {white}Version  Date         Tags
[output] -------  -----------  ----
[output] 1.0.0    {muted}3 hours ago
```

この例では、公開されたバージョンが 1 つありますが、タグ付けされていません。 公開されたバージョンには次のタグを付けることができます。

```sh
nr1 nerdpack:tag --from-version=1.0.0 --tag=DEV
```

ここで、 browserページを更新すると、**Apps** \[アプリ]に Nerdpack が表示されます。

<Callout variant="tip">
  詳細については、 [`nr1 nerdpack:tag`](/docs/new-relic-solutions/build-nr-ui/nr1-cli/nr1-nerdpack/#nr1-nerdpacktag)ドキュメントをお読みください。
</Callout>

## ローカルプロファイルを確認する

`nr1`を使用すると、[デフォルトの New Relic プロファイルを設定](/docs/new-relic-solutions/build-nr-ui/nr1-cli/nr1-common/#nr1-profiles)できます。 このプロファイルは、コマンドの`--profile`オプションで特に指定しない限り、すべてのコマンドに使用されます。 Nerdpack を公開すると、あなたのアカウントにアクセスできるユーザーだけが公開された Nerdpack を見ることができます。

したがって、 New Relicで Nerdpack が見つからないが、公開されていることがわかっている場合は、ローカル プロファイルとbrowserで使用しているプロファイルを比較して、同じであることを確認してください。
