---
title: Ferramenta profiler de thread
tags:
  - APM
  - APM UI pages
  - Events
metaDescription: 'New Relic Java, .NET, Python, Ruby agents: You can use the thread profiler in production to identify bottlenecks in an application.'
freshnessValidatedDate: never
translationType: machine
---

O thread profiler é uma ferramenta de criação de perfil de baixo impacto que pode ser usada na produção para identificar gargalo em um aplicativo. Ele funciona capturando periodicamente (100 ms) o stack trace de cada thread por um período especificado. Ao final da duração especificada, o rastreamento de pilha é agregado para construir uma árvore. A contagem de chamadas na árvore corresponde ao número de vezes que essa função esteve presente no rastreamento de pilha no mesmo contexto.

Embora a árvore de chamadas não possa capturar toda a execução, uma amostra grande o suficiente pode ser uma boa representação do comportamento do aplicativo. Isso fornece insights sobre as funções "quentes" do aplicativo onde a maior parte do tempo é gasto. Com este escopo, as entradas amostradas com menos de 0,05% são omitidas.

## Agente compatível [#agents]

Este recurso está disponível apenas para agentes e versões específicas:

* Agente Java versões 1.2.004.6 ou superior

* .NET:

  * Framework: versões do agente 2.12.146.0 ou superior
  * .NET Core 2.0: versões do agente 8.3.360.0 ou superior (somente Windows)
  * Linux: .NET Core 3.0 ou superior e versões de agente 8.23 ou superior

* Python: versões do agente 1.7.0 ou superior

* Ruby: agente versões 3.5.5 ou superior

## Inicie o profiler [#starting]

O recurso Thread profiler está habilitado por padrão. Você também pode ativá-lo ou desativá-lo no arquivo de configuração do agente:

* Java: `thread_profiler.enabled`

* NET: você

  <DNT>
    **cannot**
  </DNT>

  desativa o thread profiler com aplicativos .NET.

* Python: `thread_profiler.enabled`

* Ruby: `thread_profiler.enabled`

Quando ativado, você pode visualizar o thread profiler em nossa interface do usuário:

