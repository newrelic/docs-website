---
title: 'Estrutura PHP: Integrar suporte para New Relic'
tags:
  - Agents
  - PHP agent
  - Frameworks and libraries
metaDescription: An overview of what New Relic is and what developers or maintainers of PHP frameworks need to do in order to integrate support for New Relic.
freshnessValidatedDate: never
translationType: machine
---

Este documento é o AI Monitoring para desenvolvedores ou mantenedores do framework PHP. Ele sugere maneiras de estender sua framework adicionando suporte para New Relic.

O agente PHP oferece suporte ao framework descobrindo onde no framework o código de transação da web pode ser nomeado apropriadamente e nomeando a transação da web com base nas informações encontradas na classe, chamada de função, etc. Esta solução é frágil e está sujeita a alterações de código pelos desenvolvedores. A New Relic incentiva os desenvolvedores framework a fazerem as poucas chamadas necessárias para melhorar a experiência do usuário pronta para uso com o framework que eles mantêm.

## Ajude seu usuário [#frameworks]

A New Relic pode identificar o nome da transação da web e onde inserir cabeçalhos e rodapés JavaScript para <InlinePopover type="browser"/>da New Relic. Porém, para melhorar a experiência do usuário final, aumentar o desempenho e facilitar a manutenção do código, os desenvolvedores framework devem fazer esse trabalho sozinhos.

Cabe aos desenvolvedores dos diversos frameworks decidir se desejam ajudar seu usuário adicionando suporte nativo ao New Relic. Em quase todos os casos, adicionar suporte para New Relic envolve inserir três chamadas de API em algum lugar do código framework .

## Terminologia

Para entender a melhor forma de adicionar suporte ao New Relic, é útil entender alguns dos principais pontos de interação.

<table>
  <thead>
    <tr>
      <th width={150}>
        <DNT>
          **Term**
        </DNT>
      </th>

      <th>
        <DNT>
          **Definition**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        <DNT>
          **Web transactions**
        </DNT>
      </td>

      <td>
        <DNT>**Web transactions**</DNT> são solicitações de recursos (ou acessos de usuários) ao seu site. Com o framework, isso geralmente é tratado por um mecanismo de despacho MVC.
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **Metrics**
        </DNT>
      </td>

      <td>
        <DNT>**Metrics**</DNT> são denominadas entidades que reportam informações de tempo. A New Relic usa essas métricas para gerar gráficos e páginas, como a [página APM <DNT>**Summary**</DNT> ](/docs/apm/applications-menu/monitoring/apm-overview-page). Por exemplo, o instrumento New Relic chama o MySQL e gera uma métrica chamada `Database/select` ou `Database/update` sempre que um usuário seleciona ou atualiza dados.

        Métrica contém apenas dados de tempo.
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **Transaction traces**
        </DNT>
      </td>

      <td>
        Durante cada período de colheita, a New Relic registra a transação da web mais lenta que fica abaixo de um limite definido pelo usuário. Este é um <DNT>**transaction trace**</DNT>.

        Tem mais detalhes do que uma simples métrica. Se ativado, incluirá um gráfico de chamada detalhado de exatamente quais funções foram chamadas e quanto tempo demoraram. Para instruções de consulta lenta, ofusca todos os dados da chamada.
      </td>
    </tr>
  </tbody>
</table>

## Nome transação [#dev]

O modo como você nomeia sua transação da web afetará a qualidade da experiência do usuário.

<Callout variant="important">
  Não use colchetes `[suffix]` no final do nome da sua transação. O New Relic remove automaticamente os colchetes do nome. Em vez disso, use parênteses `(suffix)` ou outros símbolos, se necessário.
</Callout>

<DNT>
  **Examples:**
</DNT>

Se você tiver uma framework estilo blog, você nomearia as diversas transações com base na atividade do usuário: `display`, `edit`, `login`, etc.

