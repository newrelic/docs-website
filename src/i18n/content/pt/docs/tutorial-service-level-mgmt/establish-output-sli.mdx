---
title: Estabeleça um SLI de desempenho de saída
metaDescription: 'New Relic observability maturity series: our service level management guide shows you how to easily measure and communicate the overall health, performance, and quality of your digital products and services to all stakeholders.'
freshnessValidatedDate: never
translationType: machine
---

A capacidade de gerenciar e consultar grandes quantidades de dados de forma eficiente é um dos recursos principais do New Relic. Medimos a integridade da saída da consulta da mesma forma que você mede seus recursos voltados ao cliente: pela rapidez e sem erros com que as solicitações de consulta HTTP recebem respostas. Chamamos isso de desempenho de saída e você pode medir SLIs para monitorar isso. Depois de configurar um SLI de desempenho de saída usando o procedimento abaixo, você pode acompanhar o tempo de resposta e a taxa de erro do seu aplicativo.

<Steps>
  <Step>
    ## Encontre seu aplicativo

    Primeiro, você precisa ter certeza de ter configurado o aplicativo para o qual deseja criar o SLI. Se você não conseguir encontrá-lo ou ainda não o configurou, faça o seguinte antes de continuar:

    * instrumento seu aplicativo principal com [o agente New Relic APM ](/docs/apm/new-relic-apm/getting-started/introduction-apm).
    * Nomeie seu aplicativo com uma convenção de nomenclatura familiar para facilitar sua localização.
    * Localize a sua candidatura em [one.newrelic.com > All entities](https://one.newrelic.com/nr1-core).

      Em **All entities**, encontre seu aplicativo (tipo de entidade `Services - APM`) e selecione-o. Você deverá ver a tela de visão geral abaixo, mas **não clique em `Service levels` ainda.**

      <img
        alt="APM Overview screenshot"
        src="/images/apm_screenshot-full_overview-screen.webp"
      />
  </Step>

  <Step>
    ## Identifique seu limite de serviço [#identifying-service-boundary]

    Em seguida, você vai querer garantir que está medindo o resultado do seu serviço. Embora a dependência de um aplicativo desempenhe um papel no tempo de resposta e nas taxas de sucesso, você pode medir o tempo de resposta final e total e as taxas de sucesso no ponto em que a solicitação é recebida e respondida.

    Você pode usar [mapas de serviço](/docs/new-relic-one/ui-data/service-maps/how-use-service-maps/) e [mapas automáticos](/docs/new-relic-one/ui-data/automaps) para ajudar a determinar se o aplicativo que você está vendo é uma dependência ou executa a API do endpoint.

    No exemplo de captura de tela abaixo, você pode ver todos os aplicativos que suportam o processamento de pedidos. Começamos selecionando o nº 2 (Order-Composer). Em seguida, clicamos em **Service maps** e descobrimos que o **Order-Composer** é na verdade uma dependência. Você precisará selecionar o nº 1 (Processamento de pedidos) para estabelecer um verdadeiro nível de serviço de saúde.

    <img
      alt="Service map example"
      src="/images/apm_screenshot-crop_service-boundary.webp"
    />

    <Callout variant="tip">
      Sua equipe só pode ser responsável pela dependência do **Order-Composer** . Nesse caso, seu próprio nível de serviço no **Order-Composer** podemonitor automaticamente o desempenho. Certifique-se tag seus próprios não clientes que enfrentam o nível de serviço como `customer-facing:false` para permitir uma melhor filtragem nos relatórios de saúde. Além disso, considere trabalhar com o endpoint voltado para o cliente (#1 Order-Processing) durante a observabilidade para criar um verdadeiro desempenho de saída, um nível de serviço de conectividade de entrada e níveis de serviço ao cliente.
    </Callout>
  </Step>

  <Step>
    ## Crie sua baseline

    Ao criar o nível de serviço, você deve primeiro observar o desempenho de saída do seu aplicativo como uma baseline, que deve ser estabelecida para implementar o nível de serviço. A criação de uma baseline permite medir o desempenho de um serviço como ponto de referência e, em seguida, usar relatórios de nível de serviço para descobrir se você está ou não atingindo essa baseline. Você pode criar uma baseline para praticamente qualquer conjunto de dados; no entanto, você usa fórmulas e recomendações diferentes em casos de uso diferentes.

    Você pode usar o tempo de resposta (latência) e a porcentagem de não erros (sucesso) como linha de base inicial. Ao fazer isso, você cria uma métrica de integridade de confiabilidade.

    Recomendamos um histórico de uma a duas semanas de dados de desempenho para estabelecer uma boa baseline. A sazonalidade e o pico de uso não devem prejudicar seu desempenho, e quanto mais histórico você incluir em sua medição, maior será a probabilidade de incluir diferentes bases de código dos lançamentos. A implantação anterior, por menor que seja, poderá distorcer seus resultados.

    Aqui está um exemplo de consulta NRQL para o destino recomendado de metas de nível de serviço de sete dias para latência:

    ```
    FROM Transaction SELECT percentile(duration, 95) AS 'Latency Baseline SLI' WHERE appName='Order-Processing' SINCE 1 WEEK AGO
    ```

    <img
      alt="Latency Baseline"
      src="/images/apm_screenshot-full_latency-baseline.webp"
    />

    Para obter uma baseline bem-sucedida (sem erros), tente a consulta a seguir. Lembre-se de substituir `Order-Processing` pelo nome do seu próprio aplicativo.

    ```
    FROM Transaction SELECT percentage(count(*), WHERE error is false) AS 'Success Baseline SLI' SINCE 1 WEEK AGO WHERE appName='Order-Processing'
    ```
  </Step>

  <Step>
    ## Crie seu nível de serviço

    **Observação:** se você não vir o botão **Add a service level** , verifique com o administrador do New Relic sobre suas permissões.

    Nossa plataforma calcula automaticamente o <InlinePopover type="apm"/>recomendado e a linha de base do Browser para você. Encontre os dados APM do seu aplicativo que você escolheu na Etapa 2 e clique em **Service levels** e você deverá ver a visualização abaixo:

    <img
      alt="Service levels start from APM"
      src="/images/apm_screenshot-full_sl-start-from-apm.webp"
    />

    Clique em **Add baseline service level objectives** para criar seu SLI de latência e SLI de sucesso, bem como seus respectivos objetivos. Você pode visualizar e alterar todas as configurações clicando no ícone de reticências no canto superior direito de cada scorecard do SLO.

    <Callout variant="tip">
      Os dados levam aproximadamente 10 minutos para preencher as pontuações do SLO porque usamos o [serviço evento-to-métrica](/docs/data-apis/convert-to-metrics/create-metrics-other-data-types/) para longevidade dos dados e desempenho de consulta. Demora um pouco para que a conversão ocorra e comece a preencher os dados.
    </Callout>
  </Step>
</Steps>

<UserJourneyControls nextStep={{"path":"/docs/tutorial-service-level-mgmt/establish-input-sli/","title":"Próxima Etapa","body":"Aprenda como criar indicadores de entrada e objetivos"}}/>
