---
title: Segurança para aplicativos móveis
tags:
  - Mobile monitoring
  - New Relic Mobile
  - Get started
metaDescription: 'For an overview of New Relic''s security measures for mobile applications, start here.'
freshnessValidatedDate: never
translationType: machine
---

Para proteger a segurança do seu aplicativo móvel e a privacidade dos dados do seu usuário, a New Relic registra apenas dados de desempenho, conforme descrito neste documento. Não coletamos nenhum dado usado ou armazenado pelo aplicativo monitor. Para obter mais informações sobre as medidas de segurança da New Relic, consulte nossa [documentação sobre segurança e privacidade de dados](/docs/security/new-relic-security/data-privacy/data-privacy-new-relic) ou visite o [site de segurança da New Relic](https://newrelic.com/security).

## Coleção de dados [#collection]

Quando você instala o New Relic, nossos recursos <InlinePopover type="mobile"/>passam a fazer parte do seu aplicativo iOS ou Android. Esses recursos residem na "sandbox" do seu aplicativo, portanto, eles não podem acessar nada além dos dados de desempenho do seu aplicativo móvel. Não coletamos dados de desempenho do próprio dispositivo, como o nível da bateria.

Nosso agente SDK móvel coleta e envia dados específicos para o [coletor](/docs/using-new-relic/welcome-new-relic/getting-started/glossary#collector) New Relic, incluindo:

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        Dados móveis coletados
      </th>

      <th>
        Comentários
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Dispositivos
      </td>

      <td>
        * Duração da sessão do aplicativo
        * Nome da operadora sem fio
        * O nome do modelo e fabricante do dispositivo e a versão do sistema operacional
        * Certos nomes de pacotes, classes, métodos e threads
        * Um [identificador de instância](#identifiers)exclusivo
      </td>
    </tr>

    <tr>
      <td>
        Solicitações e respostas
      </td>

      <td>
        * URLs de solicitações HTTP, juntamente com código de status HTTP, tempo de resposta e tamanho da solicitação e do corpo da resposta
        * Código de erro do sistema operacional para falhas de rede (solicitações HTTP que não são concluídas)
        * Os primeiros 2 KB do corpo da resposta quando a solicitação HTTP recebe um código de status de resposta `4xx` ou `5xx`
        * Somente Android: um stack trace quando a solicitação HTTP recebe um código de status de resposta `4xx` ou `5xx`
      </td>
    </tr>
  </tbody>
</table>

O agente envia todos os dados utilizando criptografia HTTPS e valida o certificado SSL do coletor. Isso evita ataques comuns de detecção de dados e falsificação de servidor. O agente também remove a string de consulta, o identificador de fragmento, o nome de usuário e a senha de cada URL antes de enviar os dados.

## Endpoint de dados seguro [#endpoints]

Nosso agente SDK móvel envia os dados coletados ao coletor para processamento. Você pode redirecionar essas postagens de dados para servidores proxy ou delegados para manipulação segura de dados.

* <DNT>
    **Android:**
  </DNT>

  É possível usar API para especificar a autoridade URI do terminal de dados do coletor de colheita e travamento. Para obter mais informações, consulte a [documentação de configuração do agente Android e sinalizadores de recurso](/docs/mobile-monitoring/new-relic-mobile/mobile-sdk/configure-settings/).

* <DNT>
    **iOS:**
  </DNT>

  Para obter mais informações, consulte a [documentação de configuração do agente iOS e sinalizadores de recurso](/docs/mobile-monitoring/new-relic-mobile/mobile-sdk/configure-settings/).

## Identificador único [#identifiers]

Nosso agente SDK móvel atribui um identificador exclusivo a cada instância de aplicativo instalada para rastrear instalações distintas, identificar sessões recorrentes e correlacionar o desempenho ao longo do tempo.

<table>
  <thead>
    <tr>
      <th style={{ width: "150px" }}>
        Agente móvel
      </th>

      <th>
        Identificador
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Android
      </td>

      <td>
        Nosso agente Android gera um UUID criptograficamente forte e o armazena no `SharedPreferences` do aplicativo. Para obter mais informações, consulte nossa [documentação de requisitos e compatibilidade do Android](/docs/mobile-monitoring/new-relic-mobile-android/get-started/new-relic-android-compatibility-requirements).
      </td>
    </tr>

    <tr>
      <td>
        iOS
      </td>

      <td>
        As medidas de segurança utilizadas para iOS dependem da versão do agente.

        * Nas versões 5.3.5 ou superiores, o agente iOS usa a propriedade `IdentifierForVendor` para fornecer um ID de dispositivo exclusivo.

        * Nas versões 5.3.4 ou inferiores, o agente iOS usava a biblioteca de código aberto SecureUDID. SecureUDID é usado por muitas bibliotecas de terceiros e é um padrão aceito pela indústria que não viola as diretrizes da Apple App Store. SecureUDID não usa identificador de hardware de dispositivo, como IMEI.

          Observe que nosso SDK móvel não coleta IDFA (Identity For Advertisers). Para obter mais informações, consulte nossa [documentação de compatibilidade e requisitos do iOS](/docs/mobile-monitoring/new-relic-mobile-ios/get-started/new-relic-ios-compatibility-requirements).
      </td>
    </tr>
  </tbody>
</table>

## Sem atualizações remotas [#updates]

A New Relic não tem a capacidade de atualizar o agente móvel remotamente. Usar o agente não introduzirá nenhum código em seu aplicativo móvel sem o seu conhecimento.

## Armazenamento de dados [#storage]

Nosso agente SDK móvel armazena informações de configuração usando as preferências normais do seu aplicativo ou a API de configurações no dispositivo móvel. Esta configuração inclui:

* Token de aplicativo
* Número da versão do aplicativo
* Número de versão do agente do SDK para Android ou iOS
* Configurações como o número máximo de solicitações HTTP a serem rastreadas por minuto

Os dados de desempenho são armazenados em buffer na memória. Nunca é gravado no armazenamento do dispositivo.

O armazenamento de dados do lado do servidor para aplicativos móveis é tratado da mesma forma que todos os outros monitores de aplicativos da New Relic. Para obter mais informações, consulte nossa documentação de segurança sobre [hospedagem e armazenamento de dados](/docs/security/new-relic-security/data-privacy/security-controls-privacy#Hosting_and_Data_Storage).

Em geral, retemos dados de desempenho de acordo com o período mais generoso da sua assinatura web ou móvel. Também mantemos registros agregados do número de instâncias ativas da sua aplicação.

## Instrumentação adicionada ao seu código [#instrumentation]

Nosso agente SDK móvel injeta código em determinadas chamadas de método em seu aplicativo para coletar dados de desempenho. Isso pode ter o efeito de adicionar frames stack ao gráfico de chamadas do seu aplicativo onde nosso código é executado. Isso nos permite cronometrar e monitor as entradas e saídas de várias API.

Este código adicionado foi revisado e testado quanto a falhas relacionadas à segurança e incorpora práticas recomendadas relacionadas à codificação segura. Como nosso código é executado dentro do processo do seu aplicativo, ele está sujeito aos mesmos direitos e restrições que o seu próprio código.

Além disso, nosso agente iOS registra um manipulador NSURLProtocol para rastrear atividades de rede baseadas em NSURLConnection. Essa instrumentação é compatível com outros manipuladores NSURLProtocol personalizados que seu aplicativo pode registrar. O manipulador é registrado em um único processo de aplicativo, portanto, não é possível monitor solicitações de rede originadas de outros aplicativos ou do sistema operacional subjacente.

## Endereço IP do usuário [#ip-address]

Nosso agente SDK móvel captura o endereço IP do usuário para enriquecer os dados e obter informações adicionais do usuário. O endereço IP é usado como um valor de pesquisa que mapeia detalhes adicionais e permite que nossos clientes diagnostiquem problemas de desempenho. Os valores de pesquisa de endereço IP incluem:

* Nome do aplicativo
* Código do país
* Região
* Código postal
* Latitude
* Longitude
* Código de área

Para mais informações sobre evento e atributo para monitoramento de Mobile, consulte nosso [dicionário de dados](/attribute-dictionary?attribute_name=&field_data_source_tid%5B%5D=8342).

A New Relic não retém o endereço IP do usuário após o mapeamento do atributo. O valor do endereço IP é armazenado em cache na memória por até seis horas antes de ser descartado. Se você tiver dúvidas ou preocupações sobre o uso de endereços IP em relação às suas próprias obrigações regulatórias de notificação e consentimento, entre em contato com suas equipes jurídicas ou de privacidade.
