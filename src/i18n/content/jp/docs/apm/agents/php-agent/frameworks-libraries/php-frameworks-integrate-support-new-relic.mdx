---
title: PHPフレームワーク。New Relic のサポートを統合しました。
tags:
  - Agents
  - PHP agent
  - Frameworks and libraries
metaDescription: An overview of what New Relic is and what developers or maintainers of PHP frameworks need to do in order to integrate support for New Relic.
freshnessValidatedDate: never
translationType: machine
---

このドキュメントは、PHP フレームワークの開発者やメンテナを対象としています。New Relic のサポートを追加してフレームワークを拡張する方法を提案します。

PHPエージェントは、フレームワークをサポートするために、 フレームワークのコードのどこにWebトランザクションが適切な名前を つけられるかを把握し、クラスや関数の呼び出しなどの情報に基づいて Webトランザクションを命名します。このソリューションは脆弱で、開発者がコードを変更した場合に影響を受けます。New Relic は、フレームワークの開発者に対して、自分が保守しているフレームワークのアウトオブボックスのユーザーエクスペリエンスを向上させるために必要ないくつかのコールを行うことを推奨しています。

## ユーザーのために [#frameworks]

New Relic 、ウェブトランザクション名と、 New Relicの <InlinePopover type="browser"/>の JavaScript ヘッダーとフッターを挿入する場所を識別できます。 ただし、エンドユーザーのエクスペリエンスを向上させ、パフォーマンスを高め、コードのメンテナンスを容易にするために、フレームワーク開発者が自らこの作業を行う必要があります。

New Relic のネイティブサポートを追加してユーザーを支援するかどうかは、さまざまなフレームワークの開発者に委ねられています。ほとんどの場合、New Relicのサポートを追加するには、フレームワークのコードのどこかに3つのAPIコールを挿入する必要があります。

## 用語解説

New Relic のサポートを追加する最善の方法を理解するためには、相互作用の重要なポイントを理解することが役立ちます。

<table>
  <thead>
    <tr>
      <th width={150}>
        <DNT>
          **Term**
        </DNT>
      </th>

      <th>
        <DNT>
          **Definition**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        <DNT>
          **Web transactions**
        </DNT>
      </td>

      <td>
        <DNT>**Web transactions**</DNT> サイトへのアセットリクエスト（またはユーザーヒット）です。 フレームワークでは、これは多くの場合、MVC ディスパッチ メカニズムによって処理されます。
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **Metrics**
        </DNT>
      </td>

      <td>
        <DNT>**Metrics**</DNT> タイミング情報を報告する名前付きエンティティです。 New Relicこれらのメトリックを使用して、 [APM <DNT>**Summary**</DNT> ページ](/docs/apm/applications-menu/monitoring/apm-overview-page)などのチャートとページを生成します。 たとえば、 New Relicインストゥルメントは、ユーザーがデータを選択または更新するたびにMySQLを呼び出し、`Database/select` または `Database/update` と呼ばれるメトリックを生成します。

        メトリクスにはタイミングデータしか含まれていません。
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **Transaction traces**
        </DNT>
      </td>

      <td>
        すべての収集期間中、 New Relicユーザーが定義した閾値を下回る最も遅いウェブトランザクションを記録します。 これは<DNT>**transaction trace**</DNT>です。

        単純なメトリクスよりも詳細な情報が得られます。有効にすると、どの関数が呼び出され、どのくらいの時間がかかったかを正確に示す詳細なコールグラフが含まれます。低速のクエリ文については、呼び出し中のすべてのデータを難読化します。
      </td>
    </tr>
  </tbody>
</table>

## 名前トランザクション [#dev]

ウェブ取引にどのように名前を付けるかは、ユーザー体験の質に影響します。

<Callout variant="important">
  トランザクション名の末尾に角かっこ`[suffix]`を使用しないでください。 New Relicは、名前から角かっこを自動的に削除します。代わりに、必要に応じて括弧`(suffix)`またはその他の記号を使用してください。
</Callout>

<DNT>
  **Examples:**
</DNT>

ブログ スタイルのフレームワークがある場合は、ユーザー アクティビティに基づいてさまざまなトランザクションに名前を付けます ( `display`、 `edit`、 `login`など)。

