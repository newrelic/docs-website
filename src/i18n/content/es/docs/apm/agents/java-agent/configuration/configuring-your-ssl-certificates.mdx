---
title: Configurando tu certificado SSL
tags:
  - Agents
  - Java agent
  - Configuration
metaDescription: 'Java: To communicate with the New Relic collector over SSL, include the list of trusted signers in the trust store on your app server.'
freshnessValidatedDate: never
translationType: machine
---

Para comunicarse con el recopilador de New Relic a través de HTTPS, debe tener los [certificados](/docs/using-new-relic/welcome-new-relic/get-started/glossary#ssl-certificate) adecuados para firmantes confiables en el almacén de confianza de su servidor de aplicaciones. De forma predeterminada, la mayoría de los JRE contienen un certificado raíz válido que permite al agente conectarse a newrelic.com.

Para problemas de conexión SSL, visite [SSL o errores de conexión (Java)](/docs/agents/java-agent/troubleshooting/ssl-or-connection-errors-java/).

## Aviso de certificado SSL caducado y eliminación de certificado

<Callout variant="caution">
  El certificado SSL que venía incluido con las versiones 6.1.0 del agente de Java a 6.4.2 han caducado y ya no son válidos. Esto significa que las versiones 6.1.0 del agente de Java a 6.4.2 ya no puede utilizar los certificados incluidos con el agente para establecer una conexión con New Relic y debe proporcionar su propio certificado SSL.

  Consulte [esta publicación del foro de la comunidad](https://discuss.newrelic.com/t/important-upcoming-new-relic-server-certificate-update-will-impact-most-users-of-java-agent-version-6-1-and-a-few-users-of-java-agent-version-6-2-0-to-6-4-2/141711) para obtener detalles adicionales.
</Callout>

<Callout variant="important">
  Las versiones de agente de Java superiores a 6.4.2 ya no se entregan con el certificado SSL incluido en el agente. Debe proporcionar su propio almacén de confianza SSL al agente utilizando explícitamente la opción de configuración [ca_bundle_path](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#ca_config_bundle) o utilizando el almacén de confianza predeterminado proporcionado por JDK/JRE (el agente buscará utilizar este último de forma predeterminada). Además, la opción de configuración `use_private_ssl` se eliminó de las versiones de agente de Java superiores a 6.4.2.

  El usuario que desee agregar el certificado global a su almacén de confianza local puede descargar la [CA raíz global de DigiCert](https://www.digicert.com/kb/digicert-root-certificates.htm) desde DigiCert en la sección "Otros certificados raíz".
</Callout>

## Agente de Java versiones 6.2.0 - 6.4.2

A partir de la versión 6.2.0 del agente de Java, se reintrodujo la opción de configuración [use_private_ssl](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#use_private_ssl) para que pueda utilizar el certificado SSL que se incluye en el jar del agente. Los siguientes certificados SSL incluidos son válidos hasta un año después de su lanzamiento.

```
  META-INF/certs/eu-newrelic-com.pem
  META-INF/certs/eu01-nr-data-net.pem
  META-INF/certs/newrelic-com.pem
```

<Callout variant="important">
  El agente de Java comenzará a registrar un mensaje de advertencia al iniciar la aplicación cuando falten menos de tres meses para que caduque el certificado incluido.

  Cuando los certificados incluidos caduquen, el agente de Java ya no podrá conectarse a New Relic y deberá actualizar a la última versión del agente o proporcionar un certificado válido utilizando la configuración [ca_bundle_path](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#ca_config_bundle) .

  El usuario que desee agregar el certificado global a su almacén de confianza local puede descargar [DigiCert Global Root CA](https://www.digicert.com/kb/digicert-root-certificates.htm) desde DigiCert.
</Callout>

Usando la configuración basada en YAML

```
common:  default_settings
  ca_bundle_path: /path/to/digicert.pem
  use_private_ssl: false

  #
  # ============================== LICENSE KEY ===============================

  # You must specify the license key associated with your New Relic account
  ...
```

Resumen

Hay dos ajustes de configuración que determinan qué certificados utiliza el agente para establecer una conexión segura con New Relic. Son: `use_private_ssl` y `ca_bundle_path`. Así es como trabajan juntos:

* <DNT>
    **DEFAULT**
  </DNT>

  : No se proporciona ninguna opción de configuración (`ca_bundle_path`/`use_private_ssl`), porque ambas utilizan valores predeterminados. El agente utilizará el certificado SSL predeterminado incluido en el Java Development Kit (JDK). Si estos certificados no están presentes o no incluyen certificados que confíen en New Relic, entonces el agente no se conectará. Deberá [fusionar certificados válidos en su paquete de certificados JDK](/docs/agents/java-agent/troubleshooting/ssl-or-connection-errors-java).

* Sólo `use_private_ssl` está configurado. El agente utilizará el certificado SSL que se incluye con él.

* Sólo `ca_bundle_path` está configurado. El agente intentará conectarse utilizando el paquete de certificado SSL personalizado en la ruta configurada. Si el paquete de certificados personalizados configurado no incluye certificados que confíen en New Relic, entonces el agente no se conectará. Deberá [fusionar certificados válidos en su paquete de certificados personalizado](/docs/agents/java-agent/troubleshooting/ssl-or-connection-errors-java).

* Tanto `use_private_ssl` como `ca_bundle_path` están configurados. La configuración `ca_bundle_path` tiene prioridad y la configuración `use_private_ssl` se ignora. Este comportamiento es el mismo que especificar solo `ca_bundle_path`.

## Agente de Java versiones 6.0.0/6.1.0

A partir de 6.0.0, el agente de Java ya no incluye la cadena de certificados global `nrcert` . El usuario que desee agregar el certificado global a su almacén de confianza local debe descargar [DigiCert Global Root CA](https://www.digicert.com/kb/digicert-root-certificates.htm) desde DigiCert.

Nota: En las versiones 6.1.0+, El agente de Java utilizará un certificado New Relic incluido que es válido hasta por un año después del lanzamiento. Antes de que caduque el certificado, debe actualizar el agente a la última versión o proporcionar un certificado válido mediante la configuración [ca_bundle_path](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#ca_config_bundle) .

<Callout variant="important">
  El agente de Java comenzará a registrar un mensaje de advertencia al iniciar la aplicación cuando falten menos de tres meses para que caduque el certificado incluido.
</Callout>

### Usando la configuración basada en YAML

```
common:  default_settings
  ca_bundle_path: /path/to/digicert.pem

  #
  # ============================== LICENSE KEY ===============================

  # You must specify the license key associated with your New Relic account
  ...
```

## Agente de versiones de Java anteriores a 6.0.0 (obsoleto)

Para versiones de agente de Java anteriores a 6.0.0, las aplicaciones que requieran certificados válidos pueden agregarlos de una de las siguientes dos maneras:

* Utilice la configuración basada en YAML.
* Agregue la lista incluida de firmantes confiables de New Relic a la tienda local.

### Usando la configuración basada en YAML [#yaml]

El agente de Java New Relic incluye la lista de firmantes confiables en el archivo del agente `newrelic.jar` . Si no desea cambiar el almacén de confianza local, puede activarlos estableciendo `use_private_ssl` en `true` en el archivo de configuración del agente `newrelic.yml` :

```
common:  default_settings
  use_private_ssl: true

  #
  # ============================== LICENSE KEY ===============================

  # You must specify the license key associated with your New Relic account
  ...
```
