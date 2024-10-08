---
title: Práticas recomendadas para monitoramento de rede
tags:
  - Network monitoring
  - Best practices
metaDescription: Review best practices for network monitoring.
freshnessValidatedDate: '2024-01-18T00:00:00.000Z'
translationType: machine
---

No Monitoramento de rede, New Relic utiliza agente para coletar dados de telemetria da rede, que podem ser usados para monitor o desempenho da rede, identificar gargalos e solucionar problemas. Aprenda práticas recomendadas para implantar o Monitoramento de rede agente com base em seu sistema arquitetura e implantação.

## Considerações de implantação [#deployment-considerations]

Este guia faz referência a uma arquitetura de rede comum com os seguintes requisitos:

* Pesquisa SNMP e coleta de Traps SNMP.
* Coleta de syslog de dispositivos de rede.
* Coleta de fluxo de rede nos protocolos NetFlow v5, NetFlow v9, IPFIX e sFlow.
* Suporte para vários sites separados por uma distância geograficamente grande.

## Considerações arquitetônicas [#architectural-considerations]

### A tarefa de um agente

As tarefas do agente individual determinarão o desenho da sua implantação na rede. Aqui estão algumas regras básicas a seguir:

* O agente que coleta dados SNMP também pode receber traps SNMP por padrão.
* Agente que recebe dados do Syslog deve ser executado por conta própria.
* O agente que recebe dados de fluxo de rede pode precisar ser isolado com base no tipo de modelo de fluxo que está sendo coletado.

### Agente de Fluxo de Rede e Syslog [#network-flow-and-syslog-agents]

Ao usar o agente Network Flow e Syslog, você não precisa de um arquivo de configuração customizado. As configurações padrão do agente funcionarão bem porque todas as configurações do agente são passadas em tempo de execução por meio de sinalizadores.

