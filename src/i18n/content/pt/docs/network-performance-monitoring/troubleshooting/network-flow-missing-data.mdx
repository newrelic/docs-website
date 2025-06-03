---
title: Faltam dados na coleta de fluxo de rede
tags:
  - Integrations
  - Network monitoring
  - Troubleshooting
metaDescription: Troubleshooting collection issues for network flows.
freshnessValidatedDate: '2023-11-02T00:00:00.000Z'
translationType: machine
---

## Problema [#problem]

Após a instalação do agente `ktranslate` Monitoramento de rede, você está tendo problemas para coletar telemetria de fluxo de rede.

## Fundo [#background]

`ktranslate` retorna a telemetria de fluxo bruto coletada, sem editar nenhuma carga útil do pacote. Existem [vários tipos de fluxo](/docs/network-performance-monitoring/setup-performance-monitoring/network-flow-monitoring/#supported-network-flow-data-types) com suporte imediato, sendo os mais proeminentes [NetFlow v5](https://www.cisco.com/c/en/us/td/docs/net_mgmt/netflow_collection_engine/3-6/user/guide/format.html), [NetFlow v9](https://datatracker.ietf.org/doc/html/rfc3954), [sFlow](https://sflow.org/sflow_version_5.txt) e [IPFIX](https://datatracker.ietf.org/doc/html/rfc7011).

<SideBySide>
  <Side>
    Toda a telemetria de fluxo da rede é armazenada no [tipo de evento KFlow](/docs/network-performance-monitoring/setup-performance-monitoring/network-flow-monitoring/#find-your-metrics). Você pode consultar isso diretamente no NRQL. Se este tipo de evento estiver ausente, isso indica que sua conta não está recebendo os dados.
  </Side>

  <Side>
    ```sql
    FROM KFlow 
    SELECT *
    ```
  </Side>
</SideBySide>

## Solução [#solution]

<CollapserGroup>
  <Collapser
    id="ktranslate-configuration"
    title="Configuração de fluxo no seu agente de monitoramento de rede"
  >
    O agente `ktranslate` só pode coletar um tipo de modelo de fluxo configurado pelo argumento [-nf.source](/docs/network-performance-monitoring/advanced/ktranslate-container-management/#container-runtime-options) no tempo de execução, cujo padrão é `auto`. Isso diz `ktranslate` para esperar quaisquer modelos de `NetFlow v5` \| `NetFlow v9` \| `sFlow` \| `IPFIX` para que possa traduzir os pacotes. Um problema comum é configurar `ktranslate` para escutar um tipo específico de modelo de fluxo e depois exportar outro tipo para o agente. Você precisa executar contêineres separados para quaisquer modelos não cobertos por `auto`.

    Outro erro comum aqui é exportar sua telemetria de fluxo para um agente `ktranslate` , ao mesmo tempo em que direciona várias portas como destino. Neste cenário, você precisa executar vários agentes `ktranslate` , com cada um definido com um valor diferente para [-nf.port](/docs/network-performance-monitoring/advanced/ktranslate-container-management/#container-runtime-options) no tempo de execução (o padrão é `9995`). Também pode ser necessário atualizar a configuração do exportador de fluxo nos dispositivos de rede de origem para destino à porta específica.
  </Collapser>

  <Collapser
    id="device-configuration"
    title="Configuração de fluxo no seu dispositivo de rede"
  >
    Cada fornecedor terá sua própria documentação sobre como configurar adequadamente seus dispositivos para exportação de fluxos de rede. As versões mais avançadas como `NetFlow v9`, `IPFIX` e `sFlow` possuem opções que permitem ao administrador personalizar os campos que estão sendo coletados e exportados. Editá-los pode desativar efetivamente a capacidade de processar corretamente os registros de fluxo por `ktranslate`.

    Os seguintes campos são <DNT>**required**</DNT>:

    <CollapserGroup>
      <Collapser
        id="required-record-group"
        title="Obrigatório para todos os registros"
      >
        * Protocolo (Número do tipo de campo: `4`) - Protocolo da camada 4
        * Endereço de origem (Número do tipo de campo: `8`, `27`) - Endereço IPv4 ou IPv6 de origem
        * Porta de origem (Número do tipo de campo: `7`) - Porta TCP/UDP de origem
        * Endereço de destino (Número do tipo de campo: `12`, `28`) - Endereço IPv4 ou IPv6 de destino
        * Porta de destino (Número do tipo de campo: `11`) - Porta TCP/UDP de destino
      </Collapser>

      <Collapser
        id="required-interfaces-group"
        title="Campos de interfaces obrigatórios (pelo menos um)"
      >
        * Interface Receive (Field Type Number: `10`) - Índice SNMP para interface de entrada
        * Interface Transmit (Field Type Number: `14`) - Índice SNMP para interface de saída
      </Collapser>

      <Collapser
        id="required-bytes-group"
        title="Campos de bytes obrigatórios (pelo menos um)"
      >
        * Delta Bytes (Número do tipo de campo: `1`) - Delta bytes
        * Total de bytes (Número do tipo de campo: `85`) - Total de bytes
        * Bytes de saída (Número do tipo de campo: `23`) - Bytes de saída
        * Octetos do iniciador (Número do tipo de campo: `231`) - Bytes do iniciador
        * Octetos de resposta (Número do tipo de campo: `232`) - Bytes de resposta
      </Collapser>

      <Collapser
        id="required-packets-group"
        title="Campos de pacotes obrigatórios (pelo menos um)"
      >
        * Pacotes Delta (Número do tipo de campo: `2`) - Pacotes Delta
        * Total de pacotes (Número do tipo de campo: `86`) - Total de pacotes
        * Pacotes de saída (Número do tipo de campo: `24`) - Pacotes de saída
        * Pacotes iniciadores (Número do tipo de campo: `298`) - Pacotes iniciadores
        * Pacotes de resposta (Número do tipo de campo: `299`) - Pacotes de resposta
      </Collapser>

      <Collapser
        id="required-routing-group"
        title="Campos de roteamento obrigatórios (pelo menos um)"
      >
        * ToS (Número do tipo de campo: `5`) - Tipo de serviço
        * Source AS (Field Type Number: `16`) - Número do sistema autônomo BGP de origem
        * Destination AS (Field Type Number: `17`) - Número do sistema autônomo BGP de destino
        * Peer Source AS (Field Type Number: `129`) - Número do sistema autônomo BGP de origem peer
        * Peer Destination AS (Field Type Number: `128`) - Número do sistema autônomo BGP de destino do peer
      </Collapser>

      <Callout variant="tip">
        `ktranslate` padroniza todos os registros de fluxo como `Direction: ingress` , a menos que o registro use explicitamente um valor de `egress`. Isso abrange diversas situações em que os registros de fluxo são enviados sem o campo `Direction` .
      </Callout>
    </CollapserGroup>
  </Collapser>

  <Collapser
    id="tcpdump-confirmation"
    title="Confirmando recepção de fluxo"
  >
    Cada fornecedor terá sua própria documentação sobre como observar os contadores de exportação de fluxo por meio da CLI/interface do dispositivo. A falta de crescimento do contador no dispositivo indica que a exportação de fluxo não está configurada corretamente no dispositivo.

    Tanto as opções de implantação do Docker contêiner quanto do serviço Linux para `ktranslate` utilizam a rede do host para receber dados na porta mapeada. Para validar que os registros de fluxo estão sendo recebidos pelo host, você pode usar o utilitário [tcpdump](https://www.tcpdump.org) para criar um arquivo de captura de pacotes (`.pcap`) que poderá investigar posteriormente no [Wireshark](https://www.wireshark.org/).

    A execução deste comando configurará `tcpdump` para capturar todos os pacotes recebidos em todas as interfaces do host e gravar a saída em um arquivo no diretório atual:

    ```shell
    sudo tcpdump -s 0 -i any -w dump_capture.pcap
    ```

    Observe que você pode adicionar vários argumentos ao [tcpdump](https://www.tcpdump.org/manpages/tcpdump.1.html), o item mais importante aqui é o arquivo de saída que você pode usar para análise posterior. A saída dos resultados em `STDOUT` cria um valor limitado para os propósitos atuais.

    Depois de ter esse arquivo, a próxima seção mostrará como analisar os resultados.

    <Callout variant="tip">
      Um dos problemas mais comuns encontrados é uma regra de configuração de rede/firewall que bloqueia os pacotes dos dispositivos de rede de origem para o host `ktranslate` de destino. Se você não estiver obtendo nenhum resultado com o utilitário `tcpdump` , o melhor lugar para começar a resolução de problemas é confirmar as regras de rede e a configuração do `iptables` .
    </Callout>
  </Collapser>

  <Collapser
    id="improperly-formatted-flow-records"
    title="Identificando modelos de registro de fluxo com Wireshark"
  >
    Siga estas etapas para usar [o Wireshark](https://www.wireshark.org/) para inspecionar o arquivo de captura de pacotes.

    <Steps>
      <Step>
        Inicie o aplicativo Wireshark e abra o arquivo de captura de pacotes
      </Step>

      <Step>
        A visualização inicial mostra todos os pacotes capturados, mas para análise de fluxo você precisará configurar o aplicativo para decodificá-los corretamente. Usando o menu, navegue até `Analyze > Decode As...`, que abre um novo pop-up.
      </Step>

      <Step>
        No pop-up, clique no ícone de adição (`+`) no canto inferior esquerdo, que adicionará uma nova linha ao painel. A opção inicial na coluna `Current` é `(none)`. Clique aqui para abrir um menu suspenso e selecione `CFLOW` para `NetFlow` e `IPFIX` ou `sFlow` para `sFlow` pacotes. Clique em `OK` no canto inferior direito para voltar à interface principal.

        <Callout variant="tip">
          Este menu está em ordem alfabética com distinção entre maiúsculas e minúsculas. A opção `sFlow` está no final da lista.
        </Callout>
      </Step>

      <Step>
        Na interface principal, você poderá ver o `CFLOW` \| `sFlow` pacotes agora identificando-os na coluna `Protocol` . Aplicar o filtro de exibição `(cflow or sflow)` isolará automaticamente os pacotes necessários de qualquer outra coisa que possa estar no arquivo de captura.

        As seções a seguir descrevem como inspecionar cada tipo de pacote.

        <CollapserGroup>
          <Collapser
            id="netflow-ipfix-analysis"
            title="Analisando pacotes NetFlow e IPFIX"
          >
            `NetFlow` e os protocolos `IPFIX` usam uma abordagem de modelo onde o administrador pode identificar quais campos coletar, a partir de uma lista de opções padrão. A análise desses pacotes é feita para garantir que os [campos obrigatórios](#device-configuration) para `ktranslate` estejam sendo capturados.

            Na interface principal do Wireshark, clique para selecionar um único pacote `CFLOW` e expanda a seção intitulada `FlowSet n`, onde `n` é um número inteiro que identifica um registro de fluxo único em um pacote. Em seguida, você expandirá o subgrupo `Flow n` para analisar os campos deste registro de fluxo.

            <Callout variant="tip">
              Você também pode clicar no link `Template Frame` no pacote para ser levado a um pacote capturado que contém o modelo para todos os fluxos deste dispositivo.
            </Callout>
          </Collapser>

          <Collapser
            id="sflow-analysis"
            title="Analisando pacotes sFlow"
          >
            Devido às diferenças de protocolo entre `sFlow` e os protocolos `NetFlow/IPFIX` mais tradicionais, há campos diferentes para analisar.

            Na interface principal do Wireshark, clique para selecionar um único pacote `sFlow` e expanda a seção intitulada `InMon sFlow`. Os seguintes campos devem estar presentes:

            <table>
              <thead>
                <tr>
                  <th style={{ width: "350px" }}>
                    Campo
                  </th>

                  <th>
                    Descrição
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>
                    Versão do datagrama
                  </td>

                  <td>
                    A versão deste pacote sFlow.
                  </td>
                </tr>

                <tr>
                  <td>
                    Tipo de endereço do agente
                  </td>

                  <td>
                    IPv4 (1) ou IPv6 (2)
                  </td>
                </tr>

                <tr>
                  <td>
                    Endereço do agente
                  </td>

                  <td>
                    Endereço IP do qual os fluxos estão sendo exportados. É aqui que você configura seu exportador de fluxo.
                  </td>
                </tr>

                <tr>
                  <td>
                    ID do subagente
                  </td>

                  <td>
                    No sFlow v5, você pode executar vários processos de exportação. Este é o seu identificador exclusivo.
                  </td>
                </tr>

                <tr>
                  <td>
                    Número sequencial
                  </td>

                  <td>
                    O número de pacotes sFlow enviados pelo dispositivo do agente.
                  </td>
                </tr>

                <tr>
                  <td>
                    SysUptime
                  </td>

                  <td>
                    Tempo desde a última reinicialização do dispositivo do agente.
                  </td>
                </tr>

                <tr>
                  <td>
                    NumSamples
                  </td>

                  <td>
                    A contagem de amostras sFlow contidas no pacote atual.
                  </td>
                </tr>
              </tbody>
            </table>

            A expansão de um subgrupo intitulado `Flow sample` mostrará estes campos adicionais:

            <table>
              <thead>
                <tr>
                  <th style={{ width: "350px" }}>
                    Campo
                  </th>

                  <th>
                    Descrição
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>
                    Empreendimento
                  </td>

                  <td>
                    Este campo anota a configuração corporativa personalizada do sFlow que o administrador pode ativar opcionalmente ao configurar suas exportações do sFlow. (`0` por padrão)
                  </td>
                </tr>

                <tr>
                  <td>
                    Tipo de amostra sFlow
                  </td>

                  <td>
                    Esta é a designação para o tipo de amostra usada quando uma empresa personaliza suas exportações sFlow. Você pode encontrar definições na [documentação do sFlow](http://www.sflow.org/developers/diagrams/sFlowV5Sample.pdf).
                  </td>
                </tr>

                <tr>
                  <td>
                    Comprimento da amostra
                  </td>

                  <td>
                    Comprimento da amostra, em bytes.
                  </td>
                </tr>

                <tr>
                  <td>
                    Número sequencial
                  </td>

                  <td>
                    O valor do contador é incrementado sempre que o agente coleta uma amostra.
                  </td>
                </tr>

                <tr>
                  <td>
                    Taxa de amostragem
                  </td>

                  <td>
                    1 em `X` pacotes são amostrados.
                  </td>
                </tr>

                <tr>
                  <td>
                    Conjunto de amostras
                  </td>

                  <td>
                    Total de pacotes possíveis que poderiam ter sido amostrados, incluindo os pacotes amostrados reais.
                  </td>
                </tr>

                <tr>
                  <td>
                    Pacotes descartados
                  </td>

                  <td>
                    Número de pacotes que foram descartados devido a restrições de recursos.
                  </td>
                </tr>

                <tr>
                  <td>
                    Interface de entrada
                  </td>

                  <td>
                    IfIndex SNMP da interface de onde o pacote chegou.
                  </td>
                </tr>

                <tr>
                  <td>
                    Registro de fluxo
                  </td>

                  <td>
                    Número de registros amostrados contidos nesta amostra.
                  </td>
                </tr>
              </tbody>
            </table>
          </Collapser>
        </CollapserGroup>
      </Step>
    </Steps>

    <Callout variant="tip">
      Esse mesmo padrão, sem a etapa `Decode as...` , pode ser aplicado para validar o recebimento de dados de syslog e de trap SNMP.
    </Callout>
  </Collapser>
</CollapserGroup>
