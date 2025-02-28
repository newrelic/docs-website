---
title: ログコレクターのライフサイクルを管理する
metaDescription: Learn how to manage the life cycle of log collectors in New Relic.
freshnessValidatedDate: never
translationType: machine
---

<Callout title="プレビュー">
  この機能はまだ開発中ですが、ぜひお試しください。

  この機能は現在、弊社の[プレリリース ポリシー](/docs/licenses/license-information/referenced-policies/new-relic-pre-release-policy)に従ってプレビュー プログラムの一部として提供されています。
</Callout>

## 概要

New Relic のログ コレクター ライフサイクル管理ソリューションを使用すると、さまざまな環境にわたるログ収集インフラストラクチャを管理できます。 このソリューションを使用すると、ログコレクターのライフサイクルを構成および監視できます。

ログ コレクターのライフサイクル全体を管理できるようになりました。 これには、ユーザーの健康状態の監視、必要に応じた設定またはデプロイの変更が含まれます。

このソリューションは、ログ コレクションのインフラストラクチャを可視化する必要があるDevOpsチーム、システム アドミニストレーター、IT 運用マネージャーに役立ちます。 監視機能を強化し、コンテナ化された環境とオンプレミス環境の両方でパフォーマンスを維持するツールにアクセスできます。

### 多様なニーズに応えるソリューション

* **ログ コレクターの健全性監視:** Fluent BitエンティティUI 、ログ コレクターの監視機能を提供します。

* **トラブルシューティング:** Fluent BitエンティティUIを使用して、ログ コレクターで設定の問題のトラブルシューティングと修正を行うことができます。これは、問題の特定と解決に役立ちます。

  <img title="Fluent Bit entity dashboard" alt="Fluent Bit entity dashboard" src="/images/fluent-bit-dashboard.webp" />

/\* 次のセクションは、NR Control が出荷されるときに再び表示されます \*/ /\* ## 多様なニーズに対応するソリューション - ログ コレクターの健全性監視:\*\* Fluent BitエンティティUI 、 New Relic Control の有無にかかわらず利用可能な、ログ コレクターの監視機能を提供します。 - トラブルシューティング:\*\* Fluent Bit BitentityUI を使用して、ログUIの設定の問題をトラブルシューティングして修正できます。これは、問題の特定と解決に役立ちます。 - 設定とリモートデプロイメント:\*\* New Relic Control を使用すると、 Fluent Bit設定を一元管理し、更新し、デプロイの変更をリモートで行うことができます。 \*/

## クラスタ用の Fluent Bitコレクターを管理するKubernetes

ログ コレクター ライフサイクル管理ソリューションは現在、Kubernetes 環境をサポートしています。 これにより、次のことが可能になります。

* すべてのコンテナ化されたアプリケーションからログを収集して処理します。
* Kubernetes 関連のメタデータをログに追加します。
* Fluent Bit の軽量設計を使用して、大量のリソースを消費せずに大量のデータを処理します。

### 前提条件

New Relic でログを記録するために Fluent Bit をインストールして構成する前に、次の前提条件を満たしていることを確認してください。

* Kubernetesクラスタへのアクセス
* インストレーションや設定に必要なツールと権限
* New Relicエンドポイントとの通信を可能にするネットワーク設定とセキュリティポリシー
* New Relicアカウント

/\* &lt;Calloutvariant=&quot;important&quot;&gt; New Relic Control 経由で Fluent Bit を管理することもできます。 詳細については、\[Fleet Control]\(/docs/New Relic-control/fleet-control/overview)を参照してください。 \*/&lt;/Callout&gt;

これらの要件の詳細については、 [「ログを New Relic に転送する」](/docs/logs/forward-logs/enable-log-management-new-relic)を参照してください。<br />

/\* New Relic Control のセットアップの詳細については、\[ New Relic Control の使用開始]\(/docs/New Relic-control/getting-started) を参照してください。 \*/

### 設定

クラスタに Fluent Bitエージェントをインストールするには:Kubernetes