Porém, se você não fornecer um arquivo de configuração com entradas na seção de dispositivos, os resultados enviados para New Relic API usarão um [`device_name`](/docs/network-performance-monitoring/advanced/advanced-config/#snmp-base-yml-template) resolvido via DNS a partir do endereço IP no respectivo pacote. Você pode fornecer um local de servidor DNS personalizado em tempo de execução, mas para ter controle total com tag, você deve fornecer suas próprias entradas na seção de dispositivos com a configuração [`flow_only`](/docs/network-performance-monitoring/advanced/advanced-config/#flow_only-attribute) definida como `true`. Isso é o que o administrador geralmente deseja fazer para que o nome enviado para New Relic API se alinhe com o nome enviado pela pesquisa SNMP do mesmo dispositivo.

### Geografia [#geography]

Devido ao rebaixamento de sua prioridade nas redes modernas, os protocolos SNMP e ICMP (ping) podem ser afetados pela latência estendida nos tempos de ida e volta. Para evitar cenários de polling com falha devido a tempos limite, o agente deve ser criado próximo aos seus dispositivos de destino.

### Escala computacional [#compute-scale]

Agentes individuais geralmente são hospedados em hosts muito pequenos e possuem requisitos mínimos, conforme descrito em [Requisitos de contêiner do KTranslate](/docs/network-performance-monitoring/advanced/ktranslate-container-management/#container-requirements). No entanto, em cenários de sondagem intensa, pode ser necessário dimensionar a CPU do host. O principal motivo para escalar para um espaço de CPU maior para um agente é a quantidade de carga apresentada à tarefa. Nessas situações, normalmente é melhor executar vários agentes para balancear a carga em vez de aumentar o tamanho total do seu host, o que tem implicações de custo.

### Exemplo de arquitetura comum [#common-architecture]

<SideBySide>
  <Side>
    Este diagrama reflete um exemplo de arquitetura de rede com o seguinte:

    * Cada localização geográfica tem seu próprio agente local usado para coletar e encaminhar dados para New Relic:

      * <DNT>
          **DC_01 (AMER)**
        </DNT>

        :

        * Três agentes em um host atendendo o local DC_01 na cidade de Nova York.

        * Polling SNMP do processo de contêiner, coleta NetFlow v5 e coleta Syslog

        * <DNT>
            **Consideration**
          </DNT>

          : Este host contém uma sub-rede privada Classe B (/16). Para garantir que o trabalho tenha tempo para ser concluído, o destino da descoberta deve ser dividido em tamanhos de sub-rede gerenciáveis.

      * <DNT>
          **OFFICE_01 (APJ)**
        </DNT>

        :

        * Um agente em um host atendendo no local OFFICE_01 em Sydney, Austrália.
        * O contêiner processa sondagem SNMP e coleta de armadilhas SNMP com descoberta em uma sub-rede /24.

      * <DNT>
          **DC_02 (EMEA)**
        </DNT>

        :

        * Três agentes em um host atendendo o local DC_02 em Dublin, Irlanda.

        * Processo de contêiner NetFlow v9, IPFIX e coleção sFlow, cada um visando uma porta de escuta diferente no host.

        * <DNT>
            **Consideration**
          </DNT>

          : esse host possui uma sub-rede privada Classe A ainda maior (/8), mas não há necessidade de dimensionar as tarefas, pois não há necessidade de descoberta neste local. Dependendo dos fluxos por segundo, pode haver necessidade de escalar horizontalmente para um agente adicional no futuro.
  </Side>

  <Side>
    <img
      title="Common network architecture diagram"
      alt="Diagram to visualize common network architecture"
      src="/images/network_diagram_common-architecture.webp"
      width="80%"
      height="80%"
    />
  </Side>
</SideBySide>

## Mantendo sua implantação [#maintaining-deployment]

Após a instalação inicial, a pegada do Monitoramento de rede observabilidade pode ser mantida usando diversas técnicas. Isso inclui a integração de alterações no arquivo de configuração com ferramentas como Ansible e a construção de pipelines GitOps em torno da arquitetura para oferecer suporte ao controle de versão e opções de "convidado" onde equipes externas podem enviar alterações para revisão.

A necessidade mais comum de manutenção contínua é manter precisa a lista de dispositivos de destino. Isso pode ser feito usando três métodos principais de descoberta:

<Tabs>
  <TabsBar>
    <TabsBarItem id="auto-discovery">
      Descoberta automática
    </TabsBarItem>

    <TabsBarItem id="man-discovery">
      Descoberta manual
    </TabsBarItem>

    <TabsBarItem id="man-device-add">
      Adição manual de dispositivo
    </TabsBarItem>
  </TabsBar>

  <TabsPages>
    <TabsPageItem id="auto-discovery">
      A descoberta automática é o processo usado pelo agente KTranslate para verificar uma lista de destino de endereços IP e/ou intervalos, realizar uma investigação de atividade e, em seguida, executar uma caminhada SNMP básica do MIB do sistema MIB-2 para tentar combinar o dispositivo com um conhecido. Perfil SNMP.

      O agente incorporou sinalizadores de tempo de execução do agente (`-snmp_discovery_min` e `-snmp_discovery_on_start`) que permitem criar um agendamento de evento recorrente de descoberta SNMP. Isso automatiza os trabalhos de descoberta no destino da seção `discovery` no arquivo de configuração e, em seguida, atualiza automaticamente o arquivo com novos dispositivos e atualiza o serviço para aceitar as alterações.

      ### Prós

      * Descoberta automática para intervalos de IP conhecidos e strings de comunidade SNMP.

      * Correlação automatizada com o perfil SNMP adequado para cada dispositivo.

      * Existem mecanismos de segurança para evitar configurações inadequadas que possam danificar seu arquivo de configuração.

        ### Contras

      * Requer uma lista de destino pré-existente de endereços IP e strings de comunidade SNMP/autenticação V3 na seção `discovery` do arquivo de configuração.

      * Sub-redes grandes correm o risco de atingir o tempo limite (recomendamos /16 e menores).

      * As equipes que usam `user_tags` específicas do dispositivo em seus arquivos de configuração terão trabalho extra para garantir que novos dispositivos tenham suas tags atualizadas.

        ### Exemplo

        Este é o padrão de configuração nativo encontrado se você seguir a instalação guiada pela interface do New Relic :

        ```yml
        devices: {}
        trap:
          listen: '0.0.0.0:1620'
        discovery:
          cidrs:
              - 192.168.0.0/24
          ignore_list: []
          debug: false
          ports:
              - 161
          default_communities:
              - public
          default_v3: null
          add_devices: true
          add_mibs: true
          threads: 4
          replace_devices: true
          check_all_ips: true
          use_snmp_v1: false
        global:
          poll_time_sec: 300
          mib_profile_dir: /etc/ktranslate/profiles
          mibs_enabled:
              - IF-MIB
          timeout_ms: 3000
          retries: 0
        ```

        Seu comando Docker run associado ficaria assim, substituindo `$UNIQUE_NAME`, `$YOUR_NR_LICENSE_KEY` e `$YOUR_NR_ACCOUNT_ID`:

        ```shell
        docker run -d --name ktranslate-$UNIQUE_NAME --restart unless-stopped --pull=always -p 162:1620/udp \
          -v `pwd`/snmp-base.yaml:/snmp-base.yaml \
          -e NEW_RELIC_API_KEY=$YOUR_NR_LICENSE_KEY \
        kentik/ktranslate:v2 \
          -snmp /snmp-base.yaml \
          -nr_account_id=$YOUR_NR_ACCOUNT_ID \
          -metrics=jchf \
          -tee_logs=true \
          -service_name=$UNIQUE_NAME \
          -snmp_discovery_on_start=true \
          -snmp_discovery_min=180 \
          nr1.snmp
        ```
    </TabsPageItem>

    <TabsPageItem id="man-discovery">
      A descoberta manual usa o mesmo mecanismo da descoberta automatizada, mas oferece mais controle. Com a descoberta manual, você pode executar um agente ad hoc personalizado, o que significa que você pode executá-lo sempre que quiser e pode revisar e manipular os resultados conforme necessário. Este é o método preferido para ambientes onde a etiqueta é predominante ou onde há uma boa quantidade de controle de uma equipe centralizada adicionando novos dispositivos à rede. Isso reduz a necessidade de verificação completa da sub-rede, o que pode ser demorado e perturbador.

      ### Prós

      * Controle total sobre destino e resultados, incluindo decoração tag .

      * Ajuda a evitar possíveis dispositivos que não estão no escopo do seu monitoramento.

      * Correlação automatizada com o perfil SNMP adequado para cada dispositivo.

      * Existem mecanismos de segurança para evitar configurações inadequadas que possam danificar seu arquivo de configuração.

        ### Contras

      * Um administrador deve executar o agente sob demanda e no mesmo host em que seu agente de produção é executado para garantir que a conectividade de rede/SNMP seja testada corretamente.

      * Mover os resultados da descoberta para o arquivo de configuração de produção é um processo manual que requer a reinicialização do agente de produção para carregar as novas configurações.

        ### Exemplo

        Este método de descoberta segue a opção de implantação original do agente KTranslate. Em um nível superior, o processo de descoberta é:

      1. Extraia a versão mais recente da imagem do agente para sua máquina local.
      2. Copie o arquivo de configuração `snmp-base.yaml` de amostra da imagem para sua máquina local.
      3. Edite o arquivo de configuração para atualizar a seção `discovery` com as configurações necessárias para `cidrs` e `default_communities`.
      4. Lançar um agente de curta duração executando um trabalho de descoberta ad hoc.
      5. Edite quaisquer alterações necessárias nos dispositivos resultantes em seu arquivo de configuração.
      6. Copie os novos dispositivos do arquivo de configuração de descoberta para o arquivo de configuração do agente de produção.
      7. Reinicie seu agente de produção para carregar as novas configurações.

         Para usar esse método, siga as etapas em [Configuração manual do contêiner](/docs/network-performance-monitoring/setup-performance-monitoring/snmp-performance-monitoring/#manual-container-setup).
    </TabsPageItem>

    <TabsPageItem id="man-device-add">
      A última opção é pular todo o processo de descoberta e adicionar dispositivos manualmente diretamente no arquivo de configuração de produção. Na prática, é bastante raro ver esse padrão em uso, pois as opções de descoberta padrão combinam automaticamente os dispositivos com seus perfis e garantem que seu arquivo de configuração esteja formatado corretamente.

      ### Prós

      * Controle total sobre a configuração dos dispositivos e suas decorações tag .

        ### Contras

      * Risco médio de configuração incorreta nas configurações. Este método requer que você conheça o identificador de objeto do sistema (SysOID) do dispositivo, bem como entenda o perfil que o dispositivo destinaria para que você possa identificar quais MIBs deseja ativar (tudo isso é automatizado na descoberta).

      * Ainda requer a reinicialização do agente de produção para carregar as novas configurações.

        ### Exemplo

        Aqui está um exemplo das configurações do dispositivo necessárias para monitor com êxito um UPS APC:

        ```yml
        devices:
          ups_snmpv2c__10.10.0.201:
            device_name: ups_snmpv2c
            device_ip: 10.10.0.201
            snmp_comm: public
            oid: .1.3.6.1.4.1.318.1.3.27
            mib_profile: apc_ups.yml
            provider: kentik-ups
            user_tags:
              owning_team: dc_ops
        ...
        global:
        ...
          mibs_enabled:
            - IF-MIB
            - PowerNet-MIB_UPS
            - UPS-MIB
        ```

        <Callout variant="important">
          `global.mibs_enabled` deve ser atualizado para iniciar a votação de um MIB. Ao adicionar dispositivos, você precisa garantir que essa configuração seja atualizada com uma lista de nomes MIB distintos encontrados nos [perfis SNMP associados](https://github.com/kentik/snmp-profiles/tree/main/profiles/kentik_snmp).
        </Callout>

        As configurações necessárias estão descritas detalhadamente em nossa documentação para [dispositivos](/docs/network-performance-monitoring/advanced/advanced-config/#devices) e [blocos globais](/docs/network-performance-monitoring/advanced/advanced-config/#global).
    </TabsPageItem>
  </TabsPages>
</Tabs>
