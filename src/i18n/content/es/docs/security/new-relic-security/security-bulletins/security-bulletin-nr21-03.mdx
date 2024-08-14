---
title: Apache Log4j vulnerabilidades críticas CVE-2021-44228 - Java
tags:
  - Security
  - Security and Privacy
  - Security bulletin
  - Log4j
metaDescription: 'Apache Log4j CVE-2021-44228, Security Bulletin NR21-03 (Java)'
releaseDate: '2021-12-10'
translationType: machine
---

<DNT>**Versions affected:**</DNT> Todas las versiones del agente entre (a) 4.12.0 y 6.5.1; y (b) 7.0.0 y 7.4.1

<DNT>**Fix versions:**</DNT> 6.5.2, 6.5.3, 6.5.4, 7.4.2, 7.4.3 y 7.5.0

<DNT>**Vulnerability identifier:**</DNT> NR21-03

Hemos determinado que las nuevas vulnerabilidades identificadas (CVE-2021-44832) NO afectan al agente de Java de New Relic, a menos que un vector de ataque adicional permita permisos de escritura en el sistema host. No obstante, las versiones más nuevas de New Relic agente de Java utilizarán las últimas versiones de Apache de log4j (actualmente versiones 2.17.1 (Java 8) y 2.12.4 (Java 7), que parchean CVE-2021-44832).

También hemos determinado que el agente de Java de New Relic NO es vulnerable ni a CVE-2021-45046 ni a CVE-2021-45105. Esto se debe a que el uso de log4j por parte del agente se encuentra detrás de una interfaz contenedora que no usa ni admite datos de entrada del mapa de contexto de subprocesos, un aspecto requerido de las vulnerabilidades. Sin embargo, recomendamos actualizar _al menos_ a la versión 6.5.2 o 7.4.2 para garantizar una protección integral contra CVE-2021-44228.

A medida que haya nuevas versiones de log4j disponibles, continuaremos lanzando nuevas versiones del agente.

<table>
  <thead>
    <tr>
      <th>
        New Relic agente de Java
      </th>

      <th>
        Versión log4j de apache
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        6.5.1
      </td>

      <td>
        2.15.0
      </td>
    </tr>

    <tr>
      <td>
        6.5.2
      </td>

      <td>
        2.12.2
      </td>
    </tr>

    <tr>
      <td>
        6.5.3
      </td>

      <td>
        2.12.3
      </td>
    </tr>

    <tr>
      <td>
        6.5.4
      </td>

      <td>
        2.12.4
      </td>
    </tr>

    <tr>
      <td>
        7.4.1
      </td>

      <td>
        2.15.0
      </td>
    </tr>

    <tr>
      <td>
        7.4.2
      </td>

      <td>
        2.16.0
      </td>
    </tr>

    <tr>
      <td>
        7.4.3
      </td>

      <td>
        2.17.0
      </td>
    </tr>

    <tr>
      <td>
        7.5.0+
      </td>

      <td>
        2.17.1
      </td>
    </tr>
  </tbody>
</table>

## Resumen

New Relic ha lanzado nuevas versiones del agente de Java para abordar vulnerabilidades críticas en el framework de código abierto log4j que podrían permitir a un actor malicioso exfiltrar datos o ejecutar código arbitrario utilizando mensaje de log o mensaje de log parámetro.

New Relic actualizará este Boletín de Seguridad y la orientación de nuestros clientes a medida que haya nueva información disponible.

## Elementos de acción [#action]

Para remediar CVE 2021-44228 en New Relic agente de Java, recomendamos a los clientes actualizar a la versión 6.5.2 o superior del agente (requiere Java 7 o superior) o 7.4.2 o superior (requiere Java 8 o superior) lo antes posible .

