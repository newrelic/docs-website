---
title: New Relicアプリケーションを公開する
metaDescription: Publish your New Relic application
freshnessValidatedDate: never
translationType: machine
---

<Callout variant="tip">
  このレッスンは、New Relic アプリケーションをゼロから構築する方法を学習するコースの一部です。 まだご覧になっていない方は、概要をご覧ください。

  コースの各レッスンは前回のレッスンに基づいて構築されるため、このレッスンを開始する前に、前回のレッスン「カタログ用のアプリの説明」を完了していることを確認してください。
</Callout>

前回のレッスンでは、このコースを通じて構築してきた A/B テスト アプリのカタログ情報を作成しました。 次に、アプリを Instant App カタログに公開し、カタログの詳細を送信します。

## バージョンとタグ [#versions]

アプリケーションを公開するには、次の 2 つの重要な情報が必要です。

* version
* タグ

アプリケーションのバージョンは、アプリケーションに含まれるコードを識別し、Nerdpack のルート レベルの`package.json`ファイルに保存されます。 Nerdpack 内のコードを修正してリリースする準備ができたら、そのたびに`package.json`のバージョンを更新します。 たとえば、アプリケーション コードの最初のメジャー バージョンでいくつかのバグを修正した場合、その変更をバージョン`1.0.1`で公開する場合があります。

アプリ バージョンのタグはその状態を表します。 たとえば、開発中のアプリケーションのバージョン`0.0.1`は、開発中であることを示す`DEV`タグ付きで公開される場合があります。

<Callout variant="tip">
  タグの使用方法を規定するいくつかのルールがあり、それらについてはタグのドキュメントで読むことができます。
</Callout>

## 最初のアプリケーションを公開する [#publish]

