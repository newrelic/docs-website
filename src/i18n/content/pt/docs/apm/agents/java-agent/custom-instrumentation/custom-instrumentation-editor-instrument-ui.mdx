---
title: 'Editor de instrumentação personalizada: instrumento da interface'
tags:
  - Agents
  - Java agent
  - Custom instrumentation
metaDescription: 'To instrument methods and frameworks in your Java app directly from the APM UI, use New Relic''s custom instrumentation editor.'
freshnessValidatedDate: never
translationType: machine
---

O editor de instrumentação personalizada da New Relic permite que usuários de aplicativos Java implementem instrumentação personalizada por meio da interface do usuário da New Relic. O editor é a escolha preferida quando você não pode modificar o código do seu aplicativo e não possui muitos métodos para instrumentalizá-lo. Veja [instrumentação Java personalizada](/docs/agents/java-agent/custom-instrumentation/java-custom-instrumentation) para outras opções de instrumentação e as razões para usar cada uma.

Para utilizar o editor de instrumentação personalizada: Acesse <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & services > (select a Java app) > Settings > Instrumentation**</DNT>. Utilize o editor de instrumentação personalizada para:

* Instrumento uma framework sem suporte.
* Obtenha insights adicionais sobre métodos não instrumentados.
* [Ignorar transação específica](/docs/agents/java-agent/instrumentation/blocking-instrumentation-java).

## Requisitos

Para utilizar o editor de instrumentação personalizada, você deve atender aos seguintes requisitos:

