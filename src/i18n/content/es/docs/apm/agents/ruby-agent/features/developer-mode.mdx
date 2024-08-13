---
title: Modo desarrollador
tags:
  - Agents
  - Ruby agent
  - Features
metaDescription: New Relic's Developer Mode is a built-in user interface to examine details about web transactions in your application.
freshnessValidatedDate: never
translationType: machine
---

<Callout variant="caution">
  El modo de desarrolladores es <DNT>**deprecated**</DNT> y ya no se admite a partir de [la versión 4.1.0 del agente Ruby](/docs/release-notes/agent-release-notes/ruby-release-notes/ruby-agent-410333).
</Callout>

El agente New Relic Ruby incluye el modo desarrolladores, una UI integrada para examinar detalles sobre transacciones web en su aplicación. Con el modo desarrolladores, puede examinar las llamadas a la biblioteca y a la base de datos realizadas por las acciones del controlador a medida que se invocan en la instancia de Rails.

El modo de desarrollador gratuito le brinda la misma visibilidad de transacciones en profundidad que obtiene con [la característica de traza de transacción](/docs/apm/transactions/transaction-traces/introduction-transaction-traces) de New Relic. Sin embargo, solo funciona en una única instancia de Rails y tiene una sobrecarga mucho mayor que la versión de producción. No se recomienda su uso más allá del entorno limitado de escritorio de un desarrollador.

## Consideraciones de Seguridad [#security]

El modo de desarrolladores del agente Ruby, que está activado de forma predeterminada cuando `RAILS_ENV == "development"`, no se comunica con el recolector New Relic de ninguna manera. Los gráficos circulares se representan mediante Google Charts, que implica una publicación HTTP de datos agregados.

<Callout variant="tip">
  El modo de producción del agente Ruby, que está activado de forma predeterminada cuando `RAILS_ENV == "production"` y `RAILS_ENV == "staging"`, se comunica con el sitio New Relic. Para obtener más información, consulte [Seguridad](/docs/subscriptions/security).
</Callout>

## Instalacion

Para instalar el modo desarrolladores, [instale el agente Ruby](/docs/ruby/ruby-agent-installation) como complemento o gema. Es posible que también deba establecer [`developer_mode`](/docs/agents/ruby-agent/installation-configuration/ruby-agent-configuration#developer_mode) en verdadero en su <DNT>**newrelic.yml**</DNT> para el `RAILS_ENV` en el que está trabajando. El modo desarrolladores está activado de forma predeterminada solo cuando `RAILS_ENV` = `development`.

Si bien se creará un archivo <DNT>**newrelic.yml**</DNT> como parte de la instalación, no es necesario tener un <InlinePopover type="licenseKey"/>válido.

## Problemas conocidos [#known_issues]

Los problemas conocidos con el modo desarrolladores incluyen:

<CollapserGroup>
  <Collapser
    id="rails-23"
    title="Requiere Rails 2.3 o superior"
  >
    El modo de desarrolladores en el agente reciente solo funciona en Rails 2.3 o superior. Está basado en rack y las versiones anteriores del framework no incorporaban rack.

    La edición para desarrolladores instala un middleware en su aplicación que responde a cualquier URL precedida por `/newrelic`; por ejemplo, `/newrelic`, `/newrelic/files/images/foo.png`, etc.

    En algunos casos, la URL `/newrelic` es capturada por un middleware anterior. En esta situación, deshabilite la ruta del modo desarrolladores e incluya el middleware usted mismo:

    Al principio del archivo, en `config.ru`:

    ```ruby
    require 'newrelic_rpm'
    require 'new_relic/rack/developer_mode'
    use NewRelic::Rack::DeveloperMode
    ```
  </Collapser>

  <Collapser
    id="pow-compatibility"
    title="Incompatible con Pow"
  >
    El modo de desarrolladores no es compatible con [Pow](http://pow.cx/), un servidor en rack de configuración cero para Mac OS X.
  </Collapser>
</CollapserGroup>

## Usando el modo de desarrollador [#using_devmode]

Si ejecuta su aplicación en su escritorio usando Thin, WEBrick o algo similar, abra la URL `/newrelic` en su servidor para ver la interfaz de usuario del modo desarrolladores.

<Callout variant="caution">
  Si está utilizando Passenger, Unicorn u otros servidores de aplicaciones bifurcados en su escritorio, puede notar algún comportamiento extraño con datos que desaparecen si su servidor de aplicaciones lanza varias instancias. Consulte los <DNT>**Troubleshooting**</DNT> consejos que aparecen a continuación.
</Callout>

<img
  title="screen-ruby-developer-mode-breakdown-chart"
  alt="screen-ruby-developer-mode-breakdown-chart"
  src="/images/apm_screenshot-crop_screen-breakdown-chart.webp"
/>

<DNT>
  **Developer Mode Breakdown Chart**
</DNT>

## Resolución de problemas

Consejos de resolución de problemas para el modo desarrolladores:

<CollapserGroup>
  <Collapser
    id="disappearing-request"
    title="Solicitudes que desaparecen"
  >
    Si tiene este problema con Unicorn u otros despachadores de varios trabajadores, intente limitar la cantidad de trabajadores a 1.
  </Collapser>

  <Collapser
    id="undefined-method-rack-request"
    title="Ruta de método no definida para Rack::Request"
  >
    Algunos usuarios pueden ver un método indefinido `path` para `#<Rack::Request>`. Si está utilizando Rails versión 2.3.2, lo más probable es que tenga un problema con la forma en que se definió la dependencia de Rack en el paquete Rails. Actualice a 2.3.3 (o superior) o defina la versión 1.0.1 de Rack como una dependencia en su Gemfile.
  </Collapser>

  <Collapser
    id="activerecord-reloads"
    title="Recargas ActiveRecord"
  >
    El modo desarrolladores recarga las definiciones de métodos ActiveRecord para cada recarga e informa el tiempo dedicado a definir los métodos (como `define_attribute_method)`. Esto no sucede en producción. Para obtener resultados reales para comparar, agregue lo siguiente al entorno de desarrollo:

    ```ini
    config.cache_classes = true
    ```
  </Collapser>
</CollapserGroup>