<Steps>
  <Step>
    [コースワークリポジトリ](https://github.com/newrelic-experimental/nru-programmability-course)の`publish/ab-test`ディレクトリに変更します:

    ```sh
    cd nru-programmability-course/publish/ab-test
    ```

    このディレクトリには、コースのこの時点でアプリケーションに含まれることが予想されるコードが含まれています。 各レッスンの開始時に正しいディレクトリに移動することで、カスタム コードが残され、間違ったコードがレッスン間で持ち越されることがなくなります。
  </Step>

  <Step>
    `nru-programmability-course/publish/ab-test`にある Nerdpack のルートに移動します。
  </Step>

  <Step>
    独自のアプリ UUID を生成します:

    ```sh
    nr1 nerdpack:uuid -gf
    ```

    UUID は、New Relic アプリ レジストリでアプリを識別するために使用されます。 このコース用に開発したコードを使用しているため、既存の UUID を持つアプリケーションがレジストリに既に存在しています。 独自に生成することで、このアプリケーションを公開できるようになりました。

    <Callout
      variant="tip"
      title="技術的詳細"
    >
      UUID はアプリをアカウントに結び付けるため、アプリはそれをインストールしたアカウントに代わって Nerdgraph リクエストを行うことができます。
    </Callout>
  </Step>

  <Step>
    `package.json`で、 `version`を`1.0.0`に設定します。

    ```json
    {
      "private": true,
      "name": "ab-test",
      "version": "1.0.0",
      "scripts": {
        "start": "nr1 nerdpack:serve",
        "test": "exit 0"
      },
      "nr1": {
        "uuid": "2d923ba6-d231-4dd3-830f-b1923577a422"
      },
      "dependencies": {
        "prop-types": "^15.6.2",
        "react": "^16.6.3",
        "react-dom": "^16.6.3"
      },
      "browserslist": ["last 2 versions", "not ie < 11", "not dead"]
    }
    ```

    New Relic は[セマンティック バージョン](https://semver.org)管理を使用しており、この規則では、 `1.0.0`最初のメジャー リリースを示します。 これで、公開する準備ができました。
  </Step>

  <Step>
    プロジェクト内のすべての`<YOUR NEW RELIC ACCOUNT ID>`および`<YOUR NEW RELIC ENTITY GUID>`のインスタンスを、それぞれ実際の New Relic[アカウント ID](/docs/accounts/accounts-billing/account-setup/account-id)およびエンティティ GUID に置き換えます。
  </Step>

  <Step>
    New Relic アプリケーションを公開します。

    ```sh
    nr1 nerdpack:publish -t DEV
    ```

    それでおしまい！ アプリケーションを New Relic のレジストリに公開しました。 `-t`は公開バージョンのタグを指定します。 その他のログの中で、コンソールに次の確認が表示されます。

    ```sh
    [output] Publishing Nerdpack AbTest ({blue}9da77738-9cf6-43c7-9ba0-e3a8c6ac7380{plain})
    [output]  {success}✔{plain}  Nerdpack published successfully!
    [output]  {success}✔{plain}  Tagged {blue}9da77738-9cf6-43c7-9ba0-e3a8c6ac7380{plain} version {green}1.0.0{plain} as {green}DEV{plain}.
    ```

    現時点では、1.0.0 リリースはまだ進行中であるため、 `DEV`としてタグ付けされています。
  </Step>

  <Step>
    アプリのレジストリ情報を表示します。

    ```sh
    nr1 nerdpack:info
    [output] Id: {blue}9da77738-9cf6-43c7-9ba0-e3a8c6ac7380
    [output] Region: {muted}us
    [output] Account ID: 123456
    [output] Local version: 1.0.0
    [output] Subscription Model: OWNER_AND_ALLOWED
    [output] Version Count: 4
    [output]
    [output] Version  Date           Tags
    [output] -------  -------------  ------
    [output] 1.0.0    {muted}5 minutes ago  {green}DEV
    ```

    このコマンドの結果には、アプリケーションの UUID、バージョン、アカウント ID など、New Relic のレジストリに保存されているアプリケーションの詳細情報が表示されます。
  </Step>
</Steps>

## Instant of servabilityでアプリケーションを表示する [#view-app]

アプリケーションが公開され、タグが付けられたので、Instant of Servability カタログで表示できます。

<Steps>
  <Step>
    [New Relic](https://one.newrelic.com)にアクセスしてください。 `?nerdpacks=local`クエリ文字列を使用していないことに注意してください。 アプリをローカルで提供していないため、もう必要ありません。
  </Step>

  <Step>
    ホームページから、上部のナビゲーション バーの**Integrations & Agents** \[インテグレーション & エージェント]に移動します。

    **Apps & Visualizations** \[アプリと視覚化]を選択します。

    ここから、リソースの中からアプリケーションを確認できます。

    これは、アプリをローカルで提供したときとは異なることに注意してください。 代わりに、サブスクライブしているローカル アプリと公開済みアプリが アプリ オーバーレイの**Your apps** \[自分のアプリ]の下に表示されます。
  </Step>

  <Step>
    詳細を表示するにはアプリをクリックしてください。

    リリース日とアプリのバージョンに注意してください。 このページには、前回のレッスンで作成した情報が表示されます。 まだ実行されていません。カタログにその情報を送信しておらず、アプリを公開してもそれが実行されないためです。
  </Step>
</Steps>

## カタログ情報を送信する [#submit]

アプリケーションを公開したとしても、カタログが認識していないものがいくつかあります。 これらは、前回のレッスンで作成した説明、スクリーンショット、メタデータです。 `nr1 catalog` 、この情報を送信および表示するために使用されます。

<Steps>
  <Step>
    カタログ情報を送信してください:

    ```sh
    nr1 catalog:submit
    [output] Uploading screenshots from nru-programmability-course/publish/ab-test...
    [output]  {success}✔{normal}  Screenshots uploaded from: nru-programmability-course/publish/ab-test
    [output]  {green}✔  {plain}Updated metadata for AbTest 1.0.0
    ```

    すべてが正常に完了すると、スクリーンショットとメタデータが更新されたことを通知する成功メッセージが表示されます。

    ただし、この情報をカタログに送信するとエラーが発生する可能性があります。

    ```sh
    [output] Uploading screenshots...
    [output]  {error}›   {plain}Error: {error}1 error while updating AbTest 1.0.0
    [output]  {error}›
    [output]  {error}›   Invalid Version: Nerdpack version 1.0.0 not found. Have you run `nr1 nerdpack:publish` yet?
    [output]  {error}›   {plain}Code: UNKNOWN
    ```

    その場合は、1～2 分後にもう一度お試しください。 カタログがアプリケーションの新しいバージョンで更新されるまでに数秒かかる場合があります。

    それでもうまくいかない場合は、アプリを`nr1 nerdpack:publish`で公開したことを確認してください。
  </Step>

  <Step>
    カタログ情報を表示します:

    ```sh
    nr1 catalog:info
    [output] AbTest (Nerdpack):
    [output]     {purple}categoryTerms.0: {plain}browser agent
    [output]     {purple}description: {plain}Nerdpack ab-test
    [output]     {purple}details: {plain}Display test data for our newsletter subscription A/B test
    [output]     {purple}displayName: {plain}AbTest
    [output]     {purple}keywords.0: {plain}a/b test
    [output]     {purple}icon.url: {plain}https://nr3.nr-ext.net/artifact-index-production/a685fec2-29fb-40b0-9f65-4178...
    [output]     {purple}previews.0.url: {plain}https://application-catalog-production.s3.us-east-2.amazonaws.com/nerdpacks/a...
    [output]     {purple}releaseDate: {plain}2021-03-12T15:46:09.600138Z
    [output]     {purple}repository: {plain}https://github.com/newrelic-experimental/nru-programmability-course
    [output]     {purple}tagline: {plain}Win @ newsletter subscriptions
    [output]     {purple}version: {plain}1.0.0
    [output]     {purple}whatsNew.changes: {plain}Initial release! Includes:
    [output]     - A variety of charts for understanding the test r...
    [output]     {purple}whatsNew.version: {plain}1.0.0
    [output] AbTestLauncher (Launcher):
    [output]     {purple}description: {plain}Describe me
    [output]     {purple}displayName: {plain}AbTestLauncher
    [output]     {purple}icon.url: {plain}https://nr3.nr-ext.net/artifact-index-production/a685fec2-29fb-40b0-9f65-4178...
    [output] AbTestNerdlet (Nerdlet):
    [output]     {purple}displayName: {plain}AbTestNerdlet
    [output]     {purple}supportedEntityTypes.mode: NONE
    ```

    `catalog`からのすべての情報がここに表示されます。
  </Step>

  <Step>
    アプリを表示します。

    詳細を表示するにはアプリをクリックしてください。

    ランチャーまたは Nerdlet に追加されたスクリーンショットは、 **What's inside** \[中には何が入っているのか]の下に表示されます。

    ここでは、アプリの詳細、ドキュメント タブ、リリース ノート、スクリーンショットが表示されます。
  </Step>
</Steps>

## バージョンタグを更新する [#update]

あなたのアプリは、メタデータ、画像、ドキュメントが完備された Instant のアクセシビリティ カタログで素晴らしい印象を与えます。 以前は、すべての情報が一般公開できる状態ではなかったため、アプリに`DEV`タグを付けました。 今はそうです。 バージョン タグを更新するときが来ました。

<Steps>
  <Step>
    `1.0.0`アプリのバージョンを`DEV`から`STABLE`に更新します:

    ```sh
    nr1 nerdpack:tag -t STABLE
    [output]  {success}✔{plain}  Tagged {blue}9da77738-9cf6-43c7-9ba0-e3a8c6ac7380{plain} version {green}1.0.0{plain} as {green}STABLE{plain}.
    ```

    バージョンを指定しない場合、 `nr1` `package.json`で指定されたバージョンを使用します。 `-V`コマンドでバージョンを指定できます。 `nr1 nerdpack:tag --help`コマンドを使用して`nerdpack:tag`の詳細を確認します。
  </Step>

  <Step>
    アプリ情報を表示します:

    ```sh
    nr1 nerdpack:info
    [output] Id: {blue}9da77738-9cf6-43c7-9ba0-e3a8c6ac7380
    [output] Region: {muted}us
    [output] Account ID: 123456
    [output] Local version: 1.0.0
    [output] Subscription Model: OWNER_AND_ALLOWED
    [output] Version Count: 1
    [output]
    [output] Version  Date           Tags
    [output] -------  -------------  ------
    [output] 1.0.0    {muted}30 minutes ago  {green}STABLE
    ```

    アプリに`STABLE`のタグが付けられ、一般公開の準備が整ったことを示します。

    <Callout
      variant="tip"
      title="技術的詳細"
    >
      アプリは一般公開できる状態ですが、表示されるのはあなたのアカウントのユーザーのみです。 他のアカウントは、他のプライベート アカウントによって作成されたアプリを公開の Instant App カタログに追加しない限り、そのアプリを表示できません。
    </Callout>
  </Step>
</Steps>

アプリが公開され、そのメタデータが送信されたので、Instant of Servability からアカウントをアプリにサブスクライブできます。 次のレッスンでは、新しいアプリケーションをサブスクライブおよびサブスクライブ解除する方法を学習します。

<Callout variant="course">
  このレッスンは、New Relic アプリケーションをゼロから構築する方法を学習するコースの一部です。 次のレッスンに進み、「New Relic アプリケーションをサブスクライブする」に進みます。
</Callout>
