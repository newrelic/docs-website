---
title: Nerdpackを購読する
tags:
  - New Relic
  - Nerdpack
  - Subscribe
metaDescription: Learn to subscribe to a Nerdpack.
freshnessValidatedDate: never
translationType: machine
---

Nerdpack をサブスクライブして、New Relic プラットフォームで使用してください。 使用しなくなった Nerdpacks の登録を解除します。

## CLIを更新する

コマンドを実行する前に、CLI の最新バージョンがインストールされていることを確認してください。

```shell
nr1 update
```

## 権限を確認してください

Nerdpack を購読するには、次のものが必要です。

* 公開したアカウントへのアクセス
* [Nerdpacksを管理するために必要な権限](/docs/new-relic-solutions/new-relic-one/build-nr-apps/permission-manage-apps)

## Nerdpackを公開する

Nerdpack を購読するには、作成した Nerdpack を公開する必要があります。

1. [Nerdpackを公開する](/docs/new-relic-solutions/new-relic-one/build-nr-apps/publish)
2. 公開されていてまだタグが付いていない場合は[、Nerdpackにタグを付けてください。](/docs/new-relic-solutions/new-relic-one/build-nr-apps/tag)

## Nerdpackを購読する

公開された Nerdpack を Web UI または`nr1` CLI のいずれかでサブスクライブして、アカウントで使用します。 サブスクライブすると、使用するタグ付きバージョンとサブスクライブするアカウントを選択できます。 これにより、アカウントで使用する Nerdpack を制御できます。

<Callout variant="tip">
  サブスクライブしたタグが更新されると、New Relic は Nerdpack を自動的に更新します。
</Callout>

