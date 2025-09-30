---
title: Rubyカスタムインストゥルメンテーション
tags:
  - Agents
  - Ruby agent
  - API guides
metaDescription: 'For information about customizing New Relic''s Ruby agent API to collect additional metrics, start here.'
freshnessValidatedDate: never
translationType: machine
---

New Relic Rubyエージェントは、多くのメトリクスを自動的に収集します。 また、アプリケーションに関する追加のメトリクスを収集するために使用できる API も含まれています。 境界トレースの詳細に大きな<DNT>**Application Code**</DNT>セグメントが表示される場合、カスタムインストゥルメンテーションはアプリケーションで何が起こっているかをより完全に把握できます。 利用可能なすべてのAPIメソッドの詳細については、 [Rubyドキュメント を](https://www.rubydoc.info/gems/newrelic_rpm)参照してください。

<Callout variant="tip">
  あまりにも大量のメトリクスを収集すると、ご利用のアプリケーションとNew Relicのパフォーマンスに影響が及ぶ可能性があります。データ関連の問題を回避するため、カスタムインストゥルメンテーションが採用する固有のメトリクスの合計数を2000未満に維持してください。
</Callout>

## メソッドトレーサー [#method\_tracers][#method_tracers]

カスタムインストゥルメンテーションをキャプチャーできる最も簡単な方法は、特定のメソッドへのコールをトレースすることです。以下に解説したメソッドでトレースすることで、そのメソッドの各呼び出しに対してトランザクショントレースに追加ノードが挿入されます。こうして、トランザクションの時間進行をより詳しく把握できるようになります。

これは、トランザクションがすでに存在していると思われる場合に最適です。メソッドトレーサーを使用すると、エージェントによってすでにインストゥルメントされているもののコンテキスト内に、レベルの粒度が追加されます。トランザクションが存在するかどうか不明な場合は、[トランザクションエントリポイントのトレーシング](#transaction-tracers)を参照してください。

メソッドトレーサーは、あらゆるクラスのメソッドに取り付け可能なソフトウェアプローブです。このプローブは、ターゲットメソッドを実行してパフォーマンスに関するカスタムインストゥルメンテーションを収集する際、モジュールの先頭に追加して自らを挿入します。

## クラス定義におけるトレーシング [#tracing-classes]

ターゲットメソッドが先に定義されている限り、メソッドトレーサーを通常のクラス定義内で使用できます：

```rb
require 'new_relic/agent/method_tracer'
class Foo
  include ::NewRelic::Agent::MethodTracer

  def generate_image
    ...
  end

  add_method_tracer :generate_image, 'Custom/generate_image'
end
```

クラスメソッドをインストゥルメントするには、クラスシングルトンにメソッドトレーサーを追加します：

```rb
require 'new_relic/agent/method_tracer'
class Foo
  def self.generate_image
     ...
  end

  class << self
    include ::NewRelic::Agent::MethodTracer

    add_method_tracer :generate_image, 'Custom/generate_image'
  end
end
```

`add_method_tracer`メソッドは、任意のメトリック名とオプションのハッシュを取ります。詳しくは、[New Relic RubyDocのadd\_method\_tracer](https://www.rubydoc.info/gems/newrelic_rpm/NewRelic/Agent/MethodTracer/ClassMethods#add_method_tracer-instance_method)を参照してください。

## 初期化子のトレーシング

Railsの場合、初期化子を作成してインストゥルメンテーションディレクティブに「モンキーパッチ」を適用するのが一般的なインストゥルメンテーションの追加方法となります。

たとえば、`MyCache#get`にメソッドトレーサーを追加するには：

1. 必ず、メソッドトレーサーを追加する前にMyCacheクラスがロードされていることを確認してください。

2. <DNT>**config/initializers/rpm\_instrumentation.rb**</DNT>という名前のファイルに以下を追加します。

   ```rb
   require 'new_relic/agent/method_tracer'

   MyCache.class_eval do
     include ::NewRelic::Agent::MethodTracer

     add_method_tracer :get
   end
   ```

## コードブロックのトレーシング [#tracing-blocks]

場合によっては、1 つの方法が非常に複雑なため、全体の時間を追跡しても十分な詳細が得られないことがあります。 個々のメソッドに関するより詳細な情報が必要な既存のトランザクションがある場合は、コードのブロックをトレーサーでラップできます。 `trace_execution_scoped`を呼び出して、トレースするコードをブロックとして渡します。

```rb
extend ::NewRelic::Agent::MethodTracer

def slow_action
  self.class.trace_execution_scoped(['Custom/slow_action/beginning_work']) do
    # do stuff and report execution time with a custom metric name
  end

  # more stuff, whose time will be "blamed" to slow_action
end
```

詳細については、 [New Relic RubyDoc の add\_method\_tracer を](https://www.rubydoc.info/gems/newrelic_rpm/NewRelic/Agent/MethodTracer#trace_execution_scoped-instance_method)参照してください。 実行が既に存在するかどうか、または新しいものを開始する必要があるかどうかがわからない場合は、「高度なカスタムインストゥルメンテーション」にある[コードのセクション「インストゥルメントが行われた」を](/docs/apm/agents/ruby-agent/api-guides/ruby-custom-instrumentation/#in-transaction)参照してください。

## トランザクションの命名

ご利用アプリケーションのスループットと合計レスポンスタイムを判断するには、インストゥルメントされたトランザクションを使用します。メソッドおよびクラス名が、New Relicにレポートされたトランザクション名として使用されます。詳しくは[トランザクショントレースを表示する](/docs/traces/viewing-transaction-traces)をご覧ください。

通常は、エージェントが自動的にトランザクション名を選択します。トランザクションの実行中にトランザクションの名前を変更する場合は、`NewRelic::Agent.set_transaction_name`と対応する`NewRelic::Agent.get_transaction_name`を使用します。

<Callout variant="important">
  トランザクション名の末尾に角かっこ`[suffix]`を使用しないでください。 New Relicは、名前から角かっこを自動的に削除します。代わりに、必要に応じて括弧`(suffix)`またはその他の記号を使用してください。
</Callout>

これは、いくつかの基準をベースにトランザクションをセグメント化する時に便利です。たとえば、Railsでトランザクション名をレスポンスフォーマットごとに変更したい場合は：

```rb
class UsersController
  def index
    @users = User.all
    respond_to do |format|
      format.html
      format.json do
        NewRelic::Agent.set_transaction_name('Users/index.json')
        render :json => @users
      end
      format.xml do
        NewRelic::Agent.set_transaction_name('Users/index.xml')
        render :xml => @users
      end
    end
  end
end
```

トランザクションの名前変更は、一部の業務基準をめぐるリクエストのセグメント化にも利用できます。たとえば、次のようなコードを使用することで、トランザクションを「大口顧客」と「小口顧客」にセグメント化できます：

```rb
class UsersController

  before_filter :segment_new_relic_by_customer_size

  def segment_new_relic_by_customer_size
    new_relic_name = NewRelic::Agent.get_transaction_name
    if current_user.big_customer?
      NewRelic::Agent.set_transaction_name("#{new_relic_name} - big customer")
    else
      NewRelic::Agent.set_transaction_name("#{new_relic_name} - small customer")
    end
  end

end
```

## トランザクションのエントリーポイントをトレーシングする [#transaction-tracers]

通常、エージェントはご利用のアプリケーション内のトランザクションを特定できるものの、対応するフレームワークを使用していないか、エージェントが自動的に記録していないトランザクションを記録したい場合は、メソッドをトランザクションのエントリーポイントとして定義できます：

```rb
class Controller
  include NewRelic::Agent::Instrumentation::ControllerInstrumentation

  def transaction
    # execute a transaction
  end
  add_transaction_tracer :transaction
end
```

クラスメソッドをインストゥルメントするには、クラスシングルトンにメソッドトレーサーを追加します：

```rb
class Controller
  include NewRelic::Agent::Instrumentation::ControllerInstrumentation

  class << self
    def transaction
      # execute a transaction
    end
    add_transaction_tracer :transaction
  end
end
```

## Web以外のトランザクションをインストゥルメントする [#non-web-transactions]

メソッドレベルのトレーシングに加え、バックグラウンドタスクなどのウェブ以外のトランザクションも、ウェブトランザクションと同レベルのトランザクションおよびエラー詳細でインストゥルメントできます。詳しくは[Rubyのバックグラウンド処理とデーモンを監視する](/docs/ruby/monitoring-ruby-background-processes-and-daemons)を参照してください。

## 設定を介してメソッドトレーサーを自動的に適用する

New Relic Ruby エージェント v9.14.0 以降では、エージェントの設定 (YAML 設定ファイルまたは環境変数を介して設定) で定義された任意の Ruby メソッドに対して、エージェントによってメソッド トレーサーが自動的に適用されます。

`:automatic_custom_instrumentation_method_list` 設定問題は、エージェントがトレーサーの追加を試みる完全修飾 (名前空間化) Rubyメソッドのリストを定義するために使用できます。 これには、メソッドを定義するクラスのコード変更は必要ありません。

リストは、 `CLASS#METHOD` (インスタンス メソッドの場合) および/または`CLASS.METHOD` (クラス メソッドの場合) 文字列の配列である必要があります。

モジュールまたはクラスの名前空間を含む完全修飾クラス名 ( `::`区切り文字を使用) を使用します。

以下は、`Image` クラスの `render_png` インスタンス メソッドと、`User` クラスの `notify` クラス メソッドを定義するRubyソースコードです。両方とも `MyCompany` モジュール ネームスペース内にあります。

```rb
module MyCompany
  class Image
    def render_png
      # code to render a PNG
    end
  end

  class User
    def self.notify
      # code to notify users
    end
  end
end
```

そのソースコードを考慮すると、 `newrelic.yml`構成ファイルは次のように両方のメソッドのインストゥルメンテーションをリクエストする可能性があります。

```yml
automatic_custom_instrumentation_method_list:
  - MyCompany::Image#render_png
  - MyCompany::User.notify
```

この設定例では、YAML 配列構文を使用して両方のメソッドを指定しています。 あるいは、カンマで区切られた文字列を使用することもできます。

```yml
automatic_custom_instrumentation_method_list: 'MyCompany::Image#render_png, MyCompany::User.notify'
```

リスト内のカンマの周囲の空白はオプションです。 `NEW_RELIC_AUTOMATIC_CUSTOM_INSTRUMENTATION_METHOD_LIST`環境変数を介してメソッドのリストを使用してエージェントを構成する場合は、次のコンマ区切りの文字列形式を使用します。

```sh
export NEW_RELIC_AUTOMATIC_CUSTOM_INSTRUMENTATION_METHOD_LIST='MyCompany::Image#render_png, MyCompany::User.notify'
```

必要なのは YAML エントリまたは環境変数設定だけです。 このアプローチでは、アプリケーションのコードに`require` 、 `include` 、または`add_method_tracer`行を追加する必要はありません。

## 高度なカスタムインストゥルメンテーション [#advanced-tracing]

エージェントによってトレーシングコードが自動的にインストゥルメントされない場合、通常は標準の[メソッドトレーサー](/docs/agents/ruby-agent/api-guides/ruby-custom-instrumentation#method_tracers)で十分です。

ただし、単一のメソッド呼び出しより複雑な処理をインストゥルメントする必要があることもあります。たとえば、メソッド内の数行のコードをインストゥルメントする場合、またはコードのある場所でトランザクションを開始し、別の場所で終了する場合などです。

エージェントバージョン6.0で導入されたTracerモジュールには、トランザクションとセグメントを作成して、現在のトランザクションと対話できる柔軟なAPIが含まれます。

### コードのセクションのインストゥルメント [#in-transaction]

コードのセクションをインストゥルメントするには、コードをブロックでラップし、そのブロックを`Tracer.in_transaction`メソッドに渡します。 エージェントはトランザクションが存在することを確認し、その中にブロック内のコード用のセグメントを作成します。

```rb
require 'new_relic/agent/tracer'

def long_and_complex_process
  expensive_setup

  NewRelic::Agent::Tracer.in_transaction(
    partial_name: 'Complex/process',
    category: :task
  ) do
    code_to_be_instrumented
  end

  expensive_teardown
end
```

### トランザクションまたはセグメントの開始 [#start-transaction-or-segment]

コード内のある場所でトランザクションを開始し、別の場所でトランザクションを終了する必要がある場合 (コールバックベースのイベントで発生する可能性がある)、 `NewRelic::Agent::Tracer.start_transaction_or_segment`を呼び出します。 <DNT>**must**</DNT>このメソッドの戻り値で`finish`を呼び出します。

```rb
class MyEventWatcher
  def event_started
    @transaction = NewRelic::Agent::Tracer.start_transaction_or_segment(
      partial_name: 'MyEventWatcher/my_event',
      category:     :task)
  end

  def event_completed
    @transaction.finish
  end
end
```

詳しくは、[New Relic RubyDocのTracer#start\_transaction\_または\_segment](https://www.rubydoc.info/gems/newrelic_rpm/NewRelic/Agent/Tracer#start_transaction_or_segment-class_method)を参照してください。

### スレッドのインストゥルメンテーション

8.7.0以降では、アプリケーションのクラス`NewRelic::TracedThread`を使用して、New Relicによってインストゥルメントされたスレッドを作成します。

このクラスをネイティブ`Thread`クラスの代替として使用します。詳細については、[TracedThread API のドキュメント](https://www.rubydoc.info/gems/newrelic_rpm/NewRelic/TracedThread)を参照してください。