Si ya actualizó a las versiones del agente 6.5.2 o 7.4.2, Está protegido contra CVE 2021-44228 y no es necesario que vuelva a actualizar en este momento. Hemos determinado que el agente de Java de New Relic NO es susceptible a CVE-2021-45046 o CVE-2021-45105, ya que el uso del agente de log4j se encuentra detrás de una interfaz contenedora que no usa ni admite datos de entrada del mapa de contexto de subprocesos. , un aspecto requerido de las vulnerabilidades. Recomendamos actualizar al menos a la versión 6.5.2 o 7.4.2 para garantizar una protección integral contra CVE-2021-44228.

<Callout variant="important">
  Si tiene una versión del agente anterior a 6.5.2 o 7.4.2, o no puede actualizar la versión de su agente, le recomendamos encarecidamente que deshabilite el registro del agente.
</Callout>

### Cómo deshabilitar el registro del agente de Java [#disable]

Puede configurar su nivel de registro de agente de Java en `OFF` para corregir CVE-2021-44228. Para hacer esto, use cualquiera de las siguientes opciones:

* Modifique el archivo de configuración de su agente local (busque el parámetro `log_level` ) (no es necesario reiniciar)
* Defina la propiedad del sistema `newrelic.config.log_level=OFF` (es necesario reiniciar)
* Establezca la variable de entorno `NEW_RELIC_LOG_LEVEL=OFF` (es necesario reiniciar)

Puede verificar que el registro de agente se haya deshabilitado consultando el archivo de registro de agente. No deberías ver ningún mensaje nuevo escrito.

Deshabilitar el registro del agente de Java no afecta la funcionalidad del agente y no habrá degradación en la observabilidad.

<DNT>**Note:**</DNT> Esta solución alternativa se recomienda solo como solución temporal hasta que pueda actualizar la versión de su agente.

Compartiremos más información y pasos adicionales para remediar la situación si la situación cambia.

