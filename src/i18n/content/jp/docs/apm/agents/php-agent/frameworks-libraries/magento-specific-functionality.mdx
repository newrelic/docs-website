---
title: Magentoに特化した機能
tags:
  - Agents
  - PHP agent
  - Frameworks and libraries
metaDescription: New Relic's PHP agent includes support for automatic transaction naming for the Community and Enterprise editions of Magento 1 and 2.
freshnessValidatedDate: never
translationType: machine
---

New Relic の PHP エージェントには、Magento 1 および 2 の Community エディションおよび Enterprise エディション向けの自動トランザクション名付けのサポートが含まれています。このドキュメントでは、この仕組みと、自動化された名前を使って Magento アプリケーションの問題を追跡する方法について説明します。

## Magento 1

Magento 1 アプリケーションのトランザクションは、リクエストを処理するモジュール、コントローラー、アクションに基づいて名前が付けられます。たとえば、デフォルトの顧客アカウント ページのトランザクションには`customer/account/index`という名前が付けられます。これは、 [`Mage_Customer_AccountController`の`indexAction()`メソッド](https://github.com/OpenMage/magento-mirror/blob/1.9.3.2/app/code/core/Mage/Customer/controllers/AccountController.php#L109-L120)( `customer`モジュールの`account`コントローラ) がトランザクションを担当していたことを示します。

## Magento 2

Magento 2 アプリケーションの通常の Web トランザクションには、Magento 1 トランザクションと同様の名前が付けられます。トランザクション名は、リクエストを処理したモジュール、コントローラー、およびアクションをエンコードします。たとえば、 [`Magento\Customer\Controller\Account\Index`](https://github.com/magento/magento2/blob/2.1.4/app/code/Magento/Customer/Controller/Account/Index.php)コントローラー クラスによって処理されるリクエストの名前も`customer/account/index`になります。

## Web API

Magento 2 には、 [Web API](http://devdocs.magento.com/guides/v2.1/get-started/bk-get-started-api.html) のサポートも組み込まれています。これらは、RESTやSOAPで利用可能なウェブサービスです。

[PHP エージェント バージョン 7.0](/docs/release-notes/agent-release-notes/php-release-notes/php-agent-700186)以降、New Relic は、この機能を使用するトランザクションの自動命名をサポートしています。PHP エージェントの以前のバージョンでは、デフォルトで Web API トランザクションに`unknown`という名前が付けられていました。

<table>
  <thead>
    <tr>
      <th style={{ width: "150px" }}>
        <DNT>
          **Magento 2 web APIs**
        </DNT>
      </th>

      <th>
        <DNT>
          **Comments**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td id="soap">
        SOAP
      </td>

      <td>
        SOAP トランザクションには、リクエストを処理したサービス クラスとメソッドに基づいて名前が付けられます。たとえば、トランザクション名`Webapi/Soap/Magento\Catalog\Api\CategoryManagementInterface/getTree`は、SOAP リクエストが`Magento\Catalog\Api\CategoryManagementInterface`を実装するモデルの`getTree()`メソッドによって処理されたことを示します。

        WSDL トランザクションにも自動的に名前が付けられます。 `Webapi/Soap/WsdlList`は使用可能な API のリストを返すトランザクションに使用され、 `Webapi/Soap/Wsdl`は特定の SOAP API の WSDL を取得するトランザクションに使用されます。
      </td>
    </tr>

    <tr>
      <td id="rest">
        REST
      </td>

      <td>
        Magento 2.1 以降、REST トランザクションには[SOAP](#soap)トランザクションと同様の名前が付けられます。唯一の違いは、REST リクエストの接頭辞が`Webapi/Soap`ではなく`Webapi/Rest`であることです。

        Magento 2.0 では、PHP エージェントは、トランザクションを処理した特定のサービス クラスとメソッドに自動的に名前を付けることができません。代わりに、REST リクエストは現在、汎用名`FrontController/Magento\Webapi\Controller\Rest\Interceptor`を受け取ります。これは、将来の PHP エージェントのリリースで改善される可能性があります。回避策として、より高い解像度が必要な場合、New Relic はサービス メソッドで[`newrelic_name_transaction()`](/docs/agents/php-agent/configuration/php-agent-api#api-name-wt)を使用することを推奨します。
      </td>
    </tr>
  </tbody>
</table>

## FrontControllerInterfaceのプラグイン [#front-controller-interface-plugins]

Magento 2 では、 `Magento\Framework\App\FrontControllerInterface`インターフェースの[プラグインまたはインターセプター](http://devdocs.magento.com/guides/v2.1/extension-dev-guide/plugins.html)を登録して、デフォルトのルーティング エンジンを置き換えることができます。たとえば、 [Web API 機能は](#web-apis)次のように動作します。

インターセプターが`Magento\Framework\App\FrontControllerInterface`に登録されている場合、New Relic の PHP エージェント バージョン 7.0 以降を使用する場合、そのクラスの名前がデフォルトのトランザクション名として使用されます。必要に応じて、 [`newrelic_name_transaction()`](/docs/agents/php-agent/configuration/php-agent-api#api-name-wt)使用して手動で名前を付けることもできます。

## トランザクションの自動ネーミングの解除 [#problems]

自動トランザクション命名が役に立たない場合は、 [`newrelic_name_transaction()`](/docs/agents/php-agent/configuration/php-agent-api#api-name-wt) API 関数を使用して PHP エージェントの自動トランザクション命名をオーバーライドできます。