* [New Relic Kubernetesインテグレーション](/install/kubernetes/)をインストールします。 この統合には、ログ用のKubernetesプラグインが含まれています。
* [ガイド付きインストール](https://github.com/newrelic/helm-charts/tree/master/charts/newrelic-logging#configuration) 中に、 newrelic-logging リポジトリ[ ](/install/kubernetes/)で利用可能な設定オプションを使用します。

詳細については、 [「ログ管理用に Kubernetes を有効にする」](/docs/logs/forward-logs/kubernetes-plugin-log-forwarding/#enable-process)を参照してください。

/\* ## Fleet Control を使用して Fluent Bit をインストールする Fleet Control から始める場合は、まずエージェント制御構成を設定します。 このプロセスには、Fluent Bit エージェントおよびその他の重要なコンポーネントのインストールが含まれます。 Fluent Bitエージェント コントロールで使用するには、サンプル設定に示すように、エージェント コントロール インストレーションの一部としてログ転送を有効にします。エージェント&lt;CollapserGroup&gt; コントロールのHelm チャートのリリース。# \`https\://github.com/newrelic/helm-charts/blob/master/charts/agent-control/values.yaml\` エージェント-コントロール-デプロイメント: config: フリート\_コントロール: # オプション: 既存のフリートに自動的に接続するには、フリート ID (エンティティ guid) を指定します。 fleet\_id: &quot;&quot; auth: # エージェントが接続する New Relic 組織 ID。 organizationId: &quot;YOUR\_ORGANIZATION\_ID&quot; # デプロイされる管理対象エージェントのリスト。 キーはエージェントの名前を表し、値は設定を保持します。 subAgents:インフラストラクチャ:type:newrelic/com.newrelic.インフラストラクチャ:0.1.0 コンテンツ: # 参照: \`https\://github.com/newrelic/helm-charts/tree/master/charts/nri-bundle\` # 推奨: 明示的なチャート バージョン (最新の安定版) を確認して定義します chart\_version: &quot;\*&quot; # chart\_values: # newrelic-インフラストラクチャ: #enableProcessMetrics: true ログ: type: newrelic/io.fluentbit:0.1.0 コンテンツ: # 参照: \`https\://github.com/newrelic/helm-charts/tree/master/charts/newrelic-logging\` # 推奨: 明示的なチャート バージョン (最新の安定版) を確認して定義します chart\_version: &quot;\*&quot; chart\_values: newrelic-logging: sendMetrics: true エージェント-operator: type: com.newrelic.エージェント:0.1.0 content: chart\_version: &quot;\*&quot; \`\`\` &lt;/Collapser&gt; &lt;/CollapserGroup&gt; 必要な設定のコメントを解除し、\`YOUR\_CLUSTER\_NAME\` や \`YOUR\_LICENSE\_KEY\` などのプレースホルダーを実際の値に置き換えることを忘れないでください。 &lt;Calloutvariant=&quot;important&quot;&gt; デプロイメント全体で一貫性と信頼性を確保するために、明示的なチャート バージョンを指定します。 &lt;/Callout&gt; \*/ /\* ## Fleet Control による管理とデプロイ設定Fluent Bit設定を編集するには、\[Fleet Control]\(/docs/New Relic-control/fleet-control/overview) を使用します。 設定を管理およびデプロイするための高レベルのタスクは次のとおりです。 ### 設定を作成するFluent Bit設定を作成するには、次の手順に従います。 New Relic で、「すべての機能」に移動し、「New Relic Control」を検索して、横にピン留めします。 2. New Relic Control で「設定」を開きます。 3. 「設定の作成」をクリックします。 4. 設定を最初から作成するには、ドロップダウン メニューで \[\*\*新規\*\*] をクリックします。 既存のFluent Bit設定があり、それを活用したい場合は、\[\*\*複製\*\*] をクリックして複製します。 5. \[設定の作成] ダイアログ ボックスで、環境として \*\* Kubernetesが選択されていることを確認し、エージェント タイプとして \*\*Fluent Bit\*\* を選択して、設定の名前を入力します。 次に、\[\*\*続行\*\*] をクリックします。 6. 設定列で、設定テンプレートをコピーし、要件に応じてカスタマイズします。 詳細については、\[supported 問題]\(https\://github.com/newrelic/helm-charts/tree/master/charts/newrelic-logging#supported-configuration-問題)を参照してください。 7. 変更を保存します。 設定ページの設定一覧に設定が追加されます。 8. 設定を編集するには、設定の横にある 3 つのドット (…) を選択し、「\*\*設定の編集」をクリックして変更を加えます。 次に、\[\*\*保存\*\*] をクリックします。 ### デプロイメント 1 を作成します。 New Relic Control で、\*\*Fleets\*\* を開きます。 2. Fluent Bit設定を作成する艦隊を選択します。 3. \*\*デプロイメントの作成\*\* をクリックします。 4. \[新しいデプロイメント] ページで、デプロイメントの名前と説明を入力し、\[\*\*設定を追加] をクリックします。 5. エージェントのタイプとして \*\*Fluent Bit\*\* を選択し、デプロイする設定を選択して、\*\*次へ\*\* をクリックします。 6.設定バージョンを選択します。 &lt;Calloutvariant=&quot;important&quot;&gt; 設定には複数のバージョンが存在する場合があります。 デプロイしたいバージョンを選択してください。 新しく作成された設定の場合、バージョンは 1 つだけになります。 &lt;/Callout&gt; 7. \*\*デプロイメントに追加\*\* をクリックします。 &lt;Calloutvariant=&quot;important&quot;&gt; フリートに少なくとも 1 つの管理対象エンティティがあることを確認します。 または、1つ追加します。 &lt;/Callout&gt; 8. \[\*\*デプロイメントの開始] をクリックします。 ### フリートの表示 フリートで、操作する特定のフリートを選択します。 これにより、艦隊の詳細ページが開きます。 \[概要] タブには、艦隊の一部であるエンティティが表示されます。 エージェントまたはデプロイメントの詳細を表示するには、エージェントまたはデプロイメント タブを使用します。 \*/

### ログコレクターの健全性とパフォーマンスを監視します

Fluent Bit エージェントの効果的なパフォーマンス監視は、Kubernetes 環境内でのログ管理と最適化に不可欠です。 主要なメトリクスを追跡することで、潜在的な問題を特定し、トラブルシューティングを促進できます。

#### 追跡すべき主要なパフォーマンスメトリクス

* **ログ スループット レート:**ログ フローの効率を測定し、中断を強調表示します。 全体的なスループット評価が含まれており、入力プラグインと出力プラグインごとにさらに細分化され、処理されたレコードとバイトのフローが表示されます。
* **メモリ バッファの使用率:**ログ処理に影響するリソース制約を特定するのに役立ちます。 これには、バッファ使用量、オーバーフローのインスタンス、キューの長さ、プロセスとコンテナの全体的なメモリ使用率が含まれます。
* **コンテナ イベントとクラッシュ ループ バックオフ:**エラー、レコードのドロップ、再試行など、ログ ポッドの異常な状態や障害に対するアラート。 これらのインサイトは、ログ処理を中断する可能性のある問題を特定して対処するのに役立ちます。

Fluent Bitエンティティ ダッシュ ボードで、 Fluent Bitの健全性とパフォーマンスを監視できます。 アクセス方法は次のとおりです:

#### 統合とエージェント経由

1. **Installed** \[インストール済み]タブを開きます。 現在インストールされているエージェントと統合のリストが表示されます。
2. 検索エンティティ フィールドまたはタイプ フィルターを使用して、リストを Fluent Bit エージェントに絞り込みます。
3. 確認するエージェントを選択します。

#### すべてのエンティティ経由

1. Fluent Bit - Kubernetesグループで監視するエージェントを見つけます。
2. エージェントを選択します。

/\* ### 艦隊 1 経由。 New Relic Control で、\*\*Fleets\*\* を開きます。 2. Fluent Bitを備えたフリートを特定して選択します。 3. \[エージェント] タブで、 Fluent Bitエージェントを選択します。 \*/ /\* ## 使用例: ログ フローの効率Kubernetesクラスタ内のログが通常の速度でNew Relicに到着していないことを想像してください。 一般的なログ フローは 1 分あたり約 150,000 ログですが、現在の観察では顕著な減少が示唆されています。 New Relic Control と Fluent Bit の監視ツールを活用して問題を診断し、解決することで、この状況に対処する方法を説明します。 ### ステップ 1: ログのスループットを監視する まず、ログの転送速度を確認します。 不一致は、ログ転送プロセスの中断を示している可能性があります。 ### ステップ 2: コンテナーのメトリクスとイベントを分析するKubernetes概要にアクセスして、ログ記録ポッド内の異常なイベントまたは再起動を特定します。 クラッシュ ループ バックオフなどの頻繁な再起動や警告イベントにより、ログ パイプラインが中断され、根本的な問題が示される場合があります。 ### ステップ 3: メモリ使用量を確認する Fluent Bit エージェントのメモリ消費量を調べます。 メモリの使用量が多い、または不安定な場合は、設定エラーやリソース制限があり、対処が必要であることを示している可能性があります。 ### ステップ 4: トラブルシューティングにフリート コントロールを利用する フリート コントロールを使用して、最近の設定変更を確認します。 不正なメモリ制限などの誤った設定を特定して修正すると、ボトルネックを解決し、ログのスループットを向上させることができます。 ### ステップ 5: 再デプロイと検証 フリート コントロールで必要な設定調整を行った後、新しいデプロイメントを開始して変更を適用します。 Fluent Bitエンティティ ビューを使用して、発生メトリクスを監視し、新しい設定の影響を観察します。 問題が解決されたことを示す、ログ スループットの回復とメモリ使用量の安定性を確認します。 \*/

### Fluent Bit Agent をアップグレードする

最新の機能、パフォーマンスの向上、セキュリティ パッチを活用するには、Fluent Bit エージェントを定期的にアップグレードしてください。 [新しいバージョンが利用可能になると、](/docs/release-notes/fluentbit-release-notes) New Relic UI から直接確認できます。

アップグレードする前に、現在の設定がバックアップされていることを確認してください。 新しい機能や変更点を理解するには、リリース ノートまたはドキュメントを確認してください。

#### 最新かどうかを確認する手順

1. New Relicアカウントで、 **Integrations &amp; Agents** \[インテグレーション &amp;amp; エージェント]をクリックし、 **Installed** \[インストール済み]タブを開きます。<br />現在インストールされているエージェントと統合のリストが表示されます。
2. 検索エンティティ フィールドまたはタイプ フィルターを使用して、リストを Fluent Bit エージェントに絞り込みます。
3. アップグレードが必要なエージェントを特定します。
4. **Update from vx.y.x to X.Y.Z** \[vx.yx から XYZ への更新]をクリックします。
5. スライドインするサイドパネルで、 [View release notes](/docs/release-notes/fluentbit-release-notes)\[リリースノートの表示] をクリックします。
6. Fluent Bit リリース ノート ページで、最新の Helm チャート バージョンを確認してください。

/\* 8. New Relic に戻り、サイドパネルを閉じて、エージェントが含まれているフリートをクリックします。 New Relic Control でフリートの概要が開きます。 9. Fluent Bit設定を選択します。 10. 先ほどメモしたチャート バージョンに従って設定ファイル内のチャート バージョンを更新し、変更を保存します。 11. 設定をテストします。 \*/ /\* &lt;Calloutvariant=&quot;important&quot;&gt; エージェントがまだフリートの一部でない場合は、\[まずエージェントをフリートに追加]\() してから、アップグレードの手順を実行します。 \*/&lt;/Callout&gt;

アップグレード後、ログの収集と処理を検証して、エージェントが期待どおりに動作することを確認します。 New Relic の監視ツールを使用して、すべてが実行されていることを確認します。