MVC アーキテクチャを使用する場合、適切な命名規則は `controller/action`です。トランザクション名にはリクエスト固有のデータを含め **ないで** ください。たとえば、実際のリクエスト URL を使用すると、 [メトリクスのグループ化の問題が](/docs/features/metric-grouping-issues)発生します。

<table>
  <thead>
    <tr>
      <th width={150}>
        <DNT>
          **Platform**
        </DNT>
      </th>

      <th>
        <DNT>
          **Transaction naming example**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        <DNT>
          **Drupal 7**
        </DNT>
      </td>

      <td>
        ディスパッチは `menu_execute_active_handler()`で行われます。これは、最初の引数がアクションの名前である `call_user_func_array()`を呼び出します。これが Web トランザクション名として設定するものです。
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **CakePHP 1.3**
        </DNT>
      </td>

      <td>
        CakePHP には、 `_invoke` メソッドを備えた `Dispatcher` クラスがあります。これにより、指定されたアクションで適切なコントローラー クラスが呼び出され、トランザクションの名前は `controller/action` になります。ここで、 `controller` はコントローラー クラスの名前です。
      </td>
    </tr>
  </tbody>
</table>

コードを特定のコントローラとアクション（MVCを使用している場合）、またはアクション（MVCを使用していない場合）にルーティングしたいポイントで、以下のようなコードを挿入します。

<DNT>**Controller and action**</DNT> (MVC を使用する場合):

```php
if (extension_loaded ('newrelic')) {
    newrelic_name_transaction ($controller . '/' . $action);
}
```

<DNT>**Action only**</DNT> (MVC を使用しない):

```php
if (extension_loaded ('newrelic')) {
    newrelic_name_transaction ($action);
}
```

## JavaScriptのヘッダーとフッターの挿入 [#page-load-timing]

ページのロードタイミング（リアルユーザーモニタリング（RUM）と呼ばれることもあります）については、JavaScriptのヘッダとフッタを挿入します。これにより、生成されたページに対するエンドユーザーの体験をモニターすることができます。

* 推奨事項: フレームワークにすべてのページ ヘッダーとフッターを生成する中心的な機能がある場合は、ここに JavaScript コードをインストールします。
* テンプレート駆動型のフレームワークでは、ヘッダーやフッターのテンプレートに挿入します。

<CollapserGroup>
  <Collapser
    id="page-generator"
    title="ページジェネレータ機能への挿入"
  >
    ヘッダー<DNT>**must**</DNT>は、生成されたページのできるだけ上部近くに挿入されます。 `<meta http-equiv....>`タグの直後が理想的な場所です。 <DNT>**any**</DNT> JavaScript、CSS スタイルシート、またはその他のリンクされたコンテンツや埋め込まれたコンテンツの前に置く必要があります。

    ```php
    if (extension_loaded ('newrelic')) {
        echo newrelic_get_browser_timing_header();
    }
    ```

    `newrelic_get_browser_timing_header()` オプションの`bool`引数を取ります。デフォルトは<DNT>**true**</DNT>です。 返される文字列をスクリプト タグで囲むかどうかを示します。

    推奨事項: 生成されたページの最後に、 `</body>`ページ終了タグの直前にフッターを挿入します。

    ```php
    if (extension_loaded ('newrelic')) {
        echo newrelic_get_browser_timing_footer();
    }
    ```

    `newrelic_get_browser_timing_footer()` オプションで`bool`を取ります。デフォルトは<DNT>**true**</DNT>です。 返される文字列をスクリプト タグで囲むかどうかを示します。
  </Collapser>

  <Collapser
    id="template"
    title="テンプレートへの挿入"
  >
    このヘッダーテンプレートを例に挙げてみましょう。

    ```php
    <?php if (extension_loaded ('newrelic')) {
        echo newrelic_get_browser_timing_header();
    } ?>
    ```

    このフッターテンプレートを参考にしてください。

    ```php
    <?php if (extension_loaded ('newrelic')) {
        echo newrelic_get_browser_timing_footer();
    } ?>
    ```
  </Collapser>
</CollapserGroup>
