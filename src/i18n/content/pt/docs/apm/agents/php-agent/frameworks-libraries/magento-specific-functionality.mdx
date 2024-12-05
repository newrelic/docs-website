---
title: Funcionalidade específica do Magento
tags:
  - Agents
  - PHP agent
  - Frameworks and libraries
metaDescription: New Relic's PHP agent includes support for automatic transaction naming for the Community and Enterprise editions of Magento 1 and 2.
freshnessValidatedDate: never
translationType: machine
---

O agente PHP da New Relic inclui suporte para nomenclatura de transação automática para a Comunidade e edição Enterprise do Magento 1 e 2. Este documento descreve como isso funciona e como você pode usar os nomes automatizados para rastrear problemas em sua aplicação Magento.

## Magento1

A transação no aplicativo Magento 1 é nomeada com base no módulo, controlador e ação que trata a solicitação. Por exemplo, uma transação para a página padrão da conta de clientes será denominada `customer/account/index`, o que indica que o [método`indexAction()` em `Mage_Customer_AccountController`](https://github.com/OpenMage/magento-mirror/blob/1.9.3.2/app/code/core/Mage/Customer/controllers/AccountController.php#L109-L120) (o controlador `account` no módulo `customer` ) foi responsável pela transação.

## Magento2

A transação normal da web no aplicativo Magento 2 tem nomes semelhantes às transações do Magento 1: o nome da transação codifica o módulo, o controlador e a ação que tratou a solicitação. Por exemplo, uma solicitação tratada pela classe do controlador [`Magento\Customer\Controller\Account\Index`](https://github.com/magento/magento2/blob/2.1.4/app/code/Magento/Customer/Controller/Account/Index.php) também será denominada `customer/account/index`.

## API Web

Magento 2 também inclui suporte integrado para [web APIs](http://devdocs.magento.com/guides/v2.1/get-started/bk-get-started-api.html). São serviços web disponibilizados por meio de REST e SOAP.

A partir da [versão 7.0 do agente PHP](/docs/release-notes/agent-release-notes/php-release-notes/php-agent-700186), o New Relic suporta a nomeação automática de transações que utilizam esta funcionalidade. Versões anteriores do agente PHP nomeavam a transação da API da web como `unknown` por padrão.

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
        SABÃO
      </td>

      <td>
        As transações SOAP são nomeadas com base na classe de serviço e no método que tratou a solicitação. Por exemplo, o nome da transação `Webapi/Soap/Magento\Catalog\Api\CategoryManagementInterface/getTree` indica que uma solicitação SOAP foi tratada pelo método `getTree()` no modelo que implementa `Magento\Catalog\Api\CategoryManagementInterface`.

        A transação WSDL também é nomeada automaticamente: `Webapi/Soap/WsdlList` é usado para transações que retornam a lista de APIs disponíveis, enquanto `Webapi/Soap/Wsdl` é usado para transações que obtêm o WSDL para uma API SOAP específica.
      </td>
    </tr>

    <tr>
      <td id="rest">
        DESCANSAR
      </td>

      <td>
        A partir do Magento 2.1, as transações REST são nomeadas de forma semelhante à transação [SOAP](#soap) . A única diferença é que as solicitações REST são prefixadas com `Webapi/Rest` em vez de `Webapi/Soap`.

        No Magento 2.0, o agente PHP não consegue nomear automaticamente a classe de serviço e o método específicos que manipularam a transação. Em vez disso, as solicitações REST recebem atualmente o nome genérico `FrontController/Magento\Webapi\Controller\Rest\Interceptor`. Isso pode ser melhorado em uma versão futura do agente PHP. Como solução alternativa, a New Relic recomenda usar [`newrelic_name_transaction()`](/docs/agents/php-agent/configuration/php-agent-api#api-name-wt) no método de serviço se for necessária uma resolução maior.
      </td>
    </tr>
  </tbody>
</table>

## Plug-in FrontControllerInterface [#front-controller-interface-plugins]

É possível no Magento 2 registrar um [plug-in ou interceptador](http://devdocs.magento.com/guides/v2.1/extension-dev-guide/plugins.html) para a interface `Magento\Framework\App\FrontControllerInterface` para substituir o mecanismo de roteamento padrão. Por exemplo, é assim que funciona o [recurso API da web](#web-apis) .

Se um interceptor for registrado para `Magento\Framework\App\FrontControllerInterface`, o nome dessa classe será usado como nome de transação padrão ao usar o agente PHP da New Relic versão 7.0 ou superior. Você também pode usar [`newrelic_name_transaction()`](/docs/agents/php-agent/configuration/php-agent-api#api-name-wt) para nomeação manual, se necessário.

## Fugir da nomenclatura automática da transação [#problems]

Se a nomenclatura automática da transação não for útil, você poderá substituir a nomenclatura automática do agente PHP usando a função de API [`newrelic_name_transaction()`](/docs/agents/php-agent/configuration/php-agent-api#api-name-wt) .
