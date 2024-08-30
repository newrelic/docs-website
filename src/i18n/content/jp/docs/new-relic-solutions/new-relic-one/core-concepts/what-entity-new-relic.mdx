---
title: New Relicエンティティの詳細
tags:
  - New Relic
  - Use New Relic
  - Core concepts
metaDescription: 'The definition of ''entity'' at New Relic, and how to use and organize entities.'
freshnessValidatedDate: never
translationType: human
---

import entitiesView from 'images/platform_screenshot-crop_entities-view.webp' 

New Relicオブザーバビリティは、<DNT>**entities**</DNT> のコンセプトを中心に構築されています。このドキュメントでは、エンティティの定義方法、エンティティを使用して何ができるか、エンティティまたはエンティティのグループを作成する方法について説明します。

<Callout variant="tip">
  New Relicプラットフォームの入門ツアーをご希望ですか？ [プラットフォームを理解する](/docs/new-relic-solutions/new-relic-one/introduction-new-relic-platform)を参照してください。
</Callout>

## エンティティとは？ [#what-is-entity]

New Relicでは、<DNT>**entity**</DNT>を意図的に幅広いコンセプトとして捉えています。エンティティとは、a) データをNew Relicに報告するもの、または当社がアクセスできるデータを含むあらゆるもの、b) 一意のエンティティIDで識別されたものです。ほとんどのエンティティでは、IDは[属性](/docs/using-new-relic/welcome-new-relic/get-started/glossary/#attribute)`entityGuid`で示されます。

エンティティは、アプリケーション、ホスト、データベースサービスなどの基本的なデータを報告するコンポーネントを指しますが、これらのコンポーネントのより大きなグループを指すこともあります。たとえば、データセンターを監視するには、このようなホストをNew Relicに集計し、[ワークロード](/docs/new-relic-one/use-new-relic-one/get-started/introduction-new-relic-one)（エンティティのカスタムグループ）にすることができます。このワークロード自体もまたエンティティです。[独自のエンティティを作成](#entity-synthesis)する機能があります。

また、[エンティティ間の関係](#related-entities)も非常に重要です。当社の背後にある関係マッピングは、エンティティがどのように接続されているか、どのように相互に影響するかを理解するのに役立ちます。これにより、お持ちのデータが既存のエンティティとどのように関連しているか、または他のエンティティとどのように関連しているかを設定できます。

当社の目標は、<DNT>**practical information about your business-important entities**</DNT>を提供することであり、監視対象のサービスやシステムの膨大なリストから膨大な量のデータを提供するのではなく、エンティティとその関係に焦点を当てることが重要です。エンティティレベルでより多くの洞察を得ることにより、複雑な最新のシステム監視とトラブルシューティングを改善できます。

<img title="New Relic entity list view" alt="New Relic entity list view" src={entitiesView} />

<figcaption>
  <DNT>**[one.newrelic.com](https://one.newrelic.com)**</DNT>：New Relicを開くと、<DNT>**All entities**</DNT> ページが表示され、監視対象のエンティティの概要が表示されます。このページから、エンティティのメタデータを表示したり、エンティティをクリックしてパフォーマンスの詳細を確認したりできます。
</figcaption>

## エンティティのフィルタリングと探索 [#filter-entities]

エンティティフィルターバーは、メインエンティティリストビュー、APM、<InlinePopover type="browser" />UI、Infrastructure UIなどを含む、多くのNew Relic UIページで使用できます。フィルターバーを使用してエンティティを検索し、役立つフィルターを保存する方法については、[エンティティのフィルター](/docs/new-relic-solutions/new-relic-one/core-concepts/search-filter-entities)を参照してください。

## エンティティの詳細 [#find]

UIでエンティティのGUID、およびその他のメタデータを検索するには：[エンティティのリスト](/docs/new-relic-solutions/new-relic-one/core-concepts/new-relic-explorer-view-performance-across-apps-services-hosts#find)から、エンティティの<Icon name="fe-more-horizontal" />アイコンをクリックし、<DNT>**See metadata &amp; tags**</DNT> をクリックします。

すべてのエンティティにはNew Relic固有のID番号があり、属性`entityGuid`として報告されます。GUIDを使用してエンティティの[NRQLクエリ](/docs/query-your-data/nrql-new-relic-query-language/get-started/introduction-nrql-new-relics-query-language)を実行できます。

### エンティティ間の関係に関する詳細 [#relationships]

監視対象エンティティ間の関係を理解するためのオプションをいくつか示します。

* UIでエンティティを表示する場合は、[<DNT>**Related entities**</DNT> UI](#related-entities)を使用します。
* [サービスマップ](/docs/service-maps-dependencies-new-relic-one)を使用すると、接続を視覚的に表示できます。
* [ディストリビューティッド（分散）トレーシング](/docs/distributed-tracing-new-relic-one)を使用して、エンティティがトランザクション内でどのように相互呼び出しを行うかを確認します。
* [NerdGraph API](/docs/apis/nerdgraph/examples/nerdgraph-relationships-api-tutorial)を使用して、関係情報を表示します。

### エンティティに関する技術的な詳細 [#technical-details]

エンティティタイプに関する技術的な詳細については、[エンティティタイプのGitHubリポジトリ](https://github.com/newrelic/entity-definitions/tree/main)を参照してください。たとえば、APMが監視するエンティティの詳細については、[APMアプリケーション](https://github.com/newrelic/entity-definitions/tree/main/entity-types/apm-application)を参照してください。

各エンティティには、データのレポート方法を管理する複数のファイルが含まれています。たとえば、`golden_metrics`ファイルには通常、UIエクスペリエンスで強調表示される、最も重要なメトリクスに関する情報が含まれています。これは、[APM監視対象エンティティの`golden_metrics.yml`ファイル](https://github.com/newrelic/entity-definitions/blob/main/entity-types/apm-application/golden_metrics.yml)です。

エンティティの`definition`ファイルには、次のような情報が含まれています。

* `domain`：たとえば、`APM`、または`Infra`。
* `type`：たとえば、`Application`または`AWSECSCONTAINERINSTANCE`。
* デフォルトの[タグ](/docs/new-relic-one/use-new-relic-one/core-concepts/use-tags-help-organize-find-your-data)。
* `entityExpirationTime`：詳細については、[エンティティの有効期限](#expiration)を参照してください。

### エンティティの有効期限 [#expiration]

エンティティタイプに応じて存続期間が異なり、各[エンティティタイプ](https://github.com/newrelic/entity-definitions/tree/main/entity-types)の`definition`ファイルに設定されている`entityExpirationTime`によって決定されます。エンティティがデータの報告を停止すると、この有効期限によりそのエンティティのレコードがNew Relicに存在する期間が制御されます。

New Relicは膨大な数のエンティティを監視しますが、それらのエンティティの多く（Kubernetesコンテナなど）は存続期間が短くなります。これらの理由から、データの報告を停止したエンティティレコードを、定期的に削除する必要があります。

この有効期限はエンティティ自体のレコードに関連し、[テレメトリーデータ](/docs/data-apis/understand-data/new-relic-data-types)には関連**しません**。別の言い方をすれば、監視対象のエンティティによって報告されたテレメトリーデータは、データ[保持設定](/docs/telemetry-data-platform/manage-data/manage-data-retention)に応じてNRDBで検索でき、NRQLを介して利用できます。しかし、エンティティ自体のレコードは、有効期限が切れると、New Relicには存在しなくなります。

エンティティの有効期限のオプションは次のとおりです。

* `FOUR_HOURS`
* `DAILY` （24時間）
* `EIGHT_DAYS`：`definition`ファイルに期限が定義されていない場合はデフォルト値が適用されます。
* `QUARTERLY` （3か月）
* `MANUAL`：この設定は、作成と削除が手動で制御されているエンティティ（ワークロードやダッシュボードなど）にのみ適用されます。

## エンティティをグループ化および整理する [#group]

エンティティをグループ化して、組織でビジネス上重要な関係を反映させることができます。たとえば、特定のチームまたは部署、あるいは特定のサービスに関連したすべてのエンティティをグループ化できます。あるいは、複数のホストをまとめて、そのグループ化をデータセンターに反映させることもできます。

エンティティをグループ化するには、以下を参照してください。

* [エンティティにタグを付けます](/docs/new-relic-one/use-new-relic-one/core-concepts/tagging-use-tags-organize-group-what-you-monitor)。
* [ワークロードを作成](/docs/new-relic-one/use-new-relic-one/workloads/workloads-new-relic-one-isolate-resolve-incidents-faster)し、ビジネス上重要なエンティティのセットをグループ化できます。
* [エンティティを作成し、エンティティデータをカスタマイズ](#entity-synthesis)

## エンティティ合成による独自のエンティティの作成と管理 [#entity-synthesis]

New Relicがサポートしていないソースからのテレメトリをすぐに利用できる場合は、そのマッピングを提案できます。承認されると、New Relicが受信するテレメトリのうち、定義ファイルと一致するものがエンティティに合成されます。

詳細について：

* 予約属性およびエンティティの関係の定義方法については、このドキュメントを参照してください。
* 既存のエンティティタイプの変更や新規エンティティタイプの作成方法については、[エンティティ合成に関する当社のGitHubレポ](https://github.com/newrelic/entity-definitions#entity-definitions)を参照してください。

### 合成されたエンティティの予約済み属性 [#reserved-attributes]

これらの属性は、受信するテレメトリから合成することを意図しています。これらは、影響や結果を把握していない限り、設定しないでください。

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        属性
      </th>

      <th>
        説明
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `entity.guid`
      </td>

      <td>
        通常、この属性フィールドをテレメトリデータに設定しないでください。New Relicでは、データポイントに関連付けられたエンティティの一意の識別子を格納するためにこのフィールドを取り込んだデータに追加する場合があります。すでに存在する`entity.guid`属性がテレメトリーに付随している場合、New Relicでは値を変更しません。ただし、UIでエンティティが見つからない場合や、テレメトリが予期されるエンティティに関連付けられていない場合など、定義されていない動作が引き起こされる可能性があります。

        この属性を渡す1つのユースケースは、取り込んだテレメトリーを、すでに監視しているエンティティに関連付けることです。`entity.guid`属性が送信されると、その値によってエンティティ識別システム（エンティティ合成定義など）が上書きされ、代わりにその属性がデータとして使用されます。
      </td>
    </tr>

    <tr>
      <td>
        `entity.name`
      </td>

      <td>
        この属性は、エンティティ識別システムによって選択されたエンティティ名を上書きしようとしない限り、取り込んだテレメトリーデータに配置しないでください。すでにデータ上に存在する値は変更しませんが、属性をデータに追加する場合があります。したがって、UIでエンティティが見つからない場合や、テレメトリが予期されるエンティティに関連付けられていない場合など、無効な値または予期しない値が原因で、定義されていない動作が引き起こされる可能性があります。

        取り込んだテレメトリにこのフィールドが存在する場合、その値を使用して、データポイントに関連付けられたエンティティに名前が付けられます。この名前は、エンティティ識別システムによって選択された名前の代わりに使用されます（[エンティティ合成定義](https://github.com/newrelic/entity-definitions#entity-definitions)など）。多くのエンティティは識別の一部として名前を使用しているため、このフィールドを変更すると、新しいエンティティが生成される可能性があります。
      </td>
    </tr>

    <tr>
      <td>
        `entity.type`
      </td>

      <td>
        この属性は、エンティティタイプを区別する必要がある特定のレガシーケースを除き、取り込んだテレメトリデータには配置しないでください。このフィールドを渡すと、特に、このフィールドに認識できない値が送信される場合、エンティティの検出と干渉する可能性があります。

        New Relicでは、この値がデータにすでに存在している場合、この値を変更しませんが、クエリ時にこのフィールドがテレメトリの明確なフィルタリングを提供する保証はありません。既存のエンティティ定義にはすでに重複した値があるため、テレメトリークエリをフィルタリングするためにその他のフィールドを優先して`entity.type`を避けることをお勧めします。

        このフィールドはNew Relicによって使用されます。つまり、UIでエンティティが見つからない場合や、テレメトリが予期されるエンティティに関連付けられていない場合など、無効な値または予期しない値が原因で、定義されていない動作が引き起こされる可能性があります。
      </td>
    </tr>
  </tbody>
</table>

既存のエンティティタイプの変更や新規エンティティタイプの作成方法については、[エンティティ合成に関する当社のGitHubレポ](https://github.com/newrelic/entity-definitions#entity-definitions)を参照してください。

## インストゥルメントされていないエンティティ [#uninstrumented-entities]

テレメトリーを使用して、現在インストゥルメントされていないが、アプリケーションで使用されているエンティティを検出できます。たとえば、インストゥルメントされたエンティティの1つが、Amazon RDSデータベースを呼び出している可能性があります。これは現在New Relicでインストゥルメントされていないため、監視やアラートなどのツールを提供できません。

その場合、当社は、インストゥルメントされたエンティティとの関係とともに、いわゆる「インストゥルメントされていないエンティティ」を作成します。インストゥルメントされたエンティティの[サービスマップ](/docs/new-relic-solutions/new-relic-one/ui-data/service-maps/introduction-service-maps)に表示されます。エンティティをクリックするだけで表示される、インストゥルメント化する明確な指示を提供します。

## エンティティ関係 [#related-entities]

エンティティ間の接続は、テレメトリーから推測可能なものに基づき、New Relicが自動的に作成します。たとえば、HTTPを使用して通信する2つのサービスがNew Relicでインストゥルメントされる場合、それらの間で「呼び出し/呼び出され」関係を推定します。

[エンティティエクスプローラー](/docs/new-relic-solutions/new-relic-one/core-concepts/new-relic-explorer-view-performance-across-apps-services-hosts#find)、Navigator、Lookoutビューでエンティティを表示すると、右側のペインに各<DNT>**Related entities**</DNT>を表示できます。現在のエンティティに直接接続しているさまざまなエンティティを表示するものです。スタックのすべての接続された部分を通じて、これらの関連エンティティの重要なメトリクスを迅速に表示し、1つのエンティティから別のエンティティに移動できます。

<Callout variant="tip">
  [NerdGraph API](/docs/apis/nerdgraph/examples/nerdgraph-entities-api-tutorial)を使用して、エンティティの関係をさらに詳しく説明します。
</Callout>

### エンティティ関係のタイプ [#types]

さまざまな方法でエンティティを相互に関連付けることができます。以下のコラプサーは、サポート対象のエンティティ関係を示しています。可能な関係を理解したら、[自動作成された関係](#relationship-created)のリストを参照するか、[カスタムエンティティ関係を作成](#create-custom-relationship)するかどうかを検討します。

<CollapserGroup>
  <Collapser id="types-definition" title="関係タイプ">
    <table>
      <thead>
        <tr>
          <th style={{ width: "200px" }}>
            タイプ
          </th>

          <th>
            説明
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            `BUILT_FROM`
          </td>

          <td>
            ターゲットエンティティには、ソースエンティティのコードが含まれます。
          </td>
        </tr>

        <tr>
          <td>
            `CALLS`
          </td>

          <td>
            サービスまたはアプリケーションが別のサービスまたはアプリケーションを呼び出す間の関係。アップストリームおよびダウンストリームサービスを表示するために使用します。
          </td>
        </tr>

        <tr>
          <td>
            `CONNECTS_TO`
          </td>

          <td>
            ソースエンティティはターゲットエンティティと接続しています。
          </td>
        </tr>

        <tr>
          <td>
            `CONSUMES`
          </td>

          <td>
            ソースエンティティは、ターゲットのKafkaトピックまたは他のキューシステムからメッセージを消費します。
          </td>
        </tr>

        <tr>
          <td>
            `CONTAINS`
          </td>

          <td>
            最新のクラウドインフラストラクチャに共通する関係と階層的な使用事例。たとえば、これは`HOST`にコンテナが含まれていることを示します。
          </td>
        </tr>

        <tr>
          <td>
            `HOSTS`
          </td>

          <td>
            アプリケーションまたはプロセスとその実行システム間の関係。
          </td>
        </tr>

        <tr>
          <td>
            `IS`
          </td>

          <td>
            別のテレメトリーデータソースによって別のエンティティとしてキャプチャされたエンティティと、現在表示しているエンティティとの関係。
          </td>
        </tr>

        <tr>
          <td>
            `MANAGES`
          </td>

          <td>
            ソースエンティティは、ソースのサブシステムを表すターゲットを管理します。
          </td>
        </tr>

        <tr>
          <td>
            `MEASURES`
          </td>

          <td>
            ソースエンティティを使用して、ターゲットエンティティを測定します。
          </td>
        </tr>

        <tr>
          <td>
            `PRODUCES`
          </td>

          <td>
            ソースエンティティは、ターゲットのKafkaトピックまたは他のキューシステムからメッセージを生成します。
          </td>
        </tr>

        <tr>
          <td>
            `SERVES`
          </td>

          <td>
            バックエンドアプリケーションと、応答で返されるブラウザアプリケーションとの関係。
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>
</CollapserGroup>

### どの関係が自動作成されますか？ [#relationship-created]

自動関係は、エンティティによって報告されているテレメトリーに基づいて作成されます。これらの関係には、生存時間（TTL）があります。つまり、関係の作成に使用されるメトリクスが一定期間内に報告されない場合、自動的に削除されます。関係のデフォルトのTTLは<b>75分</b>です。TTLは<b>関係のタイプに応じて10分から最大3日間まで</b>変動します。

エンティティ間で自動作成される関係は次のとおりです。

<CollapserGroup>
  <Collapser id="source-agent" title="ソース：New Relicエージェント">
    <table>
      <thead>
        <tr>
          <th>
            関係ソース
          </th>

          <th>
            関係タイプ
          </th>

          <th>
            関係ターゲット
          </th>

          <th style={{ width: "350px" }}>
            関係が作成される理由
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            New Relicエージェントを使用してインストゥルメントされたアプリケーション
          </td>

          <td>
            CALLS
          </td>

          <td>
            New Relicエージェントを使用してインストゥルメントされたアプリケーション
          </td>

          <td>
            New Relicエージェントによって監視されるアプリケーション間の関係は、`DurationByCaller`メトリクスを使用してレポートされます。呼び出し先はメトリクスをレポートします。

            たとえば、メトリクス`DurationByCaller/Mobile/100/1234/HTTP/all`は、呼び出し元がアカウント100の`APPLICATION 1234`であることを示します。
          </td>
        </tr>

        <tr>
          <td>
            New Relicエージェントを使用してインストゥルメントされたアプリケーション
          </td>

          <td>
            CALLS
          </td>

          <td>
            New Relicエージェントを使用してインストゥルメントされたサービス
          </td>

          <td>
            New Relicによって監視されるサービス（呼び出し先）を呼び出すアプリケーション（呼び出し元）は、呼び出し元が`ExternalApp`メトリクスを使用してレポートする関係を作成します。

            たとえば、メトリクス`ExternalApp/dirac.vips.net/100#1234/all`は、呼び出し先がアカウント100の`APPLICATION 1234`であることを示します。

            呼び出し先が呼び出し元に正常に応答した場合、メトリクスがレポートされます。
          </td>
        </tr>

        <tr>
          <td>
            New Relicエージェントを使用してインストゥルメントされたサービス
          </td>

          <td>
            CALLS
          </td>

          <td>
            New Relicエージェントを使用してインストゥルメントされたサービス
          </td>

          <td>
            New Relicエージェントが、New Relicによってインストゥルメントされた別のサービス（呼び出し先）をサービス（呼び出し元）が呼び出していることを検出すると、呼び出し先はメトリクス`ClientApplication`をレポートします。

            たとえば、メトリクス`ClientApplication/100#1234/all`は、呼び出し元がアカウント100の`APPLICATION 1234`であることを示します。
          </td>
        </tr>

        <tr>
          <td>
            New Relicエージェントを使用してインストゥルメントされたサービス
          </td>

          <td>
            CALLS
          </td>

          <td>
            データストアインスタンス
          </td>

          <td>
            アプリケーションがデータストアインスタンスを呼び出すと、`DatastoreInstance`メトリクスを使用してレポートされる関係が作成されます。

            たとえばメトリクス`Datastore/instance/MySQL/172.16.16.3/3306`は、データストアインスタンスがベンダーMySQL、ホスト172.16.16.3、ポート3306であることを示しています。

            このメトリクスは、レガシーデータストアインスタンス形式の`Datastore/instance/MySQL/172.16.16.3:3306`もサポートします。

            現時点では、データストアインスタンスがNew Relicによってインストゥルメントされ、エンティティが関連付けられているかどうかは判定できません。
          </td>
        </tr>

        <tr>
          <td>
            <InlinePopover type="apm" />エージェント
          </td>

          <td>
            SERVES
          </td>

          <td>
            Browserエージェント
          </td>

          <td>
            この関係は、APMエージェントがBrowserエージェントをページに[挿入する](/docs/browser/browser-monitoring/installation/install-browser-monitoring-agent/#select-apm-app)ときに作成されます。
          </td>
        </tr>

        <tr>
          <td>
            ワークロードエンティティ
          </td>

          <td>
            CONTAINS
          </td>

          <td>
            任意のエンティティ
          </td>

          <td>
            ワークロードが作成または更新されると、そのワークロードに属する各エンティティの関係が作成されます。

            一部のワークロードは「動的」である（タグで定義される）ため、関係は5分ごとに再作成されます。こうすることで、エンティティはワークロードに参加したり、ワークロードから離れたりできます。
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>

  <Collapser id="source-infrastructure" title="ソース：Infrastructure">
    <table>
      <thead>
        <tr>
          <th>
            関係ソース
          </th>

          <th>
            関係タイプ
          </th>

          <th>
            関係ターゲット
          </th>

          <th style={{ width: "350px" }}>
            関係が作成される理由
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            Infrastructureホスト
          </td>

          <td>
            HOSTS
          </td>

          <td>
            アプリケーション
          </td>

          <td>
            この関係は、アプリケーションが1つ以上のホストで実行され、Infrastructureエージェントがそれらのホストで実行されている場合に作成されます。
          </td>
        </tr>

        <tr>
          <td>
            Infrastructureホスト
          </td>

          <td>
            HOSTS
          </td>

          <td>
            コンテナ
          </td>

          <td>
            この関係は、コンテナが1つ以上のホストで実行され、ホストがInfrastructureエージェントにインストゥルメントされている場合に作成されます。
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>

  <Collapser id="source-synthetics" title="ソース：合成モニター">
    <table>
      <thead>
        <tr>
          <th>
            関係ソース
          </th>

          <th>
            関係タイプ
          </th>

          <th>
            関係ターゲット
          </th>

          <th style={{ width: "350px" }}>
            関係が作成される理由
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            合成モニター
          </td>

          <td>
            CALLS
          </td>

          <td>
            Browserエージェント
          </td>

          <td>
            この関係は、BrowserエージェントによってインストゥルメントされたページをSyntheticsモニターがチェックするときに作成されます。
          </td>
        </tr>

        <tr>
          <td>
            合成モニター
          </td>

          <td>
            CALLS
          </td>

          <td>
            APMアプリケーション
          </td>

          <td>
            属性`nr.syntheticsMonitorId`を含むエージェントイベントは、APMアプリケーション（ターゲット）と相互作用するSyntheticsモニター（ソース）として説明されています。

            ヘッダーが存在し、APMアプリケーションIDが存在する場合、モニターとアプリの間の関係が作成されます。
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>

  <Collapser id="source-kubernetes" title="ソース：Kubernetes">
    <table>
      <thead>
        <tr>
          <th>
            関係ソース
          </th>

          <th>
            関係タイプ
          </th>

          <th>
            関係ターゲット
          </th>

          <th style={{ width: "350px" }}>
            関係が作成される理由
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            クラスタ
          </td>

          <td>
            CONTAINS
          </td>

          <td>
            ポッド
          </td>

          <td>
            この関係は、New Relic Kubernetesインテグレーションを使用してインストゥルメントされたクラスタにポッドが作成されるときに作成されます。
          </td>
        </tr>

        <tr>
          <td>
            クラスタ
          </td>

          <td>
            CONTAINS
          </td>

          <td>
            デプロイメント
          </td>

          <td>
            この関係は、New Relic Kubernetesインテグレーションを使用してインストゥルメントされたクラスタにデプロイメントが作成されるときに作成されます。
          </td>
        </tr>

        <tr>
          <td>
            クラスタ
          </td>

          <td>
            CONTAINS
          </td>

          <td>
            DaemonSet
          </td>

          <td>
            この関係は、New Relic Kubernetesインテグレーションを使用してインストゥルメントされたクラスタにDaemonSetが作成されるときに作成されます。
          </td>
        </tr>

        <tr>
          <td>
            クラスタ
          </td>

          <td>
            CONTAINS
          </td>

          <td>
            StatefulSet
          </td>

          <td>
            この関係は、New Relic Kubernetesインテグレーションを使用してインストゥルメントされたクラスタにStatefulSetが作成されるときに作成されます。
          </td>
        </tr>

        <tr>
          <td>
            クラスタ
          </td>

          <td>
            CONTAINS
          </td>

          <td>
            ホスト
          </td>

          <td>
            この関係は、クラスタの一部であるホストがNew Relic Kubernetesインテグレーションを使用してインストゥルメントされるときに作成されます。
          </td>
        </tr>

        <tr>
          <td>
            デプロイメント
          </td>

          <td>
            CONTAINS
          </td>

          <td>
            ポッド
          </td>

          <td>
            この関係は、New Relic Kubernetesインテグレーションを使用してインストゥルメントされたクラスタにデプロイメントがポッドを作成するときに作成されます。
          </td>
        </tr>

        <tr>
          <td>
            DaemonSet
          </td>

          <td>
            CONTAINS
          </td>

          <td>
            ポッド
          </td>

          <td>
            この関係は、New Relic Kubernetesインテグレーションを使用してインストゥルメントされたクラスタにDaemonSetがポッドを作成するときに作成されます。
          </td>
        </tr>

        <tr>
          <td>
            StatefulSet
          </td>

          <td>
            CONTAINS
          </td>

          <td>
            ポッド
          </td>

          <td>
            この関係は、New Relic Kubernetesインテグレーションを使用してインストゥルメントされたクラスタにStatefulSetがポッドを作成するときに作成されます。
          </td>
        </tr>

        <tr>
          <td>
            ポッド
          </td>

          <td>
            CONTAINS
          </td>

          <td>
            コンテナ
          </td>

          <td>
            この関係は、New Relic Kubernetesインテグレーションを使用してインストゥルメントされたクラスタにポッドがコンテナを作成するときに作成されます。
          </td>
        </tr>

        <tr>
          <td>
            ホスト
          </td>

          <td>
            HOSTS
          </td>

          <td>
            ポッド
          </td>

          <td>
            この関係は、New Relic Kubernetesインテグレーションを使用してインストゥルメントされるクラスタの一部であるホスト内でポッドが実行されているときに作成されます。
          </td>
        </tr>

        <tr>
          <td>
            コンテナ
          </td>

          <td>
            HOSTS
          </td>

          <td>
            アプリケーション
          </td>

          <td>
            この関係は、アプリケーションがdocker内で実行されており、dockerが実行されているホストがInfrastructureエージェントによってインストゥルメントされるときに作成されます。
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>

  <Collapser id="source-external" title="外部サービス">
    <table>
      <thead>
        <tr>
          <th>
            関係ソース
          </th>

          <th>
            関係タイプ
          </th>

          <th>
            関係ターゲット
          </th>

          <th style={{ width: "350px" }}>
            関係が作成される理由
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            外部サービス
          </td>

          <td>
            CALLS
          </td>

          <td>
            外部サービス
          </td>

          <td>
            関係が作成されると、外部サービスにより、スパンが、`service.name`属性上のその名前と、`parent.service.name`属性内で呼び出しを開始するサービスの名前とともにレポートされます。
          </td>
        </tr>

        <tr>
          <td>
            アプリケーション
          </td>

          <td>
            IS
          </td>

          <td>
            外部サービス
          </td>

          <td>
            アプリケーションと外部サービス間の関係が作成されるため、ユーザーが、関連するエンティティコンポーネントを使用してそれらの関係間をナビゲートできるようになります。
          </td>
        </tr>

        <tr>
          <td>
            New Relicエージェントを使用してインストゥルメントされたBrowserアプリケーション
          </td>

          <td>
            CALLS
          </td>

          <td>
            外部サービス
          </td>

          <td>
            ブラウザアプリケーションは、外部サービス（URL）を呼び出すときに`Ajax/HostTransaction`メトリクスをレポートします。

            サンプルメトリック： `Ajax/HostTransaction/api.segment.io:443/CallbackTime'`
          </td>
        </tr>

        <tr>
          <td>
            クラスタ
          </td>

          <td>
            CONTAINS
          </td>

          <td>
            外部サービス
          </td>

          <td>
            関係が作成されると、外部サービスにより、`k8s.cluster.name`属性とともにスパンがレポートされます。

            クラスタは、New Relic Kubernetesインテグレーションを使用してインストゥルメントする必要があり、インテグレーションに設定されているクラスタ名は、スパンでレポートされたクラスタ名と一致する必要があります。
          </td>
        </tr>

        <tr>
          <td>
            ポッド
          </td>

          <td>
            HOSTS
          </td>

          <td>
            外部サービス
          </td>

          <td>
            関係が作成されると、外部サービスにより、次の属性とともにスパンがレポートされます。

            * `service.name`：サービスの名前。

            * `k8s.cluster.name`：クラスタの名前。

            * `k8s.pod.name`：サービスを実行しているポッドの名前。

            * `k8s.namespace.name`：ポッドが作成されたネームスペース。

              クラスタは、New Relic Kubernetesインテグレーションを使用してインストゥルメントする必要があり、インテグレーションに設定されているクラスタ名は、スパンでレポートされたクラスタ名と一致する必要があります。
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>
</CollapserGroup>

### カスタムエンティティ関係の作成 [#create-custom-relationship]

関係が自動的に検知されない場合は、[NerdGraph API](/docs/apis/nerdgraph/examples/nerdgraph-entities-api-tutorial/#manual-relationships)を使用して手動で作成するか、New Relic UIで <DNT>**Related entities**</DNT>の<DNT>**Add/edit related entities**</DNT>リンクを使用して作成できます。現在、サービスエンティティ間の呼び出し/呼び出され関係のみ、手作業で作成できます。

<Callout id="RBAC-callout" variant="tip">
  手作業で関係を管理するには、エンティティ関係で変更および削除機能がある必要があります。関係の編集ボタンが表示されない場合は、アカウント管理者に連絡してください。
</Callout>