---
title: ネットワーク フロー収集にデータがありません
tags:
  - Integrations
  - Network monitoring
  - Troubleshooting
metaDescription: Troubleshooting collection issues for network flows.
freshnessValidatedDate: '2023-11-02T00:00:00.000Z'
translationType: machine
---

## 問題 [#problem]

`ktranslate`ネットワーク モニタリング エージェントのインストール後、ネットワーク フロー テレメトリの収集で問題が発生します。

## 背景 [#background]

`ktranslate` パケット ペイロードを編集せずに、収集された生のフロー テレメトリを返します。すぐにサポートされる[フローの種類はいくつか](/docs/network-performance-monitoring/setup-performance-monitoring/network-flow-monitoring/#supported-network-flow-data-types)ありますが、最も有名なものは[NetFlow v5](https://www.cisco.com/c/en/us/td/docs/net_mgmt/netflow_collection_engine/3-6/user/guide/format.html) 、 [NetFlow v9](https://datatracker.ietf.org/doc/html/rfc3954) 、 [sFlow](https://sflow.org/sflow_version_5.txt) 、および[IPFIX](https://datatracker.ietf.org/doc/html/rfc7011)です。

<SideBySide>
  <Side>
    すべてのネットワーク フロー テレメトリは、 [KFlow イベント タイプ](/docs/network-performance-monitoring/setup-performance-monitoring/network-flow-monitoring/#find-your-metrics)に保存されます。これは NRQL で直接クエリできます。このイベント タイプが存在しない場合は、アカウントがデータを受信していないことを示します。
  </Side>

  <Side>
    ```sql
    FROM KFlow 
    SELECT *
    ```
  </Side>
</SideBySide>

## 解決 [#solution]

<CollapserGroup>
  <Collapser
    id="ktranslate-configuration"
    title="ネットワーク監視エージェントのフロー構成"
  >
    `ktranslate`エージェントは、実行時に[-nf.source](/docs/network-performance-monitoring/advanced/ktranslate-container-management/#container-runtime-options)引数によって構成された 1 種類のフロー テンプレートのみを収集できます。デフォルトは`auto`です。これにより、 `ktranslate` `NetFlow v5`からのテンプレートを期待するように指示されます。 `NetFlow v9` \| `sFlow` \| `IPFIX`なので、パケットを変換できます。よくある問題は、特定のタイプのフロー テンプレートをリッスンするように`ktranslate`を設定し、別のタイプをエージェントにエクスポートすることです。`auto`でカバーされていないテンプレートについては、別のコンテナを実行する必要があります。

    ここでのもう 1 つのよくある間違いは、複数のポートを宛先としてターゲットにして、フロー テレメトリを`ktranslate`エージェントにエクスポートすることです。このシナリオでは、実行時に[-nf.port](/docs/network-performance-monitoring/advanced/ktranslate-container-management/#container-runtime-options)の異なる値をそれぞれ設定して、複数の`ktranslate`エージェントを実行する必要があります (デフォルトは`9995` )。特定のポートをターゲットにするために、ソース ネットワーク デバイス上のフロー エクスポーター設定を更新する必要がある場合もあります。
  </Collapser>

  <Collapser
    id="device-configuration"
    title="ネットワークデバイスのフロー構成"
  >
    各ベンダーは、ネットワーク フローのエクスポート用にデバイスを適切に構成するための独自のドキュメントを用意しています。`NetFlow v9` 、 `IPFIX` 、 `sFlow`などのより高度なバージョンには、管理者が収集およびエクスポートされるフィールドをカスタマイズできるオプションがあります。これらを編集すると、 `ktranslate`によるフロー レコードを正しく処理する機能が実質的に無効になる可能性があります。

    次のフィールドは<DNT>**required**</DNT>です:

    <CollapserGroup>
      <Collapser
        id="required-record-group"
        title="すべてのレコードに必須"
      >
        * プロトコル (フィールド タイプ番号: `4` ) - レイヤ 4 プロトコル
        * 送信元アドレス (フィールド タイプ番号: `8` 、 `27` ) - 送信元 IPv4 または IPv6 アドレス
        * 送信元ポート (フィールド タイプ番号: `7` ) - 送信元 TCP/UDP ポート
        * 宛先アドレス (フィールド タイプ番号: `12` 、 `28` ) - 宛先 IPv4 または IPv6 アドレス
        * 宛先ポート (フィールド タイプ番号: `11` ) - 宛先 TCP/UDP ポート
      </Collapser>

      <Collapser
        id="required-interfaces-group"
        title="必須のインターフェイス フィールド (少なくとも 1 つ)"
      >
        * Interface Receive (フィールド タイプ番号: `10` ) - 入力インターフェイスの SNMP インデックス
        * インターフェイス送信 (フィールド タイプ番号: `14` ) - 出力インターフェイスの SNMP インデックス
      </Collapser>

      <Collapser
        id="required-bytes-group"
        title="必須のバイトフィールド (少なくとも 1 つ)"
      >
        * デルタ バイト (フィールド タイプ番号: `1` ) - デルタ バイト
        * 合計バイト数 (フィールド タイプ番号: `85` ) - 合計バイト数
        * 出力バイト数 (フィールドタイプ番号: `23` ) - 出力バイト数
        * イニシエーター オクテット (フィールド タイプ番号: `231` ) - イニシエーター バイト
        * レスポンダー オクテット (フィールド タイプ番号: `232` ) - レスポンダー バイト
      </Collapser>

      <Collapser
        id="required-packets-group"
        title="必須のパケットフィールド (少なくとも 1 つ)"
      >
        * デルタ パケット (フィールド タイプ番号: `2` ) - デルタ パケット
        * 合計パケット数 (フィールド タイプ番号: `86` ) - 合計パケット数
        * 出力パケット (フィールド タイプ番号: `24` ) - 出力パケット
        * イニシエーター パケット (フィールド タイプ番号: `298` ) - イニシエーター パケット
        * レスポンダー パケット (フィールド タイプ番号: `299` ) - レスポンダー パケット
      </Collapser>

      <Collapser
        id="required-routing-group"
        title="必須のルーティング フィールド (少なくとも 1 つ)"
      >
        * ToS (フィールド タイプ番号: `5` ) - サービスのタイプ
        * 送信元 AS (フィールド タイプ番号: `16` ) - 送信元 BGP 自律システム番号
        * 宛先 AS (フィールド タイプ番号: `17` ) - 宛先 BGP 自律システム番号
        * ピアソース AS (フィールドタイプ番号: `129` ) - ピアソース BGP 自律システム番号
        * ピア宛先 AS (フィールド タイプ番号: `128` ) - ピア宛先 BGP 自律システム番号
      </Collapser>

      <Callout variant="tip">
        `ktranslate` レコードが明示的に値`egress`を使用しない限り、すべてのフロー レコードはデフォルトで`Direction: ingress`になります。これは、フロー レコードが`Direction`フィールドなしで送信されるさまざまな状況をカバーします。
      </Callout>
    </CollapserGroup>
  </Collapser>

  <Collapser
    id="tcpdump-confirmation"
    title="フロー受信確認"
  >
    各ベンダーには、デバイス CLI/UI を介したフロー エクスポート カウンタの監視に関する独自のドキュメントがあります。デバイス上でカウンタが増加しない場合は、フロー エクスポートがデバイス上で正しく設定されていないことを示します。

    `ktranslate`の Docker コンテナと Linux サービス デプロイ オプションは両方とも、ホストのネットワークを使用して、マッピングされたポートでデータを受信します。フロー レコードがホストによって受信されていることを検証するには、 [tcpdump](https://www.tcpdump.org)ユーティリティを使用してパケット キャプチャ ( `.pcap` ) ファイルを作成し、後で[Wireshark](https://www.wireshark.org/)で調査できます。

    このコマンドを実行すると、ホスト上のすべてのインターフェイスにわたってすべての受信パケットをキャプチャするように`tcpdump`が設定され、出力が現在のディレクトリ内のファイルに書き込まれます。

    ```shell
    sudo tcpdump -s 0 -i any -w dump_capture.pcap
    ```

    [tcpdump](https://www.tcpdump.org/manpages/tcpdump.1.html)には複数の引数を追加できることに注意してください。ここで最も重要な項目は、後で分析に使用できる出力ファイルです。`STDOUT`に結果を出力すると、現在の目的に対して限定された値が作成されます。

    このファイルを取得したら、次のセクションで結果を分析する方法を説明します。

    <Callout variant="tip">
      見つかった最も一般的な問題の 1 つは、ソース ネットワーク デバイスからターゲット`ktranslate`ホストへのパケットをブロックするネットワーク構成/ファイアウォール ルールです。`tcpdump`ユーティリティで結果が得られない場合、トラブルシューティングを始めるのに最適な場所は、ネットワーク ルールと`iptables`構成を確認することです。
    </Callout>
  </Collapser>

  <Collapser
    id="improperly-formatted-flow-records"
    title="Wireshark を使用したフロー レコード テンプレートの識別"
  >
    [Wireshark](https://www.wireshark.org/)を使用してパケット キャプチャ ファイルを検査するには、次の手順に従います。

    <Steps>
      <Step>
        Wireshark アプリケーションを起動し、パケット キャプチャ ファイルを開きます
      </Step>

      <Step>
        最初のビューにはキャプチャされたすべてのパケットが表示されますが、フロー分析の場合は、それらを適切にデコードするようにアプリケーションを設定する必要があります。メニューを使用して`Analyze > Decode As...`に移動すると、新しいポップアップが開きます。
      </Step>

      <Step>
        ポップアップで、左下のプラス ( `+` ) アイコンをクリックすると、パネルに新しい行が追加されます。`Current`列の最初のオプションは`(none)`です。これをクリックしてドロップダウン メニューを開き、 `NetFlow`および`IPFIX`の場合は`CFLOW`を選択するか、または`sFlow`パケットの場合は`sFlow`選択します。右下の`OK`クリックしてメイン UI に戻ります。

        <Callout variant="tip">
          このメニューは、大文字と小文字が区別されてアルファベット順に並べられています。`sFlow`オプションはリストの一番下にあります。
        </Callout>
      </Step>

      <Step>
        メイン UI に、 `CFLOW` | が表示されるはずです。 `sFlow`個のパケットを`Protocol`列で識別できるようになりました。表示フィルタ`(cflow or sflow)`を適用すると、必要なパケットがキャプチャ ファイル内のその他のパケットから自動的に分離されます。

        次のセクションでは、各パケット タイプを検査する方法の概要を説明します。

        <CollapserGroup>
          <Collapser
            id="netflow-ipfix-analysis"
            title="NetFlow および IPFIX パケットの分析"
          >
            `NetFlow` `IPFIX`プロトコルは、管理者が標準オプションのリストから収集するフィールドを特定できるテンプレート アプローチを使用します。これらのパケットの分析は、 `ktranslate`に[必要なフィールドが](#device-configuration)キャプチャされていることを確認するために行われます。

            Wireshark のメイン UI で、単一の`CFLOW`パケットをクリックして選択し、 `FlowSet n`というタイトルのセクションを展開します。ここで、 `n`はパケット内の単一のフロー レコードを識別する整数です。次に、 `Flow n`サブグループを展開して、このフロー レコードのフィールドを分析します。

            <Callout variant="tip">
              パケット内の`Template Frame`リンクをクリックすると、このデバイスからのすべてのフローのテンプレートを含むキャプチャされたパケットに移動することもできます。
            </Callout>
          </Collapser>

          <Collapser
            id="sflow-analysis"
            title="sFlowパケットの分析"
          >
            `sFlow`とより伝統的な`NetFlow/IPFIX`プロトコルのプロトコルの違いにより、分析する必要があるフィールドが異なります。

            Wireshark のメイン UI で、単一の`sFlow`パケットをクリックして選択し、 `InMon sFlow`というタイトルのセクションを展開します。次のフィールドが存在する必要があります。

            <table>
              <thead>
                <tr>
                  <th style={{ width: "350px" }}>
                    フィールド
                  </th>

                  <th>
                    説明
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>
                    データグラムのバージョン
                  </td>

                  <td>
                    この sFlow パケットのバージョン。
                  </td>
                </tr>

                <tr>
                  <td>
                    エージェントのアドレスタイプ
                  </td>

                  <td>
                    IPv4 (1) または IPv6 (2)
                  </td>
                </tr>

                <tr>
                  <td>
                    エージェントのアドレス
                  </td>

                  <td>
                    フローのエクスポート元の IP アドレス。ここでフロー エクスポーターを構成します。
                  </td>
                </tr>

                <tr>
                  <td>
                    サブエージェントID
                  </td>

                  <td>
                    sFlow v5 では、複数のエクスポータ プロセスを実行できます。これはそれらの一意の識別子です。
                  </td>
                </tr>

                <tr>
                  <td>
                    シーケンス番号
                  </td>

                  <td>
                    エージェントデバイスによって送信された sFlow パケットの数。
                  </td>
                </tr>

                <tr>
                  <td>
                    システム稼働時間
                  </td>

                  <td>
                    エージェントデバイスが最後に再起動されてからの時間。
                  </td>
                </tr>

                <tr>
                  <td>
                    サンプル数
                  </td>

                  <td>
                    現在のパケットに含まれる sFlow サンプルの数。
                  </td>
                </tr>
              </tbody>
            </table>

            `Flow sample`というサブグループを展開すると、次の追加フィールドが表示されます。

            <table>
              <thead>
                <tr>
                  <th style={{ width: "350px" }}>
                    フィールド
                  </th>

                  <th>
                    説明
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>
                    企業
                  </td>

                  <td>
                    このフィールドは、管理者が sFlow エクスポートを構成するときにオプションで有効にできるカスタム sFlow エンタープライズ構成に注釈を付けます。(デフォルトでは`0` )
                  </td>
                </tr>

                <tr>
                  <td>
                    sFlowサンプルタイプ
                  </td>

                  <td>
                    これは、企業が sFlow エクスポートをカスタマイズするときに使用されるサンプルのタイプの指定です。定義は[sFlow ドキュメント](http://www.sflow.org/developers/diagrams/sFlowV5Sample.pdf)にあります。
                  </td>
                </tr>

                <tr>
                  <td>
                    サンプルの長さ
                  </td>

                  <td>
                    サンプルの長さ (バイト単位)。
                  </td>
                </tr>

                <tr>
                  <td>
                    シーケンス番号
                  </td>

                  <td>
                    エージェントがサンプルを取得するたびに増加するカウンター値。
                  </td>
                </tr>

                <tr>
                  <td>
                    サンプリングレート
                  </td>

                  <td>
                    `X`個のパケットのうち 1 個がサンプリングされます。
                  </td>
                </tr>

                <tr>
                  <td>
                    サンプルプール
                  </td>

                  <td>
                    実際にサンプリングされたパケットを含む、サンプリングされた可能性のあるパケットの合計。
                  </td>
                </tr>

                <tr>
                  <td>
                    ドロップされたパケット
                  </td>

                  <td>
                    リソースの制約によりドロップされたパケットの数。
                  </td>
                </tr>

                <tr>
                  <td>
                    入力インターフェース
                  </td>

                  <td>
                    パケットの到着元インターフェイスの SNMP ifIndex。
                  </td>
                </tr>

                <tr>
                  <td>
                    フロー記録
                  </td>

                  <td>
                    このサンプルに含まれるサンプリングされたレコードの数。
                  </td>
                </tr>
              </tbody>
            </table>
          </Collapser>
        </CollapserGroup>
      </Step>
    </Steps>

    <Callout variant="tip">
      これと同じパターンを、 `Decode as...`ステップなしで適用して、syslog データと SNMP トラップ データの両方の受信を検証できます。
    </Callout>
  </Collapser>
</CollapserGroup>