<DNT>
  **If you use log4j directly in your applications, be sure to carefully review the [Apache Log4j Security Vulnerabilities](https://logging.apache.org/log4j/2.x/security.html). This page provides remediation details for you to consider.**
</DNT>

### Minion privado en contenedores [#CPM]

El paso anterior solucionará únicamente su agente de Java New Relic . Es posible que también necesites actualizar tu minion privado New Relic Containerized. Consulte [NR21-04](/docs/security/new-relic-security/security-bulletins/security-bulletin-nr21-04/) para obtener más información.

## Información sobre vulnerabilidades técnicas [#technical-info]

* [CVE-2021-44228 CVSS 10.0](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-44228)
* [CVE-2021-45046 CVSS 9.0](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-45046)
* [CVE-2021-45105 CVSS 7.5](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-45105)
* [CVE-2021-44832 CVSS 6.6](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-44832)
* [Guía de seguridad para clientes de New Relic relacionada con las vulnerabilidades de Apache Log4j](https://newrelic.com/blog/nerdlog/security-guidance-for-log4j)
* [Cómo ayudar a identificar sistemas con versiones vulnerables de log4j usando New Relic](https://newrelic.com/blog/how-to-relic/new-relic-log4j-detection)
* [Apache log4j Vulnerabilidades de seguridad](https://logging.apache.org/log4j/2.x/security.html)
* [Foro de soporte New Relic](https://discuss.newrelic.com/t/log4j-zero-day-vulnerability-and-the-new-relic-java-agent/170322)

## Preguntas frecuentes [#faq]

<CollapserGroup>
  <Collapser
    id="upgrade-options"
    title="¿Cuáles son nuestras opciones si no podemos actualizar nuestro agente de Java o versión de Java?"
  >
    Implemente la [solución alternativa recomendada en este boletín](#action).
  </Collapser>

  <Collapser
    id="versions"
    title="¿Cómo puedo saber qué versiones del agente estamos ejecutando?"
  >
    La información de la versión del agente se muestra en la <DNT>**Environment**</DNT> página dentro de New Relic su dashboard One. Consulte nuestra [página de documentos](/docs/apm/agents/manage-apm-agents/troubleshooting/get-environment-data-about-your-apm-app) para obtener más información.
  </Collapser>

  <Collapser
    id="patch-v5"
    title="¿Por qué no hay un parche para el agente v5 e inferiores?"
  >
    La mayoría de nuestros clientes utilizan las versiones de agente 6.x o 7.x y animamos a los clientes a utilizar versiones más nuevas de nuestro agente para garantizar que tengan la mejor experiencia. Si no puede actualizar la versión de su agente, implemente la solución alternativa descrita anteriormente.
  </Collapser>

  <Collapser
    id="update-742"
    title="Ya actualicé a 6.5.1 o 7.4.1, ¿tengo que actualizar nuevamente?"
  >
    Si ya actualizó a las versiones del agente 6.5.1 o 7.4.1, Recomendamos también deshabilitar el registro del agente, ya que la solución para CVE-2021-44228 estaba incompleta en log4j v2.15.0. Recomendamos actualizar al menos a la versión agente de Java 6.5.2 o 7.4.2 para garantizar una protección integral contra estas vulnerabilidades críticas. Si bien hemos lanzado un agente de Java más nuevo con log4j 2.17.1 (Java 8) y 2.12.4 (Java 7), hemos determinado que actualizar a 6.5.3+ o 7.4.3+ no es crítico como lo sugiere New Relic. El agente de Java no es susceptible ni a CVE-2021-45046 ni a CVE-2021-45105.
  </Collapser>
</CollapserGroup>

## Historial de publicaciones [#pub-history]

* 3 de marzo de 2022: Revisión NR21-03:

  * Referencias actualizadas a las versiones 6.5.4 y 7.5.0 del agente de Java.

* 29 de diciembre de 2021: NR21-03 Revisión:

  * Actualizado para reflejar los hallazgos del agente en CVE-2021-44832

* 22 de diciembre de 2021: NR21-03 Revisión Mayor:

  * Nuevas versiones de corrección 6.5.3 y 7.4.3 disponible para abordar CVE-2021-44228, CVE-2021-45046 y CVE-2021-45105.
  * Adición de evaluaciones de riesgo de explotabilidad para cada vulnerabilidad, para ayudar a los clientes a tomar decisiones de remediación.
  * Se agregó contenido sobre la falta de impacto en la funcionalidad para los clientes que deshabilitan el registro de agentes.

* 17 de diciembre de 2021: NR21-03 Revisión:

  * Cambio de gravedad y descripción técnica de CVE-2021-45046

* 16 de diciembre de 2021: NR21-03 Revisión Mayor:

  * Nueva versión de corrección 6.5.2 disponible para abordar tanto CVE-2021-44228 como CVE-2021-45046.
  * Cambio en la guía con respecto a la suficiencia de log4j versión 2.15.0 para proteger contra la explotación de CVE-2021-44228.
  * Cambio en la solución alternativa recomendada.
  * Actualización de la descripción técnica NIST de CVE-2021-44228.

* 14 de diciembre de 2021: NR21-03 Revisión Mayor:

  * Nueva versión de corrección 7.4.2 disponible para abordar tanto CVE-2021-44228 como CVE-2021-45046.
  * Actualizado para incluir una opción de solución adicional.
  * Actualizado para brindar claridad entre las actualizaciones de New Relic agente de Java y las mejores prácticas que los clientes deben seguir para proteger su aplicación.
  * Se agregaron descripciones de vulnerabilidades técnicas y puntuaciones CVSS del Instituto Nacional de Estándares y Tecnología (NIST).

* 13 de diciembre de 2021: NR21-03 actualizado para incluir preguntas frecuentes y orientación sobre soluciones alternativas más explícitas

* 10 de diciembre de 2021: Publicación NR21-03

## Informar vulnerabilidades de seguridad a New Relic [#report]

New Relic está comprometido con la seguridad de nuestros clientes y sus datos. Si cree que ha encontrado vulnerabilidades de seguridad en uno de nuestros productos o sitios web, le damos la bienvenida y le agradecemos enormemente que lo informe al programa de divulgación coordinada de New Relic. Para obtener más información, consulte nuestra documentación sobre cómo [informar vulnerabilidades de seguridad](/docs/security/new-relic-security/data-privacy/reporting-security-vulnerabilities).
