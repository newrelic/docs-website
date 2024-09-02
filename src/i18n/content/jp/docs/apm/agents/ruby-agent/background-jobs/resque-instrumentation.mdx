---
title: リスケのインストルメント
tags:
  - Agents
  - Ruby agent
  - Background jobs
metaDescription: Additional information about configuring the New Relic Ruby instrumentation of Resque jobs.
freshnessValidatedDate: never
translationType: machine
---

New Relic の Ruby エージェントは、Web アプリケーション自体に加えて、Resque のジョブをインストルメントすることができます。

## 職務上の主張を汲み取る [#capturing_job_parameters]

Rubyエージェントバージョン3.6.9以降では、 オプションで、 Rubyを設定して、Resque ジョブ引数をトレースでキャプチャし、エラーをトレースすることもできます。 これは、失敗したジョブを再現しようとする場合に特に役立ちます。 ジョブ引数に機密情報が含まれている場合に備えて、この機能はデフォルトでオフになっています。 この機能を有効にするには、エージェントのバージョンに応じて<DNT>**newrelic.yml**</DNT>を編集します。

* newrelic_rpm 3.12.0 以降の場合: `attributes.include: job.resque.args.*`
* newrelic_rpm 3.6.9 ～ 3.11.X の場合: `resque.capture_params: true`

この機能は、HTTP リクエスト パラメータがトランザクション トレースでキャプチャされ、Web リクエストのエラーがトレースされるかどうかを制御する、一般的な`capture_params`最上位設定とは異なります。これら 2 つの設定は個別に構成できます。

## Resqueバージョン1.23.1以上 [#resque_1_23_1_plus]

Resque 1.23.1以降を使用している場合、New RelicのResqueインスツルメンテーションを動作させるために、通常のエージェントのインストール手順以外にコードを変更する必要はありません。

<DNT>**Exception:**</DNT> Resque の古いバージョンを実行していたときに、Resque `before_first_fork` 、 `before_fork` 、または`after_fork`フックから`NewRelic::Agent`メソッドへの呼び出しが残っている場合は、Resque 1.23.1 以降にアップグレードした後で、それらの呼び出しを必ず<DNT>**remove**</DNT>してください。

## 代替フォーキングモード [#resque_plugins]

[resque-multi-job-forks](https://github.com/stulentsev/resque-multi-job-forks)または[resque-jobs-per-fork](https://github.com/samgranieri/resque-jobs-per-fork) gem は、個別のジョブごとにフォークするのではなく、ジョブのバッチごとに 1 回フォークするように、Resque のフォーク動作を変更します。同様に、Resque でのフォークを完全に無効にするために、 `FORK_PER_JOB`環境変数を`false`に設定できます。

アプリケーションでこれらの代替フォーク モードのいずれかを使用する場合は、Ruby エージェント<DNT>**version 3.9.7 or higher**</DNT>を実行していることを確認してください。 以前のバージョンの Ruby エージェントは、これらの代替フォーク モードで正しく動作しません。 3.9.7 以降にアップグレードする場合は、エージェントがこれらの環境で動作するように、以前使用していた可能性のある`manual_start`や`after_fork`などの`NewRelic::Agent`メソッドへの直接呼び出しを必ず削除してください。

## 旧Resqueバージョン(&lt; 1.23.1) [#old_resque]

New Relic の Ruby エージェントは、Resque のバージョンが 1.23.1 よりも古い場合でも使用することができます。ただし、New Relic では、最良の結果を得るために Resque 1.23.1 以上にアップグレードすることを推奨しています。

多くのアプリケーションは、Resque ジョブの存続期間中の重要なポイントでカスタム コードを挿入するために、Resque によって公開されるフック ( `before_fork` 、 `after_fork`など) を使用します。New Relic Ruby エージェントも、インストルメンテーションを配置できるようにするためにこれらのフックを使用する必要があります。

Resque 1.23.1以前のバージョンでは、フックを複数回定義することができず、最後に定義されたものが優先されます。Resque のバージョン>= 1.23.1 (フックを複数回定義しても互いに上書きされない) にアップグレードできない場合は、必要な New Relic コードを追加することで、カスタムの Resque フックを修正することができます。以下はその例です。

<DNT>
  **Example: Modifying custom Resque hooks**
</DNT>

カスタムコードを持たないフックについては、定義を省略することができます。この場合は、エージェントによって自動的にインストールされます。

```ruby
Resque.before_first_fork do
  # ... your custom hook code ...
  NewRelic::Agent.manual_start(:dispatcher => :resque,
                               :sync_startup => true,
                               :start_channel_listener => true)
end
    
Resque.before_fork do |job|
  # ... your custom hook code ...
  NewRelic::Agent.register_report_channel(job.object_id)
end
    
Resque.after_fork do |job|
  # ... your custom hook code ...
  NewRelic::Agent.after_fork(:report_to_channel => job.object_id,
                             :report_instance_busy => false)
end
```

## デッドロック・ジョブ [#deadlocks]

一部のお客様（特にジョブのスループットが非常に高いお客様）から、Rubyエージェントを有効にしたResqueのワーカープロセスで断続的なデッドロックが報告されています。このようなデッドロックは、RubyエージェントがNew Relicサーバーにデータを送信するために使用するバックグラウンドスレッドと、Resqueのフォーク動作との間の相互作用がうまくいかないことが原因です。

これらの問題を解決するには、以下のいずれかのオプションを使用します。

* Resque プロセスの生成時に`FORK_PER_JOB`環境変数を`false`に設定して、Resque のフォーク動作を無効にします。
* Ruby の標準ライブラリの`resolv-replace`ライブラリを使用して、Ruby のネイティブ DNS 解決コードを純粋な Ruby バージョンに置き換えます。

Ruby エージェントは、Resque マスタープロセス内のバックグラウンドスレッドを使用して、New Relic コレクターにデータを送信します。環境によっては、このスレッドが DNS 解決時 (New Relic コレクターのホスト名を解決するとき) にネイティブロックを取得します。

メインの Resque マスター プロセスのメイン スレッドが fork を呼び出して子プロセスを作成している間に、このネイティブ ロックがバックグラウンド スレッドによって保持されている場合、フォークされた子プロセス内で保持されているとしてマークされます。ただし、 `fork`呼び出しスレッドをコピーするだけであるため、ネイティブ ロックを保持していたバックグラウンド スレッドは子プロセスに存在せず、ネイティブ ロックが解放されることはありません。子プロセスが DNS 解決を実行しようとすると、同じネイティブ ロックとデッドロックを取得しようとします。この[Github の問題](https://github.com/resque/resque/issues/1101)を回避するには、Ruby のデフォルトの DNS 解決パスの代わりに`resolv-replace`を使用します。
