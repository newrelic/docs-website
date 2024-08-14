---
title: Problemas de rendimiento dentro de AWS Fargate
type: troubleshooting
tags:
  - Agents
  - PHP agent
  - Troubleshooting
metaDescription: Using the PHP Agent in AWS Fargate results in poor to unacceptable performance due to the clocksource.
freshnessValidatedDate: never
translationType: machine
---

## Problema

El uso del agente PHP New Relic en AWS Fargate produce un rendimiento deficiente.

## Explicación

El agente PHP depende en gran medida de la fuente de reloj de un sistema para cronometrar las actividades. Debido a la verificación constante del reloj, para ser efectivo, el agente PHP necesita una fuente de reloj basada en vDSO para que las llamadas repetitivas para verificar la hora no dominen el rendimiento general. Puede encontrar más detalles sobre cómo verificar/cambiar la fuente de reloj [aquí](https://discuss.newrelic.com/t/relic-solution-php-agent-cpu-overhead-tips/70182).

Desafortunadamente, AWS Fargate exige la fuente de reloj xen que NO es compatible con vDSO. A pesar de la disponibilidad de otras fuentes de reloj, AWS Fargate le prohíbe cambiar la fuente de reloj haciendo que el directorio `sys` sea de solo lectura. Este es un [problema abierto](https://github.com/aws/containers-roadmap/issues/974) con Fargate con respecto a esta limitación.

Si Fargate es un requisito absoluto, puede desactivar la instrumentación automática e instrumentar manualmente solo unos pocos, clave de transacción. Aparte de esto, debido a que la fuente de reloj es tan importante para verificar el tiempo y recopilar métricas de PHP, actualmente no existen soluciones para este problema de AWS. Algunos clientes han tenido éxito al utilizar el agente en servicios de AWS que le permiten cambiar la fuente del reloj, como EC2 y Graviton.
