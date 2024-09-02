---
title: Funcionalidad específica de Magento
tags:
  - Agents
  - PHP agent
  - Frameworks and libraries
metaDescription: New Relic's PHP agent includes support for automatic transaction naming for the Community and Enterprise editions of Magento 1 and 2.
freshnessValidatedDate: never
translationType: machine
---

El agente PHP de New Relic incluye soporte para nombres de transacciones automáticas para la Comunidad y edición Enterprise de Magento 1 y 2. Este documento describe cómo funciona esto y cómo puede usar los nombres automatizados para rastrear problemas en su aplicación Magento.

## Magento 1

Las transacciones en la aplicación Magento 1 se nombran según el módulo, el controlador y la acción que maneja la solicitud. Por ejemplo, una transacción para la página de cuenta de clientes predeterminada se denominará `customer/account/index`, lo que indica que el [método`indexAction()` en `Mage_Customer_AccountController`](https://github.com/OpenMage/magento-mirror/blob/1.9.3.2/app/code/core/Mage/Customer/controllers/AccountController.php#L109-L120) (el controlador `account` en el módulo `customer` ) fue responsable de la transacción.

## Magento 2

Las transacciones web normales en la aplicación Magento 2 tienen nombres similares a las transacciones de Magento 1: el nombre de la transacción codifica el módulo, el controlador y la acción que manejó la solicitud. Por ejemplo, una solicitud manejada por la clase de controlador [`Magento\Customer\Controller\Account\Index`](https://github.com/magento/magento2/blob/2.1.4/app/code/Magento/Customer/Controller/Account/Index.php) también se denominará `customer/account/index`.

## API web

Magento 2 también incluye soporte integrado para [API web](http://devdocs.magento.com/guides/v2.1/get-started/bk-get-started-api.html). Estos son servicios web que están disponibles a través de REST y SOAP.

A partir de [la versión 7.0 del agente PHP](/docs/release-notes/agent-release-notes/php-release-notes/php-agent-700186), New Relic admite el nombramiento automático de transacciones que utilizan esta funcionalidad. Las versiones anteriores del agente PHP denominaban transacción API web como `unknown` de forma predeterminada.

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
        JABÓN
      </td>

      <td>
        Las transacciones SOAP reciben nombres según la clase de servicio y el método que manejó la solicitud. Por ejemplo, el nombre de la transacción `Webapi/Soap/Magento\Catalog\Api\CategoryManagementInterface/getTree` indica que una solicitud SOAP fue manejada por el método `getTree()` en el modelo que implementa `Magento\Catalog\Api\CategoryManagementInterface`.

        Las transacciones WSDL también se nombran automáticamente: `Webapi/Soap/WsdlList` se usa para transacciones que devuelven la lista de API disponibles, mientras que `Webapi/Soap/Wsdl` se usa para transacciones que obtienen el WSDL para una API SOAP específica.
      </td>
    </tr>

    <tr>
      <td id="rest">
        DESCANSAR
      </td>

      <td>
        A partir de Magento 2.1, las transacciones REST reciben nombres similares a las transacciones [SOAP](#soap) . La única diferencia es que las solicitudes REST tienen el prefijo `Webapi/Rest` en lugar de `Webapi/Soap`.

        En Magento 2.0, el agente PHP no puede nombrar automáticamente la clase de servicio y el método específicos que manejaron la transacción. En cambio, las solicitudes REST reciben actualmente el nombre genérico `FrontController/Magento\Webapi\Controller\Rest\Interceptor`. Esto puede mejorarse en una versión futura del agente PHP. Como solución alternativa, New Relic recomienda usar [`newrelic_name_transaction()`](/docs/agents/php-agent/configuration/php-agent-api#api-name-wt) en el método de servicio si se requiere una mayor resolución.
      </td>
    </tr>
  </tbody>
</table>

## Complemento FrontControllerInterface [#front-controller-interface-plugins]

En Magento 2 es posible registrar un [complemento o interceptor](http://devdocs.magento.com/guides/v2.1/extension-dev-guide/plugins.html) para la interfaz `Magento\Framework\App\FrontControllerInterface` para reemplazar el motor de enrutamiento predeterminado. Por ejemplo, así es como funciona la [característica API web](#web-apis) .

Si se registra un interceptor para `Magento\Framework\App\FrontControllerInterface`, el nombre de esa clase se utilizará como nombre de transacción predeterminado cuando se utilice la versión 7.0 o superior del agente PHP de New Relic. También puede utilizar [`newrelic_name_transaction()`](/docs/agents/php-agent/configuration/php-agent-api#api-name-wt) para nombrar manualmente si es necesario.

## Escape de denominación automática de transacciones [#problems]

Si la denominación automática de transacciones no es útil, puede anular la denominación automática de transacciones del agente PHP utilizando la función API [`newrelic_name_transaction()`](/docs/agents/php-agent/configuration/php-agent-api#api-name-wt) .
