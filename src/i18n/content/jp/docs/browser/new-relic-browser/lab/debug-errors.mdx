---
title: 'ラボ パート 3: アプリケーションのエラーをデバッグする'
metaDescription: 'Part 3 of a multi-part lab on using New Relic browser monitoring to troubleshoot your site: Debug errors in your application'
freshnessValidatedDate: never
translationType: machine
---

<Callout
  variant="course"
  title="ラボ"
>
  この手順は、New Relic ブラウザーを使用して Web アプリをトラブルシューティングする方法を説明するラボの一部です。

  ラボの各手順は前回の手順に基づいているため、この手順を開始する前に、最後の手順で [_あるブラウザ エージェントを使用してアプリケーションをインストルメント化するを_](/docs/browser/new-relic-browser/lab/install-browser-agent/)完了していることを確認してください。
</Callout>

これまで、アプリケーションは正常に動作していました。ユーザーは注文を行うことができ、サービスに満足しました。しかし、アプリケーションでいくつかの洞察を得たので、いくつかの JavaScript エラーが表示されていることに気付きました。

<img
  title="JavaScript errors in relicstaurants"
  alt="JavaScript errors in relicstaurants"
  src="/images/browser-lab-screenshot-relicstaurants-browser-errors.webp"
/>

この手順では、New Relic ブラウザーを使用してこれらのエラーの原因を突き止め、アプリケーションをタイムリーにデバッグします。

<Callout variant="important">
  New Relic でデータを表示するには、この手順で<InlinePopover type="browser"/>を有効にする必要があります。

  まだ行っていない場合は、 [ブラウザ エージェントを使用してアプリをインストルメント化します](/docs/browser/new-relic-browser/lab/install-browser-agent)。
</Callout>

## フロントエンドエラーをデバッグする

悪いニュースは、アプリケーションにいくつかのエラーがあることを確認したことです。良いニュースは、最近、アプリケーションに当社のブラウザー エージェントを組み込んだことです。アカウントにまだサインインしていない場合は、New Relic に移動してサインインします。

<Steps>
  <Step>
    New Relic ホームページから<DNT>**Browser**</DNT>に移動し、 <DNT>**Relicstaurants**</DNT>アプリケーションを選択します。

    <img
      title="view relicstraunts"
      alt="view relicstaruants"
      src="/images/browser-lab-screenshot-view-relicstaurants.webp"
    />
  </Step>

  <Step>
    ここには、<DNT>**Page views with JavaScript errors**</DNT>、<DNT>**Core web vitals**</DNT>、<DNT>**User time on the site**</DNT>、<DNT>**Initial page load and route changes**</DNT> などを含む、 browserアプリケーションに関連するすべてのデータが表示されます。

    <img
      title="Relicstaurants summary"
      alt="Relicstaurants summary"
      src="/images/browser-lab-screenshot-relicstaurants-browser-app.webp"
    />
  </Step>

  <Callout variant="tip">
    データが表示されませんか?ブラウザーの監視が有効になっており、Load Generator が実行されていることを確認してください。
  </Callout>

  <Step>
    <DNT>**Page views with javascript errors**</DNT>通知します。

    <img
      title="page views with javascript errors"
      alt="page views with javascript errors"
      src="/images/browser-lab-screenshot-page-with-js-errors.webp"
    />

    ここでは、アプリケーションに Javascript エラーがあることを示すスパイクが表示されます。
  </Step>

  <Step>
    <DNT>**Page views with javascript errors**</DNT>をクリックします。

    <img
      title="page views with javascript errors"
      alt="page views with javascript errors"
      src="/images/browser-lab-screenshot-navigate-to-js-errors.webp"
    />

    これにより、 <DNT>**JS errors**</DNT>ページに移動し、すべての JS エラーと合計エラー インスタンスが表示されます。

    <img
      title="javascript errors"
      alt="javascript errors"
      src="/images/browser-lab-screenshot-js-errors.webp"
    />
  </Step>

  <Step>
    詳細については、 <DNT>**Cart cannot be empty**</DNT>エラーをクリックしてください。

    <img
      title="cart error"
      alt="cart error"
      src="/images/browser-lab-screenshot-cart-error.webp"
    />

    ここでは、エラーに関連する<DNT>**errorMessage**</DNT> 、 <DNT>**INSTANCES**</DNT> 、 <DNT>**INTERACTIONS AFFECTED**</DNT>などの詳細が表示されます。

    <img
      title="cart error details"
      alt="cart error details"
      src="/images/browser-lab-screenshot-cart-error-details.webp"
    />
  </Step>

  <Step>
    次に、 <DNT>**Error Instances**</DNT>タブに移動します。

    <img
      title="error instances"
      alt="error instances"
      src="/images/browser-lab-screenshot-error-instances.webp"
    />

    ![エラー インスタンスを示す画像](../../../images/nr-browser/error-instances.webp)

    ここでは、 <DNT>**Event Log**</DNT> 、 <DNT>**Stack trace**</DNT> 、その他を含む特定のエラーに関連する詳細が表示されます。
  </Step>

  <Step>
    <DNT>**Stack trace**</DNT>を表示するには、 <DNT>**Error Instances**</DNT>ページを下にスクロールします。

    <img
      title="stack trace"
      alt="stack trace"
      src="/images/browser-lab-screenshot-stack-trace.webp"
    />

    ここに、エラーのスタック トレースが表示されます。
  </Step>
