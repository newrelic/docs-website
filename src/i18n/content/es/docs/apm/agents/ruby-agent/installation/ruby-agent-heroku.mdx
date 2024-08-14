---
title: Agente Ruby y Heroku
tags:
  - Agents
  - Ruby agent
  - Installation
metaDescription: 'Heroku-specific information about the New Relic Ruby agent, including installation, configuration, app naming, and logging.'
freshnessValidatedDate: never
translationType: machine
---

[Heroku](https://devcenter.heroku.com/articles/newrelic) es una solución de plataforma como servicio (PaaS) para alojar aplicaciones web en varios lenguajes de agentes, incluido Ruby. Con New Relic, puedes extender Heroku usando [<InlinePopover type="apm"/>](/docs/apm/new-relic-apm)y [<InlinePopover type="browser"/>](/docs/browser/new-relic-browser)métrica. Esta página describe consideraciones especiales para usar Heroku como servicio de alojamiento con el agente Ruby para New Relic.

## Instale el complemento del agente New Relic [#installing]

Después de implementar su aplicación Ruby en Heroku, instale el agente New Relic:

<CollapserGroup>
  <Collapser
    id="via_heroku"
    title="A través del sitio web de Heroku"
  >
    Para instalar el complemento New Relic a través del sitio web de Heroku, debe iniciar sesión en Heroku:

    1. Desde [la página de complementos de Heroku para New Relic](https://elements.heroku.com/addons/newrelic#pricing), seleccione un plan de suscripción.

    2. Desde <DNT>**Select an app**</DNT>, selecciona tu aplicación New Relic.

    3. Dale a tu aplicación un [nombre descriptivo](/docs/apm/new-relic-apm/installation-configuration/name-your-application) con este comando del cinturón de herramientas de Heroku:

       ```bash
       heroku config:set NEW_RELIC_APP_NAME='Your Application Name'
       ```

    4. Agrega la gema New Relic a tu `Gemfile`. La gema del agente New Relic Ruby está disponible en [rubygems.org](https://rubygems.org/) como `newrelic_rpm`.

       Si su aplicación usa Bundler, agregue esta gema al Gemfile:

       ```ruby
       gem 'newrelic_rpm'
       ```

    5. Reinicie su banco de pruebas.

    6. Genera algo de tráfico a tu aplicación.
  </Collapser>

  <Collapser
    id="via_toolbelt"
    title="A través del cinturón de herramientas Heroku"
  >
    Para instalar el complemento New Relic con el cinturón de herramientas Heroku:

    1. Ejecute el siguiente comando del cinturón de herramientas, donde `$planlevel` es el [plan de suscripción adecuado](https://elements.heroku.com/addons/newrelic#pricing):

       ```bash
       heroku addons:create newrelic:$planlevel
       ```

    2. Asigne a su aplicación un [nombre descriptivo](/docs/apm/new-relic-apm/installation-configuration/name-your-application) con este comando del cinturón de herramientas:

       ```bash
       heroku config:set NEW_RELIC_APP_NAME='Your Application Name'
       ```

    3. Agrega la gema New Relic a tu `Gemfile`. La gema del agente New Relic Ruby está disponible en [rubygems.org](https://rubygems.org/) como `newrelic_rpm`.

       Si su aplicación usa Bundler, agregue esta gema al `Gemfile`:

       ```ruby
       gem 'newrelic_rpm'
       ```

    4. Reinicie su banco de pruebas.

    5. Genera algo de tráfico a tu aplicación.
  </Collapser>

  <Collapser
    id="heroku-non-rails"
    title="Aplicación sin Rails"
  >
    Si está utilizando el agente Ruby para New Relic con una aplicación que no es Rails, el usuario de Heroku debe instalar el complemento en su repositorio manualmente. Por ejemplo, en una aplicación Sinatra, agregue la gema `newrelic_rpm` a su `Gemfile` y luego agregue el siguiente código a su aplicación:

    ```ruby
    configure :production do
     require 'newrelic_rpm'
     end
    ```
  </Collapser>
</CollapserGroup>

La instalación del complemento crea automáticamente una cuenta privada de New Relic y configura el acceso a los servidores Heroku. New Relic comenzará a monitorear el rendimiento de la aplicación, la experiencia del usuario final y el rendimiento del servidor de aplicaciones recopilados después de instalar el complemento. En unos minutos, los datos deberían empezar a aparecer en su [página de resumen de APM](/docs/apm/applications-menu/monitoring/apm-overview-page).

<InstallFeedback/>

## Resolución de problemas de tu instalación [#troubleshooting]

A los pocos minutos de instalar y configurar New Relic, los datos deberían comenzar a aparecer en [la página de resumen de APM](/docs/apm/applications-menu/monitoring/apm-overview-page) de su aplicación. Si no aparecen datos, siga los [procedimientos de resolución de problemas del agente Ruby](/docs/agents/ruby-agent/troubleshooting/no-data-appears-ruby).

## Actualización desde una instalación existente de New Relic [#upgrading]

Si New Relic ya está instalado, reinstale el complemento usando el comando del cinturón de herramientas de Heroku.

```bash
heroku config:set NEW_RELIC_APP_NAME='Your Application Name'
```

## Configurar el agente Ruby en Heroku [#configuring]

Puede configurar New Relic en su archivo `newrelic.yml` o puede usar [variables de entorno](/docs/agents/ruby-agent/installation-configuration/ruby-agent-configuration) para tener prioridad sobre los valores en su archivo de configuración. Utilice `heroku config:set` para modificar la configuración del agente para su aplicación Heroku.

Por ejemplo, para establecer la configuración [`custom_insights_events.max_samples_stored`](/docs/apm/agents/ruby-agent/configuration/ruby-agent-configuration/#custom_insights_events-max_samples_stored) en 500:

```bash
heroku config:set NEW_RELIC_CUSTOM_INSIGHTS_EVENTS_MAX_SAMPLES_STORED=500
```

## Nombre del anfitrión en Heroku [#hostnames]

Saber qué datos provienen de qué host le permite filtrar la métrica que se muestra en la UI para un host específico. En Heroku, el nombre de host dentro de dynos se genera dinámicamente y generalmente no tiene significado para usted como desarrollador de aplicaciones.

A partir de la versión 3.9.5, el agente Ruby informa el nombre del banco de pruebas Heroku como nombre de host (por ejemplo, `web.1`). Esto le permite ver sus datos con el alcance de un nombre de banco de pruebas en particular. Puede desactivar este comportamiento estableciendo la configuración `heroku.use_dyno_names` en `false`. Luego, el agente utilizará un único nombre de marcador de posición agregado llamado `Dynamic Hostname`.

## Dyno nombre de agregación de hosts [#dyno-hostnames]

Algunos dinamómetros tienen nombres que se generan dinámicamente y pueden adquirir muchos valores únicos con el tiempo. Los ejemplos incluyen `scheduler` dinamómetros creados por el complemento Scheduler y `run` dinamómetros creados al invocar `heroku run` en la línea de comando. Para mantener razonable el número de nombres de host únicos, el agente Ruby agregará automáticamente datos de `scheduler` y `run` dynos en nombres de host llamados `scheduler.*` y `run.*`.

Si tiene otros tipos de dinamómetros que se crean dinámicamente, utilice la configuración [`heroku.dyno_name_prefixes_to_shorten`](/docs/apm/agents/ruby-agent/configuration/ruby-agent-configuration/#heroku) para aplicar la misma agregación a estos otros tipos de dinamómetros.

## Registro de Heroku [#logging]

En Heroku, el agente Ruby registra en la salida estándar, mezclando el registro del agente con el registro de aplicación normal. Las entradas log generadas por el agente Ruby incluyen una etiqueta `[NewRelic]` como prefijo.

Para recuperar el inicio de sesión en Heroku:

1. Verifique que su variable de entorno `NEW_RELIC_LOG` esté configurada en `stdout` con este comando del cinturón de herramientas de Heroku:

   ```bash
   heroku config
   ```

2. Para restablecer la variable de entorno si es necesario, ejecute:

   ```bash
   heroku config:set NEW_RELIC_LOG="stdout"
   ```

3. Abra su archivo `newrelic.yml` en un editor.

4. Cambie el [`log_level`](/docs/apm/agents/ruby-agent/configuration/ruby-agent-configuration/#log_level) a `debug` y guarde el archivo. Asegúrese de no modificar la sangría.

5. Reinicie su aplicación web.

6. Genere algo de tráfico hacia su aplicación y ejecútela durante unos cinco minutos.

7. Ejecute el siguiente comando del cinturón de herramientas de Heroku para ver el registro solo desde el agente New Relic:

   ```bash
   heroku logs -n 1500 | grep -i relic
   ```

8. Si envía su archivo de registro al soporte de New Relic, adjunte el archivo de registro a su ticket de soporte, junto con `newrelic.yml`, su `Gemfile` y `Gemfile.lock`.

9. Edite `newrelic.yml` nuevamente y cambie [`log_level`](/docs/apm/agents/ruby-agent/configuration/ruby-agent-configuration/#log_level) a la configuración anterior. Guarda el archivo.
