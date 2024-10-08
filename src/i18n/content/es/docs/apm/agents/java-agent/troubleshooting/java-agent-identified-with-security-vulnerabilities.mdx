---
title: Agente de Java identificado con vulnerabilidades de seguridad
type: troubleshooting
tags:
  - Agents
  - Java agent
  - Troubleshooting
freshnessValidatedDate: never
translationType: machine
---

## Problema

Cuando se realiza un análisis de seguridad, informa vulnerabilidades para el agente de Java New Relic (`newrelic.jar`).

## Causa

Si bien cualquier producto de software puede tener potencialmente vulnerabilidades de seguridad, los productos de seguridad pueden identificar erróneamente el agente de Java New Relic. Los productos de seguridad que buscan ciertos patrones de cadenas en archivos pueden marcar por error módulos de instrumentación que forman parte del agente como biblioteca vulnerable.

Estos módulos de instrumentación son archivos JAR que llevan el nombre del marco de software diseñado para el instrumento y sus versiones. No contienen código del marco, pero pueden contener clases con el mismo nombre. Algunas herramientas de escaneo de seguridad detectan estos nombres/versiones y los interpretan como el framework de software real, cuando es solo un módulo de instrumentación.

Se encuentran dentro de `newrelic.jar` debajo del paquete `instrumentation` o dentro de `newrelic-security-agent.jar` debajo del paquete `instrumentation-security` .

Las advertencias para cualquier archivo jar dentro de `newrelic.jar` o `newrelic-security-agent.jar` son falsas positivas y deben suprimirse.

## Solución

Suprima las advertencias de falso positivo provenientes del paquete `instrumentation` en `newrelic.jar` y del paquete `instrumentation-security` en `newrelic-security-agent.jar` con su herramienta de escaneo, incluidos todos los archivos JAR cuyos nombres coincidan con los módulos enumerados en el [repositorio New Relic agente de Java](https://github.com/newrelic/newrelic-java-agent/tree/main/instrumentation) o en [New Relic SecurityAgent para Java](https://github.com/newrelic/csec-java-agent/tree/main/instrumentation-security).

Por ejemplo, el falso positivo descubierto por el proyecto `DependencyCheck` en [github.com/jeremylong/DependencyCheck](https://github.com/jeremylong/DependencyCheck) se puede suprimir con:

```jar
<suppress>
    <notes><![CDATA[newrelic-agent false positives due to the instrumentation package]]></notes>
    <filePath regex="true">.*newrelic.*\.jar[\\\/]instrumentation.*\.jar</filePath>
    <cpe regex="true">.*</cpe>
</suppress>
```

Consulte a su proveedor de análisis de seguridad sobre la configuración adecuada para suprimir los falsos positivos.
