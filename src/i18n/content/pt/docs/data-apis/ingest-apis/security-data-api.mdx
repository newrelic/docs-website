---
title: Envie dados usando a API de dados de segurança
metaDescription: Send your security data using our security data API.
freshnessValidatedDate: never
translationType: machine
---

Envie vulnerabilidades personalizadas ou dados de segurança para a New Relic por meio de nossa API de dados de segurança por meio de uma simples solicitação POST. Use a API se atualmente não oferecermos suporte ao seu serviço de segurança com uma integração ou se o envio de dados de segurança por meio de uma API se adequar melhor ao seu fluxo de trabalho personalizado.

## Pré-requisitos

* Uma New Relic

  <InlinePopover type="licenseKey"/>

  para a conta para a qual você deseja relatar dados.

## Enviar dados para New Relic [#send-data]

Para enviar vulnerabilidades ou outros dados de segurança, envie um objeto JSON via método POST contendo um array de descobertas. Cada objeto na matriz descreve uma vulnerabilidade detectada ou outro evento de segurança. Certifique-se de incluir o endpoint de segurança para New Relic. Use um dos seguintes de acordo com sua região:

* Para os EUA, `https://security-api.newrelic.com/security/v1`
* Para a UE, `https://security-api.service.eu.newrelic.com/security/v1`

Aqui está um exemplo de solicitação POST. Veremos os componentes individuais na próxima seção:

```shell
curl -X POST https://security-api.newrelic.com/security/v1 \
  -H "Content-Type: application/json" \
  -H "Api-Key: INSERT_YOUR_API_KEY " \
  -d '{
    "findings": [
        {
            "source": "Insert security tool name, such as Snyk",
            "title": "Insert a short description of security issue",
            "message": "Insert long description and remediation advice",
            "issueType": "Insert Library|Container|Host Vulnerability",
            "issueId": "Insert vulnerability identifier like CVE, CWE, CIS, etc.",
            "issueVendorId": "Vendor-specific identifier if different from issueId",
            "issueInstanceKey": "Insert the unique path to this instance of the issue",
            "disclosureUrl": "Insert a URL to additional information on the issue",
            "severity": "Insert CRITICAL|HIGH|MEDIUM|LOW|INFO",
            "remediationExists": Insert boolean true | false (no quotation marks),
            "remediationRecommendation": "Explain the action to take",
            "detectedAt": "Insert timestamp when detected, in milliseconds since epoch",
            "entityType": "Insert Host|Service|Repository|Image|AWS",
            "entityLookupValue": "Insert a URL to find entity",
            "entityGuid": "ABCDEFG",
            "customFields": {
                "sourceDetailInfo": "DecadeCoffee"
            }
        }
    ]
}'
```

## Parâmetro URL [#url-params]

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        Parâmetro
      </th>

      <th>
        Descrição
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `repository`
      </td>

      <td>
        Opcional: A URL do repositório do aplicativo com sua integração.
      </td>
    </tr>
  </tbody>
</table>

## Os campos obrigatórios [#req-fields]

