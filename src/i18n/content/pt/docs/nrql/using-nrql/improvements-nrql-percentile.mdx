---
title: Improvements to NRQL percentile()
tags:
  - Query your data
  - 'NRQL: New Relic Query Language'
  - NRQL query tutorials
metaDescription: A closer look at how New Relic calculates percentile().
freshnessValidatedDate: never
translationType: machine
---

Na telemetria, o percentil é uma medida estatística importante com muitos aplicativos. No entanto, também representa um desafio para quem trabalha com grandes conjuntos de dados. Isso ocorre porque o método padrão para calcular o percentil também é tecnicamente “caro” devido à necessidade de classificar os dados.

A nova função `percentile()` funciona em conjuntos de dados arbitrariamente grandes, com custo mínimo. Também é excelente para distribuições de cauda longa. Sua relativa consistência de erro é garantida em todos os percentis de 0% a 100%.

Como usuário, você não precisa fazer nada para obter o novo algoritmo. Todas as suas chamadas `percentile()` são executadas automaticamente usando-o. Mas se você quiser saber mais sobre como a nova função `percentile()` foi desenvolvida e como ela é superior ao método usado anteriormente, continue lendo para se aprofundar nas mudanças e na lógica da New Relic.

## Tipos de erros e impactos nos dados relatados [#heading_name]