1. Vá para

   <DNT>
     **[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & services > (select an app) > Events > Thread profiler**
   </DNT>

   .

2. Selecione o host no qual deseja executar o profiler .

3. Defina a duração da sessão de criação de perfil.

4. Selecione

   <DNT>
     **Start profiler**
   </DNT>

   .

Isso aciona o agente para iniciar o thread profiler durante o próximo ciclo de coleta (a cada minuto) e capturar dados pela duração especificada. Registramos backtraces de thread, estejam ou não em estado executável no momento em que a amostra é coletada. Threads que estão suspensos ou bloqueados no IO podem aparecer na árvore de chamadas.

<img
  title="Thread profiler overview"
  alt="This is an image of the thread profiler."
  src="/images/apm_screenshot-full_thread-profiler-view.webp"
/>

<figcaption>
  <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & services > (select an app) > Events > Thread profiler**</DNT>: use esta página para definir as configurações de duração do thread profiler e para visualizar os resultados.
</figcaption>

## Ver dados do perfil [#viewing]

Depois que o profiler terminar a execução, o agente reportará os dados do perfil. A árvore de chamadas aparece automaticamente na página <DNT>**Thread profiler**</DNT> . As porcentagens na árvore de chamadas representam a porcentagem de amostras de backtrace de encadeamento nas quais cada caminho de chamada apareceu durante a sessão de criação de perfil. A coleta de dados iniciou-se no momento do PERFIL COLETADO.

A página codifica por cores os resultados da árvore:

* Vermelho: percentagens superiores a 30%
* Amarelo: percentuais superiores a 10%
* Preto: percentagens inferiores a 10%

<table>
  <thead>
    <tr>
      <th width={200}>
        <DNT>
          **If you want to...**
        </DNT>
      </th>

      <th>
        <DNT>
          **Do this...**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Alterar a forma como as informações do perfil da conversa aparecem
      </td>

      <td>
        Selecione suas opções de opções disponíveis em <DNT>**Tree settings**</DNT> e selecione <DNT>**Refresh tree**</DNT>.
      </td>
    </tr>

    <tr>
      <td>
        Alterar a quantidade de informações exibidas
      </td>

      <td>
        Selecione as opções <DNT>**Expand**</DNT> ou <DNT>**Collapse**</DNT> acima da árvore de chamadas ou selecione o nome ou a seta em qualquer linha da árvore de chamadas.
      </td>
    </tr>

    <tr>
      <td>
        Visualize informações resumidas sobre qualquer linha na árvore de chamadas
      </td>

      <td>
        Passe o mouse sobre a linha.
      </td>
    </tr>

    <tr>
      <td>
        Enviar por e-mail os resultados do perfil da conversa para outras pessoas
      </td>

      <td>
        Selecione <DNT>**Share this profile**</DNT>.
      </td>
    </tr>

    <tr>
      <td>
        Inicie outra sessão ou visualize um perfil de tópico diferente
      </td>

      <td>
        Selecione <DNT>**Back to all profiles**</DNT>.
      </td>
    </tr>
  </tbody>
</table>

## Considerações do agente [#agent-requirements]

Dependendo de qual agente você usa, o recurso de criação de perfil de thread tem considerações adicionais.

<CollapserGroup>
  <Collapser
    id="java"
    title="Notas específicas de Java"
  >
    Ao usar a criação de perfil de encadeamento com o agente Java, esteja ciente do seguinte.

    <table>
      <thead>
        <tr>
          <th width={200}>
            <DNT>
              **Java agent**
            </DNT>
          </th>

          <th>
            <DNT>
              **Thread profiler notes**
            </DNT>
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            As configurações da árvore mostram apenas a categoria <DNT>**Other**</DNT>
          </td>

          <td>
            Todos os tópicos são colocados na categoria <DNT>**Other**</DNT> . As categorias <DNT>**Web Request**</DNT> e <DNT>**Background**</DNT> não são suportadas.
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>

  <Collapser
    id="net"
    title="Notas específicas do .NET"
  >
    Ao usar a criação de perfil de thread com o agente do .NET framework , esteja ciente do seguinte.

    <table>
      <thead>
        <tr>
          <th width={200}>
            <DNT>
              **.NET agent**
            </DNT>
          </th>

          <th>
            <DNT>
              **Thread profiler notes**
            </DNT>
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            Suportado em <DNT>**Linux**</DNT>
          </td>

          <td>
            A criação de perfil de thread em <DNT>**Linux**</DNT> é suportada no aplicativo .NET Core 3.0 ou posterior ao executar o agente .NET versão 8.23 ou posterior.
          </td>
        </tr>

        <tr>
          <td>
            Somente threads gerenciados
          </td>

          <td>
            Para o agente .NET, o thread profiler captura apenas o rastreamento de pilha em threads gerenciados. Ele não captura rastreamento de pilha em threads não gerenciados. Se ocorrer uma chamada para uma função não gerenciada em um encadeamento gerenciado, o profiler de encadeamento mostrará `Native:Function Call` na árvore de chamadas.
          </td>
        </tr>

        <tr>
          <td>
            Sem números de linha
          </td>

          <td>
            Um perfil de thread .NET não inclui números de linha na árvore de chamadas. A caixa de seleção <DNT>**Show line numbers**</DNT> nas configurações da árvore não tem nenhum efeito.
          </td>
        </tr>

        <tr>
          <td>
            Bug com .NET CLR v4.0 de 64 bits
          </td>

          <td>
            Há um bug no Common Language Runtime (CLR) do .NET versão 4.0 de 64 bits que interfere na capacidade do agente de recuperar o rastreamento de pilha gerenciado. Se seu aplicativo apresentar esse bug, o APM mostrará perfis de thread vazios. Este bug não afeta o aplicativo de 32 bits.

            O bug foi corrigido nas versões CLR para .NET 4.5. Para verificar se seu aplicativo de 64 bits tem a versão fixa, consulte a versão completa do `mscorlib.dll` no diretório <DNT>**C:\\Windows\\Microsoft.NET\\Framework64\\v4.0.30319**</DNT> . A correção está nas versões 4.0.30319.17379 ou superior.
          </td>
        </tr>

        <tr>
          <td>
            <DNT>**Other**</DNT> apenas categoria
          </td>

          <td>
            Todos os tópicos são colocados na categoria <DNT>**Other**</DNT> . As categorias <DNT>**Web Request**</DNT> e <DNT>**Background**</DNT> não são suportadas.
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>

  <Collapser
    id="agent-thread-profiling"
    title="Notas específicas do Python"
  >
    Ao usar a criação de perfil de thread com o agente Python, esteja ciente do seguinte.

    <table>
      <thead>
        <tr>
          <th width={200}>
            <DNT>
              **Python agent**
            </DNT>
          </th>

          <th>
            <DNT>
              **Thread profiler notes**
            </DNT>
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            Sistemas baseados em co-rotina
          </td>

          <td>
            Há limites para capturar detalhes quando um sistema baseado em co-rotina está sendo usado, como os modos gevent ou eventlet do gunicorn. Se estiver criando um novo thread, o agente Python criará, na verdade, um greenlet em vez de um thread profiler perfil de thread. Portanto, o thread profiler não capturará nenhuma solicitação da web e transação em segundo plano na página do thread profiler.
          </td>
        </tr>

        <tr>
          <td>
            Verduras
          </td>

          <td>
            Um greenlet pode ser executado somente quando outros greenlets cederem explicitamente o controle, como quando eles bloqueiam. Por exemplo, se o amostrador de threads for executado, ele apenas fará uma amostragem da stack para outros greenlets em um ponto onde eles estão bloqueados. Ele não irá amostrá-los quando estiverem executando código arbitrário. Ele pode perder completamente a execução dentro de um greenlet se nunca for bloqueado ou ceder a outro greenlet.
          </td>
        </tr>

        <tr>
          <td>
            Tempo no código Python
          </td>

          <td>
            O tempo gasto em código Python puro que não bloqueia solicitações não será coletado e nenhuma informação será registrada ou relatada. Isso ocorre porque os resultados são enganosos quando co-rotinas são usadas.
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>

  <Collapser
    id="ruby"
    title="Notas específicas de Ruby"
  >
    Ao usar a criação de perfil de thread com o agente Ruby, esteja ciente do seguinte.

    <table>
      <thead>
        <tr>
          <th width={200}>
            <DNT>
              **Ruby agent**
            </DNT>
          </th>

          <th>
            <DNT>
              **Thread profiler notes**
            </DNT>
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            Retrocessos
          </td>

          <td>
            O profiler de thread depende da capacidade de capturar backtraces de thread de dentro de seu aplicativo Ruby. Por esse motivo, requer <DNT>**CRuby 1.9.2 or higher**</DNT> (para o método `Thread#backtrace` ).
          </td>
        </tr>

        <tr>
          <td>
            Resque
          </td>

          <td>
            O agente Ruby atualmente não oferece suporte a perfis de thread com trabalhos em segundo plano do Resque. Uma sessão de criação de perfil de thread iniciada no Resque capturará apenas o rastreamento do processo pai, não dos processos de trabalho.
          </td>
        </tr>

        <tr>
          <td>
            JRuby
          </td>

          <td>
            O suporte JRuby é considerado experimental neste momento. Existem problemas conhecidos com a implementação `Thread#backtrace` do JRuby que afetarão a precisão e a confiabilidade dos backtraces coletados no JRuby.
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>
</CollapserGroup>
