---
title: Certificado SSL personalizado (Ruby)
tags:
  - Agents
  - Ruby agent
  - Configuration
metaDescription: 'Ruby agent: Specify custom CA bundles to validate SSL communication via a proxy server.'
freshnessValidatedDate: never
translationType: machine
---

A New Relic [requer HTTPS](/docs/apis/rest-api-v2/troubleshooting/301-response-rest-api-calls) para todo o tráfego para o APM e a API REST da New Relic. O agente Ruby se conecta aos servidores coletores New Relic por SSL por padrão. Normalmente, esse padrão é suficiente.

## Instalando certificado SSL

Se você implantar um aplicativo e agente Ruby em um contêiner ou servidor sem certificados CA instalados, você mesmo deverá instalá-los para fazer conexões HTTPS com servidores New Relic. A versão 7.0 do agente introduziu esta mudança. Você pode instalar esses certificados CA de várias maneiras, dependendo do seu host. Os seguintes links externos são orientações úteis para testar a prontidão do seu host e instalar certificados CA:

* [Resolução de problemas Erros de certificado SSL](https://bundler.io/v2.0/guides/rubygems_tls_ssl_troubleshooting_guide.html#troubleshooting-certificate-errors)
* [Verificação SSL automatizada](https://bundler.io/v2.0/guides/rubygems_tls_ssl_troubleshooting_guide.html#automated-ssl-check)
* [Instalando Certificados CA](https://superuser.com/questions/437330/how-do-you-add-a-certificate-authority-ca-to-ubuntu/719047#719047)
* [Como lidar com certificados no Docker](https://serverfault.com/questions/975775/how-to-handle-certificates-in-dockerfile)

## Use um pacote de CA personalizado [#using-custom]

Em determinadas configurações, pode ser necessário usar um pacote CA personalizado. Por exemplo, você pode usar um proxy HTTP para interceptar e descriptografar o tráfego SSL do agente, que então estabelece uma conexão SSL separada com o New Relic.

Para configurar o agente para usar um pacote de CA personalizado ao validar o [certificado SSL](/docs/accounts-partnerships/education/getting-started-new-relic/glossary#ssl-certificate) apresentado por um proxy, defina a configuração `ca_bundle_path` no arquivo <DNT>**newrelic.yml**</DNT> ou por meio da variável de ambiente `NEW_RELIC_CA_BUNDLE_PATH` :

```yml
common: &default_settings
  ca_bundle_path: certificates/mycert.pem
  # ... other settings ...
```

Especifique um caminho para um arquivo <DNT>**.pem**</DNT> contendo cada certificado que você deseja que o agente use ao validar a identidade do proxy ou servidor. Você pode concatenar vários certificados em um único arquivo <DNT>**.pem**</DNT> .

* <DNT>
    **Relative path:**
  </DNT>

  Se você especificar um caminho relativo, o agente atribuirá um caminho relativo ao diretório de trabalho do processo do servidor de aplicativos em tempo de execução.

* <DNT>
    **Absolute path:**
  </DNT>

  Se o seu diretório de trabalho for `/` em vez da raiz do seu aplicativo, especifique um caminho absoluto.
