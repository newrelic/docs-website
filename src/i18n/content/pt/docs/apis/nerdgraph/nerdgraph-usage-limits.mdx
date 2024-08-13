---
title: Limites de uso do NerdGraph
tags:
  - APIs
  - GraphQL API
  - NerdGraph
  - Rate Limit
  - Concurrency Limit
metaDescription: New Relic NerdGraph limits the number of concurrent connections users make.
freshnessValidatedDate: '2023-08-08T00:00:00.000Z'
translationType: machine
---

Nossa API NerdGraph impõe um limite de solicitações simultâneas por usuário.

## Limitar detalhes [#limit-enforcement]

NerdGraph impõe um limite de <DNT>**25 concurrent requests per user**</DNT>.

A taxa de solicitações que você faz não é limitada, apenas o número de <DNT>**concurrent**</DNT> solicitações.

A simultaneidade é rastreada e aplicada por usuário, **não** por chave de usuário. Todas as solicitações feitas pelo mesmo usuário usando várias chaves de usuário contribuirão para o total de solicitações simultâneas desse usuário.

Podemos permitir mais de 25 solicitações simultâneas por usuário, com base no estado do sistema, mas <DNT>**only 25 concurrent requests are guaranteed.**</DNT>

Se as solicitações forem limitadas, elas serão rejeitadas com o código de status HTTP `429`. À medida que suas solicitações em andamento forem concluídas e sua simultaneidade total cair, novas solicitações começarão automaticamente a ter sucesso novamente.

## Evite atingir o limite [#avoid-limit]

Se você estiver fazendo solicitações simultâneas ao NerdGraph em seu código, é importante limitar a simultaneidade total do lado do cliente. Por exemplo, se você precisar fazer 100 solicitações, poderá:

* Implemente uma solução de pooling para garantir que as solicitações sejam feitas apenas quando uma conexão simultânea for detectada como disponível.
* Envie as solicitações em lotes de 25 chamadas simultâneas.
* Substitua o código simultâneo por código sequencial e faça uma solicitação somente após a conclusão da solicitação anterior.

Para exemplos de código relacionados à implementação de algumas dessas recomendações, consulte [Tutorial de simultaneidade do NerdGraph](/docs/apis/nerdgraph/examples/nerdgraph-concurrency-tutorial)

Esteja atento ao código executado em vários lugares ao mesmo tempo. Mesmo o código não simultâneo criará simultaneidade se estiver sendo executado em vários locais.
