---
title: 'Instalación del agente Ruby: complemento Rails'
tags:
  - Agents
  - Ruby agent
  - Installation
metaDescription: 'Rails 1.2.6 and earlier: Install New Relic''s Rails plugin as a gem in order to have better control over versions and dependencies.'
freshnessValidatedDate: never
translationType: machine
---

Estas instrucciones son para instalar el agente Ruby como complemento de Rails. Para la mayoría de los casos de uso, debería [instalar la gema del agente](/docs/agents/ruby-agent/installation-configuration/ruby-agent-installation#Installing_the_Gem).

## Instale el complemento New Relic Rails [#Installing_the_Plugin]

<Callout variant="important">
  Recomendamos encarecidamente [instalar el agente Ruby como una gema](/docs/agents/ruby-agent/installation-configuration/ruby-agent-installation#Installing_the_Gem) para tener un mejor control sobre las versiones y dependencias.
</Callout>

Para instalar el complemento Rails desde Github, use los siguientes comandos para las versiones 2 o superiores de Rails:

```
script/plugin install git://github.com/newrelic/newrelic-ruby-agent.git
mv vendor/plugins/rpm vendor/plugins/newrelic-ruby-agent
```

Esto exportará el complemento Rails al directorio `vendor/plugins` de su aplicación. Si no puede instalar el complemento Rails directamente desde la URL de git, puede clonar el repositorio en el directorio proveedor/complemento.

<InstallFeedback/>

## Actualizar el archivo de configuración [#Configuration_file]

Después de instalar el agente, copie el archivo `newrelic.yml` en el subdirectorio `config` de su aplicación. Puede descargar un `newrelic.yml` nuevo que incluye su <InlinePopover type="licenseKey"/>del <DNT>**Account settings**</DNT> cuando inicie sesión en New Relic.

<Callout variant="important">
  Como parte del proceso de instalación, cambie el [nombre de la aplicación](/docs/site/naming-your-application) predeterminada por un nombre significativo.
</Callout>

## Actualice el archivo newrelic.yml [#Updating_newrelicyml]

Siempre que actualice el agente, confirme que su archivo de configuración del agente Ruby (`config/newrelic.yml`) esté actualizado:

* Abra el archivo `newrelic.yml` predeterminado que se encuentra en la carpeta de complementos del agente Ruby (`vendor/plugins/newrelic-ruby-agent/newrelic.yml`).
* Busque nuevas opciones de configuración que no estén en su archivo `config/newrelic.yml` .

<Callout variant="tip">
  Puede hacer referencia a secretos almacenados en [las credenciales de Rails](https://edgeguides.rubyonrails.org/security.html#custom-credentials) en su archivo `newrelic.yml` mediante la interpolación YAML:

  ```
    # When you have a key that exists in config/credentials.yml.enc like 'newrelic_license_key'...
    license_key: <%= Rails.application.credentials.newrelic_license_key %>
  ```
</Callout>

## Ver el registro de sus datos de infraestructura y APM [#logs-context]

También puede reunir los datos de su registro y de la aplicación para que la resolución de problemas sea más fácil y rápida. Con [el contexto de inicio de sesión](/docs/logs/logs-context/configure-logs-context-ruby/), puede ver el mensaje de registro relacionado con sus errores y la traza directamente en UI de su aplicación. También puede ver el inicio de sesión en el contexto de [los datos de su infraestructura](/docs/logs/forward-logs/forward-your-logs-using-infrastructure-agent/), como el clúster de Kubernetes. No es necesario cambiar a otra página de UI.

## Actualizar el agente Ruby [#Update_the_Agent]

Cuando utilice Subversion con el complemento Rails, asegúrese de eliminar el complemento del agente antiguo antes de reinstalarlo.

<Callout variant="tip">
  Usa la gema si es posible.
</Callout>

```
svn rm vendor/plugins/newrelic-ruby-agent svn commit vendor/plugins -m "removing old version of newrelic"
```

Luego, para instalar el último complemento del agente Ruby:

```
script/rails plugin install git://github.com/newrelic/newrelic-ruby-agent.git vendor/plugins/newrelic-ruby-agent
mv vendor/plugins/rpm vendor/plugins/newrelic-ruby-agent
svn add vendor/plugins/newrelic-ruby-agent
svn commit vendor/plugins -m "upgrading newrelic to version X.X.X"
```

## Desinstalar el complemento Rails [#Uninstalling_Plugin]

Para desinstalar el complemento Rails:

```
svn rm vendor/plugins/newrelic-ruby-agent svn commit vendor/plugins
```
