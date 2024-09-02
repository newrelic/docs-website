---
title: Métrica al nível do código
tags:
  - Agents
  - Ruby agent
  - Supported features
metaDescription: Code-level metrics for Ruby can be displayed in your IDE using the New Relic CodeStream extension.
freshnessValidatedDate: never
translationType: machine
---

O nível do código métrico permite que os desenvolvedores que usam a [extensão New Relic CodeStream](/docs/codestream/observability/code-level-metrics) vejam os dados APM exibidos contextualmente em seu IDE, juntamente com métodos individuais no código. Isso permite que os desenvolvedores sejam mais proativos na abordagem de problemas de desempenho à medida que escrevem e revisam o código.

## Começando

Primeiro, [instale](/docs/codestream/start-here/install-codestream) a extensão New Relic CodeStream no IDE compatível de sua escolha e login.

<Callout variant="important">
  Nível do código métrica estão disponíveis no agente Ruby versão 8.8.0 e superior. Para versões 8.10.0 e superiores, o nível do código métrico está habilitado por padrão. Para as versões 8.8.0 e 8.9.0 devem ser habilitados via configuração. Para ativar o nível do código métrico, defina `code_level_metrics.enabled: true` em `newrelic.yml` ou `NEW_RELIC_CODE_LEVEL_METRICS_ENABLED=true` como uma variável de ambiente.
</Callout>

## Atributo do agente

O agente Ruby reporta e anexa o seguinte atributo aos spans produzidos pela sua aplicação:

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        <DNT>
          **Name**
        </DNT>
      </th>

      <th>
        <DNT>
          **Description**
        </DNT>
      </th>

      <th>
        <DNT>
          **Example**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `code.function`
      </td>

      <td>
        O nome da função instrumentada (método Ruby). Observe que os métodos de classe serão prefixados por `self.`.
      </td>

      <td>
        criar
      </td>
    </tr>

    <tr>
      <td>
        `code.filepath`
      </td>

      <td>
        O caminho absoluto para o arquivo de código-fonte no qual `code.function` está definido
      </td>

      <td>
        /app/app/controllers/widgets\_controller.rb
      </td>
    </tr>

    <tr>
      <td>
        `code.lineno`
      </td>

      <td>
        O número da linha onde `code.function` é definido em code.filepath
      </td>

      <td>
        1138
      </td>
    </tr>

    <tr>
      <td>
        `code.namespace`
      </td>

      <td>
        O namespace (nome da classe ou módulo) no qual `code.function` é definido
      </td>

      <td>
        Controlador de widgets
      </td>
    </tr>
  </tbody>
</table>

<Callout variant="important">
  Nem todos os métodos no código da sua aplicação serão instrumentados com o atributo acima. A partir da versão 8.10.0, o agente Ruby fornecerá nível do código métrico para métodos controladores Rails, métodos `ActiveJob` e qualquer método Ruby que tenha sido configurado para ser rastreado manualmente.
</Callout>