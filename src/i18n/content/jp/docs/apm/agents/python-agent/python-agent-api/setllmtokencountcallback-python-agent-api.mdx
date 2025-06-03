---
title: set_llm_token_count_callback (Python エージェント API)
type: apiDoc
shortDescription: LLM カウントを計算するためのコールバックを登録します
tags:
  - Agents
  - Python agent
  - Python agent API
metaDescription: 'Python API: This call registers a callback to calculate LLM token counts'
freshnessValidatedDate: never
translationType: machine
---

## 構文 [#syntax]

```py
    newrelic.agent.set_llm_token_count_callback(callback, application=None)
```

大規模言語モデル(LLM) (LLM) イベントでのカウントの計算に使用されるバックコール関数を登録します。

## 要件 [#requirements]

Python エージェント バージョン 9.8.0 以降。

## 説明 [#description]

この API は、 `LlmEmbedding`および`LlmChatCompletionMessage`イベントのトークン数を計算して保存するコールバックを登録します。

* この関数は、 `ai_monitoring.record_content.enabled`が`false`に設定されている場合に使用する必要があります。 この設定により、トークン数がサーバー側で付加される New Relic サーバーにエージェントが AI コンテンツを送信できなくなります。
* それでも LLM イベントのトークン数を取得したい場合は、アプリコードにコールバックを実装してローカルでトークン数を特定し、この情報を New Relic に送信できます。

ほとんどの場合、この API は 1 回だけ呼び出されますが、この API を複数回呼び出すこともできます。 エンドポイントに対して新しい呼び出しが行われるたびに、以前に登録されたコールバックが、提供された新しいコールバックで上書きされます。 コールバックを完全に設定解除するには、元のコールバックの代わりに`None`を渡します。

## API問題 [#api-parameters]

<table>
  <thead>
    <tr>
      <th width="25%">
        パラメータ
      </th>

      <th>
        説明
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `callback`

        _呼び出し可能_または_なし_
      </td>

      <td>
        必須。 トークン数を計算するコールバック。 現在のコールバックの設定を解除するには、コールバック関数の代わりに`None`を渡します。
      </td>
    </tr>

    <tr>
      <td>
        `application`

        _物体_
      </td>

      <td>
        オプション。 APIコールを関連付ける特定のアプリケーションオブジェクト。 アプリケーション オブジェクトは、 [`newrelic.agent.application`](/docs/apm/agents/python-agent/python-agent-api/application-python-agent-api/)関数を使用して取得できます。
      </td>
    </tr>
  </tbody>
</table>

## 戻り値 [#return-values]

なし。

## コールバック要件 [#callback-requirements]

提供されたコールバックは、正の整数のトークン カウント値を返す必要があります。そうしないと、LLM イベントでトークン カウントがキャプチャされません。

## コールバックパラメータ [#callback-parameters]

<table>
  <thead>
    <tr>
      <th width="25%">
        パラメータ
      </th>

      <th>
        説明
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `model`

        _ストリング_
      </td>

      <td>
        必須。 LLM モデルの名前。
      </td>
    </tr>

    <tr>
      <td>
        `content`

        _ストリング_
      </td>

      <td>
        必須。 メッセージの内容/プロンプトまたは埋め込み入力。
      </td>
    </tr>
  </tbody>
</table>

## 例 [#examples]

### トークン数の計算とコールバックの登録

tiktokenの例:

```py
import newrelic.agent
def token_count_callback(model, content):
    """
    Calculate token counts locally based on the model being used and the content.
    This callback will be invoked for each message sent or received during a LLM call.
    If the application supports more than one model, it may require finding libraries for
    each model to support token counts appropriately.

    Arguments:
    model -- name of the LLM model
    content -- the LLM message content
    """
    import tiktoken

    try:
        enc = tiktoken.encoding_for_model(model)
    except KeyError:
        return None # Unknown model
    return len(enc.encode(content))

newrelic.agent.set_llm_token_count_callback(token_count_callback)
```

渡されたアプリケーション オブジェクトを使用した API の使用例:

```py
    application = newrelic.agent.register_application(timeout=10.0)
    newrelic.agent.set_llm_token_count_callback(token_count_callback, application)
```
