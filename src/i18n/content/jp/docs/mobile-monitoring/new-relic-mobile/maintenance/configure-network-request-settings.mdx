---
title: モバイル ネットワーク リクエスト設定の構成
tags:
  - Mobile monitoring settings
  - Network requests
metaDescription: 'Block or allow hostnames, create rules for status codes, and create aliases for hostnames.'
freshnessValidatedDate: never
translationType: machine
---

モバイル ネットワーク リクエスト設定ページは、ネットワーク メトリックとイベントのレポート方法をカスタマイズするのに役立ちます。[ホスト名をブロックまたは許可したり](#blockallow-hostnames)、[特定のホストからの HTTP ステータス コードを無視したり](#ignore-status-codes)、[エイリアスを作成してホストの名前を変更したり、サブドメインをグループ化したり](#group-into-alias)できます。

これらの設定を構成するには、 <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Mobile > (select a mobile app) > Settings > Network settings**</DNT>に移動します。

## ホスト名をブロック/許可する [#blockallow-hostnames]

特定のホスト名の監視を許可またはブロックできます。たとえば、 `ecommerce.com`のサブドメインのみを許可する場合:

1. <DNT>
     **Network settings page**
   </DNT>

   で、

   <DNT>
     **Show only hostnames**
   </DNT>

   タブを選択します。

2. <DNT>
     **Add a hostname**
   </DNT>

   をクリックします。

3. ホスト名`*.ecommerce.com`を入力し、

   <DNT>
     **Add to list**
   </DNT>

   をクリックします。

<img
  title="Allow a hostname"
  alt="Allow a hostname"
  src="/images/mobile_screenshot-full_show-hostname.webp"
/>

ルールが適用されるまで最大 2 時間待ちます。

## HTTP ステータス コードを無視する [#ignore-status-codes]

ホスト名の特定の HTTP エラー ステータス コードを無視できます。たとえば、すべての`ecommerce.com`サブドメインからの`401` 、 `403` 、および`404`エラーを無視する場合:

1. <DNT>
     **Network settings page**
   </DNT>

   で、

   <DNT>
     **Status codes**
   </DNT>

   タブを選択します。

2. <DNT>
     **Create a status code rule**
   </DNT>

   をクリックします。

3. ホスト`*.ecommerce.com`を入力してください。

4. ステータス コード`401` 、 `403` 、 `404`を入力し、

   <DNT>
     **Add to list**
   </DNT>

   をクリックします。

<img
  title="Create a status code rule"
  alt="Create a status code rule in the UI"
  src="/images/mobile_screenshot-full_new-status-rule.webp"
/>

ルールが適用されるまで最大 2 時間待ちます。

## ホスト名のエイリアスを作成する [#group-into-alias]

エイリアスを作成して、最も意味のあるホスト名の名前を変更またはグループ化できます。たとえば、 `ecommerce.com`のすべてのサブドメインをグループ化するエイリアスを作成する場合:

1. <DNT>
     **Network settings**
   </DNT>

   ページで、

   <DNT>
     **Aliases and groups**
   </DNT>

   タブを選択します。

2. <DNT>
     **Create an alias**
   </DNT>

   をクリックします。

3. `*.ecommerce.com`を入力して、 `ecommerce.com`のすべてのサブドメインをグループ化します。

4. エイリアス`ecommerce.com`を入力し、

   <DNT>
     **Save alias**
   </DNT>

   をクリックします。

<img
  title="Create an alias"
  alt="create an alias"
  src="/images/mobile_screenshot-full_create-alias.webp"
/>

ルールが適用されるまで最大 2 時間待ちます。

### ワイルドカードの使用に関する推奨事項 [#about-wildcards]

`*` (ワイルドカード) を使用する場合、正規表現の規則は少し異なります。ワイルドカードは、セグメント全体、またはホスト名の 2 つのドット間の値に使用されます (つまり、 `hostname.1219.com`のセグメント全体は`1219`です)。

ワイルドカードを使用してエイリアスを作成する例を次に示します。

<table>
  <thead>
    <tr>
      <th>
        ホスト
      </th>

      <th>
        エイリアス
      </th>

      <th>
        ドメインの例
      </th>

      <th>
        結果
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `192.168.*.100`
      </td>

      <td>
        LOCAL
      </td>

      <td>
        `192.168.10.100`
      </td>

      <td>
        LOCAL
      </td>
    </tr>

    <tr>
      <td>
        `tbr.*.something.com`
      </td>

      <td>
        tbr.\*.something.com
      </td>

      <td>
        `tbr.gh99898.something.com`
      </td>

      <td>
        tbr.\*.something.com
      </td>
    </tr>

    <tr>
      <td>
        `api1.mydomain.co.uk`
      </td>

      <td>
        API
      </td>

      <td>
        `api1.mydomain.co.uk`
      </td>

      <td>
        API
      </td>
    </tr>

    <tr>
      <td>
        `api2.mydomain.co.uk`
      </td>

      <td>
        API
      </td>

      <td>
        `api2.mydomain.co.uk`
      </td>

      <td>
        API
      </td>
    </tr>
  </tbody>
</table>

これがどのように機能するかの例を見たので、_機能しない_例をいくつか見てみましょう。

<table>
  <thead>
    <tr>
      <th>
        ホスト
      </th>

      <th>
        エイリアス
      </th>

      <th>
        ドメインの例
      </th>

      <th>
        結果
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `tbr.gh*.something.com`
      </td>

      <td>
        tbr.gh\*.something.com
      </td>

      <td>
        `tbr.gh99898.something.com`
      </td>

      <td>
        tbr.gh99898.something.com
      </td>
    </tr>

    <tr>
      <td>
        `cs-*.company.jp`
      </td>

      <td>
        cs-\*.company.jp
      </td>

      <td>
        `cs-23.company.jp`
      </td>

      <td>
        cs-23.company.jp
      </td>
    </tr>

    <tr>
      <td>
        `cs-*.company.jp`
      </td>

      <td>
        顧客調査
      </td>

      <td>
        `cs-*.company.jp`
      </td>

      <td>
        顧客調査
      </td>
    </tr>
  </tbody>
</table>

ワイルドカードはセグメント全体にのみ影響することに注意してください。`*`は完全なセグメントにのみ使用できるため、ここでの`*`ワイルドカードとしてではなく文字どおりに解釈されます。
