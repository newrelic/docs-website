---
title: Encaminhar log de acesso do Amazon CloudFront
tags:
  - Logs
  - Enable log management in New Relic
  - Enable log monitoring in New Relic
  - CloudFront
metaDescription: 'Configure New Relic logging for your Amazon CloudFront distribution, so you can use enhanced log management capabilities.'
freshnessValidatedDate: never
translationType: machine
---

Você pode habilitar o registro em log da sua distribuição do Amazon CloudFront para enviar logs de acesso à Web para o New Relic.

## Opções para envio de log [#log-types]

Há duas opções para enviar logs do CloudFront: registro em log padrão ou log em tempo real.

<DNT>**Standard logs**</DNT> são enviados do CloudFront para um bucket S3 onde são armazenados. Você usaria então nosso gatilho AWS Lambda para enviar o log do S3 para New Relic. Revise [a documentação do Amazon CloudFront para configurar e usar o log padrão (log de acesso)](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/AccessLogs.html). Contém informações detalhadas sobre como criar seu bucket S3 e definir as permissões apropriadas. O log padrão inclui todos os campos de dados e é enviado ao S3 e depois ao New Relic a cada 5 minutos. Para obter instruções detalhadas sobre como configurar logs padrão no console da Amazon e enviá-los para a New Relic por meio de nosso gatilho S3 Lambda, consulte a [seção Habilitar log padrão](#enable-standard-logging).

<DNT>**Real-time logs**</DNT> são enviados segundos após o recebimento das solicitações usando um consumidor Kinesis Data Stream e um Kinesis Data Firehose para entrega à New Relic. Revise [a documentação do Amazon CloudFront para configurar o tempo real log](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/real-time-logs.html). tempo real log são configuráveis e permitem configurar uma taxa de amostragem (qual porcentagem de log enviar), selecionar campos específicos para receber nos registros log e definir comportamentos de cache específicos (padrões de caminho) para os quais você deseja receber o log. O log real do tempo também requer um bucket de backup S3 para enviar todos os dados ou apenas dados com falha. Portanto, para ativar o tempo real log, você também deve seguir [nossas instruções para criar um bucket S3](#create-s3-bucket). Para obter instruções detalhadas sobre como configurar o log padrão no console Amazaon e enviá-los para New Relic por meio de nosso gatilho S3 Lambda, consulte a seção [Habilitar tempo real log seção](#enable-real-time-logging).

Para ambas as opções, você pode usar nossas [regras de análise de log integradas](/docs/logs/ui-data/built-log-parsing-rules) para analisar automaticamente seu log de acesso do CloudFront e nosso dashboard de início rápido para obter insights imediatos sobre seus dados. Para que as regras de análise integradas funcionem e preencham os dados no widget do dashboard Início Rápido fornecido, você deve configurar o atributo `logtype` conforme definido nas instruções. Para obter detalhes adicionais sobre a análise do log real do tempo se você selecionar apenas alguns dos campos de registro, consulte a [seção Análise](#parsing-real-time-logs)

## Crie um bucket S3 para armazenar log do CloudFront [#create-s3-bucket]

Para habilitar o log padrão ou o log tempo real para sua distribuição do CloudFront, você deve primeiro criar um bucket S3 para usar para armazenar o log de acesso do CloudFront:

1. No Console de gerenciamento da AWS, escolha

   <DNT>
     **Services > All services > S3**
   </DNT>

   .

2. Selecione

   <DNT>
     **Create bucket**
   </DNT>

   .

3. Insira um

   <DNT>
     **Bucket name**
   </DNT>

   e selecione o

   <DNT>
     **AWS region**
   </DNT>

   de sua preferência. (Observe que seu bucket S3 deve estar na mesma região que sua função do Lambda que você cria na próxima seção se estiver usando o log padrão.)

4. Na seção

   <DNT>
     **Object ownership**
   </DNT>

   , selecione

   <DNT>
     **ACLs enabled**
   </DNT>

   .

5. Selecione

   <DNT>
     **Create bucket**
   </DNT>

   .

Agora você pode ativar o registro padrão ou em tempo real. Para obter instruções sobre essas opções, continue lendo.

## Habilitar registro padrão [#enable-standard-logging]

Atualize sua distribuição do CloudFront para ativar o log padrão:

1. No Console de gerenciamento da AWS, escolha

   <DNT>
     **Services > All Services > CloudFront**
   </DNT>

   .

2. Clique na sua distribuição

   <DNT>
     **ID**
   </DNT>

   . Na guia Geral, selecione

   <DNT>
     **Edit**
   </DNT>

   na seção Configuração.

3. Na seção

   <DNT>
     **Standard logging**
   </DNT>

   , selecione

   <DNT>
     **On**
   </DNT>

   para ativar a geração de registros e exibir as definições de configuração da geração de registros.

4. Para

   <DNT>
     **S3 bucket**
   </DNT>

   , pesquise e escolha o nome do bucket S3 que você criou acima.

5. Opcional: você pode adicionar um prefixo de log como `cloudfront_logs`.

6. Escolha

   <DNT>
     **Save changes**
   </DNT>

   .

Dentro de cinco minutos, você deverá começar a ver o arquivo de log aparecendo em seu bucket S3 com o seguinte formato de nome de arquivo:

```
<optional prefix>/<distribution ID>.YYYY-MM-DD-HH.unique-ID.gz
```

A seguir, você deve instalar e configurar nossa função AWS do Lambda `NewRelic-log-ingestion-s3` para enviar o log de acesso no S3 para o New Relic. Você precisará de uma única função do Lambda para o log do Amazon CloudFront para poder definir a variável de ambiente `LOG_TYPE` apropriada: isso permite que você use nossas [regras de análise integradas do CloudFront](/docs/logs/ui-data/built-log-parsing-rules/#cloudfront) e o [dashboard de início rápido](https://newrelic.com/instant-observability/amazon-cloudfront-web-logs). Se você já possui esta função do Lambda instalada em uma região e está utilizando-a para enviar outro log do S3 para New Relic (por exemplo log ALB/NLB), será necessário instalar a função do Lambda novamente em outra região. Além disso, conforme observado anteriormente, seu bucket S3 para armazenar log de acesso e sua função do Lambda para enviar log S3 para New Relic devem estar na mesma região.

Para executar estas etapas:

7. Siga as instruções aqui para [configurar AWS Lambda para enviar log do S3](/docs/logs/forward-logs/aws-lambda-sending-logs-s3/).

8. Após a instalação da função do Lambda, selecione

   <DNT>
     **Functions > NewRelic-s3-log-ingestion**
   </DNT>

   .

9. Selecione o botão

   <DNT>
     **+ Add trigger**
   </DNT>

   em S3.

10. Para

    <DNT>
      **Trigger Configuration**
    </DNT>

    , selecione S3.

11. Para

    <DNT>
      **Bucket**
    </DNT>

    , pesquise e escolha o bucket S3 que você criou acima.

12. Na seção

    <DNT>
      **Recursive invocation**
    </DNT>

    , marque a caixa de confirmação e escolha

    <DNT>
      **Add**
    </DNT>

    .

13. Na guia

    <DNT>
      **Configuration**
    </DNT>

    da função, escolha a opção

    <DNT>
      **Environment variables**
    </DNT>

    à esquerda.

14. Selecione

    <DNT>
      **Edit**
    </DNT>

    e para `LOG_TYPE` insira `cloudfront-web`.

15. Selecione

    <DNT>
      **Save**
    </DNT>

    .

Dentro de cinco minutos você deverá começar a ver seu log na interface de log. Para confirmar que você está recebendo o log, pesquise `logtype:cloudfront-web` na [barra de pesquisa da interface de log](/docs/logs/ui-data/use-logs-ui) ou execute uma consulta NRQL com algo como `FROM Log SELECT * WHERE logtype='cloudfront-web'`

## Habilitar registro de tempo real [#enable-real-time-logs]

Para habilitar o registro em log em tempo real para sua distribuição do CloudFront, primeiro você deve criar um Kinesis Data Stream para receber os logs do CloudFront:

1. No Console de gerenciamento da AWS, escolha

   <DNT>
     **Services > Kinesis**
   </DNT>

   .

2. Selecione

   <DNT>
     **Data streams**
   </DNT>

   e depois

   <DNT>
     **Create data stream**
   </DNT>

   .

3. Insira um

   <DNT>
     **Data stream name**
   </DNT>

   . Por exemplo, `CloudFront-DataStream`.

4. Selecione um modo de capacidade de fluxo de dados de sua preferência.

5. Selecione

   <DNT>
     **Create data stream**
   </DNT>

   .

6. Na seção

   <DNT>
     **Consumers**
   </DNT>

   , selecione

   <DNT>
     **Process with delivery stream**
   </DNT>

   .

7. Para

   <DNT>
     **Destination**
   </DNT>

   , selecione

   <DNT>
     **New Relic**
   </DNT>

   .

8. Insira um

   <DNT>
     **Delivery stream name**
   </DNT>

   . Por exemplo, `CloudFront-DeliveryStream`.

9. Na seção de configurações

   <DNT>
     **Destination**
   </DNT>

   , para o URL endpoint HTTP, selecione

   <DNT>
     **New Relic logs - US**
   </DNT>

   ou

   <DNT>
     **New Relic logs - EU**
   </DNT>

   .

10. Para

    <DNT>
      **API key**
    </DNT>

    , insira o

    <InlinePopover type="licenseKey"/>

    da sua conta New Relic.

11. Selecione

    <DNT>
      **Add parameter**
    </DNT>

    .

12. Se você selecionar todos os campos para login na etapa 21 abaixo, para

    <DNT>
      **Key**
    </DNT>

    insira `logtype` e para

    <DNT>
      **Value**
    </DNT>

    insira `cloudfront-rtl` . Se você planeja selecionar um subconjunto de campos para registro na Etapa 21 abaixo, insira `cloudfront-rtl-custom`. Se você não optar por selecionar todos os campos, consulte a [seção tempo real análise de log](#parsing-real-time-logs) abaixo para obter informações sobre como criar uma regra de análise personalizada para seu log.

13. Na seção

    <DNT>
      **Backup settings**
    </DNT>

    , você pode escolher apenas

    <DNT>
      **Failed data**
    </DNT>

    ou

    <DNT>
      **All data**
    </DNT>

    para a opção

    <DNT>
      **Source record backup in Amazon S3**
    </DNT>

    , com base em sua preferência.

14. Para o bucket de backup S3, selecione

    <DNT>
      **Browse**
    </DNT>

    para pesquisar e selecionar o nome do bucket S3 que você criou acima para armazenar o log do CloudFront.

15. Escolha

    <DNT>
      **Create delivery stream**
    </DNT>

    .

Em seguida, crie uma configuração de registro em tempo real e anexe-a à sua distribuição do CloudFront:

16. No Console de gerenciamento da AWS, escolha

    <DNT>
      **Services > CloudFront**
    </DNT>

    .

17. Em

    <DNT>
      **Telemetry section**
    </DNT>

    à esquerda, selecione

    <DNT>
      **Logs**
    </DNT>

    .

18. Clique na guia

    <DNT>
      **Real-time configurations**
    </DNT>

    e escolha

    <DNT>
      **Create configuration**
    </DNT>

    .

19. Insira um nome de configuração. Por exemplo: `CloudFront-RealTimeLogs`.

20. Insira uma taxa de amostragem de `1` a `100`.

21. Para

    <DNT>
      **Fields**
    </DNT>

    , selecione

    <DNT>
      **All fields**
    </DNT>

    ou escolha os campos que deseja incluir em seu registro.

22. Para

    <DNT>
      **Endpoint**
    </DNT>

    , selecione o nome do fluxo de dados criado na Etapa 3. Por exemplo: `CloudFront-DataStream`.

23. Na seção

    <DNT>
      **Distrubutions**
    </DNT>

    , selecione seu ID de distribuição do CloudFront.

24. Para

    <DNT>
      **Cache behaviors**
    </DNT>

    , marque

    <DNT>
      **Default (\*)**
    </DNT>

    .

25. Escolha

    <DNT>
      **Create configuration**
    </DNT>

    .

Dentro de alguns minutos você deverá começar a ver seu log em nossa [interface de log](/docs/logs/ui-data/use-logs-ui). Para confirmar que você está recebendo o log do tempo real, você pode pesquisar por `logtype:cloudfront-rtl*` na barra de pesquisa da interface de log ou por meio de uma consulta NRQL como `FROM Log SELECT * WHERE logtype LIKE 'cloudfront-rtl%'`

## Tempo real análise de log [#parsing-real-time-logs]

Nossa regra de análise integrada para tempo real log assume que todos os campos serão log. Se você optar por log apenas um subconjunto de campos, deverá definir uma regra de análise customizada que corresponda ao seu formato log . Isso é necessário para que o log seja analisado corretamente e para usar nosso [dashboard de início rápido](https://newrelic.com/instant-observability/amazon-cloudfront-web-logs).

Para criar uma regra de análise personalizada, selecione <DNT>**Parsing**</DNT> na seção <DNT>**Manage data**</DNT> da interface de registro.

1. Para

   <DNT>
     **Rule name**
   </DNT>

   , insira `CloudFront custom parsing rule`.

2. Para

   <DNT>
     **Filter logs based on NRQL**
   </DNT>

   , insira `logtype='cloundfront-rtl-custom'`.

3. Atualize a lógica de análise do Grok abaixo para incluir

   <DNT>
     **only**
   </DNT>

   os campos que você selecionou na configuração do log tempo real. Por exemplo, se você optar por não incluir o campo `cs_headers` , remova `%{SPACE}%{NOTSPACE:cs_headers}%` do Grok e assim por diante.

   ```
   ^%{NOTSPACE:timestamp}.\d{3}%{SPACE}%{NOTSPACE:c_ip}%{SPACE}%{NUMBER:time_to_first_byte:INT}%{SPACE}%{NUMBER:sc_status:INT}%{SPACE}%{NUMBER:sc_bytes:INT}%{SPACE}%{WORD:cs_method}%{SPACE}%{NOTSPACE:cs_protocol}%{SPACE}%{NOTSPACE:cs_host}%{SPACE}%{NOTSPACE:cs_uri_stem}%{SPACE}%{NUMBER:cs_bytes:INT}%{SPACE}%{NOTSPACE:x_edge_location}%{SPACE}%{NOTSPACE:x_edge_request_id}%{SPACE}%{NOTSPACE:x_host_header}%{SPACE}%{NUMBER:time_taken:INT}%{SPACE}%{NOTSPACE:cs_protocol_version}%{SPACE}%{NOTSPACE:cs_ip_version}%{SPACE}%{NOTSPACE:cs_user_agent}%{SPACE}%{NOTSPACE:cs_referer}%{SPACE}%{NOTSPACE:cs_cookie}%{SPACE}%{NOTSPACE:cs_uri_query}%{SPACE}%{NOTSPACE:x_edge_response_result_type}%{SPACE}%{NOTSPACE:x_forwarded_for}%{SPACE}%{NOTSPACE:ssl_protocol}%{SPACE}%{NOTSPACE:ssl_cipher}%{SPACE}%{NOTSPACE:x_edge_result_type}%{SPACE}%{NOTSPACE:fle_encrypted_fields}%{SPACE}%{NOTSPACE:fle_status}%{SPACE}%{NOTSPACE:sc_content_type}%{SPACE}%{NOTSPACE:sc_content_len}%{SPACE}%{NOTSPACE:sc_range_start}%{SPACE}%{NOTSPACE:sc_range_end}%{SPACE}%{NUMBER:c_port:INT}%{SPACE}%{NOTSPACE:x_edge_detailed_result_type}%{SPACE}%{NOTSPACE:c_country}%{SPACE}%{NOTSPACE:cs_accept_encoding}%{SPACE}%{NOTSPACE:cs_accept}%{SPACE}%{NOTSPACE:cache_behavior_path_pattern}%{SPACE}%{NOTSPACE:cs_headers}%{SPACE}%{NOTSPACE:cs_header_names}%{SPACE}%{NOTSPACE:cs_headers_count}$
   ```

4. Cole o Grok atualizado na seção de lógica de análise e selecione

   <DNT>
     **Test grok**
   </DNT>

   para validar se seu analisador está funcionando.

5. Ative a regra e escolha

   <DNT>
     **Save parsing rule**
   </DNT>

   .

<img
  title="Creating a CloudFront custom parsing rule"
  alt="Creating a CloudFront custom parsing rule"
  src="/images/logs_screenshot-crop_Cloudfront-log-parsing.webp"
/>

<figcaption>
  Uma captura de tela da configuração de análise personalizada do CloudFront.
</figcaption>

## Qual é o próximo? [#what-next]

<img
  title="Dashboard in Amazon CloudFront Access Logs quickstart"
  alt="Dashboard in Amazon CloudFront Access Logs quickstart"
  src="/images/logs_screenshot-crop_Cloudfront-logs-dashboard.webp"
/>

<figcaption>
  Nosso início rápido para o log do Amazon CloudFront Access inclui um dashboard pré-construído.
</figcaption>

Aqui estão algumas ideias para os próximos passos:

* Comece em minutos com um dashboard predefinido para ver as principais métricas do seu log de acesso do Amazon CloudFront. Acesse o [log de acesso do Amazon CloudFront início rápido](https://newrelic.com/instant-observability/amazon-cloudfront-web-logs) e clique em

  <DNT>
    **Install now**
  </DNT>

  .

* Explore os dados de registro em sua plataforma com nossa [interface de registros](/docs/logs/log-management/ui-data/use-logs-ui).

* Obtenha visibilidade mais profunda dos dados de desempenho do seu aplicativo e da plataforma encaminhando seu log com nossos recursos [de logs contextualizados](/docs/logs/enable-log-management-new-relic/configure-logs-context/configure-logs-context-apm-agents) .

* Configure [alertas](/docs/alerts-applied-intelligence/new-relic-alerts/alert-conditions/create-alert-conditions).

* [consulte seus dados](/docs/query-your-data/explore-query-data/get-started/introduction-querying-new-relic-data/) e [crie dashboard](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards).

## Desativar encaminhamento de logs [#disable]

Para desativar os recursos de encaminhamento de logs, existem duas opções. Se você quiser apenas parar de enviar o log do S3 para o New Relic , poderá excluir o gatilho do S3 na `NewRelic-log-ingestion-s3` função do Lambda. Se quiser desabilitar completamente os logs de acesso do Amazon CloudFront, você precisará excluir o gatilho, bem como desativar o registro em log nas configurações gerais da distribuição do CloudFront.
