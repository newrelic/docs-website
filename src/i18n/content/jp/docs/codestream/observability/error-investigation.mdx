---
title: エラー調査
metaDescription: Investigating errors using CodeStream.
freshnessValidatedDate: '2024-12-11T00:00:00.000Z'
translationType: machine
---

CodeStream は、あなたに割り当てられたエラーや、IDE で開かれたコードで最近発生したエラーなど、APM またはブラウザ監視サービスのエラーを表示します。 このセクションの見出しにあるドロップダウン リストを使用して時間枠を制御できます。 このリストは、New Relic の[Errors Inbox](/docs/errors-inbox/errors-inbox/)に表示されるエラーのサブセットである可能性があることに注意してください。

<img
  title="The list of recent errors in CodeStream."
  alt="A screenshot of the list of recent errors in CodeStream."
  src="/images/codestream_screenshot-crop_errors-list.webp"
/>

エラーをクリックするだけで根本原因を掘り下げ、チームメイトと協力して調査できます。

<Video
  type="wistia"
  id="l65l4cqqhd"
/>

スタック トレース内の任意のフレームをクリックすると、対応するファイルと行番号に直接ジャンプします。[git 参照をエラーに関連付けて](#buildsha)いる場合、CodeStream は、環境内でエラーをトリガーしたファイルの読み取り専用エディター タブを開きます。git 参照を関連付けていない場合は、代わりにローカル バージョンのファイルが開きます。リポジトリの一部ではないコード (外部ライブラリなど) を表すスタック トレース フレームをクリックすることはできません。

ブラウザ監視サービスでエラーが発生した場合は、スタックトレースを縮小解除して各フレームのコードにジャンプできるように、 [ソースマップをアップロードする](/docs/browser/browser-monitoring/browser-pro-features/upload-source-maps-un-minify-js-errors/)必要があります。

スタック トレースをナビゲートすると、問題の原因と思われるコードを見つけて、コメント ボタンを使用してディスカッションを開始できます。CodeStream は、そのコードに最近触れた人を自動的に言及するため、適切な人をディスカッションに簡単に参加させることができます。

<img
  title="A comment with the most recent code contributor automatically mentioned."
  alt="A screenshot of a comment with the most recent code contributor automatically mentioned."
  src="/images/codestream_screenshot-crop_error-auto-mention.webp"
/>

問題を特定したら、エラーを割り当てるか、エラー ステータスを `unresolved` から `resolved` または `ignored`に更新できます。

## エラー受信箱から始める [#errors-inbox]

の のエラーから直接、同じエラー エクスペリエンスにジャンプできます。[Errors Inbox](/docs/errors-inbox/errors-inbox/)New Relicスタックトレースでエラーを表示している場合は、 <DNT>**Open in IDE**</DNT>をクリックして IDE 内のコードに直接移動します。

<img
  title="A stack trace error in errors inbox with the &quot;Open in IDE button"
  alt="A screenshot of a stack trace error in errors inbox with the &quot;Open in IDE button.&quot;"
  src="/images/codestream_screenshot-crop_open-in-ide-codestream.webp"
/>

また、ディスカッションは CodeStream とエラー受信箱の間で同期が保たれるため、どちらの場所からでも参加できることにも注意してください。

### ビルドSHAやリリースタグとエラーの関連付け [#buildsha]

CodeStream でエラーを表示すると、git 参照がない場合、エラーに関連付けられたビルド SHA またはリリース タグが表示されることがあります。CodeStream は、git 参照を使用して、特定のスタック トレース エラーと、エラーをトリガーした環境で実行されているコードのバージョンを照合します。エラーを調査するために git リファレンスを構成する必要はありませんが、エラーの原因となったコードのバージョンを調べていない可能性があることに留意してください。

<img
  title="The git reference not configured warning message."
  alt="A screenshot of the git reference not configured warning message."
  src="/images/codestream_screenshot-crop_build-sha-not-configured.webp"
/>

環境変数を使用して、プロジェクトの各ビルドに関連付けられた[コミット sha を](https://git-scm.com/book/en/v2/Git-Tools-Revision-Selection)New Relic <InlinePopover type="apm"/>エージェントに知らせることができます。 ソフトウェアの実行バージョンに関連付けられた[リリース タグを](https://git-scm.com/book/en/v2/Git-Basics-Tagging)使用することもできます。

APM の場合、commit sha および/または release タグ ( `tags.commit`および`tags.releaseTag` ) が、 `Transaction`および`TransactionError`イベントの属性として追加されます。APM 環境変数を使用して、これらの属性を設定できます。ビルド パイプラインの一部としてこれらの変数の 1 つまたは両方を設定することをお勧めします。

* `NEW_RELIC_METADATA_COMMIT`: コミット sha。全体を含めることも、最初の 7 文字のみを含めることもできます (例: `734713b` )。
* `NEW_RELIC_METADATA_RELEASE_TAG`: リリース タグ ( `v0.1.209`や`release-209`など)。これには人間が判読できるという利点があります。

これらの変数の設定方法については、各言語ごとに具体的な設定内容をご紹介します。

* [Go](/docs/agents/go-agent/configuration/go-agent-configuration/)
* [Java](/docs/agents/java-agent/configuration/java-agent-configuration-config-file/)
* [.NET](/docs/agents/net-agent/configuration/net-agent-configuration/)
* [Node.js](/docs/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/)
* [PHP](/docs/agents/php-agent/configuration/php-agent-configuration/)
* [Python](/docs/agents/python-agent/configuration/python-agent-configuration/)

git参照が構成されている場合、CodeStreamは、ローカルで使用しているコードのバージョンにエラーに関連付けられた参照が含まれていないかどうかを通知します。この場合、エラーをより効果的に調査して解決できるように、その参照を含むコードのバージョンを確認することをお勧めします。

<img
  title="The git reference not found warning message."
  alt="A screenshot of the git reference not found warning message."
  src="/images/codestream_screenshot-crop_build-sha-not-found.webp"
/>

CodeStreamは、エラーにスタックトレースが関連付けられていないかどうかも通知します。これは、スタックトレースがNewRelicで期限切れになった古いエラーで発生します。