<Steps>
  <Step>
    [New Relic](https://one.newrelic.com)ホームページから、上部のナビゲーション バーの<DNT>**+ Integrations & Agents**</DNT>に移動します。
  </Step>

  <Step>
    アプリのフィルターまたは検索バーを使用して、公開された Nerdpack を見つけます。 公開されているすべての Nerdpack がここに表示されます。 ただし、探しているものがフィルタリングで除外されている可能性があります。 フィルターを調整して、探している Nerdpack を見つけます。
  </Step>

  <Step>
    New Relic アカウントに追加する Nerdpack を選択します。
  </Step>

  <Step>
    **Add this app** \[このアプリを追加]をクリックします。 すでに Nerdpack に登録している場合は、このボタンに**Manage access** \[アクセスの管理]が表示されます。
  </Step>

  <Step>
    サブスクライブするアカウントと、サブスクライブするタグ付きバージョンを選択します。 次に、アカウントを更新します。

    <Callout variant="tip">
      Web UI および CLI の一部では、**tags** \[タグ]を**channels** \[チャネル]と呼びます。 これは、Nerdpack バージョン管理の過去の実装の New Relic の社員です。 歴史的および実装の詳細を無視して、これらを同義語として考えます。
    </Callout>

    これで、あなたとあなたがサブスクライブしているアカウントのメンバーは、 New Relicから Nerdpack をリリースできるようになりました。
  </Step>

  <Step>
    アプリを購読している場合は、 **Your apps** \[あなたのアプリ]で見つけてください。 視覚化をサブスクライブしている場合は、 **Custom visualizations** \[カスタム視覚化]で見つけます。
  </Step>
</Steps>

## コマンドラインからサブスクライブする

独自の Nerdpack を公開している場合は、 `nr1` CLI を使用して Nerdpack をサブスクライブする方が早い場合があります。

<Steps>
  <Step>
    Nerdpack のルートディレクトリに移動します:

    ```shell
    cd my-awesome-nerdpack
    ```

    これらの手順では、Nerdpack を`my-awesome-nerdpack`と呼びます。
  </Step>

  <Step>
    Nerdpack が公開され、タグ付けされていることを確認します。

    ```shell
    nr1 nerdpack:info
    [output] Id: {purple}ab123c45-678d-9012-efg3-45hi6jkl7890
    [output] Region: {muted}us
    [output] Account ID: 1234567
    [output] Local version: 1.0.0
    [output] Subscription Model: OWNER_AND_ALLOWED
    [output] Version Count: 1
    [output]
    [output] Version  Date               Tags
    [output] -------  -----------------  ------
    [output] 1.0.0    {muted}a few seconds ago  {green}STABLE
    ```

    [タグ](/docs/new-relic-solutions/new-relic-one/build-nr-apps/tag) が付いた[ 公開](/docs/new-relic-solutions/new-relic-one/build-nr-apps/publish) バージョンが少なくとも 1 つ表示されます。`STABLE`である必要はありません。 タグ付けされたバージョンはどれでも購読できます。
  </Step>

  <Step>
    Nerdpack を購読する:

    ```shell
    nr1 nerdpack:subscribe --channel=STABLE
    [output] Subscribed account {green}1234567{normal} to the nerdpack {purple}ab123c45-678d-9012-efg3-45hi6jkl7890{normal} on the {green}STABLE{normal} channel
    ```

    ここで、 `STABLE`タグを購読しました。 CLI から`DEV`および`BETA`タグをサブスクライブすることもできますが、サブスクリプション コマンドでは任意のタグを許可しません。 他のタグ付けされたバージョンをサブスクライブするには、Web UI を使用する必要があります。

    Web UI と同様に、**channel** \[チャネル]`nr1 nerdpack:subscribe`という用語は、Nerdpack バージョンの古い実装への参照です。

    <Callout
      variant="tip"
      title="技術的詳細"
    >
      `nr1 nerdpack:subscribe` は`nr1 subscription:set`の別名です。

      詳細については、 [`nr1 subscription:set`](/docs/new-relic-solutions/build-nr-ui/nr1-cli/nr1-subscription/#nr1-subscriptionset)ドキュメントをお読みください。 または、 `nr1`ヘルプ ページを参照してください:

      ```shell
      nr1 subscription:set --help
      ```
    </Callout>
  </Step>
</Steps>

## Nerdpack の購読を解除する

Nerdpack の登録を解除すると、アカウントから削除されます。

<Steps>
  <Step>
    [New Relic](https://one.newrelic.com)から、上部のナビゲーション バーの<DNT>**Apps**</DNT>に移動します。
  </Step>

  <Step>
    購読している Nerdpack の横にある「i」アイコンをクリックします。 詳細ページが開きます。
  </Step>

  <Step>
    **Manage access** \[アクセスの管理]をクリックします。
  </Step>

  <Step>
    登録を解除するアカウントの選択を解除します。 次に、それらのアカウントを更新します。
  </Step>
</Steps>

## コマンドラインを使用して登録を解除する

Nerdpacks から CLI プロファイルをすぐに登録解除します。

<Steps>
  <Step>
    Nerdpack のルートディレクトリに移動します:

    ```shell
    cd my-awesome-nerdpack
    ```
  </Step>

  <Step>
    プロフィールのサブスクリプションを表示します:

    ```shell
    nr1 subscription:list
    [output] {muted}Listing subscribed deployed nerdpacks on your account:
    [output] Version  UUID                                  Name              Date         User
    [output] -------  ------------------------------------  ----------------  -----------  -------
    [output] 0.6.4    {purple}384de6e5-8e57-4d56-9d13-299ee7ae8641{normal}  Account Maturity  {muted}a month ago{normal}  2774472
    ```
  </Step>

  <Step>
    UUID を使用して Nerdpack から登録解除します。

    ```shell
    nr1 nerdpack:unsubscribe --nerdpack-id=384de6e5-8e57-4d56-9d13-299ee7ae8641
    [output] Unsubscribed account {green}1234567{normal} from the nerdpack {purple}384de6e5-8e57-4d56-9d13-299ee7ae8641{normal} on the {green}STABLE{normal} channel.
    ```

    <Callout variant="tip">
      `nr1 nerdpack:unsubscribe` は`nr1 subscription:unset`の別名です。

      詳細については、 [`nr1 subscription:unset`](/docs/new-relic-solutions/build-nr-ui/nr1-cli/nr1-subscription/#nr1-subscriptionunset)ドキュメントをお読みください。 または、 `nr1`ヘルプ ページを参照してください:

      ```sh
      nr1 subscription:unset --help
      ```
    </Callout>
  </Step>
</Steps>

## 公開したNerdpackへのアクセスに関する問題を解決する

Nerdpack を購読すると、問題が発生する場合があります。 サブスクライブできない場合や、アカウントに重複したサブスクリプションが表示される場合は、これらの問題を解決するための一般的な解決策を検討してください。

### Nerdpackバージョンにタグを付ける

Nerdpack を購読するときは、特定のタグを選択します。 したがって、サブスクライブしようとしている Nerdpack が タグ でない場合、またはターゲットとする タグ がない場合、リリース バージョン[は次](/docs/new-relic-solutions/new-relic-one/build-nr-apps/tag)のようになります。

```shell
nr1 nerdpack:subscribe --channel=DEV
[output] {error}›{normal}   Error: Nerdpack {purple}ab123c45-678d-9012-efg3-45hi6jkl7890{normal} is not deployed to channel {green}DEV{normal}. You have to deploy it first
[output] {error}›{normal}   Code: PACKAGE_NOT_DEPLOYED
[output]
nr1 nerdpack:tag --tag=DEV
[output] {success}✔  Tagged {purple}ab123c45-678d-9012-efg3-45hi6jkl7890{normal} version {green}1.0.0{normal} as {green}DEV{normal}.
[output]
nr1 nerdpack:subscribe --channel=DEV
[output] Subscribed account {green}1234567{normal} to the nerdpack {purple}ab123c45-678d-9012-efg3-45hi6jkl7890{normal} on the {green}DEV{normal} channel.
```

`--channel`引数なしでサブスクライブする場合、デフォルトのチャネルは`STABLE`なので、この場合は`STABLE`バージョンがあることを確認してください。

```shell
nr1 nerdpack:subscribe
[output] {error}›{normal}   Error: Nerdpack {purple}ab123c45-678d-9012-efg3-45hi6jkl7890{normal} is not deployed to channel {green}STABLE{normal}. You have to deploy it first
[output] {error}›{normal}   Code: PACKAGE_NOT_DEPLOYED
```

### Web UIで購読する

CLI を使用してサブスクライブする場合は、タグを選択するために`--channel`引数を渡します。 **channel** \[チャネル]は、実質的には**tag** \[タグ]です。 この用語は、Nerdpack バージョン管理の過去の実装の New Relic の社員です。

ただし、これらの用語は同義ですが、CLI では`--channel`使用が制限されます。 `--channel`でサブスクライブする場合、選択できるのは`DEV` 、 `BETA` 、 `STABLE`のいずれかのみです。 したがって、別のタグをサブスクライブするには、Web UI を使用します。

```shell
nr1 nerdpack:subscribe --channel=QA
[output] {error}›{normal}   Error: Expected --channel=QA to be one of: {green}DEV{normal}, {green}BETA{normal}, {green}STABLE
[output] {error}›{normal}   See more help with --help
[output] {error}›{normal}   Code: UNKNOWN
```
