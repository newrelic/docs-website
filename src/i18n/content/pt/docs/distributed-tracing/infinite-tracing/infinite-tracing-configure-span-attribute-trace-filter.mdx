---
title: 'Rastreamento infinito: configurar filtro trace de atributo span'
tags:
  - Understand dependencies
  - Distributed tracing
  - Infinite Tracing
metaDescription: Here is how to customize span attribute filters for a trace observer.
freshnessValidatedDate: never
translationType: machine
---

Além dos filtros aleatórios e de duração, os observadores trace usam um filtro trace de atributo span para encontrar rastreamento útil. Você pode personalizar as regras de filtro para manter ou descartar rastreamentos que possuam spans com atributo específico.

## Visão geral

As regras de filtro são pares de valores principais específicos para observadores trace individuais. Você usa o aplicativo de configurações Infinite Tracing para defini-los e visualizá-los.

O filtro de trace de atributo span permite um total de três regras e, por padrão, duas regras são fornecidas para capturar erros. Embora você possa remover as duas regras de erro padrão, recomendamos que você mantenha as duas regras de erro padrão e adicione uma regra adicional, se precisar de uma.

## Adicione uma regra personalizada [#add-custom-rule]

Aqui está um exemplo de como adicionar uma regra para manter todos os traces que possuem spans com atributo contendo o usuário `sally@some_company.com`:

1. Vá para <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Apps > Your apps > Infinite Tracing settings**</DNT>.

2. Para o observador trace que você deseja modificar, clique no ícone de engrenagem para abrir os filtros.

3. Em <DNT>**Create new rule**</DNT>, insira `user` abaixo de <DNT>**Span key**</DNT> e, no dropdown <DNT>**Key operator**</DNT>, selecione o valor <DNT>**Equals**</DNT>:

   <img
     title="span_key.png"
     alt="Screenshot showing how to enter a span key."
     src="/images/distributed-tracing_screenshot-crop_update-span-key.webp"
   />

4. Em <DNT>**Span value**</DNT>, insira `sally@some_company.com` e, no dropdown <DNT>**Value operator**</DNT>, selecione <DNT>**Equals**</DNT>.

   <img
     title="span_value.png"
     alt="Screenshot showing how to enter a span value."
     src="/images/distributed-tracing_screenshot-crop_update-span-value.webp"
   />

5. No dropdown <DNT>**Observer action**</DNT>, selecione <DNT>**Keep**</DNT>.

   <Callout variant="tip">
     Se você tiver algum rastreamento que corresponda a esta regra, você os verá listados abaixo da regra.
   </Callout>

6. Clique em <DNT>**Add rule**</DNT> para salvar sua regra personalizada.

Quando você adiciona uma regra personalizada, ela entra em vigor imediatamente para esse observador trace .

## Prioridade de regras

Cada regra é avaliada de forma independente. Se alguma regra corresponder, sua ação de observador, <DNT>**Keep**</DNT> ou <DNT>**Discard**</DNT>, será executada. Quando um trace tem intervalos com atributos que correspondem às regras de filtro <DNT>**Keep**</DNT> e <DNT>**Discard**</DNT>, o trace é descartado.

Por exemplo, suponha que você não queira salvar algum erro esperado que contenha uma determinada frase na mensagem de erro. Você pode criar uma regra de filtro <DNT>**Discard**</DNT> que destine a mensagem de erro e ainda retenha todos os outros rastreamentos com erro.