</Steps>

上記のエラーの詳細を見ると、サービスに影響を与える特定のエラーがわかります。ただし、ここに示すスタック トレースは縮小されているため、このエラーの原因を理解するのは困難です。これを理解するには、ソース マップをアップロードしてエラーの縮小を解除する必要があります。

## ソース マップをアップロードして JS エラーを非縮小化する

縮小された JavaScript は、ほとんどの場合、ブラウザーのエラー ページにわかりにくく、役に立たないスタック トレースが表示されます。ソース マップをアップロードすると、これらのエラーがわかりやすいスタック トレースに変換されます。また、コード行への便利なリファレンスを提供し、デバッグを容易にします。UI、API、または npm モジュールを介してソース マップを New Relic にアップロードできます。

ここでは、New Relic UI を使用してソース マップをアップロードし、JS エラーを縮小解除します。

<Steps>
  <Step>
    JS エラー ページから、エラーのスタック トレースに移動し、展開します。

    <img
      title="Expand stack trace"
      alt="Expand stack trace"
      src="/images/browser-lab-screenshot-expand-stack-trace.webp"
    />

    ここに、ソース マップをアップロードするオプションが表示されます。
  </Step>

  <Step>
    <DNT>**find file**</DNT>をクリックします。

    <img
      title="image showing find file option to upload source map"
      alt="image showing find file option to upload source map"
      src="/images/browser-lab-screenshot-find-file.webp"
    />

    これにより、ローカル ストレージからソース マップをアップロードするためのファイル エクスプローラー ウィンドウが開きます。プロジェクトの _build/static/js_ ディレクトリからソース マップを見つけてアップロードします。

    <Callout variant="tip">
      ソース マップ ファイルのファイル拡張子は`.js.map`です。Relicstaurants はソース マップを生成するように設定されており、 _build/static/js_ディレクトリにあります。プロジェクトのソース マップの生成に問題がある場合は、 [ドキュメント](/docs/browser/browser-monitoring/browser-pro-features/upload-source-maps-un-minify-js-errors#generate-maps)に従ってソース マップを生成する方法を学習してください。
    </Callout>
  </Step>

  <Step>
    ソース マップが正常にアップロードされると、縮小されていないエラーが表示されます。

    <img
      title="unminified stack trace"
      alt="unminified stack trace"
      src="/images/browser-lab-screenshot-un-minified.webp"
    />

    ここでは、このエラーを生成している特定のファイルとコード行が表示されます。 119 行目で、 <DNT>**Cart cannot be empty!**</DNT>が_components/layouts/app/app- コンテナ/header/app- コンテナ-header.js_ファイル内の<DNT>**onClick**</DNT>イベントに関連付けられており、ユーザーの集計もトリガーしていることに注意してください。 このファイルを詳しく見てみましょう。
  </Step>

  <Step>
    選択した IDE でアプリケーションを開き、 _src/components/layouts/app/app-container/header/app-container-header.js_ ファイルに移動します。表示されたコードを詳しく見てください。

    ```js fileName=src/components/layouts/app/app-container/header/app-container-header.js  lineHighlight=113-130
    import { Button, Drawer, Table } from 'antd';
    import Text from 'antd/lib/typography/Text';
    import { orderList } from 'atoms/order-list.atom';
    import { useState } from 'react';
    import { Link } from 'react-router-dom';
    import { useRecoilState } from 'recoil';
    import { Logo, StyledHeader } from './app-header-styled';
    import Navi from './navi-items';
    import { useNavigate } from 'react-router';

    const Header = () => {
      const [isSidebarVisible, setIsSidebarVisible] = useState(false);
      const [orderListState, setOrderList] = useRecoilState(orderList);
      const navigate = useNavigate();

      const onClose = () => {
        setIsSidebarVisible(false);
      };
      const handleSidebarOpen = () => {
        setIsSidebarVisible(true);
      };

      const itemQuantity = (list) => {
        let totalItemQuantity = 0;
        list.forEach((item) => (totalItemQuantity += item.count));

        return totalItemQuantity;
      };

      const handleDeleteItem = (clickedRow) => {
        const reducedData = orderListState.filter((item) =>
          item.name === clickedRow.name ? false : true
        );
        setOrderList(reducedData);
      };

      const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Count',
          dataIndex: 'count',
          key: 'count',
        },
        {
          title: 'Price',
          dataIndex: 'price',
          key: 'price',
        },
        {
          title: 'Delete',
          render: (clickedRow) => (
            <Button onClick={() => handleDeleteItem(clickedRow)}>-</Button>
          ),
        },
      ];

      return (
        <StyledHeader>
          <Link to="/">
            <Logo>
              <div>Relicstaurants</div>
              <p>by New Relic</p>
            </Logo>
          </Link>
          <Navi
            sidebarVisible={handleSidebarOpen}
            orderListLength={itemQuantity(orderListState)}
          />
          <Drawer
            size="large"
            title="Cart"
            placement="right"
            onClose={onClose}
            visible={isSidebarVisible}
          >
            <Table
              dataSource={orderListState}
              columns={columns}
              pagination={false}
              summary={(pageData) => {
                let totalPrice = 0;

                pageData.forEach(
                  ({ price, count }) => (totalPrice += price * count)
                );

                return (
                  <>
                    <Table.Summary.Row>
                      <Table.Summary.Cell colSpan={2}>Total</Table.Summary.Cell>
                      <Table.Summary.Cell>
                        <Text type="danger">{totalPrice.toFixed(2)}</Text>
                      </Table.Summary.Cell>
                    </Table.Summary.Row>
                    <Table.Summary.Row>
                      <Table.Summary.Cell colSpan={3}>
                        <Button
                          disabled={totalPrice > 0 ? false : true}
                          primary
                          onClick={() => {
                            setOrderList([]);
                            setIsSidebarVisible(false);
                          }}
                        >
                          Clear Cart
                        </Button>
                      </Table.Summary.Cell>
                      <Table.Summary.Cell>
                        <Button 
                          id="pay" 
                          primary 
                          onClick={() => { 
                            if (!(totalPrice > 0)) { 
                              var err = new Error('Cart cannot be empty!'); 
                              newrelic.noticeError(err);  
                              alert(err) 
                              navigate('/') 
                              setIsSidebarVisible(false); 
                            } else { 
                            navigate(`/payment`, { state: totalPrice }); 
                            setIsSidebarVisible(false); 
                            } 
                          }} 
                        > 
                          PAY 
                        </Button> 
                      </Table.Summary.Cell>
                    </Table.Summary.Row>
                  </>
                );
              }}
            />
          </Drawer>
        </StyledHeader>
      );
    };

    export default Header;
    ```

    ここで、エラー<DNT>**Cart cannot be empty!**</DNT>は、ユーザーが誤って空のカートでチェックアウトしようとした場合にのみ発生することに注意してください。 この関数は、カートが空のままではチェックアウトに進むことができないエンドユーザーを集計するようにコーディングされています。 これで、このエラーがサービスに影響を与えないことがわかりました。 ただし、このエッジケースを処理してエラーを回避するためのより良い方法があります。
  </Step>

  <Step>
    アプリケーションを実行している端末で `Ctrl+C` を押して、サービスの提供を停止します。 _src/components/layouts/app/app-container/header/app-container-header.js を_ 次のように更新します。

    ```js fileName=src/components/layouts/app/app-container/header/app-container-header.js  lineHighlight=4,81-134
    import { Button, Drawer, Table } from 'antd';
    import Text from 'antd/lib/typography/Text';
    import { orderList } from 'atoms/order-list.atom';
    import { Message } from 'components/common';
    import { useState } from 'react';
    import { Link } from 'react-router-dom';
    import { useRecoilState } from 'recoil';
    import { Logo, StyledHeader } from './app-header-styled';
    import Navi from './navi-items';
    import { useNavigate } from 'react-router';

    const Header = () => {
      const [isSidebarVisible, setIsSidebarVisible] = useState(false);
      const [orderListState, setOrderList] = useRecoilState(orderList);
      const navigate = useNavigate();

      const onClose = () => {
        setIsSidebarVisible(false);
      };
      const handleSidebarOpen = () => {
        setIsSidebarVisible(true);
      };

      const itemQuantity = (list) => {
        let totalItemQuantity = 0;
        list.forEach((item) => (totalItemQuantity += item.count));

        return totalItemQuantity;
      };

      const handleDeleteItem = (clickedRow) => {
        const reducedData = orderListState.filter((item) =>
          item.name === clickedRow.name ? false : true
        );
        setOrderList(reducedData);
      };

      const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Count',
          dataIndex: 'count',
          key: 'count',
        },
        {
          title: 'Price',
          dataIndex: 'price',
          key: 'price',
        },
        {
          title: 'Delete',
          render: (clickedRow) => (
            <Button onClick={() => handleDeleteItem(clickedRow)}>-</Button>
          ),
        },
      ];

      return (
        <StyledHeader>
          <Link to="/">
            <Logo>
              <div>Relicstaurants</div>
              <p>by New Relic</p>
            </Logo>
          </Link>
          <Navi
            sidebarVisible={handleSidebarOpen}
            orderListLength={itemQuantity(orderListState)}
          />
          <Drawer
            size="large"
            title="Cart"
            placement="right"
            onClose={onClose}
            visible={isSidebarVisible}
          >
            {orderListState.length > 0 ? (
              <Table
                dataSource={orderListState}
                columns={columns}
                pagination={false}
                summary={(pageData) => {
                  let totalPrice = 0;

                  pageData.forEach(
                    ({ price, count }) => (totalPrice += price * count)
                  );

                  return (
                    <>
                      <Table.Summary.Row>
                        <Table.Summary.Cell colSpan={2}>Total</Table.Summary.Cell>
                        <Table.Summary.Cell>
                          <Text type="danger">{totalPrice.toFixed(2)}</Text>
                        </Table.Summary.Cell>
                      </Table.Summary.Row>
                      <Table.Summary.Row>
                        <Table.Summary.Cell colSpan={3}>
                          <Button
                            disabled={totalPrice > 0 ? false : true}
                            primary
                            onClick={() => {
                              setOrderList([]);
                              setIsSidebarVisible(false);
                            }}
                          >
                            Clear Cart
                          </Button>
                        </Table.Summary.Cell>
                        <Table.Summary.Cell>
                          <Button
                            id="pay"
                            disabled={totalPrice > 0 ? false : true}
                            primary
                            onClick={() => {
                              navigate(`/payment`, { state: totalPrice });
                              setIsSidebarVisible(false);
                            }}
                          >
                            PAY
                          </Button>
                        </Table.Summary.Cell>
                      </Table.Summary.Row>
                    </>
                  );
                }}
              />
            ) : (
              <Message>Nothing in cart</Message>
            )}
          </Drawer>
        </StyledHeader>
      );
    };

    export default Header;
    ```
  </Step>
</Steps>

ここでは、カートが空の場合にエラーではなくメッセージ<DNT>**Nothing in cart**</DNT>を表示するようにファイルを変更しました。 エンドユーザーがカートにアイテムを入れるまで、 <DNT>**PAY**</DNT>ボタンは無効のままになります。

## アプリケーションを再起動します

アプリケーションを修正したので、ローカル サーバーを再起動します。

```bash
npm run build
npm run newstart
```

Load Generator も再起動します。

```bash
python3 simulator.py
```

<Callout variant="important">
  これらのコマンドを正しいターミナル ウィンドウで実行していることを確認してください。これらのウィンドウが表示されなくなった場合は、 [セットアップ手順](/docs/browser/new-relic-browser/lab/set-up-env)の手順に従ってください。
</Callout>

Load Generator が New Relic へのデータ送信を開始すると、アプリケーションが JavaScript エラーを報告しなくなったことに注意してください。

<img
  title="No errors"
  alt="No errors"
  src="/images/browser-lab-screenshot-no-errors.webp"
/>

## 概要

要約すると、アプリケーションでエラーを確認し、New Relic ブラウザーを使用して次のことを行いました。

1. エラー率を確認する
2. アプリケーションの JS エラーを分析する
3. エラーインスタンスを理解する
4. ソース マップをアップロードして JS エラーをデバッグする

<Callout
  variant="course"
  title="ラボ"
>
  この手順は、New Relic ブラウザーを使用して Web アプリのトラブルシューティングを行う方法を説明するラボの一部です。次に、 [アプリケーションのフロントエンドの遅さをデバッグしてみて](/docs/browser/new-relic-browser/lab/debug-slowness/)ください。
</Callout>