<table>
  <thead>
    <tr>
      <th width={200}>
        <DNT>
          **Requirement**
        </DNT>
      </th>

      <th>
        <DNT>
          **Comments**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Agente
      </td>

      <td>
        Agente Java versão 3.17.0 ou superior
      </td>
    </tr>

    <tr>
      <td>
        Segurança
      </td>

      <td>
        O usuário do [modo de alta segurança](/docs/accounts-partnerships/accounts/security/high-security) deve [exportar sua instrumentação](#manual-deploy) e importá-la manualmente para seu servidor de aplicativos.
      </td>
    </tr>
  </tbody>
</table>

## Definir instrumentação personalizada [#defining]

Para definir a instrumentação personalizada a partir da interface do usuário do New Relic, use uma sessão de criação de perfil de thread para coletar rastreamento de pilha detalhado de cada thread em seu aplicativo. Se possível, teste sua instrumentação personalizada em um pré-ambiente de produção antes de alterar as regras de instrumentação no seu aplicativo de produção.

Em qualquer ambiente, utilize o editor de instrumentação personalizada para definir os métodos que deseja instrumentar, e aplique suas alterações:

1. Crie uma nova [sessão do criador de perfil de thread](/docs/apm/applications-menu/events/thread-profiler-dashboard#starting). Para garantir que você colete um conjunto de dados suficiente, a duração da sessão será de pelo menos dois minutos.

2. Vá para <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & services > (select an app) > Settings > Instrumentation**</DNT>. Role para baixo até a parte inferior da página até ver a lista <DNT>**Recently collected thread profiles**</DNT> e selecione o perfil de conversa mais recente.

3. Expanda métodos individuais para localizar métodos não instrumentados <Icon style={{color: '#307099'}} name="fe-circle"/> métodos.

4. Para definir regras de instrumentação para nós específicos, selecione <DNT>**Instrument**</DNT> ou <DNT>**Ignore**</DNT> e [personalize as regras, se necessário](#options).

5. Para salvar suas configurações, selecione <DNT>**Confirm instrumentation changes**</DNT>.

6. Implantar suas alterações na [página<DNT>**Instrumentation**</DNT> ](#dashboard):

   * Para implantar suas alterações automaticamente, selecione

     <DNT>
       **Deploy instrumentation changes**
     </DNT>

     .

   * Para implantar suas alterações manualmente, selecione

     <DNT>
       **Export XML**
     </DNT>

     e consulte [exportando sua instrumentação](#manual-deploy).

<Callout variant="caution">
  Evite instrumentado demais sempre que possível. Com cada método adicional instrumentado, o agente usará mais recursos e seu aplicativo incorrerá em mais sobrecarga. Além disso, implantar sua instrumentação causará um breve período de maior sobrecarga. Isso pode retardar visivelmente as solicitações do aplicativo por vários segundos.
</Callout>

Se você aplicou suas alterações na interface, o agente começará a instrumentar seus métodos dentro de alguns [ciclos de coleta](/docs/apm/new-relic-apm/getting-started/glossary#harvest-cycle) (normalmente alguns minutos).

## Instrumentação manual usando o editor [#manual-instrumentation]

Você também pode criar pontos de instrumentação diretamente no editor sem usar um perfil de rosca:

1. No editor de instrumentação personalizada, selecione

   <DNT>
     **Add manual instrumentation**
   </DNT>

   para inserir manualmente uma classe e um método a serem instrumentados ou ignorados.

2. Siga as [regras de instrumentação personalizada por XML ao definir seus pontos de instrumentação](/docs/agents/java-agent/custom-instrumentation/java-custom-instrumentation-xml-examples#file-format).

3. Implantar suas alterações no editor de instrumentação.

Usar esse método para adicionar instrumentação expõe funcionalidades adicionais além do que está disponível em um perfil de thread. Além de combinar métodos por assinatura, você também pode instrumentar métodos por tipo de retorno, métodos em interfaces e por anotação Java.

Esses tipos de instrumentação mais complexos podem ser criados e excluídos no editor, mas não podem ser editados.

<Callout variant="important">
  Se um método estiver marcado como `Instrumentation not allowed`, siga [os procedimentos de resolução de problemas da New Relic para instrumentação personalizada](/docs/agents/java-agent/custom-instrumentation/troubleshooting-java-custom-instrumentation).
</Callout>

## Alterações implantares manualmente [#manual-deploy]

Você também pode usar o editor de instrumentação personalizada para construir um conjunto de instrumentação personalizada, depois exportar um arquivo de instrumentação e importá-lo manualmente para o seu servidor de aplicativos. Isto é necessário para usuário em [modo de alta segurança](/docs/accounts-partnerships/accounts/security/high-security).

Para exportar sua instrumentação, [defina a instrumentação personalizada por meio da interface](#defining). Em seguida, selecione <DNT>**Export xml**</DNT> na página <DNT>**Instrumentation**</DNT> e [importe o arquivo no seu servidor de aplicativos](/docs/agents/java-agent/custom-instrumentation/java-instrumentation-xml#file-location).

## Funções da página [#dashboard]

A página <DNT>**Instrumentation**</DNT> oferece suporte ao seguinte recurso:

<table>
  <thead>
    <tr>
      <th width={200}>
        Se você quiser...
      </th>

      <th>
        Fazem isto...
      </th>
    </tr>
  </thead>

  <tbody>
    <tr id="disable">
      <td>
        Pausar ou desabilitar a instrumentação personalizada
      </td>

      <td>
        * Selecione

          <Icon
            style={{color: '#55555A'}}
            name="fe-slash"
          />

          <DNT>
            **Disable instrumentation**
          </DNT>

          para desativar temporariamente toda a instrumentação personalizada definida pela interface.

        * Selecione

          <DNT>
            **Enable instrumentation**
          </DNT>

          para reativar suas configurações de instrumentação.
      </td>
    </tr>

    <tr id="import">
      <td>
        Importe a instrumentação existente
      </td>

      <td>
        * Você pode importar um [arquivo xml de instrumentação personalizada](/docs/agents/java-agent/custom-instrumentation/java-instrumentation-xml) existente selecionando

          <DNT>
            **Import xml**
          </DNT>

          .

        * Você também pode

          <DNT>
            **Export xml**
          </DNT>

          se [não quiser implantar suas alterações automaticamente](#manual-deploy).
      </td>
    </tr>

    <tr id="edit-delete">
      <td>
        Editar ou excluir pontos de instrumentação
      </td>

      <td>
        Você não pode editar [a instrumentação manual](#manual-instrumentation), apenas excluí-la.

        * Selecione

          <DNT>
            **Remove**
          </DNT>

          para interromper a instrumentação de um método específico.

        * Selecione

          <DNT>
            **Edit**
          </DNT>

          para alterar as regras de instrumentação.
      </td>
    </tr>

    <tr id="history">
      <td>
        Ver histórico de instrumentação
      </td>

      <td>
        * Você pode visualizar cada iteração anterior da sua instrumentação personalizada na guia

          <DNT>
            **Instrumentation history**
          </DNT>

          , incluindo quem implantou as alterações e quando.

        * Você pode restaurar uma versão antiga selecionando

          <DNT>
            **export**
          </DNT>

          para baixar uma cópia do arquivo de instrumentação personalizada e depois [importá](#import) -lo para o editor de instrumentação.
      </td>
    </tr>
  </tbody>
</table>

## Opções de instrumentação [#options]

Você pode definir as seguintes opções com o editor de instrumentação personalizada:

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        <DNT>
          **Instrumentation options**
        </DNT>
      </th>

      <th>
        <DNT>
          **Comments**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Métodos de instrumento
      </td>

      <td>
        Comece instrumentado o método selecionado. Os métodos instrumentados ficarão visíveis na interface do New Relic. <DNT>**Instrument**</DNT> oferece suporte às seguintes opções filhas:

        * <DNT>
            **Name the transaction (transaction name)**
          </DNT>

          : Substitui o nome da transação padrão, definido pelas [regras de nomenclatura automática](/docs/agents/java-agent/instrumentation/naming-web-transactions). Em vez disso, a interface usará o nome listado.

        * <DNT>
            **Start the transaction when this method executes**
          </DNT>

          : em vez de incluir métricas desta métrica dentro de sua transação pai, crie uma nova transação para este método. [O comportamento do agente](#start-results) com esta opção depende da existência de uma transação pré-existente no encadeamento.
      </td>
    </tr>

    <tr>
      <td>
        Report atributo personalizado
      </td>

      <td>
        O parâmetro do método pode ser capturado como atributo em uma transação. A New Relic relata esses atributos para rastreamento de transação, erros de rastreamento e `Transaction` evento.

        Por motivos de segurança, a captura de atributo personalizado usando o Custom Instrumentation Editor é <DNT>**disabled**</DNT> por padrão e não pode ser ativada enquanto você estiver usando [o modo de alta segurança](/docs/agents/java-agent/getting-started/apm-agent-security-java). Se você deseja reportar um atributo personalizado utilizando o editor de instrumentação personalizada e não deseja que o agente Java esteja em modo de alta segurança, desative [o modo de alta segurança](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#cfg-enable_high_security) e adicione o seguinte texto no bloco `common:` do seu <DNT>**newrelic.yml**</DNT>:

        ```yml
        reinstrument:
            attributes_enabled: true
        ```
      </td>
    </tr>

    <tr>
      <td>
        Ignorar transação
      </td>

      <td>
        [Ignore totalmente esse método](/docs/agents/java-agent/instrumentation/blocking-instrumentation-java). O agente não reportará métricas deste método, e o método não contribuirá para os cálculos do Apdex.
      </td>
    </tr>
  </tbody>
</table>

## Resultados com opção "iniciar" [#start-results]

Se você selecionar <DNT>**Instrument methods > Start the transaction when this method executes**</DNT>, o comportamento do agente dependerá de haver uma transação pré-existente no encadeamento.

Quando a classe ou método é instrumentado:

<table>
  <thead>
    <tr>
      <th colSpan={2}>
        A sinalização "<DNT>**Start the transaction"**</DNT> está marcada?
      </th>
    </tr>

    <tr>
      <th>
        <DNT>
          **Yes**
        </DNT>
      </th>

      <th>
        <DNT>
          **No**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Se uma transação pré-existente <DNT>**is**</DNT> nesse encadeamento e o sinalizador <DNT>**Start the transaction**</DNT> <DNT>**is**</DNT> estiver marcado:

        1. O agente ignora o sinalizador

           <DNT>
             **Start the transaction**
           </DNT>

           .

        2. O agente inclui a classe/método na transação pré-existente.
      </td>

      <td>
        Se uma transação pré-existente <DNT>**is**</DNT> nesse thread e o sinalizador <DNT>**Start the transaction**</DNT> **não** estiverem marcados, o agente inclui a classe/método na transação pré-existente.
      </td>
    </tr>

    <tr>
      <td>
        Se uma transação **não** estiver nesse encadeamento e o sinalizador <DNT>**Start the transaction**</DNT> <DNT>**is**</DNT> estiver marcado:

        1. O agente descobre que não há transação atual.
        2. O agente cria uma nova transação começando pela classe/método que você instrumentou.
      </td>

      <td>
        Se uma transação **não** estiver nesse encadeamento e o sinalizador <DNT>**Start the transaction**</DNT> **não** estiver verificado:

        1. O agente procura uma transação nesse thread e não a encontra.
        2. A métrica foi descartada.
      </td>
    </tr>
  </tbody>
</table>