Os seguintes campos são obrigatórios na solicitação:

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        Campo
      </th>

      <th>
        Descrição
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `source`
      </td>

      <td>
        O nome amigável da ferramenta de segurança que gerou esse evento, como `Snyk` ou `Dependabot`.
      </td>
    </tr>

    <tr>
      <td>
        `title`
      </td>

      <td>
        Um breve resumo (50-100 caracteres) do problema. Deve ser adequado para uso como título de página ou conteúdo de célula de tabela.
      </td>
    </tr>

    <tr>
      <td>
        `message`
      </td>

      <td>
        Descrição detalhada do problema, incluindo explicação da descoberta e como remediá-la. Pode incluir descontos.
      </td>
    </tr>

    <tr>
      <td>
        `issueType`
      </td>

      <td>
        Um tipo de problema compatível com New Relic. Atualmente são:

        * `Library Vulnerability`
        * `Container Vulnerability`
        * `Host Vulnerability`
      </td>
    </tr>

    <tr>
      <td>
        `issueId`
      </td>

      <td>
        Um identificador padrão para o problema detectado. Por exemplo, o identificador CVE ou CWE, ou os benchmarks da regra CIS. Se várias ferramentas detectarem o mesmo problema, o `issueId` deverá ser o mesmo em todas as ferramentas.
      </td>
    </tr>

    <tr>
      <td>
        `severity`
      </td>

      <td>
        O consenso definido pela comunidade sobre a gravidade do problema ou a ferramenta de verificação. Este deve ser um dos seguintes:

        * `CRITICAL`
        * `HIGH`
        * `MEDIUM`
        * `LOW`
        * `INFO`
      </td>
    </tr>

    <tr>
      <td>
        `entityType`
      </td>

      <td>
        Usado para correlacionar o problema relatado a uma [entidade](/docs/new-relic-solutions/new-relic-one/core-concepts/what-entity-new-relic/) conhecida pela plataforma New Relic. Deve ser um dos tipos reconhecidos pela API de pesquisa de entidade ou casos especiais suportados pela API de segurança (`Image` e `AWS`).

        Um exemplo com `entityLookupValue` seria:

        ```json
        "entityType": "AWS",
        "entityLookupValue": "arn:aws:rds:us-east-2:403720000000:db:my-database"
        ```
      </td>
    </tr>

    <tr>
      <td>
        `entityLookupValue`
      </td>

      <td>
        Usado para encontrar a entidade apropriada desse tipo.

        Um exemplo com `entityType` seria:

        ```json
        "entityType": "Repository",
        "entityLookupValue": "https://github.com/newrelic/ruby_agent"
        ```
      </td>
    </tr>

    <tr>
      <td>
        `entityGuid`
      </td>

      <td>
        Um identificador exclusivo para uma entidade específica dentro da plataforma New Relic , essencial para rastrear e gerenciar aplicativos, serviços ou componentes de infraestrutura.

        Um exemplo de `entityGuid` seria:

        ```
        "entityGuid": "MTI1NjM5fEFQfEFQUExJQ0FUSU9OfDEyMzQ1Njc4OQ"
        ```
      </td>
    </tr>
  </tbody>
</table>

## Campos opcionais [#optional-fields]

Sua solicitação pode conter qualquer um dos seguintes campos opcionais:

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        Campo
      </th>

      <th>
        Descrição
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `cvssScore`
      </td>

      <td>
        A pontuação CVSSv3 atribuída ao CVE, como um número de ponto flutuante em JSON/
      </td>
    </tr>

    <tr>
      <td>
        `cvssVector`
      </td>

      <td>
        O vetor CVSSv3 que descreve este CVE.
      </td>
    </tr>

    <tr>
      <td>
        `issueInstanceKey`
      </td>

      <td>
        Um caminho ou identificador que identifica exclusivamente a ocorrência desta instância de vulnerabilidades de outras instâncias no mesmo repositório, serviço, entidade ou conta. Por exemplo: caminho completo para o arquivo mais o número da linha para uma descoberta do código-fonte ou caminho para um binário vulnerável em um host ou em uma imagem de contêiner. A chave da instância deve ser idêntica para descobertas repetidas do mesmo problema, ao mesmo tempo em que diferencia várias instâncias que precisam de correção. Se não for fornecido, o `entityGuid` resolvido ou `entityLookupValue` fornecido pelo usuário será usado.
      </td>
    </tr>

    <tr>
      <td>
        `issueVendorID`
      </td>

      <td>
        Identificador específico do fornecedor para o problema, se for diferente de `issueId`.
      </td>
    </tr>

    <tr>
      <td>
        `disclosureUrl`
      </td>

      <td>
        Um URL para informações adicionais sobre o problema, seja do site do fornecedor da ferramenta de origem ou de referências de divulgação pública. Deve ser uma fonte confiável.
      </td>
    </tr>

    <tr>
      <td>
        `remediationExists`
      </td>

      <td>
        Booleano que indica se existe uma correção para o problema.
      </td>
    </tr>

    <tr>
      <td>
        `remediationRecommendation`
      </td>

      <td>
        Texto resumido explicando a ação a ser tomada para remediação. Para dependência de terceiros, utilize o formulário `upgrade PACKAGE_NAME to X.Y.Z`
      </td>
    </tr>

    <tr>
      <td>
        `detectedAt`
      </td>

      <td>
        Timestamp de data/hora de quando o problema foi detectado, em milissegundos desde a epoch. Caso não sejam fornecidos, utilizamos o momento em que os dados são enviados para a New Relic.
      </td>
    </tr>
  </tbody>
</table>