Se você usar uma arquitetura MVC, uma convenção de nomenclatura apropriada será `controller/action`. **Não** inclua nenhum dado específico da solicitação no nome da transação. Por exemplo, usar o URL de solicitação real leva a [problemas de agrupamento métrico](/docs/features/metric-grouping-issues).

<table>
  <thead>
    <tr>
      <th width={150}>
        <DNT>
          **Platform**
        </DNT>
      </th>

      <th>
        <DNT>
          **Transaction naming example**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        <DNT>
          **Drupal 7**
        </DNT>
      </td>

      <td>
        O despacho é feito em `menu_execute_active_handler()`. Isso chama `call_user_func_array()`, sendo o primeiro argumento o nome da ação. Isso é o que definir como nome da transação da web.
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **CakePHP 1.3**
        </DNT>
      </td>

      <td>
        CakePHP tem uma classe `Dispatcher` com um método `_invoke` . Isso chama a classe de controlador apropriada com uma determinada ação, e a transação é denominada `controller/action` onde `controller` é o nome da classe de controlador.
      </td>
    </tr>
  </tbody>
</table>

No ponto em que você deseja rotear o código para um controlador e ação específicos (se estiver usando MVC) ou para uma ação (se não estiver usando MVC), insira um código semelhante a este:

<DNT>**Controller and action**</DNT> (ao usar MVC):

```php
if (extension_loaded ('newrelic')) {
    newrelic_name_transaction ($controller . '/' . $action);
}
```

<DNT>**Action only**</DNT> (não usando MVC):

```php
if (extension_loaded ('newrelic')) {
    newrelic_name_transaction ($action);
}
```

## Insira o cabeçalho e rodapé JavaScript [#page-load-timing]

Para o tempo de carregamento da página (às vezes chamado de monitoramento de usuário real ou RUM), insira o cabeçalho e o rodapé JavaScript. Isso permite monitor a experiência do usuário final da página gerada.

* Recomendação: Se o seu framework possui uma função central que gera todos os cabeçalhos e rodapés das páginas, instale o código JavaScript aqui.
* Para estruturas baseadas em modelos, insira-as em seus modelos de cabeçalho e rodapé.

<CollapserGroup>
  <Collapser
    id="page-generator"
    title="Inserir em uma função geradora de página"
  >
    O cabeçalho <DNT>**must**</DNT> deve ser inserido o mais próximo possível do topo da página gerada. Imediatamente após a tag `<meta http-equiv....>` está o local ideal. Deve preceder <DNT>**any**</DNT> folhas de estilo JavaScript, CSS ou outro conteúdo vinculado ou incorporado.

    ```php
    if (extension_loaded ('newrelic')) {
        echo newrelic_get_browser_timing_header();
    }
    ```

    `newrelic_get_browser_timing_header()` recebe um argumento `bool` opcional cujo padrão é <DNT>**true**</DNT>. Indica se a string retornada deve ou não ser delimitada pela tag script.

    Recomendação: insira o rodapé imediatamente antes da tag de fechamento da página `</body>` como o último item na página gerada.

    ```php
    if (extension_loaded ('newrelic')) {
        echo newrelic_get_browser_timing_footer();
    }
    ```

    `newrelic_get_browser_timing_footer()` usa um `bool` opcional cujo padrão é <DNT>**true**</DNT>. Indica se a string retornada deve ou não ser delimitada pela tag script.
  </Collapser>

  <Collapser
    id="template"
    title="Inserir em modelos"
  >
    Use este modelo de cabeçalho como exemplo:

    ```php
    <?php if (extension_loaded ('newrelic')) {
        echo newrelic_get_browser_timing_header();
    } ?>
    ```

    Use este modelo de rodapé como exemplo:

    ```php
    <?php if (extension_loaded ('newrelic')) {
        echo newrelic_get_browser_timing_footer();
    } ?>
    ```
  </Collapser>
</CollapserGroup>