Até recentemente, a New Relic baseava-se no método descrito em [Quantiles over Data Streams: An Experimental Study](http://dimacs.rutgers.edu/%7Egraham/pubs/papers/nquantiles.pdf). Este método usa erro de classificação e, com o parâmetro New Relicaplicado, resulta em erro de classificação de 0,3%. Mas como o erro de classificação é calculado de forma diferente do erro relativo ou absoluto, isto significa que pode haver uma variação muito maior entre os valores reais e reportados do que seria desejável.

Para entender melhor o impacto dos diferentes tipos de erros, é útil examinar mais de perto os tipos de erros no contexto do cálculo do percentil `percentile(p) = x`. A tabela mostra como o tipo de erro afeta os limites inferior e superior do valor relatado.

<table>
  <thead>
    <tr>
      <th width={150}>
        <DNT>
          **Error type**
        </DNT>
      </th>

      <th>
        <DNT>
          **Lower bound of reported_x**
        </DNT>
      </th>

      <th>
        <DNT>
          **Upper bound of reported_x**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        erro absoluto
      </td>

      <td>
        actual_x - absolute_error
      </td>

      <td>
        actual_x + absolute_error
      </td>
    </tr>

    <tr>
      <td>
        erro relativo
      </td>

      <td>
        actual_x \* (1 - relative_error)
      </td>

      <td>
        actual_x \* (1 + relative_error)
      </td>
    </tr>

    <tr>
      <td>
        erro de classificação
      </td>

      <td>
        percentile \* (p - rank error)
      </td>

      <td>
        percentile \* (p + rank error)
      </td>
    </tr>
  </tbody>
</table>

Como você pode ver na tabela, para erro absoluto, o valor relatado está dentro da faixa de +/- do valor real, e para erro relativo, o valor relatado está dentro de +/- por cento do valor real.

O erro de classificação funciona de maneira um pouco diferente e é melhor descrito com um exemplo concreto: se você solicitar o 99º percentil de um conjunto de dados e o valor relatado for 500 com erro de classificação de 0,3%, significa que o valor relatado está dentro do intervalo de 98,7 e 99,3 percentil para o conjunto de dados.

Por que isso é importante? Porque, como o erro de classificação é calculado em relação ao percentil _p_ e não ao valor _x_, não há garantia de que o valor reportado estará particularmente próximo do valor real. Nas distribuições de telemetria de cauda longa, a diferença entre os valores reais e os reportados pode, na verdade, ser bastante grande. Por exemplo, quando o valor correspondente ao percentil 98,7 é 1.000, mas o valor correspondente ao percentil 99,3 é 2.000, qualquer valor relatado entre 1.000 e 2.000 atende à especificação de erro de classificação de 0,3%, criando uma margem de erro bastante grande.

Como você pode ver no exemplo, a precisão do método antigo depende de quanto o valor varia dentro do percentil. Embora este método seja normalmente adequado para a mediana (50%) e até 90%, muitas vezes é insuficiente para distribuição de cauda longa acima de 99%.

## Tornando os cálculos percentuais mais precisos

Em julho de 2020, New Relic lançou uma nova maneira de calcular `percentile()` que usa um algoritmo proprietário no que é conhecido como família de histogramas de largura igual em escala logarítmica. Como outros métodos desta família, ele fornece garantia relativa de erros.

O erro relativo típico do novo método para a maioria dos conjuntos de dados é de cerca de 3%. Isso significa que, independentemente do percentil solicitado ser 1%, 99% ou 99,99%, é garantido que o valor relatado esteja dentro de 3% do valor atual. Isto é particularmente bom para rastreamento de cauda longa. Não importa o percentual solicitado, o mesmo erro relativo de 3% é válido.

### Taxa de contraste e erro relativo

As taxas de contraste são calculadas dividindo o maior número no conjunto de dados de entrada pelo menor número diferente de zero no conjunto de dados de entrada. Se a entrada tiver números negativos, a taxa de contraste será calculada separadamente no conjunto de números positivos e nos valores absolutos do conjunto de números negativos. A taxa de contraste final é a maior entre a taxa de contraste dos números positivos e negativos. Quando o contraste do conjunto de dados é maior, o erro relativo também é maior.

Para controlar o quão “caros” os cálculos são em termos de manipulação de dados, o novo algoritmo limita o número de intervalos de histograma, com erro relativo em cerca de 3% para conjunto de dados dentro do intervalo de taxa de contraste de 1.000 a 1 milhão. Isso deve abranger casos de uso para a maioria dos clientes. A tabela abaixo mostra como os intervalos de contraste abaixo de 1.000 e acima de 1 milhão impactam o erro relativo e, em escala, a duração de tempo que uma taxa de contraste pode representar.

<table>
  <thead>
    <tr>
      <th width={250}>
        <DNT>
          **Contrast ratio**
        </DNT>
      </th>

      <th width={150}>
        <DNT>
          **Relative error**
        </DNT>
      </th>

      <th width={250}>
        <DNT>
          **Duration range example**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        32 a 1K
      </td>

      <td>
        1,5635%
      </td>

      <td>
        1 milissegundo a 1 segundo
      </td>
    </tr>

    <tr>
      <td>
        1K a 1M
      </td>

      <td>
        3,125%
      </td>

      <td>
        1 milissegundo a 16 minutos
      </td>
    </tr>

    <tr>
      <td>
        1M a 1T (2^40, cerca de 10^12)
      </td>

      <td>
        6,25%
      </td>

      <td>
        1 milissegundo a 31 anos
      </td>
    </tr>

    <tr>
      <td>
        1T a 2 ^ 80 (cerca de 10 ^ 24)
      </td>

      <td>
        12,5%
      </td>

      <td>
        1 nanossegundo a 31 milhões de anos
      </td>
    </tr>
  </tbody>
</table>

### Números negativos e zero

O novo método cobre qualquer mistura de números positivos, zero e números negativos. O erro relativo para números negativos é definido com base em valores absolutos. Zero é excluído no cálculo de contraste.

### Medição estável

O novo método retorna medições estáveis. Quando as alterações no conjunto de dados medidos estão dentro da margem de erro, o método retorna o mesmo número. Isto fornece um sinal claro ao usuário: se o número não mudar, não haverá mudança mensurável. Se o número mudar, há uma mudança mensurável.

Em comparação, o método antigo pode retornar um número diferente mesmo quando não há alteração estatisticamente significativa no conjunto de dados. A responsabilidade recai sobre o usuário para determinar se a diferença nos números retornados representa uma mudança mensurável. Uma mudança é significativa somente quando a diferença é maior que a margem de erro.

## Visualizando erro relativo

O erro relativo de uma chamada `percentile()` é retornado nos resultados JSON da consulta NRQL por meio do campo `relativeError`. Se você estiver utilizando uma interface gráfica, será necessário mudar para o formato JSON para ver os metadados dos resultados.

Aqui está um exemplo de metadados de resultados mostrando um erro relativo de 3,125%.

```json
"contents": [
{
  "function": "percentile",
  "attribute": "wallClockTime",
  "relativeError": 0.03125,
  "thresholds": [
    50,
    99
  ]
}
```

## Verificação de resultados

Para verificar a precisão do novo método, você pode executar a função `histogram()` NRQL para obter uma visão geral da distribuição. Olhando para o histograma, você pode dizer se um percentil relatado faz sentido. Por exemplo, você pode estimar visualmente se a população acima do percentil de 99% relatado está próxima do 1% esperado. Tenha cuidado ao executar uma consulta de percentil em um conjunto de dados com atributo _nulo_ . Estas linhas _nulas_ são ignoradas pela função percentil, mas contadas na população total na função percentual. Qualquer filtro `where` na consulta de percentil também deve ser copiado na consulta de validação.

Para verificação precisa de um valor percentil e seu erro relativo, você pode usar o método a seguir (assumindo números positivos).

Seja o valor relatado _r_ e o valor verdadeiro seja _t_. Então o erro relativo _e_ pode ser definido como:

```
e = absolute(r - t) / t
```

Usando a fórmula acima, podemos expressar o intervalo de _r_ usando _t e_, em seguida, expressar o intervalo de _t_ usando _r_ conforme abaixo:

```
r > t * (1 - e) => t < r / (1 - e)

r < t * (1 + e) => t > r / (1 + e)
```

Usando _r_ e _e_ relatados em uma consulta de percentil, podemos calcular os limites inferior e superior de _t_, usando uma consulta `percentage()` como abaixo. Isso é possível porque a função `percentage()` não usa aproximação. Ele sempre retorna o resultado exato.

```sql
FROM myEventType SELECT percentage(count(*), where wallClockTime < 188 / (1 + 0.03125)) 
AS 'lower', percentage(count(*), WHERE wallClockTime < 188 / (1 - .03125)) AS 'upper' 
WHERE wallClockTime is not null
```

Neste exemplo, 188 é o percentil relatado de `wallClockTime` em 90%. O erro relativo é 0,03125. O resultado da consulta retornado é:

```
lower: 89.54, upper: 90.23
```

O resultado mostra que 90% realmente está dentro da faixa. Ou seja, o percentil de 90% solicitado está dentro da margem de erro. Isso verifica a precisão do valor relatado.

<Callout variant="tip">
  O mesmo algoritmo é utilizado para a distribuição tipo métrica em [evento para serviço métrico](/docs/accounts/accounts/data-management/events-metrics-create-metrics). Portanto, quer você esteja consultando evento diretamente ou via métrica de distribuição, seus resultados serão igualmente precisos.
</Callout>
