---
title: Segurança para monitoramento sintético
tags:
  - Synthetics
  - Synthetic monitoring
  - Getting started
metaDescription: 'What we do to ensure data privacy and security with synthetic monitoring in New Relic, and what you can do.'
freshnessValidatedDate: never
translationType: machine
---

O monitoramento sintético da New Relic usa [monitores](/docs/synthetics/new-relic-synthetics/getting-started/types-synthetics-monitors) distribuídos por [data centers em todo o mundo](/docs/synthetics/new-relic-synthetics/administration/synthetics-public-minion-ips). Por design, ele captura o que são essencialmente dados de desempenho para tráfego simulado. Ele não captura nem trata nenhum dado pessoal por padrão. Espera-se que todos os dados tratados pelo monitor Sintético sejam não pessoais.

Este documento fornece detalhes adicionais sobre o que fazemos para garantir a privacidade e segurança dos dados com monitoramento sintético, além de opções adicionais que você pode usar. Para obter mais informações sobre as medidas de segurança da New Relic, consulte nossa [documentação de segurança e privacidade](/docs/security/new-relic-security/data-privacy/data-privacy-new-relic) ou visite o [site de segurança da New Relic](https://newrelic.com/security).

## O que nós fazemos [#security-measures]

Aqui está um resumo das medidas de privacidade e segurança de dados que a New Relic oferece para você.

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        Privacidade e segurança de dados
      </th>

      <th>
        Comentários
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Sem dados pessoais
      </td>

      <td>
        Por definição, todos os dados coletados por meio de monitoramento sintético são dados de teste criados com a finalidade de monitoramento. Nenhum destes dados inclui dados pessoais de qualquer indivíduo.
      </td>
    </tr>

    <tr>
      <td>
        TLS
      </td>

      <td>
        [A criptografia TLS](/docs/apm/new-relic-apm/getting-started/networks#tls) é necessária para todos os domínios. Isso se aplica a [localização pública](/docs/apm/new-relic-apm/getting-started/networks#synthetics-public) e [localização privada](/docs/apm/new-relic-apm/getting-started/networks#synthetics-private).
      </td>
    </tr>

    <tr>
      <td>
        Autenticação
      </td>

      <td>
        O monitoramento sintético oferece suporte a vários mecanismos de autenticação, incluindo Basic, Digest, NTLM e NTLMv2. As opções disponíveis dependem do [tipo de monitor](/docs/synthetics/new-relic-synthetics/getting-started/types-synthetics-monitors) que você escolher.
      </td>
    </tr>

    <tr>
      <td>
        Coleção de dados
      </td>

      <td>
        Os dados transferidos para o endpoint Sintético incluem:

        * Monitor os resultados da execução, incluindo cabeçalhos completos de solicitação e resposta de todas as solicitações, um arquivo HAR completo da sessão e qualquer captura de tela capturada (em caso de falha ou manualmente)

        * Votação para vagas disponíveis na fila de localização privada

        * Minion privado "pulsação" a cada 30 segundos

          O [evento`SyntheticsPrivateMinion` ](/attribute-dictionary/?event=SyntheticsPrivateMinion)contém status básico minion , incluindo contagens de sucesso e falha do trabalho, tamanho da fila, versão minion etc.
      </td>
    </tr>

    <tr>
      <td>
        Informação recebida
      </td>

      <td>
        Os dados recebidos do endpoint de monitoramento sintético contêm os detalhes da verificação agendada. Isso inclui as informações necessárias para completar a verificação do minion:

        * URL de destino
        * Texto de validação
        * Script completo (para Sintético monitor de browser com script)
      </td>
    </tr>

    <tr>
      <td>
        Local de armazenamento de dados
      </td>

      <td>
        Os dados coletados pelo monitoramento sintético são armazenados na região selecionada por cada cliente para sua conta ([EUA ou UE)](/docs/using-new-relic/welcome-new-relic/get-started/our-eu-us-region-data-centers).

        Detalhes de configuração monitor (incluindo frequência, locais de verificação, URL de destino e o script completo para qualquer browser com script ou monitores de teste de API) são armazenados em nossa parte. Também armazenamos todos os resultados da verificação do monitor para cada tipo de monitor.
      </td>
    </tr>

    <tr>
      <td>
        Armazenamento de dados por tipo de monitor
      </td>

      <td>
        Para o monitor de ping, o armazenamento de dados inclui o [arquivo HAR](https://en.wikipedia.org/wiki/HAR_(file_format)), que inclui todas as solicitações e respostas feitas durante a verificação.

        Para browser simples, browser com script e testes de API, o armazenamento de dados inclui o seguinte:

        * O arquivo HAR inclui cabeçalhos completos de solicitação e resposta para todas as solicitações feitas durante a verificação.
        * Qualquer captura de tela feita durante a verificação é automaticamente incluída para simples e monitora o script do browser somente em caso de falha. No entanto, você pode configurar isso manualmente com script.
        * O log do browser (console JS) é incluído automaticamente para browsers simples e com script.
        * Qualquer saída de script está incluída para browser com script e monitor de teste de API.
      </td>
    </tr>

    <tr>
      <td>
        Órgãos de resposta
      </td>

      <td>
        A New Relic nunca armazena corpos de resposta de solicitações originadas por monitoramento sintético, a menos que você tenha configurado manualmente um script de monitor para fazer isso.
      </td>
    </tr>

    <tr>
      <td>
        Endereços IP
      </td>

      <td>
        Espera-se que [o Sintético minion público](/docs/synthetics/new-relic-synthetics/administration/synthetics-public-minion-ips) seja ativado usando credenciais não pessoais. Seus endereços IP não são definidos como dados pessoais sob as leis de proteção de dados e privacidade.
      </td>
    </tr>
  </tbody>
</table>

## O que você pode fazer [#additional-security]

Para níveis adicionais de segurança e privacidade de dados, considere usar estas opções.

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        Medidas adicionais
      </th>

      <th>
        Comentários
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Acesso do usuário
      </td>

      <td>
        Para controlar quais de seus usuários podem acessar seu monitor e localização privada, configure [permissões de monitoramento sintético baseadas em funções e grupos de usuários](/docs/synthetics/new-relic-synthetics/administration/user-roles-synthetics). Além disso, para rastrear e ser notificado sobre alterações, utilize [logs de auditoria e notificação de alertas](/docs/synthetics/new-relic-synthetics/administration/synthetics-audit-log-track-changes-made-users).
      </td>
    </tr>

    <tr>
      <td>
        Senhas, chave de API, nomes de usuários, etc.
      </td>

      <td>
        Para armazenar informações confidenciais com segurança, use [credenciais seguras](/docs/synthetics/new-relic-synthetics/using-monitors/store-secure-credentials-scripted-browsers-api-tests) para browser com script e testes de API. As credenciais são armazenadas com segurança usando criptografia AES-GCM de 256 bits em repouso com chaves gerenciadas pelo AWS Key Management Service (KMS).
      </td>
    </tr>

    <tr>
      <td>
        Sites protegidos por firewall
      </td>

      <td>
        Para controlar quais sites você deseja monitor atrás do seu firewall, você pode:

        * Adicione os endereços IP públicos do Sintético minion à sua lista de permissões ou lista de negações.
        * Use localização privada para monitor sites ou endpoint. Isso pode fornecer uma camada extra de segurança ao monitorar seus sites e serviços hospedados internamente.
      </td>
    </tr>

    <tr>
      <td>
        Páginas da web atrás de páginas de login
      </td>

      <td>
        Se você configurar o monitoramento sintético para rastrear áreas do site localizadas atrás de uma página de login, crie um login não pessoal especificamente para essa finalidade. Este login exclusivo reduzirá o risco de exposição não intencional de dados pessoais.
      </td>
    </tr>

    <tr>
      <td>
        Configuração de proxy
      </td>

      <td>
        Além dos URLs de destino monitorados pela New Relic, o minion privado enviará e receberá regularmente dados do endpoint de monitoramento sintético. Para configurar um proxy para todo o tráfego de e para esse endpoint, defina a [variável de ambiente MINION_API_PROXY](/docs/synthetics/new-relic-synthetics/private-locations/containerized-private-minion-cpm-configuration#environment-variables) no host minion .
      </td>
    </tr>

    <tr>
      <td>
        Segurança privada minion
      </td>

      <td>
        Para garantir que apenas os scripts que você pretende executar possam ser executados no minion privado, use [a execução script verificada](/docs/synthetics/new-relic-synthetics/private-locations/verified-script-execution-private-locations).
      </td>
    </tr>
  </tbody>
</table>
