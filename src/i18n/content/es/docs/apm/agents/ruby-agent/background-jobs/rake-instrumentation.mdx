---
title: Instrumentación rastrillo
tags:
  - Agents
  - Ruby agent
  - Background jobs
metaDescription: 'As of New Relic Ruby agent 3.13.0, built-in support for instrumenting Rake tasks (10.0.0 and higher) is available on an opt-in basis.'
freshnessValidatedDate: never
translationType: machine
---

El agente New Relic Ruby tiene soporte opcional para tareas de Rake instrumentadas. Esto requiere:

* Versión de rastrillo 10.0.0 o superior
* Ruby agente versión 3.13.0 o superior

Para implementar tareas de Rake, [especifique las tareas por nombre](#enabling-rake-support) en su archivo `newrelic.yml` .

## Habilitar soporte de rastrillo [#enabling-rake-support]

Para instrumentar las tareas de Rake de su aplicación, agregue los nombres de las tareas objetivo al elemento `rake.tasks` en su archivo `newrelic.yml` . El agente Ruby compara estos nombres con sus tareas activas utilizando expresiones regulares de cadena.

<DNT>
  **Example: Instrumenting two Rake tasks**
</DNT>

Por ejemplo, para implementar las tareas de Rake `deploy` y `deploy:all`, agregue lo siguiente a su archivo `newrelic.yml` :

```
rake:
  tasks: ["deploy", "deploy:all"]
```

Dado que la coincidencia de nombres de tareas se realiza con expresiones regulares, puede instrumentar todas las tareas de Rake de su aplicación utilizando una expresión regular comodín como `[".+"]`. Sin embargo, esto no incluirá las tareas de Rake que están en su lista de denegaciones de forma predeterminada desde la configuración [`autostart.denylisted_rake_tasks`](/docs/apm/agents/ruby-agent/configuration/ruby-agent-configuration/#autostart-denylisted_rake_tasks) , como `db:migrate`.

* Para incluir cualquier tarea de Rake que esté en su lista de denegación de forma predeterminada, inclúyala en su lista de denegación personalizada.
* Para garantizar que las tareas estén instrumentadas antes de ejecutarse si está utilizando Rails pero su tarea de Rake no requiere el entorno Rails, agregue `require 'tasks/newrelic'` en la parte superior de las tareas de Rake.

## Capturar argumentos de trabajo de Rake [#capture-rake-arguments]

De forma predeterminada, los argumentos del trabajo de Rake no se capturan. Para capturar los argumentos del trabajo de Rake, utilice:

```
attributes.include: job.rake.*
```
