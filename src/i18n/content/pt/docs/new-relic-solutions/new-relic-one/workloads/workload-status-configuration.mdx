---
title: Configuração de status de workload
tags:
  - New Relic
  - Use New Relic
  - Workloads
metaDescription: 'How to configure your workload status, and how to obtain the workload status.'
freshnessValidatedDate: never
translationType: machine
---

Você pode obter o status da sua workload de duas maneiras:

* <DNT>
    **Automatic status**
  </DNT>

  : o status é calculado a partir de uma série de regras.

* <DNT>
    **Static status**
  </DNT>

  : o status substitui qualquer cálculo automático do status da workload .

Para gerenciar as configurações de status workload , acesse a página <DNT>**Health status**</DNT> de uma workload.

<img
  title="new-relic-workload-status-main.png"
  alt="new-relic-workload-status-main.png"
  src="/images/solutions_screenshot-crop_workload-status-main.webp"
/>

## Configurar o status automático workload [#configure-automatic]

Você pode usar o status de cada uma das entidades que pertencem a uma workload para resumir o status da workload em um único valor.

Nem todas as entidades numa workload são igualmente importantes do ponto de vista do desempenho, dos erros ou da disponibilidade:

* Você pode querer que sua workload seja exibida como interrompida se um monitor ou serviço essencial do Sintético tiver um incidente crítico em andamento.

* No entanto, se a sua infraestrutura de host tiver certa redundância e resiliência a interrupções, talvez você não precise alterar o status workload de

  <DNT>
    **Operational**
  </DNT>

  apenas porque um único host está com um incidente de alerta em andamento.

Por padrão, quando você cria uma workload , são adicionadas as seguintes regras para calcular seu status:

1. Para tipos de entidade próximos à experiência digital (ou seja, monitor Sintético, aplicativo de browser, aplicativo móvel e serviços), o pior status disponível é propagado.
2. Para qualquer outro tipo de entidade, que são basicamente entidades de infraestrutura, é propagado o melhor status disponível.

### Crie regras personalizadas [#create-custom-tules]

Para personalizar o status automático workload , você pode definir suas próprias regras. Uma regra consiste em um grupo de entidades e um modo roll up:

<img
  title="new-relic-workloads-status-rule.png"
  alt="new-relic-workloads-status-rule.png"
  src="/images/new-relic-workloads-status-rule.webp"
/>

1. Defina o grupo de entidade com base nos tipos de entidade, valores tag , GUIDs ou uma combinação de todos eles.
2. Decida como propagar o status dessas entidades para o status do grupo:

* <DNT>
    **Roll up the best status**
  </DNT>

  : o estatuto do grupo corresponde ao estatuto menos crítico de todas as entidades pertencentes. Utilize esta opção quando desejar que o status do grupo esteja operacional desde que pelo menos uma entidade do grupo ainda esteja operacional.

* <DNT>
    **Roll up the worst status**
  </DNT>

  : o status do grupo corresponde ao status mais crítico de todas as entidades pertencentes. Use esta opção quando desejar que o status do grupo indique uma degradação ou interrupção do serviço assim que uma entidade do grupo não estiver operacional. Você também pode decidir acumular o pior status somente depois que um determinado montante de entidades não estiver operacional.

3. Salve a regra e prossiga para criar outra, se necessário.

O status final workload é igual ao pior status entre todos os status de grupos individuais.

<Callout variant="important">
  Neste cálculo final, qualquer status calculado automaticamente será substituído se um [status estático](#configure-static) tiver sido configurado por um gerenciador workload .
</Callout>

### Uma regra para entidade restante [#remaining-entities]

Para uma configuração de status mais fácil e dinâmica, você pode usar um tipo de roll-up para todas as entidades que não são avaliadas em nenhuma outra regra que você tenha definido anteriormente. Em particular, se você não adicionar nenhuma outra regra, a regra para entidade restante levará em conta toda a entidade na workload.

Quando combinada com a opção de agrupamento por tipo de entidade, essa regra especial permite que você tenha uma noção geral de como está o desempenho de cada tipo de entidade em sua workload , sem precisar configurar uma regra para cada tipo de entidade. Portanto, recomendamos que você sempre defina uma regra para todas as entidades restantes agrupadas por tipo e acumule seu pior status para detectar rapidamente quando todas as entidades em uma camada da sua workload stack não estão operacionais.

<Callout variant="important">
  Após seis meses de inatividade, interromperemos automaticamente o cálculo do status. Você pode reativá-lo acessando a workload e configurando-a como ativa.
</Callout>

## Definir um status workload estático [#configure-static]

Se quiser comunicar o status da sua workload , independentemente de qualquer [cálculo automático](#configure-automatic) baseado em regras, você poderá definir um valor de status estático para sua workload a partir de um dos [valores de status disponíveis](/docs/workload-status#obtain-status).

Isto é útil durante tarefas de manutenção para comunicar a outras equipas que o estado da sua workload foi interrompido, para fornecer mais informações ou para fornecer o tempo que espera que a workload esteja novamente operacional.

<Callout variant="tip">
  Se você precisar comunicar regularmente um status temporário devido aos seus processos de implantação ou operações, poderá automatizar a configuração do status estático integrando a [API](/docs/apis/nerdgraph/tutorials/nerdgraph-workloads-api-tutorials) ao seu fluxo de trabalho.
</Callout>

Para configurar um status workload estático:

1. Defina um valor de status estático.
2. Opcionalmente, escreva um breve resumo do status e uma descrição mais longa do que está acontecendo com a workload.
3. Verifique se o status estático está ativado.

Qualquer status estático configurado sempre substitui quaisquer outros valores de status [calculados automaticamente](#configure-automatic).

## Entenda o valor do status [#understand-value]

Se você acessar a página <DNT>**Health status**</DNT>, poderá ver como o cálculo do status foi configurado e o resultado de todas as regras e/ou status estáticos que foram considerados para calcular o valor do status da workload global.

Qualquer alteração feita na configuração de status entrará em vigor somente depois que você salvar as alterações. Para sua conveniência, enquanto você define as regras automáticas ou um status estático, você terá uma prévia de qual seria o resultado do status se você salvasse a configuração naquele ponto.

<img
  title="workloads_preview_1.png"
  alt="workloads_preview_1.png"
  src="/images/solutions_screenshot-crop_workloads-preview.webp"
/>
