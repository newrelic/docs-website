---
title: Sin archivo de registro (Ruby)
type: troubleshooting
tags:
  - Agents
  - Ruby agent
  - Troubleshooting
metaDescription: Ensure your New Relic Ruby agent has been configured to generate log files.
freshnessValidatedDate: never
translationType: machine
---

## Problema

No hay ningún archivo de registro de New Relic en `log/newrelic_agent.log`.

## Solución

Si no hay ningún archivo `newrelic_agent.log` , intente los siguientes pasos para diagnosticar:

1. Verifique que su aplicación realmente requiera el agente:

   * Asegúrese de que la línea de gema `newrelic_rpm` en su `Gemfile` no esté marcada con `require: false`, lo que evita que Bundler requiera la gema. Puede eliminar la instrucción `require: false` o puede controlar manualmente la gema `newrelic_rpm` usted mismo llamando `require 'newrelic_rpm'` en otra parte de su código durante el inicio de la aplicación.
   * Si la gema `newrelic_rpm` está en un grupo dentro de tu `Gemfile`, asegúrate de que ese grupo se esté cargando en el entorno en el que vas a desplegar.
   * Asegúrese de que la línea `newrelic_rpm` en su `Gemfile` no esté envuelta en un condicional que se evalúe como falso en el entorno en el que se va a desplegar.

2. Asegúrese de que el directorio `log` dentro del directorio raíz de su aplicación exista y que el usuario con el que se ejecuta su aplicación pueda escribirlo.

3. Asegúrese de que el directorio de trabajo actual desde el cual inicia los procesos del servidor de aplicaciones sea el mismo que el directorio raíz de su aplicación (es decir, el directorio de trabajo actual debe contener un directorio `log` .

Para fines de depuración, puede resultar útil forzar la habilitación del agente y enviar su salida log a `STDOUT`. Para hacer esto, configure las variables de entorno `NEW_RELIC_LOG=stdout` y `NEW_RELIC_AGENT_ENABLED=1` al iniciar su servidor de aplicaciones.
