---
title: Configuração IAST
tags:
  - IAST
  - New Relic IAST
  - Configuration
metaDescription: Find out how to configure IAST.
freshnessValidatedDate: '2024-09-16T00:00:00.000Z'
translationType: machine
---

Você pode configurar seu IAST para lidar com o agendamento de varredura. Essas configurações permitem excluir certas categorias API, parâmetros e vulnerabilidades da análise IAST . Você também pode adiar os exames IAST ou agendá-los para horários específicos do dia.

## Agendamento de exames IAST [#scheduling-iast-scans]

Você pode iniciar e parar suas varreduras IAST agendadas usando 2 variáveis. Essas variáveis permitem que você defina horários específicos para a verificação IAST ou adicione um atraso ao horário de início da verificação IAST no aplicativo.

### Configure suas varreduras IAST agendadas [#configure-scheduled]

Abra o arquivo de configuração `newrelic.yml` para definir o parâmetro `scan_schedule` .

```yml
security:
  scan_schedule:
    delay: 0                     # In minutes, default is 0 min
    duration: 0                  # In minutes, default is forever
    schedule: ""                 # Cron Expression to define start time
    always_sample_traces: false  # regardless of scan schedule
```

<CollapserGroup>
  <Collapser
    id="delay"
    title={<><InlineCode>
      delay
    </InlineCode> (em minutos)</>
    }
  >
    O campo `delay` especifica o tempo em minutos antes que uma varredura IAST comece após o início do aplicativo. O valor padrão é `0`.
  </Collapser>

  <Collapser
    id="duration"
    title={<><InlineCode>
      duration
    </InlineCode> (em minutos)</>
    }
  >
    O campo `duration` especifica o tempo em minutos que a verificação IAST será executada. O valor padrão é para sempre, não tem limites.

    Por exemplo, se você definir `duration: 300`, a verificação IAST será executada por 300 minutos (5 horas).
  </Collapser>

  <Collapser
    id="schedule-cron"
    title={<><InlineCode>
      schedule
    </InlineCode> (Expressão Cron)</>
    }
  >
    O campo `schedule` especifica uma expressão cron que define quando a varredura IAST deve ser executada. Por padrão, `schedule` está desabilitado. A [expressão cron](https://www.quartz-scheduler.org/documentation/quartz-2.3.0/tutorials/crontrigger.html) consiste em seis campos separados por espaços:

    * **second**: Especifica o segundo da hora (0-59)
    * **minute**: Especifica o minuto da hora (0-59)
    * **hour**: Especifica a hora do dia (0-23)
    * **day**: Especifica o dia do mês (1-31)
    * **month**: O mês do ano (1-12 ou JAN-DEZ)
    * **day\_of\_week**: Especifica o dia da semana (1-7 ou DOM-SÁB), onde 1 = Domingo

    <Callout variant="important">
      O que acontece se `duration` não for especificado? Omitir o parâmetro de duração implica que a varredura IAST nunca deve parar. Nesse cenário, o cronograma especificado é tratado como um horário de início e não como uma operação recorrente. A verificação continuará indefinidamente, sem interrupção ou término. Por exemplo, `schedule: "0 0 0 * * ?"` agendaria a verificação IAST para ser executada à meia-noite todos os dias.
    </Callout>
  </Collapser>

  <Collapser
    id="always-sample-traces"
    title={<><InlineCode>
      always_sample_traces
    </InlineCode> (Booleano)</>
    }
  >
    `always-sample-traces` permite que IAST colete ativamente dados trace em segundo plano, e o agente de segurança usará esses dados coletados para executar uma varredura IAST no horário agendado. Entretanto, para aplicativos com gerenciamento de sessão, deixar o valor padrão do sinalizador `always_sample_traces` definido como `false` é a opção recomendada. Isso garante que a amostragem e a varredura do IAST sejam limitadas a uma janela especificada. As sessões geralmente têm duração curta, muitas vezes terminando em 30 minutos. Nesse cenário, a amostragem de rastreamento antes da janela não fornecerá insights valiosos e pode resultar em vulnerabilidades perdidas. Por padrão, o valor de `always_sample_traces` é falso.
  </Collapser>
</CollapserGroup>

### Exemplos [#configure-scheduled-examples]

<CollapserGroup>
  <Collapser id="start-30-minutes" title="Programe o IAST para iniciar 30 minutos após o início do aplicativo e executar por 300 minutos">
    Para programar o IAST para iniciar 30 minutos após o início do aplicativo e ser executado por 300 minutos, você deve definir o atraso como 30 e a duração como 300.

    ```yml
    security:
      scan_schedule:
        delay: 30         # In minutes, default is 0 min
        duration: 300     # In minutes, default is forever
    ```
  </Collapser>

  <Collapser id="specific-time" title="Programe o IAST para ser executado em um horário específico">
    Para agendar a execução do IAST em um horário específico, defina a programação para uma expressão cron que represente o horário desejado. Por exemplo, para programar o IAST para ser executado todos os dias à meia-noite, você definiria a programação como `"0 0 0 * * ?"`.

    ```yml
    security:
      scan_schedule:
        schedule: "0 0 0 * * ?"     # By default, schedule is inactive
    ```

    <Callout variant="important">
      Se tanto o atraso quanto o cronograma forem especificados, o atraso terá precedência. Isso significa que o IAST começará após o atraso especificado, independentemente do cronograma.
    </Callout>
  </Collapser>

  <Collapser id="iast-sample-traces" title="Definir IAST para sempre amostrar rastreamento">
    Se você quiser que IAST sempre faça a amostragem do rastreamento, defina `always_sample_traces` como `true`. Por padrão, isso é definido como `false`, o que significa que IAST coleta amostras apenas do rastreamento dentro da janela de verificação ativa.

    ```yml
    security:
      scan_schedule:
        delay: 30                   # In minutes, default is 0 min
        always_sample_traces: true  # regardless of scan schedule
    ```
  </Collapser>
</CollapserGroup>

## Excluir da varredura IAST [#exclude-iast-scans]

A configuração de exclusão da verificação IAST permite que você exclua API específicas, categorias de vulnerabilidades e parâmetros da análise IAST . Isso é útil em situações em que certos componentes do aplicativo são conhecidos por serem seguros ou em que a varredura IAST de determinada API pode resultar em mau funcionamento do aplicativo, como limitação de login.

Para configurar a exclusão de varredura IAST, abra o arquivo de configuração `newrelic.yml` para definir o parâmetro `exclude_from_iast_scan` .

```yml
security:
  exclude_from_iast_scan:
    api: []
    http_request_parameters:
      header: []
      query: []
      body: []
    iast_detection_category:
      insecure_settings: false
      invalid_file_access: false
      sql_injection: false
      nosql_injection: false
      ldap_injection: false
      javascript_injection: false
      command_injection: false
      xpath_injection: false
      ssrf: false
      rxss: false
```

### Excluir API [#exclude-api]

Você pode ignorar API específicas da análise IAST adicionando-as à seção API do arquivo de configuração `newrelic.yml`. Você pode especificar API usando padrões de expressão regular (regex) que seguem a sintaxe do Perl 5. O padrão regex deve fornecer uma correspondência completa para a URL sem o endpoint.

Este é o formato para especificar API:

```yml
exclude_from_iast_scan:
  api:
    - .*account.* 
    - .*/\api\/v1\/.*?\/login
```

Por exemplo:

* `.*account.*` combina API com URLs como `http://localhost:80/api/v1/account/login`

* `.*/\api\/v1\/.*?\/login` combina API com URLs como `http://localhost:80/api/v1/{'{account_id}'}/login`

### Excluir `http_request_parameters` [#exclude-http]

Você pode ignorar parâmetros de solicitação HTTP específicos da análise IAST adicionando-os à seção `http_request_parameters` do arquivo de configuração `newrelic.yml`.

<CollapserGroup>
  <Collapser id="header" title="Cabeçalho">
    Esta é uma lista de chaves de cabeçalho HTTP. Se uma solicitação incluir cabeçalhos com essas chaves, a verificação IAST correspondente será ignorada. Por exemplo, se você tiver uma solicitação curl com cabeçalhos e quiser pular a varredura IAST no cabeçalho `X-Forwarded-For` , poderá passar esta configuração:

    ```bash
    curl -X POST -H "X-Forwarded-For: 123.456.789.012" \
         -H "Content-Type: application/x-www-form-urlencoded" \
         -d "param1=value1&param2=value2" http://example.com
    ```

    Você pode usar esta configuração:

    ```yml
    exclude_from_iast_scan:
      http_request_parameters:
        header: 
          - X-Forwarded-For
    ```
  </Collapser>

  <Collapser id="query" title="Consulta">
    Esta é uma lista de chaves de parâmetros de consulta. A presença desses parâmetros na string de consulta da solicitação fará com que a varredura IAST seja ignorada. Por exemplo, se você tiver uma requisição curl com parâmetro de consulta e quiser pular a varredura IAST no parâmetro de consulta `customerID` e `username`, você pode passar esta configuração:

    ```bash
    curl --location --request GET 'localhost:8080/sql/save?firstName=test&lastName=user&customerID=testuser&username=test123'
    ```

    Você pode usar esta configuração:

    ```yml
    exclude_from_iast_scan:
      http_request_parameters:
        query: 
          - username
          - customerID
    ```
  </Collapser>

  <Collapser id="body" title="Corpo">
    Esta é uma lista de chaves dentro do corpo da solicitação. Se essas chaves forem encontradas no conteúdo do corpo, a verificação IAST será ignorada. Estes são os tipos de conteúdo suportados para o corpo da solicitação: JSON, XML e dados codificados por URL de formulário.

    #### Exemplo para JSON Content-Type

    Este é um exemplo de curl para o tipo de conteúdo JSON quando você tem uma solicitação curl com corpo JSON e deseja pular a varredura IAST em `customerID` e `firstName`.

    ```bash
    curl --location --request POST 'localhost:8080/application/json/post' \
      --header 'Content-Type: application/json' \
      --data '{
        "path": "sample.txt",
        "script":"testscript",
        "customerID":"GREAL",
        "name": {
          "firstName": "john",
          "lastName": "wick"
        },
        "url":"http://example.com",
        "cmd":"ls"
      }'
    ```

    Você pode usar esta configuração:

    ```yml
    exclude_from_iast_scan:
      http_request_parameters:
        body: 
          - customerID
          - name.firstName
    ```

    #### Exemplo para XML Content-Type

    Esta é uma solicitação curl com corpo XML e você deseja pular a varredura IAST em `customerID` e `username`.

    ```bash
    curl --location 'localhost:8080/application/xml/post' \
      --header 'Content-Type: application/xml' \
      --data '<?xml version="1.0" encoding="UTF-8" ?>
      <AppData>
        <path>sample.txt</path>
        <script>K2</script>
        <customerID>GREAL</customerID>
        <username>bob</username>
        <url>http://example.com</url>
        <cmd>ls</cmd>
        <name>keshav</name>
        <firstName>Aliko</firstName>
      </AppData>'
    ```

    Você pode usar esta configuração:

    ```yml
    exclude_from_iast_scan:
      http_request_parameters:
        body: 
          - AppData.customerID
          - AppData.username
    ```

    #### Exemplo de tipo de conteúdo codificado em URL de formulário

    Esta é uma solicitação curl com corpo Form-URL-Encoded, e você deseja pular a varredura IAST em `customerID` e `username`.

    ```bash
    curl --location 'localhost:8080/application/urlencode/post' \
      --header 'Content-Type: application/x-www-form-urlencoded' \
      -d 'name=madhav&path=sample.txt&customerID=GREAL&script=K2&url=http://example.com&username=bob&firstName=Aliko&cmd=ls'
    ```

    Você pode usar esta configuração:

    ```yml
    http_request_parameters:
      body: 
        - customerID
        - username
    ```

    <Callout variant="tip">
      Para parâmetros de corpo aninhados, especifique um valor de parâmetro separado por um ponto (.).
    </Callout>
  </Collapser>
</CollapserGroup>

### Excluir `iast_detection_category` [#exclude-iast-detection]

A configuração `iast_detection_category` permite que o usuário especifique categorias de vulnerabilidades para as quais a análise IAST será aplicada ou ignorada. Se uma dessas categorias for definida como `true`, o agente de segurança IAST não gerará eventos ou sinalizará vulnerabilidades para essa categoria.

Veja este exemplo para pular a verificação de injeção de SQL e SSRF. Os parâmetros `sql_injection` e `ssrf` são definidos como `true`:

```yml
exclude_from_iast_scan:
  iast_detection_category:
    insecure_settings: false
    invalid_file_access: false
    sql_injection: true
    nosql_injection: false
    ldap_injection: false
    javascript_injection: false
    command_injection: false
    xpath_injection: false
    ssrf: true
    rxss: false
```

<Callout variant="tip">
  O `iast_detection_category` terá prioridade sobre a configuração de detecção presente na seção de segurança.
</Callout>

Você pode usar esta configuração combinada:

```yml
security:
  enabled: true
  scan_schedule:
    delay: 0                     # In minutes, default is 0 min
    duration: 0                  # In minutes, default will be forever
    #schedule: ""                # Cron Expression to define start time
    always_sample_traces: false  # continuously collect samples
  exclude_from_iast_scan:
    api: []
    http_request_parameters:
      header: []
      query: []
      body: []
    iast_detection_category:
      insecure_settings: false
      invalid_file_access: false
      sql_injection: false
      nosql_injection: false
      ldap_injection: false
      javascript_injection: false
      command_injection: false
      xpath_injection: false
      ssrf: false
      rxss: false
  agent:
    enabled: true
```

## Controladores de varredura IAST [#iast-scan-controllers]

### Limite de taxa de varredura IAST [#iast-scan-rate-limit]

As configurações de limite de taxa de varredura do IAST limitam o número máximo de sondagens ou solicitações de análise que podem ser enviadas ao aplicativo em um minuto. O limite de taxa de varredura IAST padrão é definido como um mínimo de 12 solicitações de repetição por minuto e um máximo de 3.600 solicitações de repetição por minuto.