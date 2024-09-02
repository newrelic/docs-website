---
title: Nerdpackのリリースバージョンにタグを付ける
tags:
  - New Relic
  - Nerdpack
metaDescription: Learn to tag your Nerdpack's release version.
freshnessValidatedDate: never
translationType: machine
---

Nerdpack バージョンにタグを付けて追跡し、購読します。 バージョンのタグを解除して、サブスクリプションを防止したり、Nerdpacks をカタログから非表示にしたりします。

## CLIを更新する

コマンドを実行する前に、CLI の最新バージョンがインストールされていることを確認してください。

```sh
nr1 update
```

## 権限を確認してください

Nerdpack バージョンにタグを付けるには、次のものが必要です。

* 公開したアカウントへのアクセス
* Nerdpacks を管理するために[必要な権限](/docs/new-relic-solutions/new-relic-one/build-nr-apps/permission-manage-apps)。

## Nerdpackを公開する

作成した Nerdpack にタグを付けるには、まずそれを[公開する](/docs/new-relic-solutions/new-relic-one/build-nr-apps/publish)必要があります。

## バージョンにタグを付ける

Nerdpack バージョンを New Relic アプリ カタログに公開したら、 `nr1` CLI を使用してタグ付けできます。

<Steps>
  <Step>
    Nerdpack のルート フォルダーで、 `nr1 nerdpack:tag`を実行します。

    ```sh
    nr1 nerdpack:tag --tag=DEV
    [output] {success}✔{normal}  Tagged {purple}ab123c45-678d-9012-efg3-45hi6jkl7890{normal} version {green}1.0.0{normal} as {green}DEV{normal}.
    ```

    ここでは、バージョン`1.0.0`を`DEV`としてタグ付けしました。

    これで、あなたとあなたのアカウントの他のユーザーは、このタグを使用できるようになります。

    * Nerdpackをアカウントに追加すると、購読オプションとしてタグが表示されます。
    * `DEV`タグをサブスクライブし、後で更新された場合 (たとえば、 `DEV`がバージョン`1.0.1`に適用された場合)、再度サブスクライブしなくても新しいバージョンに自動的にアップグレードされます。

    <Callout variant="important">
      タグリリースバージョンの機能の 1 つは、タグをサブスクライブしているユーザーは、そのタグが別のバージョンで使用されたときに自動的に更新を受け取ることです。 つまり、ユーザーが 1 つのバージョン (たとえば`1.0.0`をテストしていて、同じタグを別のバージョン (たとえば`1.0.1`に適用すると、そのユーザーのアカウントにはバージョン`1.0.1`が表示され、以前テストしていた Nerdpack にはアクセスできなくなります。 多くの場合、これは予想される動作ですが、タグを使用するときはこの副作用を考慮してください。
    </Callout>
  </Step>

  <Step>
    Nerdpack のレジストリ情報を表示します。

    ```sh
    nr1 nerdpack:info
    [output] Id: {purple}ab123c45-678d-9012-efg3-45hi6jkl7890
    [output] Region: {muted}us
    [output] Account ID: 1234567
    [output] Local version: 1.0.0
    [output] Subscription Model: OWNER_AND_ALLOWED
    [output] Version Count: 1
    [output]
    [output] Version  Date         Tags
    [output] -------  -----------  ----
    [output] 1.0.0    {muted}5 hours ago{green}  DEV
    ```

    この出力は、バージョン`1.0.0`の`DEV`タグを確認します。
  </Step>
</Steps>

## バージョンのタグを解除する

Nerdpack のバージョンを増やすと、タグを新しいバージョンに更新できるようになります。 ただし、 `nr1`を使用して Nerdpack からタグを削除することもできます。

<Steps>
  <Step>
    Nerdpack のルートディレクトリから、レジストリ情報を表示します。

    ```sh
    nr1 nerdpack:info
    [output] Id: {purple}ab123c45-678d-9012-efg3-45hi6jkl7890
    [output] Region: {muted}us
    [output] Account ID: 1234567
    [output] Local version: 1.0.0
    [output] Subscription Model: OWNER_AND_ALLOWED
    [output] Version Count: 1
    [output]
    [output] Version  Date               Tags
    [output] -------  -----------------  ----
    [output] 2.0.0    {muted}a few seconds ago{green}  DEV
    [output] 1.0.1    {muted}8 minutes ago{green}      BETA, STABLE
    [output] 1.0.0    {muted}6 hours ago
    ```

    ここで、バージョン`1.0.0`にはタグがなく、バージョン`1.0.1`には 2 つのタグ`BETA`と`STABLE`があり、バージョン`2.0.0`には 1 つのタグ`DEV`があることがわかります。
  </Step>

  <Step>
    Nerdpack バージョンから`BETA`タグを削除します。

    ```sh
    nr1 nerdpack:untag --tag=BETA
    [output] {success}✔{normal}  Removed nerdpack {purple}ab123c45-678d-9012-efg3-45hi6jkl7890{normal} tag {green}BETA{normal}.
    ```
  </Step>

  <Step>
    Nerdpack からタグが削除されたことを確認します。

    ```sh
    nr1 nerdpack:info
    [output] Id: {purple}ab123c45-678d-9012-efg3-45hi6jkl7890
    [output] Region: {muted}us
    [output] Account ID: 1234567
    [output] Local version: 1.0.0
    [output] Subscription Model: OWNER_AND_ALLOWED
    [output] Version Count: 1
    [output]
    [output] Version  Date            Tags
    [output] -------  --------------  ----
    [output] 2.0.0    {muted}5 minutes ago{green}   DEV
    [output] 1.0.1    {muted}13 minutes ago{green}  STABLE
    [output] 1.0.0    {muted}6 hours ago
    ```
  </Step>
</Steps>

## Nerdpack バージョンのタグ付けに関する問題を解決する

場合によっては、Nerdpack バージョンにタグ付けすると問題が発生することがあります。 Nerdpack にタグを付けられない場合や、Nerdpack のタグを解除できない場合は、これらの問題を解決するための一般的な解決策を検討してください。

### Nerdpackを公開する

Nerdpack を公開せずにタグ付けしようとすると、エラーが発生します。

```sh
nr1 nerdpack:tag --tag=DEV
[output] {error}›{normal}   Error: A downstream error occurred.
```

このエラーメッセージにはあまり情報がありませんが、 `--verbose`オプションを使用すると詳細情報が表示されます。

```sh
nr1 nerdpack:tag --tag=DEV --verbose
[output] init version: @oclif/command@1.8.0 argv: [ {green}'--tag=DEV'{normal}, {green}'--verbose'{normal}, [length]: {yellow}2{normal} ]
[output] {blue}dist/metadata.json{normal} does not exist. package.json will be used instead.
[output] Using profile {muted}account-1234567
[output] {purple}Request:{normal} POST https://api.newrelic.com/graphql
[output] {purple}Data:{green} mutation {
[output]                 {green}nerdpackTagVersion(
[output]                     {green}nerdpackId: "ab123c45-678d-9012-efg3-45hi6jkl7890",
[output]                     {green}versionTag: {
[output]                         {green}tag: "DEV",
[output]                         {green}version: "1.0.0"
[output]                     {green}}
[output]                 {green}) {
[output]                     {green}nerdpackId
[output]                     {green}tags
[output]                     {green}version
[output]                 {green}}
[output]             {green}}
[output] {purple}Headers: {
[output]   {green}'API-Key'{normal}: {green}'<YOU USER KEY>'{normal},
[output]   {green}'Content-Type'{normal}: {green}'application/graphql'
[output] }
```

このより詳細なエラーメッセージは、 `nr1 nerdpack:tag`のバックグラウンドで実行される GraphQL を示しています。 ここでのメッセージの重要な部分は次のとおりです。

```sh
[output] {blue}dist/metadata.json{normal} does not exist. package.json will be used instead.
```

アプリを公開すると、 `dist`ディレクトリが作成されます。 したがって、まだ公開されていないため、このディレクトリは存在せず、 `nr1`は`package.json`に戻って Nerdpack の詳細を検索します。 しかし、 `package.json`の UUID が New Relic レジストリにないため、コマンドは失敗しました。

したがって、バージョンにタグを付ける前に、レジストリに公開します。

```sh
nr1 nerdpack:publish
nr1 nerdpack:tag --tag=DEV
```

<Callout variant="tip">
  デプロイすると同時にバージョンにタグを付けることもできることに注意してください。

  ```sh
  nr1 nerdpack:publish --tag=DEV
  ```
</Callout>

### Nerdpack の購読を解除する

削除できるのは、購読者がいないタグのみです。 ユーザーが購読しているタグを削除しようとすると、エラーが発生します。

```sh
nr1 nerdpack:info
[output] Id: {purple}ab123c45-678d-9012-efg3-45hi6jkl7890
[output] Region: {muted}us
[output] Account ID: 1234567
[output] Local version: 2.0.0
[output] Subscription Model: OWNER_AND_ALLOWED
[output] Version Count: 3
[output]
[output] Version  Date         Tags
[output] -------  -----------  ----
[output] 2.0.0    {muted}an hour ago  {green}DEV
[output] 1.0.1    {muted}an hour ago
[output] 1.0.0    {muted}6 hours ago
[output]
nr1 nerdpack:untag -t DEV
[output] {error}›{normal}   Error: A downstream error occurred.
```

この場合は、Nerdpack に登録されているかどうかを確認してください。

```sh
nr1 subscription:list
[output] {muted}Listing subscribed deployed nerdpacks on your account:
[output] Version  UUID                                  Name               Date         User
[output] -------  ------------------------------------  -----------------  -----------  ----------
[output] 2.0.0    {purple}ab123c45-678d-9012-efg3-45hi6jkl7890{normal}  MyAwesomeNerdpack  {muted}an hour ago  1000383529
```

これは、 `MyAwesomeNerdpack`に登録していることを示します。 登録を解除してから、 `DEV`タグを再度削除してみてください:

```sh
nr1 nerdpack:unsubscribe
[output] Unsubscribed account {green}1234567{normal} from the nerdpack {purple}ab123c45-678d-9012-efg3-45hi6jkl7890{normal} on the {green}DEV{normal} channel.
[output]
nr1 nerdpack:untag --tag=DEV
[output] {success}✔{normal}  Removed nerdpack {purple}ab123c45-678d-9012-efg3-45hi6jkl7890{normal} tag {green}DEV{normal}.
[output]
nr1 nerdpack:info
[output] Id: {purple}ab123c45-678d-9012-efg3-45hi6jkl7890
[output] Region: {muted}us
[output] Account ID: {green}1234567
[output] Local version: 2.0.0
[output] Subscription Model: OWNER_AND_ALLOWED
[output] Version Count: 3
[output]
[output] Version  Date         Tags
[output] -------  -----------  ----
[output] 2.0.0    {muted}an hour ago
[output] 1.0.1    {muted}an hour ago
[output] 1.0.0    {muted}6 hours ago
```
