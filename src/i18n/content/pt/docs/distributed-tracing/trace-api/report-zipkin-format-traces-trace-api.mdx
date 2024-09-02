---
title: Relatar rastreamento no formato Zipkin por meio da API trace
tags:
  - Understand dependencies
  - Distributed tracing
  - Trace API
metaDescription: 'For the Trace API: How to report Zipkin-format distributed tracing data via the Trace API.'
freshnessValidatedDate: never
translationType: machine
---

Se quiser criar sua própria implementação de rastreamento, você pode usar nossa [API Trace](/docs/understand-dependencies/distributed-tracing/trace-api/introduction-trace-api). Este documento explica como enviar dados trace no formato Zipkin para nossa API trace . (Para nosso formato de dados geral, consulte [Formato New Relic](/docs/understand-dependencies/distributed-tracing/trace-api/report-new-relic-format-traces-trace-api).)

## Requisitos de versão do Zipkin [#zipkin-requirements]

A API trace oferece suporte a dados do [Zipkin](https://zipkin.io/) JSON v2 (ou superior) sem qualquer modificação. Para obter detalhes sobre esta versão, consulte [Detalhes da versão do Zipkin v2](https://github.com/openzipkin/zipkin/releases/tag/2.0.0) e o [esquema do Zipkin v2](https://zipkin.io/zipkin-api/#/default/post_spans).

## Visão geral do uso da API trace [#send-data-overview]

Usar nossa API trace é tão simples quanto:

* Enviando dados trace no formato esperado (neste caso, formato `zipkin`).
* Enviando esses dados para o [endpoint](/docs/understand-dependencies/distributed-tracing/trace-api/trace-api-general-requirements-limits#requirements)apropriado

Nossas instruções de envio de dados têm opções para ativar o rastreamento infinito. Para saber mais sobre isso, consulte [Introdução às](/docs/understand-dependencies/distributed-tracing/infinite-tracing/introduction-infinite-tracing) [considerações sobre](/docs/understand-dependencies/distributed-tracing/trace-api/introduction-trace-api#sampling) rastreamento e amostragem infinita .

Para começar a usar a API trace , escolha uma opção:

* [Enviar um tracede amostra](#quick-start): mostra um exemplo curl de envio de um trace para o New Relic. Isso é útil para entender como funciona a API trace e para verificar se você está vendo dados no New Relic.
* [Relatar dados da instrumentação Zipkin existente](#existing-zipkin): se você tiver uma implementação Zipkin existente, poderá simplesmente alterar o endpoint para onde seus dados são enviados.

## Enviar amostra de carga útil trace do Zipkin [#quick-start]

Esta seção descreve como enviar um trace simples no formato Zipkin para nossa API trace por meio de solicitação curl. Você pode optar por fazer isso para aprender como nossa API funciona e para verificar se os dados estão aparecendo no New Relic antes de fazer uma instrumentação detalhada.

Para começar a enviar uma carga útil de amostra:

1. (Opcional, para ativar o rastreamento infinito) Primeiro, você deve [configurar um observador de rastreamento](/docs/understand-dependencies/distributed-tracing/infinite-tracing/set-trace-observer#set-up). Esse procedimento inclui instruções para enviar um trace de amostra usando nosso formato `new-relic` geral. Quando você chegar a essa etapa, volte aqui para aprender como enviar um trace no formato Zipkin.
2. Envie uma carga no formato Zipkin seguindo as instruções abaixo.

### Enviar carga útil no formato Zipkin [#send-zipkin-curl]

Para enviar um exemplo trace no formato Zipkin:

Obtenha o <InlinePopover type="licenseKey"/>da conta para a qual você deseja relatar dados.

Você executará uma solicitação curl abaixo. Notas sobre isso:

* Substitua o espaço reservado da chave de licença pela sua chave de licença.
* Se você estiver usando o Rastreamento Infinito, use o valor [YOUR_TRACE_OBSERVER_URL](/docs/understand-dependencies/distributed-tracing/infinite-tracing/set-trace-observer#ui-endpoints) no lugar do endpoint padrão.
* Se você quiser enviar mais de uma postagem, altere o ID trace para um valor diferente. Enviar a mesma carga útil ou intervalo `id` diversas vezes para o mesmo `traceId` pode resultar em rastreamento fragmentado na interface.

```bash
curl -i -H 'Content-Type: application/json' \
    -H 'Api-Key: NEW_RELIC_API_KEY' \
    -H 'Data-Format: zipkin' \
    -H 'Data-Format-Version: 2' \
    -X POST \
    -d '[
        {
            "traceId": "test-zipkin-trace-id-1",
            "id": "3e0f5885710776cd",
            "kind": "CLIENT",
            "name": "post",
            "duration": 508068,
            "localEndpoint": {
                "serviceName": "service-1",
                "ipv4": "127.0.0.1",
                "port": 8080
            },
            "tags": {
            }
        },
        {
            "traceId": "test-zipkin-trace-id-1",
            "parentId": "3e0f5885710776cd",
            "id": "asdf9asdn123lkasdf",
            "kind": "CLIENT",
            "name": "service 2 span",
            "duration": 2019,
            "localEndpoint": {
                "serviceName": "service-2",
                "ipv4": "127.0.0.1",
                "port": 8080
            },
            "tags": {
                "error.message": "Invalid credentials"
            }
        }
    ]' 'https://trace-api.newrelic.com/trace/v1'
```

Dentro de um minuto, o trace deverá estar disponível em [nossa interface distributed tracing ](https://one.newrelic.com/launcher/distributed-tracing-nerdlets.distributed-tracing). Para encontrá-lo, execute uma consulta para `trace.id`. Neste exemplo, foi `test-zipkin-trace-id-1`. Observe que você pesquisa pelo [atributo transformado](#zipkin-transform) de `trace.id` (não `traceId`).

<img
  title="Distributed Tracing Zipkin Integration Searching for sample trace"
  alt="Distributed Tracing Zipkin Integration Searching for sample trace"
  src="/images/distributed-tracing_screenshot-full_zipkin-query.webp"
/>

Aprender mais:

* [Saiba onde os dados da API trace aparecem na interface](/docs/understand-dependencies/distributed-tracing/ui-data/additional-distributed-tracing-features-new-relic-one#find-data).
* [Envie dados de uma instrumentação Zipkin existente](#existing-zipkin).
* [Aprenda a decorar vãos](/docs/apm/distributed-tracing/trace-api/trace-api-decorate-spans-attributes) adicionando tag. Isso ajuda você a personalizar como os rastreamentos são exibidos em nossa interface para uma experiência mais rica e útil.
* Saiba mais sobre [informações gerais sobre endpoints (limites de dados, metadados necessários e validação de resposta](/docs/apm/distributed-tracing/trace-api/trace-api-endpoint-requirements-limits)).
* Saiba como [os dados do Zipkin são transformados e armazenados em nosso formato](#zipkin-transform).
* Se você não vir seus dados de rastreamento, consulte [resolução de problemas](/docs/apm/distributed-tracing/trace-api/troubleshooting-missing-trace-api-data).

## Envie dados da instrumentação Zipkin existente [#existing-zipkin]

Notas preliminares:

* Se desejar ativar [o Rastreamento Infinito](/docs/understand-dependencies/distributed-tracing/infinite-tracing/introduction-infinite-tracing), primeiro você deverá [configurar um observador de rastreamento](/docs/understand-dependencies/distributed-tracing/infinite-tracing/set-trace-observer#set-up).
* Pode ser útil [enviar primeiro uma amostra de carga](#quick-start) para verificar se tudo está funcionando corretamente.

Para relatar dados de uma instrumentação Zipkin existente, você apontará o tracer Zipkin para os [endpoints Trace apropriados da API](/docs/understand-dependencies/distributed-tracing/trace-api/trace-api-general-requirements-limits#requirements) com alguns metadados de solicitação necessários. Você pode enviar os metadados necessários como cabeçalhos ou parâmetros de consulta (algumas versões tracer Zipkin não permitem especificar cabeçalhos HTTP).

Aqui está um exemplo de como seria criar um Zipkin `OkHttpSender` em Java configurado para a API trace :

```java
OkHttpSender.create("https://trace-api.newrelic.com/trace/v1?Api-Key=NEW_RELIC_LICENSE_KEY&Data-Format=zipkin&Data-Format-Version=2");
```

Observe que se você estivesse usando o Infinite Tracing ou tivesse uma conta New Relic na região da UE, o [endpoint](/docs/understand-dependencies/distributed-tracing/trace-api/trace-api-general-requirements-limits#requirements) seria diferente.

Para obter uma explicação sobre `Api-Key` e outros metadados, consulte [Solicitar metadados](/docs/apm/distributed-tracing/trace-api/trace-api-endpoint-requirements-limits#headers-query-parameters).

## Transformação de dados Zipkin [#zipkin-transform]

Para criar uma experiência de pesquisa/consulta consistente, alguns dados do Zipkin serão transformados para corresponder à nomenclatura [do atributo](/docs/using-new-relic/welcome-new-relic/get-started/glossary#attribute) New Relic. Para obter mais informações sobre como armazenamos e estruturamos dados trace , consulte [Como funciona distributed tracing ](/docs/understand-dependencies/distributed-tracing/get-started/how-new-relic-distributed-tracing-works).

<table>
  <thead>
    <tr>
      <th>
        Tag Zipkin
      </th>

      <th>
        Armazenado na New Relic como...
      </th>

      <th>
        Detalhes
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `traceId`
      </td>

      <td>
        `trace.id`
      </td>

      <td>
        Identificador exclusivo para um trace.
      </td>
    </tr>

    <tr>
      <td>
        `id`
      </td>

      <td>
        `id`
      </td>

      <td>
        Identificador exclusivo por um período.
      </td>
    </tr>

    <tr>
      <td>
        `parentId`
      </td>

      <td>
        `parent.id`
      </td>

      <td>
        identificador do span upstream que chamou o serviço.
      </td>
    </tr>

    <tr>
      <td>
        `kind`
      </td>

      <td>
        `kind`
      </td>

      <td>
        `Client` ou `Server`.
      </td>
    </tr>

    <tr>
      <td>
        `name`
      </td>

      <td>
        `name`
      </td>

      <td>
        Nome do intervalo.
      </td>
    </tr>

    <tr>
      <td>
        `duration`
      </td>

      <td>
        `duration.ms`
      </td>

      <td>
        Os períodos do Zipkin v2 devem ter durações especificadas em microssegundos e serão convertidos em milissegundos.
      </td>
    </tr>

    <tr>
      <td>
        localEndpoint: `serviceName`
      </td>

      <td>
        `service.name`
      </td>

      <td>
        Usamos o nome do serviço Zipkin v2 para identificar a entidade que criou esse intervalo. Se nenhum valor ou uma string vazia for fornecida, o intervalo será atribuído a uma entidade "UNKNOWN" e será exibido como tal na interface. Este valor deve ser fornecido para obter uma experiência completa na interface.
      </td>
    </tr>

    <tr>
      <td>
        localEndpoint: `port`
      </td>

      <td>
        `localEndpoint.port`
      </td>

      <td>
        Todos os valores no objeto `localEndpoint` serão nivelados em um atributo span chamado `localEndpoint.key`
      </td>
    </tr>

    <tr>
      <td>
        `tags`
      </td>

      <td>
        relatado como [atributo](/docs/using-new-relic/welcome-new-relic/get-started/glossary#attribute)
      </td>

      <td>
        Pares de valores principais no objeto `tags` no Zipkin v2 serão escritos como span atributo.
      </td>
    </tr>

    <tr>
      <td>
        anotações
      </td>

      <td>
        não suportado
      </td>

      <td>
        Atualmente não oferecemos suporte a anotações na API trace . Os spans não serão rejeitados se contiverem anotações, mas os dados das anotações não serão gravados.
      </td>
    </tr>
  </tbody>
</table>

## Adicionar outra tag/atributo [#other-tags]

Você pode adicionar qualquer tag que desejar ao bloco `tags` , com exceção da [tag restrita](/docs/apm/distributed-tracing/trace-api/trace-api-endpoint-requirements-limits#restricted-attributes). Por exemplo, talvez você queira adicionar um atributo como `customer.id` ou `user.id` para ajudá-lo a analisar seus dados trace . tag será convertida em [atributo](/docs/using-new-relic/welcome-new-relic/get-started/glossary#attribute) New Relic .

Para saber como controlar como os spans aparecem no New Relic (por exemplo, adicionando erros ou definindo um span como um span de armazenamento de dados), consulte [Decorar spans](/docs/apm/distributed-tracing/trace-api/trace-api-decorate-spans-attributes).
