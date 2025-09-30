---
title: Configurando seu certificado SSL
tags:
  - Agents
  - Java agent
  - Configuration
metaDescription: 'Java: To communicate with the New Relic collector over SSL, include the list of trusted signers in the trust store on your app server.'
freshnessValidatedDate: never
translationType: machine
---

Para se comunicar com o coletor New Relic por HTTPS, você precisa ter os [certificados](/docs/using-new-relic/welcome-new-relic/get-started/glossary#ssl-certificate) adequados para assinantes confiáveis no armazenamento confiável em seu servidor de aplicativos. Por padrão, a maioria dos JREs contém um certificado raiz válido que permite que o agente se conecte ao newrelic.com.

Para problemas de conexão SSL, visite [SSL ou erros de conexão (Java)](/docs/agents/java-agent/troubleshooting/ssl-or-connection-errors-java/).

## Aviso de certificado SSL expirado e remoção de certificado

<Callout variant="caution">
  O certificado SSL que foi fornecido com as versões 6.1.0 do agente Java a 6.4.2 expiraram e não são mais válidos. Isso significa que as versões 6.1.0 do agente Java para 6.4.2 não pode mais usar os certificados fornecidos com o agente para estabelecer uma conexão com a New Relic e você deve fornecer seu próprio certificado SSL.

  Consulte [esta postagem no fórum da comunidade](https://discuss.newrelic.com/t/important-upcoming-new-relic-server-certificate-update-will-impact-most-users-of-java-agent-version-6-1-and-a-few-users-of-java-agent-version-6-2-0-to-6-4-2/141711) para obter detalhes adicionais.
</Callout>

<Callout variant="important">
  Versões do agente Java superiores a 6.4.2 não são mais enviadas com certificado SSL incluído no agente. Você deve fornecer seu próprio armazenamento confiável SSL ao agente usando explicitamente a opção de configuração [ca_bundle_path](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#ca_config_bundle) ou usando o armazenamento confiável padrão fornecido pelo JDK/JRE (o agente tentará usar o último por padrão). Além disso, a opção de configuração `use_private_ssl` foi removida das versões do agente Java superiores à 6.4.2.

  O usuário que deseja adicionar o certificado global ao seu armazenamento confiável local pode baixar a [CA raiz global DigiCert](https://www.digicert.com/kb/digicert-root-certificates.htm) da DigiCert na seção "Outros certificados raiz".
</Callout>

## Agente Java versões 6.2.0 - 6.4.2

A partir do agente Java versão 6.2.0, a opção de configuração [use_private_ssl](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#use_private_ssl) foi reintroduzida para que você possa usar os certificados SSL que estão incluídos no jar do agente. Os seguintes certificados SSL agrupados são válidos por até um ano após o lançamento.

```
META-INF/certs/eu-newrelic-com.pem
META-INF/certs/eu01-nr-data-net.pem
META-INF/certs/newrelic-com.pem
```

<Callout variant="important">
  O agente Java começará a registrar uma mensagem de aviso na inicialização do aplicativo quando faltarem menos de três meses para o certificado em pacote expirar.

  Quando os certificados agrupados expirarem, o agente Java não poderá mais se conectar ao New Relic e você deverá atualizar para a versão mais recente do agente ou fornecer um certificado válido usando a configuração [ca_bundle_path](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#ca_config_bundle) .

  O usuário que deseja adicionar o certificado global ao seu armazenamento confiável local pode baixar o [DigiCert Global Root CA](https://www.digicert.com/kb/digicert-root-certificates.htm) da DigiCert.
</Callout>

Usando configuração baseada em YAML

```yml
common:  default_settings
  ca_bundle_path: /path/to/digicert.pem
  use_private_ssl: false

  #
  # ============================== LICENSE KEY ===============================

  # You must specify the license key associated with your New Relic account
  ...
```

Resumo

Existem duas definições de configuração que determinam quais certificados são usados pelo agente para estabelecer uma conexão segura com o New Relic. São eles: `use_private_ssl` e `ca_bundle_path`. Veja como eles funcionam juntos:

* <DNT>
    **DEFAULT**
  </DNT>

  : nenhuma opção de configuração (`ca_bundle_path`/`use_private_ssl`) é fornecida, porque ambas estão usando valores padrão. O agente usará o certificado SSL padrão incluído no Java Development Kit (JDK). Se esses certificados não estiverem presentes ou não incluírem certificados que confiem no New Relic, o agente não se conectará. Você precisará [mesclar certificados válidos em seu pacote de certificados JDK](/docs/agents/java-agent/troubleshooting/ssl-or-connection-errors-java).

* Apenas `use_private_ssl` está configurado. O agente usará o certificado SSL que vem junto com ele.

* Apenas `ca_bundle_path` está configurado. O agente tentará se conectar usando o pacote SSL de certificado personalizado no caminho configurado. Se o pacote de certificados personalizados configurado não incluir certificados que confiam no New Relic, o agente não se conectará. Você precisará [mesclar certificados válidos em seu pacote de certificados personalizado](/docs/agents/java-agent/troubleshooting/ssl-or-connection-errors-java).

* Ambos `use_private_ssl` e `ca_bundle_path` estão configurados. A definição de configuração `ca_bundle_path` tem precedência e a configuração `use_private_ssl` é ignorada. Esse comportamento é o mesmo que especificar apenas `ca_bundle_path`.

## Agente Java versões 6.0.0/6.1.0

A partir da versão 6.0.0, o agente Java não inclui mais a cadeia de certificados global `nrcert` . O usuário que deseja adicionar o certificado global ao seu armazenamento confiável local deve baixar o [DigiCert Global Root CA](https://www.digicert.com/kb/digicert-root-certificates.htm) da DigiCert.

Nota: Nas versões 6.1.0+, o agente Java usará um certificado New Relic incluído que é válido por até um ano após o lançamento. Antes que o certificado expire, você deverá atualizar o agente para a versão mais recente ou fornecer um certificado válido usando a configuração [ca_bundle_path](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#ca_config_bundle) .

<Callout variant="important">
  O agente Java começará a registrar uma mensagem de aviso na inicialização do aplicativo quando faltarem menos de três meses para o certificado em pacote expirar.
</Callout>

### Usando configuração baseada em YAML

```yml
common:  default_settings
  ca_bundle_path: /path/to/digicert.pem

  #
  # ============================== LICENSE KEY ===============================

  # You must specify the license key associated with your New Relic account
  ...
```

## Versões do agente Java anteriores a 6.0.0 (obsoleto)

Para versões do agente Java anteriores à 6.0.0, os aplicativos que exigem certificados válidos podem adicioná-los de uma das duas maneiras a seguir:

* Use configuração baseada em YAML.
* Adicione a lista agrupada de assinantes confiáveis da New Relic ao armazenamento local.

### Usando configuração baseada em YAML [#yaml]

O agente Java New Relic agrupa a lista de assinantes confiáveis no arquivo do agente `newrelic.jar` . Se não desejar alterar o armazenamento confiável local, você poderá ativá-los definindo `use_private_ssl` como `true` no arquivo de configuração do agente `newrelic.yml` :

```yml
common:  default_settings
  use_private_ssl: true

  #
  # ============================== LICENSE KEY ===============================

  # You must specify the license key associated with your New Relic account
  ...
```
