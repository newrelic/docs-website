---
title: O gráfico Sankey mostra o erro 'nenhum dado encontrado'
tags:
  - Integrations
  - Network monitoring
  - Troubleshooting
metaDescription: The sankey chart for flow analysis is showing a 'no data found' error in your UI.
freshnessValidatedDate: never
translationType: machine
---

## Problema [#problem]

Ao analisar a telemetria de fluxo, adicionar filtros e/ou facetas ao diagrama Sankey resulta em um erro de que nenhum dado foi encontrado.

<img
  title="Sankey No Data Found Error"
  alt="Sankey No Data Found Error"
  src="/images/network_screenshot-crop_sankey-no-data.webp"
/>

<figcaption>
  Erro encontrado ao analisar a telemetria de fluxo.
</figcaption>

Este erro ocorre quando a consulta NRQL subjacente gerada pelos filtros e/ou facetas aplicadas ao diagrama sankey não contém a telemetria necessária para renderizar o gráfico.

## Solução [#solution]

Ao renderizar o gráfico sankey, é criada dinamicamente uma consulta NRQL subjacente que possui dependência específica baseada nas seleções do usuário. No mínimo, é necessário que os registros de fluxo encontrados contenham os seguintes campos:

* `sample_rate`

* `provider = 'kentik-flow-device'`

* `in_bytes` ou `in_pkts`, dependendo se você selecionou a alternância

  <DNT>
    **Byte traffic**
  </DNT>

  ou

  <DNT>
    **Packet traffic**
  </DNT>

  para o gráfico

A seleção de facetas do usuário também será necessária. Por exemplo, na captura de tela acima, os campos `CustomBytes1` e `CustomBytes2` não existem nos registros de fluxo da conversa usando os endereços IP de origem e destino no filtro.

Para resolver esse problema, primeiro investigue a consulta NRQL subjacente do seu gráfico sankey selecionando a ação <DNT>**View query**</DNT> no ícone superior direito do gráfico e identifique quaisquer campos que retornem valores nulos ou vazios da sua consulta. A próxima etapa seria atualizar o modelo de fluxo no seu exportador de fluxo para garantir que todos os campos necessários sejam enviados para o agente KTranslate conforme esperado.
