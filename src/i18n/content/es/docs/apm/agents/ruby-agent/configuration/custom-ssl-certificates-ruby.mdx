---
title: Certificado SSL personalizado (Rubí)
tags:
  - Agents
  - Ruby agent
  - Configuration
metaDescription: 'Ruby agent: Specify custom CA bundles to validate SSL communication via a proxy server.'
freshnessValidatedDate: never
translationType: machine
---

New Relic [requiere HTTPS](/docs/apis/rest-api-v2/troubleshooting/301-response-rest-api-calls) para todo el tráfico hacia APM y la API REST de New Relic. El agente Ruby se conecta a los servidores recolectores de New Relic a través de SSL de forma predeterminada. Normalmente, este valor predeterminado es suficiente.

## Instalación de certificado SSL

Si implementa una aplicación Ruby y un agente en un contenedor o servidor sin certificados CA instalados, debe instalarlos usted mismo para realizar conexiones HTTPS a los servidores New Relic. La versión 7.0 del agente introdujo este cambio. Puede instalar estos certificados de CA de varias maneras, según su host. Los siguientes enlaces externos son una guía útil para probar la preparación de su host e instalar certificados de CA:

* [Resolución de problemas certificado SSL Errores](https://bundler.io/v2.0/guides/rubygems_tls_ssl_troubleshooting_guide.html#troubleshooting-certificate-errors)
* [Verificación SSL automatizada](https://bundler.io/v2.0/guides/rubygems_tls_ssl_troubleshooting_guide.html#automated-ssl-check)
* [Instalación de certificados de CA](https://superuser.com/questions/437330/how-do-you-add-a-certificate-authority-ca-to-ubuntu/719047#719047)
* [Cómo manejar certificados en docker](https://serverfault.com/questions/975775/how-to-handle-certificates-in-dockerfile)

## Utilice un paquete de CA personalizado [#using-custom]

En determinadas configuraciones, es posible que necesite utilizar un paquete de CA personalizado. Por ejemplo, puede utilizar un proxy HTTP para interceptar y descifrar el tráfico SSL del agente, que luego establece una conexión SSL separada con New Relic.

Para configurar el agente para que utilice un paquete de CA personalizado al validar el [certificado SSL](/docs/accounts-partnerships/education/getting-started-new-relic/glossary#ssl-certificate) presentado por un proxy, establezca la configuración `ca_bundle_path` en su archivo <DNT>**newrelic.yml**</DNT> o mediante la variable de entorno `NEW_RELIC_CA_BUNDLE_PATH` :

```yml
common: &default_settings
  ca_bundle_path: certificates/mycert.pem
  # ... other settings ...
```

Especifique una ruta a un archivo <DNT>**.pem**</DNT> que contenga cada certificado que desee que utilice el agente al validar la identidad del proxy o servidor. Puede concatenar varios certificados en un único archivo <DNT>**.pem**</DNT> .

* <DNT>
    **Relative path:**
  </DNT>

  Si especifica una ruta relativa, el agente asignará una ruta relativa al directorio de trabajo del proceso de su servidor de aplicaciones en tiempo de ejecución.

* <DNT>
    **Absolute path:**
  </DNT>

  Si su directorio de trabajo es `/` en lugar de la raíz de su aplicación, asegúrese de especificar una ruta absoluta.
